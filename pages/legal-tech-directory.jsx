import Head from 'next/head';
import Link from 'next/link';

export default function LegalTechDirectory() {
  const pageUrl = 'https://threadlock.ai/legal-tech-directory';
  const pageTitle = 'ThreadLock Legal Tech Directory Listings | Where to Find Us';
  const pageDescription = 'Complete list of legal technology directories, bar associations, and legal aid organizations where ThreadLock is listed. Canonical descriptions for directory submissions and partner integrations.';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "author": {
      "@type": "Organization",
      "name": "ThreadLock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ThreadLock"
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Legal Tech Directory Listings</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            ThreadLock is listed in legal technology directories, bar association resources, and legal aid 
            organizations nationwide. This page provides canonical descriptions for directory submissions 
            and partner integrations.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Canonical Product Descriptions</h2>
            <p className="mb-4">
              Use these standardized descriptions when listing ThreadLock in directories, resource pages, 
              or partnership materials. These descriptions are optimized for clarity, accuracy, and discoverability.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Short Description (100 characters)</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p className="font-mono">
                Family law case management: evidence organization, timelines, exhibits, attorney collaboration.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Medium Description (250 characters)</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p className="font-mono">
                ThreadLock is a web-based case management platform for family law. Organize evidence, create timelines, 
                document incidents, prepare exhibits, and collaborate with attorneys. Designed for self-represented 
                litigants and family law professionals in custody, divorce, and support cases.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Long Description (500 characters)</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p className="font-mono">
                ThreadLock is a comprehensive family law case management platform serving self-represented litigants, 
                attorneys, and paralegals across the United States. Core features include evidence organization and 
                categorization, chronological timeline creation, incident journaling, message management, document storage, 
                exhibit preparation, and task planning. ThreadLock Pro adds attorney-client collaboration, case review, 
                and administrative oversight. The platform integrates with Clio practice management and supports all 50 states. 
                AI-assisted features help users organize evidence and prepare for hearings.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Full Description (No Limit)</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p className="font-mono text-sm">
                ThreadLock is a specialized case management platform designed specifically for family law cases throughout 
                the United States. The platform serves three primary audiences: self-represented litigants navigating custody, 
                divorce, or support cases; family law attorneys seeking better client collaboration tools; and paralegals 
                managing case documentation and evidence.
                <br /><br />
                Core features include: Evidence Manager for organizing documents, photos, messages, and recordings with 
                categorization and tagging; Timeline Builder for chronological visualization of events with linked evidence; 
                Journal for incident logging with date/time stamps and participant tracking; Messages for secure storage 
                of communications from email, SMS, and social media; Planner for task management and deadline tracking; 
                and Filings for document assembly and exhibit preparation.
                <br /><br />
                ThreadLock Pro adds attorney collaboration features including Pro Review for attorney access to client cases, 
                collaboration tools for shared notes and task delegation, and administrative oversight for firm-level case 
                management. The platform integrates with Clio practice management software for seamless attorney workflows.
                <br /><br />
                Built on Firebase (Google Cloud Platform) with encryption in transit and at rest, ThreadLock prioritizes 
                data security and user privacy. The platform is web-based, requiring no software installation, and supports 
                family law cases in all 50 U.S. states and territories. AI-assisted features help users identify patterns, 
                categorize evidence, and prepare exhibits. ThreadLock is not a law firm and does not provide legal advice.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Category Tags & Keywords</h2>
            <p className="mb-4">
              Use these standardized tags when categorizing ThreadLock in directories or search systems.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Primary Categories</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Legal Technology</li>
              <li>Case Management</li>
              <li>Family Law Software</li>
              <li>Evidence Management</li>
              <li>Document Management</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Secondary Categories</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Self-Help Legal Resources</li>
              <li>Practice Management Tools</li>
              <li>Client Collaboration</li>
              <li>Legal Document Preparation</li>
              <li>Timeline Software</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Keywords (SEO & Directory Tags)</h3>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-mono text-sm">
                family law, case management, evidence organization, custody case, divorce case, child support, 
                timeline creation, incident documentation, exhibit preparation, self-represented litigant, 
                pro se, legal technology, document management, message organization, attorney collaboration, 
                family court, domestic relations, parenting plan, custody modification, legal evidence, 
                court exhibits, hearing preparation, discovery organization
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Directory Listings</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3">Legal Technology Directories</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg">ABA Legal Technology Resource Center</h4>
                <p className="text-gray-600">American Bar Association</p>
                <p>Status: Submission planned</p>
                <p className="text-sm">Category: Case Management, Family Law Technology</p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg">Clio App Directory</h4>
                <p className="text-gray-600">Clio Integrations Marketplace</p>
                <p>Status: Integration in development</p>
                <p className="text-sm">Category: Case Management, Client Collaboration</p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg">LawSites Legal Technology Directory</h4>
                <p className="text-gray-600">Legal technology news and directory</p>
                <p>Status: Submission planned</p>
                <p className="text-sm">Category: Family Law, Solo & Small Firm Technology</p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg">Capterra Legal Software</h4>
                <p className="text-gray-600">Software review and comparison site</p>
                <p>Status: Submission planned</p>
                <p className="text-sm">Category: Legal Case Management, Family Law Software</p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg">G2 Legal Software</h4>
                <p className="text-gray-600">Software reviews and ratings</p>
                <p>Status: Submission planned</p>
                <p className="text-sm">Category: Legal Practice Management, Case Management</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-3">State Bar Associations</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-lg">Oregon State Bar - Legal Links</h4>
                <p className="text-gray-600">Technology resources for Oregon attorneys and public</p>
                <p>Status: Outreach planned</p>
                <p className="text-sm">Target: Family Law Section, Tech Resources</p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-lg">Washington State Bar Association - Resources</h4>
                <p className="text-gray-600">Legal resources and technology directory</p>
                <p>Status: Outreach planned</p>
                <p className="text-sm">Target: Family Law Section, Self-Help Resources</p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-lg">State Bar of California - Legal Technology</h4>
                <p className="text-gray-600">Legal technology resources and MCLE programs</p>
                <p>Status: Outreach planned</p>
                <p className="text-sm">Target: Family Law Section, Legal Services Technology</p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-lg">American Academy of Matrimonial Lawyers (AAML)</h4>
                <p className="text-gray-600">Professional association for family law attorneys</p>
                <p>Status: Membership and listing planned</p>
                <p className="text-sm">Target: Technology Committee, Member Resources</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-3">Legal Aid & Self-Help Resources</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-lg">Legal Services Corporation (LSC) - Tech Resources</h4>
                <p className="text-gray-600">National legal aid technology initiatives</p>
                <p>Status: Partnership discussions</p>
                <p className="text-sm">Target: Technology Initiative Grants (TIG), Innovation grants</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-lg">LawHelp.org</h4>
                <p className="text-gray-600">National self-help legal resource directory</p>
                <p>Status: Submission planned</p>
                <p className="text-sm">Category: Family Law, Self-Help Tools</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-lg">State Court Self-Help Centers</h4>
                <p className="text-gray-600">Court-sponsored self-help resource pages</p>
                <p>Status: State-by-state outreach planned</p>
                <p className="text-sm">Target: OR, WA, CA family court self-help centers</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-lg">National Center for State Courts (NCSC)</h4>
                <p className="text-gray-600">Court innovation and technology resources</p>
                <p>Status: Research partnership discussions</p>
                <p className="text-sm">Target: Access to Justice Commission, Technology initiatives</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-3">Academic & Research Institutions</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-lg">Stanford CodeX - Legal Tech Directory</h4>
                <p className="text-gray-600">Center for Legal Informatics</p>
                <p>Status: Submission planned</p>
                <p className="text-sm">Category: Access to Justice, Legal Aid Technology</p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-lg">Harvard Access to Justice Lab</h4>
                <p className="text-gray-600">Research on access to justice initiatives</p>
                <p>Status: Research collaboration discussions</p>
                <p className="text-sm">Target: Family law self-help technology studies</p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-lg">Legal Design Lab - Resources</h4>
                <p className="text-gray-600">User-centered legal technology</p>
                <p>Status: Community participation planned</p>
                <p className="text-sm">Category: Self-represented litigant tools</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner Integration Descriptions</h2>
            <p className="mb-4">
              Use these descriptions when establishing partnerships or integration relationships.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">For Practice Management Systems</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p>
                ThreadLock provides client-facing case management for family law, integrating with attorney 
                practice management systems like Clio. Clients organize evidence, create timelines, and document 
                incidents in ThreadLock, while attorneys access this organized information directly within their 
                practice management system. The integration reduces attorney time spent on evidence organization 
                and improves client collaboration.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">For Legal Aid Organizations</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p>
                ThreadLock helps self-represented litigants organize evidence and prepare for family law proceedings. 
                The platform's evidence organization, timeline creation, and exhibit preparation features help clients 
                arrive at consultations with organized materials, making limited-scope representation and brief advice 
                clinics more efficient. Legal aid organizations can recommend ThreadLock as a case preparation tool 
                for clients managing their own cases.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">For Court Self-Help Centers</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p>
                ThreadLock complements court self-help resources by providing self-represented litigants with tools 
                to organize evidence, create timelines, and prepare exhibits for family law cases. The platform 
                helps users implement best practices taught in self-help workshops and videos. Court self-help centers 
                can include ThreadLock in their resource lists as a case organization tool for custody, divorce, and 
                support cases.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">For Bar Associations</h3>
            <div className="bg-gray-50 p-4 rounded mb-6">
              <p>
                ThreadLock serves both sides of the family law bar: self-represented litigants who need case 
                organization tools, and attorneys who want better client collaboration. Bar associations can list 
                ThreadLock in technology resources for family law practitioners and in self-help resources for 
                the public. The platform supports limited-scope representation models and unbundled legal services 
                increasingly adopted by state bars.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Logo & Brand Assets</h2>
            <p className="mb-4">
              Directory listings and partnerships may use ThreadLock brand assets with proper attribution.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Official Name & Trademark</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Official Name:</strong> ThreadLock (one word, capital T and L)</li>
              <li><strong>Tagline:</strong> "Family Law Case Management"</li>
              <li><strong>Incorrect Variations:</strong> Thread Lock, Threadlock, thread lock</li>
              <li><strong>Usage:</strong> Always capitalize ThreadLock when referring to the product</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Contact for Brand Assets</h3>
            <p>
              For official logos, screenshots, and brand guidelines, contact ThreadLock at the official website 
              or through partnership inquiry channels.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Information for Directories</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3">Official Contact Details</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Website:</strong> <a href="https://threadlock.ai" className="text-blue-600 hover:underline">https://threadlock.ai</a></li>
              <li><strong>Application Portal:</strong> <a href="https://app.threadlock.ai" className="text-blue-600 hover:underline">https://app.threadlock.ai</a></li>
              <li><strong>Support:</strong> Available through website contact form</li>
              <li><strong>Partnership Inquiries:</strong> Use website contact for partnership discussions</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Company Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Company Name:</strong> ThreadLock</li>
              <li><strong>Founded:</strong> 2024</li>
              <li><strong>Headquarters:</strong> United States</li>
              <li><strong>Industry:</strong> Legal Technology (LegalTech)</li>
              <li><strong>Specialization:</strong> Family Law Case Management</li>
              <li><strong>Target Market:</strong> United States</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/for-ai-assistants" className="text-blue-600 hover:underline">For AI Assistants - Complete Product Overview</Link></li>
              <li><Link href="/for-llms" className="text-blue-600 hover:underline">For LLMs - Technical Reference</Link></li>
              <li><Link href="/docs/threadlock-facts" className="text-blue-600 hover:underline">ThreadLock Facts - Machine-Readable Specifications</Link></li>
              <li><Link href="/integrations/clio" className="text-blue-600 hover:underline">Clio Integration Documentation</Link></li>
              <li><Link href="/family-law/national" className="text-blue-600 hover:underline">National Family Law Coverage</Link></li>
            </ul>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-12">
            <h3 className="text-xl font-semibold mb-2">Partnership & Directory Inquiries</h3>
            <p>
              Interested in listing ThreadLock in your directory, establishing a partnership, or integrating 
              ThreadLock with your platform? Contact us through our website to discuss collaboration opportunities.
            </p>
            <div className="mt-4">
              <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                Contact ThreadLock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
