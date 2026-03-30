# Work Order: WO-FRESHNESS-001
# Content Freshness & Link Health System

**Repo:** threadlock.ai Next.js marketing site  
**Companion to:** WO-JURISDICTION-001 (build in parallel, same sprint)  
**Priority:** High  
**Touches:** Content pipeline, GitHub Actions, scripts/, public/llms.txt, robots.txt, sitemap

---

## Objective

Build a content freshness monitoring system that:
- Tracks `last_verified` dates across all content files and designated page companion files
- Detects broken external links and stale content on a weekly automated schedule
- Opens a structured GitHub Issue with actionable line items when problems are found
- Provides a one-command CLI to mark content as reviewed after a human confirms accuracy
- Requires zero changes to existing page components — operates entirely at the data/script layer
- Is ready on day one when jurisdiction content starts being added via WO-JURISDICTION-001

---

## 1. Freshness Policy Config

Create `content-freshness.config.ts` in the repo root. This is the single source of truth for how stale each content type is allowed to become before flagging.

```typescript
// content-freshness.config.ts

export interface FreshnessPolicy {
  pattern: string     // glob relative to repo root
  threshold: number   // days before flagging as stale
  priority: 'critical' | 'high' | 'normal'
  checkLinks: boolean // whether to validate external URLs in frontmatter
}

export const freshnessPolicy: FreshnessPolicy[] = [
  // Pricing must be current — checked most aggressively
  {
    pattern: 'content/pages/pricing.md',
    threshold: 30,
    priority: 'critical',
    checkLinks: false,
  },
  // AI-facing pages — models cache stale info, corrections are slow
  {
    pattern: 'content/pages/for-ai-assistants.md',
    threshold: 60,
    priority: 'critical',
    checkLinks: false,
  },
  {
    pattern: 'content/pages/for-llms.md',
    threshold: 60,
    priority: 'critical',
    checkLinks: false,
  },
  // Integrations change when third-party APIs/products change
  {
    pattern: 'content/pages/integrations/**/*.md',
    threshold: 90,
    priority: 'high',
    checkLinks: true,
  },
  // Jurisdiction pages — court rules change, link rot is common
  {
    pattern: 'content/jurisdictions/**/*.md',
    threshold: 180,
    priority: 'high',
    checkLinks: true,   // validates court_url and all form URLs
  },
  // Resources/guides — less time-sensitive
  {
    pattern: 'content/pages/resources/**/*.md',
    threshold: 120,
    priority: 'normal',
    checkLinks: true,
  },
  // Docs
  {
    pattern: 'content/pages/docs/**/*.md',
    threshold: 90,
    priority: 'normal',
    checkLinks: false,
  },
  // Default fallback for anything not matched above
  {
    pattern: '**',
    threshold: 180,
    priority: 'normal',
    checkLinks: false,
  },
]
```

This file is imported by both the check script and the GitHub Action. Any policy change requires editing only this file.

---

## 2. Content File Structure for Non-Jurisdiction Pages

Jurisdiction pages already have frontmatter via WO-JURISDICTION-001. For all other pages (pure TSX files with no content file), create lightweight companion `.md` files that carry freshness metadata without duplicating page content.

### 2.1 Directory

```
content/
  jurisdictions/           ← owned by WO-JURISDICTION-001
  pages/
    pricing.md
    for-ai-assistants.md
    for-llms.md
    founder-story.md
    sarahs-story.md
    docs/
      threadlock-facts.md
    integrations/
      clio.md
    resources/
      verification-crisis-family-court.md
      model-local-rule-ai-verification.md
```

### 2.2 Companion File Schema

Companion files for non-jurisdiction pages have frontmatter only — no body content. The body of these pages lives in their TSX files and is not managed here.

```yaml
---
# Required
page: /pricing                  # canonical URL path this file tracks
last_verified: 2026-03-30       # ISO date — update this after manual review

# Optional
threshold_override: 30          # overrides the policy config for this file only
verified_by: hannah             # workflow signal — not rendered; updated by mark-verified script
notes: >                        # internal notes — not rendered anywhere
  Pro plan price changed to $300 in Dec 2025. Annual plan added.
  Clio integration pricing TBD — currently marked as "included".
---
```

### 2.3 Initial companion files to create

Create the following files with `last_verified` set to today's date and accurate `page` values. Body empty.

