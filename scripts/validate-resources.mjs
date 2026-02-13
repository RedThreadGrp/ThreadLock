#!/usr/bin/env node
// scripts/validate-resources.mjs
// Validation script for Resources Directory
// Ensures no broken links, no duplicates, proper URL formats

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const errors = [];
const warnings = [];

console.log('🔍 Validating Resources Directory...\n');

// ============================================================================
// Load and parse registries
// ============================================================================

const externalRegistryPath = join(rootDir, 'src/content/externalResources.registry.ts');
const internalRegistryPath = join(rootDir, 'src/content/resourcesRegistry.ts');

if (!existsSync(externalRegistryPath)) {
  errors.push('❌ External resources registry not found');
  console.error(errors[errors.length - 1]);
  process.exit(1);
}

const externalContent = readFileSync(externalRegistryPath, 'utf-8');

// Extract external resources using regex
function extractExternalResources() {
  const regex = /export const EXTERNAL_RESOURCES:[^=]*=\s*\[([\s\S]*?)\];/s;
  const match = externalContent.match(regex);
  if (!match) {
    console.warn('Warning: Could not find EXTERNAL_RESOURCES array');
    return [];
  }
  
  const resourceMatches = match[1].matchAll(/\{[\s\S]*?\}/g);
  const resources = [];
  
  for (const resourceMatch of resourceMatches) {
    const resourceText = resourceMatch[0];
    const idMatch = resourceText.match(/id:\s*["']([^"']+)["']/);
    const urlMatch = resourceText.match(/url:\s*["']([^"']+)["']/);
    const jurisdictionMatch = resourceText.match(/jurisdiction:\s*["']([^"']+)["']/);
    const categoryMatch = resourceText.match(/category:\s*["']([^"']+)["']/);
    
    if (idMatch && urlMatch && jurisdictionMatch && categoryMatch) {
      resources.push({
        id: idMatch[1],
        url: urlMatch[1],
        jurisdiction: jurisdictionMatch[1],
        category: categoryMatch[1],
      });
    }
  }
  
  return resources;
}

const externalResources = extractExternalResources();

console.log(`Found ${externalResources.length} external resources\n`);

// ============================================================================
// Validation 1: Check for duplicate IDs
// ============================================================================

console.log('Checking for duplicate IDs...');
const idCounts = new Map();
externalResources.forEach(r => {
  idCounts.set(r.id, (idCounts.get(r.id) || 0) + 1);
});

const duplicateIds = Array.from(idCounts.entries()).filter(([, count]) => count > 1);
if (duplicateIds.length > 0) {
  duplicateIds.forEach(([id, count]) => {
    errors.push(`❌ Duplicate ID found: "${id}" (appears ${count} times)`);
  });
} else {
  console.log('  ✓ No duplicate IDs found');
}

// ============================================================================
// Validation 2: Check for duplicate normalized URLs
// ============================================================================

