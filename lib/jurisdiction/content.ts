import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const JURISDICTIONS_DIR = path.join(process.cwd(), "content", "jurisdictions");

export interface JurisdictionFrontmatter {
  jurisdiction_slug: string;
  jurisdiction_name: string;
  practice_area?: string;
  country: "us" | "ca";
  province_or_state?: string;
  title: string;
  meta_description: string;
  court_name?: string;
  filing_limit?: string;
  filing_fee?: string;
  response_deadline?: string;
  hearing_timeline?: string;
  court_url?: string;
  statute_citation?: string;
  forms?: { name: string; url: string }[];
  last_verified?: string;
}

export interface JurisdictionPage extends JurisdictionFrontmatter {
  bodyHtml: string;
}

export interface HubMeta {
  jurisdiction_slug: string;
  jurisdiction_name: string;
  country: "us" | "ca";
  title: string;
  meta_description: string;
}

function safeParseFrontmatter(filePath: string): JurisdictionFrontmatter | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    if (!data.jurisdiction_slug || !data.title) {
      console.warn(`[jurisdiction] Skipping ${filePath}: missing required frontmatter fields`);
      return null;
    }
    return data as JurisdictionFrontmatter;
  } catch (err) {
    console.warn(`[jurisdiction] Failed to parse ${filePath}:`, err);
    return null;
  }
}

async function parseLeafPage(filePath: string): Promise<JurisdictionPage | null> {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    if (!data.jurisdiction_slug || !data.title) {
      console.warn(`[jurisdiction] Skipping ${filePath}: missing required frontmatter`);
      return null;
    }

    const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
    const bodyHtml = processed.toString();

    return { ...(data as JurisdictionFrontmatter), bodyHtml };
  } catch (err) {
    console.warn(`[jurisdiction] Failed to parse ${filePath}:`, err);
    return null;
  }
}

export function getHubMeta(country: "us" | "ca", slug: string): HubMeta | null {
  const filePath = path.join(JURISDICTIONS_DIR, country, slug, "_index.md");
  return safeParseFrontmatter(filePath) as HubMeta | null;
}

export function getRootHubMeta(country: "us" | "ca"): HubMeta | null {
  const filePath = path.join(JURISDICTIONS_DIR, country, "_index.md");
  return safeParseFrontmatter(filePath) as HubMeta | null;
}

export function getAllJurisdictionSlugs(country: "us" | "ca"): string[] {
  const dir = path.join(JURISDICTIONS_DIR, country);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((slug) =>
      fs.existsSync(path.join(dir, slug, "_index.md"))
    );
}

export function getAllLeafPaths(
  country: "us" | "ca"
): { slug: string; practice: string }[] {
  const slugs = getAllJurisdictionSlugs(country);
  const results: { slug: string; practice: string }[] = [];

  for (const slug of slugs) {
    const slugDir = path.join(JURISDICTIONS_DIR, country, slug);
    const files = fs.readdirSync(slugDir);
    for (const file of files) {
      if (file.endsWith(".md") && file !== "_index.md") {
        results.push({ slug, practice: file.replace(".md", "") });
      }
    }
  }

  return results;
}

