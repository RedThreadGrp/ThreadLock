// src/components/KnowledgeSpotlightSection.tsx
// ThreadLock marketing standards:
// - Tailwind-only styling (no inline styles for layout/color/shadow/radius)
// - Uses brand colors: navy (#1b3a4d) and orange (#fb7a1e)
// - Conservative claims: no "court-ready", clear disclaimer posture

import React from "react";
import Link from "next/link";

// Icon components
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const ClipboardListIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </svg>
);

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
  icon: React.ReactNode;
  title: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  icon,
  title,
  highlights,
  ctaText,
  ctaLink,
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center rounded-xl">
      <div className="text-brand-navy">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
    <ul className="space-y-3 mb-6 flex-grow">
      {highlights.map((highlight, index) => (
        <li key={index} className="flex items-start">
          <span className="text-brand-orange mr-2 mt-1 text-lg">•</span>
          <span className="text-slate-600 leading-relaxed">{highlight}</span>
        </li>
      ))}
    </ul>
    <Link
      href={ctaLink}
      className="inline-flex items-center justify-center bg-brand-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 group"
    >
      {ctaText}
      <ChevronRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  </div>
);

const KnowledgeSpotlightSection: React.FC = () => {
  return (
    <section
      id="knowledge-spotlight"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Expert Resources for Your Case
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            Moving through family court requires more than tools. It requires knowledge. 
            Access our free libraries designed to bridge the gap between your evidence 
            and the courtroom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PillarCard
            icon={<BookOpenIcon className="w-8 h-8" />}
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
            icon={<ClipboardListIcon className="w-8 h-8" />}
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
            icon={<FileTextIcon className="w-8 h-8" />}
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
