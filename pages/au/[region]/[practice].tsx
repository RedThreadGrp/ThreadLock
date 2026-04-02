import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import JurisdictionShell from "@/components/jurisdiction/JurisdictionShell";
import JurisdictionBreadcrumb from "@/components/jurisdiction/JurisdictionBreadcrumb";
import JurisdictionContentLayout from "@/components/jurisdiction/JurisdictionContentLayout";
import FormsList from "@/components/jurisdiction/FormsList";
import JurisdictionCTA from "@/components/jurisdiction/JurisdictionCTA";
import RelatedJurisdictions from "@/components/jurisdiction/RelatedJurisdictions";
import {
  getAllLeafPaths,
  getLeafPage,
  getValidNeighbors,
  JurisdictionPage,
} from "@/lib/jurisdiction/content";

interface Props {
  page: JurisdictionPage;
  region: string;
  practice: string;
  neighborSlugs: string[];
}

function buildFaqSchema(bodyHtml: string) {
  const qaRegex = /<p>Q:\s*(.*?)<\/p>\s*<p>A:\s*([\s\S]*?)<\/p>/gi;
  const entities: object[] = [];
  let match;
  while ((match = qaRegex.exec(bodyHtml)) !== null) {
    entities.push({
      "@type": "Question",
      name: match[1].trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: match[2].replace(/<[^>]+>/g, "").trim(),
      },
    });
  }
  if (entities.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entities,
  };
}

export default function AuPracticeLeafPage({ page, region, practice, neighborSlugs }: Props) {
  const canonicalUrl = `https://threadlock.ai/au/${region}/${practice}`;

  const practiceDisplayName = practice
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.meta_description,
    url: canonicalUrl,
  };

  const faqSchema = buildFaqSchema(page.bodyHtml);
  const schemaBlocks: object[] = [webPageSchema];
  if (faqSchema) schemaBlocks.push(faqSchema);

  return (
    <JurisdictionShell
      title={page.title}
      metaDescription={page.meta_description}
      canonicalUrl={canonicalUrl}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Australia", href: "/au/" },
        { label: page.jurisdiction_name, href: `/au/${region}/` },
        { label: practiceDisplayName, href: `/au/${region}/${practice}/` },
      ]}
      schemaBlocks={schemaBlocks}
    >
      <JurisdictionBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Australia", href: "/au/" },
          { label: page.jurisdiction_name, href: `/au/${region}/` },
          { label: practiceDisplayName, href: `/au/${region}/${practice}/` },
        ]}
      />

      <JurisdictionContentLayout
        page={page}
        eyebrow={`${page.jurisdiction_name} · ${practiceDisplayName}`}
      />

      <FormsList forms={page.forms || []} />

      <JurisdictionCTA />

      <RelatedJurisdictions
        currentSlug={region}
        practiceArea={practice}
        country="au"
        neighborSlugs={neighborSlugs}
      />
    </JurisdictionShell>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllLeafPaths("au");
  return {
    paths: paths.map(({ slug, practice }) => ({
      params: { region: slug, practice },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const region = params?.region as string;
  const practice = params?.practice as string;

  const page = await getLeafPage("au", region, practice);
  if (!page) return { notFound: true };

  const neighborSlugs = getValidNeighbors("au", region, practice);
  return { props: { page, region, practice, neighborSlugs } };
};
