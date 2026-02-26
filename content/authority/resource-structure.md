---
title: Resource Structure Specification
description: Canonical specification for ThreadLock's external resource directory, including categorization, governance rules, and jurisdiction mapping.
topic: resource-management
jurisdiction: national
audience: technical
content_type: authority-article
last_reviewed: 2026-02-24
ai_ready: true
---

# Resource Structure Specification

**Authoritative Specification for ThreadLock External Resource Directory**

---

## Definition: Resource Directory Governance

**Resource Directory Governance** defines the rules, categories, and standards for managing external legal resources displayed to ThreadLock users. Proper governance ensures:

- Resources are authoritative and trustworthy
- Jurisdiction mapping is accurate and complete
- Categories are consistent and meaningful
- Links remain functional and current
- Updates follow documented procedures

This specification is the single source of truth for all external resources in the ThreadLock platform.

---

## Purpose & Scope

This document defines:

1. **All external resource links** displayed on `/resources` page
2. **Categorization taxonomy** for resource types
3. **Jurisdiction mapping** for state-specific resources
4. **Authority levels** (official, nonprofit, private)
5. **Tagging metadata** for search and filtering
6. **Governance rules** for adding, updating, or removing resources

**Critical Rule:** No external resource may be added to the codebase without first being documented in this specification.

---

## Governance Rules

### Rule 1: URL Standards

**Requirements:**
- Must use canonical URLs (no redirect links)
- HTTPS required unless explicitly allowlisted
- One entry per unique URL (no duplicates)
- URLs must be publicly accessible (no paywalls)

**Example:**
```
✅ https://www.courts.wa.gov/
❌ https://google.com/search?q=washington+courts
❌ http://courts.wa.gov/ (HTTP, not HTTPS)
```

### Rule 2: Completeness Requirements

**Each U.S. state/territory must have:**
- One **Court Self-Help Portal** (`state-directory-court`)
- One **Statewide Legal Aid Hub** (`state-directory-legal-aid`)

If a state lacks an official portal, use the most authoritative alternative and document in notes.

### Rule 3: Change Management

**When replacing a URL:**
1. Keep the same resource ID in code
2. Document change in changelog section
3. Update authority level if changed
4. Note reason for change

**When adding new resources:**
1. Verify resource is active and maintained
2. Assign appropriate category (from fixed list)
3. Set authority level
4. Add to jurisdiction mapping (if applicable)

### Rule 4: Fixed Categories

**Categories are locked.** Do not create new categories without:
1. Documenting rationale
2. Updating this specification
3. Updating display logic in codebase
4. Reviewing impact on existing resources

---

## Category Definitions

### `court-videos`
**Definition:** Official court-run instructional media or self-help education pages

**Criteria:**
- Published by state/federal court system
- Educational or instructional content
- Video format (YouTube channels, hosted videos)
- Focused on self-help and court procedures

**Examples:**
- State Supreme Court YouTube channels
- Court self-help video libraries
- Judicial education programs

### `child-support`
**Definition:** Official state calculators or guideline manuals used by courts

**Criteria:**
- Published by state government or courts
- Child support calculation tools
- Official guidelines and worksheets
- Used by courts for support determinations

**Examples:**
- State child support calculators
- Child support guideline manuals
- Enforcement agency resources

### `state-directory-court`
**Definition:** Official state or territory court self-help portals

**Criteria:**
- Published by state court system
- Comprehensive self-help resources
- Forms, guides, and instructions
- Covers multiple practice areas

**Examples:**
- State court self-help centers
- Judicial branch self-help pages
- Court forms and filing information

### `state-directory-legal-aid`
**Definition:** Statewide nonprofit legal aid hubs

**Criteria:**
- Nonprofit legal services organization
- Statewide or multi-county coverage
- Free or low-cost legal assistance
- LSC-funded or equivalent

**Examples:**
- Legal Services Corporation grantees
- State bar pro bono programs
- Legal aid networks

### `legal-knowledge`
**Definition:** Free research databases, statute libraries, or case law repositories

