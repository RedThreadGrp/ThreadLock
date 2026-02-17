import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FamilyLawWashington() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "ThreadLock - Washington Family Law",
    "description": "Family law case management tools for Washington custody cases, child support documentation, and family court preparation. Serving Seattle, Spokane, Tacoma, Vancouver, and all Washington counties.",
    "url": "https://threadlock.ai/family-law/washington",
    "areaServed": {
      "@type": "State",
      "name": "Washington"
    },
    "serviceType": "Legal Technology Platform",
    "provider": {
      "@type": "Organization",
      "name": "ThreadLock",
      "url": "https://threadlock.ai"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://app.threadlock.ai/signup"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does ThreadLock work with Washington family courts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock works with all Washington family courts including King County, Pierce County, Spokane County, Snohomish County, Clark County, and all other Washington counties. Our evidence organization and timeline features help you prepare materials for any Washington family court proceeding."
        }
      },
      {
        "@type": "Question",
        "name": "Can I access Washington State family law forms through ThreadLock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock includes Washington State family law forms in our legal form library. Forms are organized by case type (custody, support, divorce) and can be filled out directly in the platform using your case information."
        }
      },
      {
        "@type": "Question",
        "name": "Do Washington State attorneys use ThreadLock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock Pro is used by Washington family law attorneys and paralegals for client case management, evidence review, and document preparation. Washington State Bar members can use ThreadLock to collaborate with self-represented clients or manage their practice."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Washington Family Law Case Management | ThreadLock</title>
        <meta 
          name="description" 
          content="ThreadLock family law software for Washington State. Organize custody evidence, document incidents, and prepare for Washington family court. Serving Seattle, Spokane, Tacoma, and all WA counties."
        />
        <link rel="canonical" href="https://threadlock.ai/family-law/washington" />
        <meta property="og:title" content="Washington Family Law Case Management | ThreadLock" />
        <meta property="og:description" content="Organize evidence and prepare for Washington State family court." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav className="mb-8">
            <Link href="/family-law/national" className="text-orange-400 hover:text-orange-300 font-semibold">
              ← All States
            </Link>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Family Law Case Management<br />
            <span className="text-orange-400">for Washington State</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8">
            Organize evidence, document incidents, and prepare for Washington family court. Serving Seattle, Spokane, Tacoma, Vancouver, and all Washington counties.
          </p>
          <Link
            href="/signup"
            className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition inline-block"
          >
            Get Started in Washington
          </Link>
        </div>
      </section>

      {/* Washington Context */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Family Law in Washington State</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-slate-700 mb-4">
                Washington State has one of the highest rates of self-represented litigants in family court. Whether you're navigating custody matters in King County Superior Court, child support in Pierce County, or parenting plan modifications in Spokane County, having organized documentation is essential.
              </p>
              <p className="text-lg text-slate-700">
                Washington courts require parenting plans to be detailed and evidence-based. ThreadLock helps Washington families organize the evidence needed to support their parenting plan proposals and custody requests.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Washington Coverage</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ All 39 Washington counties</li>
                <li>✓ Seattle metro (King, Snohomish, Pierce counties)</li>
                <li>✓ Spokane County</li>
                <li>✓ Clark County (Vancouver)</li>
                <li>✓ Yakima County</li>
                <li>✓ Whatcom County (Bellingham)</li>
                <li>✓ Rural Washington counties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How ThreadLock Helps Washington Users */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            How ThreadLock Helps Washington Families
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Washington Parenting Plan Evidence</h3>
              <p className="text-slate-700 mb-4">
                Washington State requires detailed parenting plans with evidence supporting each parent's involvement and capability. ThreadLock helps you organize documentation of school involvement, medical appointments, extracurricular activities, and day-to-day parenting responsibilities.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Document parenting time and involvement</li>
                <li>• Track communication with other parent</li>
                <li>• Organize school and medical records</li>
                <li>• Build chronological parenting history</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Washington Family Court Preparation</h3>
              <p className="text-slate-700 mb-4">
                Washington family courts in Seattle, Spokane, and throughout the state expect well-organized evidence presentations. ThreadLock's timeline and exhibit preparation tools help you create professional court-ready materials that meet Washington court standards.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Professional exhibit preparation</li>
                <li>• Chronological case summaries</li>
                <li>• Declaration support documentation</li>
                <li>• Parenting plan evidence organization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Washington Legal Forms & Documents</h3>
              <p className="text-slate-700 mb-4">
                Access Washington State-specific family law forms through ThreadLock's form library. Includes common Washington parenting plans, child support worksheets, and modification forms with auto-fill capabilities.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Washington parenting plan forms</li>
                <li>• Washington child support worksheets</li>
                <li>• Modification and enforcement forms</li>
                <li>• Auto-fill from your case data</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Work with Washington Attorneys</h3>
              <p className="text-slate-700 mb-4">
                Collaborating with a Washington family law attorney? Grant them secure access to your ThreadLock account. Save money on attorney time by providing organized, court-ready materials.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Secure attorney access seats</li>
                <li>• Share organized case files</li>
                <li>• Reduce attorney preparation costs</li>
                <li>• Works with Washington State Bar members</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Washington Case Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Washington Family Law Case Types
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Parenting Plans & Custody</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• Initial parenting plan creation</li>
                <li>• Parenting plan modifications</li>
                <li>• Residential schedule disputes</li>
                <li>• Decision-making authority</li>
                <li>• Relocation matters</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Child Support</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• Washington child support worksheets</li>
                <li>• Income verification</li>
                <li>• Support modifications</li>
                <li>• Deviation requests</li>
                <li>• Enforcement actions</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Other Family Matters</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• Dissolution of marriage (divorce)</li>
                <li>• Spousal maintenance</li>
                <li>• Property division</li>
                <li>• Post-decree modifications</li>
                <li>• Protection orders (evidence org)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Washington FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Does ThreadLock work with Washington family courts?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock works with all Washington family courts including King County, Pierce County, Spokane County, Snohomish County, Clark County, and all other Washington counties. Our evidence organization and timeline features help you prepare materials for any Washington family court proceeding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Can I access Washington State family law forms through ThreadLock?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock includes Washington State family law forms in our legal form library, including parenting plans and child support worksheets. Forms can be filled out directly in the platform using your case information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Do Washington State attorneys use ThreadLock?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock Pro is used by Washington family law attorneys and paralegals for client case management, evidence review, and document preparation. Washington State Bar members use ThreadLock to collaborate with self-represented clients and manage their practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Can ThreadLock help me with King County family court?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock works with King County Superior Court (Seattle, Bellevue) and all other Washington counties. Whether you're in Pierce County (Tacoma), Spokane County, Clark County (Vancouver), or any other Washington county, ThreadLock's features work the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Washington Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Washington Family Law Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.wsba.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Washington State Bar Association</h3>
              <p className="text-slate-600 text-sm">Attorney referral, legal resources, and self-help information</p>
              <p className="text-orange-600 text-sm mt-2">wsba.org →</p>
            </a>

            <a
              href="https://www.courts.wa.gov/programs_orgs/pos_family"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Washington Courts - Family Law</h3>
              <p className="text-slate-600 text-sm">Family law forms, self-help resources, and court information</p>
              <p className="text-orange-600 text-sm mt-2">courts.wa.gov →</p>
            </a>

            <a
              href="https://www.washingtonlawhelp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Washington Law Help</h3>
              <p className="text-slate-600 text-sm">Free legal information and resources for Washington residents</p>
              <p className="text-orange-600 text-sm mt-2">washingtonlawhelp.org →</p>
            </a>

            <a
              href="https://nwjustice.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Northwest Justice Project</h3>
              <p className="text-slate-600 text-sm">Free legal assistance for eligible low-income Washington residents</p>
              <p className="text-orange-600 text-sm mt-2">nwjustice.org →</p>
            </a>
          </div>
          <p className="text-center text-sm text-slate-600 mt-8">
            ThreadLock is not affiliated with these organizations. Links provided as public resources.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Organized for Your Washington Case?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join Washington families using ThreadLock to manage parenting plans, custody, and family law cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="bg-orange-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-800 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
