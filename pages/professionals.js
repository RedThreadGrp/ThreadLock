import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>For Professionals - ThreadLock</title>
        <meta name="description" content="Join the ThreadLock Pro Pool. Get pre-paid review requests from users in your state." />
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="inline-flex items-baseline font-bold text-2xl tracking-tight select-none cursor-pointer">
              <span className="text-slate-800">Thread</span>
              <span className="text-orange-600">Lock</span>
              <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-slate-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link href="/pricing" className="text-slate-700 hover:text-orange-600 transition-colors">Pricing</Link>
            <a href="https://app.threadlock.ai/pro/login" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-orange-600 transition-colors">
              Login
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Chasing Leads.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Start Reviewing Pre-Paid Cases.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-10">
              Join the ThreadLock Pro Pool. We send you pre-packaged, pre-paid review requests from users 
              in your state. Or, invite your own clients and use our platform to collaborate.
            </p>
            <a
              href="https://app.threadlock.ai/pro/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all text-lg"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Set Your Profile</h3>
                <p className="text-slate-600">
                  You get verified, upload your firm's forms, and set your flat-fee rate.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Claim a Job</h3>
                <p className="text-slate-600">
                  A user in your state submits an anonymous request. You're the first to claim it.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pass Conflict Check</h3>
                <p className="text-slate-600">
                  You alone see the party names. If you're clear, you accept.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Annotate & Get Paid</h3>
                <p className="text-slate-600">
                  You provide your review using our in-app tools. The fee is already secured.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1: Request Pool */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  A Simple, Anonymous Queue
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  No more browsing or bidding. We send anonymous, pre-paid requests from users in your jurisdiction 
                  directly to your dashboard. Be the first to claim a job that fits your schedule.
                </p>
              </div>
              <div className="rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/screenshot-1-request-pool.png"
                  alt="Request Pool Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Conflict Check */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1 rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/screenshot-2-conflict-check.png"
                  alt="Conflict Check Flow"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Built-In Privacy & Conflict Checks
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Your ethical duties are our priority. Once you claim a job, you alone see the party names. 
                  Perform your conflict check. If you have a conflict, return it to the pool with one click. 
                  The user's privacy is always protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Pro Forms Library */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Your Forms, Your Workflow
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Stop emailing unsecured PDFs. Upload your firm's custom intake forms, declaration templates, 
                  and proprietary documents. When you invite your clients, you can assign your forms for them 
                  to complete, streamlining your entire client intake.
                </p>
              </div>
              <div className="rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/screenshot-3-pro-forms-library.png"
                  alt="Pro Forms Library"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature 4: Annotation Tools */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1 rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/screenshot-4-annotation-view.png"
                  alt="Annotation View"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Powerful In-App Review Tools
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Stop downloading and re-uploading PDFs. Use our built-in annotator to provide feedback. 
                  Highlight text, leave comments, and mark for redaction, all in one place. Your review is 
                  delivered securely back to the user.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 5: Clio Integration */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Sync to Your CMS in One Click
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Save hours of admin time. After you review a package, sync all notes, documents, and contact 
                  information directly to your Clio account with one click. Or, download a complete case file 
                  as a ZIP.
                </p>
              </div>
              <div className="rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/screenshot-5-integrations-clio.png"
                  alt="Clio Integration"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Focus on the Law, Not the Paperwork.
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Join hundreds of legal professionals who are streamlining their practice with ThreadLock Pro.
            </p>
            <a
              href="https://app.threadlock.ai/pro/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all text-lg"
            >
              Sign Up for ThreadLock Pro
            </a>
            <p className="mt-6 text-slate-400">
              Already have an account?{' '}
              <a href="https://app.threadlock.ai/pro/login" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                Log in here
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
