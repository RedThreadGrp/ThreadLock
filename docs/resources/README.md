# Resources Content Inventory System

## Overview

The Resources Content Inventory System provides automated documentation and analysis of all `/resources` routes in the ThreadLock application. It generates comprehensive reports showing current rendered contents, metadata, content structure, and quality checks.

## Generated Files

### `docs/resources/CONTENT_INVENTORY.json`
Machine-readable inventory in JSON format containing detailed metadata for each route:
- Route information (path, canonical URL, type, slug)
- Content source (registry file and export)
- Title and meta description
- Word counts (total and by section)
- Content structure analysis (headings, paragraphs, lists, code blocks)
- FAQ and sources/links counts
- Last updated timestamp
- Render smoke test status
- Quality issues and notes

### `docs/resources/CONTENT_INVENTORY.md`
Human-readable report in Markdown format with:
- Summary statistics (routes by type, content coverage percentages)
- Quick reference table (all routes with key metrics)
- Detailed per-route sections with complete metadata

## Usage

### Generate Inventory

```bash
npm run resources:inventory
```

This command:
1. Extracts all `/resources` routes from `public/sitemap.xml`
2. Parses content from `src/content/resourcesRegistry.ts`
3. Analyzes content structure and metadata
4. Detects quality issues (missing metadata, duplicate content)
5. Generates both JSON and Markdown reports

### Exit Codes

- **0**: Success - All routes documented, no failures
- **1**: Warning - Some routes missing content in registry (currently expected for some special pages)

## Content Analysis Features

### Word Count Analysis
- Total words across all content
- Per-section counts (body, excerpt, shortAnswer, description, etc.)
- Helps identify sparse or overly verbose content

### Content Structure Analysis
Analyzes Markdown structure:
- Heading counts (H1, H2, H3)
- Paragraph count
- List items count
- Code block count

### Quality Checks

**Duplicate Content Detection:**
- Detects when shortAnswer text appears verbatim in body content
- Flags for review to eliminate redundancy

**Missing Metadata:**
- Missing title
- Missing metaDescription
- Missing lastUpdated/dateModified
- Empty content (0 words)

**FAQ & Sources:**
- Counts related questions (FAQ items)
- Counts related links (sources/references)
- Helps identify resources that could benefit from additional context

## Content Types

The system recognizes and analyzes 6 content types:

1. **resource** - Main resource articles (`/resources/[slug]`)
   - 11 routes from `RESOURCES` array
   - Full body content with excerpts

2. **question** - Popular questions (`/resources/q/[slug]`)
   - 12 routes from `POPULAR_QUESTIONS` array
   - Short answers + detailed body

3. **guide** - Featured guides (`/resources/guides/[slug]`)
   - 4 routes from `FEATURED_GUIDES` array
   - Summary + comprehensive body

4. **kit** - Starter kits (`/resources/kits/[slug]`)
   - 3 routes from `STARTER_KITS` array
   - Description + body content

5. **topic** - Topic pages (`/resources/topics/[slug]`)
   - 10 routes from `TOPICS` array + `topics.json`
   - Promise/description + optional body

6. **special** - Special pages
   - `/resources` (hub page)
   - `/resources/thanks` (thank you page)
   - No registry content (aggregates or standalone)

## Current Statistics

As of last run:
- **Total Routes:** 42
- **Content Coverage:** 71.4% with body content
- **Metadata Coverage:** 100% with descriptions, 42.9% with dates
- **FAQs:** 15 routes have related questions
- **Issues:** 25 routes flagged with notes (mostly missing dates)
- **Smoke Test:** All 42 routes pass (content found)

## Integration with CI/CD

The inventory command can be integrated into CI/CD pipelines to:
- Verify all routes have content backing
- Track content coverage over time
- Alert on regression (new routes without content)
- Generate documentation artifacts

Example CI step:
```yaml
- name: Generate Resources Inventory
  run: npm run resources:inventory
  
- name: Upload Inventory Artifacts
  uses: actions/upload-artifact@v3
  with:
    name: resources-inventory
    path: docs/resources/CONTENT_INVENTORY.*
```

## Maintenance

### Adding New Routes
When adding new resource routes:
1. Add content to `src/content/resourcesRegistry.ts`
2. Update sitemap: `npm run generate-sitemap`
3. Regenerate inventory: `npm run resources:inventory`
4. Review inventory for quality issues

### Updating Content
After content updates:
1. Run inventory to verify changes
2. Check for new quality issues
3. Review word count changes
4. Ensure metadata is current

## Technical Details

### Implementation
- **Language:** Node.js (ES modules)
- **Input:** sitemap.xml, resourcesRegistry.ts, topics.json
- **Output:** JSON + Markdown
- **Parsing:** Regex-based TypeScript parsing (no transpilation needed)
- **Analysis:** Text-based content structure analysis

### Content Sources
- Primary: `src/content/resourcesRegistry.ts` exports
- Secondary: `src/data/resources/topics.json` for topic metadata
- Fallback: Special handling for hub and thank you pages

### Limitations
- Regex parsing may not capture all edge cases in complex TypeScript
- Duplicate content detection uses simple substring matching
- Word counts based on whitespace splitting
- Content structure analysis limited to Markdown patterns

## Future Enhancements

Potential improvements:
- Render capture mode using Playwright for pages without registry backing
- More sophisticated duplicate detection
- Content quality scoring
- Broken link detection in body content
- SEO analysis (title length, description length, keyword usage)
- Historical tracking (content changes over time)
