// file: pages/resources/kits/[slug].tsx
// Dynamic route handler for /resources/kits/[slug]

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import { getStarterKitBySlug, getResourceBySlug, STARTER_KITS, StarterKitItem } from "@/src/content/resourcesRegistry";

type KitPageProps = {
  kit: StarterKitItem | null;
  slug: string;
};

export default function KitPage({ kit, slug }: KitPageProps) {
  if (!kit) {
    return <KitNotFound slug={slug} />;
  }

  const isDraft = kit.status === "draft";

  return (
    <>
      <Head>
        <title>{kit.title} | ThreadLock Resources</title>
        <meta name="description" content={kit.description} />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          {/* Back link */}
          <Link 
            href="/resources#starter-kits" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Starter Kits
          </Link>

          {/* Draft badge */}
          {isDraft && (
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
              In Progress
            </div>
          )}

          {/* Title & time */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground-dark">
              {kit.title}
            </h1>
            <span className="shrink-0 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-sm font-semibold text-brand-orange">
              {kit.estimatedTime}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-dark leading-relaxed mb-8 border-l-4 border-brand-orange pl-4">
            {kit.description}
          </p>

          {/* What you'll get */}
          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 mb-8">
            <h2 className="text-xl font-semibold text-foreground-dark mb-4">What You'll Get</h2>
            <ul className="space-y-3">
              {kit.whatYouGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-dark">
                  <span className="text-brand-orange mt-0.5 text-lg">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Included Resources */}
          {kit.resources && kit.resources.length > 0 && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 mb-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Included Resources</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {kit.resources.map((resourceSlug) => {
                  const resource = getResourceBySlug(resourceSlug);
                  if (!resource) return null;
                  
                  return (
                    <Link
                      key={resourceSlug}
                      href={`/resources/${resourceSlug}`}
                      className="group rounded-2xl border border-border-dark bg-surface-dark p-4 hover:border-brand-orange/30 hover:bg-surface-dark-panel transition-all"
                    >
                      <h3 className="text-sm font-semibold text-foreground-dark group-hover:text-brand-orange transition-colors mb-1">
                        {resource.title}
                      </h3>
                      <p className="text-xs text-muted-dark line-clamp-2">{resource.summary}</p>
                      {resource.status === "draft" && (
                        <span className="inline-block mt-2 text-xs text-brand-orange">In Progress</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Body content */}
          {kit.body && (
            <div className="prose prose-invert prose-orange max-w-none mb-12">
              <div 
                className="whitespace-pre-wrap text-muted-dark leading-relaxed"
                dangerouslySetInnerHTML={{ __html: kit.body.replace(/\n/g, '<br />') }}
              />
            </div>
          )}

          {isDraft && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 text-center mb-12">
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                This kit is still being assembled
              </h3>
              <p className="text-sm text-muted-dark">
                Check back soon for the complete bundle, or explore the included resources above.
              </p>
            </div>
          )}

          {/* Related Links */}
          {kit.relatedLinks && kit.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Kits & Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {kit.relatedLinks.map((link) => (
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

function KitNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Kit Not Found | ThreadLock</title>
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          <Link 
            href="/resources#starter-kits" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Starter Kits
          </Link>

          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h1 className="text-3xl font-semibold text-foreground-dark mb-4">
              Kit Not Found
            </h1>
            <p className="text-muted-dark mb-8 max-w-md mx-auto">
              We couldn't find the kit "{slug}". It may have been moved or removed.
            </p>
            <Link 
              href="/resources#starter-kits"
              className="inline-block rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy transition-colors"
            >
              View All Kits
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = STARTER_KITS.map((kit) => ({
    params: { slug: kit.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const kit = getStarterKitBySlug(slug);

  return {
    props: {
      kit: kit || null,
      slug,
    },
  };
};
