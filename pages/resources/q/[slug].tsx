// file: pages/resources/q/[slug].tsx
// Dynamic route handler for /resources/q/[slug] (questions)

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import FeedbackWidget from "@/src/components/FeedbackWidget";
import { InlineIconLabel } from "@/src/components/ui/InlineIconLabel";
import { ResourceQAArticle } from "@/src/components/resources/ResourceQAArticle";
import { getQuestionBySlug, POPULAR_QUESTIONS, PopularQuestion } from "@/src/content/resourcesRegistry";
import { renderMarkdown, extractPlainText } from "@/src/lib/renderMarkdown";

type QuestionPageProps = {
  question: PopularQuestion | null;
  slug: string;
};

export default function QuestionPage({ question, slug }: QuestionPageProps) {
  if (!question) {
    return <QuestionNotFound slug={slug} />;
  }

  const isDraft = question.status === "draft";
  
  // ============================================================================
  // CONTENT VERSION ROUTING
  // ============================================================================
  // v2 content uses structured blocks renderer
  // v1 content uses legacy markdown renderer
  
  if (question.contentVersion === 2) {
    // v2 Route: Use ResourceQAArticle component with structured blocks
    if (!question.blocks) {
      throw new Error(
        `Question "${slug}" is marked as contentVersion: 2 but has no blocks. ` +
        `This is a content authoring error.`
      );
    }
    
    return <QuestionPageV2 question={question} slug={slug} />;
  }
  
  // v1 Route: Use legacy renderer (existing code below)
  return <QuestionPageV1 question={question} slug={slug} />;
}

// ============================================================================
// V2 Renderer: Structured blocks with ResourceQAArticle
// ============================================================================

function QuestionPageV2({ question, slug }: QuestionPageProps) {
  if (!question || !question.blocks) return null;
  
  const isDraft = question.status === "draft";
  const pageTitle = question.seoTitle || question.blocks.seo.title;
  const metaDesc = question.metaDescription || question.blocks.seo.description;
  const canonicalUrl = `https://threadlock.ai/resources/q/${slug}`;
  
  // FAQPage schema for v2
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": question.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.blocks.shortAnswer.text
      }
    }]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16" data-renderer="resourceQA-v2">
        <ResourceQAArticle content={question.blocks} />
        
        {/* Related content and feedback */}
        <div className="mx-auto max-w-4xl px-6 pb-10">
          {/* Related Questions */}
          {question.relatedQuestions && question.relatedQuestions.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Questions</h2>
              <div className="grid gap-3">
                {question.relatedQuestions.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                    className="group rounded-2xl border border-border-dark bg-surface-dark p-4 hover:border-brand-orange/30 hover:bg-surface-dark-panel transition-all"
                  >
                    <InlineIconLabel
                      icon={<span className="text-brand-orange text-base font-bold">?</span>}
                      className="gap-3"
                    >
                      <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                        {q.question}
                      </span>
                    </InlineIconLabel>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Links */}
          {question.relatedLinks && question.relatedLinks.length > 0 && (
            <div className="mt-8 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {question.relatedLinks.map((link) => (
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

          {/* Browse more questions */}
          <div className="mt-12 text-center">
            <Link 
              href="/resources#questions"
              className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition"
            >
              Browse more questions →
            </Link>
          </div>
          
          {/* Feedback Widget */}
          <div className="mt-8">
            <FeedbackWidget resourceId={`question-${slug}`} />
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================================
// V1 Renderer: Legacy markdown body (existing implementation)
// ============================================================================

function QuestionPageV1({ question, slug }: QuestionPageProps) {
  if (!question) return null;
  
  const isDraft = question.status === "draft";
  
  // Prepare SEO title and description
  const pageTitle = question.seoTitle || `${question.question} | ThreadLock`;
  const metaDesc = question.metaDescription || question.shortAnswer || question.question;
  const canonicalUrl = `https://threadlock.ai/resources/q/${slug}`;
  
  // Prepare FAQPage Schema for structured data with proper answer text
  const acceptedAnswerText = question.shortAnswer 
    ? question.shortAnswer 
    : extractPlainText(question.body || '', 200);
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": question.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": acceptedAnswerText
      }
    }]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16" data-renderer="legacyResource-v1" data-testid="legacy-question-body">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          {/* Back link */}
          <Link 
            href="/resources#questions" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Questions
          </Link>

          {/* Draft badge */}
          {isDraft && (
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
              In Progress
            </div>
          )}

          {/* Question icon and title */}
          <div className="flex items-start gap-4 mb-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-orange/10 text-brand-orange text-2xl shrink-0">
              ?
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground-dark">
              {question.question}
            </h1>
          </div>

          {/* Short Answer (if available) */}
          {question.shortAnswer && (
            <div className="rounded-3xl border border-brand-orange/30 bg-brand-orange/5 p-6 mb-8">
              <h2 className="text-sm font-semibold text-brand-orange uppercase tracking-wide mb-2">
                Short Answer
              </h2>
              <p className="text-foreground-dark leading-relaxed">
                {question.shortAnswer}
              </p>
            </div>
          )}

          {/* Answer */}
          {question.body && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 mb-8">
              <div 
                className="prose prose-invert prose-orange max-w-none text-muted-dark leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(question.body) }}
              />
            </div>
          )}

          {isDraft && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 text-center mb-12">
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                This answer is being refined
              </h3>
              <p className="text-sm text-muted-dark">
                Check back soon for a more comprehensive answer, or explore our related resources below.
              </p>
            </div>
          )}

          {/* Related Questions */}
          {question.relatedQuestions && question.relatedQuestions.length > 0 && (
            <div className="mt-12 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Questions</h2>
              <div className="grid gap-3">
                {question.relatedQuestions.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                    className="group rounded-2xl border border-border-dark bg-surface-dark p-4 hover:border-brand-orange/30 hover:bg-surface-dark-panel transition-all"
                  >
                    <InlineIconLabel
                      icon={<span className="text-brand-orange text-base font-bold">?</span>}
                      className="gap-3"
                    >
                      <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
                        {q.question}
                      </span>
                    </InlineIconLabel>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Links */}
          {question.relatedLinks && question.relatedLinks.length > 0 && (
            <div className="mt-8 rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
              <h2 className="text-xl font-semibold text-foreground-dark mb-4">Related Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {question.relatedLinks.map((link) => (
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

          {/* Browse more questions */}
          <div className="mt-12 text-center">
            <Link 
              href="/resources#questions"
              className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition"
            >
              Browse more questions →
            </Link>
          </div>
          
          {/* Feedback Widget */}
          <div className="mt-8">
            <FeedbackWidget resourceId={`question-${slug}`} />
          </div>
        </div>
      </div>
    </>
  );
}

function QuestionNotFound({ slug }: { slug: string }) {
  return (
    <>
      <Head>
        <title>Question Not Found | ThreadLock</title>
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          <Link 
            href="/resources#questions" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-8"
          >
            ← Back to Questions
          </Link>

          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-12 text-center">
            <div className="text-6xl mb-4">❓</div>
            <h1 className="text-3xl font-semibold text-foreground-dark mb-4">
              Question Not Found
            </h1>
            <p className="text-muted-dark mb-8 max-w-md mx-auto">
              We couldn't find the question "{slug}". It may have been moved or removed.
            </p>
            <Link 
              href="/resources#questions"
              className="inline-block rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy transition-colors"
            >
              View All Questions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = POPULAR_QUESTIONS.map((question) => ({
    params: { slug: question.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const question = getQuestionBySlug(slug);

  return {
    props: {
      question: question || null,
      slug,
    },
  };
};
