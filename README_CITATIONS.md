# Citation Collection Documentation

## Quick Navigation

| Document | Purpose | Size | Best For |
|----------|---------|------|----------|
| [CITATION_COLLECTION_GUIDE.md](CITATION_COLLECTION_GUIDE.md) | Master guide & workflow | - | Start here - read first |
| [CITATION_QUICK_START.md](CITATION_QUICK_START.md) | Fill-in template | - | Immediate action (2-4 hrs) |
| [CITATION_SOURCES_BY_TYPE.md](CITATION_SOURCES_BY_TYPE.md) | Sources by category | 13 KB | Efficient batch collection |
| [CITATION_NEEDS_DETAILED.md](CITATION_NEEDS_DETAILED.md) | Detailed slots per item | 92 KB | Structured data entry |
| [CITATION_NEEDS.md](CITATION_NEEDS.md) | Overview by content | 70 KB | Coverage verification |

## What This Is

A comprehensive analysis of **all 43 content items** (7 topics + 36 resources) in the ThreadLock repository, identifying what citations are needed and providing structured templates to collect authoritative URLs efficiently.

## Why These Documents Exist

**Problem:** Content items need authoritative sources but collecting hundreds of URLs is time-consuming and error-prone.

**Solution:** These documents provide:
- Clear identification of what sources are needed
- Structured templates with placeholders for easy URL insertion
- Efficient collection strategy (batch by source type)
- Quality standards to ensure authoritative citations
- Multiple organization methods to suit different workflows

## How to Use

### For Immediate Results (Recommended)

1. **Read** [CITATION_COLLECTION_GUIDE.md](CITATION_COLLECTION_GUIDE.md) (5 min)
2. **Fill in** [CITATION_QUICK_START.md](CITATION_QUICK_START.md) (2-4 hours)
3. **Apply** URLs to detailed documents
4. **Update** governance blocks in source files

### For Systematic Completion

1. **Use** [CITATION_SOURCES_BY_TYPE.md](CITATION_SOURCES_BY_TYPE.md)
2. **Work through** 5 phases (Federal → CA → Orgs → States → Specialized)
3. **Fill in** [CITATION_NEEDS_DETAILED.md](CITATION_NEEDS_DETAILED.md) per content item
4. **Verify** with [CITATION_NEEDS.md](CITATION_NEEDS.md)

## What Gets Sourced

### Topics (7 items - high priority)
1. Proof of Service
2. Evidence & Exhibits
3. Hearings & Courtroom Prep
4. Parenting Plans
5. Financial Declarations
6. Official Forms & Portals
7. AI & Digital Evidence

### Resources (36 items)
All resources from authentication to verification, including:
- Proof of Service Pack
- Evidence Intake
- Hearing checklists
- Self-representation guides
- State-specific resources
- And 31 more...

## Source Types to Collect

### Federal (Phase 1)
- Federal Rules of Civil Procedure (FRCP)
- Federal Rules of Evidence (FRE)
- US Courts official resources
- PACER system

### State - California (Phase 2)
- CA Courts self-help center
- CA Family Code
- CA Evidence Code
- CA court forms (FL-150, FL-330, FL-335)

### National Organizations (Phase 3)
- American Bar Association (ABA)
- National Center for State Courts (NCSC)
- American Academy of Matrimonial Lawyers (AAML)
- Association of Family and Conciliation Courts (AFCC)
- Legal Services Corporation (LSC)
- Uniform Law Commission

### Additional States (Phase 4)
- New York (courts, Family Court Act, forms)
- Texas (courts, Family Code, forms)

### Specialized (Phase 5)
- IRS family tax information
- Cornell Legal Information Institute
- Google Scholar (case law)
- AI/digital evidence specific sources

## Quality Standards

All URLs must be:
- ✅ Official (.gov or .org domains)
- ✅ Freely accessible (no subscriptions required for core content)
- ✅ Current and maintained
- ✅ Authoritative source
- ✅ Stable URL (not session-specific)

## Target Citation Counts

- **Topics:** 5-7 authoritative sources each
- **Resources:** 3-5 authoritative sources each
- **Sections:** At least 1 specific source per section
- **Preference:** MORE citations over fewer

## After Collection

Once URLs are collected:

1. **Update source files**
   ```bash
   # Edit governance blocks in:
   src/content/topics/*.ts
   src/content/resources/*.ts
   ```

2. **Verify build**
   ```bash
   npm run build
   # Check governance validation passes
   ```

3. **Commit changes**
   ```bash
   git add src/content/
   git commit -m "Add comprehensive citations to content"
   ```

## File Locations

All citation documents are in the repository root:
```
/home/runner/work/ThreadLock/ThreadLock/
├── CITATION_COLLECTION_GUIDE.md
├── CITATION_QUICK_START.md
├── CITATION_SOURCES_BY_TYPE.md
├── CITATION_NEEDS_DETAILED.md
├── CITATION_NEEDS.md
└── README_CITATIONS.md (this file)
```

## Statistics

- **Content Items:** 43 (7 topics + 36 resources)
- **Document Size:** 180+ KB total
- **Lines:** 5,000+
- **Citation Slots:** 500+
- **Source Types:** 80+
- **Estimated Time:** 2-4 hours for HIGH priority sources
- **Full Completion:** 10-20 hours for all sources

## Questions?

Refer to [CITATION_COLLECTION_GUIDE.md](CITATION_COLLECTION_GUIDE.md) for:
- Detailed workflow instructions
- Quality standards and verification
- Tips for efficient collection
- Progress tracking checklist

## Ready to Start?

👉 **Begin with:** [CITATION_QUICK_START.md](CITATION_QUICK_START.md)

Fill in the blanks with URLs as you collect them, then transfer to the detailed documents.
