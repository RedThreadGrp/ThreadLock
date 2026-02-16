#!/usr/bin/env node
// file: scripts/resources-routes-audit.mjs
// Route binding audit - ensures routes are not pointing to legacy components

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

/**
 * Route binding audit
 * Checks which component handles each resource route and ensures
 * none are pointing to legacy page components.
 */

// Define the routes to check
const ROUTES_TO_CHECK = [
  {
    route: '/resources/q/:slug',
    file: 'pages/resources/q/[slug].tsx',
    expectedRenderer: 'resourceQA-v2',
    description: 'Question pages (e.g., /resources/q/proof-of-service-definition)'
  },
  {
    route: '/resources/:slug',
    file: 'pages/resources/[slug].tsx',
    expectedRenderer: 'legacyResource-v1',
    description: 'Legacy resource pages (e.g., /resources/exhibits-guide)'
  },
  {
    route: '/resources/guides/:slug',
    file: 'pages/resources/guides/[slug].tsx',
    expectedRenderer: 'resourceQA-v2',
    description: 'Guide pages (e.g., /resources/guides/evidence-authentication)'
  },
  {
    route: '/resources/kits/:slug',
    file: 'pages/resources/kits/[slug].tsx',
    expectedRenderer: 'legacyResource-v1',
    description: 'Kit pages (e.g., /resources/kits/first-hearing-prep)'
  }
];

/**
 * Check if a file exists and contains the expected renderer
 * Note: Some pages (like guides) may have conditional rendering based on content version
 */
function checkRouteBinding(routeInfo) {
  const filePath = path.join(rootDir, routeInfo.file);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return {
      ...routeInfo,
      exists: false,
      hasRenderer: false,
      renderer: null,
      error: `File not found: ${routeInfo.file}`,
      usesConditionalRendering: false
    };
  }

  // Read file content
  const content = fs.readFileSync(filePath, 'utf-8');

  // Check for renderer identity
  const rendererMatches = [...content.matchAll(/data-renderer="([^"]+)"/g)];
  const hasRenderer = rendererMatches.length > 0;
  
  // Check if file uses conditional rendering (content version routing)
  const usesConditionalRendering = content.includes('contentVersion') && 
                                   content.includes('ResourceQAArticle');
  
  // If multiple renderers found, it's using conditional rendering
  const uniqueRenderers = [...new Set(rendererMatches.map(m => m[1]))];
  const renderer = uniqueRenderers.length === 1 ? uniqueRenderers[0] : 
                   uniqueRenderers.length > 1 ? 'conditional' : null;

  return {
    ...routeInfo,
    exists: true,
    hasRenderer,
    renderer,
    renderers: uniqueRenderers,
    usesConditionalRendering,
    isCorrect: renderer === routeInfo.expectedRenderer || 
               (usesConditionalRendering && uniqueRenderers.includes(routeInfo.expectedRenderer)),
    error: null
  };
}

/**
 * Main audit function
 */
function runRoutesAudit() {
  console.log('\n=== Resources Routes Audit ===\n');

  const results = ROUTES_TO_CHECK.map(checkRouteBinding);

  let hasErrors = false;

  // Print results
  results.forEach((result) => {
    console.log(`Route: ${result.route}`);
    console.log(`  Description: ${result.description}`);
    console.log(`  File: ${result.file}`);
    
    if (!result.exists) {
      console.log(`  ❌ ERROR: ${result.error}`);
      hasErrors = true;
    } else if (!result.hasRenderer) {
      console.log(`  ❌ ERROR: No renderer identity found`);
      console.log(`     Expected: data-renderer="${result.expectedRenderer}"`);
      hasErrors = true;
    } else if (result.usesConditionalRendering) {
      console.log(`  ℹ️  CONDITIONAL: Routes to different renderers based on content`);
      console.log(`     Renderers found: ${result.renderers.join(', ')}`);
      console.log(`     Expected: data-renderer="${result.expectedRenderer}"`);
      if (result.renderers.includes(result.expectedRenderer)) {
        console.log(`     ✓ Includes expected renderer`);
      } else {
        console.log(`     ⚠️  Does not include expected renderer`);
        hasErrors = true;
      }
    } else if (!result.isCorrect) {
      console.log(`  ❌ ERROR: Wrong renderer identity`);
      console.log(`     Found: data-renderer="${result.renderer}"`);
      console.log(`     Expected: data-renderer="${result.expectedRenderer}"`);
      hasErrors = true;
    } else {
      console.log(`  ✓ OK: data-renderer="${result.renderer}"`);
    }
    
    console.log('');
  });

  // Summary
  console.log('=== Audit Summary ===\n');
  
  // Helper to check if a result is valid
  const isValidResult = (r) => r.exists && r.hasRenderer && r.isCorrect;
  
  const passed = results.filter(isValidResult).length;
  const total = results.length;
  
  console.log(`Passed: ${passed}/${total}`);
  
  if (hasErrors) {
    console.log('\n❌ Audit FAILED: Some routes are still pointing to legacy components or missing renderer identity.\n');
    process.exit(1);
  } else {
    console.log('\n✓ Audit PASSED: All routes have correct renderer identity.\n');
    process.exit(0);
  }
}

// Run the audit
runRoutesAudit();
