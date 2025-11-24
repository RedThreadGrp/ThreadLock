import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HowToDocumentIncidentsForFamilyCourt() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I include when documenting an incident?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Include the date, time, location, who was present, what happened (objective description), any witnesses, and supporting evidence (photos, texts, emails). Write objectively, focusing on facts rather than emotions or interpretations."
        }
      },
      {
        "@type": "Question",
        "name": "How soon after an incident should I document it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Document incidents as soon as possible while details are fresh, ideally within 24 hours. Immediate documentation is more credible and accurate than entries created weeks or months later."
        }
      },
      {
        "@type": "Question",
        "name": "Should I document positive interactions too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Document both positive and negative interactions to create a balanced, credible record. Courts value honesty. A journal showing only problems appears biased, while one showing both positives and negatives demonstrates objectivity."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>How to Document Incidents for Family Court | ThreadLock</title>
        <meta 
          name="description" 
          content="Learn how to document incidents for custody cases. Effective incident documentation techniques for family court with examples and best practices."
        />
        <link rel="canonical" href="https://threadlock.ai/guides/how-to-document-incidents-for-family-court" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">← Back to Home</Link>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How to Document Incidents for Family Court</h1>
          <p className="text-xl text-slate-700 mb-12">
            Proper incident documentation can be crucial evidence in custody cases. Learn how to create credible, detailed records that courts trust.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Document</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Custody Exchange Issues</h3>
                <p className="text-slate-700">Late arrivals, no-shows, condition of child at exchange, intoxication concerns, handoff conflicts</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Communication Problems</h3>
                <p className="text-slate-700">Unresponsive to important messages, hostile communication, violations of court orders</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Child Welfare Concerns</h3>
                <p className="text-slate-700">Safety issues, neglect signs, inappropriate behavior, parental alienation attempts</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Positive Interactions</h3>
                <p className="text-slate-700">Successful co-parenting, positive exchanges, collaborative problem-solving, child's wellbeing</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The 5 W's Method</h2>
            <p className="text-lg text-slate-700 mb-6">Use this structure for every incident entry:</p>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">WHO was involved?</h3>
                <p className="text-slate-700">List all people present: parents, child, witnesses, third parties</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">WHAT happened?</h3>
                <p className="text-slate-700">Objective description of events, actions, and statements</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">WHEN did it occur?</h3>
                <p className="text-slate-700">Specific date and time (as precise as possible)</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">WHERE did it happen?</h3>
                <p className="text-slate-700">Location (address, public place, school, etc.)</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">WHY does it matter?</h3>
                <p className="text-slate-700">Relevance to custody, child's wellbeing, or court orders</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-green-50 p-8 rounded-xl border border-green-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Good Example Entry</h2>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-sm text-slate-600 mb-2"><strong>Date:</strong> March 15, 2025, 6:45 PM</p>
              <p className="text-slate-700">
                Other parent arrived 45 minutes late for custody exchange at McDonald's parking lot (123 Main St). 
                Child was visibly upset and hungry. Other parent stated car broke down but no explanation for not 
                calling. This is the third late pickup this month (previous: March 1, March 8). Child missed dinner 
                and homework time.
              </p>
              <p className="text-sm text-slate-600 mt-3"><strong>Evidence:</strong> Text sent at 6:00 PM asking for ETA (no response), photo of child's upset expression</p>
            </div>
          </section>

          <section className="mb-12 bg-red-50 p-8 rounded-xl border border-red-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Poor Example Entry</h2>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-slate-700">
                <span className="line-through">He was late AGAIN! He's always doing this and doesn't care about our child. 
                This proves he's a terrible parent and the court should see it.</span>
              </p>
              <p className="text-sm text-red-700 mt-3">
                <strong>Problems:</strong> Emotional language, no specific time, no facts, no evidence, appears biased
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Documentation Tools</h2>
            <p className="text-lg text-slate-700 mb-6">
              Use a dedicated platform like ThreadLock that provides:
            </p>
            <ul className="space-y-3 text-slate-700 ml-6 list-disc">
              <li>AI-powered prompts asking the right questions (who, what, when, where, why)</li>
              <li>Automatic date and time stamping</li>
              <li>Ability to attach photos, texts, emails to each entry</li>
              <li>Secure, tamper-evident storage</li>
              <li>Export to PDF for court submission</li>
            </ul>
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
            <h2 className="text-3xl font-bold mb-6">Document Incidents with ThreadLock</h2>
            <p className="text-lg text-slate-200 mb-6">
              ThreadLock's AI-powered journal prompts help you capture complete incident details every time. Never forget important information.
            </p>
            <Link href="/signup" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition inline-block">
              Start Documenting Incidents
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}
