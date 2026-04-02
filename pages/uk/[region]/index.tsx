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

export default function UkRegionHub({ hub, region }: Props) {
  const canonicalUrl = `https://threadlock.ai/uk/${region}`;

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
        { label: "United Kingdom", href: "/uk/" },
        { label: hub.jurisdiction_name, href: `/uk/${region}/` },
      ]}
      schemaBlocks={[webPageSchema]}
    >
      <JurisdictionBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "United Kingdom", href: "/uk/" },
          { label: hub.jurisdiction_name, href: `/uk/${region}/` },
        ]}
      />
      <JurisdictionHero
        eyebrow={`${hub.jurisdiction_name} · Court Guides`}
        title={hub.title}
        intro={hub.meta_description}
        hideCta
      />

      <h2 className="text-xl font-bold text-foreground-dark mb-4">Choose a Practice Area</h2>
      <PracticeAreaCards jurisdictionPath={`/uk/${region}`} country="uk" />

      <JurisdictionCTA />
    </JurisdictionShell>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllJurisdictionSlugs("uk");
  return {
    paths: slugs.map((region) => ({ params: { region } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const region = params?.region as string;
  const hub = getHubMeta("uk", region);
  if (!hub) return { notFound: true };
  return { props: { hub, region } };
};
