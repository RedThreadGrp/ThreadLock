#!/usr/bin/env node
// file: scripts/check-inline-icon-label-usage.mjs
// Lint check to enforce InlineIconLabel usage for icon+label rows

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

/**
 * Check for icon+label patterns that should use InlineIconLabel
 * 
 * Patterns to detect:
 * 1. Text icon (emoji or symbol) followed by text in flex container
 * 2. Icon component followed by text without InlineIconLabel wrapper
 * 
 * Exceptions (should NOT use InlineIconLabel):
 * - Navigation links with arrows (← Back to...)
 * - Badges with status indicators (dot + text)
 * - Button groups where icon is in separate element
 */

const PATTERNS_TO_CHECK = [
  {
    // Question mark icon followed by text (common pattern in related questions)
    // Example: <span>?</span><span>Question text</span>
    pattern: /<span[^>]*>\?<\/span>\s*<span[^>]*>[^<]+<\/span>/g,
    description: 'Question mark icon followed by text span',
    severity: 'error'
  },
];

const ALLOWED_EXCEPTIONS = [
  /← Back to/,  // Navigation links
  /inline-flex items-center gap-2 rounded-full.*In Progress/,  // Status badges
  /inline-flex items-center gap-2 text-sm text-brand-orange/,  // Back links
];

/**
 * Check if a match is an allowed exception
 */
function isAllowedException(context) {
  return ALLOWED_EXCEPTIONS.some(exception => exception.test(context));
}

/**
 * Check a single file for violations
 */
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const violations = [];

  // Check if file uses InlineIconLabel
  const usesInlineIconLabel = content.includes('InlineIconLabel');

  PATTERNS_TO_CHECK.forEach(({ pattern, description, severity }) => {
    const lines = content.split('\n');
    
    // Create RegExp once outside the loop
    const regex = new RegExp(pattern.source, pattern.flags);
    
    lines.forEach((line, lineIndex) => {
      // Reset lastIndex for global regex
      regex.lastIndex = 0;
      let match;
      
      while ((match = regex.exec(line)) !== null) {
        // Get context (surrounding lines)
        const contextStart = Math.max(0, lineIndex - 2);
        const contextEnd = Math.min(lines.length, lineIndex + 3);
        const context = lines.slice(contextStart, contextEnd).join('\n');

        // Check if this is an exception
        if (isAllowedException(context)) {
          continue;
        }

        // Check if InlineIconLabel is used in the context
        if (context.includes('InlineIconLabel')) {
          continue;
        }

        violations.push({
          file: filePath,
          line: lineIndex + 1,
          match: match[0],
          description,
          severity,
          context: line.trim()
        });
      }
    });
  });

  return violations;
}

/**
 * Find all TSX files in pages and components directories
 */
function findTsxFiles(dir) {
  const files = [];
  
  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        // Skip node_modules, .next, etc.
        if (!['node_modules', '.next', 'dist', 'build'].includes(entry.name)) {
          walk(fullPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

/**
 * Main lint check
 */
function runLintCheck() {
  console.log('\n=== InlineIconLabel Usage Check ===\n');

  const dirsToCheck = [
    path.join(rootDir, 'pages/resources'),
    path.join(rootDir, 'src/components'),
  ];

  let allViolations = [];

  dirsToCheck.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = findTsxFiles(dir);
      files.forEach(file => {
        const violations = checkFile(file);
        allViolations = allViolations.concat(violations);
      });
    }
  });

  // Group violations by severity
  const errors = allViolations.filter(v => v.severity === 'error');
  const warnings = allViolations.filter(v => v.severity === 'warning');

  // Print violations
  if (errors.length > 0) {
    console.log('❌ ERRORS:\n');
    errors.forEach(v => {
      console.log(`  ${v.file}:${v.line}`);
      console.log(`    ${v.description}`);
      console.log(`    ${v.context}`);
      console.log('');
    });
  }

  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:\n');
    warnings.forEach(v => {
      console.log(`  ${v.file}:${v.line}`);
      console.log(`    ${v.description}`);
      console.log(`    ${v.context}`);
      console.log('');
    });
  }

  // Summary
  console.log('=== Summary ===\n');
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    console.log('\n❌ FAILED: Icon+label patterns found that should use InlineIconLabel.\n');
    console.log('Fix: Wrap icon+text patterns with InlineIconLabel component for consistent alignment.\n');
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log('\n⚠️  PASSED with warnings: Review the warnings above.\n');
    process.exit(0);
  } else {
    console.log('\n✓ PASSED: All icon+label patterns use InlineIconLabel correctly.\n');
    process.exit(0);
  }
}

// Run the lint check
runLintCheck();
