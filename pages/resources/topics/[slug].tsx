// file: pages/resources/topics/[slug].tsx
// Dynamic route handler for /resources/topics/[slug]

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import FeedbackWidget from "@/src/components/FeedbackWidget";
import { InlineIconLabel } from "@/src/components/ui/InlineIconLabel";
import { 
  getTopicBySlug, 
  getResourcesByTopic, 
  getGuidesByTopic,
  getQuestionsByTopic,
  TOPICS, 
  Topic,
  Resource,
  FeaturedGuide,
  PopularQuestion
} from "@/src/content/resourcesRegistry";
import { renderMarkdown } from "@/src/lib/renderMarkdown";
import { ResourceLayoutV2 } from "@/src/components/resources/ResourceLayoutV2";
import { ResourceQAArticle } from "@/src/components/resources/ResourceQAArticle";
import { SectionCard, SectionCardGrid } from "@/src/components/resources/SectionCard";

type TopicPageProps = {
  topic: Topic | null;
  resources: Resource[];
  guides: FeaturedGuide[];
  questions: PopularQuestion[];
  slug: string;
};

export default function TopicPage({ topic, resources, guides, questions, slug }: TopicPageProps) {
  if (!topic) {
    return <TopicNotFound slug={slug} />;
  }

  // ============================================================================
  // CONTENT VERSION ROUTING
  // ============================================================================
  // v2 content uses structured blocks renderer
  // v1 content uses legacy markdown renderer
  
  if (topic.contentVersion === 2 && topic.blocks) {
    // v2 Route: Use ResourceQAArticle component with structured blocks
    return <TopicPageV2 topic={topic} resources={resources} guides={guides} questions={questions} slug={slug} />;
  }
  
  // v1 Route: Use legacy renderer (existing code below)
  return <TopicPageV1 topic={topic} resources={resources} guides={guides} questions={questions} slug={slug} />;
}

// ============================================================================
// V2 Renderer: Structured blocks with ResourceQAArticle
// ============================================================================

