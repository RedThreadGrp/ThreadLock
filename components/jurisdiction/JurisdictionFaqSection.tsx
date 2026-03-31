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
 */
export function extractFaqsFromHtml(bodyHtml: string): {
  faqs: FaqItem[];
  cleanedHtml: string;
} {
  const faqs: FaqItem[] = [];
  const qaRegex = /<p>Q:\s*(.*?)<\/p>\s*<p>A:\s*([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = qaRegex.exec(bodyHtml)) !== null) {
    faqs.push({
      q: match[1].trim(),
      a: match[2].replace(/<[^>]+>/g, "").trim(),
    });
  }
  const cleanedHtml = bodyHtml
    .replace(/<p>Q:\s*.*?<\/p>\s*<p>A:\s*[\s\S]*?<\/p>/gi, "")
    .replace(/(<br\s*\/?>|\s)+$/, "")
    .trim();
  return { faqs, cleanedHtml };
}
