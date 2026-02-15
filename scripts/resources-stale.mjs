#!/usr/bin/env node
// file: scripts/resources-stale.mjs
// Generates a staleness report for resources based on governance metadata
// Outputs to docs/resources/STALE_REPORT.md

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
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

function info(message) {
  console.log(`${colors.blue}ℹ${colors.reset} ${message}`);
}

function success(message) {
  console.log(`${colors.green}✓${colors.reset} ${message}`);
}

function warn(message) {
  console.warn(`${colors.yellow}⚠${colors.reset} ${message}`);
}

// Calculate days since last update
function daysSinceUpdate(lastUpdatedStr) {
  try {
    const lastUpdated = new Date(lastUpdatedStr);
    const now = new Date();
    const diffTime = Math.abs(now - lastUpdated);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  } catch (err) {
    return -1; // Invalid date
  }
}

// Determine staleness status
function getStalenessStatus(daysSince, reviewIntervalDays) {
  if (daysSince < 0) return 'UNKNOWN';
  if (reviewIntervalDays === undefined) return 'NO_POLICY';
  
  const threshold = reviewIntervalDays;
  const warningThreshold = threshold * 0.8; // 80% of interval
  
  if (daysSince >= threshold) return 'STALE';
  if (daysSince >= warningThreshold) return 'WARNING';
  return 'FRESH';
}

// Helper function to extract a balanced object from text starting at a position
function extractBalancedObject(text, startPos) {
  let braceCount = 0;
  let inString = false;
  let stringChar = null;
  let escaped = false;
  let start = -1;
  
  for (let i = startPos; i < text.length; i++) {
    const char = text[i];
    const prevChar = i > 0 ? text[i - 1] : '';
    
    // Handle escape sequences
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === '\\') {
      escaped = true;
      continue;
    }
    
    // Handle strings
    if ((char === '"' || char === "'" || char === '`') && !inString) {
      inString = true;
      stringChar = char;
      continue;
    }
    if (char === stringChar && inString && prevChar !== '\\') {
      inString = false;
      stringChar = null;
      continue;
    }
    if (inString) continue;
    
    // Count braces
    if (char === '{') {
      if (braceCount === 0) start = i;
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0 && start !== -1) {
        return text.substring(start, i + 1);
      }
    }
  }
  
  return null;
}

// Extract content items from resourcesRegistry.ts
function extractRegistryItems() {
  const items = [];
  
  try {
    const registryPath = join(rootDir, 'src/content/resourcesRegistry.ts');
    const registryContent = readFileSync(registryPath, 'utf-8');
    
    // Find all published items by looking for slug + status pattern
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    let match;
    
    while ((match = slugRegex.exec(registryContent)) !== null) {
      const slug = match[1];
      const matchPos = match.index;
      
      // Try to extract the full object containing this slug
      // Go backwards to find the opening brace
      let objectStart = matchPos;
      let braceCount = 0;
      for (let i = matchPos; i >= 0; i--) {
        const char = registryContent[i];
        if (char === '}') braceCount++;
        if (char === '{') {
          braceCount--;
          if (braceCount < 0) {
            objectStart = i;
            break;
          }
        }
      }
      
      // Extract the balanced object
      const itemBlock = extractBalancedObject(registryContent, objectStart);
      if (!itemBlock) continue;
      
      // Check if this is a published item
      if (!itemBlock.includes('status:') || !itemBlock.includes('"published"') && !itemBlock.includes("'published'")) {
        continue;
      }
      
      // Extract title
      const titleMatch = itemBlock.match(/title:\s*["']([^"']+)["']/);
      const title = titleMatch ? titleMatch[1] : 'Unknown';
      
      // Extract governance metadata
      if (itemBlock.includes('governance:')) {
        const govPos = itemBlock.indexOf('governance:');
        const govStartBrace = itemBlock.indexOf('{', govPos);
        const govBlock = extractBalancedObject(itemBlock, govStartBrace);
        
        if (govBlock) {
          // Extract lastUpdated
          const lastUpdatedMatch = govBlock.match(/lastUpdated:\s*["']([^"']+)["']/);
          const lastUpdated = lastUpdatedMatch ? lastUpdatedMatch[1] : null;
          
          // Extract reviewIntervalDays
          const reviewMatch = govBlock.match(/reviewIntervalDays:\s*(\d+)/);
          const reviewIntervalDays = reviewMatch ? parseInt(reviewMatch[1]) : null;
          
          items.push({
            route: `/resources/${slug}`,
            title,
            lastUpdated,
            reviewIntervalDays,
            type: 'resource',
            source: 'resourcesRegistry.ts',
          });
        } else {
          items.push({
            route: `/resources/${slug}`,
            title,
            lastUpdated: null,
            reviewIntervalDays: null,
            type: 'resource',
            source: 'resourcesRegistry.ts',
          });
        }
      } else {
        // Item without governance metadata
        items.push({
          route: `/resources/${slug}`,
          title,
          lastUpdated: null,
          reviewIntervalDays: null,
          type: 'resource',
          source: 'resourcesRegistry.ts',
        });
      }
    }
  } catch (err) {
    warn(`Failed to extract from resourcesRegistry.ts: ${err.message}`);
  }
  
  return items;
}

