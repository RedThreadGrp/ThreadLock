import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HowToPrepareExhibitsForFamilyCourt() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an exhibit in family court?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An exhibit is a piece of evidence formally presented to the court, typically numbered or lettered (Exhibit A, Exhibit 1, etc.) and accompanied by a brief description. Exhibits can include documents, photos, emails, texts, records, or any other evidence supporting your case."
        }
      },
      {
        "@type": "Question",
        "name": "How do I number my exhibits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use either letters (A, B, C) or numbers (1, 2, 3) consistently. Check your local court rules for preferences. List all exhibits in an index with brief descriptions. Number exhibits in the order you plan to present them or chronologically by date."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need original documents or are copies acceptable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most family courts accept copies, especially for preliminary hearings. Bring originals if you have them, but clean, legible copies are usually sufficient. Check your specific court's rules. Digital evidence (emails, texts) can be presented as screenshots or printouts."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>How to Prepare Exhibits for Family Court | ThreadLock</title>
        <meta 
          name="description" 
          content="Learn how to prepare court exhibits for family law cases. Step-by-step guide for organizing, numbering, and formatting exhibits for custody hearings."
        />
        <link rel="canonical" href="https://threadlock.ai/guides/how-to-prepare-exhibits-for-family-court" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">← Back to Home</Link>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How to Prepare Exhibits for Family Court</h1>
          <p className="text-xl text-slate-700 mb-12">
            Professional exhibit preparation makes your evidence easy for judges to review and understand. Learn the step-by-step process for creating court-ready exhibits.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Exhibit Preparation Steps</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Step 1: Gather Your Evidence</h3>
                <p className="text-slate-700 mb-3">Collect all documents, photos, communications, and records you plan to present. Ensure everything is relevant and supports your case.</p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Email printouts or screenshots</li>
                  <li>Text message screenshots</li>
                  <li>Photos (printed)</li>
                  <li>School/medical records</li>
                  <li>Financial documents</li>
                  <li>Calendar/schedule records</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Step 2: Organize Chronologically</h3>
                <p className="text-slate-700">Arrange exhibits by date (oldest to newest) or by topic if that makes more sense for your case. Chronological order is usually preferred for family law.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Step 3: Number Each Exhibit</h3>
                <p className="text-slate-700 mb-3">Assign each exhibit a unique identifier:</p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li><strong>Petitioner typically uses:</strong> Numbers (1, 2, 3...)</li>
                  <li><strong>Respondent typically uses:</strong> Letters (A, B, C...)</li>
                  <li>Check your court's local rules for guidance</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Step 4: Create Descriptions</h3>
                <p className="text-slate-700 mb-3">Write a brief description for each exhibit:</p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Good: "Email from Jane Smith to John Doe dated March 15, 2025 regarding custody schedule"</li>
                  <li>Good: "Text messages between parties, March 1-15, 2025"</li>
                  <li>Good: "Photo of child's bedroom at mother's residence, taken April 2, 2025"</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Step 5: Create an Exhibit Index</h3>
                <p className="text-slate-700 mb-3">Make a master list of all exhibits with descriptions. Example:</p>
                <div className="bg-white p-4 rounded border border-slate-300">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Exhibit #</th>
                        <th className="text-left py-2">Description</th>
                        <th className="text-left py-2">Pages</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr className="border-b">
                        <td className="py-2">1</td>
                        <td className="py-2">Custody Order dated Jan 10, 2025</td>
                        <td className="py-2">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">2</td>
                        <td className="py-2">Email chain re: schedule changes</td>
                        <td className="py-2">2</td>
                      </tr>
                      <tr>
                        <td className="py-2">3</td>
                        <td className="py-2">School attendance records</td>
                        <td className="py-2">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Step 6: Format Professionally</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Use clean, white paper</li>
                  <li>Ensure all text is legible (no tiny fonts)</li>
                  <li>Add exhibit numbers/letters clearly at top or bottom</li>
                  <li>Use tabs or dividers for easy reference</li>
                  <li>Make multiple copies (one for court, one for other party, one for yourself)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-orange-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">ThreadLock's Exhibit Preparation Tools</h2>
            <p className="text-lg text-slate-700 mb-4">
              ThreadLock automates exhibit preparation:
            </p>
            <ul className="space-y-3 text-slate-700 ml-6 list-disc">
              <li>Automatic exhibit numbering</li>
              <li>Professional PDF generation</li>
              <li>Exhibit index creation</li>
              <li>Clean, court-ready formatting</li>
              <li>Print-ready or email-ready files</li>
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
            <h2 className="text-3xl font-bold mb-6">Prepare Professional Exhibits with ThreadLock</h2>
            <p className="text-lg text-slate-200 mb-6">
              Stop struggling with manual formatting. ThreadLock generates court-ready exhibits automatically.
            </p>
            <Link href="/signup" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition inline-block">
              Get Started
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}
