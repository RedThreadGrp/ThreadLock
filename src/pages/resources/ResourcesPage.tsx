// file: src/pages/resources/ResourcesPage.tsx
// ThreadLock marketing standards:
// - Tailwind-only styling (no CDN, no inline styles for layout/color/shadow/radius)
// - Uses token utility classes (bg-surface, bg-surface-panel, border-border, text-foreground, text-muted)
// - Brand: navy (#1b3a4d) and orange (#fb7a1e) via token classes (bg-brand-navy, text-brand-orange, etc.)
// - Conservative claims: no "court-ready", no implied legal advice, clear disclaimer posture

import React, { useMemo, useState } from "react";

type Resource = {
  title: string;
  desc: string;
  tag: "Templates" | "Evidence" | "Court Prep" | "Forms" | "Finance" | "Basics";
  intent: "Urgent" | "Start" | "Organize" | "Learn";
  href: string;
};

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const RESOURCES: Resource[] = [
  {
    title: "Hearing Tomorrow Checklist",
    desc: "A practical walkthrough for what to bring, how to label exhibits, and what to avoid saying when you're nervous.",
    tag: "Court Prep",
    intent: "Urgent",
    href: "/resources/hearing-tomorrow",
  },
  {
    title: "Proof of Service Pack",
    desc: "Templates + plain-English guidance so you don't lose on a technicality.",
    tag: "Templates",
    intent: "Start",
    href: "/resources/proof-of-service",
  },
  {
    title: "Evidence Intake: Photos, Texts, Email",
    desc: "How to capture, preserve, and organize records so they're usable later. (Not legal advice. Just hygiene.)",
    tag: "Evidence",
    intent: "Organize",
    href: "/resources/evidence-intake",
  },
  {
    title: "Parenting Plan Builder Guide",
    desc: "A structured way to describe routines, transitions, holidays, and communication—without writing a manifesto.",
    tag: "Basics",
    intent: "Start",
    href: "/resources/parenting-plans",
  },
  {
    title: "Financial Snapshot Worksheet",
    desc: "Income, expenses, accounts, and timelines—so you can answer questions without scrambling.",
    tag: "Finance",
    intent: "Organize",
    href: "/resources/financial-snapshot",
  },
  {
    title: "Official Court Portals Directory",
    desc: "Links to state-provided form sites and official rules. Don't pay for free forms.",
    tag: "Forms",
    intent: "Learn",
    href: "/resources/official-portals",
  },
];

