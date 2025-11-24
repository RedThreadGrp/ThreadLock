import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ToolsForManagingCoParentingDocumentation() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I document in a co-parenting situation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Document all communication with the other parent, custody exchanges (dates, times, condition of child), schedule changes, expenses, school involvement, medical appointments, and any incidents or concerns. Keep records organized chronologically for easy reference in case of future disputes."
        }
      },
      {
        "@type": "Question",
        "name": "Is OurFamilyWizard required for documentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While some courts recommend OurFamilyWizard, it's not legally required. ThreadLock provides comprehensive co-parenting documentation at a lower cost ($29/month vs $99-$199/year per parent for OFW). Both parents don't need to use the same platform for your documentation to be valid."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use co-parenting documentation in court?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Well-organized records of communication, custody exchanges, and incidents can be admitted as evidence in custody modifications or enforcement actions. Ensure your documentation is factual, includes dates/times, and references supporting evidence."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Tools for Managing Co-Parenting Documentation | ThreadLock</title>
        <meta 
          name="description" 
          content="Compare tools for managing co-parenting documentation, communication tracking, and custody schedule records. Find the best platform for your co-parenting situation."
        />
        <link rel="canonical" href="https://threadlock.ai/guides/tools-for-managing-co-parenting-documentation" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">← Back to Home</Link>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tools for Managing Co-Parenting Documentation</h1>
          <p className="text-xl text-slate-700 mb-12">
            Effective co-parenting requires documentation of communication, schedules, expenses, and incidents. Compare tools to find the best fit for your situation.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Document</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Communication</h3>
                <p className="text-slate-700">All emails, texts, and conversations about the child, scheduling, expenses, or parenting decisions</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Custody Exchanges</h3>
                <p className="text-slate-700">Date, time, location, condition of child, who picked up/dropped off, any issues</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Schedule Changes</h3>
                <p className="text-slate-700">Requests, agreements, confirmations about deviations from the custody schedule</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Expenses</h3>
                <p className="text-slate-700">Child-related expenses, receipts, reimbursement requests, payment confirmations</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tool Comparison</h2>
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">OurFamilyWizard</h3>
                <p className="text-slate-700 mb-4"><strong>Best for:</strong> High-conflict co-parenting when both parents agree to use it</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Court-admissible records</li>
                      <li>✓ Shared calendar</li>
                      <li>✓ Communication monitoring</li>
                      <li>✓ Expense tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✗ $99-$199/year per parent</li>
                      <li>✗ Both parents must use it</li>
                      <li>✗ Limited evidence storage</li>
                      <li>✗ Focuses only on co-parenting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">ThreadLock</h3>
                <p className="text-slate-700 mb-4"><strong>Best for:</strong> Comprehensive case documentation including co-parenting records</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ $29/month (one parent only)</li>
                      <li>✓ Unlimited evidence storage</li>
                      <li>✓ Automatic timeline</li>
                      <li>✓ Journal + communication tracking</li>
                      <li>✓ Court-ready PDF export</li>
                      <li>✓ Works independently</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Limitations:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Not a shared platform</li>
                      <li>• Requires subscription</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Talking Parents</h3>
                <p className="text-slate-700 mb-4"><strong>Best for:</strong> Communication-focused co-parenting</p>
                <p className="text-sm text-slate-600">
                  <strong>Pros:</strong> Monitored communication, certified records. <strong>Cons:</strong> Limited evidence storage, $9.99/month per parent.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Spreadsheets/Calendars (Free)</h3>
                <p className="text-slate-700 mb-4"><strong>Best for:</strong> Amicable co-parenting with minimal conflict</p>
                <p className="text-sm text-slate-600">
                  <strong>Pros:</strong> Free, flexible. <strong>Cons:</strong> Manual entry, no automatic backup, not court-certified.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-slate-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Differences</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Shared vs. Independent Platforms</h3>
                <p className="text-slate-700">OFW and Talking Parents require both parents to participate. ThreadLock works independently—you control your own documentation regardless of what the other parent uses.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cost Structure</h3>
                <p className="text-slate-700">OFW charges per parent ($99-$199 each). ThreadLock charges one subscription ($29/month) regardless of how many people are involved in your case.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Scope</h3>
                <p className="text-slate-700">OFW focuses on co-parenting communication. ThreadLock provides comprehensive case management including evidence, timelines, court preparation, and co-parenting documentation.</p>
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
            <h2 className="text-3xl font-bold mb-6">Document Co-Parenting with ThreadLock</h2>
            <p className="text-lg text-slate-200 mb-6">
              Track all co-parenting communication, exchanges, and incidents in one secure platform. Works independently—no need for the other parent to participate.
            </p>
            <Link href="/signup" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition inline-block">
              Start Documenting
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}