// Extract ResourceQA content files
function extractResourceQAFiles() {
  const items = [];
  
  try {
    const resourcesDir = join(rootDir, 'src/content/resources');
    if (!existsSync(resourcesDir)) return items;
    
    const files = readdirSync(resourcesDir).filter(f => 
      f.endsWith('.ts') && f !== 'types.ts'
    );
    
    for (const file of files) {
      const filePath = join(resourcesDir, file);
      const content = readFileSync(filePath, 'utf-8');
      
      // Extract slug
      const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
      const slug = slugMatch ? slugMatch[1] : file.replace('.ts', '');
      
      // Extract title
      const h1Match = content.match(/h1:\s*["']([^"']+)["']/);
      const title = h1Match ? h1Match[1] : 'Unknown';
      
      // Extract governance metadata using balanced object extraction
      if (content.includes('governance:')) {
        const govPos = content.indexOf('governance:');
        const govStartBrace = content.indexOf('{', govPos);
        const govBlock = extractBalancedObject(content, govStartBrace);
        
        if (govBlock) {
          // Extract lastUpdated
          const lastUpdatedMatch = govBlock.match(/lastUpdated:\s*["']([^"']+)["']/);
          const lastUpdated = lastUpdatedMatch ? lastUpdatedMatch[1] : null;
          
          // Extract reviewIntervalDays
          const reviewMatch = govBlock.match(/reviewIntervalDays:\s*(\d+)/);
          const reviewIntervalDays = reviewMatch ? parseInt(reviewMatch[1]) : null;
          
          items.push({
            route: `/resources/q/${slug}`,
            title,
            lastUpdated,
            reviewIntervalDays,
            type: 'question',
            source: file,
          });
        } else {
          items.push({
            route: `/resources/q/${slug}`,
            title,
            lastUpdated: null,
            reviewIntervalDays: null,
            type: 'question',
            source: file,
          });
        }
      } else {
        // Item without governance metadata
        items.push({
          route: `/resources/q/${slug}`,
          title,
          lastUpdated: null,
          reviewIntervalDays: null,
          type: 'question',
          source: file,
        });
      }
    }
  } catch (err) {
    warn(`Failed to extract ResourceQA files: ${err.message}`);
  }
  
  return items;
}

