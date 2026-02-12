// file: pages/resources/q/[slug].tsx
// Dynamic route handler for /resources/q/[slug] (questions)

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "@/src/components/SiteHeader";
import { getQuestionBySlug, POPULAR_QUESTIONS, QuestionItem } from "@/src/content/resourcesRegistry";

type QuestionPageProps = {
  question: QuestionItem | null;
  slug: string;
};

export default function QuestionPage({ question, slug }: QuestionPageProps) {
  if (!question) {
    return <QuestionNotFound slug={slug} />;
  }

  const isDraft = question.status === "draft";

  return (
    <>
      <Head>
        <title>{question.question} | ThreadLock Resources</title>
        <meta name="description" content={question.answer.substring(0, 160)} />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background pb-16">
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

          {/* Answer */}
          <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8 mb-8">
            <div 
              className="prose prose-invert prose-orange max-w-none text-muted-dark leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: question.answer.replace(/\n/g, '<br />') }}
            />
          </div>

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

          {/* Related Links */}
          {question.relatedLinks && question.relatedLinks.length > 0 && (
            <div className="rounded-3xl border border-border-dark bg-surface-dark-panel p-8">
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
