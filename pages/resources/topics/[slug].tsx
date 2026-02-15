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

  const hasContent = resources.length > 0 || guides.length > 0 || questions.length > 0;

  return (
    <>
      <Head>
        <title>{topic.title} | ThreadLock Resources</title>
        <meta name="description" content={topic.promise} />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
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

          {/* Body content */}
          {topic.body && (
            <div className="prose prose-invert prose-orange max-w-none mb-12">
              <div 
                className="whitespace-pre-wrap text-muted-dark leading-relaxed"
                dangerouslySetInnerHTML={{ __html: topic.body.replace(/\n/g, '<br />') }}
              />
            </div>
          )}

          {/* Resources Section */}
          {resources.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Resources</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 transition-all"
                  >
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity orange-glow-overlay pointer-events-none" />
                    <div className="relative z-10">
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
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Guides Section */}
          {guides.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Featured Guides</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/guides/${guide.slug}`}
                    className="group relative rounded-3xl border border-border-dark bg-surface-dark-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 transition-all"
                  >
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity orange-glow-overlay pointer-events-none" />
                    <div className="relative z-10">
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
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Questions Section */}
          {questions.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground-dark mb-6">Common Questions</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {questions.map((question) => (
                  <Link
                    key={question.slug}
                    href={`/resources/q/${question.slug}`}
                    className="group relative rounded-2xl border border-border-dark bg-surface-dark-panel p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 transition-all"
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity orange-glow-overlay pointer-events-none" />
                    <div className="relative z-10">
                      <InlineIconLabel
                        icon={<span className="text-brand-orange text-base font-bold">?</span>}
                        className="gap-3"
                      >
                        <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                          {question.question}
                        </span>
                      </InlineIconLabel>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {!hasContent && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 text-center">
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                Content Coming Soon
              </h3>
              <p className="text-sm text-muted-dark">
                We're building out resources for this topic. Check back soon!
              </p>
            </div>
          )}

          {/* Related Links */}
          {topic.relatedLinks && topic.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Topics</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

function TopicNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Topic Not Found | ThreadLock</title>
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          <Link 
            href="/resources#topics" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to All Topics
          </Link>

          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-12 text-center">
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
        </div>
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