| File | `page` value |
|---|---|
| `content/pages/pricing.md` | `/pricing` |
| `content/pages/for-ai-assistants.md` | `/for-ai-assistants` |
| `content/pages/for-llms.md` | `/for-llms` |
| `content/pages/founder-story.md` | `/founder-story` |
| `content/pages/sarahs-story.md` | `/sarahs-story` |
| `content/pages/docs/threadlock-facts.md` | `/docs/threadlock-facts` |
| `content/pages/integrations/clio.md` | `/integrations/clio` |
| `content/pages/resources/verification-crisis-family-court.md` | `/resources/verification-crisis-family-court` |
| `content/pages/resources/model-local-rule-ai-verification.md` | `/resources/model-local-rule-ai-verification` |

---

## 3. Scripts

All scripts live under `scripts/`. Install dependencies first:

```bash
npm install --save-dev gray-matter glob minimatch node-fetch ts-node
```

---

### 3.1 `scripts/check-freshness.ts`

Main check script. Crawls all content files, evaluates staleness, checks external links, and outputs a structured report.

```typescript
#!/usr/bin/env ts-node
/**
 * check-freshness.ts
 *
 * Usage:
 *   npx ts-node scripts/check-freshness.ts              # prints report to stdout
 *   npx ts-node scripts/check-freshness.ts --json       # outputs JSON for CI consumption
 *   npx ts-node scripts/check-freshness.ts --broken-only # only shows link failures
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { globSync } from 'glob'
import { minimatch } from 'minimatch'
import fetch from 'node-fetch'
import { freshnessPolicy, FreshnessPolicy } from '../content-freshness.config'

// ─── Types ───────────────────────────────────────────────────────────────────

interface BrokenLink {
  field: string
  url: string
  status: number | 'timeout' | 'error'
}

interface FileReport {
  file: string
  page: string
  lastVerified: string | null
  daysSince: number | null
  threshold: number
  priority: string
  isStale: boolean
  brokenLinks: BrokenLink[]
  missingVerified: boolean
}

// ─── URL checker ─────────────────────────────────────────────────────────────

async function checkUrl(url: string): Promise<{ ok: boolean; status: number | 'timeout' | 'error' }> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 6000)
    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      headers: { 'User-Agent': 'ThreadLock-ContentBot/1.0' },
    })
    clearTimeout(timeout)
    return { ok: res.ok, status: res.status }
  } catch (e: any) {
    if (e.name === 'AbortError') return { ok: false, status: 'timeout' }
    return { ok: false, status: 'error' }
  }
}

// ─── Policy resolver ─────────────────────────────────────────────────────────

function resolvePolicy(filePath: string): FreshnessPolicy {
  // Most-specific match wins (longest pattern that matches)
  const matches = freshnessPolicy
    .filter(p => minimatch(filePath, p.pattern, { matchBase: true }))
    .sort((a, b) => b.pattern.length - a.pattern.length)
  return matches[0] ?? freshnessPolicy[freshnessPolicy.length - 1]
}

// ─── URL extractor ───────────────────────────────────────────────────────────

function extractExternalUrls(data: Record<string, any>): { field: string; url: string }[] {
  const urls: { field: string; url: string }[] = []
  const urlFields = ['court_url', 'url', 'source_url', 'reference_url']

  for (const field of urlFields) {
    if (data[field] && typeof data[field] === 'string') {
      urls.push({ field, url: data[field] })
    }
  }

  // Forms array
  if (Array.isArray(data.forms)) {
    for (const form of data.forms) {
      if (form.url) urls.push({ field: `form["${form.name}"]`, url: form.url })
    }
  }

  // External links array (generic)
  if (Array.isArray(data.external_links)) {
    for (const link of data.external_links) {
      if (link.url) urls.push({ field: `external_links["${link.label}"]`, url: link.url })
    }
  }

  // Only return external URLs (skip internal threadlock.ai paths)
  return urls.filter(({ url }) => url.startsWith('http') && !url.includes('threadlock.ai'))
}

// ─── File to URL mapper ───────────────────────────────────────────────────────

function fileToPageUrl(filePath: string, data: Record<string, any>): string {
  // Companion pages have explicit page field
  if (data.page) return data.page

  // Jurisdiction pages — derive from path
  const rel = filePath.replace(/^content\//, '').replace(/\.md$/, '')
  if (rel.startsWith('jurisdictions/us/')) {
    return '/' + rel.replace('jurisdictions/us/', 'states/')
  }
  if (rel.startsWith('jurisdictions/ca/')) {
    return '/' + rel.replace('jurisdictions/ca/', 'ca/')
  }
  return '/' + rel
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const args = process.argv.slice(2)
  const jsonMode = args.includes('--json')
  const brokenOnly = args.includes('--broken-only')

  const files = globSync('content/**/*.md', {
    ignore: ['content/**/_index.md'],
  })

  const today = new Date()
  const reports: FileReport[] = []

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8')
    const { data } = matter(raw)

    const policy = resolvePolicy(file)
    const threshold = data.threshold_override ?? policy.threshold

    // Staleness calculation
    let daysSince: number | null = null
    let isStale = false
    let missingVerified = false

    if (!data.last_verified) {
      missingVerified = true
      isStale = true
    } else {
      const verified = new Date(data.last_verified)
      daysSince = Math.floor((today.getTime() - verified.getTime()) / (1000 * 60 * 60 * 24))
      isStale = daysSince >= threshold
    }

    // Link checking
    const brokenLinks: BrokenLink[] = []
    if (policy.checkLinks) {
      const urls = extractExternalUrls(data)
      // Check links concurrently, max 5 at a time
      const chunks = chunkArray(urls, 5)
      for (const chunk of chunks) {
        const results = await Promise.all(
          chunk.map(async ({ field, url }) => {
            const { ok, status } = await checkUrl(url)
            return ok ? null : { field, url, status }
          })
        )
        brokenLinks.push(...results.filter(Boolean) as BrokenLink[])
      }
    }

    if (isStale || brokenLinks.length > 0) {
      reports.push({
        file,
        page: fileToPageUrl(file, data),
        lastVerified: data.last_verified ?? null,
        daysSince,
        threshold,
        priority: policy.priority,
        isStale: isStale && (!brokenOnly),
        brokenLinks,
        missingVerified,
      })
    }
  }

  if (jsonMode) {
    const output = {
      generated_at: today.toISOString(),
      stale_count: reports.filter(r => r.isStale).length,
      broken_link_count: reports.reduce((n, r) => n + r.brokenLinks.length, 0),
      items: reports,
    }
    console.log(JSON.stringify(output, null, 2))
    // Exit code 1 if anything found — used by CI to decide whether to open issue
    process.exit(reports.length > 0 ? 1 : 0)
  } else {
    printReport(reports)
  }
}

function printReport(reports: FileReport[]) {
  if (reports.length === 0) {
    console.log('✓ All content is current. No broken links found.')
    return
  }

  const broken = reports.filter(r => r.brokenLinks.length > 0)
  const stale = reports.filter(r => r.isStale && r.brokenLinks.length === 0)
  const missing = reports.filter(r => r.missingVerified)

  if (broken.length > 0) {
    console.log('\n🔴 BROKEN LINKS — fix immediately\n')
    for (const r of broken) {
      console.log(`  ${r.page}`)
      for (const l of r.brokenLinks) {
        console.log(`    ${l.field}: ${l.url} → ${l.status}`)
      }
    }
  }

  if (missing.length > 0) {
    console.log('\n🟠 MISSING last_verified — add date\n')
    for (const r of missing) console.log(`  ${r.file}`)
  }

  if (stale.length > 0) {
    console.log('\n🟡 STALE — review and update\n')
    console.log('  Page'.padEnd(55) + 'Last verified'.padEnd(18) + 'Days over')
    console.log('  ' + '─'.repeat(80))
    for (const r of stale.sort((a, b) => (b.daysSince ?? 0) - (a.daysSince ?? 0))) {
      const over = (r.daysSince ?? 0) - r.threshold
      console.log(
        `  ${r.page.padEnd(53)}  ${(r.lastVerified ?? 'none').padEnd(16)}  +${over}d`
      )
    }
  }
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

run().catch(console.error)
```

