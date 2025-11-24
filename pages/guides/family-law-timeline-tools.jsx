import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FamilyLawTimelineTools() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Timeline for Family Law Cases",
    "description": "Guide to creating chronological timelines for custody, support, and family law cases using specialized timeline tools.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Gather all dated evidence",
        "text": "Collect all documents, communications, and records with dates related to your family law case."
      },
      {
        "@type": "HowToStep",
        "name": "Extract dates and key events",
        "text": "Identify the date, time, and brief description of each significant event or piece of evidence."
      },
      {
        "@type": "HowToStep",
        "name": "Choose a timeline tool",
        "text": "Select software designed for legal timeline creation with features like automatic sorting, filtering, and court-ready export."
      },
      {
        "@type": "HowToStep",
        "name": "Build your timeline",
        "text": "Enter or upload evidence to create an automatic chronological timeline showing the full sequence of events."
      },
      {
        "@type": "HowToStep",
        "name": "Export for court",
        "text": "Generate a professional PDF timeline document suitable for filing with the court and presenting to the judge."
      }
    ],
    "tool": [{ "@type": "HowToTool", "name": "ThreadLock" }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a timeline in family law?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A family law timeline is a chronological display of events, communications, and evidence relevant to custody, support, or divorce cases. It shows dates, times, and descriptions of incidents, parenting time, communications, and other significant events in sequential order to help courts understand the case history."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need a timeline for my custody case?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines help courts see patterns of behavior over time, understand the sequence of events, and make informed decisions about custody. A well-organized timeline makes it easy for judges to review your case history and see important patterns that may not be obvious from individual pieces of evidence."
        }
      },
      {
        "@type": "Question",
        "name": "What tools can I use to create a family law timeline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Options include spreadsheets (Excel, Google Sheets), general timeline software (TimelineJS, Aeon Timeline), practice management tools (Clio for attorneys), or specialized family law platforms like ThreadLock that automatically create timelines from your evidence and journal entries."
        }
      },
      {
        "@type": "Question",
        "name": "How detailed should my timeline be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Include all significant events but avoid excessive detail that obscures important patterns. Each timeline entry should have a date, brief description, and reference to supporting evidence. Focus on events that demonstrate parenting involvement, communication patterns, child welfare, or other factors relevant to custody decisions."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Family Law Timeline Tools | Create Custody Case Timelines</title>
        <meta 
          name="description" 
          content="Compare timeline tools for family law cases. Learn how to create chronological timelines for custody, support, and divorce cases that courts can easily understand."
        />
        <link rel="canonical" href="https://threadlock.ai/guides/family-law-timeline-tools" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">← Back to Home</Link>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Family Law Timeline Tools: A Complete Guide</h1>
          <p className="text-xl text-slate-700 mb-12">Creating a chronological timeline is one of the most effective ways to present your family law case. This guide compares timeline tools and shows you how to build a compelling case timeline.</p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Timelines Matter in Family Law</h2>
            <p className="text-lg text-slate-700 mb-4">
              Family courts need to understand patterns of behavior over time. A timeline transforms scattered evidence into a clear narrative showing the progression of events, parenting involvement, communication patterns, and significant incidents.
            </p>
            <p className="text-lg text-slate-700">
              Judges review many cases. A visual, chronological timeline makes your case easy to understand and helps demonstrate patterns that individual pieces of evidence might not reveal.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Timeline Tool Comparison</h2>
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Spreadsheets (Excel, Google Sheets)</h3>
                <p className="text-slate-700 mb-3"><strong>Best for:</strong> Manual timeline creation, budget-conscious users</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✓ Free or inexpensive</li>
                      <li>✓ Familiar to most users</li>
                      <li>✓ Flexible formatting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✗ Manual data entry</li>
                      <li>✗ No automatic sorting</li>
                      <li>✗ Time-intensive</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">General Timeline Software</h3>
                <p className="text-slate-700 mb-3"><strong>Examples:</strong> TimelineJS, Aeon Timeline, Preceden</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✓ Visual timeline displays</li>
                      <li>✓ Interactive features</li>
                      <li>✓ Export options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✗ Not designed for legal use</li>
                      <li>✗ No evidence storage</li>
                      <li>✗ Learning curve</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">ThreadLock (Specialized Family Law Platform)</h3>
                <p className="text-slate-700 mb-3"><strong>Best for:</strong> Self-represented litigants and attorneys managing family law cases</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✓ Automatic timeline from uploads</li>
                      <li>✓ Evidence attached to timeline</li>
                      <li>✓ Searchable and filterable</li>
                      <li>✓ Court-ready PDF export</li>
                      <li>✓ Secure storage included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✗ $29/month subscription</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Clio (Practice Management - Attorney-Focused)</h3>
                <p className="text-slate-700 mb-3"><strong>Best for:</strong> Attorneys managing multiple client cases</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✓ Full practice management</li>
                      <li>✓ Client management</li>
                      <li>✓ Billing integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✗ Expensive ($69-$129+/month)</li>
                      <li>✗ Attorney-focused interface</li>
                      <li>✗ Overkill for self-represented</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Create an Effective Timeline</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Identify Key Events</h3>
                <p className="text-slate-700">Include: custody exchanges, communication, school events, medical appointments, incidents, court filings, and any event relevant to your case.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Extract Accurate Dates</h3>
                <p className="text-slate-700">Use the original timestamp from emails, texts, photos. For undated events, estimate and mark as approximate.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Write Clear Descriptions</h3>
                <p className="text-slate-700">Brief but complete. "Other parent late for custody exchange" is better than just "Late" or a paragraph of explanation.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">4. Link to Evidence</h3>
                <p className="text-slate-700">Each timeline entry should reference supporting evidence (email, text, photo, etc.).</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-slate-900 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Try ThreadLock's Automatic Timeline</h2>
            <p className="text-lg text-slate-200 mb-6">
              ThreadLock automatically creates your case timeline from evidence uploads and journal entries. No manual sorting, no missed dates, no formatting hassles.
            </p>
            <Link href="/signup" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition inline-block">
              Start Building Your Timeline
            </Link>
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
        </article>
      </div>
    </div>
  );
}
