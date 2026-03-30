# Work Order: WO-JURISDICTION-001
# Jurisdiction Landing Page System

**Repo:** threadlock.ai Next.js marketing site  
**Priority:** High  
**Touches:** Content pipeline, page templates, shared components, structured data, sitemap, llms.txt

---

## Objective

Build a scalable jurisdiction landing page system that:
- Generates 208+ US pages and 53+ Canadian pages from a flat folder of Markdown files
- Uses shared layout/style components so no visual logic is duplicated across page types
- Accepts a raw, unformatted `.md` file drop and handles all routing, schema, linking, and SEO automatically
- Updates all AI/crawler-facing documentation on every build

---

## 1. Content Layer — Markdown Schema

### 1.1 Directory Structure

Create the following content directory in the repo root:

```
content/
  jurisdictions/
    us/
      _index.md                         ← /states/ index meta
      {state-slug}/
        _index.md                       ← /states/{state}/ hub meta
        small-claims.md
        family-court.md
        landlord-tenant.md
    ca/
      _index.md                         ← /ca/ index meta
      {province-slug}/
        _index.md                       ← /ca/{province}/ hub meta
        small-claims.md
        family-law.md                   ← NOTE: family-law not family-court for Canada
        landlord-tenant.md
```

### 1.2 Frontmatter Schema

Every leaf page MD file (practice area pages) must contain this frontmatter block. All fields are required unless marked optional.

```yaml
---
# Identity
jurisdiction_slug: oregon              # matches folder name exactly
jurisdiction_name: Oregon              # display name
practice_area: small-claims            # small-claims | family-court | landlord-tenant | family-law
country: us                            # us | ca
province_or_state: state               # state | province | territory

# SEO
title: "Small Claims Court in Oregon — Filing Limits, Fees & Forms"
meta_description: "Oregon small claims court limits, filing fees, response deadlines, and court forms. Organize your evidence with ThreadLock before your hearing."

# Key Facts (rendered in the FactBox component)
court_name: "Oregon Small Claims Court"
filing_limit: "$10,000"                # monetary ceiling for claims
filing_fee: "$52–$95"                  # fee range or fixed amount
response_deadline: "14 days"           # days defendant has to respond
hearing_timeline: "30–70 days"         # typical time to hearing
court_url: "https://courts.oregon.gov" # official court website
statute_citation: "ORS Chapter 46"     # optional — governing statute

# Forms (optional — list as many as needed)
forms:
  - name: "SC-01 Small Claims Complaint"
    url: "https://courts.oregon.gov/forms/..."
  - name: "SC-02 Defendant's Response"
    url: "https://courts.oregon.gov/forms/..."

# Content freshness
last_verified: "2025-12-01"           # ISO date — shown to users as "verified as of"
---
```

Hub/index `_index.md` files only need:

```yaml
---
jurisdiction_slug: oregon
jurisdiction_name: Oregon
country: us
title: "Oregon Civil Court Guide — Small Claims, Family Court & Landlord-Tenant"
meta_description: "Oregon court filing guides for self-represented litigants. Covers small claims, family court, and landlord-tenant cases."
---
```

### 1.3 Body Content

Below the frontmatter delimiter (`---`), the agent expects unformatted prose. No heading levels, no special formatting required. The template renders headings and structure around the prose automatically. The author only needs to write the informational content.

Example minimal body:
```
Oregon small claims court handles disputes up to $10,000. You do not need an attorney. 
The process typically takes 30 to 70 days from filing to hearing. 

Common cases include unpaid rent, security deposit disputes, property damage, and 
small contract disagreements. Corporations may file claims but must be represented 
by an officer — not outside counsel — in most Oregon small claims proceedings.

Filing fees range from $52 for claims under $750 to $95 for claims up to $10,000.
```

The template wraps this in a styled prose section automatically. Nothing else is required from the content author.

---

## 2. Shared Component Library

