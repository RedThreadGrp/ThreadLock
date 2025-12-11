#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.threadlock.ai';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

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
  '/resources': { priority: '0.7', changefreq: 'weekly' },
  '/resources/thanks': { priority: '0.4', changefreq: 'monthly' },
  
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
 */
function getPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getPageFiles(filePath, fileList);
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Convert file path to URL route
 */
function filePathToRoute(filePath, pagesDir) {
  let route = filePath
    .replace(pagesDir, '')
    .replace(/\\/g, '/')
    .replace(/\.(tsx|ts|jsx|js)$/, '')
    .replace(/\/index$/, '')
    .replace(/^\//, '');
  
  // Handle dynamic routes (remove brackets)
  if (route.includes('[')) {
    return null;
  }
  
  return route === '' ? '/' : `/${route}`;
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
  
  // Convert files to routes
  const routes = pageFiles
    .map(file => filePathToRoute(file, pagesDir))
    .filter(route => route !== null && !shouldExclude(route))
    .sort();
  
  // Generate XML
  const lastmod = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    const config = ROUTE_CONFIG[route] || { priority: '0.5', changefreq: 'monthly' };
    const url = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
    
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
