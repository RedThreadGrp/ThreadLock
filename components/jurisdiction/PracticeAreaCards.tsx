import React from "react";
import Link from "next/link";

export interface PracticeAreaCardsProps {
  jurisdictionPath: string;
  country: "us" | "ca";
}

const US_PRACTICES = [
  {
    slug: "small-claims",
    name: "Small Claims Court",
    description: "File and defend claims up to the state limit without an attorney.",
  },
  {
    slug: "family-court",
    name: "Family Court",
    description: "Navigate custody, divorce, support, and other family law matters.",
  },
  {
    slug: "landlord-tenant",
    name: "Landlord-Tenant",
    description: "Resolve disputes over rent, deposits, habitability, and evictions.",
  },
];

const CA_PRACTICES = [
  {
    slug: "small-claims",
    name: "Small Claims Court",
    description: "File and defend claims up to the provincial limit without a lawyer.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    description: "Navigate separation, divorce, custody, and support matters.",
  },
  {
    slug: "landlord-tenant",
    name: "Landlord-Tenant",
    description: "Resolve disputes over rent, deposits, maintenance, and evictions.",
  },
];

export default function PracticeAreaCards({
  jurisdictionPath,
  country,
}: PracticeAreaCardsProps) {
  const practices = country === "ca" ? CA_PRACTICES : US_PRACTICES;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {practices.map((practice) => (
        <Link
          key={practice.slug}
          href={`${jurisdictionPath}/${practice.slug}/`}
          className="group block bg-white border border-slate-200 hover:border-[#fb7a1e] rounded-2xl p-5 transition-all hover:shadow-md"
        >
          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#fb7a1e] transition-colors mb-2">
            {practice.name}
          </h3>
          <p className="text-sm text-slate-600 mb-3 leading-relaxed">
            {practice.description}
          </p>
          <span className="text-sm font-semibold text-[#fb7a1e]">View Guide →</span>
        </Link>
      ))}
    </div>
  );
}
