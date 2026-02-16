# SEO & Authority Enhancement Work Order - Status Report

**Date:** 2026-02-16  
**Objective:** Rapidly improve SEO, entity authority, and AI reference likelihood

---

## Implementation Status by Phase

### ✅ PHASE 1: Governance & Trust Signals - FOUNDATION COMPLETE

**Status:** Infrastructure complete, content updates in progress

**Completed:**
- ✅ Enhanced type system with strict requirements
  - Added `JurisdictionScope` enum
  - Enhanced `ResourceSource` with 5 required fields
  - Added optional `ReviewedBy` credentials
- ✅ Created build-time validation script (`validate-governance.mjs`)
- ✅ Integrated validation into prebuild process
- ✅ Build now FAILS on missing required metadata
- ✅ Created comprehensive update guide with templates
- ✅ Updated 1 file as reference example (custody-types.ts)

**In Progress:**
- 🔄 Updating remaining 29 V2 content files with authoritative sources
  - Each file requires research for primary legal authority
  - Must find official URLs and verify accessibility
  - Need to add full metadata (title, organization, url, lastAccessed)

**Why This Matters:**
- AI systems prioritize content with verifiable primary sources
- Build-time enforcement prevents regression
- Establishes ThreadLock as authoritative, not a blog

---

### 🔄 PHASE 2: Source Authority Upgrade - IN PROGRESS

**Status:** Framework complete, systematic updates needed

**Completed:**
- ✅ Defined acceptable vs unacceptable sources
- ✅ Created templates for federal, multi-state, and state-specific content
- ✅ Documented common authoritative source URLs
- ✅ Example implementation (custody-types.ts)

**Remaining Work:**
- 🔄 Update 29 files with primary legal authority
  - Priority 1: High-traffic pages (7 files)
  - Priority 2: Federal rules content (5 files)
  - Priority 3: Popular Q&A (10 files)
  - Priority 4: Remaining content (7 files)

**Template Available:**
```typescript
sources: [
  {
    title: "Federal Rules of Civil Procedure - Rule 5",
    organization: "U.S. Courts",
    url: "https://www.uscourts.gov/...",
    jurisdiction: "Federal",
    lastAccessed: "2026-02-16",
    note: "Service requirements"
  }
]
```

---

### ⏳ PHASE 3: Structured Data Enhancement - NOT STARTED

**Status:** Ready to implement after Phase 2

**Required:**
- Create JSON-LD generation utilities
- Add FAQPage schema for Q&A content
- Add Article schema for guides/resources
- Add CollectionPage schema for topic hubs
- Integrate into page templates

**Files Needed:**
- `lib/seo/json-ld.ts` - JSON-LD generation utilities
- `components/structured-data/*` - Schema components
- Update page templates to include structured data

**Why This Matters:**
- Without JSON-LD, AI treats content like a blog
- FAQPage schema increases rich snippet eligibility
- Article schema with proper attribution increases authority
- CollectionPage schema helps with topic clustering

---

### ⏳ PHASE 4: Jurisdiction Depth Strategy - NOT STARTED

**Status:** Can begin in parallel with Phase 3

**Required Federal Anchor Articles:**
- FRCP Rule 4 - Service of Process
- FRCP Rule 5 - Service & Filing
- FRE Rule 901 - Authentication

**Required State-Specific Pages (6 states):**
- California - Proof of service, filing requirements
- Texas - Court procedures, service rules
- Florida - Family court procedures
- New York - Filing and service requirements
- Washington - Court rules and procedures
- Oregon - Family court guidance

**Each Page Must Include:**
- Official form names (e.g., "FL-330")
- Specific rule numbers
- Filing time requirements
- Links to official judiciary
- State-specific terminology

**Why This Matters:**
- AI systems prioritize jurisdiction-specific content
- Reduces internal competition
- Increases pickup for state-specific queries

---

### ⏳ PHASE 5: Slug/Title Validation - NOT STARTED

**Status:** Quick win, should implement soon

**Required:**
- Create automated slug/title validation script
- Add to build process
- Fix any existing mismatches
- Prevent future mismatches

**Why This Matters:**
- Slug/title mismatches destroy topical authority
- Confuses AI entity resolution
- Previous mismatches harmed credibility

---

### ⏳ PHASE 6: Topic Hub Reconstruction - NOT STARTED

**Status:** Major gap, high priority after Phase 2

**Current State:**
- Topic hubs exist but are "thin shells"
- Missing substantial content
- No authoritative intros
- Limited internal linking

**Required for Each Topic Hub:**
- 300-500 word authoritative introduction
- Links to 5-8 internal articles
- Definition of key terms
- 2+ authoritative source citations
- lastUpdated date

**Files to Update:**
- `/resources/topics/proof-of-service`
- `/resources/topics/evidence-exhibits`
- `/resources/topics/hearings-prep`
- `/resources/topics/parenting-plans`
- `/resources/topics/financial-declarations`
- `/resources/topics/official-forms`

**Why This Matters:**
- Thin topic pages are "SEO poison"
- AI systems skip over thin aggregator pages
- Strong hubs increase topical authority

---

### ⏳ PHASE 7: Internal Linking Upgrade - NOT STARTED

**Status:** Important for entity cohesion

**Required:**
- Add `relatedResources` to all content
- Ensure 3-5 links per article
- Link upward to topic hubs
- Use exact-match anchor text occasionally

