# Resources v1 → v2 Migration System

This directory contains the migration engine for converting legacy v1 resources content to the structured v2 schema.

## Overview

The migration system provides:
1. **Automated backlog generation** - Analyzes all content and triages by complexity
2. **Enhanced linting** - Validates v2 content structure and governance
3. **Migration utilities** - Converts v1 markdown to v2 blocks
4. **Quality gates** - Ensures content meets standards before publication

## Files

### `generate-migration-backlog.mjs`
Analyzes content inventory and generates prioritized migration backlog.

**Features:**
- Complexity scoring (simple/medium/hard)
- Slug/title mismatch detection
- Migration status assignment (todo/blocked/needs-content)
- Word count and structure analysis

**Output:** `docs/resources/MIGRATION_BACKLOG.md`

**Usage:**
```bash
npm run resources:backlog
```

### `migrate-v1-to-v2.mjs`
Migration utilities for converting v1 content to v2 structure.

**Features:**
- Short answer extraction (from "Short Answer" blocks or first paragraph)
- Section splitting (based on ## and ### headings)
- Block conversion (paragraphs → {type: "p"}, lists → {type: "ul"})
- Duplicate removal (strips shortAnswer from section bodies)
- Governance preservation

**Usage:**
```bash
npm run resources:migrate
```

## Migration Workflow

### 1. Generate Backlog
```bash
npm run resources:backlog
```

Review `docs/resources/MIGRATION_BACKLOG.md` to understand:
- Which items are ready for migration
- Which items are blocked (and why)
- Complexity distribution
- Slug/title mismatches

### 2. Fix Blockers

**Critical:** 20 items are blocked due to slug/title mismatches. These must be fixed first:

Example mismatches:
- `/resources/q/fee-waiver` → Title: "What counts as a substantial change?"
- `/resources/q/child-support-calculation` → Title: "How much does mediation cost?"

**Resolution options:**
1. Update content title to match slug
2. Rename slug and add redirect
3. Mark as requiring editorial review

### 3. Run Migration

For items marked as "todo" in the backlog:

```bash
npm run resources:migrate
```

This will:
- Extract short answers
- Split content into sections
- Convert to v2 block structure
- Generate migration report

### 4. Validate Output

Run lint to ensure v2 content meets standards:

```bash
npm run resources:lint
```

**Validation checks:**
- ✓ No zero sections
- ✓ No duplicate section headings
- ✓ No repeated shortAnswer in body
- ✓ Has lastUpdated and sources
- ✓ Governance metadata complete

### 5. Manual Review

Items flagged as "needs-review" require human verification:
- Weak short answers (too short/long or heuristically extracted)
- Complex structure (many headings, tables, state-by-state content)
- Missing sources
- Editorial quality

### 6. Update Report

After migration, review:
- `docs/resources/MIGRATION_REPORT.md` - Summary of migration results
- Individual item warnings
- Failed migrations

## Complexity Triage

The system automatically classifies content:

### Simple (23 items)
- Clear heading structure (3+ headings)
- Under 1200 words
- **Action:** Automated migration with light review

### Medium (1 item)
- Mixed structure
- 1200-2500 words
- **Action:** Automated migration with careful review

### Hard (4 items)
- Tangled formatting
- Over 2500 words
- Multiple "Short Answer" blocks
- Tables or state-by-state lists
- **Action:** Manual migration recommended

### Minimal (2 items)
- Under 100 words
- **Action:** Expand content before migration

### Content Creation (10 items)
- Topic hubs with ~5-15 words
- **Action:** Write 250-500 word intro + curated links

## V2 Schema Structure

Migrated content uses the `ResourceQAContent` type:

```typescript
{
  slug: string,
  seo: {
    title: string,
    description: string
  },
  hero: {
    h1: string,
    subhead?: string
  },
  shortAnswer: {
    text: string  // Single paragraph, no lists
  },
  sections: [
    {
      id: string,           // Kebab-case heading
      heading: string,      // Display heading
      body: [              // Array of blocks
        { type: "p", text: string },
        { type: "ul", items: string[] },
        { type: "ol", items: string[] },
        // ... other block types
      ]
    }
  ],
  governance: {
    lastUpdated: string,           // YYYY-MM-DD
    sources: [{name, href?, note?}],
    jurisdictionScope: string[],
    reviewIntervalDays: 90 | 180 | 365
  }
}
```

## Quality Gates

Before migration is considered complete:

### Automated (CI)
- [ ] `npm run resources:lint` passes
- [ ] All v2 pages have 1+ sections
- [ ] No duplicate section headings
- [ ] No shortAnswer duplication
- [ ] All pages have governance metadata

### Manual
- [ ] Slug/title consistency achieved
- [ ] 3-5 priority items polished
- [ ] Sources added to polished items
- [ ] Editorial QA complete

## Fast ROI Priorities

Per work order recommendations:

1. **Migrate all Popular Questions (12)** - 8 ready after fixing slug mismatches
2. **Polish 3-5 most visible**:
   - Proof of Service cluster
   - Filing deadlines
   - Fee waivers
   - Exhibits guide
3. **Add sources** to those same items
4. **Fix slug/title mismatches** (SEO/credibility)
5. **Convert topic hubs** (amplify via internal linking)

## Commands Reference

```bash
# Generate migration backlog
npm run resources:backlog

# Run migration utilities
npm run resources:migrate

# Validate content
npm run resources:lint

# Generate content inventory
npm run resources:inventory

# Check for stale content
npm run resources:stale
```

## Troubleshooting

### "Slug/title mismatch" errors
These are intentional blocks. URLs must match content semantics for SEO. 

**Fix:** Update either the slug or title to achieve consistency.

### "No sections extracted" warning
The v1 body lacks clear heading structure.

**Fix:** Add ## or ### headings to organize content, or manually create sections.

### "Short answer needs review" warning
The extracted short answer is weak (too short/long or fallback extraction).

**Fix:** Manually craft a clear, concise short answer (50-300 chars).

### Lint failures on v2 content
Review the specific error:
- Zero sections: Add at least one content section
- Duplicate headings: Make section headings unique
- ShortAnswer duplication: Remove the duplicate from section body
- Missing governance: Add lastUpdated, sources, jurisdictionScope, reviewIntervalDays

## Next Steps

1. Review `MIGRATION_BACKLOG.md`
2. Fix slug/title mismatches
3. Run migration on ready items
4. Manually polish priority content
5. Validate with lint gate
6. Deploy v2 content

## Support

See also:
- `docs/resources/MIGRATION_BACKLOG.md` - Full content inventory
- `docs/resources/MIGRATION_REPORT.md` - Migration progress
- `src/content/resources/types.ts` - V2 type definitions
- `src/content/resources/proof-of-service.ts` - Example v2 content
