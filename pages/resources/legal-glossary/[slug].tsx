// file: pages/resources/legal-glossary/[slug].tsx
// Dynamic route handler for /resources/legal-glossary/[slug]

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import FeedbackWidget from "@/src/components/FeedbackWidget";
import { getLegalGlossaryTermBySlug, getAllLegalGlossarySlugs, LegalGlossaryTerm } from "@/src/content/legalGlossary";

type GlossaryPageProps = {
  term: LegalGlossaryTerm | null;
  slug: string;
};

export default function LegalGlossaryPage({ term, slug }: GlossaryPageProps) {
  if (!term) {
    return <TermNotFound slug={slug} />;
  }

  const pageTitle = term.seoTitle;
  const metaDesc = term.metaDescription;
  const canonicalUrl = `https://threadlock.ai/resources/legal-glossary/${slug}`;

  // DefinedTerm Schema for glossary entries
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term.term,
    "description": term.definition,
    "inDefinedTermSet": "https://threadlock.ai/resources/legal-glossary"
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
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
            {/* Term Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground-dark mb-6">
              {term.term}
            </h1>

            {/* Definition Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-brand-orange mb-3">Definition</h2>
              <p className="text-base text-muted-dark leading-relaxed">
                {term.definition}
              </p>
            </section>

            {/* Why It Matters Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-brand-orange mb-3">Why It Matters in Family Court</h2>
              <p className="text-base text-muted-dark leading-relaxed">
                {term.whyItMatters}
              </p>
            </section>

            {/* ThreadLock Integration Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-brand-orange mb-3">How ThreadLock Supports This</h2>
              <p className="text-base text-muted-dark leading-relaxed">
                {term.threadlockIntegration}
              </p>
            </section>

            {/* Related Terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Terms</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {term.relatedTerms.map((relatedSlug) => (
                    <Link
                      key={relatedSlug}
                      href={`/resources/legal-glossary/${relatedSlug}`}
                      className="group rounded-2xl border border-border-dark bg-surface-dark p-4 hover:border-brand-orange/30 hover:bg-surface-dark-panel transition-all"
                    >
                      <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors capitalize">
                        {relatedSlug.replace(/-/g, ' ')} →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related Jurisdiction */}
            {term.relatedJurisdiction && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground-dark mb-4">State-Specific Guide</h2>
                <Link
                  href={`/jurisdictions/${term.relatedJurisdiction}`}
                  className="group rounded-2xl border border-border-dark bg-surface-dark p-4 hover:border-brand-orange/30 hover:bg-surface-dark-panel transition-all inline-block"
                >
                  <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors capitalize">
                    {term.relatedJurisdiction.replace(/-/g, ' ')} Evidence Guide →
                  </span>
                </Link>
              </section>
            )}
          </article>

          {/* Feedback Widget */}
          <div className="mt-8">
            <FeedbackWidget resourceId={`glossary-${slug}`} />
          </div>
        </div>
      </div>
    </>
  );
}

function TermNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Term Not Found | ThreadLock Legal Glossary</title>
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
            <div className="text-6xl mb-4">📖</div>
            <h1 className="text-3xl font-semibold text-foreground-dark mb-4">
              Term Not Found
            </h1>
            <p className="text-muted-dark mb-8 max-w-md mx-auto">
              We couldn't find the glossary term "{slug}". It may have been moved or removed.
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
  const slugs = getAllLegalGlossarySlugs();
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
  const term = getLegalGlossaryTermBySlug(slug);

  return {
    props: {
      term: term || null,
      slug,
    },
  };
};
