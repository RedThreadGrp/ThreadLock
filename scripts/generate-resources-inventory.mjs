#!/usr/bin/env node
/**
 * Resources Content Inventory Generator
 * 
 * Generates comprehensive inventory of all /resources routes including:
 * - Metadata (title, description, canonical URL)
 * - Content structure (word count, blocks, sections)
 * - Quality checks (missing metadata, duplicate content)
 * - Content sources and mappings
 * 
 * Outputs:
 * - docs/resources/CONTENT_INVENTORY.json (machine-readable)
 * - docs/resources/CONTENT_INVENTORY.md (human-readable)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const OUTPUT_JSON = path.join(__dirname, '../docs/resources/CONTENT_INVENTORY.json');
const OUTPUT_MD = path.join(__dirname, '../docs/resources/CONTENT_INVENTORY.md');
const REGISTRY_PATH = path.join(__dirname, '../src/content/resourcesRegistry.ts');
const TOPICS_DATA_PATH = path.join(__dirname, '../src/data/resources/topics.json');

// Load topics data
let TOPICS_DATA = [];
try {
  TOPICS_DATA = JSON.parse(fs.readFileSync(TOPICS_DATA_PATH, 'utf8'));
} catch (err) {
  console.warn('Warning: Could not load topics.json');
}

/**
 * Parse sitemap.xml and extract /resources routes
 */
function extractResourcesRoutes() {
  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  const routes = [];
  
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    const url = match[1];
    if (url.includes('/resources')) {
      // Extract path from full URL
      const path = url.replace(/https?:\/\/[^\/]+/, '');
      routes.push(path);
    }
  }
  
  return [...new Set(routes)].sort();
}

/**
 * Parse resourcesRegistry.ts to extract content
 */
