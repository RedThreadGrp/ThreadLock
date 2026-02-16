// src/components/KnowledgeSpotlightSection.tsx
// ThreadLock marketing standards:
// - Tailwind-only styling (no inline styles for layout/color/shadow/radius)
// - Uses brand colors: navy (#1b3a4d) and orange (#fb7a1e)
// - Conservative claims: no "court-ready", clear disclaimer posture
// - Matches resources page dark theme

import React from "react";
import Link from "next/link";

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

interface PillarCardProps {
  title: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  title,
  highlights,
  ctaText,
  ctaLink,
}) => (
  <Link
    href={ctaLink}
    aria-label={`${title}: ${ctaText}`}
    className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 flex flex-col"
  >
    {/* Orange glow overlay on hover */}
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 orange-glow-overlay pointer-events-none" />
    
    <div className="relative z-10 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-foreground-dark group-hover:text-brand-orange transition-colors mb-4">
        {title}
      </h3>
      <ul className="space-y-3 mb-6 flex-grow">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-brand-orange mr-2 mt-1 text-lg">•</span>
            <span className="text-muted-dark leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
      <span className="inline-flex items-center justify-center bg-brand-orange text-white font-semibold px-6 py-3 rounded-lg group-hover:bg-brand-navy transition-colors duration-200">
        {ctaText}
        <ChevronRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </div>
  </Link>
);

const KnowledgeSpotlightSection: React.FC = () => {
  return (
    <section
      id="knowledge-spotlight"
      className="py-20 md:py-28 bg-surface-dark"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Expert Resources for Your Case
          </h2>
          <p className="text-lg md:text-xl text-muted-dark leading-relaxed">
            Moving through family court requires more than tools. It requires knowledge. 
            Access our free libraries designed to bridge the gap between your evidence 
            and the courtroom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PillarCard
            title="The Evidence Wiki"
            highlights={[
              "Definitions for Contemporaneous Notes",
              "Hearsay Exceptions",
              "Chain of Custody (Digital Evidence)",
            ]}
            ctaText="Browse the Wiki"
            ctaLink="/resources/wiki"
          />

          <PillarCard
            title="Case Blueprints"
            highlights={[
              "Step by step documentation recipes",
              "Missed visitation tracking",
              "Expense documentation",
              "Conflict logging",
            ]}
            ctaText="View Blueprints"
            ctaLink="/resources/blueprints"
          />

          <PillarCard
            title="Preparation Guides"
            highlights={[
              "Jurisdictional PDF checklists",
              "Before You Act guides",
              "Self represented litigant preparation",
            ]}
            ctaText="Get Free Guides"
            ctaLink="/resources/guides"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSpotlightSection;
