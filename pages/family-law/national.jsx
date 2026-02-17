import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FamilyLawNational() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "ThreadLock - National Family Law Support",
    "description": "Family law case management software available throughout the United States for custody, support, and court documentation",
    "url": "https://threadlock.ai/family-law/national",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": "Legal Technology Platform",
    "provider": {
      "@type": "Organization",
      "name": "ThreadLock",
      "url": "https://threadlock.ai",
      "logo": "https://threadlock.ai/threadlock-logo.png"
    },
    "termsOfService": "https://threadlock.ai/terms",
    "privacyPolicy": "https://threadlock.ai/privacy"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is ThreadLock available in all U.S. states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock is available throughout the United States. Our core evidence management, timeline building, and court preparation features work in all jurisdictions. State-specific legal form libraries are available for Oregon, Washington, and California, with more states being added regularly."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need different software for different states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. ThreadLock works seamlessly across all U.S. states. Your account and data travel with you if you move states. Evidence organization, journaling, timeline, and document features are universal and work with any U.S. family court."
        }
      },
      {
        "@type": "Question",
        "name": "Does ThreadLock handle state-specific court requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ThreadLock provides flexible document preparation tools that work with varying state requirements. For select states, we offer pre-built form libraries with state-specific court forms. Even without state-specific forms, all our organizational and timeline features work for any state's family court system."
        }
      }
    ]
  };

  const states = [
    { name: 'Oregon', slug: 'oregon', status: 'Available Now' },
    { name: 'Washington', slug: 'washington', status: 'Available Now' },
    { name: 'California', slug: 'california', status: 'Available Now' },
    { name: 'Texas', status: 'Coming Soon' },
    { name: 'Florida', status: 'Coming Soon' },
    { name: 'New York', status: 'Coming Soon' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>National Family Law Case Management | ThreadLock</title>
        <meta 
          name="description" 
          content="ThreadLock family law software is available throughout the United States. Organize evidence, document custody incidents, and prepare for family court in any U.S. jurisdiction."
        />
        <link rel="canonical" href="https://threadlock.ai/family-law/national" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav className="mb-8">
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Family Law Case Management<br />
            <span className="text-orange-400">Available Nationwide</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl">
            ThreadLock serves self-represented litigants and legal professionals throughout the United States. 
            Organize evidence, document incidents, and prepare for family court—wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition text-center"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="bg-white text-slate-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-100 transition text-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Nationwide Availability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Works in All 50 States
          </h2>
          <p className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            ThreadLock's core features work seamlessly across all U.S. jurisdictions. Whether you're in a 
            major metro or a small town, our evidence management, timeline building, and court preparation 
            tools adapt to your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Universal Features</h3>
              <ul className="space-y-3 text-slate-700">
                <li>✓ Evidence upload & organization</li>
                <li>✓ Incident journal with timestamps</li>
                <li>✓ Chronological timeline</li>
                <li>✓ Document OCR & text extraction</li>
                <li>✓ Court-ready PDF export</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">No Geographic Limits</h3>
              <ul className="space-y-3 text-slate-700">
                <li>✓ Works in all U.S. states</li>
                <li>✓ Works in all counties</li>
                <li>✓ No regional restrictions</li>
                <li>✓ Cloud-based access anywhere</li>
                <li>✓ Move states without losing data</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Growing State Resources</h3>
              <ul className="space-y-3 text-slate-700">
                <li>✓ State-specific form libraries</li>
                <li>✓ Jurisdiction-specific guides</li>
                <li>✓ Local court resources</li>
                <li>✓ State bar connections</li>
                <li>✓ Expanding monthly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Family Law Challenges */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Common Challenges Across All States
          </h2>
          <p className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            No matter where you live, family law cases involve similar core challenges. ThreadLock addresses 
            the universal problems that SRLs and legal professionals face nationwide.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Evidence Disorganization</h3>
              <p className="text-slate-700 mb-4">
                Emails, texts, receipts, photos—scattered across devices and accounts. Courts expect organized, 
                chronological evidence. ThreadLock provides one secure place for everything.
              </p>
              <p className="text-orange-600 font-semibold">
                → Organize all evidence chronologically in minutes
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Incomplete Documentation</h3>
              <p className="text-slate-700 mb-4">
                Memory fades. Details matter. Without systematic documentation, critical incidents go unrecorded. 
                ThreadLock's AI-powered journal prompts help capture complete, credible records.
              </p>
              <p className="text-orange-600 font-semibold">
                → Never miss important details again
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Court Preparation Overwhelm</h3>
              <p className="text-slate-700 mb-4">
                Preparing exhibits, organizing documents, creating summaries—it's overwhelming when you're doing 
                it alone. ThreadLock guides you through each step with clear workflows.
              </p>
              <p className="text-orange-600 font-semibold">
                → Step-by-step preparation for court
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Legal Costs Adding Up</h3>
              <p className="text-slate-700 mb-4">
                Every hour an attorney spends organizing your materials costs money. Arrive prepared with 
                organized evidence and save significant legal fees.
              </p>
              <p className="text-orange-600 font-semibold">
                → Save hours of attorney time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State-Specific Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            State-Specific Information
          </h2>
          <p className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            Looking for information specific to your state? We're building comprehensive guides and resources 
            for each state's family law system.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {states.map((state) => (
              <div
                key={state.name}
                className={`p-6 rounded-xl border-2 ${
                  state.slug
                    ? 'bg-white border-orange-500 hover:shadow-lg transition'
                    : 'bg-slate-50 border-slate-300'
                }`}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{state.name}</h3>
                <p className={`text-sm font-semibold mb-4 ${
                  state.slug ? 'text-green-600' : 'text-slate-500'
                }`}>
                  {state.status}
                </p>
                {state.slug ? (
                  <Link
                    href={`/family-law/${state.slug}`}
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    View {state.name} Page →
                  </Link>
                ) : (
                  <p className="text-slate-600 text-sm">State page coming soon</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-8">
            Don't see your state? <Link href="/contact" className="text-orange-600 hover:underline">Contact us</Link> to 
            request priority for your state's resources.
          </p>
        </div>
      </section>

      {/* How ThreadLock Works Nationally */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            How ThreadLock Works in Your Jurisdiction
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Upload Your Evidence</h3>
                  <p className="text-slate-700 mb-4">
                    Documents, photos, emails, texts, receipts—upload anything relevant to your case. ThreadLock 
                    securely stores everything in one place, accessible from any device.
                  </p>
                  <ul className="text-slate-600 space-y-2 ml-4">
                    <li>• Works with any document format</li>
                    <li>• OCR extracts text from images and PDFs</li>
                    <li>• Automatic date and timestamp capture</li>
                    <li>• Unlimited storage on all plans</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Document Incidents as They Happen</h3>
                  <p className="text-slate-700 mb-4">
                    Use our AI-powered journal to record incidents, conversations, and events. Never forget details. 
                    Our prompts help you capture who, what, when, where, and why.
                  </p>
                  <ul className="text-slate-600 space-y-2 ml-4">
                    <li>• Date and time automatically recorded</li>
                    <li>• AI suggestions for complete documentation</li>
                    <li>• Attach photos and evidence to entries</li>
                    <li>• Export journal entries to PDF</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Build Your Chronological Timeline</h3>
                  <p className="text-slate-700 mb-4">
                    ThreadLock automatically organizes all your evidence and journal entries chronologically. 
                    See your case story unfold in order—the way courts prefer.
                  </p>
                  <ul className="text-slate-600 space-y-2 ml-4">
                    <li>• Automatic timeline from all your entries</li>
                    <li>• Filter by date range or category</li>
                    <li>• Visual timeline view</li>
                    <li>• Export to court-ready PDF</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Prepare Court-Ready Materials</h3>
                  <p className="text-slate-700 mb-4">
                    Create exhibits, organize documents, and generate professional PDFs ready for court filing. 
                    Works with any jurisdiction's requirements.
                  </p>
                  <ul className="text-slate-600 space-y-2 ml-4">
                    <li>• Professional PDF generation</li>
                    <li>• Exhibit numbering and organization</li>
                    <li>• Annotation and highlighting tools</li>
                    <li>• Print or file electronically</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Collaborate with Attorneys (Optional)</h3>
                  <p className="text-slate-700 mb-4">
                    Working with a lawyer? Grant them secure access to your organized materials. Save attorney 
                    time (and your money) by handing them a perfectly organized case file.
                  </p>
                  <ul className="text-slate-600 space-y-2 ml-4">
                    <li>• Secure attorney access seats</li>
                    <li>• Professional review tools (Pro plan)</li>
                    <li>• Selective document sharing</li>
                    <li>• Works with attorneys in any state</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Is ThreadLock available in all U.S. states?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock is available throughout the United States. Our core evidence management, 
                timeline building, and court preparation features work in all jurisdictions. State-specific 
                legal form libraries are available for Oregon, Washington, and California, with more states 
                being added regularly.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Do I need different software for different states?
              </h3>
              <p className="text-slate-700">
                No. ThreadLock works seamlessly across all U.S. states. Your account and data travel with you 
                if you move states. Evidence organization, journaling, timeline, and document features are 
                universal and work with any U.S. family court.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Does ThreadLock handle state-specific court requirements?
              </h3>
              <p className="text-slate-700">
                ThreadLock provides flexible document preparation tools that work with varying state requirements. 
                For select states, we offer pre-built form libraries with state-specific court forms. Even 
                without state-specific forms, all our organizational and timeline features work for any state's 
                family court system.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Can attorneys in any state use ThreadLock?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock Pro is available to legal professionals nationwide. Attorneys, paralegals, and 
                legal staff can use ThreadLock to manage client cases regardless of their state bar membership. 
                Our professional features, including Clio integration and review queue, work for any jurisdiction.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                What if I move to a different state during my case?
              </h3>
              <p className="text-slate-700">
                Your ThreadLock account and all your data stay with you. There's no need to transfer accounts 
                or re-upload documents. Simply continue using ThreadLock in your new state. All features remain 
                fully functional regardless of your location.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Is ThreadLock approved by state courts?
              </h3>
              <p className="text-slate-700">
                ThreadLock is case management software—it doesn't require court approval to use. Courts accept 
                documents prepared using any word processor or organizational tool. ThreadLock generates 
                professional PDFs that meet standard court filing requirements. We are not a court filing 
                service; users file documents themselves through their local court's procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Organized?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join thousands of families across the United States using ThreadLock to take control of their 
            family law cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-100 transition text-center"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="bg-orange-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-900 transition text-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">More Resources</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/" className="text-center p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <p className="font-semibold text-slate-800">Homepage</p>
            </Link>
            <Link href="/pricing" className="text-center p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <p className="font-semibold text-slate-800">Pricing</p>
            </Link>
            <Link href="/resources" className="text-center p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <p className="font-semibold text-slate-800">Resources & Guides</p>
            </Link>
            <Link href="/professionals" className="text-center p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <p className="font-semibold text-slate-800">For Professionals</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
