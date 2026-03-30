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

const TITLE = "Landlord-Tenant Law by State — Filing Guides & Dispute Procedures";
const META_DESCRIPTION =
  "State-by-state landlord-tenant guides covering evictions, security deposits, habitability, and court procedures. Find your state and organize your evidence with ThreadLock.";
const CANONICAL = "https://threadlock.ai/landlord-tenant/";

export default function LandlordTenantNational({ pages }: Props) {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    hasPart: pages.map((p) => ({
      "@type": "WebPage",
      name: p.title,
      url: `https://threadlock.ai/states/${p.jurisdiction_slug}/landlord-tenant/`,
    })),
  };

  return (
    <JurisdictionShell
      title={TITLE}
      metaDescription={META_DESCRIPTION}
      canonicalUrl={CANONICAL}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Landlord-Tenant", href: "/landlord-tenant/" },
      ]}
      schemaBlocks={[collectionSchema]}
    >
      <JurisdictionHero
        eyebrow="National Guide"
        title={TITLE}
        intro="Landlord-tenant law varies by state. Find your state's guide to understand notice requirements, eviction procedures, and tenant rights."
      />

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          All States — Landlord-Tenant Guides
        </h2>
        <p className="text-slate-600 text-sm">
          {pages.length > 0
            ? `${pages.length} state guides available.`
            : "State guides are being added. Check back soon or browse by state."}
        </p>
      </div>

      {pages.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
          {pages.map((p) => (
            <Link
              key={p.jurisdiction_slug}
              href={`/states/${p.jurisdiction_slug}/landlord-tenant/`}
              className="block bg-white border border-slate-200 hover:border-[#fb7a1e] rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#fb7a1e] transition-all hover:shadow-sm"
            >
              {p.jurisdiction_name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="mb-8 p-6 bg-slate-50 rounded-2xl text-center text-slate-500 text-sm">
          State guides are being added. In the meantime,{" "}
          <Link href="/states/" className="text-[#fb7a1e] hover:underline">
            browse all states
          </Link>{" "}
          for available guides.
        </div>
      )}

      <JurisdictionCTA />
    </JurisdictionShell>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = getLeafPagesForPractice("us", "landlord-tenant");
  return { props: { pages } };
};
