#!/usr/bin/env node
// file: scripts/resources-lint.mjs
// Linting script for governance metadata validation
// Ensures all published content has proper governance metadata

import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

const errors = [];
const warnings = [];

function error(message) {
  errors.push(message);
  console.error(`${colors.red}✗ ERROR:${colors.reset} ${message}`);
}

function warn(message) {
  warnings.push(message);
  console.warn(`${colors.yellow}⚠ WARNING:${colors.reset} ${message}`);
}

function success(message) {
  console.log(`${colors.green}✓${colors.reset} ${message}`);
}

function info(message) {
  console.log(`${colors.blue}ℹ${colors.reset} ${message}`);
}

// Validate ISO date format (YYYY-MM-DD)
function isValidISODate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return false;
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) return false;
  
  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date) && dateStr === date.toISOString().split('T')[0];
}

// Check if shortAnswer is repeated in body
function checkShortAnswerDuplication(shortAnswer, body, itemId) {
  if (!shortAnswer || !body) return;
  
  // Normalize text for comparison (remove extra whitespace, lowercase)
  const normalizeText = (text) => text.replace(/\s+/g, ' ').trim().toLowerCase();
  const normalizedShort = normalizeText(shortAnswer);
  const normalizedBody = normalizeText(body);
  
  // Check if shortAnswer appears in body (allowing for minor variations)
  if (normalizedBody.includes(normalizedShort)) {
    error(`Question "${itemId}": shortAnswer text is repeated in body. This is redundant and harms SEO.`);
  }
}

// Validate governance metadata
function validateGovernance(governance, itemType, itemId, isStateByState = false) {
  if (!governance) {
    error(`${itemType} "${itemId}": Missing required governance metadata`);
    return false;
  }
  
  let valid = true;
  
  // Check lastUpdated
  if (!governance.lastUpdated) {
    error(`${itemType} "${itemId}": Missing required field: governance.lastUpdated`);
    valid = false;
  } else if (!isValidISODate(governance.lastUpdated)) {
    error(`${itemType} "${itemId}": Invalid lastUpdated format. Must be ISO date (YYYY-MM-DD), got: "${governance.lastUpdated}"`);
    valid = false;
  }
  
  // Check sources
  if (!governance.sources || !Array.isArray(governance.sources)) {
    error(`${itemType} "${itemId}": Missing required field: governance.sources (must be an array)`);
    valid = false;
  } else if (governance.sources.length === 0) {
    error(`${itemType} "${itemId}": governance.sources array is empty. At least 1 source is required.`);
    valid = false;
  } else {
    // Validate each source
    governance.sources.forEach((source, idx) => {
      if (!source.name || source.name.trim() === '') {
        error(`${itemType} "${itemId}": governance.sources[${idx}] missing required field: name`);
        valid = false;
      }
    });
  }
  
  // Check jurisdictionScope
  if (!governance.jurisdictionScope || !Array.isArray(governance.jurisdictionScope)) {
    error(`${itemType} "${itemId}": Missing required field: governance.jurisdictionScope (must be an array)`);
    valid = false;
  } else if (governance.jurisdictionScope.length === 0) {
    error(`${itemType} "${itemId}": governance.jurisdictionScope array is empty. At least 1 jurisdiction is required.`);
    valid = false;
  }
  
  // For state-by-state content, check scope is appropriate
  if (isStateByState && governance.jurisdictionScope) {
    const hasStateSpecific = governance.jurisdictionScope.some(j => 
      j !== 'US-general' && j !== 'Federal'
    );
    if (!hasStateSpecific) {
      warn(`${itemType} "${itemId}": State-by-state content should include specific state jurisdictions, not just US-general/Federal`);
    }
  }
  
  // Check reviewIntervalDays
  if (!governance.reviewIntervalDays) {
    error(`${itemType} "${itemId}": Missing required field: governance.reviewIntervalDays`);
    valid = false;
  } else if (![90, 180, 365].includes(governance.reviewIntervalDays)) {
    error(`${itemType} "${itemId}": Invalid reviewIntervalDays. Must be 90, 180, or 365, got: ${governance.reviewIntervalDays}`);
    valid = false;
  }
  
  // accuracyNotes is optional, but check if present for state-by-state
  if (isStateByState && !governance.accuracyNotes) {
    warn(`${itemType} "${itemId}": State-by-state content should include accuracyNotes for jurisdiction-specific disclaimers`);
  }
  
  return valid;
}

