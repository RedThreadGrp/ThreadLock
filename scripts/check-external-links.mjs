#!/usr/bin/env node
// scripts/check-external-links.mjs
// Automated link checker for external resources
// Performs HEAD requests to verify links are accessible

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔗 Checking external resource links...\n');

// Load the external resources registry
const registryPath = join(rootDir, 'src/content/externalResources.registry.ts');
const registryContent = readFileSync(registryPath, 'utf-8');

// Extract resources using regex
function extractResources() {
  const regex = /export const EXTERNAL_RESOURCES:[^=]*=\s*\[([\s\S]*?)\];/s;
  const match = registryContent.match(regex);
  if (!match) {
    console.error('❌ Could not find EXTERNAL_RESOURCES array');
    process.exit(1);
  }

  const resourceMatches = match[1].matchAll(/\{[\s\S]*?\}/g);
  const resources = [];

  for (const resourceMatch of resourceMatches) {
    const resourceText = resourceMatch[0];
    const idMatch = resourceText.match(/id:\s*["']([^"']+)["']/);
    const urlMatch = resourceText.match(/url:\s*["']([^"']+)["']/);
    const titleMatch = resourceText.match(/title:\s*["']([^"']+)["']/);

    if (idMatch && urlMatch) {
      resources.push({
        id: idMatch[1],
        url: urlMatch[1],
        title: titleMatch ? titleMatch[1] : idMatch[1],
      });
    }
  }

  return resources;
}

// Check a URL using HEAD request with follow redirects
function checkUrl(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      method: 'HEAD',
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      timeout: 10000,
      headers: {
        'User-Agent': 'ThreadLock-Link-Checker/1.0',
      },
    };

    const req = protocol.request(options, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = new URL(res.headers.location, url);
        resolve({
          status: res.statusCode,
          ok: true,
          redirected: true,
          finalUrl: redirectUrl.href,
        });
      } else {
        resolve({
          status: res.statusCode,
          ok: res.statusCode >= 200 && res.statusCode < 400,
          redirected: false,
        });
      }
    });

    req.on('error', (error) => {
      resolve({
        status: 0,
        ok: false,
        error: error.message,
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        status: 0,
        ok: false,
        error: 'Timeout',
      });
    });

    req.end();
  });
}

// Main check function
async function checkAllLinks() {
  const resources = extractResources();
  console.log(`Found ${resources.length} external resources to check\n`);

  const results = [];
  let passed = 0;
  let failed = 0;
  let warnings = 0;

  for (let i = 0; i < resources.length; i++) {
    const resource = resources[i];
    process.stdout.write(`[${i + 1}/${resources.length}] Checking ${resource.id}... `);

    const result = await checkUrl(resource.url);

    if (result.ok) {
      console.log(`✓ ${result.status}`);
      passed++;
    } else if (result.status === 0) {
      console.log(`⚠ ${result.error || 'Failed'}`);
      warnings++;
    } else {
      console.log(`✗ ${result.status}`);
      failed++;
    }

    results.push({
      id: resource.id,
      title: resource.title,
      url: resource.url,
      status: result.status,
      ok: result.ok,
      error: result.error,
      redirected: result.redirected,
      finalUrl: result.finalUrl,
      checkedAt: new Date().toISOString(),
    });

    // Small delay to avoid overwhelming servers
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Generate report
  const report = {
    checkedAt: new Date().toISOString(),
    totalLinks: resources.length,
    passed,
    failed,
    warnings,
    results: results.filter((r) => !r.ok), // Only include failures in report
    fullResults: results,
  };

  const reportPath = join(rootDir, 'link-check-report.json');
  writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log('\n' + '='.repeat(60));
  console.log('LINK CHECK SUMMARY');
  console.log('='.repeat(60));
  console.log(`✓ Passed: ${passed}`);
  console.log(`✗ Failed: ${failed}`);
  console.log(`⚠ Warnings: ${warnings}`);
  console.log(`Total: ${resources.length}`);
  console.log(`\n📊 Report saved to: ${reportPath}`);

  if (failed > 0) {
    console.log('\n❌ Some links failed. Review the report for details.');
    process.exit(1);
  } else if (warnings > 0) {
    console.log('\n⚠️  Some links had warnings but may be valid.');
    process.exit(0);
  } else {
    console.log('\n✅ All links are valid!');
    process.exit(0);
  }
}

checkAllLinks().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