export async function getLeafPage(
  country: "us" | "ca",
  slug: string,
  practice: string
): Promise<JurisdictionPage | null> {
  const filePath = path.join(JURISDICTIONS_DIR, country, slug, `${practice}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseLeafPage(filePath);
}

export function getLeafPagesForPractice(
  country: "us" | "ca",
  practice: string
): JurisdictionFrontmatter[] {
  const slugs = getAllJurisdictionSlugs(country);
  const results: JurisdictionFrontmatter[] = [];

  for (const slug of slugs) {
    const filePath = path.join(JURISDICTIONS_DIR, country, slug, `${practice}.md`);
    if (fs.existsSync(filePath)) {
      const fm = safeParseFrontmatter(filePath);
      if (fm) results.push(fm);
    }
  }

  return results.sort((a, b) =>
    a.jurisdiction_name.localeCompare(b.jurisdiction_name)
  );
}

export function getAllHubMetas(country: "us" | "ca"): HubMeta[] {
  const slugs = getAllJurisdictionSlugs(country);
  return slugs
    .map((slug) => getHubMeta(country, slug))
    .filter(Boolean) as HubMeta[];
}

// Alphabetical neighbor map — each state/province gets up to 4 neighbors
const US_NEIGHBORS: Record<string, string[]> = {
  alabama: ["mississippi", "tennessee", "georgia", "florida"],
  alaska: ["washington", "oregon", "montana", "idaho"],
  arizona: ["california", "nevada", "utah", "new-mexico"],
  arkansas: ["missouri", "tennessee", "mississippi", "louisiana"],
  california: ["oregon", "nevada", "arizona", "washington"],
  colorado: ["utah", "wyoming", "nebraska", "kansas"],
  connecticut: ["new-york", "massachusetts", "rhode-island", "new-jersey"],
  delaware: ["maryland", "new-jersey", "pennsylvania", "virginia"],
  "district-of-columbia": ["maryland", "virginia", "pennsylvania", "new-jersey"],
  florida: ["georgia", "alabama", "south-carolina", "tennessee"],
  georgia: ["florida", "alabama", "south-carolina", "tennessee"],
  hawaii: ["california", "alaska", "washington", "oregon"],
  idaho: ["montana", "wyoming", "utah", "oregon"],
  illinois: ["indiana", "wisconsin", "iowa", "missouri"],
  indiana: ["illinois", "ohio", "michigan", "kentucky"],
  iowa: ["illinois", "wisconsin", "minnesota", "missouri"],
  kansas: ["missouri", "colorado", "nebraska", "oklahoma"],
  kentucky: ["tennessee", "ohio", "indiana", "virginia"],
  louisiana: ["mississippi", "arkansas", "texas", "alabama"],
  maine: ["new-hampshire", "vermont", "massachusetts", "connecticut"],
  maryland: ["virginia", "delaware", "pennsylvania", "west-virginia"],
  massachusetts: ["new-york", "connecticut", "rhode-island", "new-hampshire"],
  michigan: ["ohio", "indiana", "illinois", "wisconsin"],
  minnesota: ["wisconsin", "iowa", "north-dakota", "south-dakota"],
  mississippi: ["alabama", "louisiana", "tennessee", "arkansas"],
  missouri: ["illinois", "iowa", "kansas", "tennessee"],
  montana: ["idaho", "wyoming", "north-dakota", "south-dakota"],
  nebraska: ["kansas", "iowa", "south-dakota", "colorado"],
  nevada: ["california", "arizona", "utah", "oregon"],
  "new-hampshire": ["maine", "vermont", "massachusetts", "connecticut"],
  "new-jersey": ["new-york", "pennsylvania", "delaware", "connecticut"],
  "new-mexico": ["arizona", "colorado", "texas", "utah"],
  "new-york": ["new-jersey", "connecticut", "massachusetts", "pennsylvania"],
  "north-carolina": ["virginia", "south-carolina", "georgia", "tennessee"],
  "north-dakota": ["minnesota", "south-dakota", "montana", "iowa"],
  ohio: ["indiana", "michigan", "pennsylvania", "kentucky"],
  oklahoma: ["kansas", "missouri", "arkansas", "texas"],
  oregon: ["washington", "california", "idaho", "nevada"],
  pennsylvania: ["new-york", "new-jersey", "ohio", "maryland"],
  "rhode-island": ["connecticut", "massachusetts", "new-york", "new-jersey"],
  "south-carolina": ["north-carolina", "georgia", "florida", "virginia"],
  "south-dakota": ["north-dakota", "minnesota", "nebraska", "iowa"],
  tennessee: ["kentucky", "virginia", "north-carolina", "georgia"],
  texas: ["oklahoma", "arkansas", "louisiana", "new-mexico"],
  utah: ["colorado", "arizona", "nevada", "idaho"],
  vermont: ["new-york", "new-hampshire", "maine", "massachusetts"],
  virginia: ["maryland", "north-carolina", "tennessee", "west-virginia"],
  washington: ["oregon", "idaho", "california", "montana"],
  "west-virginia": ["virginia", "kentucky", "ohio", "maryland"],
  wisconsin: ["illinois", "michigan", "minnesota", "iowa"],
  wyoming: ["montana", "idaho", "utah", "colorado"],
};

const CA_NEIGHBORS: Record<string, string[]> = {
  alberta: ["british-columbia", "saskatchewan", "northwest-territories", "manitoba"],
  "british-columbia": ["alberta", "yukon", "northwest-territories", "ontario"],
  manitoba: ["saskatchewan", "ontario", "nunavut", "alberta"],
  "new-brunswick": ["nova-scotia", "prince-edward-island", "quebec", "newfoundland-and-labrador"],
  "newfoundland-and-labrador": ["new-brunswick", "nova-scotia", "quebec", "prince-edward-island"],
  "northwest-territories": ["yukon", "nunavut", "alberta", "british-columbia"],
  "nova-scotia": ["new-brunswick", "prince-edward-island", "newfoundland-and-labrador", "quebec"],
  nunavut: ["northwest-territories", "manitoba", "ontario", "quebec"],
  ontario: ["quebec", "manitoba", "nunavut", "alberta"],
  "prince-edward-island": ["nova-scotia", "new-brunswick", "newfoundland-and-labrador", "quebec"],
  quebec: ["ontario", "new-brunswick", "nova-scotia", "newfoundland-and-labrador"],
  saskatchewan: ["alberta", "manitoba", "northwest-territories", "nunavut"],
  yukon: ["british-columbia", "northwest-territories", "alberta", "saskatchewan"],
};

export function getValidNeighbors(
  country: "us" | "ca",
  slug: string,
  practice: string
): string[] {
  const map = country === "ca" ? CA_NEIGHBORS : US_NEIGHBORS;
  const neighbors = (map[slug] || []).slice(0, 4);
  return neighbors.filter((neighborSlug) => {
    const filePath = path.join(JURISDICTIONS_DIR, country, neighborSlug, `${practice}.md`);
    return fs.existsSync(filePath);
  });
}
