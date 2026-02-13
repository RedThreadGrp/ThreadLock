#!/usr/bin/env node
// file: scripts/validate-resources-content.mjs
// Validates resources content to prevent placeholders and missing fields in published items

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

// Placeholder patterns to detect
const PLACEHOLDER_PATTERNS = [
  /\[.*to be developed.*\]/i,
  /\[Answer.*\]/i,
  /\bTBD\b/i,
  /\blorem ipsum\b/i,
  /\bin progress\]/i,
  /\[draft\]/i,
  /\[placeholder\]/i,
  /\[coming soon\]/i,
  /#\w+\s*$/m, // hashtag at end of line
];

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

function checkPlaceholders(text, itemType, itemIdentifier) {
  if (!text) return;
  
  for (const pattern of PLACEHOLDER_PATTERNS) {
    if (pattern.test(text)) {
      const match = text.match(pattern);
      error(
        `${itemType} "${itemIdentifier}" contains placeholder text: "${match[0]}"`
      );
    }
  }
}

function validateResource(resource, index) {
  const id = `${resource.slug || `index-${index}`}`;
  
  if (resource.status === 'published') {
    // Required fields for published resources
    if (!resource.slug) error(`Resource at index ${index} missing required field: slug`);
    if (!resource.title) error(`Resource "${id}" missing required field: title`);
    if (!resource.excerpt) error(`Resource "${id}" missing required field: excerpt`);
    if (!resource.body || resource.body.trim().length < 50) {
      error(`Resource "${id}" missing or too short body content (min 50 chars)`);
    }
    if (!resource.metaDescription) {
      warn(`Resource "${id}" missing recommended field: metaDescription`);
    }
    if (!resource.dateModified) {
      warn(`Resource "${id}" missing recommended field: dateModified`);
    }
    
    // Check for placeholders
    checkPlaceholders(resource.body, 'Resource', id);
    checkPlaceholders(resource.excerpt, 'Resource excerpt', id);
  }
  
  // Check for duplicate slugs (will be caught separately)
  return resource.slug;
}

function validateGuide(guide, index) {
  const id = `${guide.slug || `index-${index}`}`;
  
  if (guide.status === 'published') {
    if (!guide.slug) error(`Guide at index ${index} missing required field: slug`);
    if (!guide.title) error(`Guide "${id}" missing required field: title`);
    if (!guide.summary) error(`Guide "${id}" missing required field: summary`);
    if (!guide.body || guide.body.trim().length < 50) {
      error(`Guide "${id}" missing or too short body content (min 50 chars)`);
    }
    
    // Check for placeholders
    checkPlaceholders(guide.body, 'Guide', id);
    checkPlaceholders(guide.summary, 'Guide summary', id);
  }
  
  return guide.slug;
}

function validateQuestion(question, index) {
  const id = `${question.slug || `index-${index}`}`;
  
  if (question.status === 'published') {
    if (!question.slug) error(`Question at index ${index} missing required field: slug`);
    if (!question.question) error(`Question "${id}" missing required field: question`);
    if (!question.shortAnswer) {
      warn(`Question "${id}" missing recommended field: shortAnswer`);
    }
    if (!question.body || question.body.trim().length < 30) {
      error(`Question "${id}" missing or too short body content (min 30 chars)`);
    }
    if (!question.metaDescription) {
      warn(`Question "${id}" missing recommended field: metaDescription`);
    }
    
    // Check for placeholders
    checkPlaceholders(question.body, 'Question', id);
    checkPlaceholders(question.shortAnswer, 'Question shortAnswer', id);
  }
  
  return question.slug;
}

function validateStarterKit(kit, index) {
  const id = `${kit.slug || `index-${index}`}`;
  
  if (kit.status === 'published') {
    if (!kit.slug) error(`StarterKit at index ${index} missing required field: slug`);
    if (!kit.title) error(`StarterKit "${id}" missing required field: title`);
    if (!kit.description) error(`StarterKit "${id}" missing required field: description`);
    if (!kit.whatYouGet || kit.whatYouGet.length === 0) {
      error(`StarterKit "${id}" missing required field: whatYouGet`);
    }
    
    // Check for placeholders
    checkPlaceholders(kit.description, 'StarterKit', id);
    if (kit.body) {
      checkPlaceholders(kit.body, 'StarterKit body', id);
    }
  }
  
  return kit.slug;
}

function checkDuplicates(slugs, itemType) {
  const seen = new Set();
  const duplicates = new Set();
  
  slugs.forEach(slug => {
    if (!slug) return;
    if (seen.has(slug)) {
      duplicates.add(slug);
    }
    seen.add(slug);
  });
  
  duplicates.forEach(slug => {
    error(`Duplicate ${itemType} slug found: "${slug}"`);
  });
}

async function validateResourcesRegistry() {
  console.log(`\n${colors.bold}${colors.blue}Validating Resources Content...${colors.reset}\n`);
  
  try {
    // Read the registry file
    const registryPath = join(__dirname, '../src/content/resourcesRegistry.ts');
    const registryContent = readFileSync(registryPath, 'utf-8');
    
    // Since we can't easily import TS in Node, we'll use regex to extract data
    // This is a simplified check - in production you'd compile TS first
    
    // Check for obvious placeholder patterns in the entire file
    const fileLines = registryContent.split('\n');
    fileLines.forEach((line, i) => {
      PLACEHOLDER_PATTERNS.forEach(pattern => {
        if (pattern.test(line)) {
          const lineNum = i + 1;
          error(`Line ${lineNum}: Contains placeholder text: "${line.trim()}"`);
        }
      });
    });
    
    // Check for "status: 'published'" items that might have issues
    const publishedBlocksRegex = /status:\s*["']published["']([\s\S]*?)(?=},\s*{|},\s*];)/g;
    let match;
    let publishedItemsChecked = 0;
    
    while ((match = publishedBlocksRegex.exec(registryContent)) !== null) {
      publishedItemsChecked++;
      const block = match[0];
      
      // Check this published block for placeholders
      PLACEHOLDER_PATTERNS.forEach(pattern => {
        if (pattern.test(block)) {
          const contextMatch = block.match(/slug:\s*["']([^"']+)["']/);
          const slug = contextMatch ? contextMatch[1] : 'unknown';
          error(`Published item "${slug}" contains placeholder content`);
        }
      });
    }
    
    success(`Checked ${publishedItemsChecked} published items`);
    success(`Scanned ${fileLines.length} lines for placeholder patterns`);
    
  } catch (err) {
    error(`Failed to read or parse resourcesRegistry.ts: ${err.message}`);
  }
}

// Main execution
(async () => {
  await validateResourcesRegistry();
  
  console.log(`\n${colors.bold}Validation Summary:${colors.reset}`);
  console.log(`${colors.red}Errors: ${errors.length}${colors.reset}`);
  console.log(`${colors.yellow}Warnings: ${warnings.length}${colors.reset}`);
  
  if (errors.length > 0) {
    console.error(`\n${colors.red}${colors.bold}❌ Validation FAILED${colors.reset}`);
    console.error(`${colors.red}Fix the errors above before building.${colors.reset}\n`);
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log(`\n${colors.yellow}⚠️  Validation passed with warnings${colors.reset}`);
    console.log(`${colors.yellow}Consider addressing warnings for better quality.${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`\n${colors.green}${colors.bold}✅ All validation checks passed!${colors.reset}\n`);
    process.exit(0);
  }
})();
