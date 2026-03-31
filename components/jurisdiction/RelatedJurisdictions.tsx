import React from "react";
import Link from "next/link";

export interface RelatedJurisdictionsProps {
  currentSlug: string;
  practiceArea: string;
  country: "us" | "ca" | "au" | "uk";
  neighborSlugs: string[];
}

function toDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function RelatedJurisdictions({
  currentSlug,
  practiceArea,
  country,
  neighborSlugs,
}: RelatedJurisdictionsProps) {
  const basePathMap: Record<string, string> = {
    ca: "/ca",
    au: "/au",
    uk: "/uk",
  };
  const basePath = basePathMap[country] ?? "/states";
  const nationalPath = country === "ca" ? null : country === "us" ? `/${practiceArea}/` : null;

  return (
    <div className="mt-10 pt-8 border-t border-slate-200">
      <h2 className="text-lg font-bold text-slate-900 mb-4">Related Jurisdictions</h2>
      <div className="flex flex-wrap gap-3">
        <Link
          href={`${basePath}/${currentSlug}/`}
          className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          {toDisplayName(currentSlug)} Court Hub
        </Link>
        {nationalPath && (
          <Link
            href={nationalPath}
            className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            All States: {toDisplayName(practiceArea)} →
          </Link>
        )}
        {neighborSlugs.map((slug) => (
          <Link
            key={slug}
            href={`${basePath}/${slug}/${practiceArea}/`}
            className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            {toDisplayName(slug)}
          </Link>
        ))}
      </div>
    </div>
  );
}

