import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import JurisdictionShell from "@/components/jurisdiction/JurisdictionShell";
import JurisdictionHero from "@/components/jurisdiction/JurisdictionHero";
import JurisdictionCTA from "@/components/jurisdiction/JurisdictionCTA";
import { getAllHubMetas, getRootHubMeta, HubMeta } from "@/lib/jurisdiction/content";

interface Props {
  hubs: HubMeta[];
  rootMeta: HubMeta | null;
}

export default function AuIndex({ hubs, rootMeta }: Props) {
  const title = rootMeta?.title || "Australian Court Filing Guides: Small Claims, Family Law & Tenancy";
  const metaDescription =
    rootMeta?.meta_description ||
    "State and territory court filing guides for self-represented litigants in Australia.";
  const canonicalUrl = "https://threadlock.ai/au/";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: metaDescription,
    url: canonicalUrl,
    hasPart: hubs.map((h) => ({
      "@type": "WebPage",
      name: h.title,
      url: `https://threadlock.ai/au/${h.jurisdiction_slug}/`,
    })),
  };

  const sorted = [...hubs].sort((a, b) =>
    a.jurisdiction_name.localeCompare(b.jurisdiction_name)
  );

  return (
    <JurisdictionShell
      title={title}
      metaDescription={metaDescription}
      canonicalUrl={canonicalUrl}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Australia", href: "/au/" },
      ]}
      schemaBlocks={[collectionSchema]}
    >
      <JurisdictionHero
        eyebrow="Australian Jurisdiction Guides"
        title={title}
        intro="Find court filing guides for small claims, family law, and tenancy disputes across all Australian states and territories."
      />

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">All States &amp; Territories</h2>
        <p className="text-slate-600 text-sm">Select your state or territory to see available court guides.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
        {sorted.map((hub) => (
          <Link
            key={hub.jurisdiction_slug}
            href={`/au/${hub.jurisdiction_slug}/`}
            className="block bg-white border border-slate-200 hover:border-[#fb7a1e] rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#fb7a1e] transition-all hover:shadow-sm"
          >
            {hub.jurisdiction_name}
          </Link>
        ))}
      </div>

      <JurisdictionCTA />
    </JurisdictionShell>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const hubs = getAllHubMetas("au");
  const rootMeta = getRootHubMeta("au");
  return { props: { hubs, rootMeta } };
};