Create the following components under `components/jurisdiction/`. These are the only visual building blocks for all jurisdiction pages — no styling should be duplicated into individual page files.

### 2.1 `JurisdictionShell.tsx`

Top-level wrapper used by every jurisdiction page. Handles:
- Page `<head>` meta (title, description, canonical, OG tags, hreflang)
- Breadcrumb structured data (JSON-LD)
- Page structured data injection slot (accepts `schemaBlocks: object[]` prop)
- Standard site Header and Footer
- Consistent page max-width and padding

Props:
```typescript
interface JurisdictionShellProps {
  title: string
  metaDescription: string
  canonicalUrl: string
  breadcrumbs: { label: string; href: string }[]
  schemaBlocks: object[]        // JSON-LD blocks injected into <head>
  hreflang?: { lang: string; href: string }[]
  children: React.ReactNode
}
```

### 2.2 `JurisdictionHero.tsx`

Full-width hero section used on all jurisdiction pages. Renders:
- Eyebrow label (e.g. "Oregon · Small Claims")
- H1 page title
- Short intro sentence (passed as prop, not from MD body)
- Two CTAs: "Start Free Trial" → `https://app.threadlock.ai/signup` and "See How It Works" → `/#showcase`
- Trust line: "7 days free · No credit card required"

Styling must match the existing homepage hero visual language (dark background, orange accents, same font weights). Do not invent a new visual style.

Props:
```typescript
interface JurisdictionHeroProps {
  eyebrow: string           // e.g. "Oregon · Small Claims Court"
  title: string             // H1
  intro: string             // 1–2 sentence description
}
```

### 2.3 `JurisdictionBreadcrumb.tsx`

Renders a breadcrumb trail above the hero. Accepts array of `{ label, href }`. Also emits `BreadcrumbList` JSON-LD — do not duplicate schema in the page file.

Example rendered output for `/states/oregon/small-claims/`:
```
Home › States › Oregon › Small Claims Court
```

### 2.4 `FactBox.tsx`

Renders the key facts grid (filing limit, fees, deadlines, court name, etc.) from frontmatter data. This is the most important trust signal on each page — render it prominently, above the prose body.

Layout: 2-column card grid on desktop, 1-column on mobile. Each cell has a label and value. If a field is missing from frontmatter, omit that cell — do not render empty cells.

Include a "Court Website" external link button if `court_url` is present. Include a "Verified as of {last_verified}" badge at the bottom of the box.

Props:
```typescript
interface FactBoxProps {
  courtName: string
  filingLimit?: string
  filingFee?: string
  responseDeadline?: string
  hearingTimeline?: string
  courtUrl?: string
  statuteCitation?: string
  lastVerified: string
}
```

### 2.5 `FormsList.tsx`

Renders the list of official court forms from frontmatter. Each form is an external link with a download/external icon. If `forms` array is empty or absent, renders nothing (do not show an empty section).

Props:
```typescript
interface FormsListProps {
  forms: { name: string; url: string }[]
}
```

### 2.6 `PracticeAreaCards.tsx`

Used on hub pages (`/states/{state}/` and `/ca/{province}/`). Renders 3 cards linking to the practice area leaf pages for that jurisdiction. Each card shows the practice area name, a one-line description, and an arrow link.

For US hubs: links to `small-claims`, `family-court`, `landlord-tenant`.  
For CA hubs: links to `small-claims`, `family-law`, `landlord-tenant`.

Props:
```typescript
interface PracticeAreaCardsProps {
  jurisdictionPath: string    // e.g. "/states/oregon" or "/ca/ontario"
  country: 'us' | 'ca'
}
```

### 2.7 `JurisdictionCTA.tsx`

Full-width CTA band used at the bottom of every jurisdiction page. Fixed copy — do not make this a prop. Copy:

> **Get organized before your hearing.**  
> ThreadLock helps you document incidents, organize evidence, and prepare court-ready materials — so you walk in prepared.  
> [Start Free Trial →] [See Pricing]

