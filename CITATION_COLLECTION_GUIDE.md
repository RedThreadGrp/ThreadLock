# ThreadLock Citation Collection Guide

## Overview

This repository contains **43+ content items** (7 topics + 36 resources) that require comprehensive, authoritative citations. This guide provides three complementary documents to facilitate efficient URL collection.

## Documents Generated

### 1. CITATION_NEEDS.md (70 KB)
**Organization:** By content item (topic/resource)  
**Use Case:** Review each piece of content to understand what sources it currently has and what additional sources it needs  
**Structure:**
- Lists all 7 topics with their sections
- Lists all 36 resources with their sections
- Shows current sources
- Identifies gaps per section
- ~1,700 lines

### 2. CITATION_NEEDS_DETAILED.md (92 KB)
**Organization:** By content item with detailed citation slots  
**Use Case:** Fill in specific citation requirements for each content item with structured metadata  
**Structure:**
- Each content item has numbered citation slots
- Each slot includes: Title, Organization, URL, Jurisdiction, Last Accessed date
- Section-specific citation needs
- Optional/recommended additional sources
- ~2,780 lines

### 3. CITATION_SOURCES_BY_TYPE.md (13 KB)
**Organization:** By source type (Federal, State, Organizations)  
**Use Case:** Batch collect URLs by category, then apply to multiple content items  
**Structure:**
- Federal Rules & Statutes
- Federal Court Resources
- State Resources (CA, NY, TX)
- Legal Organizations (ABA, NCSC, AAML, AFCC, etc.)
- Federal Agencies
- Academic Resources
- 5-phase collection strategy

## Recommended Workflow

### Phase 1: Source Type Collection (Most Efficient)
1. Start with `CITATION_SOURCES_BY_TYPE.md`
2. Collect URLs for all HIGH priority sources first
3. Work through each category systematically
4. Use the 5-phase collection strategy

### Phase 2: Apply to Content
1. Use `CITATION_NEEDS_DETAILED.md`
2. Fill in the structured citation slots for each content item
3. Map collected URLs from Phase 1 to appropriate content items

### Phase 3: Verify Coverage
1. Use `CITATION_NEEDS.md` to review
2. Ensure all sections have appropriate citations
3. Check for gaps or areas needing additional sources

## Priority Order

### Immediate Priority (Start Here)
1. **Federal Rules** - Apply to multiple items
   - FRCP (procedures)
   - FRE (evidence)
   - Specific rules (FRE 901, 902, etc.)

2. **California Resources** - Most comprehensive state self-help
   - CA Courts self-help center
   - CA Family Code
   - CA Evidence Code
   - CA court forms

3. **National Organizations** - Broadly applicable
   - ABA (multiple resources)
   - NCSC
   - AAML
   - AFCC

### High Priority Topics (Content Foundation)
1. Proof of Service
2. Evidence & Exhibits
3. Hearings & Courtroom Prep
4. Parenting Plans
5. Financial Declarations
6. Official Forms & Portals
7. AI & Digital Evidence

### High Priority Resources (Most Viewed)
1. Proof of Service Pack
2. Evidence Intake
3. Hearing Tomorrow Checklist
4. Evidence Authentication
5. Self-Representation Complete Guide

## Citation Quality Standards

### Must-Have Characteristics
- ✅ Official .gov or .org domain
- ✅ Freely accessible (no subscription required for core content)
- ✅ Current/recently updated
- ✅ Authoritative source (court, government, major legal organization)
- ✅ Stable URL (not likely to change)

### Source Priority Hierarchy
1. **Primary Authority** (Highest)
   - Statutes, regulations, court rules
   - Federal and state codes

2. **Official Court Resources**
   - Court self-help centers
   - Official forms and instructions
   - Court websites

3. **Legal Organizations**
   - ABA, NCSC, AAML, AFCC
   - State bar associations
   - Legal aid organizations

4. **Academic/Research**
   - Cornell LII
   - Law school resources
   - Google Scholar (for case law)

5. **Secondary Sources** (Use Sparingly)
   - Legal blogs (only if from reputable sources)
   - Practice guides
   - Secondary literature

### Minimum Requirements per Content Item
- **Topics:** 5-7 authoritative sources
- **Resources:** 3-5 authoritative sources
- **Each Section:** At least 1 specific source supporting key claims

## Source Jurisdictions

### Multi-State Content
- Start with federal sources
- Add California (most comprehensive)
- Add 2-3 other major states (NY, TX, FL)
- Note variations in content

### State-Specific Content
- Primary state statute/code
- State court self-help
- State bar association
- State legal aid
- Federal law if applicable

## Progress Tracking

Track your progress through the documents:
- [ ] Phase 1 complete: Federal sources collected
- [ ] Phase 2 complete: California sources collected
- [ ] Phase 3 complete: National organizations collected
- [ ] Phase 4 complete: Additional states collected
- [ ] Phase 5 complete: Specialized sources collected
- [ ] All HIGH priority items populated
- [ ] All MEDIUM priority items populated
- [ ] Topic content fully cited (7 items)
- [ ] Resource content fully cited (36 items)
- [ ] Quality check: all URLs verified working
- [ ] Quality check: all sources authoritative
- [ ] Quality check: minimum citation counts met

## Tips for Efficient Collection

1. **Batch Similar Sources**
   - Collect all federal sources together
   - Collect all CA sources together
   - Collect all organization sources together

2. **Use Official Portals**
   - Start at main sites (uscourts.gov, courts.ca.gov)
   - Navigate to specific resources
   - Bookmark frequently used pages

3. **Verify URLs**
   - Test each URL before recording
   - Use permalink/stable URL when available
   - Avoid temporary or session-specific URLs

4. **Document Metadata**
   - Note last accessed date
   - Note if login/subscription required
   - Note specific jurisdiction
   - Note if URL is to downloadable PDF vs. webpage

5. **Check for Updates**
   - Note publication/last updated dates
   - Prefer more recent resources
   - Note if resource is archived/historical

## Questions?

If you need clarification on:
- Which sources to prioritize
- Where to find specific URLs
- How to format citations
- Quality standards

Review the detailed documents or note questions for discussion.

## Next Steps After Collection

Once URLs are collected:
1. Update governance blocks in source files
2. Verify all URLs in automated test
3. Check citation formatting consistency
4. Build and verify no validation errors
5. Commit changes with descriptive message
