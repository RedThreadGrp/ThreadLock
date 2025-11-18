import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/**
 * Digital Evidence Guide - Educational Content Page
 * This page is designed to be indexable for SEO purposes
 */
export default function DigitalEvidenceGuide() {
  const chapters = [
    {
      number: 1,
      title: "Understanding Digital Evidence in Family Court",
      content: "Digital evidence plays a critical role in modern family court proceedings. This chapter covers the basics of what constitutes digital evidence and how courts evaluate it."
    },
    {
      number: 2,
      title: "Text Messages as Evidence: Best Practices",
      content: "Learn how to properly preserve and present text message evidence, including timestamps, context, and authentication requirements."
    },
    {
      number: 3,
      title: "Email Evidence: Collection and Organization",
      content: "Master the art of organizing email evidence for court. Understand headers, metadata, and chain of custody considerations."
    },
    {
      number: 4,
      title: "Social Media Evidence: What Courts Accept",
      content: "Navigate the complex world of social media evidence, including Facebook, Instagram, and other platforms commonly used in family court cases."
    },
    {
      number: 5,
      title: "Photo and Video Evidence: Authentication Requirements",
      content: "Discover how to properly document, authenticate, and present photo and video evidence to ensure it's admissible in court."
    },
    {
      number: 6,
      title: "Creating a Court-Ready Timeline",
      content: "Learn how to organize your digital evidence into a chronological timeline that tells your story clearly and convincingly."
    },
    {
      number: 7,
      title: "Common Mistakes to Avoid",
      content: "Understand the most common pitfalls when collecting and presenting digital evidence, and how to avoid them."
    },
    {
      number: 8,
      title: "Privacy and Legal Considerations",
      content: "Navigate the legal landscape of digital evidence collection, including privacy laws, consent requirements, and ethical considerations."
    },
    {
      number: 9,
      title: "Working with Legal Professionals",
      content: "Learn how to effectively share your organized digital evidence with attorneys, mediators, and other legal professionals."
    },
    {
      number: 10,
      title: "Digital Evidence Checklist for Court",
      content: "A comprehensive checklist to ensure your digital evidence is properly organized, authenticated, and ready for presentation in court."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Non-Lawyer's Guide to Digital Evidence: How to Organize Texts, Emails, and Social Media for Family Court",
    "description": "A comprehensive guide for non-lawyers on how to collect, organize, and present digital evidence in family court proceedings.",
    "author": {
      "@type": "Organization",
      "name": "ThreadLock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ThreadLock"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>The Non-Lawyer's Guide to Digital Evidence for Family Court | ThreadLock</title>
        <meta 
          name="description" 
          content="Learn how to organize texts, emails, and social media evidence for family court. A comprehensive guide for self-represented individuals." 
        />
        {/* NO noindex tag - this page should be indexable */}
        
        {/* Open Graph */}
        <meta property="og:title" content="The Non-Lawyer's Guide to Digital Evidence for Family Court" />
        <meta property="og:description" content="Learn how to organize texts, emails, and social media evidence for family court." />
        <meta property="og:type" content="article" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Simple Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-slate-800">Thread</span>
            <span className="text-orange-600">Lock</span>
            <span className="text-slate-500 text-sm align-super">™</span>
          </Link>
          <Link 
            href="/signup"
            className="bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Try ThreadLock Free
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The Non-Lawyer&apos;s Guide to Digital Evidence: How to Organize Texts, Emails, and Social Media for Family Court
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Representing yourself in family court? This comprehensive guide will help you understand how to collect, 
            organize, and present digital evidence effectively, even without legal experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/signup"
              className="bg-orange-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Get Started with ThreadLock
            </Link>
            <a 
              href="#chapters"
              className="bg-slate-100 text-slate-800 font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Read the Guide
            </a>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why This Guide Matters</h2>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            In today&apos;s digital age, most communication happens through text messages, emails, and social media. 
            When you&apos;re involved in a family court case—whether it&apos;s custody, divorce, or another matter—this 
            digital evidence can be crucial to your case.
          </p>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            However, simply having these messages isn&apos;t enough. You need to know how to properly collect, organize, 
            and present them in a way that courts will accept. This guide will walk you through every step of the process.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ Legal Disclaimer</p>
            <p className="text-sm text-amber-800">
              This guide is for informational purposes only and does not constitute legal advice. ThreadLock is a 
              software tool, not a law firm. For specific legal advice about your case, please consult with a licensed attorney.
            </p>
          </div>
        </div>

        {/* Chapters */}
        <div id="chapters" className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Guide Chapters</h2>
          {chapters.map((chapter) => (
            <div key={chapter.number} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  {chapter.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Chapter {chapter.number}: {chapter.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {chapter.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Organize Your Evidence?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            ThreadLock makes it easy to collect, organize, and manage your digital evidence for court. 
            Start your free trial today.
          </p>
          <Link 
            href="/signup"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Start Your Free Trial
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>
            Want to learn more about organizing your family court case?{' '}
            <Link href="/resources" className="text-orange-600 hover:underline">
              Visit our resources page
            </Link>
            .
          </p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-slate-600">
          <p className="mb-2">
            <Link href="/terms" className="hover:text-orange-600 mx-2">Terms</Link>
            <Link href="/privacy" className="hover:text-orange-600 mx-2">Privacy</Link>
            <Link href="/disclaimer" className="hover:text-orange-600 mx-2">Disclaimer</Link>
          </p>
          <p>&copy; {new Date().getFullYear()} ThreadLock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