**Why This Matters:**
- Internal linking creates entity cohesion for AI
- Helps with topic clustering
- Increases page authority distribution

---

### ⏳ PHASE 8: Recency Signaling - NOT STARTED

**Status:** Lower priority, ongoing maintenance

**Required:**
- Add `dateReviewed` field to types
- Implement quarterly review process
- Add visual indicators for recent reviews

---

### ⏳ PHASE 9: Topical Clarity - NOT STARTED

**Status:** Audit needed

**Required:**
- Identify competing pages
- Establish primary vs supporting content
- Add canonical tags where needed
- Resolve ambiguities

---

## Critical Path Forward

### Immediate Actions (Week 1)

1. **Complete Phase 2 - Source Authority**
   - Update all 30 files with authoritative sources
   - Priority: High-traffic and federal rules content first
   - Goal: Build passes validation
   - Timeline: 1-2 days of focused work

2. **Implement Phase 3 - JSON-LD**
   - Create JSON-LD utilities
   - Add FAQPage schema to questions
   - Add Article schema to guides/resources
   - Timeline: 1 day

### Short-Term Actions (Week 2-3)

3. **Phase 6 - Topic Hub Enhancement**
   - Write substantial intros for 6 topic hubs
   - Add internal linking
   - Cite authoritative sources
   - Timeline: 2-3 days

4. **Phase 4 - Federal Anchor Articles**
   - Create 3 federal rules pages
   - FRCP 4, 5, FRE 901
   - Timeline: 1 day

5. **Phase 5 - Slug/Title Validation**
   - Quick implementation
   - Fix any mismatches
   - Timeline: 0.5 day

### Medium-Term Actions (Week 4+)

6. **Phase 4 - State-Specific Content**
   - Create pages for 6 high-value states
   - 6-12 pages total
   - Timeline: 1 week

7. **Phase 7 - Internal Linking**
   - Add relatedResources to all content
   - Timeline: 1-2 days

8. **Phases 8-9 - Ongoing Improvements**
   - Recency signals
   - Topical clarity
   - Timeline: Ongoing

---

## Success Metrics

### Phase 1-2 Complete
- ✅ Build-time validation enforced
- ✅ All 30 files have authoritative sources
- ✅ All URLs verified and working
- ✅ All dates in ISO format

### Phase 3 Complete
- ✅ JSON-LD on every page type
- ✅ FAQPage schema on Q&A
- ✅ Article schema on guides/resources
- ✅ CollectionPage schema on topic hubs

### Phases 4-6 Complete
- ✅ 3 federal anchor articles
- ✅ 6-12 state-specific pages
- ✅ 6 enhanced topic hubs
- ✅ Slug/title validation enforced

### All Phases Complete
- ✅ Authority-first content strategy
- ✅ AI-friendly structured data
- ✅ Clear jurisdiction tagging
- ✅ Strong topical clustering
- ✅ Automated quality enforcement

---

## What Actually Increases AI Reference Likelihood

**Implemented:**
- ✅ Primary source citations (framework complete)
- ✅ Jurisdiction specificity (type system ready)
- ✅ Verifiable sources (validation enforced)
- ✅ Entity-rich language (enabled by proper sources)

**In Progress:**
- 🔄 All 30 files updated with primary sources

**Not Yet Started:**
- ⏳ Structured FAQ blocks (FAQPage schema)
- ⏳ Explicit rule numbers (in state-specific content)
- ⏳ Clear definitions (in topic hubs)
- ⏳ Jurisdiction depth (state pages)

---

## Technical Debt Addressed

**Before:**
- Generic "various sources" citations
- No build-time validation
- Inconsistent source formats
- Thin topic hubs
- No structured data
- Missing jurisdiction tags

**After (When Complete):**
- Primary legal authority only
- Automated quality enforcement
- Structured, verifiable sources
- Substantial topic hubs
- Rich JSON-LD throughout
- Clear jurisdiction tagging

---

## Files Modified So Far

1. `src/content/resources/types.ts` - Enhanced type definitions
2. `scripts/validate-governance.mjs` - Build-time validation (NEW)
3. `package.json` - Added validation to prebuild
4. `src/content/resources/custody-types.ts` - Example update
5. `docs/SOURCE_AUTHORITY_UPDATE_GUIDE.md` - Comprehensive guide (NEW)

---

## Next Session Priorities

1. **Continue Phase 2**: Update remaining 29 files with authoritative sources
2. **Start Phase 3**: Implement JSON-LD structured data
3. **Start Phase 6**: Enhance topic hubs with substantial content

---

## Estimated Timeline to Completion

- **Phase 1-2 (Foundation)**: 2-3 days
- **Phase 3 (JSON-LD)**: 1 day
- **Phases 5-6 (Validation + Topic Hubs)**: 3-4 days
- **Phase 4 (Jurisdiction Depth)**: 5-7 days
- **Phases 7-9 (Polish)**: 2-3 days

**Total**: 2-3 weeks of focused implementation

---

## Key Insight

The work order identified that ThreadLock is "technically clean but authority-light." The foundation for authority is now in place (Phase 1 complete), but the content updates (Phase 2) are critical and time-intensive. Each file requires individual research and verification - this cannot be automated.

The validation script ensures we can't backslide. Every new piece of content will be held to these standards from day one.
