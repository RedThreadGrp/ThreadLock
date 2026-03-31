import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import JurisdictionShell from "@/components/jurisdiction/JurisdictionShell";
import JurisdictionHero from "@/components/jurisdiction/JurisdictionHero";
import JurisdictionBreadcrumb from "@/components/jurisdiction/JurisdictionBreadcrumb";
import FactBox from "@/components/jurisdiction/FactBox";
import FormsList from "@/components/jurisdiction/FormsList";
import JurisdictionCTA from "@/components/jurisdiction/JurisdictionCTA";
import JurisdictionFaqSection, { extractFaqsFromHtml } from "@/components/jurisdiction/JurisdictionFaqSection";
import RelatedJurisdictions from "@/components/jurisdiction/RelatedJurisdictions";
import {
  getAllLeafPaths,
  getLeafPage,
  getValidNeighbors,
  JurisdictionPage,
} from "@/lib/jurisdiction/content";

interface Props {
  page: JurisdictionPage;
  state: string;
  practice: string;
  neighborSlugs: string[];
}

function buildFaqSchema(bodyHtml: string) {
  // Extract Q&A pairs from rendered HTML (pattern: Q: ... A: ...)
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

export default function PracticeLeafPage({ page, state, practice, neighborSlugs }: Props) {
  const canonicalUrl = `https://threadlock.ai/states/${state}/${practice}/`;

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
        { label: "States", href: "/states/" },
        { label: page.jurisdiction_name, href: `/states/${state}/` },
        { label: practiceDisplayName, href: `/states/${state}/${practice}/` },
      ]}
      schemaBlocks={schemaBlocks}
    >
      <JurisdictionBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "States", href: "/states/" },
          { label: page.jurisdiction_name, href: `/states/${state}/` },
          { label: practiceDisplayName, href: `/states/${state}/${practice}/` },
        ]}
      />

      <JurisdictionHero
        eyebrow={`${page.jurisdiction_name} · ${practiceDisplayName}`}
        title={page.title}
        intro={page.meta_description}
        hideCta
      />

      <FactBox
        courtName={page.court_name || ""}
        filingLimit={page.filing_limit}
        filingFee={page.filing_fee}
        responseDeadline={page.response_deadline}
        hearingTimeline={page.hearing_timeline}
        courtUrl={page.court_url}
        statuteCitation={page.statute_citation}
        lastVerified={page.last_verified || ""}
      />

      {(() => {
        const { faqs, cleanedHtml } = extractFaqsFromHtml(page.bodyHtml);
        return (
          <>
            <article
              className="prose prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: cleanedHtml }}
            />
            <JurisdictionFaqSection items={faqs} />
          </>
        );
      })()}

      <FormsList forms={page.forms || []} />

      <JurisdictionCTA />

      <RelatedJurisdictions
        currentSlug={state}
        practiceArea={practice}
        country="us"
        neighborSlugs={neighborSlugs}
      />
    </JurisdictionShell>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllLeafPaths("us");
  return {
    paths: paths.map(({ slug, practice }) => ({
      params: { state: slug, practice },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const state = params?.state as string;
  const practice = params?.practice as string;

  const page = await getLeafPage("us", state, practice);

  if (!page) {
    return { notFound: true };
  }

  const neighborSlugs = getValidNeighbors("us", state, practice);

  return { props: { page, state, practice, neighborSlugs } };
};
