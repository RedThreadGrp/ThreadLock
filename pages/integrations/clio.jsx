import Head from 'next/head';
import Link from 'next/link';

export default function ClioIntegration() {
  const pageUrl = 'https://threadlock.ai/integrations/clio';
  const pageTitle = 'ThreadLock + Clio Integration | Attorney Practice Management';
  const pageDescription = 'ThreadLock integrates with Clio practice management software to streamline attorney-client collaboration in family law cases. Share case information, sync documents, and coordinate evidence between platforms.';

  // Schema for integration page
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ThreadLock",
    "applicationCategory": "LegalTech",
    "description": "Family law case management with Clio integration",
    "integratesWith": {
      "@type": "SoftwareApplication",
      "name": "Clio",
      "applicationCategory": "Practice Management Software",
      "url": "https://clio.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD",
      "name": "ThreadLock Pro"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the ThreadLock-Clio integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ThreadLock-Clio integration connects ThreadLock's client-facing case management tools with Clio's attorney practice management system. This allows attorneys using Clio to access client evidence, timelines, and documentation organized in ThreadLock without switching platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need Clio to use ThreadLock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. ThreadLock works independently for both self-represented litigants and attorneys. The Clio integration is an optional enhancement for attorneys who already use Clio for practice management and want to streamline client collaboration."
        }
      },
      {
        "@type": "Question",
        "name": "What data syncs between ThreadLock and Clio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The integration syncs case information, client contact details, document libraries, and timeline events. Evidence organized in ThreadLock becomes accessible within Clio's matter management interface. Attorneys can review client-submitted evidence without leaving their Clio workspace."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Clio integration available now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ThreadLock-Clio integration is currently in development. It will be available to ThreadLock Pro subscribers upon release. Attorneys interested in early access can contact ThreadLock to join the integration beta program."
        }
      }
    ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/integrations" className="text-blue-600 hover:underline">
            ← Back to Integrations
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">ThreadLock + Clio Integration</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Connect ThreadLock's client-focused evidence management with Clio's attorney practice management 
            for seamless family law case collaboration.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <p className="font-semibold text-lg mb-2">Integration Status: In Development</p>
            <p>
              The ThreadLock-Clio integration is currently in development and will be available to 
              ThreadLock Pro subscribers. Attorneys interested in early access can join our beta program.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Integration Overview</h2>
            <p>
              The ThreadLock-Clio integration bridges the gap between client case management and attorney 
              practice management. Clients organize their evidence, documents, and timelines in ThreadLock, 
              while attorneys access and review this information directly within their Clio workspace.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">How It Works</h3>
            <div className="bg-gray-50 p-6 rounded mb-6">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Client Uses ThreadLock:</strong> Your client organizes evidence, creates timelines, 
                  logs incidents, and prepares exhibits in ThreadLock's user-friendly interface.
                </li>
                <li>
                  <strong>Connect to Clio:</strong> As the attorney, you connect your ThreadLock Pro account 
                  to your Clio practice management system using secure OAuth authentication.
                </li>
                <li>
                  <strong>Link Client Matters:</strong> Associate your client's ThreadLock case with the 
                  corresponding matter in Clio. One-time setup per client.
                </li>
                <li>
                  <strong>Automatic Sync:</strong> Case information, documents, timelines, and evidence 
                  automatically sync from ThreadLock to Clio.
                </li>
                <li>
                  <strong>Review in Clio:</strong> Access client-submitted evidence, timelines, and exhibits 
                  directly within Clio's matter management interface.
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3">For Attorneys</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Single Source of Truth:</strong> Client evidence appears directly in Clio alongside 
                your case notes, billing, and calendar.
              </li>
              <li>
                <strong>Time Savings:</strong> No need to request documents via email, download attachments, 
                or manually organize client-submitted files.
              </li>
              <li>
                <strong>Better Client Intake:</strong> Clients arrive at consultations with organized evidence, 
                timelines, and documentation already prepared.
              </li>
              <li>
                <strong>Improved Collaboration:</strong> Review client evidence, leave comments, and request 
                additional documentation without switching platforms.
              </li>
              <li>
                <strong>Case Preparation:</strong> Access chronological timelines and categorized evidence for 
                hearing prep, discovery, and trial.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">For Clients</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Easy Evidence Sharing:</strong> Organized evidence automatically flows to their attorney 
                without manual uploads or email attachments.
              </li>
              <li>
                <strong>Real-Time Updates:</strong> As clients add evidence or update timelines, attorneys see 
                changes reflected in Clio.
              </li>
              <li>
                <strong>Reduced Duplication:</strong> Submit documents once in ThreadLock rather than repeatedly 
                via email or portal uploads.
              </li>
              <li>
                <strong>Attorney Feedback:</strong> Receive requests for additional evidence or clarification 
                directly through the integrated workflow.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Data Synchronization</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3">What Syncs from ThreadLock to Clio</h3>
            <table className="min-w-full border border-gray-300 mb-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">ThreadLock Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Clio Destination</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Sync Behavior</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Evidence Documents</td>
                  <td className="border border-gray-300 px-4 py-2">Clio Documents (Matter)</td>
                  <td className="border border-gray-300 px-4 py-2">Real-time, automatic</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Timeline Events</td>
                  <td className="border border-gray-300 px-4 py-2">Clio Custom Fields</td>
                  <td className="border border-gray-300 px-4 py-2">Real-time, automatic</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Journal Entries</td>
                  <td className="border border-gray-300 px-4 py-2">Clio Notes/Activities</td>
                  <td className="border border-gray-300 px-4 py-2">Real-time, automatic</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Messages (Evidence)</td>
                  <td className="border border-gray-300 px-4 py-2">Clio Communications</td>
                  <td className="border border-gray-300 px-4 py-2">Real-time, automatic</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Exhibit Preparation</td>
                  <td className="border border-gray-300 px-4 py-2">Clio Documents</td>
                  <td className="border border-gray-300 px-4 py-2">On-demand export</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Case Metadata</td>
                  <td className="border border-gray-300 px-4 py-2">Clio Matter Details</td>
                  <td className="border border-gray-300 px-4 py-2">Initial sync + updates</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-semibold mt-6 mb-3">What Does NOT Sync</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clio billing and time entries (remain in Clio only)</li>
              <li>Clio calendar and tasks (managed separately)</li>
              <li>Clio client billing portal access (separate authentication)</li>
              <li>Attorney notes marked as private (stay in Clio)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Workflow Examples</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3">Example 1: Initial Client Consultation</h3>
            <div className="bg-gray-50 p-6 rounded mb-6">
              <p className="font-semibold mb-3">Scenario: New client consultation with organized evidence</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Prospective client downloads ThreadLock and organizes 3 months of text messages, emails, 
                and incident documentation before initial consultation</li>
                <li>Client creates timeline of custody-related events with linked evidence</li>
                <li>Attorney reviews organized evidence in Clio before consultation</li>
                <li>Consultation is more productive—attorney understands case facts immediately</li>
                <li>If client retains attorney, case evidence is already in attorney's system</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Example 2: Ongoing Case Management</h3>
            <div className="bg-gray-50 p-6 rounded mb-6">
              <p className="font-semibold mb-3">Scenario: Custody modification with new evidence</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Client logs new incidents in ThreadLock journal as they occur</li>
                <li>Client uploads related evidence (photos, messages, school records)</li>
                <li>Attorney receives notification of new evidence via Clio</li>
                <li>Attorney reviews new evidence within Clio, leaves comment requesting clarification</li>
                <li>Client receives request, adds additional context and evidence</li>
                <li>At hearing prep, attorney has complete, organized evidence package ready in Clio</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Example 3: Discovery Response Preparation</h3>
            <div className="bg-gray-50 p-6 rounded mb-6">
              <p className="font-semibold mb-3">Scenario: Responding to discovery requests</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Attorney receives discovery requests requiring client documents and communications</li>
                <li>Attorney reviews organized evidence in Clio via ThreadLock sync</li>
                <li>Attorney identifies relevant documents by category, date range, and tags</li>
                <li>Attorney exports exhibits directly from Clio, properly formatted and numbered</li>
                <li>Discovery response prepared in fraction of typical time</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Security & Privacy</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3">Authentication & Authorization</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>OAuth 2.0:</strong> Secure, industry-standard authentication protocol</li>
              <li><strong>Attorney Permission Required:</strong> Clients must grant attorneys access to their ThreadLock case</li>
              <li><strong>Revocable Access:</strong> Clients can revoke attorney access at any time</li>
              <li><strong>Matter-Level Linking:</strong> Attorneys only access cases explicitly linked to Clio matters</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Data Security</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption in Transit:</strong> TLS 1.3 for all data transfers</li>
              <li><strong>Encryption at Rest:</strong> Data encrypted in both ThreadLock and Clio</li>
              <li><strong>No Third-Party Storage:</strong> Data remains within ThreadLock and Clio infrastructure</li>
              <li><strong>Audit Logging:</strong> Complete audit trail of all sync activities</li>
              <li><strong>HIPAA Compliance:</strong> Integration supports HIPAA-compliant workflows</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Client Privacy Controls</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients control which evidence items sync to attorney</li>
              <li>Clients can mark items as "personal" (not synced)</li>
              <li>Clients receive notifications when attorney accesses synced data</li>
              <li>Clients maintain copy of all evidence even if attorney relationship ends</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Requirements</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3">For Attorneys</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Clio Subscription:</strong> Active Clio Manage account (any tier)</li>
              <li><strong>ThreadLock Pro:</strong> ThreadLock Pro subscription required</li>
              <li><strong>Clio API Access:</strong> Integration uses standard Clio API (no special permissions needed)</li>
              <li><strong>Browser:</strong> Modern browser (Chrome, Firefox, Safari, Edge)</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3">For Clients</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>ThreadLock Account:</strong> Any ThreadLock plan (Core or Pro)</li>
              <li><strong>Attorney Authorization:</strong> Must grant attorney access to case</li>
              <li><strong>No Clio Account Required:</strong> Clients do not need Clio access</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing</h2>
            <p>
              The ThreadLock-Clio integration is included at no additional cost for ThreadLock Pro subscribers. 
              Standard Clio subscription fees apply separately.
            </p>
            
            <div className="bg-gray-50 p-6 rounded mt-4">
              <h4 className="font-semibold text-lg mb-2">ThreadLock Pro: $99/month</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Clio integration included</li>
                <li>Unlimited client cases</li>
                <li>Attorney collaboration features</li>
                <li>Admin oversight and reporting</li>
                <li>Priority support</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">What is the ThreadLock-Clio integration?</h4>
                <p>
                  The ThreadLock-Clio integration connects ThreadLock's client-facing case management tools with 
                  Clio's attorney practice management system. This allows attorneys using Clio to access client 
                  evidence, timelines, and documentation organized in ThreadLock without switching platforms.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Do I need Clio to use ThreadLock?</h4>
                <p>
                  No. ThreadLock works independently for both self-represented litigants and attorneys. The Clio 
                  integration is an optional enhancement for attorneys who already use Clio for practice management 
                  and want to streamline client collaboration.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">What data syncs between ThreadLock and Clio?</h4>
                <p>
                  The integration syncs case information, client contact details, document libraries, and timeline 
                  events. Evidence organized in ThreadLock becomes accessible within Clio's matter management 
                  interface. Attorneys can review client-submitted evidence without leaving their Clio workspace.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Is the Clio integration available now?</h4>
                <p>
                  The ThreadLock-Clio integration is currently in development. It will be available to ThreadLock 
                  Pro subscribers upon release. Attorneys interested in early access can contact ThreadLock to 
                  join the integration beta program.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Can clients see my Clio data?</h4>
                <p>
                  No. The integration is one-way: ThreadLock evidence syncs to Clio, but Clio data (billing, 
                  time entries, private notes) does not sync to ThreadLock. Clients only see their own ThreadLock 
                  case and any comments/requests you share with them through the collaboration features.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Does this work with Clio Grow or Clio Draft?</h4>
                <p>
                  The integration is designed for Clio Manage (practice management). Integration with Clio Grow 
                  (client intake) and Clio Draft (document automation) may be added in future updates.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">How do I sign up for the beta program?</h4>
                <p>
                  Contact ThreadLock support with your Clio account information and ThreadLock Pro subscription 
                  details. Beta participants will receive early access to the integration and priority support 
                  during the beta period.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h4 className="font-semibold text-lg mb-3">Interested in the ThreadLock-Clio Integration?</h4>
              <p className="mb-4">
                The integration is currently in development. Sign up to be notified when it's available or 
                join the beta program for early access.
              </p>
              <div className="space-x-4">
                <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                  Learn More About ThreadLock Pro
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/for-ai-assistants" className="text-blue-600 hover:underline">For AI Assistants - Complete Product Overview</Link></li>
              <li><Link href="/docs/threadlock-facts" className="text-blue-600 hover:underline">ThreadLock Facts - Technical Specifications</Link></li>
              <li><Link href="/guides/best-tools-for-self-represented-litigants" className="text-blue-600 hover:underline">Guide: Tools for Self-Represented Litigants</Link></li>
              <li><a href="https://www.clio.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Clio Practice Management Software</a></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
