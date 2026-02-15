#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.join(__dirname, '../RESOURCES_AUDIT.md');

// Load resourcesRegistry data
const registryPath = path.join(__dirname, '../src/content/resourcesRegistry.ts');
let RESOURCES = [];
let POPULAR_QUESTIONS = [];
let FEATURED_GUIDES = [];
let STARTER_KITS = [];
let TOPICS = [];

try {
  const registryContent = fs.readFileSync(registryPath, 'utf8');
  
  // Extract RESOURCES
  const resourcesMatch = registryContent.match(/export const RESOURCES[^=]*=\s*\[([\s\S]*?)\];/);
  if (resourcesMatch) {
    const content = resourcesMatch[1];
    const items = [];
    const itemRegex = /\{[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?status:\s*["']([^"']+)["'][\s\S]*?\}/g;
    let match;
    while ((match = itemRegex.exec(content)) !== null) {
      items.push({ slug: match[1], title: match[2], status: match[3] });
    }
    RESOURCES = items;
  }
  
  // Extract POPULAR_QUESTIONS
  const questionsMatch = registryContent.match(/export const POPULAR_QUESTIONS[^=]*=\s*\[([\s\S]*?)\];/);
  if (questionsMatch) {
    const content = questionsMatch[1];
    const items = [];
    const itemRegex = /\{[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?question:\s*["']([^"']+)["'][\s\S]*?status:\s*["']([^"']+)["'][\s\S]*?\}/g;
    let match;
    while ((match = itemRegex.exec(content)) !== null) {
      items.push({ slug: match[1], title: match[2], status: match[3] });
    }
    POPULAR_QUESTIONS = items;
  }
  
  // Extract FEATURED_GUIDES
  const guidesMatch = registryContent.match(/export const FEATURED_GUIDES[^=]*=\s*\[([\s\S]*?)\];/);
  if (guidesMatch) {
    const content = guidesMatch[1];
    const items = [];
    const itemRegex = /\{[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?status:\s*["']([^"']+)["'][\s\S]*?\}/g;
    let match;
    while ((match = itemRegex.exec(content)) !== null) {
      items.push({ slug: match[1], title: match[2], status: match[3] });
    }
    FEATURED_GUIDES = items;
  }
  
  // Extract STARTER_KITS
  const kitsMatch = registryContent.match(/export const STARTER_KITS[^=]*=\s*\[([\s\S]*?)\];/);
  if (kitsMatch) {
    const content = kitsMatch[1];
    const items = [];
    const itemRegex = /\{[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?status:\s*["']([^"']+)["'][\s\S]*?\}/g;
    let match;
    while ((match = itemRegex.exec(content)) !== null) {
      items.push({ slug: match[1], title: match[2], status: match[3] });
    }
    STARTER_KITS = items;
  }
  
  // Extract TOPICS
  const topicsMatch = registryContent.match(/export const TOPICS[^=]*=\s*\[([\s\S]*?)\];/);
  if (topicsMatch) {
    const content = topicsMatch[1];
    const items = [];
    const itemRegex = /\{[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?\}/g;
    let match;
    while ((match = itemRegex.exec(content)) !== null) {
      items.push({ slug: match[1], title: match[2], status: 'published' });
    }
    TOPICS = items;
  }
  
  console.log(`  Loaded ${RESOURCES.length} resources`);
  console.log(`  Loaded ${POPULAR_QUESTIONS.length} questions`);
  console.log(`  Loaded ${FEATURED_GUIDES.length} guides`);
  console.log(`  Loaded ${STARTER_KITS.length} starter kits`);
  console.log(`  Loaded ${TOPICS.length} topics`);
} catch (err) {
  console.error('Error loading resourcesRegistry:', err.message);
  process.exit(1);
}

// Check which files exist and what styling they use
function checkRouteImplementation(routePath, expectedFile) {
  const fullPath = path.join(__dirname, '../pages', expectedFile);
  
  if (!fs.existsSync(fullPath)) {
    return { exists: false, styling: 'N/A', implementation: 'Missing' };
  }
  
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check for new styling indicators
    const hasNewStyling = 
      content.includes('resources-dark-background') ||
      content.includes('bg-surface-dark') ||
      content.includes('text-foreground-dark') ||
      content.includes('border-border-dark');
    
    // Check for old styling indicators
    const hasOldStyling = 
      !hasNewStyling && (
        content.includes('className') ||
        content.includes('style=')
      );
    
    const styling = hasNewStyling ? '✅ New Styling' : (hasOldStyling ? '⚠️ Old Styling' : '❓ Unknown');
    
    return { exists: true, styling, implementation: 'Implemented' };
  } catch (err) {
    return { exists: true, styling: '❓ Error reading', implementation: 'Error' };
  }
}

// Generate markdown report
function generateAuditReport() {
  const timestamp = new Date().toISOString();
  
  let md = `# Resources Routes Audit Report\n\n`;
  md += `**Generated:** ${timestamp}\n\n`;
  md += `## Summary\n\n`;
  md += `- **Total Resources:** ${RESOURCES.length}\n`;
  md += `- **Total Questions:** ${POPULAR_QUESTIONS.length}\n`;
  md += `- **Total Guides:** ${FEATURED_GUIDES.length}\n`;
  md += `- **Total Starter Kits:** ${STARTER_KITS.length}\n`;
  md += `- **Total Topics:** ${TOPICS.length}\n`;
  md += `- **Grand Total Routes:** ${RESOURCES.length + POPULAR_QUESTIONS.length + FEATURED_GUIDES.length + STARTER_KITS.length + TOPICS.length}\n\n`;
  
  md += `## Styling Legend\n\n`;
  md += `- ✅ **New Styling**: Uses modern dark theme with token-based classes (bg-surface-dark, text-foreground-dark, etc.)\n`;
  md += `- ⚠️ **Old Styling**: Uses legacy/generic styling without the new design tokens\n`;
  md += `- ❓ **Unknown**: Unable to determine styling type\n\n`;
  
  // Main Resources
  md += `## Main Resource Articles\n\n`;
  md += `Route pattern: \`/resources/[slug]\`\n\n`;
  md += `| Slug | Title | Status | Route | Styling |\n`;
  md += `|------|-------|--------|-------|----------|\n`;
  
  RESOURCES.forEach(item => {
    const route = `/resources/${item.slug}`;
    const check = checkRouteImplementation(route, `resources/[slug].tsx`);
    const statusEmoji = item.status === 'published' ? '✅' : '📝';
    md += `| \`${item.slug}\` | ${item.title} | ${statusEmoji} ${item.status} | ${route} | ${check.styling} |\n`;
  });
  
  // Questions
  md += `\n## Popular Questions\n\n`;
  md += `Route pattern: \`/resources/q/[slug]\`\n\n`;
  md += `| Slug | Question | Status | Route | Styling |\n`;
  md += `|------|----------|--------|-------|----------|\n`;
  
  POPULAR_QUESTIONS.forEach(item => {
    const route = `/resources/q/${item.slug}`;
    const check = checkRouteImplementation(route, `resources/q/[slug].tsx`);
    const statusEmoji = item.status === 'published' ? '✅' : '📝';
    md += `| \`${item.slug}\` | ${item.title} | ${statusEmoji} ${item.status} | ${route} | ${check.styling} |\n`;
  });
  
  // Guides
  md += `\n## Featured Guides\n\n`;
  md += `Route pattern: \`/resources/guides/[slug]\`\n\n`;
  md += `| Slug | Title | Status | Route | Styling |\n`;
  md += `|------|-------|--------|-------|----------|\n`;
  
  FEATURED_GUIDES.forEach(item => {
    const route = `/resources/guides/${item.slug}`;
    const check = checkRouteImplementation(route, `resources/guides/[slug].tsx`);
    const statusEmoji = item.status === 'published' ? '✅' : '📝';
    md += `| \`${item.slug}\` | ${item.title} | ${statusEmoji} ${item.status} | ${route} | ${check.styling} |\n`;
  });
  
  // Starter Kits
  md += `\n## Starter Kits\n\n`;
  md += `Route pattern: \`/resources/kits/[slug]\`\n\n`;
  md += `| Slug | Title | Status | Route | Styling |\n`;
  md += `|------|-------|--------|-------|----------|\n`;
  
  STARTER_KITS.forEach(item => {
    const route = `/resources/kits/${item.slug}`;
    const check = checkRouteImplementation(route, `resources/kits/[slug].tsx`);
    const statusEmoji = item.status === 'published' ? '✅' : '📝';
    md += `| \`${item.slug}\` | ${item.title} | ${statusEmoji} ${item.status} | ${route} | ${check.styling} |\n`;
  });
  
  // Topics
  md += `\n## Topics\n\n`;
  md += `Route pattern: \`/resources/topics/[slug]\`\n\n`;
  md += `| Slug | Title | Route | Styling |\n`;
  md += `|------|-------|-------|----------|\n`;
  
  TOPICS.forEach(item => {
    const route = `/resources/topics/${item.slug}`;
    const check = checkRouteImplementation(route, `resources/topics/[slug].tsx`);
    md += `| \`${item.slug}\` | ${item.title} | ${route} | ${check.styling} |\n`;
  });
  
  // Add notes section
  md += `\n## Notes\n\n`;
  md += `1. All dynamic routes share the same component file (e.g., all questions use \`resources/q/[slug].tsx\`)\n`;
  md += `2. Styling is checked per route handler, not per individual route\n`;
  md += `3. Routes marked with ⚠️ Old Styling should be updated to use the new design system\n`;
  md += `4. Draft items (📝) are included in the registry but may not be fully visible in production\n\n`;
  
  return md;
}

// Main function
function main() {
  try {
    console.log('Generating resources audit report...');
    const report = generateAuditReport();
    
    fs.writeFileSync(OUTPUT_PATH, report, 'utf8');
    console.log(`✓ Audit report generated: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error generating audit report:', error);
    process.exit(1);
  }
}

main();