**Criteria:**
- Publicly accessible legal information
- Case law, statutes, or regulations
- Free or freemium model
- Authoritative sources

**Examples:**
- Google Scholar (case law)
- Cornell Legal Information Institute
- State statute databases
- CourtListener

### `co-parenting`
**Definition:** Communication and scheduling tools for family law logistics

**Criteria:**
- Purpose-built for divorced/separated parents
- Facilitates communication and scheduling
- May include expense tracking, document sharing
- Private commercial or nonprofit tools

**Examples:**
- OurFamilyWizard
- TalkingParents
- Custody X Change
- UpToParents

### `admin-tools`
**Definition:** Administrative utilities useful for legal case management

**Criteria:**
- General productivity or document tools
- Useful for legal case organization
- Not legal-specific but applicable
- Free or widely accessible

**Examples:**
- Transcription tools (Otter.ai)
- PDF editors
- Time tracking software
- Document scanning apps

### `specialized-support`
**Definition:** Topic-specific national support networks

**Criteria:**
- Focused on specific populations or issues
- National or multi-state scope
- Legal or support services
- Military, elder law, domestic violence, etc.

**Examples:**
- Stateside Legal (military families)
- Eldercare Locator
- National Domestic Violence Hotline
- ABA consumer guides

---

## Authority Levels

### `official`
**Definition:** Government-operated or government-sanctioned resource

**Criteria:**
- Operated by government agency
- Court system resource
- Official state/federal site
- .gov domain (typically)

**Examples:**
- State court websites
- Legal Services Corporation
- State bar associations (official regulatory bodies)

### `nonprofit`
**Definition:** Nonprofit organization providing public benefit

**Criteria:**
- 501(c)(3) or equivalent nonprofit status
- Mission-driven (not profit-driven)
- Free or low-cost services
- .org domain (typically)

**Examples:**
- Legal aid organizations
- Law school clinics
- Public interest law centers
- Free legal research platforms

### `private`
**Definition:** Commercial entity or for-profit service

**Criteria:**
- For-profit business
- Commercial service
- May charge fees
- .com domain (typically)

**Examples:**
- Co-parenting apps (subscription-based)
- Legal form services
- Private research databases
- Commercial software tools

**Note:** Private does not mean untrustworthy. Many excellent resources are commercial. Authority level informs users, not quality judgment.

---

## Jurisdiction Mapping

### U.S. States & Territories

**Complete Coverage Required:**
- 50 U.S. states
- District of Columbia
- 5 territories (American Samoa, Guam, Northern Mariana Islands, Puerto Rico, U.S. Virgin Islands)

**Mapping Format:**
```
State Code | Resource Type | URL | Authority Level
-----------|--------------|-----|----------------
WA | state-directory-court | https://www.courts.wa.gov/ | official
WA | state-directory-legal-aid | https://nwjustice.org | nonprofit
```

### National Resources

**Not Jurisdiction-Specific:**
- Legal research databases
- National co-parenting tools
- Federal court resources
- Administrative tools

**Mapping Format:**
```
Resource | Category | Scope | Authority
---------|----------|-------|----------
Google Scholar | legal-knowledge | US | official
Cornell LII | legal-knowledge | US | nonprofit
```

---

## Resource Metadata Structure

### Required Fields

**For All Resources:**
- **ID:** Unique identifier (code-level, not user-facing)
- **Title:** Human-readable resource name
- **URL:** Canonical HTTPS link
- **Category:** From fixed category list
- **Authority:** official / nonprofit / private
- **Description:** 1-2 sentence explanation (150 chars max)

**For Jurisdiction-Specific Resources:**
- **State/Territory Code:** Two-letter postal code
- **Jurisdiction Name:** Full state/territory name
- **Coverage:** Statewide, regional, or county-specific

### Optional Fields

- **Languages:** If available in multiple languages
- **Cost:** Free, freemium, paid
- **Access:** Public, registration required, limited
- **Last Verified:** Date URL was last checked
- **Notes:** Special considerations or limitations

### Example Entry

