#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE_CONFIG } from '../src/lib/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = SITE_CONFIG.baseUrl;
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Load dynamic route data
const topicsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/resources/topics.json'), 'utf8')
);

// Load resourcesRegistry data by dynamically importing it
const registryPath = path.join(__dirname, '../src/content/resourcesRegistry.ts');
let RESOURCES = [];
let POPULAR_QUESTIONS = [];
let FEATURED_GUIDES = [];
let STARTER_KITS = [];

// Since we can't directly import TS in this context easily without transpiling,
// we'll parse the exports from the file
try {
  const registryContent = fs.readFileSync(registryPath, 'utf8');
  
  // Extract RESOURCES slugs (the main articles)
  const resourcesMatch = registryContent.match(/export const RESOURCES[^=]*=\s*\[([\s\S]*?)\];/);
  if (resourcesMatch) {
    const resourcesContent = resourcesMatch[1];
    const slugMatches = [...resourcesContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    RESOURCES = slugMatches.map(m => ({ slug: m[1] }));
  }
  
  // Extract POPULAR_QUESTIONS slugs
  const questionsMatch = registryContent.match(/export const POPULAR_QUESTIONS[^=]*=\s*\[([\s\S]*?)\];/);
  if (questionsMatch) {
    const questionsContent = questionsMatch[1];
    const slugMatches = [...questionsContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    POPULAR_QUESTIONS = slugMatches.map(m => ({ slug: m[1] }));
  }
  
  // Extract FEATURED_GUIDES slugs
  const guidesMatch = registryContent.match(/export const FEATURED_GUIDES[^=]*=\s*\[([\s\S]*?)\];/);
  if (guidesMatch) {
    const guidesContent = guidesMatch[1];
    const slugMatches = [...guidesContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    FEATURED_GUIDES = slugMatches.map(m => ({ slug: m[1] }));
  }
  
  // Extract STARTER_KITS slugs
  const kitsMatch = registryContent.match(/export const STARTER_KITS[^=]*=\s*\[([\s\S]*?)\];/);
  if (kitsMatch) {
    const kitsContent = kitsMatch[1];
    const slugMatches = [...kitsContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    STARTER_KITS = slugMatches.map(m => ({ slug: m[1] }));
  }
  
  console.log(`  Loaded ${RESOURCES.length} resources`);
  console.log(`  Loaded ${POPULAR_QUESTIONS.length} questions`);
  console.log(`  Loaded ${FEATURED_GUIDES.length} guides`);
  console.log(`  Loaded ${STARTER_KITS.length} starter kits`);
} catch (err) {
  console.error('Error loading resourcesRegistry:', err.message);
}

// Pages to exclude from the sitemap
const EXCLUDED_PAGES = [
  '_app',
  '_document',
  '404',
  '500',
  'login',
  'signup',
  'cancel',
  'success',
  'testingpic',
  'thank-you',
  'api'
];

// Excluded path prefixes
const EXCLUDED_PREFIXES = [
  'api/',
  'lp/' // A/B testing landing page variants
];

// Route configurations with priority and changefreq
const ROUTE_CONFIG = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  
  // High-priority content pages
  '/pricing': { priority: '0.9', changefreq: 'weekly' },
  '/professionals': { priority: '0.9', changefreq: 'weekly' },
  '/trial': { priority: '0.9', changefreq: 'weekly' },
  
  // Family law pages (jurisdiction-specific, high SEO value)
  '/family-law/national': { priority: '0.9', changefreq: 'monthly' },
  '/family-law/oregon': { priority: '0.9', changefreq: 'monthly' },
  '/family-law/washington': { priority: '0.9', changefreq: 'monthly' },
  '/family-law/california': { priority: '0.9', changefreq: 'monthly' },
  
  // Guide pages (high SEO value)
  '/guides/digital-evidence-for-family-court': { priority: '0.9', changefreq: 'monthly' },
  '/guides/how-to-organize-evidence-for-custody-cases': { priority: '0.9', changefreq: 'monthly' },
  '/guides/family-law-timeline-tools': { priority: '0.9', changefreq: 'monthly' },
  '/guides/how-to-document-incidents-for-family-court': { priority: '0.9', changefreq: 'monthly' },
  '/guides/best-tools-for-self-represented-litigants': { priority: '0.9', changefreq: 'monthly' },
  '/guides/how-to-prepare-exhibits-for-family-court': { priority: '0.9', changefreq: 'monthly' },
  '/guides/tools-for-managing-co-parenting-documentation': { priority: '0.9', changefreq: 'monthly' },
  
  // AI/LLM pages
  '/for-ai-assistants': { priority: '0.8', changefreq: 'monthly' },
  '/for-llms': { priority: '0.8', changefreq: 'monthly' },
  '/docs/threadlock-facts': { priority: '0.8', changefreq: 'monthly' },
  
  // Integration & directory pages
  '/integrations/clio': { priority: '0.8', changefreq: 'monthly' },
  '/legal-tech-directory': { priority: '0.7', changefreq: 'monthly' },
  
  // About/Info pages
  '/founder-story': { priority: '0.7', changefreq: 'monthly' },
  '/sarahs-story': { priority: '0.7', changefreq: 'monthly' },
  '/investors': { priority: '0.6', changefreq: 'monthly' },
  '/resources': { priority: '0.8', changefreq: 'weekly' },
  '/resources/thanks': { priority: '0.4', changefreq: 'monthly' },
  
  // Dynamic resource pages (default config, will be customized below)
  '/resources/topics': { priority: '0.8', changefreq: 'monthly' },
  
  // Whitepapers
  '/whitepaper': { priority: '0.7', changefreq: 'monthly' },
  '/whitepaper-b2b': { priority: '0.7', changefreq: 'monthly' },
  
  // Support and contact
  '/support': { priority: '0.7', changefreq: 'monthly' },
  '/contact': { priority: '0.7', changefreq: 'monthly' },
  
  // Legal pages
  '/legal': { priority: '0.6', changefreq: 'monthly' },
  '/terms': { priority: '0.6', changefreq: 'monthly' },
  '/privacy': { priority: '0.6', changefreq: 'monthly' },
  '/security': { priority: '0.7', changefreq: 'monthly' },
  '/cookies': { priority: '0.5', changefreq: 'monthly' },
  '/disclaimer': { priority: '0.5', changefreq: 'monthly' },
  '/accessibility': { priority: '0.5', changefreq: 'monthly' },
  '/dpa': { priority: '0.5', changefreq: 'monthly' },
  '/dmca': { priority: '0.4', changefreq: 'monthly' }
};

/**
 * Recursively get all page files from the pages directory
 * Returns an array of objects with filePath and mtime (modification time)
 */
function getPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getPageFiles(filePath, fileList);
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      fileList.push({
        path: filePath,
        mtime: stat.mtime
      });
    }
  });
  
  return fileList;
}

