#!/usr/bin/env ts-node
/**
 * generate-freshness-issue-body.ts
 *
 * Reads freshness-report.json from disk, writes issue-body.md
 * Called by GitHub Actions after check-freshness produces output.
 */

import fs from 'fs'

const report = JSON.parse(fs.readFileSync('freshness-report.json', 'utf8'))
const { generated_at, items } = report

const broken   = items.filter((r: any) => r.brokenLinks.length > 0)
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