// Extract and validate items from resourcesRegistry.ts
function validateResourcesRegistry() {
  info(`\n${colors.bold}Validating Resources Registry...${colors.reset}\n`);
  
  try {
    const registryPath = join(rootDir, 'src/content/resourcesRegistry.ts');
    const registryContent = readFileSync(registryPath, 'utf-8');
    
    // Extract published items and check for governance metadata
    // This is a regex-based approach since we can't easily import TS
    
    let checkedItems = 0;
    
    // Pattern to find published items with their slugs
    const publishedItemRegex = /{\s*slug:\s*["']([^"']+)["'][^}]*status:\s*["']published["'][^}]*}/gs;
    const matches = registryContent.matchAll(publishedItemRegex);
    
    for (const match of matches) {
      const itemBlock = match[0];
      const slug = match[1];
      checkedItems++;
      
      // Check if this item has governance metadata
      if (!itemBlock.includes('governance:')) {
        error(`Resource/Question "${slug}": Published item missing governance metadata`);
        continue;
      }
      
      // Extract governance block (simplified check)
      const govMatch = itemBlock.match(/governance:\s*{([^}]+)}/s);
      if (!govMatch) {
        error(`Resource/Question "${slug}": Governance metadata appears malformed`);
        continue;
      }
      
      const govBlock = govMatch[1];
      
      // Check for required fields in governance block
      if (!govBlock.includes('lastUpdated:')) {
        error(`Resource/Question "${slug}": governance.lastUpdated is missing`);
      }
      if (!govBlock.includes('sources:')) {
        error(`Resource/Question "${slug}": governance.sources is missing`);
      }
      if (!govBlock.includes('jurisdictionScope:')) {
        error(`Resource/Question "${slug}": governance.jurisdictionScope is missing`);
      }
      if (!govBlock.includes('reviewIntervalDays:')) {
        error(`Resource/Question "${slug}": governance.reviewIntervalDays is missing`);
      }
      
      // Check if it's state-by-state content
      const isStateByState = slug.includes('state') || 
                           slug.includes('jurisdiction') ||
                           itemBlock.toLowerCase().includes('state-by-state') ||
                           itemBlock.toLowerCase().includes('varies by state');
      
      if (isStateByState && !govBlock.includes('accuracyNotes:')) {
        warn(`Resource/Question "${slug}": State-by-state content should include governance.accuracyNotes`);
      }
    }
    
    success(`Checked ${checkedItems} published items in resourcesRegistry.ts`);
    
  } catch (err) {
    error(`Failed to validate resourcesRegistry.ts: ${err.message}`);
  }
}

// Validate ResourceQAContent files in src/content/resources/
function validateResourceQAFiles() {
  info(`\n${colors.bold}Validating ResourceQA Content Files...${colors.reset}\n`);
  
  try {
    const resourcesDir = join(rootDir, 'src/content/resources');
    const files = readdirSync(resourcesDir).filter(f => 
      f.endsWith('.ts') && f !== 'types.ts'
    );
    
    let checkedFiles = 0;
    
    for (const file of files) {
      const filePath = join(resourcesDir, file);
      const content = readFileSync(filePath, 'utf-8');
      
      // Extract slug
      const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
      const slug = slugMatch ? slugMatch[1] : file.replace('.ts', '');
      
      checkedFiles++;
      
      // Check if file has governance metadata
      if (!content.includes('governance:')) {
        error(`ResourceQA "${slug}" (${file}): Missing governance metadata`);
        continue;
      }
      
      // Check for sources in governance
      const govMatch = content.match(/governance:\s*{([^}]+(?:{[^}]+}[^}]*)*?)}/s);
      if (!govMatch) {
        error(`ResourceQA "${slug}" (${file}): Governance metadata appears malformed`);
        continue;
      }
      
      const govBlock = govMatch[1];
      
      // Check required fields
      if (!govBlock.includes('lastUpdated:')) {
        error(`ResourceQA "${slug}" (${file}): governance.lastUpdated is missing`);
      }
      if (!govBlock.includes('sources:')) {
        error(`ResourceQA "${slug}" (${file}): governance.sources is missing`);
      } else {
        // Check if sources array is not empty
        const sourcesMatch = govBlock.match(/sources:\s*\[([^\]]*)\]/s);
        if (sourcesMatch) {
          const sourcesContent = sourcesMatch[1].trim();
          if (sourcesContent === '' || sourcesContent === '{}') {
            error(`ResourceQA "${slug}" (${file}): governance.sources array is empty`);
          }
        }
      }
      if (!govBlock.includes('jurisdictionScope:')) {
        error(`ResourceQA "${slug}" (${file}): governance.jurisdictionScope is missing`);
      }
      if (!govBlock.includes('reviewIntervalDays:')) {
        error(`ResourceQA "${slug}" (${file}): governance.reviewIntervalDays is missing`);
      }
      
      // Check for shortAnswer duplication in body
      const shortAnswerMatch = content.match(/shortAnswer:\s*{[^}]*text:\s*["']([^"']+)["']/s);
      const sectionsMatch = content.match(/sections:\s*\[([^\]]+(?:\[[^\]]+\][^\]]*)*?)\]/s);
      
      if (shortAnswerMatch && sectionsMatch) {
        const shortAnswerText = shortAnswerMatch[1];
        const sectionsContent = sectionsMatch[1];
        
        // Simple check if short answer appears in sections
        const normalizedShort = shortAnswerText.toLowerCase().substring(0, 100);
        if (sectionsContent.toLowerCase().includes(normalizedShort)) {
          warn(`ResourceQA "${slug}" (${file}): shortAnswer may be duplicated in body sections`);
        }
      }
    }
    
    success(`Checked ${checkedFiles} ResourceQA content files`);
    
  } catch (err) {
    error(`Failed to validate ResourceQA files: ${err.message}`);
  }
}

// Main execution
(async () => {
  console.log(`\n${colors.bold}${colors.blue}===========================================`);
  console.log(`Resources Governance Metadata Linter`);
  console.log(`===========================================\n${colors.reset}`);
  
  validateResourcesRegistry();
  validateResourceQAFiles();
  
  console.log(`\n${colors.bold}Linting Summary:${colors.reset}`);
  console.log(`${colors.red}Errors: ${errors.length}${colors.reset}`);
  console.log(`${colors.yellow}Warnings: ${warnings.length}${colors.reset}`);
  
  if (errors.length > 0) {
    console.error(`\n${colors.red}${colors.bold}❌ LINTING FAILED${colors.reset}`);
    console.error(`${colors.red}Fix the errors above before proceeding.${colors.reset}\n`);
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log(`\n${colors.yellow}⚠️  Linting passed with warnings${colors.reset}`);
    console.log(`${colors.yellow}Consider addressing warnings for better quality.${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`\n${colors.green}${colors.bold}✅ All governance metadata checks passed!${colors.reset}\n`);
    process.exit(0);
  }
})();