```json
{
  "id": "wa-court-self-help",
  "title": "Washington State Courts - Self-Help",
  "url": "https://www.courts.wa.gov/programs_orgs/pos_tsc/index.cfm",
  "category": "state-directory-court",
  "authority": "official",
  "description": "Official self-help portal for Washington courts with forms, instructions, and resources.",
  "jurisdiction": "WA",
  "jurisdictionName": "Washington",
  "coverage": "statewide",
  "languages": ["en", "es"],
  "cost": "free",
  "lastVerified": "2026-02-24"
}
```

---

## Display Logic

### User-Facing Organization

**Primary Navigation:**
1. **By Jurisdiction** - State/territory selector
2. **By Category** - Filter by resource type
3. **By Authority** - Official, nonprofit, or private
4. **Search** - Full-text search across all resources

**Default View:**
- Show national resources first
- If user selects state, show state-specific resources
- Group by category within jurisdiction

### Filtering Rules

**Category Filters:**
- Allow multi-select
- Show resource count per category
- Update results dynamically

**Authority Filters:**
- Toggle official/nonprofit/private
- Clearly label authority level
- Explain authority levels (help text)

**Jurisdiction Filters:**
- Dropdown or map selector
- Show user's state by default (if detectable)
- Allow "Show all states"

---

## Maintenance Procedures

### Quarterly Link Verification

**Process:**
1. Automated link checker runs against all URLs
2. Broken links flagged for manual review
3. Find replacement or update URL
4. Document changes in changelog

**Responsibility:** Marketing/content team

### Annual Comprehensive Review

**Process:**
1. Verify each resource is still active and maintained
2. Check for new authoritative resources per state
3. Update descriptions if services changed
4. Remove inactive or superseded resources
5. Add new high-value resources

**Responsibility:** Marketing + Legal operations

### User-Reported Issues

**Process:**
1. User reports broken link or outdated information
2. Team verifies issue
3. Fix or remove resource within 48 hours
4. Document change in changelog
5. Thank user for report

---

## Disclaimer Standards

### Standard Disclaimer (Required)

Display on all resource pages:

> **Disclaimer:** ThreadLock is not a law firm and does not provide legal advice. These resources are provided for informational purposes only. Court rules and procedures vary by jurisdiction. Always verify requirements directly with your local court or a licensed attorney. ThreadLock does not endorse, guarantee, or warrant the accuracy of external resources.

### Resource-Specific Disclaimers

**Commercial Resources:**
> This is a commercial service that may charge fees. ThreadLock does not receive compensation for this listing.

**Third-Party Tools:**
> This tool is operated by a third party. ThreadLock is not responsible for the service, availability, or data practices of external tools.

---

## API Access (Future)

### Structured Data Export

**Planned Features:**
- JSON API for programmatic resource access
- Filter by jurisdiction, category, authority
- Search functionality
- Last verified dates included

**Use Cases:**
- Legal aid organizations can embed ThreadLock resources
- State bar associations can link to resource directory
- Legal tech platforms can integrate resource lists

**Governance:**
- API access requires attribution
- Commercial use requires permission
- Maintain resource quality standards

---

## Changelog

### 2026-02-24
- **Created:** Initial Resource Structure Specification
- **Converted from:** RESOURCE_DIRECTORY_SPEC.md
- **Added:** YAML frontmatter for authority document
- **Added:** Definition blocks for AI optimization
- **Enhanced:** Governance rules and procedures
- **Status:** Active authority document

### Future Changes

Document all changes here:
```
YYYY-MM-DD
- Added: [Resource name, URL, category]
- Updated: [Resource name, old URL → new URL, reason]
- Removed: [Resource name, reason]
- Notes: [Additional context]
```

---

## Related Documents

- [AI Entity Association Model](/content/authority/ai-entity-model.md) - How resources support AI entity building
- [SEO Optimization Summary](/content/authority/seo-summary.md) - How resource directory supports SEO
- [LLM Query Map](/content/authority/llm-query-map.md) - Queries that lead users to resource directory

---

**Reviewed:** February 2026  
**Next Review:** August 2026  
**ThreadLock Version Context:** Public Marketing v2
