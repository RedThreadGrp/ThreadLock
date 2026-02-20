// file: pages/resources/[slug].tsx
// Dynamic route handler for /resources/[slug]

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import FeedbackWidget from "@/src/components/FeedbackWidget";
import { InlineIconLabel } from "@/src/components/ui/InlineIconLabel";
import { getResourceBySlug, RESOURCES, Resource } from "@/src/content/resourcesRegistry";
import { renderMarkdown } from "@/src/lib/renderMarkdown";
import { ResourceLayoutV2 } from "@/src/components/resources/ResourceLayoutV2";
import { SectionCard, SectionCardGrid } from "@/src/components/resources/SectionCard";
import { ResourceQAArticle } from "@/src/components/resources/ResourceQAArticle";

type ResourcePageProps = {
  resource: Resource | null;
  slug: string;
};

export default function ResourcePage({ resource, slug }: ResourcePageProps) {
  if (!resource) {
    return <ResourceNotFound slug={slug} />;
  }

  const isDraft = resource.status === "draft";
  
  // ============================================================================
  // CONTENT VERSION ROUTING
  // ============================================================================
  // v2 content uses structured blocks renderer
  // v1 content uses legacy markdown renderer
  
  if (resource.contentVersion === 2) {
    // v2 Route: Use ResourceQAArticle component with structured blocks
    if (!resource.blocks) {
      throw new Error(
        `Resource "${slug}" is marked as contentVersion: 2 but has no blocks. ` +
        `This is a content authoring error.`
      );
    }
    
    return <ResourcePageV2 resource={resource} slug={slug} />;
  }
  
  // v1 Route: Use legacy renderer (existing code below)
  return <ResourcePageV1 resource={resource} slug={slug} />;
}

// ============================================================================
// V2 Renderer: Structured blocks with ResourceQAArticle
// ============================================================================

function ResourcePageV2({ resource, slug }: ResourcePageProps) {
  if (!resource || !resource.blocks) return null;
  
  const isDraft = resource.status === "draft";
  const pageTitle = resource.seoTitle || resource.seo?.title || `${resource.title} | ThreadLock Resources`;
  const metaDesc = resource.metaDescription || resource.seo?.description || resource.excerpt;
  const canonicalUrl = `https://threadlock.ai/resources/${slug}`;
  
  // Transform ResourcePage structure to ResourceQAContent structure
  const contentForArticle = {
    slug: resource.slug,
    seo: resource.seo || {
      title: pageTitle,
      description: metaDesc
    },
    hero: resource.hero || {
      h1: resource.title,
      subhead: resource.excerpt
    },
    shortAnswer: {
      text: resource.blocks.shortAnswer
    },
    sections: resource.blocks.sections,
    faqs: resource.blocks.faqs ? {
      items: resource.blocks.faqs
    } : undefined,
    sources: resource.governance?.sources ? {
      items: resource.governance.sources
    } : undefined,
    governance: resource.governance
  };
  
  // Article schema for v2
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": resource.title,
    "description": resource.excerpt,
    "author": {
      "@type": "Organization",
      "name": "ThreadLock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ThreadLock",
      "logo": {
        "@type": "ImageObject",
        "url": "https://threadlock.ai/logo.png"
      }
    },
    "datePublished": resource.dateModified || "2026-02-13",
    "dateModified": resource.dateModified || "2026-02-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        {isDraft && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16" data-renderer="resource-v2">
        <div className="pt-36">
          <ResourceQAArticle content={contentForArticle} />
        </div>
        
        {/* Related content and feedback */}
        <div className="mx-auto max-w-4xl px-6 pb-10">
          {/* Related Questions */}
          {resource.relatedQuestions && resource.relatedQuestions.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Questions</h2>
              <div className="grid gap-3">
                {resource.relatedQuestions.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                  >
                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                      <InlineIconLabel
                        icon={<span className="text-brand-orange text-base font-bold">?</span>}
                        className="gap-3"
                      >
                        <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                          {q.question}
                        </span>
                      </InlineIconLabel>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Links */}
          {resource.relatedLinks && resource.relatedLinks.length > 0 && (
            <div className="mt-8 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {resource.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  >
                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                      <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                        {link.title} →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Feedback Widget */}
          <div className="mt-8">
            <FeedbackWidget resourceId={`resource-${slug}`} />
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================================
// V1 Renderer: Legacy markdown-based content
// ============================================================================

function ResourcePageV1({ resource, slug }: ResourcePageProps) {
  if (!resource) return null;
  
  const isDraft = resource.status === "draft";
  
  // Prepare SEO title and description
  const pageTitle = resource.seoTitle || `${resource.title} | ThreadLock Resources`;
  const metaDesc = resource.metaDescription || resource.excerpt;
  const canonicalUrl = `https://threadlock.ai/resources/${slug}`;
  
  // Prepare Article Schema for structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": resource.title,
    "description": resource.excerpt,
    "author": {
      "@type": "Organization",
      "name": "ThreadLock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ThreadLock",
      "logo": {
        "@type": "ImageObject",
        "url": "https://threadlock.ai/logo.png"
      }
    },
    "datePublished": resource.dateModified || "2026-02-13",
    "dateModified": resource.dateModified || "2026-02-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  const header = (
    <>
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
        {resource.excerpt}
      </p>
    </>
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        {isDraft && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <ResourceLayoutV2 
          dataRenderer="resource-article-v1" 
          maxWidth="narrow"
          header={header}
        >
          {/* Body content */}
          {resource.body && (
            <div className="prose prose-invert prose-orange max-w-none mb-12">
              <div 
                className="text-muted-dark leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(resource.body) }}
              />
            </div>
          )}

          {isDraft && (
            <SectionCard className="text-center mb-12">
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                This resource is still being developed
              </h3>
              <p className="text-sm text-muted-dark">
                Check back soon for complete content, or explore our related resources below.
              </p>
            </SectionCard>
          )}

          {/* Related Questions */}
          {resource.relatedQuestions && resource.relatedQuestions.length > 0 && (
            <SectionCard className="mt-12">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Questions</h2>
              <div className="grid gap-3">
                {resource.relatedQuestions.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                  >
                    <SectionCard hover padding="small" radius="rounded-2xl">
                      <InlineIconLabel
                        icon={<span className="text-brand-orange text-base font-bold">?</span>}
                        className="gap-3"
                      >
                        <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                          {q.question}
                        </span>
                      </InlineIconLabel>
                    </SectionCard>
                  </Link>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Related Links */}
          {resource.relatedLinks && resource.relatedLinks.length > 0 && (
            <SectionCard className="mt-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Resources</h2>
              <SectionCardGrid columns={2}>
                {resource.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  >
                    <SectionCard hover padding="small" radius="rounded-2xl">
                      <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                        {link.title} →
                      </span>
                    </SectionCard>
                  </Link>
                ))}
              </SectionCardGrid>
            </SectionCard>
          )}
          
          {/* Feedback Widget */}
          <div className="mt-8">
            <FeedbackWidget resourceId={`resource-${slug}`} />
          </div>
        </ResourceLayoutV2>
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
        <ResourceLayoutV2 dataRenderer="resource-not-found" maxWidth="narrow">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Resources
          </Link>

          <SectionCard>
            <div className="text-center">
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
          </SectionCard>
        </ResourceLayoutV2>
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