---

### 3.2 `scripts/mark-verified.ts`

One-command CLI to update `last_verified` after a human has confirmed a page's content is accurate.

```typescript
#!/usr/bin/env ts-node
/**
 * mark-verified.ts
 *
 * Usage:
 *   npx ts-node scripts/mark-verified.ts <file-or-page-url> [--by initials]
 *
 * Examples:
 *   npx ts-node scripts/mark-verified.ts content/jurisdictions/us/oregon/small-claims.md
 *   npx ts-node scripts/mark-verified.ts /states/oregon/small-claims
 *   npx ts-node scripts/mark-verified.ts /pricing --by hannah
 *   npx ts-node scripts/mark-verified.ts --all-broken   # mark all currently-broken-link pages after fixing
 *
 * Accepts either a file path or a URL path — resolves to the correct file either way.
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { globSync } from 'glob'

const today = new Date().toISOString().split('T')[0]
const args = process.argv.slice(2)
const byFlag = args.indexOf('--by')
const verifiedBy = byFlag !== -1 ? args[byFlag + 1] : undefined
const target = args.filter(a => !a.startsWith('--') && a !== verifiedBy)[0]

function resolveFile(input: string): string | null {
  // Direct file path
  if (input.endsWith('.md') && fs.existsSync(input)) return input

  // URL path — search companion files for matching `page` field
  const files = globSync('content/pages/**/*.md')
  for (const file of files) {
    const { data } = matter(fs.readFileSync(file, 'utf8'))
    if (data.page === input || data.page === input.replace(/\/$/, '')) return file
  }

  // URL path — try to derive jurisdiction file path
  const clean = input.replace(/^\//, '').replace(/\/$/, '')
  const candidates = [
    `content/${clean}.md`,
    `content/jurisdictions/us/${clean.replace(/^states\//, '')}.md`,
    `content/jurisdictions/ca/${clean.replace(/^ca\//, '')}.md`,
  ]
  for (const c of candidates) {
    if (fs.existsSync(c)) return c
  }

  return null
}

function updateFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(raw)

  parsed.data.last_verified = today
  if (verifiedBy) parsed.data.verified_by = verifiedBy

  // Reconstruct file preserving body
  const updated = matter.stringify(parsed.content, parsed.data)
  fs.writeFileSync(filePath, updated, 'utf8')

  console.log(`✓ ${filePath}`)
  console.log(`  last_verified → ${today}${verifiedBy ? `  verified_by → ${verifiedBy}` : ''}`)
}

if (!target) {
  console.error('Usage: mark-verified.ts <file-or-url> [--by initials]')
  process.exit(1)
}

const resolved = resolveFile(target)
if (!resolved) {
  console.error(`Could not resolve "${target}" to a content file.`)
  process.exit(1)
}

updateFile(resolved)
```

---

### 3.3 `scripts/generate-freshness-issue-body.ts`

Formats the JSON report from `check-freshness.ts --json` into a GitHub Issue markdown body. Called by the GitHub Action.

```typescript
#!/usr/bin/env ts-node
/**
 * Reads freshness-report.json from disk, writes issue-body.md
 * Called by GitHub Actions after check-freshness produces output.
 */

import fs from 'fs'

const report = JSON.parse(fs.readFileSync('freshness-report.json', 'utf8'))
const { generated_at, items } = report

const broken  = items.filter((r: any) => r.brokenLinks.length > 0)
const critical = items.filter((r: any) => r.isStale && r.priority === 'critical' && r.brokenLinks.length === 0)
const high     = items.filter((r: any) => r.isStale && r.priority === 'high'     && r.brokenLinks.length === 0)
const normal   = items.filter((r: any) => r.isStale && r.priority === 'normal'   && r.brokenLinks.length === 0)
const missing  = items.filter((r: any) => r.missingVerified)

let body = `## Content freshness report\n`
body += `Generated: ${new Date(generated_at).toDateString()}\n\n`
body += `| Broken links | Critical stale | High stale | Normal stale | Missing date |\n`
body += `|---|---|---|---|---|\n`
body += `| ${broken.length} | ${critical.length} | ${high.length} | ${normal.length} | ${missing.length} |\n\n`
body += `---\n\n`

if (broken.length > 0) {
  body += `## 🔴 Broken links — fix immediately\n\n`
  for (const r of broken) {
    body += `**[${r.page}](https://threadlock.ai${r.page})**\n`
    for (const l of r.brokenLinks) {
      body += `- \`${l.field}\`: ${l.url} → \`${l.status}\`\n`
    }
    body += `\`\`\`bash\nnpx ts-node scripts/mark-verified.ts ${r.file}\n\`\`\`\n\n`
  }
}

if (critical.length > 0) {
  body += `## 🟠 Critical — review this week\n\n`
  body += `| Page | Last verified | Days overdue |\n|---|---|---|\n`
  for (const r of critical) {
    const over = (r.daysSince ?? 0) - r.threshold
    body += `| [${r.page}](https://threadlock.ai${r.page}) | ${r.lastVerified ?? '—'} | +${over}d |\n`
  }
  body += `\n`
}

