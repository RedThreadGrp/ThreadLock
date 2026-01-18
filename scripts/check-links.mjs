#!/usr/bin/env node

/**
 * Link Health Checker
 * 
 * Validates URLs from states.json and resources.json
 * Generates a report and fails CI based on configured thresholds
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  timeout: 8000, // 8 seconds per URL
  maxRedirects: 5,
  retries: 1,
  retryDelay: 1000, // 1 second between retries
  failThreshold: 0.05, // Fail if more than 5% of total links fail
  reportPath: path.join(__dirname, '../public/link-report.json'),
  userAgent: 'Mozilla/5.0 (compatible; ThreadLock-LinkChecker/1.0)',
};

// Load data files
const statesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/resources/states.json'), 'utf8')
);
const resourcesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/resources/resources.json'), 'utf8')
);

/**
 * Make an HTTP/HTTPS request with timeout and redirects
 */
function makeRequest(url, method = 'HEAD', redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount >= CONFIG.maxRedirects) {
      reject(new Error(`Too many redirects (${redirectCount})`));
      return;
    }

    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    const options = {
      method,
      timeout: CONFIG.timeout,
      headers: {
        'User-Agent': CONFIG.userAgent,
      },
    };

    const req = protocol.request(parsedUrl, options, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = new URL(res.headers.location, url).toString();
        resolve(makeRequest(redirectUrl, method, redirectCount + 1));
        return;
      }

      resolve({
        statusCode: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 400,
        redirected: redirectCount > 0,
        finalUrl: url,
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

/**
 * Check a single URL with retry logic
 */
async function checkUrl(url, trustTier = 'C') {
  let lastError = null;
  
  for (let attempt = 0; attempt <= CONFIG.retries; attempt++) {
    try {
      // Try HEAD first
      let result = await makeRequest(url, 'HEAD');
      
      // If HEAD fails with 405, try GET
      if (result.statusCode === 405 || result.statusCode === 403) {
        result = await makeRequest(url, 'GET');
      }
      
      return {
        url,
        trustTier,
        status: result.statusCode,
        ok: result.ok,
        redirected: result.redirected,
        finalUrl: result.finalUrl,
        attempt: attempt + 1,
        error: null,
      };
    } catch (error) {
      lastError = error;
      if (attempt < CONFIG.retries) {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay));
      }
    }
  }

  return {
    url,
    trustTier,
    status: null,
    ok: false,
    redirected: false,
    finalUrl: null,
    attempt: CONFIG.retries + 1,
    error: lastError.message,
  };
}

/**
 * Main function
 */
async function main() {
  console.log('🔗 Starting link health check...\n');

  // Collect all URLs to check
  const urlsToCheck = [];

  // Add state rules URLs (trustTier A - government)
  statesData.forEach(state => {
    urlsToCheck.push({
      url: state.rulesUrl,
      trustTier: 'A',
      source: `State: ${state.name}`,
      type: 'state-rules',
    });
    
    if (state.selfHelpUrl) {
      urlsToCheck.push({
        url: state.selfHelpUrl,
        trustTier: 'A',
        source: `State: ${state.name} (Self-Help)`,
        type: 'state-selfhelp',
      });
    }
  });

  // Add curated resources
  resourcesData.forEach(resource => {
    urlsToCheck.push({
      url: resource.url,
      trustTier: resource.trustTier || 'C',
      source: resource.title,
      type: 'resource',
    });
  });

  console.log(`📊 Total URLs to check: ${urlsToCheck.length}`);
  console.log(`   - Trust Tier A (critical): ${urlsToCheck.filter(u => u.trustTier === 'A').length}`);
  console.log(`   - Trust Tier B: ${urlsToCheck.filter(u => u.trustTier === 'B').length}`);
  console.log(`   - Trust Tier C: ${urlsToCheck.filter(u => u.trustTier === 'C').length}\n`);

  // Check all URLs
  const results = [];
  let checked = 0;

  for (const item of urlsToCheck) {
    checked++;
    process.stdout.write(`\r⏳ Checking... ${checked}/${urlsToCheck.length}`);
    
    const result = await checkUrl(item.url, item.trustTier);
    results.push({
      ...result,
      source: item.source,
      type: item.type,
    });
  }

  console.log('\n');

  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    totalChecked: results.length,
    passed: results.filter(r => r.ok).length,
    failed: results.filter(r => !r.ok).length,
    failureRate: results.filter(r => !r.ok).length / results.length,
    results: results,
  };

  // Save report
  fs.writeFileSync(CONFIG.reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Report saved to: ${CONFIG.reportPath}\n`);

  // Print summary
  console.log('📈 Summary:');
  console.log(`   ✅ Passed: ${report.passed}`);
  console.log(`   ❌ Failed: ${report.failed}`);
  console.log(`   📊 Failure rate: ${(report.failureRate * 100).toFixed(2)}%\n`);

  // Show failed links
  const failed = results.filter(r => !r.ok);
  if (failed.length > 0) {
    console.log('❌ Failed URLs:\n');
    failed.forEach(item => {
      console.log(`   ${item.trustTier === 'A' ? '🚨' : '⚠️ '} [Tier ${item.trustTier}] ${item.url}`);
      console.log(`      Source: ${item.source}`);
      console.log(`      Status: ${item.status || 'N/A'}`);
      console.log(`      Error: ${item.error || 'HTTP error'}\n`);
    });
  }

  // Check fail conditions
  const tierAFailed = failed.filter(r => r.trustTier === 'A');
  const shouldFail = tierAFailed.length > 0 || report.failureRate > CONFIG.failThreshold;

  if (shouldFail) {
    console.log('💥 CI Check FAILED:\n');
    
    if (tierAFailed.length > 0) {
      console.log(`   🚨 ${tierAFailed.length} critical (Tier A) link(s) failed`);
    }
    
    if (report.failureRate > CONFIG.failThreshold) {
      console.log(`   📊 Failure rate (${(report.failureRate * 100).toFixed(2)}%) exceeds threshold (${CONFIG.failThreshold * 100}%)`);
    }
    
    console.log('\n⛔ Please fix these links before merging.\n');
    process.exit(1);
  }

  console.log('✅ All checks passed!\n');
  process.exit(0);
}

// Run
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