// Generate markdown report
function generateReport(items) {
  const now = new Date().toISOString().split('T')[0];
  
  let markdown = `# Resources Staleness Report

**Generated:** ${now}

This report identifies content that may be outdated based on governance metadata.

## Legend

- 🟢 **FRESH**: Within review interval
- 🟡 **WARNING**: Approaching review interval (>80% of threshold)
- 🔴 **STALE**: Past review interval, needs immediate review
- ⚠️ **NO_POLICY**: Missing governance metadata
- ❓ **UNKNOWN**: Invalid or missing lastUpdated date

## Summary

`;

  // Calculate statistics
  const stats = {
    total: items.length,
    fresh: 0,
    warning: 0,
    stale: 0,
    noPolicy: 0,
    unknown: 0,
  };
  
  const itemsWithStatus = items.map(item => {
    const daysSince = item.lastUpdated ? daysSinceUpdate(item.lastUpdated) : -1;
    const status = getStalenessStatus(daysSince, item.reviewIntervalDays);
    
    if (status === 'FRESH') stats.fresh++;
    else if (status === 'WARNING') stats.warning++;
    else if (status === 'STALE') stats.stale++;
    else if (status === 'NO_POLICY') stats.noPolicy++;
    else stats.unknown++;
    
    return { ...item, daysSince, status };
  });
  
  markdown += `| Status | Count | Percentage |\n`;
  markdown += `|--------|-------|------------|\n`;
  markdown += `| 🟢 Fresh | ${stats.fresh} | ${((stats.fresh / stats.total) * 100).toFixed(1)}% |\n`;
  markdown += `| 🟡 Warning | ${stats.warning} | ${((stats.warning / stats.total) * 100).toFixed(1)}% |\n`;
  markdown += `| 🔴 Stale | ${stats.stale} | ${((stats.stale / stats.total) * 100).toFixed(1)}% |\n`;
  markdown += `| ⚠️ No Policy | ${stats.noPolicy} | ${((stats.noPolicy / stats.total) * 100).toFixed(1)}% |\n`;
  markdown += `| ❓ Unknown | ${stats.unknown} | ${((stats.unknown / stats.total) * 100).toFixed(1)}% |\n`;
  markdown += `| **TOTAL** | **${stats.total}** | **100.0%** |\n\n`;
  
  // Stale items (highest priority)
  const staleItems = itemsWithStatus.filter(item => item.status === 'STALE');
  if (staleItems.length > 0) {
    markdown += `## 🔴 Stale Content (Needs Immediate Review)\n\n`;
    markdown += `These items are past their review interval and should be updated immediately.\n\n`;
    markdown += `| Route | Title | Last Updated | Days Old | Review Interval | Source |\n`;
    markdown += `|-------|-------|--------------|----------|-----------------|--------|\n`;
    
    staleItems.sort((a, b) => b.daysSince - a.daysSince);
    staleItems.forEach(item => {
      markdown += `| ${item.route} | ${item.title} | ${item.lastUpdated || 'N/A'} | ${item.daysSince >= 0 ? item.daysSince : 'N/A'} | ${item.reviewIntervalDays || 'N/A'} days | ${item.source} |\n`;
    });
    markdown += `\n`;
  }
  
  // Warning items
  const warningItems = itemsWithStatus.filter(item => item.status === 'WARNING');
  if (warningItems.length > 0) {
    markdown += `## 🟡 Content Approaching Staleness\n\n`;
    markdown += `These items are approaching their review interval and should be reviewed soon.\n\n`;
    markdown += `| Route | Title | Last Updated | Days Old | Review Interval | Source |\n`;
    markdown += `|-------|-------|--------------|----------|-----------------|--------|\n`;
    
    warningItems.sort((a, b) => b.daysSince - a.daysSince);
    warningItems.forEach(item => {
      markdown += `| ${item.route} | ${item.title} | ${item.lastUpdated || 'N/A'} | ${item.daysSince >= 0 ? item.daysSince : 'N/A'} | ${item.reviewIntervalDays || 'N/A'} days | ${item.source} |\n`;
    });
    markdown += `\n`;
  }
  
  // Missing governance items
  const noPolicyItems = itemsWithStatus.filter(item => item.status === 'NO_POLICY');
  if (noPolicyItems.length > 0) {
    markdown += `## ⚠️ Missing Governance Metadata\n\n`;
    markdown += `These items lack governance metadata and should be updated to include it.\n\n`;
    markdown += `| Route | Title | Type | Source |\n`;
    markdown += `|-------|-------|------|--------|\n`;
    
    noPolicyItems.forEach(item => {
      markdown += `| ${item.route} | ${item.title} | ${item.type} | ${item.source} |\n`;
    });
    markdown += `\n`;
  }
  
  // Fresh items (for completeness)
  const freshItems = itemsWithStatus.filter(item => item.status === 'FRESH');
  if (freshItems.length > 0) {
    markdown += `## 🟢 Fresh Content\n\n`;
    markdown += `These items are within their review interval and are considered current.\n\n`;
    markdown += `| Route | Title | Last Updated | Days Old | Review Interval | Source |\n`;
    markdown += `|-------|-------|--------------|----------|-----------------|--------|\n`;
    
    freshItems.sort((a, b) => b.daysSince - a.daysSince);
    freshItems.forEach(item => {
      markdown += `| ${item.route} | ${item.title} | ${item.lastUpdated || 'N/A'} | ${item.daysSince >= 0 ? item.daysSince : 'N/A'} | ${item.reviewIntervalDays || 'N/A'} days | ${item.source} |\n`;
    });
    markdown += `\n`;
  }
  
  // Recommendations
  markdown += `## Recommendations\n\n`;
  markdown += `1. **Review Stale Content First**: Focus on the ${stats.stale} items marked as 🔴 STALE.\n`;
  markdown += `2. **Add Governance Metadata**: ${stats.noPolicy} items are missing governance metadata.\n`;
  markdown += `3. **Plan for Warning Items**: ${stats.warning} items will become stale soon.\n`;
  markdown += `4. **Regular Reviews**: Run this report weekly to stay on top of content freshness.\n\n`;
  
  markdown += `---\n\n`;
  markdown += `*This report is automatically generated by \`pnpm resources:stale\`*\n`;
  
  return markdown;
}

// Main execution
(async () => {
  console.log(`\n${colors.bold}${colors.blue}===========================================`);
  console.log(`Resources Staleness Report Generator`);
  console.log(`===========================================\n${colors.reset}`);
  
  info('Extracting content items...');
  const registryItems = extractRegistryItems();
  const qaItems = extractResourceQAFiles();
  const allItems = [...registryItems, ...qaItems];
  
  success(`Found ${allItems.length} content items (${registryItems.length} from registry, ${qaItems.length} from QA files)`);
  
  info('Generating staleness report...');
  const report = generateReport(allItems);
  
  // Ensure output directory exists
  const outputDir = join(rootDir, 'docs/resources');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  
  const outputPath = join(outputDir, 'STALE_REPORT.md');
  writeFileSync(outputPath, report, 'utf-8');
  
  success(`Report generated: ${outputPath}`);
  
  console.log(`\n${colors.green}${colors.bold}✅ Staleness report generated successfully!${colors.reset}\n`);
})();