function parseResourcesRegistry() {
  const content = fs.readFileSync(REGISTRY_PATH, 'utf8');
  
  const resources = [];
  const questions = [];
  const guides = [];
  const kits = [];
  const topics = [];
  
  // Extract RESOURCES
  const resourcesMatch = content.match(/export const RESOURCES[^=]*=\s*\[([\s\S]*?)\];/);
  if (resourcesMatch) {
    const resContent = resourcesMatch[1];
    const itemRegex = /\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?\}/g;
    let item;
    while ((item = itemRegex.exec(resContent)) !== null) {
      const slug = item[1];
      const itemText = item[0];
      
      // Extract fields
      const titleMatch = itemText.match(/title:\s*"(.*?)"/);
      const excerptMatch = itemText.match(/excerpt:\s*"(.*?)"/);
      const statusMatch = itemText.match(/status:\s*"([^"]+)"/);
      const bodyMatch = itemText.match(/body:\s*`([\s\S]*?)`\s*[,}]/);
      const seoTitleMatch = itemText.match(/seoTitle:\s*"(.*?)"/);
      const metaDescMatch = itemText.match(/metaDescription:\s*"(.*?)"/);
      const dateModMatch = itemText.match(/dateModified:\s*"([^"]+)"/);
      const readTimeMatch = itemText.match(/readTime:\s*"([^"]+)"/);
      
      // Count relatedQuestions and relatedLinks
      const relatedQuestionsMatch = itemText.match(/relatedQuestions:\s*\[([\s\S]*?)\]/);
      const relatedLinksMatch = itemText.match(/relatedLinks:\s*\[([\s\S]*?)\]/);
      const relatedQuestionsCount = relatedQuestionsMatch ? (relatedQuestionsMatch[1].match(/\{/g) || []).length : 0;
      const relatedLinksCount = relatedLinksMatch ? (relatedLinksMatch[1].match(/\{/g) || []).length : 0;
      
      resources.push({
        slug,
        title: titleMatch ? titleMatch[1] : '',
        excerpt: excerptMatch ? excerptMatch[1] : '',
        status: statusMatch ? statusMatch[1] : 'draft',
        body: bodyMatch ? bodyMatch[1] : '',
        seoTitle: seoTitleMatch ? seoTitleMatch[1] : undefined,
        metaDescription: metaDescMatch ? metaDescMatch[1] : undefined,
        dateModified: dateModMatch ? dateModMatch[1] : undefined,
        readTime: readTimeMatch ? readTimeMatch[1] : undefined,
        relatedQuestionsCount,
        relatedLinksCount,
      });
    }
  }
  
  // Extract POPULAR_QUESTIONS
  const questionsMatch = content.match(/export const POPULAR_QUESTIONS[^=]*=\s*\[([\s\S]*?)\];/);
  if (questionsMatch) {
    const qContent = questionsMatch[1];
    const itemRegex = /\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?\}/g;
    let item;
    while ((item = itemRegex.exec(qContent)) !== null) {
      const slug = item[1];
      const itemText = item[0];
      
      const questionMatch = itemText.match(/question:\s*"(.*?)"/);
      const statusMatch = itemText.match(/status:\s*"([^"]+)"/);
      const bodyMatch = itemText.match(/body:\s*`([\s\S]*?)`\s*[,}]/);
      const seoTitleMatch = itemText.match(/seoTitle:\s*"(.*?)"/);
      const metaDescMatch = itemText.match(/metaDescription:\s*"(.*?)"/);
      const shortAnswerMatch = itemText.match(/shortAnswer:\s*"(.*?)"/);
      const dateModMatch = itemText.match(/dateModified:\s*"([^"]+)"/);
      const contentVersionMatch = itemText.match(/contentVersion:\s*(\d+)/);
      const hasBlocksField = itemText.includes('blocks:');
      
      // Count relatedQuestions and relatedLinks
      const relatedQuestionsMatch = itemText.match(/relatedQuestions:\s*\[([\s\S]*?)\]/);
      const relatedLinksMatch = itemText.match(/relatedLinks:\s*\[([\s\S]*?)\]/);
      const relatedQuestionsCount = relatedQuestionsMatch ? (relatedQuestionsMatch[1].match(/\{/g) || []).length : 0;
      const relatedLinksCount = relatedLinksMatch ? (relatedLinksMatch[1].match(/\{/g) || []).length : 0;
      
      questions.push({
        slug,
        question: questionMatch ? questionMatch[1] : '',
        status: statusMatch ? statusMatch[1] : 'draft',
        contentVersion: contentVersionMatch ? parseInt(contentVersionMatch[1]) : 1,
        hasBlocks: hasBlocksField,
        body: bodyMatch ? bodyMatch[1] : '',
        seoTitle: seoTitleMatch ? seoTitleMatch[1] : undefined,
        metaDescription: metaDescMatch ? metaDescMatch[1] : undefined,
        shortAnswer: shortAnswerMatch ? shortAnswerMatch[1] : undefined,
        dateModified: dateModMatch ? dateModMatch[1] : undefined,
        relatedQuestionsCount,
        relatedLinksCount,
      });
    }
  }
  
  // Extract FEATURED_GUIDES
  const guidesMatch = content.match(/export const FEATURED_GUIDES[^=]*=\s*\[([\s\S]*?)\];/);
  if (guidesMatch) {
    const gContent = guidesMatch[1];
    const itemRegex = /\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?\}/g;
    let item;
    while ((item = itemRegex.exec(gContent)) !== null) {
      const slug = item[1];
      const itemText = item[0];
      
      const titleMatch = itemText.match(/title:\s*"(.*?)"/);
      const summaryMatch = itemText.match(/summary:\s*"(.*?)"/);
      const statusMatch = itemText.match(/status:\s*"([^"]+)"/);
      const bodyMatch = itemText.match(/body:\s*`([\s\S]*?)`\s*[,}]/);
      const updatedMatch = itemText.match(/updated:\s*"([^"]+)"/);
      
      guides.push({
        slug,
        title: titleMatch ? titleMatch[1] : '',
        summary: summaryMatch ? summaryMatch[1] : '',
        status: statusMatch ? statusMatch[1] : 'draft',
        body: bodyMatch ? bodyMatch[1] : '',
        updated: updatedMatch ? updatedMatch[1] : undefined,
      });
    }
  }
  
  // Extract STARTER_KITS
  const kitsMatch = content.match(/export const STARTER_KITS[^=]*=\s*\[([\s\S]*?)\];/);
  if (kitsMatch) {
    const kContent = kitsMatch[1];
    const itemRegex = /\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?\}/g;
    let item;
    while ((item = itemRegex.exec(kContent)) !== null) {
      const slug = item[1];
      const itemText = item[0];
      
      const titleMatch = itemText.match(/title:\s*"(.*?)"/);
      const descMatch = itemText.match(/description:\s*"(.*?)"/);
      const statusMatch = itemText.match(/status:\s*"([^"]+)"/);
      const bodyMatch = itemText.match(/body:\s*`([\s\S]*?)`\s*[,}]/);
      
      kits.push({
        slug,
        title: titleMatch ? titleMatch[1] : '',
        description: descMatch ? descMatch[1] : '',
        status: statusMatch ? statusMatch[1] : 'draft',
        body: bodyMatch ? bodyMatch[1] : '',
      });
    }
  }
  
  // Extract TOPICS
  const topicsMatch = content.match(/export const TOPICS[^=]*=\s*\[([\s\S]*?)\];/);
  if (topicsMatch) {
    const tContent = topicsMatch[1];
    const itemRegex = /\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?\}/g;
    let item;
    while ((item = itemRegex.exec(tContent)) !== null) {
      const slug = item[1];
      const itemText = item[0];
      
      const titleMatch = itemText.match(/title:\s*"(.*?)"/);
      const promiseMatch = itemText.match(/promise:\s*"(.*?)"/);
      const bodyMatch = itemText.match(/body:\s*`([\s\S]*?)`\s*[,}]/);
      
      topics.push({
        slug,
        title: titleMatch ? titleMatch[1] : '',
        promise: promiseMatch ? promiseMatch[1] : '',
        body: bodyMatch ? bodyMatch[1] : '',
      });
    }
  }
  
  return { resources, questions, guides, kits, topics };
}

