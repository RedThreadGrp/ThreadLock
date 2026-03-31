import React from "react";
import Link from "next/link";

export interface PracticeAreaCardsProps {
  jurisdictionPath: string;
  country: "us" | "ca" | "au" | "uk";
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

const AU_PRACTICES = [
  {
    slug: "small-claims",
    name: "Small Claims / Tribunal",
    description: "File and defend civil claims at your state or territory tribunal.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    description: "Navigate separation, divorce, parenting orders, and property matters.",
  },
  {
    slug: "tenancy",
    name: "Tenancy Disputes",
    description: "Resolve disputes over rent, bonds, repairs, and termination.",
  },
];

const UK_PRACTICES = [
  {
    slug: "small-claims",
    name: "Small Claims Court",
    description: "Make or defend money claims up to the small claims limit.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    description: "Navigate divorce, financial orders, and child arrangements.",
  },
  {
    slug: "housing",
    name: "Housing Disputes",
    description: "Resolve disputes over tenancy, deposits, disrepair, and possession.",
  },
];

export default function PracticeAreaCards({
  jurisdictionPath,
  country,
}: PracticeAreaCardsProps) {
  const practiceMap: Record<string, typeof US_PRACTICES> = {
    us: US_PRACTICES,
    ca: CA_PRACTICES,
    au: AU_PRACTICES,
    uk: UK_PRACTICES,
  };
  const practices = practiceMap[country] ?? US_PRACTICES;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {practices.map((practice) => (
        <Link
          key={practice.slug}
          href={`${jurisdictionPath}/${practice.slug}/`}
          className="group relative block bg-surface-dark-panel border border-border-dark hover:border-brand-orange/50 rounded-2xl p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-base font-bold text-foreground-dark group-hover:text-brand-orange transition-colors mb-2">
              {practice.name}
            </h3>
            <p className="text-sm text-muted-dark mb-3 leading-relaxed">
              {practice.description}
            </p>
            <span className="text-sm font-semibold text-brand-orange">View Guide →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
