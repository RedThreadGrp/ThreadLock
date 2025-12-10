import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Track analytics event (placeholder for future analytics implementation)
const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('Analytics event:', eventName, properties);
  }
  // Future: integrate with analytics service (e.g., Vercel Analytics)
};

export default function SupportPage() {
  useEffect(() => {
    // Track page view
    trackEvent('support_page_view', {
      source: document.referrer || 'direct',
      userTypeGuess: 'unknown'
    });
  }, []);

  return (
    <>
      <Head>
        <title>Support | ThreadLock</title>
        <meta 
          name="description" 
          content="Get help with ThreadLock and ThreadLock Pro: troubleshooting, Clio integration, billing questions, and contact options for self-represented litigants and legal professionals." 
        />
        <meta property="og:title" content="Support | ThreadLock" />
        <meta 
          property="og:description" 
          content="Get help with ThreadLock and ThreadLock Pro: troubleshooting, Clio integration, billing questions, and contact options for self-represented litigants and legal professionals." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://threadlock.ai/support" />
        <link rel="canonical" href="https://threadlock.ai/support" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Simple header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <Link href="/">
              <span className="inline-flex items-baseline font-bold text-2xl tracking-tight select-none cursor-pointer">
                <span className="text-slate-800">Thread</span>
                <span className="text-orange-600">Lock</span>
                <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <Link href="/pricing" className="text-slate-700 hover:text-orange-600 transition-colors">Pricing</Link>
              <Link href="/professionals" className="text-slate-700 hover:text-orange-600 transition-colors">For Pros</Link>
              <Link href="/login" className="text-slate-700 hover:text-orange-600 transition-colors">Login</Link>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-slate-50 to-white py-16 md:py-20 border-b border-slate-200">
            <div className="container mx-auto px-6 text-center max-w-5xl">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Need help with ThreadLock?
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                Find answers, fix issues, and get in touch—whether you&apos;re a self-represented litigant or a legal professional using ThreadLock Pro.
              </p>
              
              {/* Primary user type buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={() => {
                    trackEvent('support_user_type_click', { type: 'srl' });
                    scrollToSection('srl');
                  }}
                  className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition-all"
                >
                  I&apos;m using ThreadLock (SRL)
                </button>
                <button
                  onClick={() => {
                    trackEvent('support_user_type_click', { type: 'pro' });
                    scrollToSection('pro');
                  }}
                  className="bg-slate-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-800 transition-all"
                >
                  I&apos;m using ThreadLock Pro
                </button>
              </div>

              {/* Clio link */}
              <p className="text-sm text-slate-600">
                <button
                  onClick={() => {
                    trackEvent('support_clio_quick_link');
                    scrollToSection('clio');
                  }}
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  Having trouble with the Clio integration?
                </button>
              </p>
            </div>
          </section>

          {/* Quick Links / Support Tiles */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Quick Links</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    id: 'srl',
                    title: 'Getting Started (SRLs)',
                    description: 'Learn how to organize your case, manage evidence, and track deadlines as a self-represented litigant.'
                  },
                  {
                    id: 'pro',
                    title: 'ThreadLock Pro & Marketplace',
                    description: 'Professional features, client management, review queue, and marketplace information for legal professionals.'
                  },
                  {
                    id: 'clio',
                    title: 'Clio Integration Help',
                    description: 'Connect ThreadLock Pro to Clio, manage permissions, sync matters, and troubleshoot integration issues.'
                  },
                  {
                    id: 'billing',
                    title: 'Account & Billing',
                    description: 'Manage your subscription, update payment details, and learn about refunds and cancellations.'
                  },
                  {
                    id: 'technical',
                    title: 'Technical Issues & Bugs',
                    description: 'Troubleshoot login problems, performance issues, and check system status.'
                  },
                  {
                    id: 'contact',
                    title: 'Contact Support',
                    description: 'Still need help? Get in touch with our support team directly.'
                  }
                ].map((card) => (
                  <button
                    key={card.id}
                    onClick={() => scrollToSection(card.id)}
                    className="bg-slate-50 hover:bg-slate-100 p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all text-left shadow-sm hover:shadow-md"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-600 text-sm">{card.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Support for SRLs Section */}
          <section id="srl" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Support for self-represented users (ThreadLock)
              </h2>
              
              <p className="text-slate-700 mb-8 leading-relaxed">
                ThreadLock helps you organize your case materials, document incidents with our journal feature, manage your evidence and exhibits, track important deadlines, and prepare court-ready documents. Everything you need to feel prepared and in control.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How do I create my first case?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Once you log in, you&apos;ll see your Dashboard. Click &quot;Create New Case&quot; or navigate to the Cases section. Follow the guided workflow to set up your case details, parties involved, and case type. The system will then create your case hub where you can manage all related materials.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How do I organize my evidence and exhibits?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Go to your Case Dashboard and select the &quot;Evidence&quot; tab. Here you can upload documents, photos, emails, and other files. You can tag each piece of evidence by date, type, and relevance. The system will help you organize everything chronologically and by category so it&apos;s easy to find when you need it.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How do I track deadlines?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Navigate to the &quot;Timeline&quot; or &quot;Calendar&quot; section in your case. Add important dates like court hearings, filing deadlines, and custody exchanges. You can set reminders to receive notifications before these dates. The timeline view helps you see all events in chronological order.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How do I export or download my documents?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    From your Case Dashboard, look for the &quot;Export&quot; or &quot;Download&quot; option. You can generate a court-ready PDF that includes your timeline, journal entries, and evidence. Individual documents can also be downloaded from the Evidence tab by selecting the document and clicking &quot;Download.&quot;
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <p className="text-sm text-slate-800 leading-relaxed">
                  <strong className="text-orange-900">Important:</strong> ThreadLock does not provide legal advice. We help you organize your information and paperwork; we do not tell you what to file or how a judge will rule. If you have legal questions, consult with a licensed attorney.
                </p>
              </div>
            </div>
          </section>

          {/* Support for Pros Section */}
          <section id="pro" className="py-16 md:py-20 bg-white scroll-mt-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Support for legal professionals (ThreadLock Pro)
              </h2>
              
              <p className="text-slate-700 mb-8 leading-relaxed">
                ThreadLock Pro is a comprehensive workflow and case management platform designed for attorneys, mediators, and legal service providers. It includes a professional dashboard, access to the review queue, client seat management, Clio integration, and advanced tools for document review and collaboration.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Getting Started with Pro</h3>
                  <ul className="space-y-3 list-disc pl-6 text-slate-700">
                    <li>
                      <strong>Account Creation:</strong> Sign up for ThreadLock Pro at app.threadlock.ai/pro/register. You&apos;ll be prompted to verify your professional credentials and set up your profile.
                    </li>
                    <li>
                      <strong>Profile Setup:</strong> Complete your professional profile including your bar number, jurisdictions, practice areas, and firm information. This helps clients find you in the marketplace.
                    </li>
                    <li>
                      <strong>Dashboard Overview:</strong> Your Pro dashboard shows pending review requests, active client matters, and marketplace opportunities.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Working with SRL Clients</h3>
                  <ul className="space-y-3 list-disc pl-6 text-slate-700">
                    <li>
                      <strong>Review Requests:</strong> Self-represented users can submit their case materials for review. You&apos;ll receive notifications when new requests match your practice areas and jurisdictions.
                    </li>
                    <li>
                      <strong>Accepting Work:</strong> Review the case summary and conflict information. If you choose to accept, you&apos;ll gain secure access to the client&apos;s organized case file. You can decline requests that don&apos;t fit your practice.
                    </li>
                    <li>
                      <strong>Collaboration:</strong> Once accepted, you can review documents, leave comments, suggest edits, and communicate directly within the platform.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketplace and Conflicts</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    ThreadLock&apos;s marketplace connects SRLs with qualified professionals. When a user requests a review, our system performs an automated conflict screen based on the parties and case information provided. However, this is only a preliminary check.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                    <p className="text-sm text-slate-800 leading-relaxed">
                      <strong className="text-orange-900">Professional Responsibility:</strong> ThreadLock Pro is a workflow and information management tool. You remain fully responsible for conflict checks, ethics compliance, and legal advice to your clients. Always perform your own conflicts analysis before accepting representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Clio Integration Section */}
          <section id="clio" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Clio Integration</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">What the Clio Integration Does</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Connect ThreadLock Pro to Clio to create or link Clio matters and contacts directly from your ThreadLock cases. This streamlines your workflow by syncing case information between platforms. <strong>We do not access your billing or trust accounting data.</strong> The integration is focused on case and contact management only.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">How to Connect Clio</h3>
                  <ol className="space-y-3 list-decimal pl-6 text-slate-700">
                    <li>In ThreadLock Pro, navigate to <strong>Settings → Integrations → Clio</strong>.</li>
                    <li>Click the <strong>&quot;Connect to Clio&quot;</strong> button.</li>
                    <li>You&apos;ll be redirected to Clio&apos;s login page. Log in with your Clio credentials.</li>
                    <li>Review and approve the requested permissions.</li>
                    <li>You&apos;ll be returned to ThreadLock Pro once the connection is complete.</li>
                  </ol>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Once connected, you can create new Clio matters or link existing ones directly from your ThreadLock case pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">What Permissions We Request from Clio</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    When you connect Clio, ThreadLock requests the following permissions:
                  </p>
                  <ul className="space-y-2 list-disc pl-6 text-slate-700">
                    <li><strong>Read/Write: Matters</strong> – To create and link Clio matters with ThreadLock cases.</li>
                    <li><strong>Read/Write: Contacts</strong> – To create and link client contacts in Clio.</li>
                    <li><strong>General/API Access</strong> – Required by Clio&apos;s platform for integration functionality.</li>
                  </ul>
                  <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <p className="text-sm text-slate-800 leading-relaxed">
                      <strong className="text-blue-900">Important:</strong> We do <strong>not</strong> request or use Clio billing, trust, or accounting scopes. Your financial data remains completely separate and secure within Clio.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">How to Disconnect Clio</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    You can disconnect the Clio integration at any time from either ThreadLock or Clio:
                  </p>
                  <p className="text-slate-700 mb-2"><strong>From ThreadLock Pro:</strong></p>
                  <ul className="space-y-2 list-disc pl-6 text-slate-700 mb-4">
                    <li>Go to <strong>Settings → Integrations → Clio</strong>.</li>
                    <li>Click the <strong>&quot;Disconnect&quot;</strong> button.</li>
                  </ul>
                  <p className="text-slate-700 mb-2"><strong>From Clio:</strong></p>
                  <ul className="space-y-2 list-disc pl-6 text-slate-700 mb-4">
                    <li>Log in to Clio and go to <strong>Settings → Integrations</strong>.</li>
                    <li>Find ThreadLock in your connected apps and click <strong>&quot;Revoke Access&quot;</strong>.</li>
                  </ul>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Note:</strong> Disconnecting the integration stops future syncing, but does not delete any data that was previously synced to Clio. Historical matters and contacts remain in Clio.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Troubleshooting Clio Issues</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">I see an error when trying to connect</h4>
                      <ul className="space-y-2 list-disc pl-6 text-slate-700">
                        <li>Verify you&apos;re using valid Clio credentials with administrative permissions.</li>
                        <li>Ensure pop-ups are allowed in your browser for both ThreadLock and Clio.</li>
                        <li>Try clearing your browser cache and cookies, then attempt the connection again.</li>
                        <li>If the error persists, contact support with the exact error message and approximate time you encountered it.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">I connected, but my cases aren&apos;t syncing</h4>
                      <ul className="space-y-2 list-disc pl-6 text-slate-700">
                        <li>Check that the integration is still active in your ThreadLock settings.</li>
                        <li>Verify that you have the necessary permissions in Clio for the matters you&apos;re trying to sync.</li>
                        <li>Try manually linking a case by clicking &quot;Link to Clio&quot; from the case page.</li>
                        <li>If issues persist, disconnect and reconnect the integration, then try again.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">The wrong client/matter is linked</h4>
                      <ul className="space-y-2 list-disc pl-6 text-slate-700">
                        <li>You can unlink a matter from the ThreadLock case page by clicking &quot;Unlink Clio Matter&quot;.</li>
                        <li>Then, use the &quot;Link to Clio&quot; option to search for and select the correct matter.</li>
                        <li>Double-check that client names match between systems to avoid confusion.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-slate-700 mt-6 leading-relaxed">
                    If these steps don&apos;t resolve your issue, please <button
                      onClick={() => {
                        trackEvent('support_clio_click');
                        scrollToSection('contact');
                      }}
                      className="text-orange-600 hover:text-orange-700 underline font-semibold"
                    >
                      contact support
                    </button> with the exact error message and approximate time the issue occurred.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Account & Billing Section */}
          <section id="billing" className="py-16 md:py-20 bg-white scroll-mt-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Account & Billing</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Subscriptions</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    ThreadLock offers monthly and annual subscription plans for both individual users (ThreadLock Core) and legal professionals (ThreadLock Pro). Annual plans include 2 months free. Billing is handled separately for SRL and Pro accounts.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    For detailed pricing information, visit our <Link href="/pricing" className="text-orange-600 hover:text-orange-700 underline font-semibold">pricing page</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Updating Payment Details</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    To update your payment method or billing information:
                  </p>
                  <ol className="space-y-2 list-decimal pl-6 text-slate-700">
                    <li>Log in to the ThreadLock app.</li>
                    <li>Navigate to <strong>Settings → Billing</strong>.</li>
                    <li>Click <strong>&quot;Update Payment Method&quot;</strong>.</li>
                    <li>Enter your new card details and save.</li>
                  </ol>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Your new payment method will be used for all future charges.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Refunds & Cancellations</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    You can cancel your subscription at any time from the <strong>Settings → Billing</strong> page. Your access will continue until the end of your current billing period. We do not provide refunds for partial months.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    For detailed terms, please review our <Link href="/terms" className="text-orange-600 hover:text-orange-700 underline font-semibold">Terms of Service</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Issues Section */}
          <section id="technical" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Technical Issues, Data, and System Status
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">I can&apos;t log in / I&apos;m locked out</h3>
                  <p className="text-slate-700 mb-3 leading-relaxed">Try these steps:</p>
                  <ul className="space-y-2 list-disc pl-6 text-slate-700">
                    <li>Use the &quot;Forgot Password&quot; link on the login page to reset your password.</li>
                    <li>Check that you&apos;re using the correct email address associated with your account.</li>
                    <li>Clear your browser cookies and cache, then try logging in again.</li>
                    <li>Try a different browser or incognito/private mode to rule out browser issues.</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The app is slow or pages won&apos;t load</h3>
                  <p className="text-slate-700 mb-3 leading-relaxed">Try these steps:</p>
                  <ul className="space-y-2 list-disc pl-6 text-slate-700">
                    <li>Check your internet connection and run a speed test.</li>
                    <li>Close other browser tabs and applications to free up system resources.</li>
                    <li>Update your browser to the latest version.</li>
                    <li>Clear your browser cache and reload the page.</li>
                    <li>If the issue persists, check our system status (below).</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Something looks wrong or broken in the interface</h3>
                  <p className="text-slate-700 mb-3 leading-relaxed">Try these steps:</p>
                  <ul className="space-y-2 list-disc pl-6 text-slate-700">
                    <li>Hard refresh the page (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).</li>
                    <li>Clear your browser cache and cookies.</li>
                    <li>Try a different browser to see if the issue is browser-specific.</li>
                    <li>Take a screenshot of the issue and contact support with details.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">System Status</h3>
                <p className="text-slate-700 leading-relaxed">
                  If ThreadLock is experiencing downtime or degraded performance, we&apos;ll post updates here and on our social media channels. Currently, all systems are operational.
                </p>
              </div>

              {/* Data Protection */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Protection & Security</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  ThreadLock uses industry-standard security practices to protect your data, including encryption at rest and in transit, secure authentication, and regular security audits.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  For more information, see our{' '}
                  <Link href="/privacy" className="text-orange-600 hover:text-orange-700 underline font-semibold">Privacy Policy</Link> and{' '}
                  <Link href="/security" className="text-orange-600 hover:text-orange-700 underline font-semibold">Security Overview</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support Section */}
          <section id="contact" className="py-16 md:py-20 bg-white scroll-mt-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Still need help? Contact support.
              </h2>

              <p className="text-slate-700 mb-8 leading-relaxed">
                For fastest help, include your account email, whether you&apos;re using SRL or Pro, and a brief description of the issue.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Email Support</h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      <strong>Email:</strong>{' '}
                      <a 
                        href="mailto:info@threadlock.ai"
                        onClick={() => trackEvent('support_contact_click', { method: 'email' })}
                        className="text-orange-600 hover:text-orange-700 underline font-semibold text-lg"
                      >
                        info@threadlock.ai
                      </a>
                    </p>
                    <p className="text-slate-700 text-sm">
                      <strong>Response Time:</strong> We typically respond within 1-2 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal & Disclaimers Section */}
          <section id="legal" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Legal & Disclaimers</h2>

              <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-slate-300">
                <div className="space-y-4">
                  <p className="text-slate-800 leading-relaxed">
                    <strong className="text-slate-900">ThreadLock is not a law firm.</strong> We are a software company providing organizational and case management tools.
                  </p>
                  <p className="text-slate-800 leading-relaxed">
                    <strong className="text-slate-900">We do not provide legal advice</strong>, represent you in court, or guarantee outcomes in any legal matter.
                  </p>
                  <p className="text-slate-800 leading-relaxed">
                    <strong className="text-slate-900">Nothing on this page or in the app is a substitute for advice from a licensed attorney.</strong> If you have legal questions about your case, you should consult with a qualified lawyer in your jurisdiction.
                  </p>
                  <div className="pt-4 border-t border-slate-200 mt-6">
                    <p className="text-slate-700 text-sm">
                      For more information, please read our{' '}
                      <Link href="/terms" className="text-orange-600 hover:text-orange-700 underline font-semibold">Terms of Service</Link> and{' '}
                      <Link href="/privacy" className="text-orange-600 hover:text-orange-700 underline font-semibold">Privacy Policy</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