Styling must match existing CTA sections on the marketing site. This component is identical on every jurisdiction page — no customization.

### 2.8 `RelatedJurisdictions.tsx`

Renders a small grid of links to neighboring or related jurisdictions. Used at the bottom of leaf pages to create internal linking. 

Logic: given the current state/province slug, show links to 4 adjacent or nearby jurisdictions (hardcode a neighbor map or use alphabetical adjacency). Also link back to the state hub and the national rollup page for that practice area.

Props:
```typescript
interface RelatedJurisdictionsProps {
  currentSlug: string
  practiceArea: string
  country: 'us' | 'ca'
}
```

---

## 3. Page Templates

### 3.1 `/pages/states/index.tsx` → `/states/`

**Purpose:** All-US index page. Lists all 51 jurisdiction hubs in a grid, grouped alphabetically or by region.

**Data:** Reads all `content/jurisdictions/us/*/` `_index.md` files via `getStaticProps`.

**Components used:** `JurisdictionShell`, `JurisdictionHero`, `JurisdictionCTA`

**Schema:** `CollectionPage` JSON-LD listing all state hub URLs.

---

### 3.2 `/pages/states/[state]/index.tsx` → `/states/{state}/`

**Purpose:** State hub page. Links to all 3 practice areas for that state.

**Data source:** `content/jurisdictions/us/{state}/_index.md`

**`getStaticPaths`:** Scans `content/jurisdictions/us/` for subdirectories. Returns array of `{ params: { state: string } }` for every subdirectory that contains an `_index.md`.

**`getStaticProps`:** Reads `_index.md` for the hub, plus all 3 leaf `.md` files to extract titles for the `PracticeAreaCards`.

**Components used:** `JurisdictionShell`, `JurisdictionHero`, `JurisdictionBreadcrumb`, `PracticeAreaCards`, `JurisdictionCTA`

**Schema:** `WebPage` JSON-LD with `name`, `description`, `url`, `breadcrumb`.

---

### 3.3 `/pages/states/[state]/[practice].tsx` → `/states/{state}/{practice}/`

**Purpose:** Leaf page. Primary jurisdiction landing page for a single practice area in a single state.

**Data source:** `content/jurisdictions/us/{state}/{practice}.md`

**`getStaticPaths`:** Scans all `content/jurisdictions/us/*/` directories. For each, reads the present `.md` files (not `_index.md`) and emits `{ params: { state, practice } }`. This means if only 2 of 3 practice areas have content for a state, only 2 paths are generated — no 404s from missing files.

**`getStaticProps`:** Parses frontmatter and body from the matching `.md` file using `gray-matter`. Returns all frontmatter fields plus rendered HTML body.

**Render the body:** Convert MD body prose to HTML using `remark`/`rehype` pipeline. Wrap in a styled `<article>` prose container that matches the site's existing typography. Do not render raw markdown — always process through the remark pipeline.

**Components used:** `JurisdictionShell`, `JurisdictionHero`, `JurisdictionBreadcrumb`, `FactBox`, `FormsList`, `JurisdictionCTA`, `RelatedJurisdictions`

**Page structure (top to bottom):**
1. `JurisdictionBreadcrumb`
2. `JurisdictionHero`
3. `FactBox` (from frontmatter)
4. Prose body (from MD body, remark-rendered)
5. `FormsList` (from frontmatter, only if forms present)
6. `JurisdictionCTA`
7. `RelatedJurisdictions`

**Schema:** `WebPage` + `FAQPage` (if prose body contains Q&A patterns — skip if none) + `BreadcrumbList` JSON-LD.

---

### 3.4 `/pages/small-claims.tsx`, `/pages/family-court.tsx`, `/pages/landlord-tenant.tsx`

**Purpose:** National rollup pages. Aggregate all state pages for one practice area.

