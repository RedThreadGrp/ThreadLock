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
  region: string;
}

export default function AuRegionHub({ hub, region }: Props) {
  const canonicalUrl = `https://threadlock.ai/au/${region}/`;

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
        { label: "Australia", href: "/au/" },
        { label: hub.jurisdiction_name, href: `/au/${region}/` },
      ]}
      schemaBlocks={[webPageSchema]}
    >
      <JurisdictionBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Australia", href: "/au/" },
          { label: hub.jurisdiction_name, href: `/au/${region}/` },
        ]}
      />
      <JurisdictionHero
        eyebrow={`${hub.jurisdiction_name} · Court Guides`}
        title={hub.title}
        intro={hub.meta_description}
      />

      <h2 className="text-xl font-bold text-slate-900 mb-4">Choose a Practice Area</h2>
      <PracticeAreaCards jurisdictionPath={`/au/${region}`} country="au" />

      <JurisdictionCTA />
    </JurisdictionShell>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllJurisdictionSlugs("au");
  return {
    paths: slugs.map((region) => ({ params: { region } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const region = params?.region as string;
  const hub = getHubMeta("au", region);
  if (!hub) return { notFound: true };
  return { props: { hub, region } };
};
