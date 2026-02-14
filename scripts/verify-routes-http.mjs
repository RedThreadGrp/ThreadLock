#!/usr/bin/env node
/**
 * HTTP-level Route Verification Script
 * 
 * This script verifies that all routes in sitemap.xml:
 * 1. Return valid HTTP responses (200/3xx)
 * 2. Redirects (if any) resolve to the correct canonical destination
 * 3. No broken links or 404s
 * 
 * Usage:
 *   node scripts/verify-routes-http.mjs [--base-url=http://localhost:3000]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const REDIRECTS_MAP_PATH = path.join(__dirname, 'redirects.map.json');

// Parse command line arguments
const args = process.argv.slice(2);
const baseUrlArg = args.find(arg => arg.startsWith('--base-url='));
const BASE_URL = baseUrlArg 
  ? baseUrlArg.split('=')[1] 
  : 'http://localhost:3000';

const TIMEOUT = 10000; // 10 second timeout

// Colors for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
};

/**
 * Parse sitemap.xml and extract all URLs
 */
function parseSitemap(sitemapPath) {
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const urlMatches = content.matchAll(/<loc>(.*?)<\/loc>/g);
  const urls = Array.from(urlMatches, match => match[1]);
  return urls;
}

/**
 * Load redirect map
 */
function loadRedirectMap(redirectMapPath) {
  if (!fs.existsSync(redirectMapPath)) {
    console.log(`${colors.yellow}⚠ No redirect map found at ${redirectMapPath}${colors.reset}`);
    return { redirects: {} };
  }
  
  const content = fs.readFileSync(redirectMapPath, 'utf8');
  const data = JSON.parse(content);
  return data;
}

/**
 * Make an HTTP request and follow redirects
 * 
 * @param {string} url - The URL to request
 * @param {number} maxRedirects - Maximum number of redirects to follow (default: 5)
 *                                 This prevents infinite redirect loops and excessive chains.
 *                                 A redirect chain longer than 5 is typically a configuration error.
 * @returns {Promise<Object>} { statusCode, finalUrl, redirectChain, error }
 */
function makeRequest(url, maxRedirects = 5) {
  return new Promise((resolve) => {
    const redirectChain = [];
    let currentUrl = url;
    let redirectCount = 0;

    function followRedirect() {
      if (redirectCount >= maxRedirects) {
        resolve({
          statusCode: null,
          finalUrl: currentUrl,
          redirectChain,
          error: 'Too many redirects'
        });
        return;
      }

      const urlObj = new URL(currentUrl);
      const protocol = urlObj.protocol === 'https:' ? https : http;

      const options = {
        method: 'HEAD',
        timeout: TIMEOUT,
        headers: {
          'User-Agent': 'ThreadLock-Route-Verifier/1.0'
        }
      };

      const req = protocol.request(currentUrl, options, (res) => {
        const statusCode = res.statusCode;

        // Handle redirects
        if (statusCode >= 300 && statusCode < 400 && res.headers.location) {
          redirectCount++;
          const nextUrl = new URL(res.headers.location, currentUrl).href;
          redirectChain.push({ from: currentUrl, to: nextUrl, statusCode });
          currentUrl = nextUrl;
          followRedirect();
          return;
        }

        // Final response
        resolve({
          statusCode,
          finalUrl: currentUrl,
          redirectChain,
          error: null
        });
      });

      req.on('error', (error) => {
        resolve({
          statusCode: null,
          finalUrl: currentUrl,
          redirectChain,
          error: error.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          statusCode: null,
          finalUrl: currentUrl,
          redirectChain,
          error: 'Request timeout'
        });
      });

      req.end();
    }

    followRedirect();
  });
}

/**
 * Extract path from full URL
 */
function extractPath(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.pathname;
  } catch {
    return url;
  }
}

/**
 * Verify a single route
 */
async function verifyRoute(sitemapUrl, baseUrl) {
  const path = extractPath(sitemapUrl);
  const testUrl = `${baseUrl}${path}`;
  
  const result = await makeRequest(testUrl);
  
  return {
    originalUrl: sitemapUrl,
    testUrl,
    path,
    ...result
  };
}

/**
 * Verify redirect mapping
 */
async function verifyRedirect(oldPath, expectedNewPath, baseUrl) {
  const testUrl = `${baseUrl}${oldPath}`;
  const result = await makeRequest(testUrl);
  
  const expectedFinalPath = extractPath(expectedNewPath);
  const actualFinalPath = extractPath(result.finalUrl);
  
  const isCorrect = actualFinalPath === expectedFinalPath;
  
  return {
    oldPath,
    expectedNewPath,
    testUrl,
    ...result,
    isCorrect,
    expectedFinalPath,
    actualFinalPath
  };
}