if (high.length > 0) {
  body += `## 🟡 High priority — review this month\n\n`
  body += `| Page | Last verified | Days overdue |\n|---|---|---|\n`
  for (const r of high.sort((a: any, b: any) => (b.daysSince ?? 0) - (a.daysSince ?? 0))) {
    const over = (r.daysSince ?? 0) - r.threshold
    body += `| [${r.page}](https://threadlock.ai${r.page}) | ${r.lastVerified ?? '—'} | +${over}d |\n`
  }
  body += `\n`
}

if (normal.length > 0) {
  body += `<details><summary>🔵 Normal — ${normal.length} pages (expand)</summary>\n\n`
  body += `| Page | Last verified | Days overdue |\n|---|---|---|\n`
  for (const r of normal) {
    const over = (r.daysSince ?? 0) - r.threshold
    body += `| [${r.page}](https://threadlock.ai${r.page}) | ${r.lastVerified ?? '—'} | +${over}d |\n`
  }
  body += `\n</details>\n\n`
}

if (missing.length > 0) {
  body += `## ⚪ Missing last_verified — add date\n\n`
  for (const r of missing) body += `- \`${r.file}\`\n`
  body += `\n`
}

body += `---\n`
body += `**To mark a page reviewed after confirming accuracy:**\n`
body += `\`\`\`bash\nnpx ts-node scripts/mark-verified.ts <file-or-url> --by <initials>\n\`\`\`\n`

fs.writeFileSync('issue-body.md', body, 'utf8')
console.log(`Issue body written. Total flagged: ${items.length}`)
```

---

## 4. GitHub Actions Workflow

Create `.github/workflows/content-freshness.yml`:

```yaml
name: Content freshness check

on:
  schedule:
    - cron: '0 9 * * 1'      # Every Monday 9am UTC
  workflow_dispatch:           # Manual trigger anytime
    inputs:
      broken_only:
        description: 'Check broken links only (skip staleness)'
        type: boolean
        default: false

jobs:
  check:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      contents: read

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run freshness check
        id: check
        run: |
          FLAGS="--json"
          if [ "${{ inputs.broken_only }}" = "true" ]; then
            FLAGS="$FLAGS --broken-only"
          fi
          npx ts-node scripts/check-freshness.ts $FLAGS > freshness-report.json || true
          
          STALE=$(node -e "const r=require('./freshness-report.json'); console.log(r.stale_count)")
          BROKEN=$(node -e "const r=require('./freshness-report.json'); console.log(r.broken_link_count)")
          TOTAL=$(node -e "const r=require('./freshness-report.json'); console.log(r.items.length)")
          
          echo "stale_count=$STALE"   >> $GITHUB_OUTPUT
          echo "broken_count=$BROKEN" >> $GITHUB_OUTPUT
          echo "total=$TOTAL"         >> $GITHUB_OUTPUT

      - name: Generate issue body
        if: steps.check.outputs.total > 0
        run: npx ts-node scripts/generate-freshness-issue-body.ts

      - name: Check for existing open freshness issue
        if: steps.check.outputs.total > 0
        id: existing
        uses: actions/github-script@v7
        with:
          result-encoding: string
          script: |
            const issues = await github.rest.issues.listForRepo({
              owner: context.repo.owner,
              repo: context.repo.repo,
              labels: 'content-maintenance',
              state: 'open',
            })
            const existing = issues.data.find(i => i.title.startsWith('Content freshness:'))
            return existing ? String(existing.number) : ''

      - name: Update existing issue or create new one
        if: steps.check.outputs.total > 0
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs')
            const body = fs.readFileSync('issue-body.md', 'utf8')
            const title = `Content freshness: ${{ steps.check.outputs.broken_count }} broken links, ${{ steps.check.outputs.stale_count }} stale pages`
            const existingNumber = '${{ steps.existing.outputs.result }}'

            if (existingNumber) {
              // Update the existing open issue rather than opening a duplicate
              await github.rest.issues.update({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: parseInt(existingNumber),
                title,
                body,
              })
              console.log(`Updated existing issue #${existingNumber}`)
            } else {
              await github.rest.issues.create({
                owner: context.repo.owner,
                repo: context.repo.repo,
                title,
                body,
                labels: ['content-maintenance'],
              })
              console.log('Created new issue')
            }

      - name: Close issue if everything is clean
        if: steps.check.outputs.total == 0
        uses: actions/github-script@v7
        with:
          script: |
            const issues = await github.rest.issues.listForRepo({
              owner: context.repo.owner,
              repo: context.repo.repo,
              labels: 'content-maintenance',
              state: 'open',
            })
            const existing = issues.data.find(i => i.title.startsWith('Content freshness:'))
            if (existing) {
              await github.rest.issues.createComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: existing.number,
                body: '✓ All content is now current. Closing automatically.',
              })
              await github.rest.issues.update({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: existing.number,
                state: 'closed',
              })
            }