/**
 * Count words in text
 */
function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

/**
 * Analyze markdown/text structure
 */
function analyzeContent(text) {
  if (!text) {
    return {
      headings: { h1: 0, h2: 0, h3: 0 },
      lists: 0,
      codeBlocks: 0,
      paragraphs: 0,
    };
  }
  
  const h1Count = (text.match(/^# /gm) || []).length;
  const h2Count = (text.match(/^## /gm) || []).length;
  const h3Count = (text.match(/^### /gm) || []).length;
  const listsCount = (text.match(/^[-*\d]+\. /gm) || []).length;
  const codeBlockCount = (text.match(/```/g) || []).length / 2;
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length;
  
  return {
    headings: { h1: h1Count, h2: h2Count, h3: h3Count },
    lists: listsCount,
    codeBlocks: Math.floor(codeBlockCount),
    paragraphs,
  };
}

/**
 * Check if shortAnswer appears in body (duplicate content)
 */
function checkDuplicateContent(shortAnswer, body) {
  if (!shortAnswer || !body) return false;
  
  // Normalize text for comparison
  const normalizedAnswer = shortAnswer.toLowerCase().replace(/[^\w\s]/g, '');
  const normalizedBody = body.toLowerCase().replace(/[^\w\s]/g, '');
  
  // Check if substantial part of shortAnswer appears in body
  const words = normalizedAnswer.split(/\s+/).filter(w => w.length > 3);
  if (words.length < 5) return false;
  
  // If >80% of words appear in sequence in body, flag as duplicate
  const snippet = words.slice(0, Math.min(10, words.length)).join(' ');
  return normalizedBody.includes(snippet);
}

/**
 * Map route to content source
 */
function mapRouteToContent(route, registry) {
  const { resources, questions, guides, kits, topics } = registry;
  
  // Main resources: /resources/[slug]
  if (route.match(/^\/resources\/[^\/]+$/)) {
    const slug = route.split('/').pop();
    if (slug === 'thanks') {
      return {
        type: 'special',
        slug: 'thanks',
        contentSource: 'pages/resources/thanks.jsx',
        content: null,
      };
    }
    const resource = resources.find(r => r.slug === slug);
    return {
      type: 'resource',
      slug,
      contentSource: 'src/content/resourcesRegistry.ts:RESOURCES',
      content: resource || null,
    };
  }
  
  // Questions: /resources/q/[slug]
  if (route.startsWith('/resources/q/')) {
    const slug = route.split('/').pop();
    const question = questions.find(q => q.slug === slug);
    return {
      type: 'question',
      slug,
      contentSource: 'src/content/resourcesRegistry.ts:POPULAR_QUESTIONS',
      content: question || null,
    };
  }
  
  // Guides: /resources/guides/[slug]
  if (route.startsWith('/resources/guides/')) {
    const slug = route.split('/').pop();
    const guide = guides.find(g => g.slug === slug);
    return {
      type: 'guide',
      slug,
      contentSource: 'src/content/resourcesRegistry.ts:FEATURED_GUIDES',
      content: guide || null,
    };
  }
  
  // Kits: /resources/kits/[slug]
  if (route.startsWith('/resources/kits/')) {
    const slug = route.split('/').pop();
    const kit = kits.find(k => k.slug === slug);
    return {
      type: 'kit',
      slug,
      contentSource: 'src/content/resourcesRegistry.ts:STARTER_KITS',
      content: kit || null,
    };
  }
  
  // Topics: /resources/topics/[slug]
  if (route.startsWith('/resources/topics/')) {
    const slug = route.split('/').pop();
    const topic = topics.find(t => t.slug === slug);
    const topicData = TOPICS_DATA.find(t => t.id === slug);
    return {
      type: 'topic',
      slug,
      contentSource: 'src/content/resourcesRegistry.ts:TOPICS + src/data/resources/topics.json',
      content: topic || null,
      extraData: topicData || null,
    };
  }
  
  return {
    type: 'unknown',
    slug: route,
    contentSource: 'unknown',
    content: null,
  };
}

/**
 * Generate inventory entry for a route
 */
function generateInventoryEntry(route, mapping, baseUrl = 'https://threadlock.ai') {
  const { type, slug, contentSource, content, extraData } = mapping;
  
  const entry = {
    route,
    canonicalUrl: `${baseUrl}${route}`,
    type,
    slug,
    contentSource,
    title: '',
    metaDescription: 'missing',
    wordCount: {
      total: 0,
      body: 0,
      excerpt: 0,
    },
    blocksSummary: {},
    hasFaq: false,
    faqCount: 0,
    hasSources: false,
    sourcesCount: 0,
    lastUpdated: 'missing',
    renderSmokeStatus: content ? 'pass' : 'fail',
    notes: [],
  };
  
  // Handle special cases before checking for content
  // Special pages
  if (type === 'special') {
    entry.title = 'Resources Thanks Page';
    entry.metaDescription = 'Thank you page for resources downloads';
    entry.lastUpdated = 'missing';
    entry.renderSmokeStatus = 'pass';
    entry.notes = ['Special page - no content in registry'];
    return entry;
  }
  
  // Unknown type (like /resources hub)
  if (type === 'unknown' && route === '/resources') {
    entry.title = 'Resources Hub';
    entry.metaDescription = 'Main resources landing page';
    entry.lastUpdated = 'missing';
    entry.renderSmokeStatus = 'pass';
    entry.contentSource = 'src/pages/resources/ResourcesPage.tsx';
    entry.notes = ['Hub page - aggregates content from registry'];
    return entry;
  }
  
  // Topics can use topics.json data
  if (type === 'topic' && !content && extraData) {
    entry.title = extraData.name || 'missing';
    entry.metaDescription = extraData.description || 'missing';
    entry.lastUpdated = 'missing';
    entry.renderSmokeStatus = 'pass';
    entry.notes = ['Content from topics.json only (not in registry)', 'No lastUpdated field in schema'];
    
    const descWords = countWords(extraData.description);
    entry.wordCount = {
      total: descWords,
      description: descWords,
    };
    return entry;
  }
  
  if (!content) {
    entry.notes.push('No content found in registry');
    entry.renderSmokeStatus = 'fail';
    return entry;
  }
  
  // Extract common fields based on content type
  if (type === 'resource') {
    entry.title = content.title || 'missing';
    entry.metaDescription = content.metaDescription || content.excerpt || 'missing';
    entry.lastUpdated = content.dateModified || 'missing';
    
    const excerptWords = countWords(content.excerpt);
    const bodyWords = countWords(content.body);
    entry.wordCount = {
      total: excerptWords + bodyWords,
      body: bodyWords,
      excerpt: excerptWords,
    };
    
    if (content.body) {
      entry.blocksSummary = analyzeContent(content.body);
    }
    
    if (content.relatedQuestionsCount && content.relatedQuestionsCount > 0) {
      entry.hasFaq = true;
      entry.faqCount = content.relatedQuestionsCount;
    }
    
    if (content.relatedLinksCount && content.relatedLinksCount > 0) {
      entry.hasSources = true;
      entry.sourcesCount = content.relatedLinksCount;
    }
    
    if (!content.metaDescription) {
      entry.notes.push('Missing metaDescription');
    }
    if (!content.dateModified) {
      entry.notes.push('Missing dateModified');
    }
  }
  
  if (type === 'question') {
    entry.title = content.question || 'missing';
    entry.metaDescription = content.metaDescription || content.shortAnswer || 'missing';
    entry.lastUpdated = content.dateModified || 'missing';
    entry.contentVersion = content.contentVersion || 1;
    entry.hasBlocks = content.hasBlocks || false;
    
    const shortAnswerWords = countWords(content.shortAnswer);
    const bodyWords = countWords(content.body);
    entry.wordCount = {
      total: shortAnswerWords + bodyWords,
      body: bodyWords,
      shortAnswer: shortAnswerWords,
    };
    
    if (content.body) {
      entry.blocksSummary = analyzeContent(content.body);
    }
    
    // Check for duplicate content
    if (checkDuplicateContent(content.shortAnswer, content.body)) {
      entry.notes.push('Duplicate content: shortAnswer appears in body');
    }
    
    if (content.relatedQuestionsCount && content.relatedQuestionsCount > 0) {
      entry.hasFaq = true;
      entry.faqCount = content.relatedQuestionsCount;
    }
    
    if (content.relatedLinksCount && content.relatedLinksCount > 0) {
      entry.hasSources = true;
      entry.sourcesCount = content.relatedLinksCount;
    }
    
    if (!content.metaDescription) {
      entry.notes.push('Missing metaDescription');
    }
    if (!content.dateModified) {
      entry.notes.push('Missing dateModified');
    }
  }
  
  if (type === 'guide') {
    entry.title = content.title || 'missing';
    entry.metaDescription = content.summary || 'missing';
    entry.lastUpdated = content.updated || 'missing';
    
    const summaryWords = countWords(content.summary);
    const bodyWords = countWords(content.body);
    entry.wordCount = {
      total: summaryWords + bodyWords,
      body: bodyWords,
      summary: summaryWords,
    };
    
    if (content.body) {
      entry.blocksSummary = analyzeContent(content.body);
    }
    
    if (content.relatedLinks && content.relatedLinks.length > 0) {
      entry.hasSources = true;
      entry.sourcesCount = content.relatedLinks.length;
    }
    
    if (!content.updated) {
      entry.notes.push('Missing updated date');
    }
  }
  
  if (type === 'kit') {
    entry.title = content.title || 'missing';
    entry.metaDescription = content.description || 'missing';
    entry.lastUpdated = 'missing';
    
    const descWords = countWords(content.description);
    const bodyWords = countWords(content.body);
    entry.wordCount = {
      total: descWords + bodyWords,
      body: bodyWords,
      description: descWords,
    };
    
    if (content.body) {
      entry.blocksSummary = analyzeContent(content.body);
    }
    
    if (content.relatedLinks && content.relatedLinks.length > 0) {
      entry.hasSources = true;
      entry.sourcesCount = content.relatedLinks.length;
    }
    
    entry.notes.push('No lastUpdated field in schema');
  }
  
  if (type === 'topic') {
    entry.title = content.title || (extraData ? extraData.name : 'missing');
    entry.metaDescription = content.promise || (extraData ? extraData.description : 'missing');
    entry.lastUpdated = 'missing';
    
    const promiseWords = countWords(content.promise);
    const bodyWords = countWords(content.body);
    entry.wordCount = {
      total: promiseWords + bodyWords,
      body: bodyWords,
      promise: promiseWords,
    };
    
    if (content.body) {
      entry.blocksSummary = analyzeContent(content.body);
    }
    
    if (content.relatedLinks && content.relatedLinks.length > 0) {
      entry.hasSources = true;
      entry.sourcesCount = content.relatedLinks.length;
    }
    
    entry.notes.push('No lastUpdated field in schema');
  }
  
  // Final checks
  if (entry.title === 'missing') {
    entry.notes.push('Missing title');
  }
  if (entry.wordCount.total === 0) {
    entry.notes.push('No content (0 words)');
  }
  
  return entry;
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(inventory) {
  const timestamp = new Date().toISOString();
  
  let md = `# Resources Content Inventory\n\n`;
  md += `**Generated:** ${timestamp}\n`;
  md += `**Total Routes:** ${inventory.length}\n\n`;
  
  // Summary statistics
  const stats = {
    total: inventory.length,
    byType: {},
    withBody: 0,
    withMeta: 0,
    withDate: 0,
    withFaq: 0,
    withSources: 0,
    issues: 0,
  };
  
  inventory.forEach(entry => {
    stats.byType[entry.type] = (stats.byType[entry.type] || 0) + 1;
    if (entry.wordCount.body > 0) stats.withBody++;
    if (entry.metaDescription !== 'missing') stats.withMeta++;
    if (entry.lastUpdated !== 'missing') stats.withDate++;
    if (entry.hasFaq) stats.withFaq++;
    if (entry.hasSources) stats.withSources++;
    if (entry.notes.length > 0) stats.issues++;
  });
  
  md += `## Summary Statistics\n\n`;
  md += `- **Routes by Type:**\n`;
  Object.entries(stats.byType).forEach(([type, count]) => {
    md += `  - ${type}: ${count}\n`;
  });
  md += `- **Content Coverage:**\n`;
  md += `  - With body content: ${stats.withBody} (${((stats.withBody/stats.total)*100).toFixed(1)}%)\n`;
  md += `  - With meta description: ${stats.withMeta} (${((stats.withMeta/stats.total)*100).toFixed(1)}%)\n`;
  md += `  - With last updated date: ${stats.withDate} (${((stats.withDate/stats.total)*100).toFixed(1)}%)\n`;
  md += `  - With FAQs: ${stats.withFaq}\n`;
  md += `  - With sources/links: ${stats.withSources}\n`;
  md += `  - With issues/notes: ${stats.issues}\n\n`;
  
  // Quick reference table
  md += `## Quick Reference\n\n`;
  md += `| Route | Type | Title | Words | Status | Issues |\n`;
  md += `|-------|------|-------|-------|--------|--------|\n`;
  
  inventory.forEach(entry => {
    const issueCount = entry.notes.length;
    const issueIcon = issueCount > 0 ? `⚠️ ${issueCount}` : '✅';
    const title = entry.title.length > 40 ? entry.title.substring(0, 37) + '...' : entry.title;
    md += `| ${entry.route} | ${entry.type} | ${title} | ${entry.wordCount.total} | ${entry.renderSmokeStatus} | ${issueIcon} |\n`;
  });
  
  md += `\n---\n\n`;
  
  // Detailed entries
  md += `## Detailed Inventory\n\n`;
  
  inventory.forEach(entry => {
    md += `### ${entry.route}\n\n`;
    md += `- **Type:** ${entry.type}\n`;
    md += `- **Title:** ${entry.title}\n`;
    md += `- **Canonical URL:** ${entry.canonicalUrl}\n`;
    md += `- **Content Source:** ${entry.contentSource}\n`;
    md += `- **Meta Description:** ${entry.metaDescription === 'missing' ? '❌ missing' : entry.metaDescription}\n`;
    md += `- **Last Updated:** ${entry.lastUpdated === 'missing' ? '❌ missing' : entry.lastUpdated}\n`;
    md += `- **Render Status:** ${entry.renderSmokeStatus === 'pass' ? '✅ pass' : '❌ fail'}\n\n`;
    
    md += `**Word Count:**\n`;
    Object.entries(entry.wordCount).forEach(([section, count]) => {
      md += `- ${section}: ${count}\n`;
    });
    md += `\n`;
    
    if (Object.keys(entry.blocksSummary).length > 0) {
      md += `**Content Structure:**\n`;
      if (entry.blocksSummary.headings) {
        md += `- Headings: H1(${entry.blocksSummary.headings.h1}), H2(${entry.blocksSummary.headings.h2}), H3(${entry.blocksSummary.headings.h3})\n`;
      }
      if (entry.blocksSummary.paragraphs) {
        md += `- Paragraphs: ${entry.blocksSummary.paragraphs}\n`;
      }
      if (entry.blocksSummary.lists) {
        md += `- Lists: ${entry.blocksSummary.lists}\n`;
      }
      if (entry.blocksSummary.codeBlocks) {
        md += `- Code blocks: ${entry.blocksSummary.codeBlocks}\n`;
      }
      md += `\n`;
    }
    
    md += `**Features:**\n`;
    md += `- FAQ: ${entry.hasFaq ? `✅ Yes (${entry.faqCount} items)` : '❌ No'}\n`;
    md += `- Sources/Links: ${entry.hasSources ? `✅ Yes (${entry.sourcesCount} items)` : '❌ No'}\n\n`;
    
    if (entry.notes.length > 0) {
      md += `**⚠️ Issues/Notes:**\n`;
      entry.notes.forEach(note => {
        md += `- ${note}\n`;
      });
      md += `\n`;
    }
    
    md += `---\n\n`;
  });
  
  return md;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Generating Resources Content Inventory...\n');
  
  // Step 1: Extract routes from sitemap
  console.log('Step 1: Extracting routes from sitemap...');
  const routes = extractResourcesRoutes();
  console.log(`  ✓ Found ${routes.length} /resources routes\n`);
  
  // Step 2: Parse registry
  console.log('Step 2: Parsing resourcesRegistry.ts...');
  const registry = parseResourcesRegistry();
  console.log(`  ✓ Loaded ${registry.resources.length} resources`);
  console.log(`  ✓ Loaded ${registry.questions.length} questions`);
  console.log(`  ✓ Loaded ${registry.guides.length} guides`);
  console.log(`  ✓ Loaded ${registry.kits.length} starter kits`);
  console.log(`  ✓ Loaded ${registry.topics.length} topics\n`);
  
  // Step 3: Generate inventory
  console.log('Step 3: Generating inventory entries...');
  const inventory = routes.map(route => {
    const mapping = mapRouteToContent(route, registry);
    return generateInventoryEntry(route, mapping);
  });
  console.log(`  ✓ Generated ${inventory.length} entries\n`);
  
  // Step 4: Write JSON
  console.log('Step 4: Writing JSON inventory...');
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(inventory, null, 2), 'utf8');
  console.log(`  ✓ Written to ${OUTPUT_JSON}\n`);
  
  // Step 5: Write Markdown
  console.log('Step 5: Writing Markdown report...');
  const markdown = generateMarkdownReport(inventory);
  fs.writeFileSync(OUTPUT_MD, markdown, 'utf8');
  console.log(`  ✓ Written to ${OUTPUT_MD}\n`);
  
  // Summary
  const issues = inventory.filter(e => e.notes.length > 0).length;
  const failing = inventory.filter(e => e.renderSmokeStatus === 'fail').length;
  
  console.log('✅ Content Inventory Generated Successfully!\n');
  console.log(`📊 Summary:`);
  console.log(`   Total routes: ${inventory.length}`);
  console.log(`   Routes with issues: ${issues}`);
  console.log(`   Routes failing smoke test: ${failing}`);
  console.log(`\n📁 Output files:`);
  console.log(`   - ${OUTPUT_JSON}`);
  console.log(`   - ${OUTPUT_MD}`);
  
  if (failing > 0) {
    console.log(`\n⚠️  Warning: ${failing} route(s) have no content in registry`);
    process.exit(1);
  }
}

main();