const FAQS = [
  {
    q: "Is ThreadLock a law firm?",
    a: "No. ThreadLock is a legal organization and drafting workspace. It does not provide legal advice, representation, or an attorney–client relationship.",
  },
  {
    q: "Are these resources jurisdiction-specific?",
    a: "Some are general. Anything state-specific is clearly labeled. When in doubt, use the Official Court Portals Directory and verify locally.",
  },
  {
    q: "Can I rely on templates without a lawyer?",
    a: "Templates reduce formatting mistakes and help you organize facts. They don't replace professional judgment or local rules.",
  },
];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [intent, setIntent] = useState<"All" | Resource["intent"]>("All");
  const [tag, setTag] = useState<"All" | Resource["tag"]>("All");

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
        r.desc.toLowerCase().includes(q) ||
        r.tag.toLowerCase().includes(q) ||
        r.intent.toLowerCase().includes(q);
      const matchIntent = intent === "All" ? true : r.intent === intent;
      const matchTag = tag === "All" ? true : r.tag === tag;
      return matchQ && matchIntent && matchTag;
    });
  }, [query, intent, tag]);

  return (
    <div className="min-h-screen bg-surface text-foreground">
      {/* Flash without looking like a court website: subtle grid + brand glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(55%_35%_at_50%_0%,rgba(251,122,30,0.16)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_15%_10%,rgba(27,58,77,0.30)_0%,rgba(0,0,0,0)_72%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border/70 bg-surface/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-navy text-white shadow-sm">
              <span className="text-sm font-bold">TL</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                ThreadLock <span className="text-brand-orange">Resources</span>
              </div>
              <div className="text-xs text-muted">Practical. Fast. Not fluffy.</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a className="hover:text-foreground transition" href="#toolkit">
              Toolkit
            </a>
            <a className="hover:text-foreground transition" href="#library">
              Library
            </a>
            <a className="hover:text-foreground transition" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/signup"
              className="rounded-xl bg-brand-orange px-4 py-2 text-sm font-semibold text-black shadow-sm hover:opacity-90 transition"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-panel px-3 py-1 text-xs font-semibold text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
            Updated continuously — jurisdiction labels included where applicable
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Your case, but run like a{" "}
            <span className="text-brand-orange">system</span>
          </h1>

          <p className="mt-5 text-base text-muted md:text-lg">
            Not a library. Not a court brochure. This is a control panel: checklists, templates,
            and tactical guidance to help you move without stepping on rakes.
          </p>

          {/* Search bar */}
          <div className="mt-8">
            <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface-panel p-2 shadow-sm">
              <div className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand-navy text-white">
                  <span className="text-xs font-bold">↯</span>
                </div>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Quick find: 'proof of service', 'hearing tomorrow', 'evidence texts'…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted/70"
                />
                <div className="hidden select-none items-center gap-1 rounded-lg border border-border bg-surface px-2 py-1 text-xs font-semibold text-muted md:flex">
                  <span>CMD</span>
                  <span className="opacity-70">+</span>
                  <span>K</span>
                </div>
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

            <p className="mt-6 text-xs text-muted">
              Disclaimer: ThreadLock provides organizational tools and general information. It does not provide legal advice or representation.
            </p>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section id="toolkit" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Interactive Toolkit</h2>
            <p className="mt-2 text-muted">
              Tools that feel modern because they are modern—without pretending to be your attorney.
            </p>
          </div>
          <div className="h-1 w-20 rounded-full bg-brand-orange" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <SpotlightCard
            tone="dark"
            title="Courtroom Run-Through"
            desc="Practice how you'll present a timeline, label exhibits, and keep your story coherent under pressure."
            cta="Open simulator"
            href="/app/simulator"
            footnote="Practice, not legal strategy."
          />
          <SpotlightCard
            tone="light"
            title="Guided Draft Builder"
            desc="Structured prompts that help you capture facts consistently and avoid missing critical sections."
            cta="Build a draft"
            href="/app/drafts"
            footnote="Outputs require your review."
          />
          <SpotlightCard
            tone="light"
            title="Volunteer Help Finder"
            desc="When available: connect to unbundled, pro bono, or clinic assistance. You stay in control of what you share."
            cta="Browse options"
            href="/resources/volunteer-help"
            footnote="Availability varies by location."
          />
        </div>
      </section>

      {/* Filters + Library */}
      <section id="library" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Knowledge Library</h2>

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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <a
              key={r.href}
              href={r.href}
              className="group rounded-3xl border border-border bg-surface-panel p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold tracking-tight group-hover:text-foreground transition">
                    {r.title}
                  </div>
                  <div className="mt-2 text-sm text-muted leading-relaxed">{r.desc}</div>
                </div>
                <div className="shrink-0 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
                  {r.tag}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  r.intent === "Urgent" && "bg-brand-orange/20 text-foreground ring-1 ring-brand-orange/30",
                  r.intent !== "Urgent" && "bg-surface text-muted border border-border"
                )}>
                  {r.intent}
                </span>
                <span className="text-xs font-semibold text-muted group-hover:text-foreground transition">
                  Open →
                </span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-border bg-surface-panel p-8 text-center text-sm text-muted">
            No matches. Try fewer filters, or search for a simpler term (e.g., "service", "exhibits", "forms").
          </div>
        )}
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-border bg-surface p-5">
                <summary className="cursor-pointer list-none font-semibold">
                  {f.q}
                </summary>
                <div className="mt-2 text-sm text-muted leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <div className="text-sm font-semibold tracking-tight">
                ThreadLock <span className="text-brand-orange">™</span>
              </div>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                ThreadLock is an organizational technology platform, not a law firm. We do not provide legal advice,
                representation, or an attorney–client relationship.
              </p>
            </div>

            <div className="flex gap-6 text-sm text-muted">
              <a className="hover:text-foreground transition" href="/privacy">Privacy</a>
              <a className="hover:text-foreground transition" href="/terms">Terms</a>
              <a className="hover:text-foreground transition" href="/support">Support</a>
            </div>
          </div>

          <div className="mt-8 text-xs text-muted">© {new Date().getFullYear()} ThreadLock. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function Pill({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-xs font-semibold transition",
        "border border-border bg-surface-panel hover:bg-surface-panel/70",
        active && "ring-2 ring-brand-orange/30 border-brand-orange/30"
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
    <label className="flex items-center gap-2 rounded-2xl border border-border bg-surface-panel px-3 py-2">
      <span className="text-xs font-semibold text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-xs font-semibold outline-none"
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

function SpotlightCard({
  tone,
  title,
  desc,
  cta,
  href,
  footnote,
}: {
  tone: "dark" | "light";
  title: string;
  desc: string;
  cta: string;
  href: string;
  footnote: string;
}) {
  const isDark = tone === "dark";
  return (
    <a
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-border p-7 shadow-sm hover:shadow-md transition",
        isDark ? "bg-brand-navy text-white" : "bg-surface-panel"
      )}
    >
      {/* decorative glow */}
      <div
        className={cn(
          "pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl",
          isDark ? "bg-brand-orange/25" : "bg-brand-orange/18"
        )}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className={cn("text-lg font-semibold tracking-tight", isDark && "text-white")}>{title}</div>
        <div className={cn("mt-2 text-sm leading-relaxed", isDark ? "text-white/75" : "text-muted")}>{desc}</div>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={cn(
              "rounded-2xl px-4 py-2 text-sm font-semibold transition",
              isDark
                ? "bg-white text-black hover:bg-brand-orange hover:text-black"
                : "border border-border bg-surface hover:bg-surface-panel/60"
            )}
          >
            {cta}
          </span>
          <span className={cn("text-xs font-semibold", isDark ? "text-white/70" : "text-muted")}>
            {footnote}
          </span>
        </div>
      </div>
    </a>
  );
}
