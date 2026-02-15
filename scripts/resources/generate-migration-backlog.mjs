#!/usr/bin/env node
// file: scripts/resources/generate-migration-backlog.mjs
// Generates MIGRATION_BACKLOG.md from content inventory
// Triages content for v1 → v2 migration with complexity analysis

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '../..');

// Load inventory
const inventoryPath = join(rootDir, 'docs/resources/CONTENT_INVENTORY.json');
const inventory = JSON.parse(readFileSync(inventoryPath, 'utf-8'));

// Complexity triage rules
function calculateComplexity(item) {
  const wordCount = item.wordCount?.body || 0;
  const headings = item.blocksSummary?.headings || {};
  const totalHeadings = (headings.h2 || 0) + (headings.h3 || 0);
  
  // Topics are special - they need content creation, not migration
  if (item.type === 'topic') {
    return 'content-creation';
  }
  
  // If already v2 with blocks, treat as simple (already migrated)
  if (item.contentVersion === 2 || item.hasBlocks) {
    return 'simple'; // Don't treat as minimal just because body is 0
  }
  
  // Zero or minimal content
  if (wordCount < 100) {
    return 'minimal';
  }
  
  // Simple: clear structure, under 1200 words
  if (wordCount < 1200 && totalHeadings >= 3) {
    return 'simple';
  }
  
  // Hard: long content, few headings (tangled), or many headings (complex)
  if (wordCount > 2500 || totalHeadings < 2 || totalHeadings > 20) {
    return 'hard';
  }
  
  // Medium: everything else (1200-2500 words, decent structure)
  return 'medium';
}

// Detect slug/title mismatches
function detectSlugTitleMismatch(item) {
  if (!item.slug || !item.title) return false;
  
  // Normalize for comparison
  const slugWords = item.slug.toLowerCase()
    .replace(/-/g, ' ')
    .split(' ')
    .filter(w => w.length > 3); // ignore short words
  
  const titleWords = item.title.toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 3);
  
  // Check if slug and title share at least one significant word
  const sharedWords = slugWords.filter(sw => 
    titleWords.some(tw => tw.includes(sw) || sw.includes(tw))
  );
  
  // Mismatch if less than 1/3 of slug words appear in title
  return sharedWords.length < Math.max(1, slugWords.length / 3);
}

// Determine migration status
function getMigrationStatus(item) {
  const complexity = calculateComplexity(item);
  
  // Topics need content creation
  if (complexity === 'content-creation') {
    return 'needs-content';
  }
  
  // Minimal content items
  if (complexity === 'minimal') {
    return 'blocked-no-content';
  }
  
  // Slug/title mismatches are no longer blocking - we have redirect infrastructure
  // (Keeping the detection for notes, but not blocking migration)
  
  // Check if already v2 - use contentVersion from inventory or check for blocks structure
  if (item.contentVersion === 2 || item.hasBlocks) {
    return 'migrated';
  }
  
  // Ready to migrate
  return 'todo';
}

// Generate notes
function generateNotes(item) {
  const notes = [];
  
  if (detectSlugTitleMismatch(item)) {
    notes.push(`Slug/title mismatch: "${item.slug}" vs "${item.title}"`);
  }
  
  if (!item.hasSources) {
    notes.push('Missing sources');
  }
  
  if (item.lastUpdated === 'missing') {
    notes.push('Missing lastUpdated');
  }
  
  const wordCount = item.wordCount?.body || 0;
  if (wordCount === 0 || wordCount === null) {
    notes.push('Empty content');
  } else if (wordCount < 100) {
    notes.push('Minimal content (under 100 words)');
  }
  
  if (item.type === 'topic') {
    notes.push('Topic hub: needs 250-500 word intro + curated links');
  }
  
  // Check for duplicate shortAnswer (if it's in body)
  if (item.wordCount?.shortAnswer && item.wordCount?.body) {
    const shortAnswerRatio = item.wordCount.shortAnswer / item.wordCount.body;
    if (shortAnswerRatio > 0.3) {
      notes.push('Possible duplicate shortAnswer in body');
    }
  }
  
  return notes.join('; ');
}