console.log('Checking for duplicate URLs...');
function normalizeUrl(url) {
  let normalized = url.trim();
  if (normalized.endsWith('/') && normalized.split('/').length > 3) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

const urlCounts = new Map();
externalResources.forEach(r => {
  const normalized = normalizeUrl(r.url);
  const existing = urlCounts.get(normalized) || [];
  existing.push(r);
  urlCounts.set(normalized, existing);
});

const duplicateUrls = Array.from(urlCounts.entries()).filter(([, resources]) => resources.length > 1);
if (duplicateUrls.length > 0) {
  duplicateUrls.forEach(([url, resources]) => {
    errors.push(`❌ Duplicate URL found: "${url}" (${resources.map(r => r.id).join(', ')})`);
  });
} else {
  console.log('  ✓ No duplicate URLs found');
}

// ============================================================================
// Validation 3: Check non-HTTPS URLs (allowlist GU only)
// ============================================================================

console.log('Checking URL protocols...');
const httpResources = externalResources.filter(r => {
  const url = r.url.toLowerCase();
  return url.startsWith('http://') && !url.startsWith('https://');
});

const allowedHttpDomains = ['www.guamcourts.org'];
const unauthorizedHttp = httpResources.filter(r => {
  const url = r.url.toLowerCase();
  return !allowedHttpDomains.some(domain => url.includes(domain));
});

if (unauthorizedHttp.length > 0) {
  unauthorizedHttp.forEach(r => {
    errors.push(`❌ Non-HTTPS URL not in allowlist: "${r.url}" (ID: ${r.id})`);
  });
} else {
  console.log('  ✓ All non-HTTPS URLs are allowlisted');
  if (httpResources.length > 0) {
    console.log(`  ℹ ${httpResources.length} allowlisted HTTP URL(s): ${httpResources.map(r => r.id).join(', ')}`);
  }
}

// ============================================================================
// Validation 4: Check state directory completeness
// ============================================================================

console.log('Checking state directory completeness...');
const jurisdictions = new Set();
externalResources.forEach(r => {
  if (r.jurisdiction !== 'US') {
    jurisdictions.add(r.jurisdiction);
  }
});

const missingEntries = [];
jurisdictions.forEach(jurisdiction => {
  const court = externalResources.find(
    r => r.jurisdiction === jurisdiction && r.category === 'state-directory-court'
  );
  const legalAid = externalResources.find(
    r => r.jurisdiction === jurisdiction && r.category === 'state-directory-legal-aid'
  );
  
  if (!court) {
    missingEntries.push({ jurisdiction, type: 'court' });
  }
  if (!legalAid) {
    missingEntries.push({ jurisdiction, type: 'legal-aid' });
  }
});

if (missingEntries.length > 0) {
  missingEntries.forEach(({ jurisdiction, type }) => {
    errors.push(`❌ Missing ${type} link for jurisdiction: ${jurisdiction}`);
  });
} else {
  console.log(`  ✓ All ${jurisdictions.size} jurisdictions have both court and legal aid links`);
}

// ============================================================================
// Validation 5: Check internal route coverage (if ResourcesPage exists)
// ============================================================================

const resourcesPagePath = join(rootDir, 'src/pages/resources/ResourcesPage.tsx');
if (existsSync(resourcesPagePath)) {
  console.log('Checking internal route coverage...');
  const resourcesPageContent = readFileSync(resourcesPagePath, 'utf-8');
  
  // Extract hrefs from ResourcesPage
  const hrefMatches = resourcesPageContent.matchAll(/href=["']\/resources\/([^"'#]+)["']/g);
  const internalHrefs = new Set();
  
  for (const match of hrefMatches) {
    internalHrefs.add(match[1]);
  }
  
  if (internalHrefs.size > 0 && existsSync(internalRegistryPath)) {
    const internalContent = readFileSync(internalRegistryPath, 'utf-8');
    
    // Check if each href has a corresponding slug in the registry
    const missingSlugs = [];
    for (const href of internalHrefs) {
      // Simple check: does the slug appear in the registry?
      const slugPattern = new RegExp(`slug:\\s*["']${href.split('/').pop()}["']`);
      if (!slugPattern.test(internalContent)) {
        missingSlugs.push(href);
      }
    }
    
    if (missingSlugs.length > 0) {
      missingSlugs.forEach(slug => {
        warnings.push(`⚠️  Internal href may be missing from registry: /resources/${slug}`);
      });
    } else {
      console.log(`  ✓ All internal hrefs appear to be covered`);
    }
  }
}

// ============================================================================
// Generate dedupe report
// ============================================================================

const dedupeReport = {
  timestamp: new Date().toISOString(),
  totalResources: externalResources.length,
  uniqueUrls: urlCounts.size,
  duplicateIds: duplicateIds.map(([id, count]) => ({ id, count })),
  duplicateUrls: duplicateUrls.map(([url, resources]) => ({
    url,
    count: resources.length,
    ids: resources.map(r => r.id),
  })),
  httpResources: httpResources.map(r => ({
    id: r.id,
    url: r.url,
    allowed: allowedHttpDomains.some(domain => r.url.toLowerCase().includes(domain)),
  })),
  missingStateDirectoryEntries: missingEntries,
};

const reportPath = join(rootDir, 'externalResources.dedupe.report.json');
writeFileSync(reportPath, JSON.stringify(dedupeReport, null, 2));
console.log(`\n📊 Dedupe report written to: ${reportPath}`);

// ============================================================================
// Print results
// ============================================================================

console.log('\n' + '='.repeat(60));
console.log('VALIDATION RESULTS\n');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All validations passed!');
  console.log(`\n📊 Summary:`);
  console.log(`   - ${externalResources.length} external resources`);
  console.log(`   - ${jurisdictions.size} jurisdictions with complete directory entries`);
  console.log(`   - ${urlCounts.size} unique URLs`);
  console.log(`   - 0 duplicates`);
  console.log(`   - ${httpResources.length} allowlisted HTTP URL(s)`);
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
