import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FamilyLawOregon() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "ThreadLock - Oregon Family Law",
    "description": "Family law case management tools for Oregon custody cases, child support documentation, and family court preparation. Serving Portland, Eugene, Salem, Bend, and all Oregon counties.",
    "url": "https://threadlock.ai/family-law/oregon",
    "areaServed": {
      "@type": "State",
      "name": "Oregon"
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
        "name": "Does ThreadLock work with Oregon family courts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock works with all Oregon family courts including Multnomah County, Lane County, Marion County, Deschutes County, and all other Oregon counties. Our evidence organization and timeline features help you prepare materials for any Oregon family court proceeding."
        }
      },
      {
        "@type": "Question",
        "name": "Can I access Oregon-specific family law forms through ThreadLock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock includes Oregon family law forms in our legal form library. Forms are organized by case type (custody, support, divorce) and can be filled out directly in the platform using your case information."
        }
      },
      {
        "@type": "Question",
        "name": "Do Oregon attorneys use ThreadLock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ThreadLock Pro is used by Oregon family law attorneys and paralegals for client case management, evidence review, and document preparation. Oregon bar members can use ThreadLock to collaborate with self-represented clients or manage their practice."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Oregon Family Law Case Management | ThreadLock</title>
        <meta 
          name="description" 
          content="ThreadLock family law software for Oregon. Organize custody evidence, document incidents, and prepare for Oregon family court. Serving Portland, Eugene, Salem, Bend, and all Oregon counties."
        />
        <link rel="canonical" href="https://threadlock.ai/family-law/oregon" />
        <meta property="og:title" content="Oregon Family Law Case Management | ThreadLock" />
        <meta property="og:description" content="Organize evidence and prepare for Oregon family court. Available throughout Oregon." />
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
            <span className="text-orange-400">for Oregon</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8">
            Organize evidence, document incidents, and prepare for Oregon family court. Serving Portland, Eugene, Salem, Bend, and all Oregon counties.
          </p>
          <Link
            href="/signup"
            className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition inline-block"
          >
            Get Started in Oregon
          </Link>
        </div>
      </section>

      {/* Oregon Context */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Family Law in Oregon</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-slate-700 mb-4">
                Oregon has a significant population of self-represented litigants in family court. Whether you're navigating custody matters in Multnomah County Circuit Court, child support in Lane County, or parenting time modifications in Marion County, having organized documentation is critical.
              </p>
              <p className="text-lg text-slate-700">
                Oregon courts expect evidence to be presented chronologically and clearly. ThreadLock helps Oregon residents meet these expectations by providing professional-grade case management tools designed for family law.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Oregon Coverage</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ All 36 Oregon counties</li>
                <li>✓ Portland metro (Multnomah, Clackamas, Washington counties)</li>
                <li>✓ Eugene/Springfield (Lane County)</li>
                <li>✓ Salem (Marion County)</li>
                <li>✓ Bend (Deschutes County)</li>
                <li>✓ Medford (Jackson County)</li>
                <li>✓ Rural Oregon counties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How ThreadLock Helps Oregon Users */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            How ThreadLock Helps Oregon Families
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Oregon Custody Evidence Organization</h3>
              <p className="text-slate-700 mb-4">
                Oregon custody cases require comprehensive evidence of parenting ability, involvement, and the child's best interests. ThreadLock helps you organize emails, text messages, school records, medical documentation, and incident reports chronologically—the way Oregon courts prefer.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Upload and tag custody-related evidence</li>
                <li>• Chronological timeline of parenting involvement</li>
                <li>• Document co-parent communication patterns</li>
                <li>• Track participation in child's activities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Oregon Family Court Preparation</h3>
              <p className="text-slate-700 mb-4">
                Oregon family courts in Portland, Eugene, and throughout the state expect well-organized exhibits. ThreadLock's PDF export and exhibit preparation tools help you create professional court-ready materials.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Professional exhibit preparation</li>
                <li>• Court-ready PDF generation</li>
                <li>• Chronological case summaries</li>
                <li>• Evidence binder organization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Oregon Legal Forms & Documents</h3>
              <p className="text-slate-700 mb-4">
                Access Oregon-specific family law forms through ThreadLock's form library. Includes common Oregon custody, support, and parenting time forms with auto-fill capabilities using your case information.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Oregon custody and parenting time forms</li>
                <li>• Oregon child support forms</li>
                <li>• Oregon modification forms</li>
                <li>• Auto-fill from your case data</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Work with Oregon Attorneys</h3>
              <p className="text-slate-700 mb-4">
                Collaborating with an Oregon family law attorney? Grant them secure access to your ThreadLock account. Arrive at consultations with organized materials and save money on attorney time.
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>• Secure attorney access (BYOA seats)</li>
                <li>• Share organized case files</li>
                <li>• Save on attorney preparation time</li>
                <li>• Works with Oregon State Bar members</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Oregon Keywords */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Oregon Family Law Case Types We Support
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Custody & Parenting Time</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• Initial custody determination</li>
                <li>• Custody modifications</li>
                <li>• Parenting time schedules</li>
                <li>• Relocation disputes</li>
                <li>• Best interests evaluation prep</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Child Support</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• Oregon child support calculations</li>
                <li>• Income documentation</li>
                <li>• Support modifications</li>
                <li>• Deviation requests</li>
                <li>• Arrears documentation</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Other Family Law Matters</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• Divorce proceedings</li>
                <li>• Spousal support/alimony</li>
                <li>• Property division</li>
                <li>• Domestic relations cases</li>
                <li>• Post-judgment modifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Oregon FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Does ThreadLock work with Oregon family courts?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock works with all Oregon family courts including Multnomah County, Lane County, Marion County, Deschutes County, and all other Oregon counties. Our evidence organization and timeline features help you prepare materials for any Oregon family court proceeding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Can I access Oregon-specific family law forms through ThreadLock?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock includes Oregon family law forms in our legal form library. Forms are organized by case type (custody, support, divorce) and can be filled out directly in the platform using your case information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Do Oregon attorneys use ThreadLock?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock Pro is used by Oregon family law attorneys and paralegals for client case management, evidence review, and document preparation. Oregon bar members can use ThreadLock to collaborate with self-represented clients or manage their practice.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Is ThreadLock approved by Oregon courts or the Oregon State Bar?
              </h3>
              <p className="text-slate-700">
                ThreadLock is case management software and doesn't require court or bar approval to use. It's a tool for organizing your materials—similar to using a word processor or spreadsheet. Oregon courts accept documents prepared with any software, as long as they meet formatting and filing requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Can ThreadLock help me with Lane County family court?
              </h3>
              <p className="text-slate-700">
                Yes. ThreadLock works with Lane County family court (Eugene, Springfield) and all other Oregon counties. Whether you're in Multnomah County (Portland), Marion County (Salem), Deschutes County (Bend), or any rural Oregon county, ThreadLock's features work the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oregon Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Oregon Family Law Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.osbar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Oregon State Bar</h3>
              <p className="text-slate-600 text-sm">Attorney referral, legal resources, and self-help information</p>
              <p className="text-orange-600 text-sm mt-2">osbar.org →</p>
            </a>

            <a
              href="https://www.courts.oregon.gov/programs/family/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Oregon Judicial Department</h3>
              <p className="text-slate-600 text-sm">Family law forms, self-help resources, and court information</p>
              <p className="text-orange-600 text-sm mt-2">courts.oregon.gov →</p>
            </a>

            <a
              href="https://www.oregonlawhelp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Oregon Law Help</h3>
              <p className="text-slate-600 text-sm">Free legal information and resources for Oregonians</p>
              <p className="text-orange-600 text-sm mt-2">oregonlawhelp.org →</p>
            </a>

            <a
              href="https://lasoregon.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Legal Aid Services of Oregon</h3>
              <p className="text-slate-600 text-sm">Free legal assistance for eligible low-income Oregonians</p>
              <p className="text-orange-600 text-sm mt-2">lasoregon.org →</p>
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
            Ready to Get Organized for Your Oregon Case?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join Oregon families using ThreadLock to manage custody, support, and family law cases.
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
