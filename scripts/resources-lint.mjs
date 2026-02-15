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
    
    let checkedItems = 0;
    
    // Split by objects - look for patterns that indicate object boundaries
    // Find all {slug: "...", ... status: "published" ... } blocks
    const slugPattern = /slug:\s*["']([^"']+)["']/g;
    let match;
    
    while ((match = slugPattern.exec(registryContent)) !== null) {
      const slug = match[1];
      const startPos = match.index;
      
      // Look backward to find the opening brace
      let openBracePos = startPos;
      while (openBracePos > 0 && registryContent[openBracePos] !== '{') {
        openBracePos--;
      }
      
      // Now find the matching closing brace for this object FIRST
      // We'll count braces, skipping those inside template literals
      let pos = openBracePos + 1;
      let braceCount = 1;
      let inTemplate = false;
      let inString = false;
      let stringChar = null;
      let closeBracePos = openBracePos;
      
      while (pos < registryContent.length && braceCount > 0) {
        const char = registryContent[pos];
        const prevChar = pos > 0 ? registryContent[pos - 1] : '';
        
        // Toggle template literal state
        if (char === '`' && prevChar !== '\\') {
          inTemplate = !inTemplate;
        }
        // Toggle string state
        else if ((char === '"' || char === "'") && prevChar !== '\\' && !inTemplate) {
          if (inString && char === stringChar) {
            inString = false;
            stringChar = null;
          } else if (!inString) {
            inString = true;
            stringChar = char;
          }
        }
        // Count braces only when outside strings and templates
        else if (!inString && !inTemplate) {
          if (char === '{') braceCount++;
          else if (char === '}') braceCount--;
          
          if (braceCount === 0) {
            closeBracePos = pos;
            break;
          }
        }
        
        pos++;
      }
      
      if (braceCount !== 0) {
        // Couldn't find matching brace, skip
        continue;
      }
      
      const itemBlock = registryContent.substring(openBracePos, closeBracePos + 1);
      
      // NOW check if this object has status: "published"
      if (!itemBlock.includes('status: "published"')) {
        continue;
      }
      
      checkedItems++;
      
      // Check if this item has governance metadata
      if (!itemBlock.includes('governance:')) {
        error(`Resource/Question "${slug}": Published item missing governance metadata`);
        continue;
      }
      
      // Check for required fields
      if (!itemBlock.includes('lastUpdated:')) {
        error(`Resource/Question "${slug}": governance.lastUpdated is missing`);
      }
      if (!itemBlock.includes('sources:')) {
        error(`Resource/Question "${slug}": governance.sources is missing`);
      }
      if (!itemBlock.includes('jurisdictionScope:')) {
        error(`Resource/Question "${slug}": governance.jurisdictionScope is missing`);
      }
      if (!itemBlock.includes('reviewIntervalDays:')) {
        error(`Resource/Question "${slug}": governance.reviewIntervalDays is missing`);
      }
      
      // Check if it's state-by-state content
      const isStateByState = slug.includes('state') || 
                           slug.includes('jurisdiction') ||
                           itemBlock.toLowerCase().includes('state-by-state') ||
                           itemBlock.toLowerCase().includes('varies by state');
      
      if (isStateByState && !itemBlock.includes('accuracyNotes:')) {
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
      
      // Find governance block using brace counting
      const govStartMatch = content.match(/governance:\s*{/);
      if (!govStartMatch) {
        error(`ResourceQA "${slug}" (${file}): Governance metadata appears malformed`);
        continue;
      }
      
      const govStart = govStartMatch.index + govStartMatch[0].length - 1; // Position of opening brace
      let pos = govStart + 1;
      let braceCount = 1;
      let inString = false;
      let stringChar = null;
      let govEnd = govStart;
      
      while (pos < content.length && braceCount > 0) {
        const char = content[pos];
        const prevChar = pos > 0 ? content[pos - 1] : '';
        
        // Toggle string state
        if ((char === '"' || char === "'") && prevChar !== '\\') {
          if (inString && char === stringChar) {
            inString = false;
            stringChar = null;
          } else if (!inString) {
            inString = true;
            stringChar = char;
          }
        }
        // Count braces only when outside strings
        else if (!inString) {
          if (char === '{') braceCount++;
          else if (char === '}') braceCount--;
          
          if (braceCount === 0) {
            govEnd = pos;
            break;
          }
        }
        
        pos++;
      }
      
      const govBlock = content.substring(govStart, govEnd + 1);
      
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
      
      // V2 SPECIFIC VALIDATIONS
      // These are v2 structured content files (ResourceQAContent)
      
      // Check 1: Must have sections array with at least 1 section
      if (!content.includes('sections:')) {
        error(`ResourceQA v2 "${slug}" (${file}): Missing sections array`);
      } else {
        // Check if sections array is empty
        const sectionsMatch = content.match(/sections:\s*\[([^\]]*(?:\[[^\]]*\][^\]]*)*?)\]/s);
        if (sectionsMatch) {
          const sectionsContent = sectionsMatch[1].trim();
          if (sectionsContent === '') {
            error(`ResourceQA v2 "${slug}" (${file}): sections array is empty (must have at least 1 section)`);
          }
        }
      }
      
      // Check 2: No duplicate section headings
      const headingMatches = [...content.matchAll(/heading:\s*["']([^"']+)["']/g)];
      const headings = headingMatches.map(m => m[1]);
      const uniqueHeadings = new Set(headings);
      if (headings.length > uniqueHeadings.size) {
        const duplicates = headings.filter((h, i) => headings.indexOf(h) !== i);
        error(`ResourceQA v2 "${slug}" (${file}): Duplicate section headings found: ${[...new Set(duplicates)].join(', ')}`);
      }
      
      // Check 3: Check for shortAnswer duplication in body
      const shortAnswerMatch = content.match(/shortAnswer:\s*{[^}]*text:\s*["']([^"']+)["']/s);
      const sectionsMatch = content.match(/sections:\s*\[([^\]]+(?:\[[^\]]+\][^\]]*)*?)\]/s);
      
      if (shortAnswerMatch && sectionsMatch) {
        const shortAnswerText = shortAnswerMatch[1];
        const sectionsContent = sectionsMatch[1];
        
        // More robust check for shortAnswer duplication
        const normalizedShort = shortAnswerText.toLowerCase().trim();
        const normalizedSections = sectionsContent.toLowerCase();
        
        // Check if the full short answer or significant portion (first 50+ chars) appears in sections
        if (normalizedShort.length > 50) {
          const shortSnippet = normalizedShort.substring(0, 50);
          if (normalizedSections.includes(shortSnippet)) {
            error(`ResourceQA v2 "${slug}" (${file}): shortAnswer text is repeated in section body. Remove duplication.`);
          }
        }
      }
      
      // Check 4: Must have shortAnswer
      if (!content.includes('shortAnswer:')) {
        error(`ResourceQA v2 "${slug}" (${file}): Missing shortAnswer (required for v2)`);
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
