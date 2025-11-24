import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BestToolsForSelfRepresentedLitigants() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What software do I need as a self-represented litigant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential software for self-represented litigants includes: case management/organization tools (like ThreadLock), document storage, calendar/deadline tracking, and communication archiving. These help you stay organized, meet deadlines, and present your case effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Is ThreadLock designed for people without lawyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock is specifically designed for self-represented litigants in family law cases. The interface guides you through evidence organization, incident documentation, and court preparation without requiring legal expertise. You can also grant access to an attorney if you decide to hire one later."
        }
      },
      {
        "@type": "Question",
        "name": "Can I afford legal technology as a self-represented litigant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ThreadLock costs $29/month, significantly less than a single hour with most attorneys ($200-$400/hour). Proper organization can save attorney time if you hire limited-scope help, often paying for itself quickly. Free alternatives exist (spreadsheets) but lack the specialized features that save time and reduce stress."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Best Tools for Self-Represented Litigants | Family Law Software</title>
        <meta 
          name="description" 
          content="Compare the best software and tools for self-represented litigants in family law cases. Case management, evidence organization, and court preparation tools."
        />
        <link rel="canonical" href="https://threadlock.ai/guides/best-tools-for-self-represented-litigants" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">← Back to Home</Link>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Best Tools for Self-Represented Litigants</h1>
          <p className="text-xl text-slate-700 mb-12">
            Representing yourself in family court? These tools help you stay organized, meet deadlines, and present your case effectively—without hiring a full-service attorney.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Self-Represented Litigants Need</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">✓ Evidence Organization</h3>
                <p className="text-slate-700">Store and organize emails, texts, documents, photos chronologically</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">✓ Incident Documentation</h3>
                <p className="text-slate-700">Record events as they happen with dates, times, and details</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">✓ Timeline Creation</h3>
                <p className="text-slate-700">Build chronological timelines showing case progression</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">✓ Court Preparation</h3>
                <p className="text-slate-700">Create exhibits, prepare documents for filing</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tool Comparison</h2>
            <div className="space-y-6">
              <div className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">ThreadLock (Specialized for SRLs)</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Best for:</strong> Self-represented litigants in family law cases
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Strengths:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Designed specifically for SRLs</li>
                      <li>✓ No legal expertise required</li>
                      <li>✓ Automatic timeline creation</li>
                      <li>✓ AI-powered documentation help</li>
                      <li>✓ Court-ready export</li>
                      <li>✓ $29/month (affordable)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Limitations:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Requires subscription</li>
                      <li>• Family law focus only</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Spreadsheets (Free)</h3>
                <p className="text-slate-700 mb-4"><strong>Best for:</strong> Extremely budget-conscious users comfortable with manual organization</p>
                <p className="text-sm text-slate-600">
                  <strong>Pros:</strong> Free, flexible. <strong>Cons:</strong> Time-intensive, no file storage, no automation, easy to make mistakes.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">OurFamilyWizard</h3>
                <p className="text-slate-700 mb-4"><strong>Best for:</strong> Co-parent communication and scheduling</p>
                <p className="text-sm text-slate-600">
                  <strong>Pros:</strong> Communication tracking, court-admissible records. <strong>Cons:</strong> Limited evidence storage, expensive ($99-$199/year per parent), requires both parents to use it.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Clio (Attorney Software)</h3>
                <p className="text-slate-700 mb-4"><strong>Best for:</strong> Licensed attorneys managing multiple client cases</p>
                <p className="text-sm text-slate-600">
                  <strong>Pros:</strong> Full practice management. <strong>Cons:</strong> Expensive ($69-$129+/month), attorney-focused interface, overkill for single case.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-slate-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Cost-Benefit Analysis</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Attorney Consultation: $200-400/hour</h3>
                <p className="text-slate-700">If disorganized materials add even 2 hours to attorney review time, that's $400-800 in extra costs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">ThreadLock: $29/month</h3>
                <p className="text-slate-700">Arrive at consultations organized. Save attorney time. $29/month pays for itself if it saves even 10 minutes of attorney time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Time Saved: Priceless</h3>
                <p className="text-slate-700">Reduce stress, feel confident, focus on your case instead of fighting with spreadsheets.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQs</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.name}</h3>
                  <p className="text-slate-700">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Get the Tools You Need</h2>
            <p className="text-lg text-slate-200 mb-6">
              ThreadLock gives self-represented litigants professional-grade case management at an affordable price. No legal expertise required.
            </p>
            <Link href="/signup" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition inline-block">
              Try ThreadLock Free
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}
