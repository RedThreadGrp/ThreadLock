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
  state: string;
}

export default function StateHub({ hub, state }: Props) {
  const canonicalUrl = `https://threadlock.ai/states/${state}`;
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
        { label: "States", href: "/states/" },
        { label: hub.jurisdiction_name, href: `/states/${state}/` },
      ]}
      schemaBlocks={[webPageSchema]}
    >
      <JurisdictionBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "States", href: "/states/" },
          { label: hub.jurisdiction_name, href: `/states/${state}/` },
        ]}
      />
      <JurisdictionHero
        eyebrow={`${hub.jurisdiction_name} · Court Guides`}
        title={hub.title}
        intro={hub.meta_description}
        hideCta
      />

      <h2 className="text-xl font-bold text-foreground-dark mb-4">
        Choose a Practice Area
      </h2>
      <PracticeAreaCards
        jurisdictionPath={`/states/${state}`}
        country="us"
      />

      <JurisdictionCTA />
    </JurisdictionShell>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllJurisdictionSlugs("us");
  return {
    paths: slugs.map((state) => ({ params: { state } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const state = params?.state as string;
  const hub = getHubMeta("us", state);

  if (!hub) {
    return { notFound: true };
  }

  return { props: { hub, state } };
};
