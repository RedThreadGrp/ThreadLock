// file: pages/jurisdictions/[slug].tsx
// Dynamic route handler for /jurisdictions/[slug]

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import FeedbackWidget from "@/src/components/FeedbackWidget";
import { getJurisdictionGuideBySlug, getAllJurisdictionSlugs, JurisdictionGuide } from "@/src/content/jurisdictions";

type JurisdictionPageProps = {
  guide: JurisdictionGuide | null;
  slug: string;
};

export default function JurisdictionPage({ guide, slug }: JurisdictionPageProps) {
  if (!guide) {
    return <GuideNotFound slug={slug} />;
  }

  const pageTitle = guide.seoTitle;
  const metaDesc = guide.metaDescription;
  const canonicalUrl = `https://threadlock.ai/jurisdictions/${slug}`;

  // WebPage Schema for jurisdiction guides
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Organizing Evidence for ${guide.state} Family Courts`,
    "description": metaDesc,
    "about": `Family court evidence organization in ${guide.state}`,
    "url": canonicalUrl
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-36 pb-10">
          {/* Breadcrumb */}
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Resources
          </Link>

          {/* Main Content */}
          <article className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 sm:p-12">
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground-dark mb-6">
              Organizing Evidence for {guide.state} Family Courts
            </h1>

            {/* Filing Rules Overview */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-brand-orange mb-3">Filing Rules Overview</h2>
              <p className="text-base text-muted-dark leading-relaxed">
                {guide.filingRules}
              </p>
            </section>

            {/* Formatting Requirements */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-brand-orange mb-3">Formatting Requirements</h2>
              <p className="text-base text-muted-dark leading-relaxed">
                {guide.formattingRequirements}
              </p>
            </section>

            {/* Common Mistakes */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-brand-orange mb-3">Common Mistakes</h2>
              <p className="text-base text-muted-dark leading-relaxed">
                {guide.commonMistakes}
              </p>
            </section>

            {/* ThreadLock Alignment */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-brand-orange mb-3">How ThreadLock Aligns With Local Standards</h2>
              <p className="text-base text-muted-dark leading-relaxed">
                {guide.threadlockAlignment}
              </p>
            </section>

            {/* Related Glossary Terms */}
            {guide.relatedGlossary && guide.relatedGlossary.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Legal Terms</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {guide.relatedGlossary.map((termSlug) => (
                    <Link
                      key={termSlug}
                      href={`/resources/legal-glossary/${termSlug}`}
                      className="group rounded-2xl border border-border-dark bg-surface-dark p-4 hover:border-brand-orange/30 hover:bg-surface-dark-panel transition-all"
                    >
                      <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors capitalize">
                        {termSlug.replace(/-/g, ' ')} →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Feedback Widget */}
          <div className="mt-8">
            <FeedbackWidget resourceId={`jurisdiction-${slug}`} />
          </div>
        </div>
      </div>
    </>
  );
}

function GuideNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Guide Not Found | ThreadLock Jurisdictions</title>
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-36 pb-10">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Resources
          </Link>

          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-12 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h1 className="text-3xl font-semibold text-foreground-dark mb-4">
              Jurisdiction Guide Not Found
            </h1>
            <p className="text-muted-dark mb-8 max-w-md mx-auto">
              We couldn't find the jurisdiction guide "{slug}". It may have been moved or removed.
            </p>
            <Link 
              href="/resources"
              className="inline-block rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllJurisdictionSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const guide = getJurisdictionGuideBySlug(slug);

  return {
    props: {
      guide: guide || null,
      slug,
    },
  };
};
