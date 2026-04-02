import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import JurisdictionShell from "@/components/jurisdiction/JurisdictionShell";
import JurisdictionHero from "@/components/jurisdiction/JurisdictionHero";
import JurisdictionBreadcrumb from "@/components/jurisdiction/JurisdictionBreadcrumb";
import PracticeAreaCards from "@/components/jurisdiction/PracticeAreaCards";
import JurisdictionCTA from "@/components/jurisdiction/JurisdictionCTA";
import {
  getAllJurisdictionSlugs,
  getHubMeta,
  HubMeta,
} from "@/lib/jurisdiction/content";

interface Props {
  hub: HubMeta;
  province: string;
}

export default function ProvinceHub({ hub, province }: Props) {
  const canonicalUrl = `https://threadlock.ai/ca/${province}`;
  const isQuebec = province === "quebec";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: hub.title,
    description: hub.meta_description,
    url: canonicalUrl,
  };

  return (
    <JurisdictionShell
      title={hub.title}
      metaDescription={hub.meta_description}
      canonicalUrl={canonicalUrl}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Canada", href: "/ca/" },
        { label: hub.jurisdiction_name, href: `/ca/${province}/` },
      ]}
      schemaBlocks={[webPageSchema]}
    >
      <JurisdictionBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Canada", href: "/ca/" },
          { label: hub.jurisdiction_name, href: `/ca/${province}/` },
        ]}
      />
      <JurisdictionHero
        eyebrow={`${hub.jurisdiction_name} · Court Guides`}
        title={hub.title}
        intro={hub.meta_description}
        hideCta
      />

      {isQuebec && (
        <div className="bg-surface-dark-panel border border-blue-500/30 rounded-xl px-5 py-4 mb-6 text-sm text-blue-300">
          <strong className="text-blue-200">Note on Quebec Civil Law:</strong> Quebec operates under the Civil Code of
          Québec, a civil law system distinct from the common law system used in other
          Canadian provinces. Procedures and terminology may differ significantly.
        </div>
      )}

      <h2 className="text-xl font-bold text-foreground-dark mb-4">
        Choose a Practice Area
      </h2>
      <PracticeAreaCards
        jurisdictionPath={`/ca/${province}`}
        country="ca"
      />

      <JurisdictionCTA />
    </JurisdictionShell>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllJurisdictionSlugs("ca");
  return {
    paths: slugs.map((province) => ({ params: { province } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const province = params?.province as string;
  const hub = getHubMeta("ca", province);

  if (!hub) {
    return { notFound: true };
  }

  return { props: { hub, province } };
};