function TopicPageV2({ topic, resources, guides, questions, slug }: TopicPageProps) {
  if (!topic || !topic.blocks) return null;
  
  const hasContent = resources.length > 0 || guides.length > 0 || questions.length > 0;
  const pageTitle = `${topic.title} | ThreadLock Resources`;
  const metaDesc = topic.promise;
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16" data-renderer="topic-v2">
        <div className="pt-36">
          <ResourceQAArticle content={topic.blocks} />
        </div>
        
        {/* Child resources section */}
        <div className="mx-auto max-w-7xl px-6 pb-10">
          {/* Resources Section */}
          {resources.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Resources</h2>
              <SectionCardGrid columns={3}>
                {resources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                  >
                    <SectionCard hover>
                      <h3 className="text-sm font-semibold text-foreground-dark group-hover:text-brand-orange transition-colors mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-dark line-clamp-2 mb-3">{resource.summary}</p>
                      {resource.readTime && (
                        <span className="text-xs text-muted-dark">{resource.readTime}</span>
                      )}
                      {resource.status === "draft" && (
                        <span className="block mt-2 text-xs text-brand-orange">In Progress</span>
                      )}
                    </SectionCard>
                  </Link>
                ))}
              </SectionCardGrid>
            </section>
          )}

          {/* Guides Section */}
          {guides.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Featured Guides</h2>
              <SectionCardGrid columns={2}>
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/guides/${guide.slug}`}
                  >
                    <SectionCard hover>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {guide.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-border-dark bg-surface-dark px-2 py-0.5 text-xs font-semibold text-muted-dark">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground-dark group-hover:text-brand-orange transition-colors mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-dark">{guide.summary}</p>
                      {guide.status === "draft" && (
                        <span className="block mt-2 text-xs text-brand-orange">In Progress</span>
                      )}
                    </SectionCard>
                  </Link>
                ))}
              </SectionCardGrid>
            </section>
          )}

          {/* Questions Section */}
          {questions.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Common Questions</h2>
              <SectionCardGrid columns={3}>
                {questions.map((question) => (
                  <Link
                    key={question.slug}
                    href={`/resources/q/${question.slug}`}
                  >
                    <SectionCard hover padding="small" radius="rounded-2xl">
                      <InlineIconLabel
                        icon={<span className="text-brand-orange text-base font-bold">?</span>}
                        className="gap-3"
                      >
                        <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                          {question.question}
                        </span>
                      </InlineIconLabel>
                    </SectionCard>
                  </Link>
                ))}
              </SectionCardGrid>
            </section>
          )}

          {!hasContent && (
            <SectionCard>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                  Content Coming Soon
                </h3>
                <p className="text-sm text-muted-dark">
                  We're building out resources for this topic. Check back soon!
                </p>
              </div>
            </SectionCard>
          )}

          {/* Related Links */}
          {topic.relatedLinks && topic.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Topics</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {topic.relatedLinks.map((link) => (
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
            <FeedbackWidget resourceId={`topic-${slug}`} />
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================================
// V1 Renderer: Legacy markdown body
// ============================================================================

function TopicPageV1({ topic, resources, guides, questions, slug }: TopicPageProps) {
  if (!topic) return null;

  const hasContent = resources.length > 0 || guides.length > 0 || questions.length > 0;

  const header = (
    <>
      {/* Back link */}
      <Link 
        href="/resources#topics" 
        className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
      >
        ← Back to All Topics
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-semibold tracking-tight text-foreground-dark mb-4">
        {topic.title}
      </h1>

      {/* Promise */}
      <p className="text-lg text-muted-dark leading-relaxed mb-8 border-l-4 border-brand-orange pl-4">
        {topic.promise}
      </p>

      {/* Resource count */}
      <p className="text-sm text-muted-dark mb-12">
        {topic.resourceCount} resources in this topic
      </p>
    </>
  );

  return (
    <>
      <Head>
        <title>{topic.title} | ThreadLock Resources</title>
        <meta name="description" content={topic.promise} />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16" data-renderer="topic-v1">
        <ResourceLayoutV2 
          dataRenderer="topic-v2" 
          maxWidth="wide"
          header={header}
        >
          {/* Body content */}
          {topic.body && (
            <div className="prose prose-invert prose-orange max-w-none mb-12">
              <div 
                className="text-muted-dark leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(topic.body) }}
              />
            </div>
          )}

          {/* Resources Section */}
          {resources.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Resources</h2>
              <SectionCardGrid columns={3}>
                {resources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                  >
                    <SectionCard hover>
                      <h3 className="text-sm font-semibold text-foreground-dark group-hover:text-brand-orange transition-colors mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-dark line-clamp-2 mb-3">{resource.summary}</p>
                      {resource.readTime && (
                        <span className="text-xs text-muted-dark">{resource.readTime}</span>
                      )}
                      {resource.status === "draft" && (
                        <span className="block mt-2 text-xs text-brand-orange">In Progress</span>
                      )}
                    </SectionCard>
                  </Link>
                ))}
              </SectionCardGrid>
            </section>
          )}

          {/* Guides Section */}
          {guides.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Featured Guides</h2>
              <SectionCardGrid columns={2}>
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/guides/${guide.slug}`}
                  >
                    <SectionCard hover>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {guide.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-border-dark bg-surface-dark px-2 py-0.5 text-xs font-semibold text-muted-dark">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground-dark group-hover:text-brand-orange transition-colors mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-dark">{guide.summary}</p>
                      {guide.status === "draft" && (
                        <span className="block mt-2 text-xs text-brand-orange">In Progress</span>
                      )}
                    </SectionCard>
                  </Link>
                ))}
              </SectionCardGrid>
            </section>
          )}

          {/* Questions Section */}
          {questions.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Common Questions</h2>
              <SectionCardGrid columns={3}>
                {questions.map((question) => (
                  <Link
                    key={question.slug}
                    href={`/resources/q/${question.slug}`}
                  >
                    <SectionCard hover padding="small" radius="rounded-2xl">
                      <InlineIconLabel
                        icon={<span className="text-brand-orange text-base font-bold">?</span>}
                        className="gap-3"
                      >
                        <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                          {question.question}
                        </span>
                      </InlineIconLabel>
                    </SectionCard>
                  </Link>
                ))}
              </SectionCardGrid>
            </section>
          )}

          {!hasContent && (
            <SectionCard>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                  Content Coming Soon
                </h3>
                <p className="text-sm text-muted-dark">
                  We're building out resources for this topic. Check back soon!
                </p>
              </div>
            </SectionCard>
          )}

          {/* Related Links */}
          {topic.relatedLinks && topic.relatedLinks.length > 0 && (
            <SectionCard className="mt-12">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Topics</h2>
              <SectionCardGrid columns={3}>
                {topic.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  >
                    <SectionCard hover padding="small">
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
            <FeedbackWidget resourceId={`topic-${slug}`} />
          </div>
        </ResourceLayoutV2>
      </div>
    </>
  );
}

function TopicNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Topic Not Found | ThreadLock</title>
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <ResourceLayoutV2 dataRenderer="topic-not-found" maxWidth="narrow">
          <Link 
            href="/resources#topics" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to All Topics
          </Link>

          <SectionCard>
            <div className="text-center">
              <div className="text-6xl mb-4">📂</div>
              <h1 className="text-3xl font-semibold text-foreground-dark mb-4">
                Topic Not Found
              </h1>
              <p className="text-muted-dark mb-8 max-w-md mx-auto">
                We couldn't find the topic "{slug}". It may have been moved or removed.
              </p>
              <Link 
                href="/resources#topics"
                className="inline-block rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy transition-colors"
              >
                Browse All Topics
              </Link>
            </div>
          </SectionCard>
        </ResourceLayoutV2>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TOPICS.map((topic) => ({
    params: { slug: topic.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const topic = getTopicBySlug(slug);
  
  const resources = topic ? getResourcesByTopic(slug) : [];
  const guides = topic ? getGuidesByTopic(slug) : [];
  const questions = topic ? getQuestionsByTopic(slug) : [];

  return {
    props: {
      topic: topic || null,
      resources,
      guides,
      questions,
      slug,
    },
  };
};