/**
 * Convert file path to URL route
 */
function filePathToRoute(fileObj, pagesDir) {
  let route = fileObj.path
    .replace(pagesDir, '')
    .replace(/\\/g, '/')
    .replace(/\.(tsx|ts|jsx|js)$/, '')
    .replace(/\/index$/, '')
    .replace(/^\//, '');
  
  // Handle dynamic routes (remove brackets)
  if (route.includes('[')) {
    return null;
  }
  
  return {
    route: route === '' ? '/' : `/${route}`,
    mtime: fileObj.mtime
  };
}

/**
 * Check if a route should be excluded
 */
function shouldExclude(route) {
  // Check if route is in excluded list
  const routeName = route.replace(/^\//, '').split('/')[0];
  if (EXCLUDED_PAGES.includes(routeName)) {
    return true;
  }
  
  // Check if route starts with excluded prefix
  const routePath = route.replace(/^\//, '');
  return EXCLUDED_PREFIXES.some(prefix => routePath.startsWith(prefix));
}

/**
 * Generate sitemap XML
 */
function generateSitemap() {
  const pagesDir = path.join(__dirname, '../pages');
  const pageFiles = getPageFiles(pagesDir);
  
  // Convert files to routes with modification times
  const routes = pageFiles
    .map(file => filePathToRoute(file, pagesDir))
    .filter(routeObj => routeObj !== null && !shouldExclude(routeObj.route))
    .sort((a, b) => a.route.localeCompare(b.route));
  
  // Add dynamic resource routes (main articles)
  const resourceRoutes = RESOURCES.map(r => ({
    route: `/resources/${r.slug}`,
    mtime: new Date() // Use current date for dynamic routes
  }));
  
  // Add dynamic topic routes (FIXED: changed from /topic/ to /topics/)
  const topicRoutes = topicsData.map(topic => ({
    route: `/resources/topics/${topic.id}`,
    mtime: new Date()
  }));
  
  // Add dynamic question routes
  const questionRoutes = POPULAR_QUESTIONS.map(q => ({
    route: `/resources/q/${q.slug}`,
    mtime: new Date()
  }));
  
  // Add dynamic guide routes
  const guideRoutes = FEATURED_GUIDES.map(g => ({
    route: `/resources/guides/${g.slug}`,
    mtime: new Date()
  }));
  
  // Add dynamic starter kit routes
  const kitRoutes = STARTER_KITS.map(k => ({
    route: `/resources/kits/${k.slug}`,
    mtime: new Date()
  }));
  
  // Combine all routes
  const allRoutes = [...routes, ...resourceRoutes, ...topicRoutes, ...questionRoutes, ...guideRoutes, ...kitRoutes];
  
  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  allRoutes.forEach(routeObj => {
    // Determine config based on route pattern
    let config;
    if (routeObj.route.startsWith('/resources/topics/')) {
      config = { priority: '0.8', changefreq: 'monthly' };
    } else if (routeObj.route.startsWith('/resources/q/')) {
      config = { priority: '0.8', changefreq: 'monthly' };
    } else if (routeObj.route.startsWith('/resources/guides/')) {
      config = { priority: '0.9', changefreq: 'monthly' };
    } else if (routeObj.route.startsWith('/resources/kits/')) {
      config = { priority: '0.8', changefreq: 'monthly' };
    } else if (routeObj.route.startsWith('/resources/') && routeObj.route !== '/resources' && routeObj.route !== '/resources/thanks') {
      // Individual resource articles (e.g., /resources/hearing-tomorrow)
      config = { priority: '0.8', changefreq: 'monthly' };
    } else {
      config = ROUTE_CONFIG[routeObj.route] || { priority: '0.5', changefreq: 'monthly' };
    }
    
    const url = routeObj.route === '/' ? SITE_URL : `${SITE_URL}${routeObj.route}`;
    // Use file modification time for lastmod to reflect actual content changes
    const lastmod = routeObj.mtime.toISOString().split('T')[0];
    
    // Log when using default config to help identify missing configurations
    if (!ROUTE_CONFIG[routeObj.route] && 
        !routeObj.route.startsWith('/resources/topics/') &&
        !routeObj.route.startsWith('/resources/q/') &&
        !routeObj.route.startsWith('/resources/guides/') &&
        !routeObj.route.startsWith('/resources/kits/') &&
        !(routeObj.route.startsWith('/resources/') && routeObj.route !== '/resources' && routeObj.route !== '/resources/thanks')) {
      console.log(`  Using default config for: ${routeObj.route}`);
    }
    
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${config.changefreq}</changefreq>\n`;
    xml += `    <priority>${config.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  
  return xml;
}

/**
 * Main function
 */
function main() {
  try {
    console.log('Generating sitemap...');
    const sitemap = generateSitemap();
    
    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');
    console.log(`✓ Sitemap generated successfully: ${OUTPUT_PATH}`);
    
    // Count URLs
    const urlCount = (sitemap.match(/<url>/g) || []).length;
    console.log(`✓ Total URLs: ${urlCount}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
