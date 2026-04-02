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
  province: string;
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

export default function CaPracticeLeafPage({ page, province, practice, neighborSlugs }: Props) {
  const canonicalUrl = `https://threadlock.ai/ca/${province}/${practice}`;

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
        { label: "Canada", href: "/ca/" },
        { label: page.jurisdiction_name, href: `/ca/${province}/` },
        { label: practiceDisplayName, href: `/ca/${province}/${practice}/` },
      ]}
      schemaBlocks={schemaBlocks}
    >
      <JurisdictionBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Canada", href: "/ca/" },
          { label: page.jurisdiction_name, href: `/ca/${province}/` },
          { label: practiceDisplayName, href: `/ca/${province}/${practice}/` },
        ]}
      />

      <JurisdictionContentLayout
        page={page}
        eyebrow={`${page.jurisdiction_name} · ${practiceDisplayName}`}
      />

      <FormsList forms={page.forms || []} />

      <JurisdictionCTA />

      <RelatedJurisdictions
        currentSlug={province}
        practiceArea={practice}
        country="ca"
        neighborSlugs={neighborSlugs}
      />
    </JurisdictionShell>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllLeafPaths("ca");
  return {
    paths: paths.map(({ slug, practice }) => ({
      params: { province: slug, practice },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const province = params?.province as string;
  const practice = params?.practice as string;

  const page = await getLeafPage("ca", province, practice);

  if (!page) {
    return { notFound: true };
  }

  const neighborSlugs = getValidNeighbors("ca", province, practice);

  return { props: { page, province, practice, neighborSlugs } };
};
