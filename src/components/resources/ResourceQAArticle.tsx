import * as React from "react";
import type {
  ResourceQAContent,
  ResourceBodyBlock,
  ResourceSection,
  ResourceFAQ,
  ResourceSource,
  CalloutKind,
} from "@/src/content/resources/types";

type Props = {
  content: ResourceQAContent;
};

function cx(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

function slugifyId(id: string) {
  // trust but verify: keep ids URL-safe; do not "invent" ids
  return id
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/\-+/g, "-")
    .replace(/^\-+|\-+$/g, "");
}

function CalloutStyles(kind: CalloutKind) {
  switch (kind) {
    case "warning":
      return {
        wrapper:
          "border border-amber-300/30 bg-amber-500/10 text-amber-50/90",
        title: "text-amber-200",
      };
    case "tip":
      return {
        wrapper:
          "border border-emerald-300/25 bg-emerald-500/10 text-emerald-50/90",
        title: "text-emerald-200",
      };
    case "note":
    default:
      return {
        wrapper:
          "border border-sky-300/25 bg-sky-500/10 text-sky-50/90",
        title: "text-sky-200",
      };
  }
}

function ShortAnswerCard({
  label = "Short answer",
  text,
}: {
  label?: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-semibold uppercase tracking-wide text-white/70">
        {label}
      </div>
      <p className="mt-2 text-sm leading-6 text-white/90">{text}</p>
    </div>
  );
}