/**
 * Main verification function
 */
async function main() {
  console.log(`\n${colors.blue}╔════════════════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.blue}║   ThreadLock Route Verification (HTTP Level)         ║${colors.reset}`);
  console.log(`${colors.blue}╚════════════════════════════════════════════════════════╝${colors.reset}\n`);
  
  console.log(`${colors.gray}Base URL: ${BASE_URL}${colors.reset}`);
  console.log(`${colors.gray}Sitemap: ${SITEMAP_PATH}${colors.reset}\n`);

  // Parse sitemap
  console.log(`${colors.blue}📄 Parsing sitemap...${colors.reset}`);
  const sitemapUrls = parseSitemap(SITEMAP_PATH);
  console.log(`${colors.green}✓ Found ${sitemapUrls.length} URLs in sitemap${colors.reset}\n`);

  // Load redirect map
  console.log(`${colors.blue}🔀 Loading redirect map...${colors.reset}`);
  const redirectMap = loadRedirectMap(REDIRECTS_MAP_PATH);
  const redirectCount = Object.keys(redirectMap.redirects || {}).length;
  console.log(`${colors.green}✓ Found ${redirectCount} redirect rules${colors.reset}\n`);

  // Test sitemap URLs
  console.log(`${colors.blue}🔍 Testing sitemap URLs...${colors.reset}\n`);
  
  const results = {
    success: [],
    redirects: [],
    errors: [],
  };

  for (let i = 0; i < sitemapUrls.length; i++) {
    const url = sitemapUrls[i];
    const result = await verifyRoute(url, BASE_URL);
    
    const progress = `[${i + 1}/${sitemapUrls.length}]`;
    
    if (result.error) {
      console.log(`${colors.red}✗ ${progress} ${result.path} - ERROR: ${result.error}${colors.reset}`);
      results.errors.push(result);
    } else if (result.redirectChain.length > 0) {
      console.log(`${colors.yellow}↪ ${progress} ${result.path} → ${extractPath(result.finalUrl)} (${result.statusCode})${colors.reset}`);
      results.redirects.push(result);
    } else if (result.statusCode === 200) {
      console.log(`${colors.green}✓ ${progress} ${result.path} (${result.statusCode})${colors.reset}`);
      results.success.push(result);
    } else {
      console.log(`${colors.red}✗ ${progress} ${result.path} (${result.statusCode})${colors.reset}`);
      results.errors.push(result);
    }
  }

  // Test redirect map
  if (redirectCount > 0) {
    console.log(`\n${colors.blue}🔀 Testing redirect map...${colors.reset}\n`);
    
    const redirectResults = {
      correct: [],
      incorrect: [],
      errors: [],
    };

    for (const [oldPath, newPath] of Object.entries(redirectMap.redirects)) {
      const result = await verifyRedirect(oldPath, newPath, BASE_URL);
      
      if (result.error) {
        console.log(`${colors.red}✗ ${oldPath} - ${result.error}${colors.reset}`);
        redirectResults.errors.push(result);
      } else if (result.isCorrect) {
        console.log(`${colors.green}✓ ${oldPath} → ${result.actualFinalPath} (${result.statusCode})${colors.reset}`);
        redirectResults.correct.push(result);
      } else {
        console.log(`${colors.red}✗ ${oldPath} → ${result.actualFinalPath} (expected: ${result.expectedFinalPath})${colors.reset}`);
        redirectResults.incorrect.push(result);
      }
    }

    // Redirect summary
    console.log(`\n${colors.blue}═══ Redirect Map Summary ═══${colors.reset}`);
    console.log(`${colors.green}✓ Correct: ${redirectResults.correct.length}${colors.reset}`);
    console.log(`${colors.red}✗ Incorrect: ${redirectResults.incorrect.length}${colors.reset}`);
    console.log(`${colors.red}✗ Errors: ${redirectResults.errors.length}${colors.reset}`);
  }

  // Summary
  console.log(`\n${colors.blue}═══ Final Summary ═══${colors.reset}`);
  console.log(`${colors.green}✓ Success (200): ${results.success.length}${colors.reset}`);
  console.log(`${colors.yellow}↪ Redirects: ${results.redirects.length}${colors.reset}`);
  console.log(`${colors.red}✗ Errors: ${results.errors.length}${colors.reset}`);

  // Exit code
  const hasErrors = results.errors.length > 0;
  if (hasErrors) {
    console.log(`\n${colors.red}✗ Verification failed with ${results.errors.length} errors${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}✓ All routes verified successfully!${colors.reset}`);
    process.exit(0);
  }
}

// Run the script
main().catch((error) => {
  console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
  process.exit(1);
});
