#!/usr/bin/env node
/**
 * Governance Metadata Validation Script
 * 
 * Enforces required metadata for all V2 content.
 * Build MUST fail if:
 * - lastUpdated is missing or invalid
 * - jurisdictionScope is missing or empty
 * - sources array is empty (< 1 source)
 * - sources are missing required fields (title, organization, url, lastAccessed)
 * 
 * This ensures ThreadLock maintains authority and AI reference likelihood.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RESOURCES_DIR = path.join(__dirname, '../src/content/resources');
const REGISTRY_PATH = path.join(__dirname, '../src/content/resourcesRegistry.ts');

// Valid jurisdiction scopes
const VALID_JURISDICTIONS = ['federal', 'multi-state', 'state-specific', 'US-general'];

// Track validation results
let errors = [];
let warnings = [];
let filesProcessed = 0;

/**
 * Validate ISO date format (YYYY-MM-DD)
 */
function isValidISODate(dateString) {
  if (!dateString || typeof dateString !== 'string') return false;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;
  
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date) && dateString === date.toISOString().split('T')[0];
}

/**
 * Validate URL format
 */
function isValidURL(urlString) {
  if (!urlString || typeof urlString !== 'string') return false;
  try {
    new URL(urlString);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate a single source object
 */
function validateSource(source, fileName, index) {
  const sourceErrors = [];
  
  if (!source.title || typeof source.title !== 'string' || source.title.trim() === '') {
    sourceErrors.push(`Source #${index + 1} missing required 'title' field`);
  }
  
  if (!source.organization || typeof source.organization !== 'string' || source.organization.trim() === '') {
    sourceErrors.push(`Source #${index + 1} missing required 'organization' field`);
  }
  
  if (!source.url || typeof source.url !== 'string') {
    sourceErrors.push(`Source #${index + 1} missing required 'url' field`);
  } else if (!isValidURL(source.url)) {
    sourceErrors.push(`Source #${index + 1} has invalid 'url' format: ${source.url}`);
  }
  
  if (!source.lastAccessed || typeof source.lastAccessed !== 'string') {
    sourceErrors.push(`Source #${index + 1} missing required 'lastAccessed' field`);
  } else if (!isValidISODate(source.lastAccessed)) {
    sourceErrors.push(`Source #${index + 1} has invalid 'lastAccessed' format (must be YYYY-MM-DD): ${source.lastAccessed}`);
  }
  
  return sourceErrors;
}

/**
 * Validate governance metadata
 */
function validateGovernance(governance, fileName) {
  const fileErrors = [];
  
  // Check lastUpdated (REQUIRED)
  if (!governance.lastUpdated) {
    fileErrors.push('Missing required field: lastUpdated');
  } else if (!isValidISODate(governance.lastUpdated)) {
    fileErrors.push(`Invalid lastUpdated format (must be YYYY-MM-DD): ${governance.lastUpdated}`);
  }
  
  // Check jurisdictionScope (REQUIRED, must be array with at least 1 element)
  if (!governance.jurisdictionScope || !Array.isArray(governance.jurisdictionScope)) {
    fileErrors.push('Missing required field: jurisdictionScope (must be array)');
  } else if (governance.jurisdictionScope.length === 0) {
    fileErrors.push('jurisdictionScope array is empty (must have at least 1 jurisdiction)');
  } else {
    // Validate each jurisdiction
    governance.jurisdictionScope.forEach((scope, idx) => {
      if (!VALID_JURISDICTIONS.includes(scope)) {
        fileErrors.push(`Invalid jurisdiction at index ${idx}: "${scope}" (must be one of: ${VALID_JURISDICTIONS.join(', ')})`);
      }
    });
  }
  
  // Check sources (REQUIRED, must have at least 1)
  if (!governance.sources || !Array.isArray(governance.sources)) {
    fileErrors.push('Missing required field: sources (must be array)');
  } else if (governance.sources.length === 0) {
    fileErrors.push('sources array is empty (must have at least 1 authoritative source)');
  } else {
    // Validate each source
    governance.sources.forEach((source, idx) => {
      const sourceErrors = validateSource(source, fileName, idx);
      fileErrors.push(...sourceErrors);
    });
  }
  
  // Optional: reviewedBy validation
  if (governance.reviewedBy) {
    if (!governance.reviewedBy.name || !governance.reviewedBy.credentials) {
      warnings.push(`${fileName}: reviewedBy is incomplete (needs name and credentials)`);
    }
  }
  
  return fileErrors;
}

/**
 * Extract governance object from a file's content
 */
function extractGovernanceFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file exports a governance object
  if (!content.includes('governance:') && !content.includes('governance =')) {
    return null; // File doesn't have governance (might be types.ts or README)
  }
  
  // Extract governance block by finding matching braces
  const governanceStart = content.indexOf('governance:');
  if (governanceStart === -1) {
    return null;
  }
  
  // Find the opening brace after 'governance:'
  const openBraceIndex = content.indexOf('{', governanceStart);
  if (openBraceIndex === -1) {
    return null;
  }
  
  // Find the matching closing brace by counting braces
  let braceCount = 1;
  let i = openBraceIndex + 1;
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }
  
  if (braceCount !== 0) {
    return null; // Unmatched braces
  }
  
  const governanceBlock = content.substring(openBraceIndex, i);
  
  try {
    // Extract lastUpdated
    const lastUpdatedMatch = governanceBlock.match(/lastUpdated:\s*["']([^"']+)["']/);
    const lastUpdated = lastUpdatedMatch ? lastUpdatedMatch[1] : null;
    
    // Extract jurisdictionScope array
    const jurisdictionMatch = governanceBlock.match(/jurisdictionScope:\s*\[([^\]]*)\]/s);
    let jurisdictionScope = [];
    if (jurisdictionMatch) {
      const jurisdictionContent = jurisdictionMatch[1];
      // Extract string values from array
      const scopeMatches = jurisdictionContent.match(/["']([^"']+)["']/g);
      if (scopeMatches) {
        jurisdictionScope = scopeMatches.map(s => s.replace(/["']/g, ''));
      }
    }
    
    // Extract sources array by finding the sources: [ ... ] block
    const sourcesStart = governanceBlock.indexOf('sources:');
    if (sourcesStart !== -1) {
      const sourcesArrayStart = governanceBlock.indexOf('[', sourcesStart);
      if (sourcesArrayStart !== -1) {
        // Find matching ] for sources array
        let bracketCount = 1;
        let j = sourcesArrayStart + 1;
        while (j < governanceBlock.length && bracketCount > 0) {
          if (governanceBlock[j] === '[') bracketCount++;
          if (governanceBlock[j] === ']') bracketCount--;
          j++;
        }
        
        const sourcesArrayContent = governanceBlock.substring(sourcesArrayStart + 1, j - 1);
        
        // Extract individual source objects
        const sources = [];
        let objStart = -1;
        let objBraceCount = 0;
        
        for (let k = 0; k < sourcesArrayContent.length; k++) {
          if (sourcesArrayContent[k] === '{') {
            if (objBraceCount === 0) {
              objStart = k;
            }
            objBraceCount++;
          } else if (sourcesArrayContent[k] === '}') {
            objBraceCount--;
            if (objBraceCount === 0 && objStart !== -1) {
              const sourceObjStr = sourcesArrayContent.substring(objStart, k + 1);
              
              // Extract fields from this source object
              const titleMatch = sourceObjStr.match(/title:\s*["']([^"']+)["']/s);
              const orgMatch = sourceObjStr.match(/organization:\s*["']([^"']+)["']/s);
              const urlMatch = sourceObjStr.match(/url:\s*["']([^"']+)["']/s);
              const lastAccessedMatch = sourceObjStr.match(/lastAccessed:\s*["']([^"']+)["']/s);
              const jurisdictionMatch = sourceObjStr.match(/jurisdiction:\s*["']([^"']+)["']/s);
              const noteMatch = sourceObjStr.match(/note:\s*["']([^"']+)["']/s);
              
              sources.push({
                title: titleMatch ? titleMatch[1] : null,
                organization: orgMatch ? orgMatch[1] : null,
                url: urlMatch ? urlMatch[1] : null,
                lastAccessed: lastAccessedMatch ? lastAccessedMatch[1] : null,
                jurisdiction: jurisdictionMatch ? jurisdictionMatch[1] : undefined,
                note: noteMatch ? noteMatch[1] : undefined,
              });
              
              objStart = -1;
            }
          }
        }
        
        return {
          lastUpdated,
          jurisdictionScope,
          sources,
        };
      }
    }
    
    return {
      lastUpdated,
      jurisdictionScope,
      sources: [],
    };
  } catch (err) {
    console.error(`Error parsing governance in file: ${err.message}`);
    return null;
  }
}

/**
 * Process all resource files
 */
function processResourceFiles() {
  const files = fs.readdirSync(RESOURCES_DIR);
  
  files.forEach(file => {
    if (!file.endsWith('.ts') || file === 'types.ts' || file === 'README.md') {
      return;
    }
    
    const filePath = path.join(RESOURCES_DIR, file);
    const governance = extractGovernanceFromFile(filePath);
    
    if (!governance) {
      // Skip files without governance (might be helper files)
      return;
    }
    
    filesProcessed++;
    
    // Validate governance
    const fileErrors = validateGovernance(governance, file);
    
    if (fileErrors.length > 0) {
      errors.push({
        file,
        errors: fileErrors,
      });
    }
  });
}

/**
 * Main execution
 */
function main() {
  console.log('\n🔍 Validating Governance Metadata for V2 Content...\n');
  
  processResourceFiles();
  
  console.log(`📊 Files processed: ${filesProcessed}\n`);
  
  // Display warnings
  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:\n');
    warnings.forEach(warning => {
      console.log(`   ${warning}`);
    });
    console.log('');
  }
  
  // Display errors
  if (errors.length > 0) {
    console.log('❌ VALIDATION ERRORS:\n');
    errors.forEach(({ file, errors: fileErrors }) => {
      console.log(`   ${file}:`);
      fileErrors.forEach(error => {
        console.log(`      • ${error}`);
      });
      console.log('');
    });
    
    console.log(`\n❌ Governance validation FAILED: ${errors.length} file(s) with errors\n`);
    console.log('⚠️  BUILD MUST FAIL - Fix governance metadata before publishing.\n');
    console.log('Required fields:');
    console.log('  - lastUpdated: ISO date (YYYY-MM-DD)');
    console.log('  - jurisdictionScope: array with valid jurisdiction(s)');
    console.log('  - sources: array with at least 1 authoritative source');
    console.log('  - Each source must have: title, organization, url, lastAccessed\n');
    
    process.exit(1);
  }
  
  console.log('✅ All governance metadata validated successfully!\n');
  console.log(`   ${filesProcessed} file(s) checked`);
  console.log(`   ${errors.length} errors`);
  console.log(`   ${warnings.length} warnings\n`);
  
  process.exit(0);
}

// Run validation
main();
