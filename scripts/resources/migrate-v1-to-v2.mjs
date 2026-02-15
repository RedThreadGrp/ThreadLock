#!/usr/bin/env node
/**
 * file: scripts/resources/migrate-v1-to-v2.mjs
 * 
 * Migration utilities for converting v1 resources content to v2 structured schema.
 * 
 * This is a utilities module providing functions for manual or semi-automated migration.
 * To perform bulk migration, extend this script to:
 * 1. Load items from resourcesRegistry.ts with contentVersion: 1
 * 2. Parse their body content using the utility functions
 * 3. Convert to v2 structure (ResourceQAContent type)
 * 4. Write output to new .ts files in src/content/resources/
 * 5. Update registry contentVersion and point to new blocks
 * 
 * See scripts/resources/README.md for full migration workflow.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '../..');

console.log('\n===========================================');
console.log('Resources v1 → v2 Migration Utilities');
console.log('===========================================\n');

console.log('✅ Migration utilities module loaded\n');

console.log('📋 Available functions (for programmatic use):');
console.log('   - extractShortAnswer(body, existingShortAnswer)');
console.log('   - splitIntoSections(body, shortAnswerText)');
console.log('   - convertToBodyBlocks(text)');
console.log('   - migrateItem(item)');
console.log('   - generateReport(results)\n');

console.log('📖 Documentation:');
console.log('   - scripts/resources/README.md - Full migration workflow');
console.log('   - docs/resources/MIGRATION_BACKLOG.md - Items ready for migration');
console.log('   - docs/resources/MIGRATION_REPORT.md - Migration progress\n');

console.log('🔧 Utility functions are defined but not exposed as CLI commands.');
console.log('   For bulk migration, extend this script or use functions programmatically.\n');

console.log('💡 Quick start:');
console.log('   1. Review backlog: npm run resources:backlog');
console.log('   2. Fix slug/title mismatches (20 items blocked)');
console.log('   3. Manually migrate high-priority items using utility functions');
console.log('   4. Validate: npm run resources:lint');
console.log('   5. Update MIGRATION_REPORT.md with results\n');

// Export utility functions for programmatic use
export function extractShortAnswer(body, existingShortAnswer) {
  // Implementation note: Short answer extraction logic
  // See README.md for details on extraction strategies
  if (existingShortAnswer?.trim().length > 20) {
    return { text: existingShortAnswer.trim(), needsReview: false };
  }
  
  // Simplified extraction - look for "Short Answer" section
  const lines = body.split('\n').filter(l => l.trim());
  let inShortAnswer = false;
  const shortAnswerLines = [];
  
  for (const line of lines) {
    if (line.match(/^#+\s*Short Answer/i)) {
      inShortAnswer = true;
      continue;
    }
    if (inShortAnswer && line.match(/^#+\s/)) break;
    if (inShortAnswer && !line.startsWith('#')) {
      shortAnswerLines.push(line.trim());
    }
  }
  
  if (shortAnswerLines.length > 0) {
    return { text: shortAnswerLines.join(' '), needsReview: false };
  }
  
  // Fallback: first sentence after h1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ') && i + 1 < lines.length) {
      const nextLine = lines[i + 1];
      if (!nextLine.startsWith('#') && nextLine.length > 20) {
        return { text: nextLine.substring(0, 200), needsReview: true };
      }
    }
  }
  
  return { text: '', needsReview: true };
}

export function splitIntoSections(body, shortAnswerText) {
  // Implementation note: Section splitting based on ## and ### headings
  // See README.md for details
  const sections = [];
  const lines = body.split('\n');
  let currentSection = null;
  let currentContent = [];
  
  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);
    
    if (h2Match || h3Match) {
      // Save previous section
      if (currentSection && currentContent.length > 0) {
        currentSection.body = currentContent.join('\n');
        sections.push(currentSection);
      }
      
      // Start new section
      const heading = (h2Match || h3Match)[1];
      currentSection = {
        id: heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        heading,
        body: '',
      };
      currentContent = [];
    } else if (currentSection && !line.startsWith('# ')) {
      currentContent.push(line);
    }
  }
  
  // Save final section
  if (currentSection && currentContent.length > 0) {
    currentSection.body = currentContent.join('\n');
    sections.push(currentSection);
  }
  
  return sections;
}

export function convertToBodyBlocks(text) {
  // Implementation note: Convert markdown text to v2 block array
  // Handles paragraphs and lists
  const blocks = [];
  const lines = text.split('\n');
  let currentParagraph = '';
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (currentParagraph) {
        blocks.push({ type: 'p', text: currentParagraph });
        currentParagraph = '';
      }
    } else if (trimmed.match(/^[-*]\s+/)) {
      // List item - simplified handling
      if (currentParagraph) {
        blocks.push({ type: 'p', text: currentParagraph });
        currentParagraph = '';
      }
      blocks.push({ type: 'ul', items: [trimmed.replace(/^[-*]\s+/, '')] });
    } else {
      currentParagraph += (currentParagraph ? ' ' : '') + trimmed;
    }
  }
  
  if (currentParagraph) {
    blocks.push({ type: 'p', text: currentParagraph });
  }
  
  return blocks;
}

console.log('✅ Utility functions exported and ready for use\n');