// Generate backlog
function generateBacklog() {
  const items = inventory
    .filter(item => 
      item.type !== 'unknown' && 
      item.type !== 'special' &&
      item.route !== '/resources'
    )
    .map(item => ({
      route: item.route,
      type: item.type,
      slug: item.slug,
      title: item.title,
      contentVersion: item.contentVersion || 1,
      wordCount: item.wordCount?.body || 0,
      complexity: calculateComplexity(item),
      status: getMigrationStatus(item),
      notes: generateNotes(item),
    }))
    .sort((a, b) => {
      // Sort by: status priority, then complexity, then word count
      const statusOrder = {
        'todo': 1,
        'migrated': 2,
        'manual-review': 3,
        'blocked-slug-mismatch': 4,
        'blocked-no-content': 5,
        'needs-content': 6,
      };
      
      const complexityOrder = {
        'simple': 1,
        'medium': 2,
        'hard': 3,
        'minimal': 4,
        'content-creation': 5,
      };
      
      const statusDiff = statusOrder[a.status] - statusOrder[b.status];
      if (statusDiff !== 0) return statusDiff;
      
      const complexityDiff = complexityOrder[a.complexity] - complexityOrder[b.complexity];
      if (complexityDiff !== 0) return complexityDiff;
      
      return b.wordCount - a.wordCount;
    });
  
  // Generate markdown
  const lines = [
    '# Resources Migration Backlog',
    '',
    'Generated: ' + new Date().toISOString().split('T')[0],
    '',
    '## Summary',
    '',
    `- Total items: ${items.length}`,
    `- Todo: ${items.filter(i => i.status === 'todo').length}`,
    `- Migrated: ${items.filter(i => i.status === 'migrated').length}`,
    `- Manual review needed: ${items.filter(i => i.status === 'manual-review').length}`,
    `- Blocked (slug mismatch): ${items.filter(i => i.status === 'blocked-slug-mismatch').length}`,
    `- Blocked (no content): ${items.filter(i => i.status === 'blocked-no-content').length}`,
    `- Needs content creation: ${items.filter(i => i.status === 'needs-content').length}`,
    '',
    '## Complexity Distribution',
    '',
    `- Simple: ${items.filter(i => i.complexity === 'simple').length}`,
    `- Medium: ${items.filter(i => i.complexity === 'medium').length}`,
    `- Hard: ${items.filter(i => i.complexity === 'hard').length}`,
    `- Minimal: ${items.filter(i => i.complexity === 'minimal').length}`,
    `- Content creation: ${items.filter(i => i.complexity === 'content-creation').length}`,
    '',
    '## Triage Rules',
    '',
    '**Simple**: v1 has clear headings or bullet structure; under 1200 words.',
    '',
    '**Medium**: mixed structure; 1200–2500 words.',
    '',
    '**Hard**: tangled formatting, multiple "Short Answer" blocks, tables, or state-by-state lists; or over 2500 words.',
    '',
    '**Minimal**: Under 100 words; needs content expansion before migration.',
    '',
    '**Content Creation**: Topic hubs need 250-500 word intro + curated links, not migration.',
    '',
    '## Migration Backlog',
    '',
    '| Route | Type | Version | Words | Complexity | Status | Notes |',
    '|-------|------|---------|-------|------------|--------|-------|',
  ];
  
  items.forEach(item => {
    lines.push(
      `| ${item.route} | ${item.type} | v${item.contentVersion} | ${item.wordCount} | ${item.complexity} | ${item.status} | ${item.notes || '-'} |`
    );
  });
  
  lines.push('');
  lines.push('## Migration Status Definitions');
  lines.push('');
  lines.push('- **todo**: Ready for automated migration');
  lines.push('- **migrated**: Already converted to v2 schema');
  lines.push('- **manual-review**: Automated migration needs human verification');
  lines.push('- **blocked-slug-mismatch**: URL/title inconsistency must be resolved first');
  lines.push('- **blocked-no-content**: Insufficient content for migration (needs expansion)');
  lines.push('- **needs-content**: Topic hub requiring new content creation, not migration');
  lines.push('');
  
  return lines.join('\n');
}

// Main execution
try {
  console.log('Generating migration backlog...');
  const backlog = generateBacklog();
  
  const outputPath = join(rootDir, 'docs/resources/MIGRATION_BACKLOG.md');
  writeFileSync(outputPath, backlog, 'utf-8');
  
  console.log(`✓ Generated: ${outputPath}`);
  console.log(`✓ Total items analyzed: ${inventory.length}`);
  
} catch (error) {
  console.error('Error generating backlog:', error);
  process.exit(1);
}
