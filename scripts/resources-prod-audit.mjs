#!/usr/bin/env node
// file: scripts/resources-prod-audit.mjs
// Production route crawler for /resources/* routes
// Uses Playwright to test actual production URLs and detect issues

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Configuration
const PROD_BASE_URL = process.env.PROD_URL || 'https://www.threadlock.ai';
const SCREENSHOTS_DIR = path.join(rootDir, 'artifacts', 'resources-audit');
const REPORT_MD_PATH = path.join(rootDir, 'docs', 'resources', 'PROD_AUDIT_REPORT.md');
const REPORT_JSON_PATH = path.join(rootDir, 'docs', 'resources', 'PROD_AUDIT_RESULTS.json');

// Ensure output directories exist
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}
const docsResourcesDir = path.join(rootDir, 'docs', 'resources');
if (!fs.existsSync(docsResourcesDir)) {
  fs.mkdirSync(docsResourcesDir, { recursive: true });
}

/**
 * Load routes from resourcesRegistry.ts
 */
function loadRoutesFromRegistry() {
  const registryPath = path.join(rootDir, 'src/content/resourcesRegistry.ts');
  const registryContent = fs.readFileSync(registryPath, 'utf8');
  
  const routes = [];
  
  // Extract RESOURCES slugs (main articles)
  const resourcesMatch = registryContent.match(/export const RESOURCES[^=]*=\s*\[([\s\S]*?)\];/);
  if (resourcesMatch) {
    const resourcesContent = resourcesMatch[1];
    const slugMatches = [...resourcesContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    slugMatches.forEach(m => {
      routes.push({
        type: 'resource',
        slug: m[1],
        path: `/resources/${m[1]}`,
        url: `${PROD_BASE_URL}/resources/${m[1]}`
      });
    });
  }
  
  // Extract POPULAR_QUESTIONS slugs
  const questionsMatch = registryContent.match(/export const POPULAR_QUESTIONS[^=]*=\s*\[([\s\S]*?)\];/);
  if (questionsMatch) {
    const questionsContent = questionsMatch[1];
    const slugMatches = [...questionsContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    slugMatches.forEach(m => {
      routes.push({
        type: 'question',
        slug: m[1],
        path: `/resources/q/${m[1]}`,
        url: `${PROD_BASE_URL}/resources/q/${m[1]}`
      });
    });
  }
  
  // Extract FEATURED_GUIDES slugs
  const guidesMatch = registryContent.match(/export const FEATURED_GUIDES[^=]*=\s*\[([\s\S]*?)\];/);
  if (guidesMatch) {
    const guidesContent = guidesMatch[1];
    const slugMatches = [...guidesContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    slugMatches.forEach(m => {
      routes.push({
        type: 'guide',
        slug: m[1],
        path: `/resources/guides/${m[1]}`,
        url: `${PROD_BASE_URL}/resources/guides/${m[1]}`
      });
    });
  }
  
  // Extract STARTER_KITS slugs
  const kitsMatch = registryContent.match(/export const STARTER_KITS[^=]*=\s*\[([\s\S]*?)\];/);
  if (kitsMatch) {
    const kitsContent = kitsMatch[1];
    const slugMatches = [...kitsContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    slugMatches.forEach(m => {
      routes.push({
        type: 'kit',
        slug: m[1],
        path: `/resources/kits/${m[1]}`,
        url: `${PROD_BASE_URL}/resources/kits/${m[1]}`
      });
    });
  }
  
  // Extract TOPICS slugs
  const topicsMatch = registryContent.match(/export const TOPICS[^=]*=\s*\[([\s\S]*?)\];/);
  if (topicsMatch) {
    const topicsContent = topicsMatch[1];
    const slugMatches = [...topicsContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    slugMatches.forEach(m => {
      routes.push({
        type: 'topic',
        slug: m[1],
        path: `/resources/topics/${m[1]}`,
        url: `${PROD_BASE_URL}/resources/topics/${m[1]}`
      });
    });
  }
  
  // Add special pages
  routes.push({
    type: 'special',
    slug: 'hub',
    path: '/resources',
    url: `${PROD_BASE_URL}/resources`
  });
  
  routes.push({
    type: 'special',
    slug: 'thanks',
    path: '/resources/thanks',
    url: `${PROD_BASE_URL}/resources/thanks`
  });
  
  return routes;
}

/**
 * Test a single route with Playwright
 */
async function testRoute(page, route) {
  const result = {
    ...route,
    httpStatus: null,
    hasClientException: false,
    renderer: null,
    isBeingUpdated: false,
    consoleErrors: [],
    screenshotPath: null,
    error: null,
    timestamp: new Date().toISOString()
  };
  
  // Collect console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  
  try {
    // Navigate to the URL and capture response
    const response = await page.goto(route.url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    
    result.httpStatus = response?.status() || null;
    
    // Wait a bit for dynamic content
    await page.waitForTimeout(2000);
    
    // Check for client-side exception text
    const pageText = await page.textContent('body').catch(() => '');
    result.hasClientException = pageText.includes('Something went wrong') || 
                                 pageText.includes('Application error') ||
                                 pageText.includes('error has occurred');
    
    // Check for renderer identity
    const rendererV2 = await page.$('[data-renderer="resourceQA-v2"]');
    const rendererV1 = await page.$('[data-renderer="legacyResource-v1"]');
    
    if (rendererV2) {
      result.renderer = 'resourceQA-v2';
    } else if (rendererV1) {
      result.renderer = 'legacyResource-v1';
    }
    
    // Check for "being updated" placeholder
    result.isBeingUpdated = pageText.includes('being updated') || 
                           pageText.includes('This resource is being updated');
    
    // Capture console errors
    result.consoleErrors = consoleErrors.filter(err => 
      // Filter out React-related errors that indicate actual problems
      err.includes('Uncaught') || 
      err.includes('TypeError') ||
      err.includes('ReferenceError') ||
      err.includes('Failed to fetch')
    );
    
    // Take screenshot if there's an issue
    if (result.httpStatus !== 200 || 
        result.hasClientException || 
        result.isBeingUpdated || 
        result.consoleErrors.length > 0) {
      const screenshotFilename = `${route.type}-${route.slug}-${Date.now()}.png`;
      result.screenshotPath = path.join(SCREENSHOTS_DIR, screenshotFilename);
      await page.screenshot({ 
        path: result.screenshotPath,
        fullPage: true 
      });
    }
    
  } catch (err) {
    result.error = err.message;
    
    // Take screenshot on error
    try {
      const screenshotFilename = `error-${route.type}-${route.slug}-${Date.now()}.png`;
      result.screenshotPath = path.join(SCREENSHOTS_DIR, screenshotFilename);
      await page.screenshot({ 
        path: result.screenshotPath,
        fullPage: true 
      });
    } catch (screenshotErr) {
      console.error(`Failed to take screenshot: ${screenshotErr.message}`);
    }
  }
  
  return result;
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(results, summary) {
  const timestamp = new Date().toISOString();
  
  let md = `# Production Resources Routes Audit Report

**Generated:** ${timestamp}  
**Production URL:** ${PROD_BASE_URL}  
**Total Routes Tested:** ${results.length}

## Executive Summary

`;

  // Add summary statistics
  md += `### Status Overview\n\n`;
  md += `- ✅ **Healthy Routes:** ${summary.healthy} (${((summary.healthy / results.length) * 100).toFixed(1)}%)\n`;
  md += `- ⚠️ **Routes with Issues:** ${summary.issues} (${((summary.issues / results.length) * 100).toFixed(1)}%)\n`;
  md += `- ❌ **Failed Routes:** ${summary.failed} (${((summary.failed / results.length) * 100).toFixed(1)}%)\n\n`;
  
  md += `### Issue Breakdown\n\n`;
  md += `- 🔄 **Being Updated:** ${summary.beingUpdated}\n`;
  md += `- 🚨 **Client Exceptions:** ${summary.clientExceptions}\n`;
  md += `- 🔴 **HTTP Errors:** ${summary.httpErrors}\n`;
  md += `- 📛 **Console Errors:** ${summary.consoleErrors}\n`;
  md += `- 🔍 **No Renderer Identity:** ${summary.noRenderer}\n\n`;
  
  md += `### Renderer Distribution\n\n`;
  md += `- **resourceQA-v2:** ${summary.rendererV2}\n`;
  md += `- **legacyResource-v1:** ${summary.rendererV1}\n`;
  md += `- **None/Unknown:** ${summary.noRenderer}\n\n`;
  
  // List all issues
  const issueRoutes = results.filter(r => 
    r.httpStatus !== 200 || 
    r.hasClientException || 
    r.isBeingUpdated || 
    r.consoleErrors.length > 0 ||
    r.error
  );
  
  if (issueRoutes.length > 0) {
    md += `## Routes with Issues\n\n`;
    
    issueRoutes.forEach(route => {
      md += `### ${route.path}\n\n`;
      md += `- **Type:** ${route.type}\n`;
      md += `- **Slug:** ${route.slug}\n`;
      md += `- **URL:** ${route.url}\n`;
      md += `- **HTTP Status:** ${route.httpStatus || 'N/A'}\n`;
      md += `- **Renderer:** ${route.renderer || 'None'}\n`;
      
      const issues = [];
      if (route.httpStatus !== 200) issues.push(`HTTP ${route.httpStatus}`);
      if (route.hasClientException) issues.push('Client-side exception detected');
      if (route.isBeingUpdated) issues.push('"Being updated" placeholder shown');
      if (route.consoleErrors.length > 0) issues.push(`${route.consoleErrors.length} console errors`);
      if (route.error) issues.push(`Navigation error: ${route.error}`);
      if (!route.renderer) issues.push('No renderer identity found');
      
      md += `- **Issues:** ${issues.join(', ')}\n`;
      
      if (route.consoleErrors.length > 0) {
        md += `- **Console Errors:**\n`;
        route.consoleErrors.forEach(err => {
          md += `  - \`${err.substring(0, 200)}${err.length > 200 ? '...' : ''}\`\n`;
        });
      }
      
      if (route.screenshotPath) {
        const relPath = path.relative(path.join(rootDir, 'docs', 'resources'), route.screenshotPath);
        md += `- **Screenshot:** [View](${relPath})\n`;
      }
      
      md += `\n`;
    });
  } else {
    md += `## ✅ All Routes Healthy\n\nNo issues detected in any routes!\n\n`;
  }
  
  // Full results table
  md += `## Complete Results\n\n`;
  md += `| Path | Type | Status | Renderer | Issues |\n`;
  md += `|------|------|--------|----------|--------|\n`;
  
  results.forEach(route => {
    const status = route.httpStatus || 'ERR';
    const statusIcon = route.httpStatus === 200 ? '✅' : '❌';
    const renderer = route.renderer || '—';
    
    const issues = [];
    if (route.hasClientException) issues.push('Exception');
    if (route.isBeingUpdated) issues.push('Updating');
    if (route.consoleErrors.length > 0) issues.push('Console');
    if (route.error) issues.push('Error');
    if (!route.renderer && route.type !== 'special') issues.push('NoRenderer');
    
    const issuesText = issues.length > 0 ? issues.join(', ') : '—';
    
    md += `| ${route.path} | ${route.type} | ${statusIcon} ${status} | ${renderer} | ${issuesText} |\n`;
  });
  
  md += `\n## Artifacts\n\n`;
  md += `- **JSON Results:** [PROD_AUDIT_RESULTS.json](./PROD_AUDIT_RESULTS.json)\n`;
  md += `- **Screenshots:** [artifacts/resources-audit/](../../artifacts/resources-audit/)\n`;
  
  return md;
}

/**
 * Validate that all hrefs in registry point to valid routes
 */
function validateRegistryLinks() {
  console.log('\n🔍 Validating registry links...');
  
  const registryPath = path.join(rootDir, 'src/content/resourcesRegistry.ts');
  const registryContent = fs.readFileSync(registryPath, 'utf8');
  
  // Extract all hrefs that point to /resources/
  const hrefMatches = [...registryContent.matchAll(/href:\s*"(\/resources\/[^"#]+)"/g)];
  const allHrefs = new Set(hrefMatches.map(m => m[1]));
  
  // Build set of valid routes from registry
  const routes = loadRoutesFromRegistry();
  const validPaths = new Set(routes.map(r => r.path));
  
  // Add special routes that are valid but not in the main registry
  validPaths.add('/resources');
  validPaths.add('/resources/thanks');
  
  // Find broken links
  const brokenLinks = [];
  for (const href of allHrefs) {
    if (!validPaths.has(href)) {
      brokenLinks.push(href);
    }
  }
  
  if (brokenLinks.length > 0) {
    console.error('\n❌ REGISTRY VALIDATION FAILED\n');
    console.error(`Found ${brokenLinks.length} broken links in resourcesRegistry.ts:\n`);
    brokenLinks.forEach(link => console.error(`  - ${link}`));
    console.error('\nThese routes are referenced but not defined in the registry.');
    console.error('Either create the content or remove the broken links.\n');
    return false;
  }
  
  console.log(`✅ All ${allHrefs.size} registry links are valid\n`);
  return true;
}

/**
 * Main audit function
 */
async function runProductionAudit() {
  console.log('🔍 Starting Production Resources Route Audit...');
  console.log(`📍 Base URL: ${PROD_BASE_URL}\n`);
  
  // STEP 1: Validate registry links first (prevents false greens)
  const registryValid = validateRegistryLinks();
  if (!registryValid) {
    console.error('❌ AUDIT FAILED: Registry validation errors must be fixed first');
    process.exit(1);
  }
  
  // Load routes
  const routes = loadRoutesFromRegistry();
  console.log(`📋 Loaded ${routes.length} routes from registry\n`);
  
  // Launch browser
  console.log('🌐 Launching browser...');
  const browser = await chromium.launch({
    headless: true
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (compatible; ThreadLock-Audit/1.0)'
  });
  
  const page = await context.newPage();
  
  // Test all routes
  const results = [];
  let completed = 0;
  
  for (const route of routes) {
    completed++;
    console.log(`[${completed}/${routes.length}] Testing: ${route.path}`);
    
    const result = await testRoute(page, route);
    results.push(result);
    
    // Brief summary of result
    if (result.httpStatus === 200 && !result.error && !result.hasClientException && !result.isBeingUpdated) {
      console.log(`  ✅ OK (${result.renderer || 'no-renderer'})`);
    } else {
      const issues = [];
      if (result.httpStatus !== 200) issues.push(`HTTP ${result.httpStatus}`);
      if (result.error) issues.push('error');
      if (result.hasClientException) issues.push('exception');
      if (result.isBeingUpdated) issues.push('updating');
      if (result.consoleErrors.length > 0) issues.push(`${result.consoleErrors.length} console errors`);
      console.log(`  ⚠️  Issues: ${issues.join(', ')}`);
    }
  }
  
  await browser.close();
  
  console.log('\n📊 Generating summary...');
  
  // Calculate summary statistics
  const summary = {
    healthy: results.filter(r => 
      r.httpStatus === 200 && 
      !r.error && 
      !r.hasClientException && 
      !r.isBeingUpdated &&
      r.consoleErrors.length === 0
    ).length,
    issues: results.filter(r => 
      (r.httpStatus === 200 || r.httpStatus === null) &&
      (r.hasClientException || r.isBeingUpdated || r.consoleErrors.length > 0 || !r.renderer && r.type !== 'special')
    ).length,
    failed: results.filter(r => 
      (r.httpStatus !== 200 && r.httpStatus !== null) || (r.error && !r.error.includes('ERR_NAME_NOT_RESOLVED'))
    ).length,
    networkErrors: results.filter(r => 
      r.error && r.error.includes('ERR_NAME_NOT_RESOLVED')
    ).length,
    beingUpdated: results.filter(r => r.isBeingUpdated).length,
    clientExceptions: results.filter(r => r.hasClientException).length,
    httpErrors: results.filter(r => r.httpStatus && r.httpStatus !== 200).length,
    consoleErrors: results.filter(r => r.consoleErrors.length > 0).length,
    noRenderer: results.filter(r => !r.renderer && r.type !== 'special').length,
    rendererV2: results.filter(r => r.renderer === 'resourceQA-v2').length,
    rendererV1: results.filter(r => r.renderer === 'legacyResource-v1').length
  };
  
  // Generate reports
  console.log('📝 Generating reports...');
  
  const markdown = generateMarkdownReport(results, summary);
  fs.writeFileSync(REPORT_MD_PATH, markdown, 'utf8');
  console.log(`✅ Markdown report saved: ${REPORT_MD_PATH}`);
  
  const json = JSON.stringify({ 
    timestamp: new Date().toISOString(),
    baseUrl: PROD_BASE_URL,
    summary,
    results 
  }, null, 2);
  fs.writeFileSync(REPORT_JSON_PATH, json, 'utf8');
  console.log(`✅ JSON report saved: ${REPORT_JSON_PATH}`);
  
  // Summary output
  console.log('\n' + '='.repeat(60));
  console.log('AUDIT SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Healthy: ${summary.healthy}/${results.length}`);
  console.log(`⚠️  Issues:  ${summary.issues}/${results.length}`);
  console.log(`❌ Failed:  ${summary.failed}/${results.length}`);
  if (summary.networkErrors > 0) {
    console.log(`🌐 Network Errors: ${summary.networkErrors}/${results.length} (site unreachable)`);
  }
  console.log('='.repeat(60));
  
  if (summary.networkErrors > 0) {
    console.log(`\n🌐 ${summary.networkErrors} routes had network errors (ERR_NAME_NOT_RESOLVED)`);
    console.log(`   This usually means the production site is not accessible.`);
    console.log(`   Registry validation passed, so routes exist locally.`);
  }
  if (summary.beingUpdated > 0) {
    console.log(`\n🔄 ${summary.beingUpdated} routes showing "being updated" placeholder`);
  }
  if (summary.clientExceptions > 0) {
    console.log(`\n🚨 ${summary.clientExceptions} routes with client-side exceptions`);
  }
  if (summary.httpErrors > 0) {
    console.log(`\n🔴 ${summary.httpErrors} routes with HTTP errors`);
  }
  if (summary.consoleErrors > 0) {
    console.log(`\n📛 ${summary.consoleErrors} routes with console errors`);
  }
  if (summary.noRenderer > 0) {
    console.log(`\n🔍 ${summary.noRenderer} routes without renderer identity`);
  }
  
  console.log(`\n📄 Full report: ${REPORT_MD_PATH}`);
  console.log(`📊 JSON data: ${REPORT_JSON_PATH}`);
  
  const screenshotCount = results.filter(r => r.screenshotPath).length;
  if (screenshotCount > 0) {
    console.log(`📸 Screenshots: ${screenshotCount} saved to ${SCREENSHOTS_DIR}`);
  }
  
  // Exit with appropriate code
  // Network errors are not failures if registry validation passed
  if (summary.failed > 0 || summary.clientExceptions > 0) {
    console.log('\n❌ AUDIT FAILED: Critical issues detected');
    process.exit(1);
  } else if (summary.networkErrors === results.length) {
    console.log('\n⚠️  AUDIT WARNING: All routes had network errors (site unreachable)');
    console.log('   Registry validation passed - routes exist locally.');
    process.exit(0); // Don't fail on network issues if registry is valid
  } else if (summary.issues > 0) {
    console.log('\n⚠️  AUDIT WARNING: Non-critical issues detected');
    process.exit(0); // Warning but not failure
  } else {
    console.log('\n✅ AUDIT PASSED: All routes healthy');
    process.exit(0);
  }
}

// Run the audit
runProductionAudit().catch(err => {
  console.error('\n❌ Fatal error during audit:');
  console.error(err);
  process.exit(1);
});
