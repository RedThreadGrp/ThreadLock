// file: pages/resources/[slug].tsx
// Dynamic route handler for /resources/[slug]

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import { getResourceBySlug, RESOURCES, Resource } from "@/src/content/resourcesRegistry";

type ResourcePageProps = {
  resource: Resource | null;
  slug: string;
};

export default function ResourcePage({ resource, slug }: ResourcePageProps) {
  if (!resource) {
    return <ResourceNotFound slug={slug} />;
  }

  const isDraft = resource.status === "draft";

  return (
    <>
      <Head>
        <title>{resource.title} | ThreadLock Resources</title>
        <meta name="description" content={resource.summary} />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          {/* Back link */}
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Resources
          </Link>

          {/* Draft badge */}
          {isDraft && (
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
              In Progress
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground-dark mb-4">
            {resource.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-dark mb-8">
            {resource.tag && (
              <span className="rounded-full bg-surface-dark-panel border border-border-dark px-3 py-1">
                {resource.tag}
              </span>
            )}
            {resource.topic && (
              <>
                <span>•</span>
                <span>{resource.topic}</span>
              </>
            )}
            {resource.readTime && (
              <>
                <span>•</span>
                <span>{resource.readTime}</span>
              </>
            )}
          </div>

          {/* Summary */}
          <p className="text-lg text-muted-dark leading-relaxed mb-8 border-l-4 border-brand-orange pl-4">
            {resource.summary}
          </p>

          {/* Body content */}
          {resource.body && (
            <div className="prose prose-invert prose-orange max-w-none mb-12">
              <div 
                className="whitespace-pre-wrap text-muted-dark leading-relaxed"
                dangerouslySetInnerHTML={{ __html: resource.body.replace(/\n/g, '<br />') }}
              />
            </div>
          )}

          {isDraft && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 text-center mb-12">
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                This resource is still being developed
              </h3>
              <p className="text-sm text-muted-dark">
                Check back soon for complete content, or explore our related resources below.
              </p>
            </div>
          )}

          {/* Related Links */}
          {resource.relatedLinks && resource.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {resource.relatedLinks.map((link) => (
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
        </div>
      </div>
    </>
  );
}

function ResourceNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Resource Not Found | ThreadLock</title>
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Resources
          </Link>

          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-12 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-3xl font-semibold text-foreground-dark mb-4">
              Resource Not Found
            </h1>
            <p className="text-muted-dark mb-8 max-w-md mx-auto">
              We couldn't find the resource "{slug}". It may have been moved or removed.
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
  const paths = RESOURCES.map((resource) => ({
    params: { slug: resource.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const resource = getResourceBySlug(slug);

  return {
    props: {
      resource: resource || null,
      slug,
    },
  };
};
