#!/usr/bin/env ts-node
/**
 * add-jurisdiction.ts
 * 
 * Usage:
 *   npx ts-node scripts/add-jurisdiction.ts \
 *     --file ./unformatted-input.md \
 *     --country us \
 *     --state oregon \
 *     --practice small-claims
 * 
 *   For Canadian provinces use --province instead of --state:
 *   npx ts-node scripts/add-jurisdiction.ts \
 *     --file ./input.md \
 *     --country ca \
 *     --province ontario \
 *     --practice small-claims
 */

import fs from "fs";
import path from "path";
import readline from "readline";

const CONTENT_BASE = path.join(process.cwd(), "content", "jurisdictions");

function parseArgs(argv: string[]): Record<string, string> {
  const args: Record<string, string> = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith("--") && i + 1 < argv.length) {
      args[argv[i].slice(2)] = argv[i + 1];
      i++;
    }
  }
  return args;
}

function prompt(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

function toDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function hasFrontmatter(content: string): boolean {
  return content.trimStart().startsWith("---");
}

function buildDefaultFrontmatter(
  country: string,
  jurisdictionSlug: string,
  practice: string
): string {
  const displayName = toDisplayName(jurisdictionSlug);
  const practiceDisplay = toDisplayName(practice);
  const provinceOrState = country === "ca" ? "province" : "state";
  const today = new Date().toISOString().split("T")[0];

  return `---
jurisdiction_slug: ${jurisdictionSlug}
jurisdiction_name: ${displayName}
practice_area: ${practice}
country: ${country}
province_or_state: ${provinceOrState}
title: "${practiceDisplay} Court in ${displayName} — Filing Limits, Fees & Forms"
meta_description: "${displayName} ${practiceDisplay.toLowerCase()} court limits, filing fees, response deadlines, and court forms. Organize your evidence with ThreadLock before your hearing."
court_name: "${displayName} ${practiceDisplay} Court"
filing_limit: ""
filing_fee: ""
response_deadline: ""
hearing_timeline: ""
court_url: ""
statute_citation: ""
forms: []
last_verified: "${today}"
---
`;
}

function ensureHubIndex(country: string, jurisdictionSlug: string): void {
  const hubDir = path.join(CONTENT_BASE, country, jurisdictionSlug);
  const indexPath = path.join(hubDir, "_index.md");

  if (!fs.existsSync(hubDir)) {
    fs.mkdirSync(hubDir, { recursive: true });
  }

  if (!fs.existsSync(indexPath)) {
    const displayName = toDisplayName(jurisdictionSlug);
    const countryDisplay = country === "ca" ? "Canadian" : "US";
    const practiceList =
      country === "ca"
        ? "small claims, family law, and landlord-tenant cases"
        : "small claims, family court, and landlord-tenant cases";
    const content = `---
jurisdiction_slug: ${jurisdictionSlug}
jurisdiction_name: ${displayName}
country: ${country}
title: "${displayName} Civil Court Guide — ${countryDisplay} Court Filing Guides"
meta_description: "${displayName} court filing guides for self-represented litigants. Covers ${practiceList}."
---
`;
    fs.writeFileSync(indexPath, content, "utf-8");
    console.log(`  ✓ Created hub index: ${indexPath}`);
  }
}

async function main() {
  const args = parseArgs(process.argv);

  const country = args.country;
  const practice = args.practice;
  const inputFile = args.file;
  const jurisdictionSlug = args.state || args.province;

  if (!country || !practice || !inputFile || !jurisdictionSlug) {
    console.error(
      "Usage: npx ts-node scripts/add-jurisdiction.ts --file <path> --country <us|ca> --state <slug> --practice <slug>"
    );
    console.error("  For Canada: use --province instead of --state");
    process.exit(1);
  }

  if (!["us", "ca"].includes(country)) {
    console.error("--country must be 'us' or 'ca'");
    process.exit(1);
  }

  if (!fs.existsSync(inputFile)) {
    console.error(`Input file not found: ${inputFile}`);
    process.exit(1);
  }

  let inputContent = fs.readFileSync(inputFile, "utf-8");

  // If no frontmatter, prepend a default skeleton
  if (!hasFrontmatter(inputContent)) {
    console.warn(
      `[warn] Input file has no frontmatter. Prepending default skeleton for ${jurisdictionSlug}/${practice}.`
    );

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    if (args.interactive !== undefined) {
      const filingLimit = await prompt(rl, "Filing limit (e.g. $10,000): ");
      const filingFee = await prompt(rl, "Filing fee (e.g. $52–$95): ");
      const courtName = await prompt(rl, "Official court name: ");
      const courtUrl = await prompt(rl, "Official court URL: ");
      const responseDeadline = await prompt(rl, "Response deadline (e.g. 14 days): ");
      const lastVerified = await prompt(rl, `Last verified date [${new Date().toISOString().split("T")[0]}]: `) ||
        new Date().toISOString().split("T")[0];
      rl.close();

      const displayName = toDisplayName(jurisdictionSlug);
      const practiceDisplay = toDisplayName(practice);
      const provinceOrState = country === "ca" ? "province" : "state";

      inputContent = `---
jurisdiction_slug: ${jurisdictionSlug}
jurisdiction_name: ${displayName}
practice_area: ${practice}
country: ${country}
province_or_state: ${provinceOrState}
title: "${practiceDisplay} Court in ${displayName} — Filing Limits, Fees & Forms"
meta_description: "${displayName} ${practiceDisplay.toLowerCase()} court guide with filing limits, fees, and deadlines. Organize your evidence with ThreadLock."
court_name: "${courtName}"
filing_limit: "${filingLimit}"
filing_fee: "${filingFee}"
response_deadline: "${responseDeadline}"
court_url: "${courtUrl}"
forms: []
last_verified: "${lastVerified}"
---

${inputContent}`;
    } else {
      rl.close();
      inputContent = buildDefaultFrontmatter(country, jurisdictionSlug, practice) + "\n" + inputContent;
    }
  }

  // Ensure directory and hub _index.md exist
  const outputDir = path.join(CONTENT_BASE, country, jurisdictionSlug);
  ensureHubIndex(country, jurisdictionSlug);

  const outputPath = path.join(outputDir, `${practice}.md`);

  if (fs.existsSync(outputPath)) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const answer = await prompt(rl, `File already exists: ${outputPath}\nOverwrite? (y/N): `);
    rl.close();
    if (answer.toLowerCase() !== "y") {
      console.log("Aborted. No files were written.");
      process.exit(0);
    }
  }

  fs.writeFileSync(outputPath, inputContent, "utf-8");

  const basePath = country === "ca" ? "/ca" : "/states";
  const resultUrl = `https://threadlock.ai${basePath}/${jurisdictionSlug}/${practice}/`;

  console.log(`\n✓ File written: ${outputPath}`);
  console.log(`✓ Page will be served at: ${resultUrl}`);
  console.log(`\nRun 'npm run build' to regenerate the site.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
