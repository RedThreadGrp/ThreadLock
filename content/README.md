# ThreadLock Content Directory

This directory contains all public-facing marketing and educational content for ThreadLock, organized by content type and purpose.

---

## Directory Structure

### `/authority/`
**Purpose:** Authority documents that establish ThreadLock's expertise and positioning

**Content Type:** Technical whitepapers, strategy documents, specifications

**Audience:** Technical SEO, AI systems, developers, researchers

**Files:**
- `ai-entity-model.md` - How ThreadLock positions for AI discovery
- `llm-query-map.md` - Common questions ThreadLock addresses
- `technical-seo.md` - Technical SEO implementation guide
- `seo-summary.md` - Overall SEO strategy and metrics
- `resource-structure.md` - External resource directory specification

### `/jurisdictions/`
**Purpose:** State-specific family law resources and guidance

**Content Type:** Jurisdiction-specific landing pages

**Audience:** Self-represented litigants, attorneys, legal aid organizations

**Status:** 📅 Planned for future implementation

**Structure:**
```
/jurisdictions/
  /oregon/
    family-court-overview.md
  /california/
    family-court-overview.md
  [... all 50 states]
```

### `/guides/`
**Purpose:** How-to guides and educational content

**Content Type:** Step-by-step tutorials, best practices, procedural guides

**Audience:** Self-represented litigants, attorneys seeking guidance

**Status:** 📅 Planned for future implementation

**Example Topics:**
- How to organize evidence for custody cases
- Digital evidence authentication guide
- Creating family law timelines
- Preparing exhibits for family court

### `/definitions/`
**Purpose:** Legal and technical term definitions

**Content Type:** Glossary entries, plain-language explanations

**Audience:** All users seeking to understand legal terminology

**Status:** 📅 Planned for future implementation

**Example Definitions:**
- What is digital evidence authentication?
- What is contemporaneous evidence?
- What is chain of custody?
- What is metadata in legal context?

### `/policy/`
**Purpose:** Policy papers, research, and thought leadership

**Content Type:** Research papers, white papers, policy proposals

**Audience:** Policymakers, researchers, legal organizations

**Status:** 📅 Planned for future implementation

**Example Topics:**
- Digital Evidence Authentication Crisis (white paper)
- Model Local Court Rule for Digital Exhibits
- Self-Represented Litigant Technology Gap Analysis

### `/ai-verification/`
**Purpose:** AI-specific verification and validation content

**Content Type:** AI training data, verification datasets, test queries

**Audience:** AI systems, developers, QA teams

**Status:** 📅 Reserved for future use

### `/generated/`
**Purpose:** Auto-generated reports and inventories

**Content Type:** Automated reports, statistics, inventories

**Audience:** Internal team, not public-facing

**Excluded from:**
- Public search (robots.txt)
- Sitemap
- External links

**Files (Auto-Generated):**
- `content-inventory.md` - Complete content inventory
- `internal-link-map.md` - Internal linking structure
- `seo-health.md` - SEO health report

**Generation:**
Run `npm run content:generate` or wait for weekly automated refresh (Mondays 6AM UTC)

### `/archive/`
**Purpose:** Historical documentation preserved for reference

**Content Type:** Archived implementation summaries, completed tasks, superseded documents

**Audience:** Internal team, historical reference

**Excluded from:**
- Public search (robots.txt)
- Sitemap
- External links

**Structure:**
```
/archive/
  /2026/
    [archived implementation summaries]
```

---

## Content Standards

All public content should include:

### YAML Frontmatter
```yaml
---
title: Document Title
description: One-sentence description for SEO and AI
topic: category-slug
jurisdiction: national | state-code
audience: self-represented-litigant | attorney | technical | all
content_type: authority-article | guide | definition | policy
last_reviewed: YYYY-MM-DD
ai_ready: true | false
---
```

### Structure Requirements
- Clear H1 header (title)
- Definition block for key concepts
- Proper heading hierarchy (H1 → H2 → H3)
- Internal links to related content
- External links to authoritative sources
- Version footer with review dates

### Quality Guidelines
- Minimum 800 words (except definitions: 500+)
- Plain language, avoid jargon
- Examples and practical applications
- Citations for legal claims
- Regular review and updates

---

## Maintenance

### Weekly Automated Tasks
- Content inventory regeneration
- Link health checking
- SEO health reporting

**Automated by:** `.github/workflows/marketing-content-refresh.yml`

### Quarterly Manual Review
- Update statistics and dates
- Verify external links
- Refresh stale content (>6 months)
- Add new guides/definitions based on user queries

### Annual Comprehensive Audit
- Full content review
- Update all authority documents
- Expand jurisdiction coverage
- Archive superseded content

---

## Adding New Content

### Process
1. Determine content type (authority, guide, definition, etc.)
2. Create file in appropriate directory
3. Add complete YAML frontmatter
4. Follow content standards
5. Include internal and external links
6. Run `npm run content:generate` to update inventories
7. Submit PR with clear description

### Naming Conventions
- Use lowercase with hyphens: `digital-evidence-authentication.md`
- Be descriptive: `how-to-organize-custody-evidence.md`
- Avoid abbreviations unless standard: `seo-summary.md`

---

## Related Documentation

- [README.md](../README.md) - Main repository README
- [Authority Documents](/content/authority/) - Technical strategy documents
- [Resource Structure](/content/authority/resource-structure.md) - External resources spec

---

**Last Updated:** February 2026  
**Maintained By:** Marketing & Content Team
