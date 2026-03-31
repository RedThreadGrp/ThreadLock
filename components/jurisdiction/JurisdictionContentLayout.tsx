import React, { useState, useEffect, useMemo } from "react";
import JurisdictionHero from "./JurisdictionHero";
import FactBox from "./FactBox";
import JurisdictionFaqSection, {
  FaqItem,
  extractFaqsFromHtml,
} from "./JurisdictionFaqSection";
import { JurisdictionPage } from "@/lib/jurisdiction/content";

/* ── Minimal inline SVG icons ──────────────────────────────────────────── */

function IconBookOpen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconFileText({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconShieldCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconHelpCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

type SvgIcon = React.ComponentType<{ className?: string }>;

const SECTION_DEFS = [
  { key: "overview", label: "Overview", icon: IconBookOpen },
  { key: "who_can_file", label: "Filing & Fees", icon: IconFileText },
  { key: "process", label: "Filing Process", icon: IconClock },
  { key: "evidence_and_prep", label: "Evidence Standards", icon: IconShieldCheck },
  { key: "faq", label: "Common Questions", icon: IconHelpCircle },
] as const;

interface ParsedSection {
  key: string;
  label: string;
  icon: SvgIcon;
  html: string;
  faqs?: FaqItem[];
}

/**
 * Splits bodyHtml into named sections using <!-- SECTION: key --> HTML comment
 * markers that remark-html preserves when sanitize: false is set.
 */
function parseSections(rawHtml: string): ParsedSection[] {
  const regex = /<!--\s*SECTION:\s*(\w+)\s*-->/g;
  const parts: { key: string; matchStart: number; contentStart: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = regex.exec(rawHtml)) !== null) {
    parts.push({
      key: m[1],
      matchStart: m.index,
      contentStart: m.index + m[0].length,
    });
  }
  if (parts.length === 0) return [];

  const sections: ParsedSection[] = [];
  for (let i = 0; i < parts.length; i++) {
    const { key, contentStart } = parts[i];
    const end = i + 1 < parts.length ? parts[i + 1].matchStart : rawHtml.length;
    const html = rawHtml.slice(contentStart, end).trim();
    const def = SECTION_DEFS.find((d) => d.key === key);
    if (!def) continue;

    if (key === "faq") {
      const { faqs } = extractFaqsFromHtml(html);
      sections.push({ key, label: def.label, icon: def.icon, html: "", faqs });
    } else {
      sections.push({ key, label: def.label, icon: def.icon, html });
    }
  }
  return sections;
}

export interface JurisdictionContentLayoutProps {
  page: JurisdictionPage;
  eyebrow: string;
}

/**
 * Two-column jurisdiction page layout.
 *
 * Left  — sticky sidebar: section navigation + Legal Support card.
 * Right — JurisdictionHero + FactBox + one styled panel per content section.
 *
 * The component parses <!-- SECTION: key --> HTML comment markers from
 * page.bodyHtml to split the content into named, visually distinct panels.
 * If no markers are found it falls back to a plain prose + FAQ rendering.
 *
 * Adding new jurisdictions or practice areas requires no changes here —
 * the layout adapts automatically to whatever sections exist in the content.
 */
export default function JurisdictionContentLayout({
  page,
  eyebrow,
}: JurisdictionContentLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const sections = useMemo(() => parseSections(page.bodyHtml), [page.bodyHtml]);
  const hasSections = sections.length > 0;

  useEffect(() => {
    if (!hasSections) return;

    const observers: IntersectionObserver[] = [];
    sections.forEach(({ key }) => {
      const el = document.getElementById(`jx-section-${key}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(key);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections, hasSections]);

  // Fallback for content files without section markers
  const fallbackContent = !hasSections
    ? (() => {
        const { faqs, cleanedHtml } = extractFaqsFromHtml(page.bodyHtml);
        return (
          <>
            <article
              className="prose prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: cleanedHtml }}
            />
            <JurisdictionFaqSection items={faqs} />
          </>
        );
      })()
    : null;

  return (
    <div className="flex gap-6 lg:gap-8 items-start">
      {/* ── Sticky sidebar ─────────────────────────────────────── */}
      <aside className="hidden md:flex flex-col gap-4 w-48 shrink-0 sticky top-24 self-start">
        {hasSections && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-dark mb-3 px-2">
              Jurisdiction Contents
            </p>
            <nav className="flex flex-col gap-0.5">
              {sections.map(({ key, label, icon: Icon }) => {
                const isActive = activeSection === key;
                return (
                  <a
                    key={key}
                    href={`#jx-section-${key}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand-orange text-white"
                        : "text-muted-dark hover:text-foreground-dark hover:bg-surface-dark-panel"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}

        {/* Legal Support card */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-4 text-white">
          <h3 className="font-bold text-sm mb-2">Legal Support</h3>
          <p className="text-xs text-purple-200 leading-relaxed mb-4">
            {page.jurisdiction_name} residents should contact a rights
            organization or legal aid office before filing to understand all
            options.
          </p>
          <a
            href={page.court_url || "/resources/"}
            target={page.court_url ? "_blank" : undefined}
            rel={page.court_url ? "noopener noreferrer" : undefined}
            className="block text-center bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
          >
            Get Local Help
          </a>
        </div>
      </aside>

      {/* ── Main content column ─────────────────────────────────── */}
      <div className="flex-1 min-w-0">
        <JurisdictionHero
          eyebrow={eyebrow}
          title={page.title}
          intro={page.meta_description}
          hideCta
        />

        <FactBox
          courtName={page.court_name || ""}
          filingLimit={page.filing_limit}
          filingFee={page.filing_fee}
          responseDeadline={page.response_deadline}
          hearingTimeline={page.hearing_timeline}
          courtUrl={page.court_url}
          statuteCitation={page.statute_citation}
          lastVerified={page.last_verified || ""}
        />

        {hasSections ? (
          <div className="space-y-6">
            {sections.map(({ key, label, icon: Icon, html, faqs }) => {
              /* ── FAQ section – uses existing ThreadLock Q&A style ── */
              if (key === "faq") {
                return (
                  <section
                    key={key}
                    id={`jx-section-${key}`}
                    className="scroll-mt-28"
                  >
                    <JurisdictionFaqSection items={faqs || []} heading={label} />
                  </section>
                );
              }

              /* ── Evidence Standards – accented panel ── */
              if (key === "evidence_and_prep") {
                return (
                  <section
                    key={key}
                    id={`jx-section-${key}`}
                    className="scroll-mt-28 bg-orange-600/5 border border-orange-500/20 rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 text-brand-orange shrink-0" />
                      <h2 className="text-lg font-bold text-foreground-dark">
                        {label}
                      </h2>
                      <span className="ml-auto px-3 py-1 bg-brand-orange text-white text-xs font-black rounded-full uppercase tracking-widest">
                        Critical
                      </span>
                    </div>
                    <div
                      className="prose prose-invert max-w-none text-sm"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </section>
                );
              }

              /* ── Standard section panel ── */
              return (
                <section
                  key={key}
                  id={`jx-section-${key}`}
                  className="scroll-mt-28 bg-surface-dark-panel border border-border-dark rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-brand-orange shrink-0" />
                    <h2 className="text-lg font-bold text-foreground-dark">
                      {label}
                    </h2>
                  </div>
                  {/* Overview: first paragraph gets a blockquote treatment */}
                  <div
                    className={`prose prose-invert max-w-none text-sm ${
                      key === "overview"
                        ? "[&>p:first-of-type]:border-l-4 [&>p:first-of-type]:border-brand-orange [&>p:first-of-type]:pl-4 [&>p:first-of-type]:italic [&>p:first-of-type]:text-foreground-dark"
                        : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </section>
              );
            })}
          </div>
        ) : (
          fallbackContent
        )}
      </div>
    </div>
  );
}
