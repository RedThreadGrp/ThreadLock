// file: pages/resources/guides/[slug].tsx
// Dynamic route handler for /resources/guides/[slug]

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import StandardDisclaimer from "@/src/components/StandardDisclaimer";
import FeedbackWidget from "@/src/components/FeedbackWidget";
import { getFeaturedGuideBySlug, FEATURED_GUIDES, FeaturedGuide } from "@/src/content/resourcesRegistry";

type GuidePageProps = {
  guide: FeaturedGuide | null;
  slug: string;
};

export default function GuidePage({ guide, slug }: GuidePageProps) {
  if (!guide) {
    return <GuideNotFound slug={slug} />;
  }

  const isDraft = guide.status === "draft";

  return (
    <>
      <Head>
        <title>{guide.title} | ThreadLock Resources</title>
        <meta name="description" content={guide.summary} />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          {/* Back link */}
          <Link 
            href="/resources#featured-guides" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Featured Guides
          </Link>

          {/* Draft badge */}
          {isDraft && (
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
              In Progress
            </div>
          )}

          {/* Tags */}
          {guide.tags && guide.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {guide.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground-dark mb-4">
            {guide.title}
          </h1>

          {/* Updated date */}
          {guide.updated && (
            <p className="text-sm text-muted-dark mb-6">
              Updated {guide.updated}
            </p>
          )}

          {/* Summary */}
          <p className="text-lg text-muted-dark leading-relaxed mb-8 border-l-4 border-brand-orange pl-4">
            {guide.summary}
          </p>

          {/* Body content */}
          {guide.body && (
            <div className="prose prose-invert prose-orange max-w-none mb-12">
              <div 
                className="whitespace-pre-wrap text-muted-dark leading-relaxed"
                dangerouslySetInnerHTML={{ __html: guide.body.replace(/\n/g, '<br />') }}
              />
            </div>
          )}

          {isDraft && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 text-center mb-12">
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                This guide is still being written
              </h3>
              <p className="text-sm text-muted-dark">
                Check back soon for the complete guide, or explore our related resources below.
              </p>
            </div>
          )}

          {/* Related Links */}
          {guide.relatedLinks && guide.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {guide.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-2xl border border-border-dark bg-surface-dark p-4 hover:border-brand-orange/30 hover:bg-surface-dark-panel transition-all"
                  >
                    <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                      {link.title} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Feedback Widget */}
          <div className="mt-8">
            <FeedbackWidget resourceId={`guide-${slug}`} />
          </div>
          
          {/* Standard Disclaimer */}
          <StandardDisclaimer />
        </div>
      </div>
    </>
  );
}

function GuideNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Guide Not Found | ThreadLock</title>
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          <Link 
            href="/resources#featured-guides" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Featured Guides
          </Link>

          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-12 text-center">
            <div className="text-6xl mb-4">📘</div>
            <h1 className="text-3xl font-semibold text-foreground-dark mb-4">
              Guide Not Found
            </h1>
            <p className="text-muted-dark mb-8 max-w-md mx-auto">
              We couldn't find the guide "{slug}". It may have been moved or removed.
            </p>
            <Link 
              href="/resources#featured-guides"
              className="inline-block rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy transition-colors"
            >
              View All Guides
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = FEATURED_GUIDES.map((guide) => ({
    params: { slug: guide.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const guide = getFeaturedGuideBySlug(slug);

  return {
    props: {
      guide: guide || null,
      slug,
    },
  };
};