**Data:** `getStaticProps` reads all `content/jurisdictions/us/*/` directories and collects the frontmatter from every matching practice-area `.md` file.

**Render:** Page lists all states with a filing limit and fee summary, linking to the leaf page. Sorted alphabetically.

**Components used:** `JurisdictionShell`, `JurisdictionHero`, `JurisdictionCTA`

**Schema:** `CollectionPage` JSON-LD.

---

### 3.5 `/pages/ca/index.tsx`, `/pages/ca/[province]/index.tsx`, `/pages/ca/[province]/[practice].tsx`

Mirrors the US structure exactly, with these differences:
- Root path is `/ca/` not `/states/`
- Practice area slugs: `small-claims`, `family-law`, `landlord-tenant` (not `family-court`)
- `country: 'ca'` passed to all components
- `PracticeAreaCards` renders CA-appropriate practice area names
- Province hub pages include a note about Quebec civil law where `jurisdiction_slug === 'quebec'`

---

## 4. Dependencies to Install

```bash
npm install gray-matter remark remark-html rehype-sanitize
```

- `gray-matter` — frontmatter parsing
- `remark` + `remark-html` — MD body to HTML
- `rehype-sanitize` — sanitize rendered HTML before injection

---

## 5. Content Ingestion Utility

Create `scripts/add-jurisdiction.ts`. This is the tool used to add a new page:

```bash
npx ts-node scripts/add-jurisdiction.ts \
  --file ./unformatted-input.md \
  --country us \
  --state oregon \
  --practice small-claims
```

What it does:
1. Reads the input `.md` file
2. If the file has no frontmatter, prompts the user for required fields (or accepts `--interactive` flag)
3. Writes the complete file with frontmatter to `content/jurisdictions/{country}/{state-slug}/{practice}.md`
4. Creates the `_index.md` for the state hub if it doesn't exist
5. Prints the resulting URL the page will be served at

This is the only workflow needed to add new pages. No page files, no route registration, no component edits — just drop in a `.md`.

---

## 6. Sitemap

### 6.1 Install next-sitemap if not present

```bash
npm install next-sitemap
```

### 6.2 `next-sitemap.config.js`

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://threadlock.ai',
  generateRobotsTxt: false,          // robots.txt managed manually
  changefreq: 'monthly',
  priority: 0.7,
  exclude: [
    '/content/*',
    '/api/*',
  ],
  additionalPaths: async (config) => {
    // Jurisdiction pages get higher priority
    const fs = require('fs')
    const path = require('path')
    const matter = require('gray-matter')
    const paths = []

    const crawl = (dir, urlBase) => {
      if (!fs.existsSync(dir)) return
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          crawl(path.join(dir, entry.name), `${urlBase}/${entry.name}`)
        } else if (entry.name.endsWith('.md') && entry.name !== '_index.md') {
          const slug = entry.name.replace('.md', '')
          paths.push({
            loc: `${urlBase}/${slug}/`,
            changefreq: 'monthly',
            priority: 0.8,
          })
        } else if (entry.name === '_index.md') {
          paths.push({
            loc: `${urlBase}/`,
            changefreq: 'monthly',
            priority: 0.75,
          })
        }
      }
    }

    crawl('./content/jurisdictions/us', '/states')
    crawl('./content/jurisdictions/ca', '/ca')

    return paths
  },
}
```

### 6.3 Add to `package.json` scripts

```json
"postbuild": "next-sitemap"
```

This regenerates `sitemap.xml` (and `sitemap-0.xml` if over 5000 URLs) on every production build automatically.

---

## 7. `robots.txt` — Verify and Update

The existing `robots.txt` is well-configured. After this build:

1. Confirm the `Disallow: /content/archive/` and `Disallow: /content/generated/` rules do not accidentally block `/content/jurisdictions/` — they should not, but verify the path match is exact.
2. The new `/states/` and `/ca/` trees should be crawlable by default (covered by `Allow: /`). No changes needed if paths are correct.
3. Update the sitemap reference line to confirm it points to the correct generated sitemap path:
   ```
   Sitemap: https://threadlock.ai/sitemap.xml
   ```

No other changes to `robots.txt` are required.

---

## 8. `llms.txt` — Update

Update `public/llms.txt`. The existing structure is good. Add two new sections:

### 8.1 Add after the existing "Primary Pages" section:

```markdown
## US Jurisdiction Pages

