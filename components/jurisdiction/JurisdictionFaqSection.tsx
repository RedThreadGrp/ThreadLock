import React from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface JurisdictionFaqSectionProps {
  items: FaqItem[];
  heading?: string;
}

export default function JurisdictionFaqSection({
  items,
  heading = "Frequently Asked Questions",
}: JurisdictionFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-surface-dark-panel border border-border-dark rounded-2xl p-6 mb-8">
      <h2 className="text-lg font-bold text-foreground-dark mb-5">{heading}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-surface-dark border border-border-dark/70 rounded-xl px-4 py-4"
          >
            <p className="text-sm font-semibold text-foreground-dark mb-3">{item.q}</p>
            <p className="text-sm text-muted-dark leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Extracts Q: / A: FAQ pairs from rendered body HTML and returns:
 *  - faqs: parsed items
 *  - cleanedHtml: the original HTML with the FAQ paragraphs removed
 *
 * Handles two markdown formats:
 *  1. Separate paragraphs (blank line between Q and A):
 *       <p>Q: ...</p>\n<p>A: ...</p>
 *  2. Same paragraph (no blank line between Q and A, remark-html merges lines):
 *       <p>Q: ...\nA: ...</p>
 */
export function extractFaqsFromHtml(bodyHtml: string): {
  faqs: FaqItem[];
  cleanedHtml: string;
} {
  const faqs: FaqItem[] = [];
  let cleanedHtml = bodyHtml;

  // Case 1: Q and A in separate <p> tags (blank line between Q and A in markdown)
  const separateTagsRegex = /<p>Q:\s*(.*?)<\/p>\s*<p>A:\s*([\s\S]*?)<\/p>/gi;
  cleanedHtml = cleanedHtml.replace(separateTagsRegex, (_, q, a) => {
    faqs.push({ q: q.trim(), a: a.replace(/<[^>]+>/g, "").trim() });
    return "";
  });

  // Case 2: Q and A in the same <p> tag (no blank line between Q and A in
  // markdown — remark-html renders consecutive lines as one paragraph with a
  // newline between them)
  const sameTagRegex = /<p>Q:\s*(.*?)\s*\nA:\s*([\s\S]*?)<\/p>/gi;
  cleanedHtml = cleanedHtml.replace(sameTagRegex, (_, q, a) => {
    faqs.push({ q: q.trim(), a: a.replace(/<[^>]+>/g, "").trim() });
    return "";
  });

  cleanedHtml = cleanedHtml
    .replace(/(<br\s*\/?>|\s)+$/, "")
    .trim();
  return { faqs, cleanedHtml };
}
