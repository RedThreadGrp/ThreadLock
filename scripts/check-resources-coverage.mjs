#!/usr/bin/env node
// scripts/check-resources-coverage.mjs
// Automated route coverage check for Resources pages

import { existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const errors = [];
const warnings = [];

console.log('🔍 Checking Resources route coverage...\n');

// Read and parse the registry file
const registryPath = join(rootDir, 'src/content/resourcesRegistry.ts');
if (!existsSync(registryPath)) {
  console.error('❌ Registry file not found:', registryPath);
  process.exit(1);
}

const registryContent = readFileSync(registryPath, 'utf-8');

// Extract array counts using regex
function extractArrayCount(arrayName) {
  const regex = new RegExp(`export const ${arrayName}:.*?\\[([\\s\\S]*?)\\];`, 's');
  const match = registryContent.match(regex);
  if (match) {
    // Count objects by counting opening braces at the start of array items
    const items = match[1].match(/\{\s*slug:/g);
    return items ? items.length : 0;
  }
  return 0;
}

// Extract slugs from an array
function extractSlugs(arrayName) {
  const regex = new RegExp(`export const ${arrayName}:.*?\\[([\\s\\S]*?)\\];`, 's');
  const match = registryContent.match(regex);
  const slugs = [];
  if (match) {
    const slugMatches = match[1].matchAll(/slug:\s*["']([^"']+)["']/g);
    for (const m of slugMatches) {
      slugs.push(m[1]);
    }
  }
  return slugs;
}

const resourceSlugs = extractSlugs('RESOURCES');
const kitSlugs = extractSlugs('STARTER_KITS');
const guideSlugs = extractSlugs('FEATURED_GUIDES');
const topicSlugs = extractSlugs('TOPICS');
const questionSlugs = extractSlugs('POPULAR_QUESTIONS');

console.log('Registry contents:');
console.log(`  - ${resourceSlugs.length} resources`);
console.log(`  - ${kitSlugs.length} starter kits`);
console.log(`  - ${guideSlugs.length} featured guides`);
console.log(`  - ${topicSlugs.length} topics`);
console.log(`  - ${questionSlugs.length} questions\n`);

// Check slug format
function checkSlugFormat(slug, type) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    errors.push(`❌ ${type} has invalid slug: ${slug} (only lowercase letters, numbers, and hyphens allowed)`);
  }
}

// Check all slugs
console.log('Checking slug formats...');
resourceSlugs.forEach(slug => checkSlugFormat(slug, 'Resource'));
kitSlugs.forEach(slug => checkSlugFormat(slug, 'Kit'));
guideSlugs.forEach(slug => checkSlugFormat(slug, 'Guide'));
topicSlugs.forEach(slug => checkSlugFormat(slug, 'Topic'));
questionSlugs.forEach(slug => checkSlugFormat(slug, 'Question'));

// Check that route handlers exist
console.log('Checking route handlers...');
const requiredHandlers = [
  'resources/[slug].tsx',
  'resources/kits/[slug].tsx',
  'resources/guides/[slug].tsx',
  'resources/topics/[slug].tsx',
  'resources/q/[slug].tsx',
];

requiredHandlers.forEach(handler => {
  const fullPath = join(rootDir, 'pages', handler);
  if (!existsSync(fullPath)) {
    errors.push(`❌ Missing route handler: pages/${handler}`);
  } else {
    console.log(`  ✓ pages/${handler}`);
  }
});

// Check that ResourcesPage.tsx exists
const resourcesPagePath = join(rootDir, 'src/pages/resources/ResourcesPage.tsx');
if (!existsSync(resourcesPagePath)) {
  errors.push('❌ Missing ResourcesPage.tsx');
} else {
  console.log(`  ✓ src/pages/resources/ResourcesPage.tsx`);
}

// Check for kit resource references
console.log('\nChecking kit resource references...');
const kitSection = registryContent.match(/export const STARTER_KITS:.*?\[[\s\S]*?\];/s);
if (kitSection) {
  const resourcesMatches = kitSection[0].matchAll(/resources:\s*\[([^\]]+)\]/g);
  for (const match of resourcesMatches) {
    const refs = match[1].match(/["']([^"']+)["']/g);
    if (refs) {
      refs.forEach(ref => {
        const cleanRef = ref.replace(/["']/g, '');
        // Extract slug from /resources/[slug] pattern
        const slugMatch = cleanRef.match(/^\/resources\/([^\/]+)$/);
        if (slugMatch) {
          const slug = slugMatch[1];
          if (!resourceSlugs.includes(slug)) {
            errors.push(`❌ Kit references non-existent resource: ${slug}`);
          }
        }
      });
    }
  }
}

// Print results
console.log('\n' + '='.repeat(60));
console.log('RESULTS\n');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed! No issues found.');
  console.log(`\n📊 Coverage Summary:`);
  console.log(`   - ${resourceSlugs.length} resource pages`);
  console.log(`   - ${kitSlugs.length} kit pages`);
  console.log(`   - ${guideSlugs.length} guide pages`);
  console.log(`   - ${topicSlugs.length} topic pages`);
  console.log(`   - ${questionSlugs.length} question pages`);
  console.log(`   - ${requiredHandlers.length} route handlers verified`);
  console.log(`   - Total: ${resourceSlugs.length + kitSlugs.length + guideSlugs.length + topicSlugs.length + questionSlugs.length} pages with routes`);
  process.exit(0);
} else {
  if (errors.length > 0) {
    console.log('ERRORS:');
    errors.forEach(error => console.log(error));
    console.log('');
  }
  
  if (warnings.length > 0) {
    console.log('WARNINGS:');
    warnings.forEach(warning => console.log(warning));
    console.log('');
  }
  
  console.log(`❌ Found ${errors.length} error(s) and ${warnings.length} warning(s)`);
  process.exit(errors.length > 0 ? 1 : 0);
}

