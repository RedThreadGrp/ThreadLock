#!/usr/bin/env node
/**
 * Verification script for PR #82 deployment
 * 
 * This script checks if the PR #82 changes are actually deployed to production
 * by making HTTP requests to live pages and inspecting the HTML.
 */

import https from 'https';

const SITE_URL = 'https://threadlock.ai';
const TEST_PAGES = [
  '/resources/topics/proof-of-service',
  '/resources/q/proof-of-service-definition',
  '/resources/guides/self-representation-complete',
  '/resources/kits/hearing-soon',
  '/resources/legal-glossary/contemporaneous-evidence',
];

// Expected indicators that PR #82 is deployed
const PR_82_INDICATORS = [
  'data-renderer="topic-v2"',
  'data-renderer="resourceQA-v2"',
  'data-renderer="guide-v2"',
  'data-renderer="kit-v2"',
  'data-renderer="glossary-v2"',
];

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function checkPage(path, expectedRenderer) {
  const url = `${SITE_URL}${path}`;
  console.log(`\nChecking: ${url}`);
  
  try {
    const html = await fetchPage(url);
    
    // Check for the expected data-renderer attribute
    const hasRenderer = html.includes(expectedRenderer);
    
    // Check for ResourceLayoutV2 structure
    const hasLayout = html.includes('max-w-5xl') || html.includes('max-w-6xl') || html.includes('max-w-4xl');
    
    if (hasRenderer && hasLayout) {
      console.log(`  ✅ PASS: Found ${expectedRenderer} with V2 layout`);
      return true;
    } else {
      console.log(`  ❌ FAIL: Missing expected indicators`);
      console.log(`     - Has renderer: ${hasRenderer}`);
      console.log(`     - Has V2 layout: ${hasLayout}`);
      return false;
    }
  } catch (error) {
    console.log(`  ❌ ERROR: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('PR #82 Deployment Verification');
  console.log('='.repeat(60));
  
  const results = [];
  
  results.push(await checkPage('/resources/topics/proof-of-service', 'data-renderer="topic-v2"'));
  results.push(await checkPage('/resources/q/proof-of-service-definition', 'data-renderer="resourceQA-v2"'));
  results.push(await checkPage('/resources/guides/self-representation-complete', 'data-renderer="guide-v2"'));
  results.push(await checkPage('/resources/kits/hearing-soon', 'data-renderer="kit-v2"'));
  results.push(await checkPage('/resources/legal-glossary/contemporaneous-evidence', 'data-renderer="glossary-v2"'));
  
  const passed = results.filter(r => r).length;
  const total = results.length;
  
  console.log('\n' + '='.repeat(60));
  console.log(`Results: ${passed}/${total} tests passed`);
  console.log('='.repeat(60));
  
  if (passed === total) {
    console.log('\n✅ SUCCESS: PR #82 changes are LIVE on production!');
    process.exit(0);
  } else {
    console.log('\n❌ FAILURE: PR #82 changes are NOT fully deployed');
    console.log('\nNext steps:');
    console.log('1. Check Vercel dashboard deployment status');
    console.log('2. Verify production alias points to latest deployment');
    console.log('3. Clear CDN cache if needed');
    console.log('4. Trigger manual redeploy (see PR_82_DEPLOYMENT_FIX.md)');
    process.exit(1);
  }
}

main().catch(console.error);