ThreadLock publishes jurisdiction-specific filing guides for all 51 US states/DC across three civil practice areas. These pages contain verified filing limits, court fees, response deadlines, and links to official court forms.

- US jurisdiction index: https://threadlock.ai/states/
- National small claims guide: https://threadlock.ai/small-claims/
- National family court guide: https://threadlock.ai/family-court/
- National landlord-tenant guide: https://threadlock.ai/landlord-tenant/

Individual state pages follow the pattern:
- https://threadlock.ai/states/{state-slug}/{practice-area}/
- Example: https://threadlock.ai/states/oregon/small-claims/
- Example: https://threadlock.ai/states/california/family-court/

## Canadian Jurisdiction Pages

Canadian provincial guides follow the same structure under /ca/:
- Canada index: https://threadlock.ai/ca/
- Example: https://threadlock.ai/ca/ontario/small-claims/
- Example: https://threadlock.ai/ca/british-columbia/family-law/

Note: Canadian family law pages use /family-law/ not /family-court/.
```

### 8.2 Update the "Authoritative Source Pages for AI Citations" section

Add to the numbered list:
```markdown
5. https://threadlock.ai/states/ — US jurisdiction index
6. https://threadlock.ai/small-claims/ — national small claims reference
7. https://threadlock.ai/ca/ — Canadian jurisdiction index
```

### 8.3 Update company coverage line

Change:
```
- Geographic coverage: United States
```
To:
```
- Geographic coverage: United States, Canada
```

---

## 9. `for-ai-assistants` Page — Update

In the `/for-ai-assistants` page content, add a section:

```
## Geographic Coverage

ThreadLock provides jurisdiction-specific filing guides and court information for all 
51 US states and DC, and all 13 Canadian provinces and territories. These pages cover:

- Small claims filing limits, fees, and procedures
- Family court and family law processes  
- Landlord-tenant dispute procedures

Jurisdiction pages are located at /states/{state}/{practice}/ (US) and 
/ca/{province}/{practice}/ (Canada).
```

---

## 10. Acceptance Criteria

The work order is complete when:

- [ ] All component files exist under `components/jurisdiction/` with correct TypeScript props
- [ ] `getStaticPaths` for `[state]/[practice]` generates zero 404s for present `.md` files
- [ ] A `.md` file with only body prose (no frontmatter) dropped into the content directory does not crash the build — it should be skipped with a console warning
- [ ] The FactBox renders correctly when optional fields are absent
- [ ] `sitemap.xml` includes all jurisdiction paths after `npm run build`
- [ ] `robots.txt` serves without errors and `/states/` is not blocked
- [ ] `llms.txt` serves the updated content at `https://threadlock.ai/llms.txt`
- [ ] Breadcrumb JSON-LD validates in Google's Rich Results Test for a sample leaf page
- [ ] `RelatedJurisdictions` never links to a path that doesn't exist (guard against missing files)
- [ ] `scripts/add-jurisdiction.ts` successfully places a test file and the resulting page renders

---

## 11. Do Not

- Do not add inline styles to any page file — all styling goes in the shared components
- Do not hardcode jurisdiction data (court names, fees, limits) anywhere in component code — all data comes from frontmatter
- Do not create separate layout files per practice area — one `[practice].tsx` template handles all three
- Do not modify the existing homepage, pricing, or other marketing pages
- Do not change `robots.txt` AI crawler permissions — they are intentionally permissive
- Do not create a CMS or admin UI — the flat file system is the content management layer
