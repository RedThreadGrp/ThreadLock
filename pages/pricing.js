import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    employeeCount: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ companyName: '', workEmail: '', employeeCount: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Pricing - ThreadLock</title>
        <meta name="description" content="ThreadLock pricing plans for individuals, professionals, and businesses" />
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
            <Link href="/professionals" className="text-slate-700 hover:text-orange-600 transition-colors">For Professionals</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include our core features.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Tier 1: For Individuals */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 hover:border-orange-500 transition-all p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">ThreadLock Core</h3>
                  <p className="text-slate-600">For Individuals</p>
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-slate-900">
                    $29
                    <span className="text-lg font-normal text-slate-500">/month</span>
                  </p>
                  <p className="text-sm text-slate-600 mt-2">Annual plan available with 2 months free</p>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-slate-900 mb-4">Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-700">Guided 5-Step Workflow</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-700">Journal & Evidence Manager</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-700">Document Scanning & OCR</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-700">Timeline Builder (with KML/ICS Import)</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h5 className="font-semibold text-slate-900 mb-2">Add-on:</h5>
                    <p className="text-sm text-slate-700 mb-1">
                      <strong>BYOA (Bring Your Own Attorney) Seat</strong>
                    </p>
                    <p className="text-2xl font-bold text-orange-600">
                      +$19<span className="text-sm font-normal text-slate-500">/month per seat</span>
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      Pay for a secure, collaborative seat for your existing attorney.
                    </p>
                  </div>
                </div>
                <a
                  href="https://app.threadlock.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block text-center bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all"
                >
                  Get Started
                </a>
              </div>

              {/* Tier 2: For Professionals */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl border-2 border-orange-500 p-8 flex flex-col relative">
                <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-xl">
                  POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">ThreadLock Pro</h3>
                  <p className="text-slate-700">For Legal Professionals</p>
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-slate-900">
                    $99
                    <span className="text-lg font-normal text-slate-600">/month</span>
                  </p>
                  <p className="text-sm text-slate-700 mt-2">Annual plan available with 2 months free</p>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-slate-900 mb-4">Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-800">Professional Dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-800">Access to the "Review Queue"</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-800">Built-in Privacy & Conflict Check Flow</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-800">
                        Upload & Assign Your Firm's Custom Forms <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full ml-1">New</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-800">5 Client Seats Included (BYOA)</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-800">1-Click "Sync to Clio"</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-800">Full Annotation & Redaction Tools</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://app.threadlock.ai/pro/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block text-center bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all"
                >
                  Get Started as Pro
                </a>
              </div>

              {/* Tier 3: For Business */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 hover:border-orange-500 transition-all p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">ThreadLock for Benefits</h3>
                  <p className="text-slate-600">For Employers</p>
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-slate-900">Custom</p>
                  <p className="text-sm text-slate-600 mt-2">Contact us for pricing</p>
                </div>
                <div className="flex-grow">
                  <p className="text-slate-700 mb-6">
                    Offer ThreadLock as a powerful, affordable legal benefit to your employees. 
                    Support your team through life's most stressful events.
                  </p>
                  <h4 className="font-semibold text-slate-900 mb-4">Get in touch:</h4>
                  
                  {formStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                      <p className="font-semibold">Thank you!</p>
                      <p className="text-sm">We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="workEmail" className="block text-sm font-medium text-slate-700 mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="employeeCount" className="block text-sm font-medium text-slate-700 mb-1">
                          Number of Employees
                        </label>
                        <select
                          id="employeeCount"
                          required
                          value={formData.employeeCount}
                          onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="1-50">1-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1001+">1001+</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all disabled:bg-slate-400"
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands who are building stronger cases with ThreadLock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition-all"
              >
                Get Started Now
              </Link>
              <Link
                href="/professionals"
                className="bg-white text-slate-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-100 transition-all"
              >
                Learn About Pro
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
