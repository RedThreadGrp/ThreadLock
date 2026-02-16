# V2 Content Standard Audit - README

## Overview

This directory contains comprehensive audit reports for ThreadLock resources content, with special focus on tracking the migration to the V2 content standard (structured blocks format).

## Generated Reports

### 1. V2_AUDIT_REPORT.md
**Purpose:** Track adoption and quality of V2 content standard

**Key Metrics:**
- **93.3% V2 Adoption** (28 of 30 content items)
- 100% of resources and questions use V2
- Only 2 low-priority items remain on V1

**What's Inside:**
- Executive summary with adoption rates by content type
- Complete list of all V2 content with quality indicators
- Remaining V1 content with migration priorities
- Quality metrics (governance metadata, sources, dates)
- Next steps and recommendations

### 2. CONTENT_INVENTORY.md
**Purpose:** Complete inventory of all /resources routes

**What's Inside:**
- Summary statistics including V2/V1 breakdown
- Quick reference table with version indicators
- Detailed inventory for each route
- Content structure analysis
- Issues and notes for each item

### 3. CONTENT_INVENTORY.json
**Purpose:** Machine-readable version for tools/scripts

**What's Inside:**
- Full structured data for all 38 routes
- Content metadata, word counts, quality flags
- Suitable for automated processing and analysis

## V2 Content Standard

The V2 standard represents a migration from simple markdown strings to structured content blocks:

### V1 (Legacy)
```typescript
{
  body: `# Title\n\nSome markdown text...`,
  contentVersion: 1
}
```

### V2 (Structured Blocks)
```typescript
{
  contentVersion: 2,
  blocks: {
    sections: [
      {
        id: "what-is-it",
        heading: "What is it?",
        body: [
          { type: "p", text: "..." },
          { type: "ul", items: [...] }
        ]
      }
    ],
    faqs: [...],
    sources: [...]
  }
}
```

### V2 Benefits
- **Structured data** for better rendering control
- **Separate FAQs section** for schema.org markup
- **Sources tracking** for credibility
- **Governance metadata** for freshness tracking
- **Section IDs** for deep linking and TOC
- **Type safety** with ResourceBodyBlock types

## How to Generate/Update Reports

Run the inventory script:

```bash
npm run resources:inventory
```

This will:
1. Scan sitemap for all /resources routes
2. Parse resourcesRegistry.ts for content
3. Generate three output files:
   - CONTENT_INVENTORY.json
   - CONTENT_INVENTORY.md
   - V2_AUDIT_REPORT.md

## Current Status (as of 2026-02-16)

### Migration Success ✅
- **Resources:** 11/11 (100%) migrated to V2
- **Questions:** 12/12 (100%) migrated to V2
- **Guides:** 3/4 (75%) migrated to V2
- **Kits:** 2/3 (66.7%) migrated to V2

### Remaining Work
1. **Migrate 2 V1 items** (low priority, minimal content)
   - /resources/guides/self-representation-complete
   - /resources/kits/hearing-soon

2. **Improve V2 Quality**
   - Add governance metadata to 15 items (46.4% → 100%)
   - Add sources to 27 items (3.6% → 100%)
   - Validate structured blocks formatting

## Using the Audit Reports

### For Content Team
- Use V2_AUDIT_REPORT.md to track migration progress
- Focus on quality metrics section for improvement areas
- Prioritize items based on migration recommendations

### For Developers
- Use CONTENT_INVENTORY.json for automated checks
- Check contentVersion field to route to correct renderer
- Ensure new content uses V2 format from the start

### For QA
- Verify all V2 items have required governance metadata
- Check that structured blocks render correctly
- Validate FAQs appear in schema.org markup

## Related Files

- `src/content/resources/types.ts` - V2 type definitions
- `src/content/resourcesRegistry.ts` - Content registry
- `scripts/generate-resources-inventory.mjs` - Generator script
- `scripts/resources/migrate-v1-to-v2.mjs` - Migration tool

## Questions?

See `docs/resources/README.md` for more information about the resources system.
