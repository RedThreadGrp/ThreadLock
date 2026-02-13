// file: src/pages/resources/ResourcesPage.tsx
// ThreadLock marketing standards:
// - Tailwind-only styling (no CDN, no inline styles for layout/color/shadow/radius)
// - Uses token utility classes (bg-surface, bg-surface-panel, border-border, text-foreground, text-muted)
// - Brand: navy (#1b3a4d) and orange (#fb7a1e) via token classes (bg-brand-navy, text-brand-orange, etc.)
// - Conservative claims: no "court-ready", no implied legal advice, clear disclaimer posture

import React, { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "@/src/components/SiteHeader";
import HeroBanner from "@/src/components/HeroBanner";
import StandardDisclaimer from "@/src/components/StandardDisclaimer";
import FeedbackWidget from "@/src/components/FeedbackWidget";
import {
  EXTERNAL_RESOURCES,
  getUniqueJurisdictions,
  getAllStateDirectoryEntries,
  ResourceCategory,
  isLinkStale,
  formatLastVerified,
} from "@/src/content/externalResources.registry";
import { isHttp, extractDomain } from "@/src/lib/normalizeUrl";
import { trackResourceClick } from "@/src/lib/analytics";
import { getDeadlinesForJurisdiction, hasDeadlines } from "@/src/content/stateDeadlines.registry";

type Resource = {
  title: string;
  excerpt: string;
  tag: "Templates" | "Evidence" | "Court Prep" | "Forms" | "Finance" | "Basics";
  topic: string;
  intent: "Urgent" | "Start" | "Organize" | "Learn";
  href: string;
  readTime?: string;
};

type StarterKit = {
  title: string;
  description: string;
  whatYouGet: string[];
  estimatedTime: string;
  resources: string[];
  href: string;
};

type Topic = {
  title: string;
  promise: string;
  resourceCount: number;
  slug: string;
};

type Guide = {
  title: string;
  summary: string;
  tags: string[];
  updated?: string;
  href: string;
};

type Question = {
  question: string;
  href: string;
};

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const RESOURCES: Resource[] = [
  {
    title: "Hearing Tomorrow Checklist",
    excerpt: "A practical walkthrough for what to bring, how to label exhibits, and what to avoid saying when you're nervous.",
    tag: "Court Prep",
    topic: "Hearings & Courtroom Prep",
    intent: "Urgent",
    href: "/resources/hearing-tomorrow",
    readTime: "5 min read",
  },
  {
    title: "Proof of Service Pack",
    excerpt: "Templates + plain-English guidance so you don't lose on a technicality.",
    tag: "Templates",
    topic: "Proof of Service",
    intent: "Start",
    href: "/resources/proof-of-service",
    readTime: "8 min read",
  },
  {
    title: "Evidence Intake: Photos, Texts, Email",
    excerpt: "How to capture, preserve, and organize records so they're usable later. (Not legal advice. Just hygiene.)",
    tag: "Evidence",
    topic: "Evidence & Exhibits",
    intent: "Organize",
    href: "/resources/evidence-intake",
    readTime: "10 min read",
  },
  {
    title: "Parenting Plan Builder Guide",
    excerpt: "A structured way to describe routines, transitions, holidays, and communication—without writing a manifesto.",
    tag: "Basics",
    topic: "Parenting Plans",
    intent: "Start",
    href: "/resources/parenting-plans",
    readTime: "12 min read",
  },
  {
    title: "Financial Snapshot Worksheet",
    excerpt: "Income, expenses, accounts, and timelines—so you can answer questions without scrambling.",
    tag: "Finance",
    topic: "Financial Declarations",
    intent: "Organize",
    href: "/resources/financial-snapshot",
    readTime: "7 min read",
  },
  {
    title: "Official Court Portals Directory",
    excerpt: "Links to state-provided form sites and official rules. Don't pay for free forms.",
    tag: "Forms",
    topic: "Official Forms & Portals",
    intent: "Learn",
    href: "/resources/official-portals",
    readTime: "3 min read",
  },
];

const STARTER_KITS: StarterKit[] = [
  {
    title: "Hearing Soon Kit",
    description: "Everything you need when a hearing is approaching fast.",
    whatYouGet: [
      "Hearing Tomorrow Checklist",
      "Exhibit labeling guidelines",
      "Courtroom etiquette basics",
      "What to bring checklist",
      "Common mistakes to avoid",
    ],
    estimatedTime: "15 minutes",
    resources: ["/resources/hearing-tomorrow", "/resources/exhibits-guide", "/resources/courtroom-prep"],
    href: "/resources/kits/hearing-soon",
  },
  {
    title: "First Filing Kit",
    description: "Start your case right with proper documentation and filing procedures.",
    whatYouGet: [
      "Proof of service templates",
      "Official forms directory",
      "Filing hygiene checklist",
      "Court rules overview",
      "Common filing errors guide",
    ],
    estimatedTime: "20 minutes",
    resources: ["/resources/proof-of-service", "/resources/official-portals", "/resources/filing-basics"],
    href: "/resources/kits/first-filing",
  },
  {
    title: "Evidence Kit",
    description: "Capture, organize, and preserve evidence that holds up.",
    whatYouGet: [
      "Evidence intake templates",
      "Photo/text preservation guide",
      "Timeline organization tools",
      "Authentication basics",
      "Digital evidence checklist",
    ],
    estimatedTime: "25 minutes",
    resources: ["/resources/evidence-intake", "/resources/timeline-tools", "/resources/authentication"],
    href: "/resources/kits/evidence",
  },
];

const TOPICS: Topic[] = [
  {
    title: "Proof of Service",
    promise: "Don't lose on a technicality—get service documentation right.",
    resourceCount: 4,
    slug: "proof-of-service",
  },
  {
    title: "Evidence & Exhibits",
    promise: "Capture, preserve, and organize records that are usable in court.",
    resourceCount: 6,
    slug: "evidence-exhibits",
  },
  {
    title: "Hearings & Courtroom Prep",
    promise: "Walk in prepared, organized, and coherent under pressure.",
    resourceCount: 5,
    slug: "hearings-prep",
  },
  {
    title: "Parenting Plans",
    promise: "Structure routines, transitions, and communication clearly.",
    resourceCount: 3,
    slug: "parenting-plans",
  },
  {
    title: "Financial Declarations",
    promise: "Answer financial questions without scrambling for numbers.",
    resourceCount: 4,
    slug: "financial-declarations",
  },
  {
    title: "Official Forms & Portals",
    promise: "Access state-provided forms and rules—don't pay for free resources.",
    resourceCount: 8,
    slug: "official-forms",
  },
];

const FEATURED_GUIDES: Guide[] = [
  {
    title: "The Complete Guide to Self-Representation in Family Court",
    summary: "Everything you need to know about representing yourself, from filing basics to courtroom strategy. Updated with 2026 rule changes.",
    tags: ["Court Prep", "Basics", "Complete Guide"],
    updated: "Jan 2026",
    href: "/resources/guides/self-representation-complete",
  },
  {
    title: "Evidence Authentication 101",
    summary: "How to make your photos, texts, and emails admissible without hiring an expert.",
    tags: ["Evidence", "Authentication"],
    href: "/resources/guides/evidence-authentication",
  },
  {
    title: "Proof of Service State-by-State",
    summary: "Requirements and templates for every U.S. state and territory.",
    tags: ["Templates", "Proof of Service"],
    href: "/resources/guides/proof-of-service-states",
  },
  {
    title: "Understanding Parenting Time Calculations",
    summary: "Calculate overnights, holidays, and summer schedules accurately.",
    tags: ["Parenting Plans", "Calculations"],
    href: "/resources/guides/parenting-time-calculations",
  },
];

const POPULAR_QUESTIONS: Question[] = [
  { question: "What counts as proof of service?", href: "/resources/q/proof-of-service-definition" },
  { question: "How do I label exhibits for court?", href: "/resources/q/exhibit-labeling" },
  { question: "Where do I find official court forms?", href: "/resources/q/official-forms-location" },
  { question: "Can I authenticate text messages myself?", href: "/resources/q/text-authentication" },
  { question: "What should I bring to a hearing?", href: "/resources/q/hearing-checklist" },
  { question: "How long do I have to serve documents?", href: "/resources/q/service-deadlines" },
  { question: "What's the difference between legal and physical custody?", href: "/resources/q/custody-types" },
  { question: "Do I need a lawyer for mediation?", href: "/resources/q/mediation-lawyer" },
  { question: "How do I calculate child support?", href: "/resources/q/child-support-calculation" },
  { question: "Can I modify a parenting plan later?", href: "/resources/q/modify-parenting-plan" },
  { question: "What if I can't afford court fees?", href: "/resources/q/fee-waiver" },
  { question: "How do I respond to a motion?", href: "/resources/q/respond-to-motion" },
];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [intent, setIntent] = useState<"All" | Resource["intent"]>("All");
  const [tag, setTag] = useState<"All" | Resource["tag"]>("All");
  
  // External resources filtering
  const [externalSearch, setExternalSearch] = useState("");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState<"All" | ResourceCategory>("All");
  
  // State directory expansion
  const [expandedJurisdiction, setExpandedJurisdiction] = useState<string | null>(null);

  const isFiltersActive = intent !== "All" || tag !== "All" || query.trim() !== "";

  const resetFilters = () => {
    setIntent("All");
    setTag("All");
    setQuery("");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      const matchQ =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q) ||
        r.tag.toLowerCase().includes(q) ||
        r.intent.toLowerCase().includes(q);
      const matchIntent = intent === "All" ? true : r.intent === intent;
      const matchTag = tag === "All" ? true : r.tag === tag;
      return matchQ && matchIntent && matchTag;
    });
  }, [query, intent, tag]);

  // Filter external resources
  const filteredExternalResources = useMemo(() => {
    const searchTerm = externalSearch.trim().toLowerCase();
    return EXTERNAL_RESOURCES.filter((r) => {
      const matchSearch =
        !searchTerm ||
        r.title.toLowerCase().includes(searchTerm) ||
        extractDomain(r.url).toLowerCase().includes(searchTerm);
      const matchJurisdiction =
        selectedJurisdiction === "All" || r.jurisdiction === selectedJurisdiction;
      const matchCategory = selectedCategory === "All" || r.category === selectedCategory;
      return matchSearch && matchJurisdiction && matchCategory;
    });
  }, [externalSearch, selectedJurisdiction, selectedCategory]);

  return (
    <>
      <Head>
        <title>Resource Hub | ThreadLock</title>
        <meta name="description" content="Checklists, templates, and plain-English guidance for self-represented litigants in family court. Updated weekly." />
      </Head>

      <SiteHeader />

      <HeroBanner
        image="/annie-spratt-BH8-YFSNEIw-unsplash.jpg"
        heading={<>Your case, but run like a <span className="text-orange-400">system</span></>}
        subheading="Not a library. Not a court brochure. This is a control panel: checklists, templates, and tactical guidance to help you move without stepping on rakes."
      />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        {/* Search and Filters Section */}
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-6">
          <div className="mx-auto max-w-3xl">
            {/* Search bar */}
            <div className="mx-auto max-w-2xl rounded-3xl border border-border-dark bg-surface-dark-panel p-2 shadow-sm">
              <div className="flex items-center gap-3 rounded-2xl bg-surface-dark px-4 py-3 border border-border-dark/50 focus-within:border-brand-orange/50 transition-colors">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand-orange text-white shrink-0">
                  <span className="text-xs font-bold">↯</span>
                </div>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search resources: 'proof of service', 'hearing tomorrow', 'evidence'…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-dark/70 text-foreground-dark"
                />
              </div>
            </div>

            {/* Fast Tracks */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Pill onClick={() => setIntent("Urgent")} active={intent === "Urgent"}>
                I have a hearing soon
              </Pill>
              <Pill onClick={() => setIntent("Start")} active={intent === "Start"}>
                I need to file basics
              </Pill>
              <Pill onClick={() => setIntent("Organize")} active={intent === "Organize"}>
                I'm organizing evidence
              </Pill>
              <Pill onClick={() => setIntent("Learn")} active={intent === "Learn"}>
                I need official portals
              </Pill>
              <Pill onClick={resetFilters} active={!isFiltersActive}>
                Reset
              </Pill>
            </div>
          </div>
        </section>

        {/* In-page Subnav */}
        <nav className="sticky top-0 z-10 bg-surface-dark/95 backdrop-blur-sm border-b border-border-dark mb-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
              <a 
                href="#starter-kits" 
                className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition hover:bg-surface-dark-panel text-muted-dark hover:text-foreground-dark"
              >
                Starter Kits
              </a>
              <span className="text-border-dark">·</span>
              <a 
                href="#featured-guides" 
                className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition hover:bg-surface-dark-panel text-muted-dark hover:text-foreground-dark"
              >
                Featured Guides
              </a>
              <span className="text-border-dark">·</span>
              <a 
                href="#topics" 
                className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition hover:bg-surface-dark-panel text-muted-dark hover:text-foreground-dark"
              >
                Topics
              </a>
              <span className="text-border-dark">·</span>
              <a 
                href="#library" 
                className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition hover:bg-surface-dark-panel text-muted-dark hover:text-foreground-dark"
              >
                Library
              </a>
              <span className="text-border-dark">·</span>
              <a 
                href="#questions" 
                className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition hover:bg-surface-dark-panel text-muted-dark hover:text-foreground-dark"
              >
                FAQ / Questions
              </a>
              <span className="text-border-dark">·</span>
              <a 
                href="#directory" 
                className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition hover:bg-surface-dark-panel text-muted-dark hover:text-foreground-dark"
              >
                Official Directory
              </a>
            </div>
          </div>
        </nav>

        {/* Starter Kits */}
        <section id="starter-kits" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground-dark">Starter Kits</h2>
              <p className="mt-2 text-muted-dark">
                High-value bundles to get you moving fast.
              </p>
            </div>
            <div className="h-1 w-20 rounded-full bg-brand-orange" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {STARTER_KITS.map((kit) => (
              <Link
                key={kit.href}
                href={kit.href}
                className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                {/* Orange glow overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground-dark group-hover:text-brand-orange transition-colors">
                      {kit.title}
                    </h3>
                    {/* Time badge with orange border */}
                    <span className="shrink-0 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2 py-0.5 text-xs font-semibold text-brand-orange">
                      {kit.estimatedTime}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">{kit.description}</p>

                  <div className="mt-4">
                    <div className="text-xs font-semibold text-muted-dark mb-2">What you'll get:</div>
                    <ul className="space-y-1">
                      {kit.whatYouGet.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-dark">
                          <span className="text-brand-orange mt-0.5 text-base">✓</span>
                          <span>{item}</span>
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white group-hover:bg-brand-navy transition-colors">
                    Start here
                  </span>
                  {/* Animated arrow */}
                  <span className="text-brand-orange font-bold group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

        {/* Featured Guides */}
        <section id="featured-guides" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground-dark">Featured Guides</h2>
              <p className="mt-2 text-muted-dark">
                In-depth resources for serious preparation.
              </p>
            </div>
            <div className="h-1 w-20 rounded-full bg-brand-orange" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Primary featured guide */}
            <Link
              href={FEATURED_GUIDES[0].href}
              className="group relative lg:col-span-2 rounded-3xl border border-border-dark bg-surface-dark-panel p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
            >
              {/* Orange glow overlay on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {FEATURED_GUIDES[0].tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground-dark group-hover:text-brand-orange transition-colors">
                  {FEATURED_GUIDES[0].title}
                </h3>
                <p className="mt-3 text-muted-dark leading-relaxed">{FEATURED_GUIDES[0].summary}</p>
                {FEATURED_GUIDES[0].updated && (
                  <p className="mt-4 text-xs text-muted-dark">Updated {FEATURED_GUIDES[0].updated}</p>
                )}
              </div>
            </Link>

            {/* Secondary guides */}
            {FEATURED_GUIDES.slice(1).map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                {/* Orange glow overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {guide.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border-dark bg-surface-dark px-2 py-0.5 text-xs font-semibold text-muted-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground-dark group-hover:text-brand-orange transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">{guide.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Topics Hub */}
        <section id="topics" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground-dark">Browse by Topic</h2>
              <p className="mt-2 text-muted-dark">
                Explore focused collections of resources.
              </p>
            </div>
            <div className="h-1 w-20 rounded-full bg-brand-orange" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <Link
                key={topic.slug}
                href={`/resources/topics/${topic.slug}`}
                className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                {/* Orange glow overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground-dark group-hover:text-brand-orange transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">{topic.promise}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-dark">{topic.resourceCount} resources</span>
                    <span className="text-xs font-semibold text-brand-orange group-hover:text-brand-navy transition-colors">
                      Explore topic →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Filters + Library */}
        <section id="library" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground-dark">All Resources</h2>

            <div className="flex flex-wrap items-center gap-2">
              <Select
                label="Intent"
                value={intent}
                onChange={(v) => setIntent(v as any)}
                options={["All", "Urgent", "Start", "Organize", "Learn"]}
              />
              <Select
                label="Category"
                value={tag}
                onChange={(v) => setTag(v as any)}
                options={["All", "Templates", "Evidence", "Court Prep", "Forms", "Finance", "Basics"]}
              />
            </div>
          </div>

          {/* Results counter + active filters */}
          {isFiltersActive && (
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-dark">
              <span>Showing {filtered.length} {filtered.length === 1 ? 'result' : 'results'}</span>
              {(intent !== "All" || tag !== "All") && (
                <>
                  <span>·</span>
                  <div className="flex flex-wrap gap-2">
                    {intent !== "All" && (
                      <button
                        onClick={() => setIntent("All")}
                        className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-xs font-semibold text-brand-orange hover:bg-brand-orange/20 transition"
                      >
                        {intent} ×
                      </button>
                    )}
                    {tag !== "All" && (
                      <button
                        onClick={() => setTag("All")}
                        className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-xs font-semibold text-brand-orange hover:bg-brand-orange/20 transition"
                      >
                        {tag} ×
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                {/* Orange glow overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground-dark group-hover:text-brand-orange transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed line-clamp-2">{r.excerpt}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className={cn(
                      "rounded-full px-2 py-0.5 font-semibold",
                      r.intent === "Urgent" 
                        ? "bg-brand-orange/20 text-brand-orange ring-1 ring-brand-orange/30" 
                        : "bg-surface-dark text-muted-dark border border-border-dark"
                    )}>
                      {r.intent}
                    </span>
                    <span className="text-muted-dark">•</span>
                    <span className="text-muted-dark">{r.topic}</span>
                    {r.readTime && (
                      <>
                        <span className="text-muted-dark">•</span>
                        <span className="text-muted-dark">{r.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-3xl border border-border-dark bg-surface-dark-panel p-8 text-center text-sm text-muted-dark">
              No matches. Try fewer filters, or search for a simpler term (e.g., "service", "exhibits", "forms").
            </div>
          )}
        </section>

        {/* Popular Questions */}
        <section id="questions" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground-dark">Popular Questions</h2>
              <p className="mt-2 text-muted-dark">
                Quick answers to common concerns.
              </p>
            </div>
            <div className="h-1 w-20 rounded-full bg-brand-orange" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_QUESTIONS.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group relative rounded-2xl border border-border-dark bg-surface-dark-panel p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 flex items-start gap-3"
              >
                {/* Orange glow overlay on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
                
                <span className="text-brand-orange text-xl shrink-0 mt-0.5">?</span>
                <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors relative z-10">
                  {q.question}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Official & Free Resource Directory */}
        <section id="directory" className="mx-auto max-w-6xl px-6 py-10 md:py-14 border-t border-border-dark">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground-dark">
                Official & Free Resource Directory
              </h2>
              <p className="mt-2 text-muted-dark">
                Vetted links to court systems, legal aid, and trusted tools nationwide.
              </p>
            </div>
            <div className="h-1 w-20 rounded-full bg-brand-orange" />
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-2">
              <div className="flex items-center gap-3 rounded-2xl bg-surface-dark px-4 py-3 border border-border-dark/50 focus-within:border-brand-orange/50 transition-colors">
                <span className="text-brand-orange text-lg">🔍</span>
                <input
                  value={externalSearch}
                  onChange={(e) => setExternalSearch(e.target.value)}
                  placeholder="Search by name or domain..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-dark/70 text-foreground-dark"
                />
              </div>
            </div>

            {/* Category and Jurisdiction Filters */}
            <div className="flex flex-wrap gap-2">
              <Select
                label="Category:"
                value={selectedCategory}
                options={["All", "state-directory-court", "state-directory-legal-aid", "national-legal-aid", "child-support", "general-tools"] as const}
                onChange={(v) => setSelectedCategory(v as typeof selectedCategory)}
              />
              <Select
                label="Location:"
                value={selectedJurisdiction}
                options={["All", ...getUniqueJurisdictions()]}
                onChange={setSelectedJurisdiction}
              />
            </div>
          </div>

          {/* State Directory Table */}
          <div id="state-directory" className="mb-12">
            <h3 className="text-xl font-semibold text-foreground-dark mb-4">State-by-State Directory</h3>
            <p className="text-sm text-muted-dark mb-6">
              Every jurisdiction with links to official court self-help and local legal aid.
            </p>
            
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-dark bg-surface-dark-panel">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-dark uppercase tracking-wide">
                        State/Territory
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-dark uppercase tracking-wide">
                        Court Self-Help
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-dark uppercase tracking-wide">
                        Legal Aid
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-dark uppercase tracking-wide">
                        Info
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getAllStateDirectoryEntries()
                      .filter(entry => 
                        selectedJurisdiction === "All" || entry.jurisdiction === selectedJurisdiction
                      )
                      .map((entry) => {
                        const deadlines = getDeadlinesForJurisdiction(entry.jurisdiction);
                        const isExpanded = expandedJurisdiction === entry.jurisdiction;
                        
                        return (
                          <React.Fragment key={entry.jurisdiction}>
                            <tr className="border-b border-border-dark/30 hover:bg-surface-dark transition-colors">
                              <td className="px-4 py-3 text-sm font-semibold text-foreground-dark">
                                {entry.jurisdiction}
                              </td>
                              <td className="px-4 py-3">
                                {entry.court ? (
                                  <a
                                    href={entry.court.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackResourceClick(entry.court!.id, 'state-directory-court')}
                                    className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition"
                                  >
                                    {entry.court.title.replace(/Self-Help|Forms|Courts?/gi, '').trim() || 'Court Resources'}
                                    {isHttp(entry.court.url) && (
                                      <span className="text-xs bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded">
                                        HTTP
                                      </span>
                                    )}
                                    <span>↗</span>
                                  </a>
                                ) : (
                                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                                    Missing
                                  </span>
                                )}
                              </td>
                              <td className="px-4 py-3">
                                {entry.legalAid ? (
                                  <a
                                    href={entry.legalAid.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackResourceClick(entry.legalAid!.id, 'state-directory-legal-aid')}
                                    className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition"
                                  >
                                    {entry.legalAid.title.replace(/Legal Aid|Legal Services|Legal Help/gi, '').trim() || 'Legal Aid'}
                                    <span>↗</span>
                                  </a>
                                ) : (
                                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                                    Missing
                                  </span>
                                )}
                              </td>
                              <td className="px-4 py-3">
                                {deadlines && (
                                  <button
                                    onClick={() => setExpandedJurisdiction(isExpanded ? null : entry.jurisdiction)}
                                    className="text-xs text-brand-orange hover:text-brand-orange/80 transition flex items-center gap-1"
                                  >
                                    {isExpanded ? '▼' : '▶'} Deadlines
                                  </button>
                                )}
                              </td>
                            </tr>
                            {isExpanded && deadlines && (
                              <tr className="border-b border-border-dark/30 bg-surface-dark/50">
                                <td colSpan={4} className="px-4 py-4">
                                  <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-foreground-dark">Key Deadlines for {entry.jurisdiction}</h4>
                                    <div className="grid gap-2 sm:grid-cols-2">
                                      {deadlines.deadlines.map((deadline, idx) => (
                                        <div key={idx} className="rounded-lg border border-border-dark bg-surface-dark-panel p-3">
                                          <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange">
                                              {deadline.days} days
                                            </span>
                                            <span className="text-xs font-semibold text-foreground-dark">
                                              {deadline.name}
                                            </span>
                                          </div>
                                          <p className="text-xs text-muted-dark">{deadline.description}</p>
                                        </div>
                                      ))}
                                    </div>
                                    {deadlines.notes && (
                                      <p className="text-xs text-muted-dark italic">Note: {deadlines.notes}</p>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Other External Resources */}
          {filteredExternalResources.filter(r => 
            !r.category.startsWith('state-directory')
          ).length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground-dark">National Resources & Tools</h3>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredExternalResources
                  .filter(r => !r.category.startsWith('state-directory'))
                  .map((resource) => (
                    <a
                      key={resource.id}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackResourceClick(resource.id, resource.category)}
                      className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 transition-all"
                    >
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity orange-glow-overlay pointer-events-none" />
                      
                      <div className="relative z-10">
                        {/* Authority Badge */}
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          {resource.authority === "official" && (
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                              Official
                            </span>
                          )}
                          {resource.authority === "nonprofit" && (
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                              Nonprofit
                            </span>
                          )}
                          {resource.authority === "private" && (
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                              Third-party
                            </span>
                          )}
                          {isHttp(resource.url) && (
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                              HTTP
                            </span>
                          )}
                          {resource.lastVerified && isLinkStale(resource) && (
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                              Check link
                            </span>
                          )}
                        </div>
                        
                        <h4 className="text-sm font-semibold text-foreground-dark group-hover:text-brand-orange transition-colors mb-2">
                          {resource.title}
                        </h4>
                        
                        {resource.description && (
                          <p className="text-xs text-muted-dark mb-3">{resource.description}</p>
                        )}
                        
                        <div className="space-y-1">
                          <div className="text-xs text-muted-dark font-mono">
                            {extractDomain(resource.url)}
                          </div>
                          {resource.lastVerified && (
                            <div className="text-xs text-muted-dark/70">
                              {formatLastVerified(resource.lastVerified)}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          )}
        </section>

        {/* Standard Disclaimer */}
        <div className="mx-auto max-w-6xl px-6">
          <StandardDisclaimer />
        </div>
      </div>
    </>
  );
}

function Pill({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-xs font-semibold transition",
        "border border-border-dark bg-surface-dark-panel hover:bg-surface-dark text-foreground-dark",
        active && "ring-2 ring-brand-orange/30 border-brand-orange/30 bg-brand-orange/5"
      )}
    >
      {children}
    </button>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex items-center gap-2 rounded-2xl border border-border-dark bg-surface-dark-panel px-3 py-2">
      <span className="text-xs font-semibold text-muted-dark">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-xs font-semibold outline-none text-foreground-dark"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
