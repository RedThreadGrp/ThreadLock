#!/usr/bin/env node

/**
 * Generate Marketing Artifacts
 * 
 * This script automatically generates up-to-date marketing content inventories:
 * - Content inventory (all markdown files in /content)
 * - Internal link map (links between content files)
 * - SEO health report (meta tags, word counts, last modified dates)
 * 
 * Run: node scripts/generate-marketing-artifacts.mjs
 * or: npm run content:generate
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'content');
const OUTPUT_DIR = path.join(CONTENT_DIR, 'generated');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Get last modified date from git history
 */
function getLastModifiedDate(filePath) {
  try {
    const gitDate = execSync(
      `git log -1 --format="%ai" -- "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim();
    return gitDate || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

/**
 * Extract frontmatter from markdown file
 */
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      frontmatter[key.trim()] = value;
    }
  });
  
  return frontmatter;
}

/**
 * Extract internal links from markdown content
 */
function extractInternalLinks(content) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[2];
    // Only internal links (starting with / or relative paths)
    if (url.startsWith('/') || (!url.startsWith('http') && !url.startsWith('#'))) {
      links.push({
        text: match[1],
        url: url
      });
    }
  }
  
  return links;
}

/**
 * Calculate word count (excluding frontmatter and code blocks)
 */
function getWordCount(content) {
  // Remove frontmatter
  content = content.replace(/^---\n[\s\S]*?\n---/, '');
  // Remove code blocks
  content = content.replace(/```[\s\S]*?```/g, '');
  // Remove inline code
  content = content.replace(/`[^`]+`/g, '');
  // Count words
  const words = content.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir, basePath = '') {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      // Skip generated and archive directories
      if (entry.name === 'generated' || entry.name === 'archive') {
        continue;
      }
      files.push(...findMarkdownFiles(fullPath, relativePath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push({
        path: fullPath,
        relativePath: relativePath
      });
    }
  }
  
  return files;
}

/**
 * Generate content inventory
 */
function generateContentInventory() {
  console.log('Generating content inventory...');
  
  const files = findMarkdownFiles(CONTENT_DIR);
  const inventory = [];
  
  for (const file of files) {
    const content = fs.readFileSync(file.path, 'utf-8');
    const frontmatter = extractFrontmatter(content);
    const wordCount = getWordCount(content);
    const internalLinks = extractInternalLinks(content);
    const lastModified = getLastModifiedDate(file.path);
    
    inventory.push({
      path: file.relativePath,
      title: frontmatter?.title || path.basename(file.path, '.md'),
      description: frontmatter?.description || 'No description',
      topic: frontmatter?.topic || 'uncategorized',
      contentType: frontmatter?.content_type || 'unknown',
      lastReviewed: frontmatter?.last_reviewed || 'Not specified',
      lastModified: lastModified,
      wordCount: wordCount,
      internalLinkCount: internalLinks.length,
      aiReady: frontmatter?.ai_ready === 'true'
    });
  }
  
  // Sort by path
  inventory.sort((a, b) => a.path.localeCompare(b.path));
  
  // Generate markdown report
  const timestamp = new Date().toISOString();
  let report = `# Content Inventory\n\n`;
  report += `**Last Generated:** ${timestamp}  \n`;
  report += `**Total Content Files:** ${inventory.length}\n\n`;
  report += `---\n\n`;
  
  // Summary by content type
  const byType = {};
  inventory.forEach(item => {
    byType[item.contentType] = (byType[item.contentType] || 0) + 1;
  });
  
  report += `## Summary by Content Type\n\n`;
  Object.entries(byType).sort().forEach(([type, count]) => {
    report += `- **${type}:** ${count} files\n`;
  });
  report += `\n---\n\n`;
  
  // Detailed inventory
  report += `## Detailed Inventory\n\n`;
  
  let currentDir = '';
  inventory.forEach(item => {
    const dir = path.dirname(item.path);
    if (dir !== currentDir) {
      currentDir = dir;
      report += `\n### ${dir}/\n\n`;
    }
    
    report += `#### ${item.title}\n\n`;
    report += `- **File:** \`${item.path}\`\n`;
    report += `- **Description:** ${item.description}\n`;
    report += `- **Topic:** ${item.topic}\n`;
    report += `- **Content Type:** ${item.contentType}\n`;
    report += `- **Word Count:** ${item.wordCount}\n`;
    report += `- **Internal Links:** ${item.internalLinkCount}\n`;
    report += `- **Last Reviewed:** ${item.lastReviewed}\n`;
    report += `- **Last Modified:** ${item.lastModified}\n`;
    report += `- **AI Ready:** ${item.aiReady ? '✅ Yes' : '❌ No'}\n\n`;
  });
  
  // Write report
  const outputPath = path.join(OUTPUT_DIR, 'content-inventory.md');
  fs.writeFileSync(outputPath, report);
  console.log(`✓ Content inventory written to ${outputPath}`);
  
  return inventory;
}

/**
 * Generate internal link map
 */
function generateInternalLinkMap(inventory) {
  console.log('Generating internal link map...');
  
  const linkMap = [];
  
  for (const item of inventory) {
    const fullPath = path.join(CONTENT_DIR, item.path);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const links = extractInternalLinks(content);
    
    if (links.length > 0) {
      linkMap.push({
        source: item.path,
        title: item.title,
        links: links
      });
    }
  }
  
  // Generate markdown report
  const timestamp = new Date().toISOString();
  let report = `# Internal Link Map\n\n`;
  report += `**Last Generated:** ${timestamp}  \n`;
  report += `**Files with Links:** ${linkMap.length}\n\n`;
  report += `---\n\n`;
  
  report += `## Link Structure\n\n`;
  
  linkMap.forEach(item => {
    report += `### ${item.title}\n\n`;
    report += `**Source:** \`${item.source}\`\n\n`;
    report += `**Links to:**\n`;
    item.links.forEach(link => {
      report += `- [${link.text}](${link.url})\n`;
    });
    report += `\n`;
  });
  
  // Write report
  const outputPath = path.join(OUTPUT_DIR, 'internal-link-map.md');
  fs.writeFileSync(outputPath, report);
  console.log(`✓ Internal link map written to ${outputPath}`);
}

/**
 * Generate SEO health report
 */
function generateSEOHealthReport(inventory) {
  console.log('Generating SEO health report...');
  
  const timestamp = new Date().toISOString();
  let report = `# SEO Health Report\n\n`;
  report += `**Last Generated:** ${timestamp}  \n`;
  report += `**Total Files Analyzed:** ${inventory.length}\n\n`;
  report += `---\n\n`;
  
  // Check for common SEO issues
  const issues = {
    noDescription: [],
    shortContent: [],
    noAIOptimization: [],
    staleContent: []
  };
  
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
  inventory.forEach(item => {
    if (!item.description || item.description === 'No description') {
      issues.noDescription.push(item);
    }
    if (item.wordCount < 500) {
      issues.shortContent.push(item);
    }
    if (!item.aiReady) {
      issues.noAIOptimization.push(item);
    }
    
    const lastReviewDate = new Date(item.lastReviewed);
    if (lastReviewDate < sixMonthsAgo) {
      issues.staleContent.push(item);
    }
  });
  
  report += `## Health Summary\n\n`;
  report += `- ✅ **Good:** ${inventory.length - issues.noDescription.length} files have descriptions\n`;
  report += `- ✅ **Good:** ${inventory.length - issues.shortContent.length} files have adequate content (>500 words)\n`;
  report += `- ✅ **Good:** ${inventory.length - issues.noAIOptimization.length} files are AI-optimized\n`;
  report += `- ⚠️ **Warning:** ${issues.staleContent.length} files may need review (>6 months since last review)\n\n`;
  
  if (issues.noDescription.length > 0) {
    report += `## ❌ Missing Descriptions\n\n`;
    issues.noDescription.forEach(item => {
      report += `- **${item.title}** (\`${item.path}\`)\n`;
    });
    report += `\n`;
  }
  
  if (issues.shortContent.length > 0) {
    report += `## ⚠️ Short Content (< 500 words)\n\n`;
    issues.shortContent.forEach(item => {
      report += `- **${item.title}** (\`${item.path}\`) - ${item.wordCount} words\n`;
    });
    report += `\n`;
  }
  
  if (issues.noAIOptimization.length > 0) {
    report += `## ⚠️ Not AI-Optimized\n\n`;
    issues.noAIOptimization.forEach(item => {
      report += `- **${item.title}** (\`${item.path}\`)\n`;
    });
    report += `\n`;
  }
  
  if (issues.staleContent.length > 0) {
    report += `## ⚠️ Needs Review (Last reviewed >6 months ago)\n\n`;
    issues.staleContent.forEach(item => {
      report += `- **${item.title}** (\`${item.path}\`) - Last reviewed: ${item.lastReviewed}\n`;
    });
    report += `\n`;
  }
  
  // Write report
  const outputPath = path.join(OUTPUT_DIR, 'seo-health.md');
  fs.writeFileSync(outputPath, report);
  console.log(`✓ SEO health report written to ${outputPath}`);
}

/**
 * Validate cornerstone articles
 */
function validateCornerstoneArticles(inventory) {
  console.log('Validating cornerstone articles...');
  
  const cornerstoneArticles = inventory.filter(item => 
    item.contentType === 'cornerstone-authority' || 
    item.path.includes('authority/') && item.path.match(/(evidence-authentication|digital-exhibit|ai-hallucinations|contemporaneous|metadata|motion-practice|family-court-rule|chain-of-custody|judicial-treatment|pro-se)/)
  );
  
  const errors = [];
  const warnings = [];
  
  // Articles requiring jurisdiction comparison tables
  const requiresJurisdictionTable = [
    'evidence-authentication-family-court.md',
    'digital-exhibit-admissibility-standards.md',
    'ai-hallucinations-legal-filings.md',
    'motion-practice-self-represented-litigants.md',
    'family-court-rule-variations-by-state.md'
  ];
  
  cornerstoneArticles.forEach(article => {
    const fullPath = path.join(CONTENT_DIR, article.path);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const filename = path.basename(article.path);
    
    // Check word count >= 2,800
    if (article.wordCount < 2800) {
      errors.push(`${filename}: Word count ${article.wordCount} below minimum 2,800`);
    }
    
    // Check for "How to Cite This Page" section
    if (!content.includes('## How to Cite This Page')) {
      errors.push(`${filename}: Missing "How to Cite This Page" section`);
    }
    
    // Check for schema block
    if (!content.includes('<script type="application/ld+json">')) {
      errors.push(`${filename}: Missing schema.org JSON-LD block`);
    }
    
    // Check for jurisdiction comparison table where required
    if (requiresJurisdictionTable.includes(filename)) {
      if (!content.includes('| Jurisdiction |') && !content.includes('|--------------|')) {
        warnings.push(`${filename}: Missing jurisdiction comparison table (required for this article)`);
      }
    }
    
    // Check for References section
    if (!content.includes('## References')) {
      warnings.push(`${filename}: Missing References section`);
    }
  });
  
  // Generate validation report
  const timestamp = new Date().toISOString();
  let report = `# Cornerstone Articles Validation Report\n\n`;
  report += `**Last Generated:** ${timestamp}  \n`;
  report += `**Articles Validated:** ${cornerstoneArticles.length}\n\n`;
  report += `---\n\n`;
  
  if (errors.length === 0 && warnings.length === 0) {
    report += `## ✅ All Validation Checks Passed\n\n`;
    report += `All ${cornerstoneArticles.length} cornerstone articles meet quality standards.\n\n`;
  } else {
    if (errors.length > 0) {
      report += `## ❌ Errors (${errors.length})\n\n`;
      errors.forEach(error => {
        report += `- ${error}\n`;
      });
      report += `\n`;
    }
    
    if (warnings.length > 0) {
      report += `## ⚠️ Warnings (${warnings.length})\n\n`;
      warnings.forEach(warning => {
        report += `- ${warning}\n`;
      });
      report += `\n`;
    }
  }
  
  // List all cornerstone articles with stats
  report += `## Cornerstone Articles Summary\n\n`;
  cornerstoneArticles.forEach(article => {
    report += `### ${article.title}\n\n`;
    report += `- **File:** \`${article.path}\`\n`;
    report += `- **Word Count:** ${article.wordCount}\n`;
    report += `- **Internal Links:** ${article.internalLinkCount}\n`;
    report += `- **Last Reviewed:** ${article.lastReviewed}\n\n`;
  });
  
  // Write report
  const outputPath = path.join(OUTPUT_DIR, 'cornerstone-validation.md');
  fs.writeFileSync(outputPath, report);
  console.log(`✓ Cornerstone validation written to ${outputPath}`);
  
  // Exit with error if critical issues found
  if (errors.length > 0) {
    console.error(`\n❌ Cornerstone validation failed with ${errors.length} error(s)`);
    console.error('Fix errors before proceeding.\n');
    process.exit(1);
  }
  
  if (warnings.length > 0) {
    console.warn(`\n⚠️  Cornerstone validation completed with ${warnings.length} warning(s)`);
  }
  
  return { errors, warnings };
}

/**
 * Main execution
 */
function main() {
  console.log('=== Marketing Artifacts Generation ===\n');
  
  try {
    const inventory = generateContentInventory();
    generateInternalLinkMap(inventory);
    generateSEOHealthReport(inventory);
    validateCornerstoneArticles(inventory);
    
    console.log('\n✓ All marketing artifacts generated successfully!');
    console.log(`\nGenerated files in ${OUTPUT_DIR}:`);
    console.log('  - content-inventory.md');
    console.log('  - internal-link-map.md');
    console.log('  - seo-health.md');
    console.log('  - cornerstone-validation.md');
  } catch (error) {
    console.error('Error generating marketing artifacts:', error);
    process.exit(1);
  }
}

main();