```

---

## 5. Package.json Scripts

Add to `scripts` block in `package.json`:

```json
{
  "scripts": {
    "freshness:check": "ts-node scripts/check-freshness.ts",
    "freshness:check:broken": "ts-node scripts/check-freshness.ts --broken-only",
    "freshness:mark": "ts-node scripts/mark-verified.ts"
  }
}
```

Usage after setup:
```bash
npm run freshness:check                                          # full report
npm run freshness:check:broken                                   # broken links only
npm run freshness:mark content/pages/pricing.md --by hannah     # mark reviewed
npm run freshness:mark /states/oregon/small-claims --by hannah  # same, by URL
```

---

## 6. GitHub Label

Create the `content-maintenance` label in the repo if it doesn't exist. Color `#F9CB42` (amber). This label is used by the workflow to find and update the existing open issue rather than opening duplicates.

The agent can create this via the GitHub CLI:
```bash
gh label create "content-maintenance" --color "F9CB42" --description "Content freshness and link health tracking"
```

---

## 7. `.gitignore` Additions

Add to `.gitignore`:
```
freshness-report.json
issue-body.md
```

These are CI artifacts — never commit them.

---

## 8. Integration with WO-JURISDICTION-001

This work order depends on WO-JURISDICTION-001 having established the `content/jurisdictions/` directory and frontmatter schema first. The integration points are:

- `check-freshness.ts` reads `content/jurisdictions/**/*.md` — these files must exist and have `last_verified` in frontmatter for the system to track them. WO-JURISDICTION-001 mandates `last_verified` as a required field. No additional work needed.
- When `add-jurisdiction.ts` creates a new `.md` file, it must write `last_verified` set to the current date. Verify this is in the script output from WO-JURISDICTION-001.
- The freshness check script excludes `_index.md` files — hub pages are tracked by their companion files in `content/pages/` if needed, not via `_index.md`.

---

## 9. Acceptance Criteria

The work order is complete when:

- [ ] `content-freshness.config.ts` exists and all patterns are valid globs
- [ ] All companion `.md` files in `content/pages/` exist with correct `page` field and today's date as `last_verified`
- [ ] `npm run freshness:check` runs without crashing on an empty content directory
- [ ] `npm run freshness:check` correctly identifies a file whose `last_verified` is manually set to 200 days ago as stale
- [ ] `npm run freshness:mark /pricing` updates `last_verified` in `content/pages/pricing.md` to today's date
- [ ] `npm run freshness:mark` with a URL that has no matching file exits with a clear error message, not a crash
- [ ] Link checker correctly reports a 404 and does not report a 200 as broken
- [ ] Link checker respects the 6-second timeout and does not hang indefinitely
- [ ] GitHub Action runs without errors on `workflow_dispatch`
- [ ] GitHub Action opens an issue when stale content is found
- [ ] GitHub Action updates (not duplicates) an existing open issue on subsequent runs
- [ ] GitHub Action closes the open issue when all content is current
- [ ] `freshness-report.json` and `issue-body.md` are in `.gitignore` and not committed

---

## 10. Do Not

- Do not render `verified_by`, `notes`, or `threshold_override` on any public page — these are workflow-only fields
- Do not add `last_verified` to the database or Firestore — this is a content-layer concern only
- Do not automatically update `last_verified` without a human having confirmed the content — the point of the system is human-in-the-loop verification, not automation of the date itself
- Do not check internal `threadlock.ai` URLs — the link checker filters these out deliberately; broken internal links are a deployment concern caught by other tooling
- Do not open more than one issue per week — the workflow checks for an existing open `content-maintenance` issue and updates it rather than creating duplicates
