# V2 Content Standard Audit Report

**Generated:** 2026-02-16T01:38:51.365Z
**Audit Purpose:** Track migration to contentVersion: 2 (structured blocks) standard

## Executive Summary

### Overall V2 Adoption

- **Total Content Items:** 30
- **V2 (Structured Blocks):** 28 (93.3%)
- **V1 (Legacy Markdown):** 2 (6.7%)

### V2 Adoption by Content Type

| Type | Total | V2 | V1 | V2 % |
|------|-------|----|----|------|
| resource | 11 | 11 | 0 | 100.0% |
| question | 12 | 12 | 0 | 100.0% |
| guide | 4 | 3 | 1 | 75.0% |
| kit | 3 | 2 | 1 | 66.7% |

## V2 Standard Compliance

The V2 standard requires:
- ✅ `contentVersion: 2` in registry
- ✅ Structured `blocks` using ResourceBodyBlock types
- ✅ Governance metadata (lastUpdated, sources, jurisdictionScope)
- ✅ Proper sections with IDs for TOC/anchors
- ✅ Separate FAQs and sources sections

## V2 Content Items (28 total)

### Published V2 Content (28)

| Route | Type | Title | Words | Has Blocks | Notes |
|-------|------|-------|-------|------------|-------|
| /resources/authentication | resource | Federal Rules of Evidence - Rule... | 0 | ✅ | V2 content from separate file ... |
| /resources/courtroom-prep | resource |  | 0 | ✅ | V2 content from separate file ... |
| /resources/evidence-intake | resource | Evidence Intake: Photos, Texts, ... | 0 | ✅ | V2 content from separate file ... |
| /resources/exhibits-guide | resource | Exhibits Guide: Labeling and Org... | 0 | ✅ | V2 content from separate file ... |
| /resources/filing-basics | resource | Federal Rules of Civil Procedure | 0 | ✅ | V2 content from separate file ... |
| /resources/financial-snapshot | resource |  | 0 | ✅ | V2 content from separate file ... |
| /resources/guides/evidence-authentication | guide | Evidence Authentication 101 | 286 | ✅ | Missing updated date... |
| /resources/guides/parenting-time-calculations | guide | Understanding Parenting Time Cal... | 481 | ✅ | Missing updated date... |
| /resources/guides/proof-of-service-states | guide | Proof of Service State-by-State | 432 | ✅ | Missing updated date... |
| /resources/hearing-tomorrow | resource | Hearing Tomorrow Checklist | 0 | ✅ | V2 content from separate file ... |
| /resources/kits/evidence | kit | Evidence Kit | 0 | ✅ | V2 content from separate file ... |
| /resources/kits/first-filing | kit | First Filing Kit | 0 | ✅ | V2 content from separate file ... |
| /resources/official-portals | resource |  | 0 | ✅ | V2 content from separate file ... |
| /resources/parenting-plans | resource |  | 0 | ✅ | V2 content from separate file ... |
| /resources/proof-of-service | resource | What Counts as Proof of Service?... | 0 | ✅ | V2 content from separate file ... |
| /resources/q/child-support-calculation | question | How much does mediation cost? | 979 | ✅ | — |
| /resources/q/custody-types | question | What happens if I miss a filing ... | 846 | ✅ | — |
| /resources/q/exhibit-labeling | question | How long do I have to serve docu... | 468 | ✅ | — |
| /resources/q/fee-waiver | question | What counts as a substantial cha... | 1041 | ✅ | — |
| /resources/q/hearing-checklist | question | What counts as proof of service? | 702 | ✅ | Duplicate content: shortAnswer... |
| /resources/q/mediation-lawyer | question | Can I modify a parenting plan la... | 899 | ✅ | — |
| /resources/q/modify-parenting-plan | question | Can I modify child support later? | 1131 | ✅ | — |
| /resources/q/official-forms-location | question | Can I authenticate text messages... | 567 | ✅ | — |
| /resources/q/proof-of-service-definition | question | What counts as proof of service? | 36 | ✅ | — |
| /resources/q/respond-to-motion | question | What are typical court filing fees? | 1261 | ✅ | — |
| /resources/q/service-deadlines | question | What should I wear to court? | 788 | ✅ | — |
| /resources/q/text-authentication | question | What if I can't afford court fees? | 640 | ✅ | — |
| /resources/timeline-tools | resource | Official Court Portals by State | 1466 | ✅ | — |

## V1 Legacy Content (2 total)

### Published V1 Content Awaiting Migration (2)

These items are candidates for migration to V2 structured format:

| Route | Type | Title | Words | Priority |
|-------|------|-------|-------|----------|
| /resources/guides/self-representation-complete | guide | The Complete Guide to Self-Repre... | 19 | 🔵 Low |
| /resources/kits/hearing-soon | kit | Hearing Soon Kit | 9 | 🔵 Low |

## Migration Recommendations

### High Priority (Migrate First)

0 items:

### Medium Priority (Questions)

0 items:

### Low Priority

2 items:
- /resources/guides/self-representation-complete (19 words)
- /resources/kits/hearing-soon (9 words)

## Quality Metrics

### V2 Content Quality

- **With lastUpdated date:** 13/28 (46.4%)
- **With sources:** 1/28 (3.6%)
- **With FAQs:** 12/28

## Next Steps

1. **Migrate High Priority Items** (0 items)
   - Focus on resources/guides with >500 words
   - These have the most content value

2. **Batch Migrate Questions** (0 items)
   - Questions follow similar structure
   - Can use migration script for bulk conversion

3. **Quality Review V2 Content**
   - Add missing governance metadata
   - Ensure all have sources and lastUpdated
   - Validate structured blocks are properly formatted

4. **Low Priority Migration**
   - Handle remaining 2 items
   - May require content expansion first

