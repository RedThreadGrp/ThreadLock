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
      signal: controller.signal as any,
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

// ─── Report printer ──────────────────────────────────────────────────────────

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
    let raw: string
    try {
      raw = fs.readFileSync(file, 'utf8')
    } catch (err) {
      console.warn(`[warn] Could not read ${file}:`, err)
      continue
    }

    let data: Record<string, any>
    try {
      ;({ data } = matter(raw))
    } catch (err) {
      console.warn(`[warn] Could not parse frontmatter in ${file}:`, err)
      continue
    }

    const policy = resolvePolicy(file)
    const threshold: number = data.threshold_override ?? policy.threshold

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
    if (policy.checkLinks && !brokenOnly) {
      const urls = extractExternalUrls(data)
      const chunks = chunkArray(urls, 5)
      for (const chunk of chunks) {
        const results = await Promise.all(
          chunk.map(async ({ field, url }) => {
            const { ok, status } = await checkUrl(url)
            return ok ? null : ({ field, url, status } as BrokenLink)
          })
        )
        brokenLinks.push(...(results.filter(Boolean) as BrokenLink[]))
      }
    } else if (policy.checkLinks && brokenOnly) {
      // In broken-only mode, still check links
      const urls = extractExternalUrls(data)
      const chunks = chunkArray(urls, 5)
      for (const chunk of chunks) {
        const results = await Promise.all(
          chunk.map(async ({ field, url }) => {
            const { ok, status } = await checkUrl(url)
            return ok ? null : ({ field, url, status } as BrokenLink)
          })
        )
        brokenLinks.push(...(results.filter(Boolean) as BrokenLink[]))
      }
    }

    const shouldInclude = brokenOnly
      ? brokenLinks.length > 0
      : isStale || brokenLinks.length > 0

    if (shouldInclude) {
      reports.push({
        file,
        page: fileToPageUrl(file, data),
        lastVerified: data.last_verified ?? null,
        daysSince,
        threshold,
        priority: policy.priority,
        isStale: brokenOnly ? false : isStale,
        brokenLinks,
        missingVerified: brokenOnly ? false : missingVerified,
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

run().catch(console.error)
