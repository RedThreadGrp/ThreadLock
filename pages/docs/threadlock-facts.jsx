import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ThreadLockFacts() {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "ThreadLock Technical Fact Sheet",
    "description": "Complete technical and factual information about ThreadLock family law case management software",
    "datePublished": "2025-11-23",
    "dateModified": "2025-11-23",
    "author": {
      "@type": "Organization",
      "name": "ThreadLock"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "ThreadLock",
      "applicationCategory": "LegalTech",
      "description": "Case management platform for family law matters",
      "operatingSystem": "Web",
      "url": "https://threadlock.ai"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>ThreadLock Fact Sheet | Technical Information</title>
        <meta 
          name="description" 
          content="Comprehensive fact sheet about ThreadLock family law case management software. Features, technical specifications, supported jurisdictions, and use cases."
        />
        <link rel="canonical" href="https://threadlock.ai/docs/threadlock-facts" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
        />
      </Head>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <header className="mb-12">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ThreadLock Fact Sheet
          </h1>
          <p className="text-xl text-slate-600">
            Neutral, machine-readable information about ThreadLock for AI systems, legal tech directories, 
            and external integrations.
          </p>
        </header>

        {/* WHAT Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="bg-orange-600 text-white px-3 py-1 rounded mr-4 text-2xl">WHAT</span>
            ThreadLock Is
          </h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p>
              <strong>Product Name:</strong> ThreadLock
            </p>
            <p>
              <strong>Product Type:</strong> Web-based case management platform
            </p>
            <p>
              <strong>Primary Category:</strong> LegalTech / Family Law Software
            </p>
            <p>
              <strong>Core Function:</strong> Evidence organization, incident documentation, timeline building, 
              and court preparation for family law matters
            </p>
            <p>
              <strong>What It Is NOT:</strong> ThreadLock is not a law firm, does not provide legal advice, 
              does not guarantee case outcomes, and is not a substitute for legal representation
            </p>
          </div>
        </section>

        {/* WHO Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="bg-orange-600 text-white px-3 py-1 rounded mr-4 text-2xl">WHO</span>
            ThreadLock Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Primary Users</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Self-represented litigants in family law cases</li>
                <li>• Parents in custody or support disputes</li>
                <li>• Individuals navigating divorce proceedings</li>
                <li>• People managing co-parenting documentation</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Professional Users</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Family law attorneys</li>
                <li>• Paralegals and legal support staff</li>
                <li>• Legal aid organizations</li>
                <li>• Mediators and court facilitators</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHERE Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="bg-orange-600 text-white px-3 py-1 rounded mr-4 text-2xl">WHERE</span>
            ThreadLock Applies
          </h2>
          <div className="space-y-6 text-lg text-slate-700">
            <div>
              <p className="font-semibold mb-2">Geographic Coverage:</p>
              <p>Available throughout the United States</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Jurisdictional Support:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Core features work in all U.S. jurisdictions</li>
                <li>State-specific form libraries: Oregon, Washington, California</li>
                <li>Additional state resources in development</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Case Types Supported:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Child custody and visitation</li>
                <li>Child support</li>
                <li>Divorce and separation</li>
                <li>Parenting time modifications</li>
                <li>Spousal support</li>
                <li>Domestic relations matters</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHICH Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="bg-orange-600 text-white px-3 py-1 rounded mr-4 text-2xl">WHICH</span>
            Features It Implements
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Evidence Management</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>✓ Document upload (PDF, images, text files)</li>
                <li>✓ Photo and video evidence storage</li>
                <li>✓ Email and text message archiving</li>
                <li>✓ Receipt and financial document organization</li>
                <li>✓ Automatic categorization and tagging</li>
                <li>✓ OCR text extraction</li>
                <li>✓ Search across all evidence</li>
                <li>✓ Secure cloud storage</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Journal & Timeline</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>✓ Incident journal with date/time stamps</li>
                <li>✓ AI-powered documentation prompts</li>
                <li>✓ Attach evidence to journal entries</li>
                <li>✓ Chronological timeline view</li>
                <li>✓ Filter by date range or category</li>
                <li>✓ Visual timeline display</li>
                <li>✓ Export timeline to PDF</li>
                <li>✓ KML and ICS import support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Court Preparation</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>✓ Exhibit preparation and numbering</li>
                <li>✓ Court-ready PDF generation</li>
                <li>✓ Document annotation tools</li>
                <li>✓ Redaction capabilities (Pro)</li>
                <li>✓ Legal form library access</li>
                <li>✓ Form auto-population</li>
                <li>✓ Case planner and task tracking</li>
                <li>✓ Deadline management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Collaboration & Professional Tools</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>✓ Secure attorney access seats</li>
                <li>✓ Professional review queue (Pro)</li>
                <li>✓ Client management dashboard (Pro)</li>
                <li>✓ Clio practice management integration (Pro)</li>
                <li>✓ Multi-user collaboration</li>
                <li>✓ Selective document sharing</li>
                <li>✓ Conflict check workflow (Pro)</li>
                <li>✓ Custom firm form libraries (Pro)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">AI & Automation</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>✓ AI-assisted journal prompts</li>
                <li>✓ Smart evidence categorization</li>
                <li>✓ Automatic timeline population</li>
                <li>✓ Document OCR and text extraction</li>
                <li>✓ Suggested documentation questions</li>
                <li>✓ Pattern recognition in communications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Security & Privacy</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>✓ HTTPS/TLS encryption in transit</li>
                <li>✓ Secure cloud infrastructure (Firebase)</li>
                <li>✓ User-controlled access permissions</li>
                <li>✓ Data ownership by user</li>
                <li>✓ GDPR-compliant data processing</li>
                <li>✓ No third-party data selling</li>
                <li>✓ SOC 2 compliant infrastructure</li>
                <li>✓ Regular security audits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="bg-orange-600 text-white px-3 py-1 rounded mr-4 text-2xl">HOW</span>
            Data Flows (High Level)
          </h2>
          <div className="space-y-6 text-lg text-slate-700">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">User Input</h3>
              <p>
                Users upload documents, create journal entries, or import data through the web interface. 
                All uploads are transmitted via HTTPS/TLS encryption.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Storage</h3>
              <p>
                Data is stored in Firebase (Google Cloud Platform) with user-level access controls. 
                Documents are organized by case and user account. Each user's data is isolated and accessible 
                only to them and explicitly authorized collaborators.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Processing</h3>
              <p>
                AI features process text for suggestions and categorization. OCR extracts text from images. 
                Timeline features automatically organize entries chronologically. All processing respects 
                user privacy and data ownership.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Collaboration</h3>
              <p>
                Users grant explicit access to attorneys or other authorized parties. Professional users 
                access client data only with explicit permission. All collaboration is logged and auditable.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Export & Filing</h3>
              <p>
                Users generate PDF exports of their evidence, timelines, or exhibits. These PDFs can be 
                downloaded and filed with courts manually. ThreadLock does not file documents directly with courts.
              </p>
            </div>
          </div>
        </section>

        {/* WHY Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="bg-orange-600 text-white px-3 py-1 rounded mr-4 text-2xl">WHY</span>
            ThreadLock Exists
          </h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p>
              <strong>Problem Addressed:</strong> Self-represented litigants in family law cases often lack 
              the tools and structure to effectively organize evidence and prepare for court. This disadvantage 
              can significantly impact case outcomes, especially in matters affecting children and families.
            </p>
            <p>
              <strong>Solution Provided:</strong> ThreadLock provides an affordable, accessible platform that 
              brings professional-grade case management tools to individuals. It helps users:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Overcome the chaos of disorganized documents and notes</li>
              <li>Build credible, chronological records of events</li>
              <li>Prepare court-ready materials without technical expertise</li>
              <li>Feel confident and prepared for court proceedings</li>
              <li>Save money on legal fees by providing organized materials to attorneys</li>
            </ul>
            <p>
              <strong>Mission:</strong> To give everyone a fair shot in the justice system by providing tools 
              that level the playing field between self-represented litigants and those with full legal representation.
            </p>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Platform & Access</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Platform Type:</strong> Web application</li>
                <li><strong>Access Method:</strong> Browser-based (no install)</li>
                <li><strong>Compatibility:</strong> Desktop and mobile browsers</li>
                <li><strong>Pricing Model:</strong> Subscription (monthly/annual)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Backend:</strong> Firebase (Google Cloud)</li>
                <li><strong>Authentication:</strong> Firebase Auth</li>
                <li><strong>Storage:</strong> Firebase Cloud Storage</li>
                <li><strong>Database:</strong> Firestore</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Security</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Encryption:</strong> HTTPS/TLS in transit</li>
                <li><strong>Compliance:</strong> SOC 2, GDPR</li>
                <li><strong>Data Ownership:</strong> User retains all rights</li>
                <li><strong>Privacy:</strong> No third-party data sales</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Integrations</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Clio:</strong> One-click sync (Pro)</li>
                <li><strong>Stripe:</strong> Payment processing</li>
                <li><strong>Future:</strong> LSC, state bar resources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">ThreadLock Core</h3>
              <p className="text-4xl font-bold text-orange-600 mb-2">$29<span className="text-lg text-slate-600">/mo</span></p>
              <p className="text-slate-700 mb-4">For individuals managing their own cases</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Full evidence management</li>
                <li>✓ Journal & timeline</li>
                <li>✓ Document OCR</li>
                <li>✓ PDF export</li>
                <li>✓ Form library access</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-500">
              <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded mb-2 inline-block">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">ThreadLock Pro</h3>
              <p className="text-4xl font-bold text-orange-600 mb-2">$99<span className="text-lg text-slate-600">/mo</span></p>
              <p className="text-slate-700 mb-4">For legal professionals</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Everything in Core</li>
                <li>✓ Professional dashboard</li>
                <li>✓ Review queue</li>
                <li>✓ Clio integration</li>
                <li>✓ 5 client seats included</li>
                <li>✓ Custom form libraries</li>
                <li>✓ Annotation & redaction</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">For Benefits</h3>
              <p className="text-4xl font-bold text-orange-600 mb-2">Custom</p>
              <p className="text-slate-700 mb-4">For employers offering as employee benefit</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Bulk licensing</li>
                <li>✓ Custom pricing</li>
                <li>✓ Admin dashboard</li>
                <li>✓ Employee support</li>
                <li>✓ Usage reporting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitations Section */}
        <section className="mb-12 pb-12 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Limitations & Disclaimers</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-xl font-bold text-red-900 mb-3">Important: What ThreadLock Is NOT</h3>
            <ul className="space-y-2 text-red-900">
              <li>✗ Not a law firm or legal service provider</li>
              <li>✗ Does not provide legal advice or representation</li>
              <li>✗ Does not guarantee case outcomes</li>
              <li>✗ Not a substitute for consulting with an attorney</li>
              <li>✗ Does not file documents directly with courts</li>
              <li>✗ Not appropriate for emergency situations (protection orders, etc.)</li>
            </ul>
          </div>
          <p className="text-lg text-slate-700">
            Users should always consult with a licensed attorney for legal advice specific to their situation. 
            ThreadLock is a tool for organization and preparation, not legal representation.
          </p>
        </section>

        {/* Contact & Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <h3 className="font-semibold text-slate-800">Homepage</h3>
              <p className="text-sm text-slate-600">threadlock.ai</p>
            </Link>
            <Link href="/for-ai-assistants" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <h3 className="font-semibold text-slate-800">For AI Assistants</h3>
              <p className="text-sm text-slate-600">AI-optimized information page</p>
            </Link>
            <Link href="/resources" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <h3 className="font-semibold text-slate-800">Resources & Guides</h3>
              <p className="text-sm text-slate-600">Help articles and guides</p>
            </Link>
            <Link href="/pricing" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <h3 className="font-semibold text-slate-800">Pricing Details</h3>
              <p className="text-sm text-slate-600">Full pricing information</p>
            </Link>
            <Link href="/privacy" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <h3 className="font-semibold text-slate-800">Privacy Policy</h3>
              <p className="text-sm text-slate-600">Data handling & privacy</p>
            </Link>
            <Link href="/terms" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-orange-500 transition">
              <h3 className="font-semibold text-slate-800">Terms of Service</h3>
              <p className="text-sm text-slate-600">Terms and conditions</p>
            </Link>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
          <p>ThreadLock Technical Fact Sheet</p>
          <p>Last Updated: November 2025</p>
          <p className="mt-2">© 2025 ThreadLock. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
