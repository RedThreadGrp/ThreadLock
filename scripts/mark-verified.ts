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
    let data: Record<string, any>
    try {
      ;({ data } = matter(fs.readFileSync(file, 'utf8')))
    } catch {
      continue
    }
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
