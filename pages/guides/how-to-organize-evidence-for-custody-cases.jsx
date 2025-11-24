import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HowToOrganizeEvidenceForCustodyCases() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Organize Evidence for Custody Cases",
    "description": "Step-by-step guide for organizing evidence, documentation, and exhibits for family law custody cases to present effectively in court.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Collect all relevant documentation",
        "text": "Gather emails, text messages, photos, receipts, school records, medical records, and any other evidence related to your custody case. Include communication with the other parent, documentation of parenting time, and records of the child's activities and wellbeing."
      },
      {
        "@type": "HowToStep",
        "name": "Organize evidence chronologically",
        "text": "Sort all evidence by date to create a clear timeline of events. This chronological organization helps courts understand the sequence of events and see patterns over time. Use timestamps from emails, texts, and photos to establish precise dates and times."
      },
      {
        "@type": "HowToStep",
        "name": "Categorize by type and topic",
        "text": "Tag evidence by category (communication, parenting time, child welfare, financial, etc.) and topic (school involvement, medical care, discipline, etc.). This allows you to quickly find specific evidence when needed and present related items together."
      },
      {
        "@type": "HowToStep",
        "name": "Create a centralized digital system",
        "text": "Store all evidence in one secure, accessible location. Use a dedicated case management platform like ThreadLock to keep everything organized, backed up, and easily searchable. Avoid scattered folders across devices and email accounts."
      },
      {
        "@type": "HowToStep",
        "name": "Prepare court-ready exhibits",
        "text": "Format your organized evidence as numbered exhibits with clear descriptions. Ensure each exhibit is legible, properly dated, and includes source information. Create an exhibit list that the court can reference during hearings."
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "ThreadLock"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What evidence do I need for a custody case?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential evidence for custody cases includes: communication records (emails, texts, voicemails), documentation of parenting time and involvement, school records, medical records, photos and videos showing parent-child interactions, financial records (child support, expenses), incident reports, witness statements, and any documentation related to the child's wellbeing and best interests."
        }
      },
      {
        "@type": "Question",
        "name": "How do I organize digital evidence like texts and emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organize digital evidence chronologically in a secure digital platform. For each text or email, preserve the date, time, sender, and complete message. Take screenshots with visible timestamps. Use OCR (optical character recognition) to make images searchable. Tag messages by topic (discipline, scheduling, child welfare) for easy retrieval."
        }
      },
      {
        "@type": "Question",
        "name": "Should I organize evidence chronologically or by category?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use both. Your primary organization should be chronological (by date) so the court can see the timeline of events. Within your chronological timeline, tag evidence by category (communication, parenting time, financial, etc.) so you can filter and find specific types of evidence when needed. This dual organization provides maximum flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "How far back should I go when organizing custody evidence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Include evidence from the entire relevant time period, typically from separation or when custody issues began. Focus most heavily on recent evidence (last 6-12 months) as courts prioritize current circumstances, but include older evidence if it shows important patterns or establishes a history of behavior relevant to custody decisions."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best way to store custody evidence securely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a secure cloud-based platform designed for legal case management. Look for features including: encryption in transit, user-controlled access, backup and recovery, searchability, chronological organization, and court-ready export options. Avoid storing sensitive evidence in unsecured email accounts or public cloud storage."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>How to Organize Evidence for Custody Cases | ThreadLock</title>
        <meta 
          name="description" 
          content="Learn how to organize evidence for family law custody cases. Step-by-step guide for collecting, organizing, and presenting custody evidence effectively in court."
        />
        <link rel="canonical" href="https://threadlock.ai/guides/how-to-organize-evidence-for-custody-cases" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">
            ← Back to Home
          </Link>
        </nav>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How to Organize Evidence for Custody Cases
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Organizing evidence effectively can make the difference between a confusing pile of documents and a compelling case presentation. This guide shows you how to collect, organize, and prepare custody evidence for family court.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Evidence Organization Matters</h2>
            <p className="text-lg text-slate-700 mb-4">
              Family courts make custody decisions based on the child's best interests, and evidence is how you demonstrate your involvement, capability, and commitment as a parent. Disorganized evidence gets overlooked. Chronologically organized, well-presented evidence tells a clear story.
            </p>
            <p className="text-lg text-slate-700">
              Judges review numerous cases daily. Clear, organized evidence makes it easy for them to understand your situation. Scattered, disorganized evidence creates confusion and weakens your position—even if the underlying facts support your case.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Step-by-Step: Organizing Your Custody Evidence</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 1: Collect All Relevant Documentation</h3>
                <p className="text-slate-700 mb-4">
                  Start by gathering every piece of evidence related to your custody case. Cast a wide net initially—you can always exclude items later, but you can't retroactively create evidence that wasn't preserved.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">What to Collect:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Communication records:</strong> Emails, text messages, voicemails, app messages</li>
                  <li><strong>Parenting time documentation:</strong> Calendars, pickup/dropoff records, schedule changes</li>
                  <li><strong>School involvement:</strong> Attendance at conferences, communication with teachers, volunteer records</li>
                  <li><strong>Medical records:</strong> Doctor's appointments, medical decisions, health insurance</li>
                  <li><strong>Activity participation:</strong> Sports, extracurriculars, special events attended</li>
                  <li><strong>Photos and videos:</strong> Parent-child interactions, living environment, activities</li>
                  <li><strong>Financial records:</strong> Child support payments, expense receipts, purchases for child</li>
                  <li><strong>Incident documentation:</strong> Late pickups, missed visits, concerning behavior</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 2: Organize Evidence Chronologically</h3>
                <p className="text-slate-700 mb-4">
                  Chronological organization is critical for custody cases. Courts need to see how situations evolved over time and identify patterns of behavior.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">How to Create a Timeline:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Sort all evidence by date and time (oldest to newest)</li>
                  <li>Use the timestamp from the original source (email sent date, photo EXIF data, etc.)</li>
                  <li>For undated items, estimate based on context and note as approximate</li>
                  <li>Create a master timeline showing all events in sequence</li>
                  <li>Ensure each timeline entry references the supporting evidence</li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-slate-600">
                    <strong>Tool Tip:</strong> ThreadLock automatically creates chronological timelines from your uploads and journal entries, eliminating manual sorting and reducing errors.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 3: Categorize by Type and Topic</h3>
                <p className="text-slate-700 mb-4">
                  While chronological order is your primary organization, categorical tags let you quickly find specific types of evidence during preparation and hearings.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Useful Categories:</h4>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-900 mb-2">By Evidence Type:</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Email</li>
                      <li>• Text message</li>
                      <li>• Photo</li>
                      <li>• Video</li>
                      <li>• Document</li>
                      <li>• Receipt</li>
                      <li>• Record (school, medical)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-900 mb-2">By Topic:</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Parenting time/schedule</li>
                      <li>• School involvement</li>
                      <li>• Medical care</li>
                      <li>• Discipline/behavior</li>
                      <li>• Financial support</li>
                      <li>• Safety concerns</li>
                      <li>• Communication breakdown</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 4: Create a Centralized Digital System</h3>
                <p className="text-slate-700 mb-4">
                  Scattered evidence across email accounts, phone photos, computer folders, and paper files creates chaos. A centralized system ensures nothing gets lost and everything is accessible when you need it.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Requirements for Your System:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Secure storage:</strong> Encryption, access controls, backup</li>
                  <li><strong>Easy upload:</strong> Photos, documents, emails from any device</li>
                  <li><strong>Automatic organization:</strong> Chronological sorting, date extraction</li>
                  <li><strong>Searchability:</strong> Find specific evidence quickly</li>
                  <li><strong>Court-ready export:</strong> Generate professional PDFs for filing</li>
                  <li><strong>Mobile access:</strong> Document incidents as they happen</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 5: Prepare Court-Ready Exhibits</h3>
                <p className="text-slate-700 mb-4">
                  Once organized, transform your evidence into formal court exhibits. Exhibits are numbered, described, and formatted according to court requirements.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Exhibit Preparation Checklist:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Number each exhibit sequentially (Exhibit A, Exhibit 1, etc.)</li>
                  <li>Include a brief description of each exhibit</li>
                  <li>Ensure text is legible (OCR scanned documents if needed)</li>
                  <li>Include date, source, and context for each exhibit</li>
                  <li>Create an exhibit index/list for easy reference</li>
                  <li>Format as professional PDFs</li>
                  <li>Print on clean white paper if filing in person</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-orange-50 p-8 rounded-xl border border-orange-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tool Comparison: Evidence Organization Options</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-orange-300">
                    <th className="pb-3 pr-4 font-semibold text-slate-900">Method</th>
                    <th className="pb-3 pr-4 font-semibold text-slate-900">Pros</th>
                    <th className="pb-3 font-semibold text-slate-900">Cons</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-orange-200">
                    <td className="py-4 pr-4 font-semibold">Paper Binders</td>
                    <td className="py-4 pr-4 text-sm">Tangible, courtroom-ready</td>
                    <td className="py-4 text-sm">No backup, hard to search, time-intensive</td>
                  </tr>
                  <tr className="border-b border-orange-200">
                    <td className="py-4 pr-4 font-semibold">Spreadsheets</td>
                    <td className="py-4 pr-4 text-sm">Free, flexible</td>
                    <td className="py-4 text-sm">Manual entry, no file storage, not designed for legal</td>
                  </tr>
                  <tr className="border-b border-orange-200">
                    <td className="py-4 pr-4 font-semibold">Email/Cloud Storage</td>
                    <td className="py-4 pr-4 text-sm">Accessible, already using</td>
                    <td className="py-4 text-sm">Scattered, no organization, not secure for legal</td>
                  </tr>
                  <tr className="border-b border-orange-200">
                    <td className="py-4 pr-4 font-semibold">OurFamilyWizard</td>
                    <td className="py-4 pr-4 text-sm">Co-parenting focus, communication</td>
                    <td className="py-4 text-sm">Limited evidence storage, expensive for full features</td>
                  </tr>
                  <tr className="bg-orange-100">
                    <td className="py-4 pr-4 font-semibold">ThreadLock</td>
                    <td className="py-4 pr-4 text-sm">
                      Automatic timeline, unlimited storage, OCR, AI assistance, court-ready export
                    </td>
                    <td className="py-4 text-sm">Requires subscription ($29/month)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">❌ Waiting Until the Last Minute</h3>
                <p className="text-red-900">Start organizing evidence immediately. Scrambling before a hearing leads to missing documents and weak presentation.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">❌ Including Irrelevant Evidence</h3>
                <p className="text-red-900">Quality over quantity. Irrelevant evidence dilutes your message and wastes the court's time. Focus on what matters to custody decisions.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">❌ Poor Organization</h3>
                <p className="text-red-900">Random order makes evidence hard to follow. Chronological organization with clear categories is essential.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">❌ Illegible Documents</h3>
                <p className="text-red-900">Blurry photos, poor scans, and tiny text frustrate courts. Ensure all evidence is clearly legible.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">What evidence do I need for a custody case?</h3>
                <p className="text-slate-700">
                  Essential evidence for custody cases includes: communication records (emails, texts, voicemails), documentation of parenting time and involvement, school records, medical records, photos and videos showing parent-child interactions, financial records (child support, expenses), incident reports, witness statements, and any documentation related to the child's wellbeing and best interests.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">How do I organize digital evidence like texts and emails?</h3>
                <p className="text-slate-700">
                  Organize digital evidence chronologically in a secure digital platform. For each text or email, preserve the date, time, sender, and complete message. Take screenshots with visible timestamps. Use OCR (optical character recognition) to make images searchable. Tag messages by topic (discipline, scheduling, child welfare) for easy retrieval.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Should I organize evidence chronologically or by category?</h3>
                <p className="text-slate-700">
                  Use both. Your primary organization should be chronological (by date) so the court can see the timeline of events. Within your chronological timeline, tag evidence by category (communication, parenting time, financial, etc.) so you can filter and find specific types of evidence when needed. This dual organization provides maximum flexibility.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">How far back should I go when organizing custody evidence?</h3>
                <p className="text-slate-700">
                  Include evidence from the entire relevant time period, typically from separation or when custody issues began. Focus most heavily on recent evidence (last 6-12 months) as courts prioritize current circumstances, but include older evidence if it shows important patterns or establishes a history of behavior relevant to custody decisions.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">What's the best way to store custody evidence securely?</h3>
                <p className="text-slate-700">
                  Use a secure cloud-based platform designed for legal case management. Look for features including: encryption in transit, user-controlled access, backup and recovery, searchability, chronological organization, and court-ready export options. Avoid storing sensitive evidence in unsecured email accounts or public cloud storage.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-slate-900 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Get Organized with ThreadLock</h2>
            <p className="text-lg text-slate-200 mb-6">
              ThreadLock provides everything you need to organize custody evidence effectively: automatic chronological timelines, unlimited secure storage, OCR text extraction, smart categorization, and court-ready PDF export.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition text-center"
              >
                Start Organizing Your Evidence
              </Link>
              <Link
                href="/pricing"
                className="bg-slate-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-800 transition text-center"
              >
                View Pricing
              </Link>
            </div>
          </section>

          <footer className="border-t border-slate-200 pt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/family-law-timeline-tools" className="text-orange-600 hover:underline">
                → Family Law Timeline Tools
              </Link>
              <Link href="/guides/how-to-document-incidents-for-family-court" className="text-orange-600 hover:underline">
                → How to Document Incidents for Family Court
              </Link>
              <Link href="/guides/best-tools-for-self-represented-litigants" className="text-orange-600 hover:underline">
                → Best Tools for Self-Represented Litigants
              </Link>
              <Link href="/family-law/national" className="text-orange-600 hover:underline">
                → Family Law by State
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
