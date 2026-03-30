import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import JurisdictionShell from "@/components/jurisdiction/JurisdictionShell";
import JurisdictionHero from "@/components/jurisdiction/JurisdictionHero";
import JurisdictionCTA from "@/components/jurisdiction/JurisdictionCTA";
import { getLeafPagesForPractice, JurisdictionFrontmatter } from "@/lib/jurisdiction/content";

interface Props {
  pages: JurisdictionFrontmatter[];
}

const TITLE = "Small Claims Court by State — Filing Limits, Fees & Guides";
const META_DESCRIPTION =
  "Compare small claims court filing limits, fees, and deadlines across all 50 US states and DC. Find your state guide and prepare your case with ThreadLock.";
const CANONICAL = "https://threadlock.ai/small-claims/";

export default function SmallClaimsNational({ pages }: Props) {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    hasPart: pages.map((p) => ({
      "@type": "WebPage",
      name: p.title,
      url: `https://threadlock.ai/states/${p.jurisdiction_slug}/small-claims/`,
    })),
  };

  return (
    <JurisdictionShell
      title={TITLE}
      metaDescription={META_DESCRIPTION}
      canonicalUrl={CANONICAL}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Small Claims", href: "/small-claims/" },
      ]}
      schemaBlocks={[collectionSchema]}
    >
      <JurisdictionHero
        eyebrow="National Guide"
        title={TITLE}
        intro="Every US state has its own small claims court with different filing limits, fees, and procedures. Find your state's guide below."
      />

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          All States — Small Claims Filing Limits
        </h2>
        <p className="text-slate-600 text-sm">
          {pages.length} state guides available. Click any state to see full details.
        </p>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left py-3 px-4 font-semibold text-slate-700">State</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Filing Limit</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Filing Fee</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700"></th>
            </tr>
          </thead>
          <tbody>
            {pages.map((p) => (
              <tr
                key={p.jurisdiction_slug}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
              >
                <td className="py-3 px-4 font-medium text-slate-800">
                  {p.jurisdiction_name}
                </td>
                <td className="py-3 px-4 text-slate-600">{p.filing_limit || "—"}</td>
                <td className="py-3 px-4 text-slate-600">{p.filing_fee || "—"}</td>
                <td className="py-3 px-4">
                  <Link
                    href={`/states/${p.jurisdiction_slug}/small-claims/`}
                    className="text-[#fb7a1e] font-semibold hover:underline text-xs"
                  >
                    View Guide →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <JurisdictionCTA />
    </JurisdictionShell>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = getLeafPagesForPractice("us", "small-claims");
  return { props: { pages } };
};