function Toc({
  sections,
  hasFaqs,
  hasSources,
}: {
  sections: ResourceSection[];
  hasFaqs: boolean;
  hasSources: boolean;
}) {
  return (
    <nav aria-label="On this page" className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white/90">On this page</div>
      <ul className="mt-3 space-y-2 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${slugifyId(s.id)}`} className="text-white/75 hover:text-white underline decoration-white/20 hover:decoration-white/50 underline-offset-4">
              {s.heading}
            </a>
          </li>
        ))}
        {hasFaqs && (
          <li>
            <a href="#faqs" className="text-white/75 hover:text-white underline decoration-white/20 hover:decoration-white/50 underline-offset-4">
              FAQs
            </a>
          </li>
        )}
        {hasSources && (
          <li>
            <a href="#sources" className="text-white/75 hover:text-white underline decoration-white/20 hover:decoration-white/50 underline-offset-4">
              Sources
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

function ResourceTable({
  caption,
  columns,
  rows,
  footnote,
}: {
  caption?: string;
  columns: string[];
  rows: string[][];
  footnote?: string;
}) {
  // Basic validation: keep the renderer honest
  const colCount = columns.length;
  const badRow = rows.find((r) => r.length !== colCount);
  if (badRow) {
    console.error(
      "[ResourceQAArticle] Table row length mismatch. columns:",
      colCount,
      "row:",
      badRow
    );
  }

  return (
    <figure className="mt-4">
      {caption && (
        <figcaption className="mb-2 text-sm font-medium text-white/80">
          {caption}
        </figcaption>
      )}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
          <thead className="bg-white/5">
            <tr>
              {columns.map((c, idx) => (
                <th key={idx} scope="col" className="px-4 py-3 text-xs font-semibold tracking-wide text-white/80 uppercase border-b border-white/10">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className={cx(idx % 2 === 0 && "bg-white/[0.02]")}>
                {r.map((cell, cidx) => (
                  <td key={cidx} className="px-4 py-3 text-sm text-white/85 border-b border-white/5 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p className="mt-2 text-xs text-white/60 leading-5">{footnote}</p>
      )}
    </figure>
  );
}

function renderBlock(block: ResourceBodyBlock, key: React.Key) {
  switch (block.type) {
    case "p":
      return (
        <p key={key} className="text-sm leading-6 text-white/85">
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul key={key} className="list-disc pl-5 space-y-2 text-sm text-white/85">
          {block.items.map((it, i) => (
            <li key={i} className="leading-6">
              {it}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol key={key} className="list-decimal pl-5 space-y-2 text-sm text-white/85">
          {block.items.map((it, i) => (
            <li key={i} className="leading-6">
              {it}
            </li>
          ))}
        </ol>
      );

    case "callout": {
      const styles = CalloutStyles(block.kind);
      const role = block.kind === "warning" ? "alert" : block.kind === "note" ? "note" : "status";
      return (
        <aside key={key} className={cx("rounded-2xl p-4", styles.wrapper)} role={role}>
          {(block.title || block.kind) && (
            <div className={cx("text-xs font-semibold uppercase tracking-wide", styles.title)}>
              {block.title ?? block.kind}
            </div>
          )}
          <p className="mt-2 text-sm leading-6">{block.text}</p>
        </aside>
      );
    }

    case "table":
      return (
        <ResourceTable key={key} caption={block.caption} columns={block.columns} rows={block.rows} footnote={block.footnote} />
      );

    default:
      return null;
  }
}

function Section({ section }: { section: ResourceSection }) {
  const anchor = slugifyId(section.id);
  return (
    <section id={anchor} className="scroll-mt-24" data-testid="resource.block.section">
      <h2 className="text-lg font-semibold text-white/95">{section.heading}</h2>
      <div className="mt-3 space-y-4">
        {section.body.map((b, idx) => renderBlock(b, `${section.id}-${idx}`))}
      </div>
    </section>
  );
}

function Faqs({
  heading = "Frequently asked questions",
  items,
}: {
  heading?: string;
  items: ResourceFAQ[];
}) {
  return (
    <section id="faqs" className="scroll-mt-24">
      <h2 className="text-lg font-semibold text-white/95">{heading}</h2>
      <div className="mt-3 space-y-2">
        {items.map((f) => {
          const fid = slugifyId(f.id);
          const btnId = `faq-btn-${fid}`;
          const panelId = `faq-panel-${fid}`;
          return (
            <details key={f.id} id={fid} className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <summary id={btnId} className="cursor-pointer list-none text-sm font-semibold text-white/90 outline-none">
                <span className="mr-2 inline-block align-middle text-orange-300">Q</span>
                {f.q}
                <span className="float-right text-white/50 group-open:text-white/70">
                  ▾
                </span>
              </summary>
              <div id={panelId} aria-labelledby={btnId} className="mt-3 text-sm leading-6 text-white/85">
                {f.a}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

function Sources({
  heading = "Sources",
  items,
}: {
  heading?: string;
  items: ResourceSource[];
}) {
  return (
    <section id="sources" className="scroll-mt-24">
      <h2 className="text-lg font-semibold text-white/95">{heading}</h2>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {/* Note: Using name+index as key is safe here since sources are static content that won't be reordered */}
        {items.map((s, idx) => (
          <li key={`${s.name}-${idx}`} className="leading-6">
            {s.href ? (
              <a href={s.href} target="_blank" rel="noreferrer" className="underline decoration-white/20 hover:decoration-white/50 underline-offset-4">
                {s.name}
              </a>
            ) : (
              <span>{s.name}</span>
            )}
            {s.note ? <span className="text-white/60"> — {s.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ResourceQAArticle({ content }: Props) {
  // ============================================================================
  // HARD CONTRACT CHECK: Enforce v2 schema
  // ============================================================================
  // The v2 renderer MUST receive structured content with sections.
  // This prevents "wrapper-only" implementations that silently fall back to legacy blobs.
  
  const hasValidSections = content.sections && content.sections.length > 0;
  
  if (!hasValidSections) {
    // In development: Show explicit error to developers
    if (process.env.NODE_ENV !== "production") {
      return (
        <main className="mx-auto w-full max-w-5xl px-4 pb-16">
          <div className="rounded-2xl border-2 border-red-500 bg-red-500/10 p-6">
            <h1 className="text-xl font-bold text-red-400">Developer Error: Invalid v2 Content</h1>
            <p className="mt-2 text-sm text-red-300">
              The v2 renderer received content without valid sections[].
            </p>
            <p className="mt-2 text-sm text-red-300">
              This content must be migrated to the v2 schema with structured blocks.
            </p>
            <pre className="mt-4 overflow-auto rounded bg-black/30 p-4 text-xs text-red-200">
              {JSON.stringify({ 
                slug: content.slug, 
                hasSections: !!content.sections,
                sectionsLength: content.sections?.length || 0 
              }, null, 2)}
            </pre>
          </div>
        </main>
      );
    }
    
    // In production: Show clean "being updated" message (NOT legacy content)
    return (
      <main className="mx-auto w-full max-w-5xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h1 className="text-xl font-semibold text-white/95 mb-2">
            This resource is being updated
          </h1>
          <p className="text-sm text-white/70">
            We're migrating this content to our new format. Please check back soon.
          </p>
        </div>
      </main>
    );
  }
  
  // ============================================================================
  // Valid v2 content: Render normally
  // ============================================================================
  
  const hasFaqs = Boolean(content.faqs?.items?.length);
  const hasSources = Boolean(content.sources?.items?.length);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-white/95">
          {content.hero.h1}
        </h1>
        {content.hero.subhead ? (
          <p className="text-sm leading-6 text-white/70">{content.hero.subhead}</p>
        ) : null}
      </header>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          <ShortAnswerCard label={content.shortAnswer.label} text={content.shortAnswer.text} />
          <Toc sections={content.sections} hasFaqs={hasFaqs} hasSources={hasSources} />
        </div>

        <article className="lg:col-span-8 space-y-10">
          {content.sections.map((s) => (
            <Section key={s.id} section={s} />
          ))}

          {hasFaqs ? (
            <Faqs heading={content.faqs?.heading} items={content.faqs!.items} />
          ) : null}

          {hasSources ? (
            <Sources heading={content.sources?.heading} items={content.sources!.items} />
          ) : null}
        </article>
      </div>
    </main>
  );
}
