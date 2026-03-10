import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SiteHeader from '../src/components/SiteHeader';

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
    <div className="min-h-screen tl-auth-background text-white">
      {/* Blurred orange gradient overlay — matches EDU/auth page style */}
      <div className="tl-edu-bg" aria-hidden="true">
        <div className="tl-edu-grid" />
      </div>

      <Head>
        <title>Family Law Software Pricing - ThreadLock for Custody & Divorce Cases</title>
        <meta name="description" content="Affordable family law pricing for custody disputes, divorce cases, and child support. Plans for parents and family law attorneys." />
      </Head>

      <SiteHeader theme="dark" />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include our core features.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Tier 1: For Individuals */}
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-lg border-2 border-slate-600 hover:border-orange-500 transition-all p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">ThreadLock Core</h3>
                  <p className="text-slate-300">For Individuals</p>
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-white">
                    $29
                    <span className="text-lg font-normal text-slate-400">/month</span>
                  </p>
                  <p className="text-sm text-slate-300 mt-2">Annual plan available with 2 months free</p>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-white mb-4">Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-200">Guided 5-Step Workflow</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-200">Journal & Evidence Manager</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-200">Document Scanning & OCR</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-slate-200">Timeline Builder (with KML/ICS Import)</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-slate-600">
                    <h5 className="font-semibold text-white mb-2">Add-on:</h5>
                    <p className="text-sm text-slate-200 mb-1">
                      <strong>Attorney Seat</strong>
                    </p>
                    <p className="text-2xl font-bold text-orange-400">
                      +$19<span className="text-sm font-normal text-slate-400">/month per seat</span>
                    </p>
                    <p className="text-sm text-slate-300 mt-2">
                      Add a secure, collaborative seat for your attorney.
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
              <div className="bg-orange-900/30 backdrop-blur-md rounded-2xl shadow-xl border-2 border-orange-500 p-8 flex flex-col relative">
                <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-xl">
                  POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">ThreadLock Pro</h3>
                  <p className="text-orange-200">For Legal Professionals</p>
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-white">
                    $300
                    <span className="text-lg font-normal text-orange-200">/month</span>
                  </p>
                  <p className="text-sm text-orange-100 mt-2">Includes five client seats</p>
                  <p className="text-sm text-orange-100 mt-1">Annual plan: $3,300/year (one month free)</p>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-white mb-4">Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">Professional Dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">Access to the "Review Queue"</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">Built-in Privacy & Conflict Check Flow</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">
                        Upload & Assign Your Firm's Custom Forms <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full ml-1">New</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">5 Client Seats Included</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">Additional seats available (bulk or individual)</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">1-Click "Sync to Clio"</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-white">Full Annotation & Redaction Tools</span>
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
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-lg border-2 border-slate-600 hover:border-orange-500 transition-all p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">ThreadLock for Benefits</h3>
                  <p className="text-slate-300">For Employers</p>
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-white">Custom</p>
                  <p className="text-sm text-slate-300 mt-2">Contact us for pricing</p>
                </div>
                <div className="flex-grow">
                  <p className="text-slate-200 mb-6">
                    Offer ThreadLock as a powerful, affordable legal benefit to your employees. 
                    Support your team through life's most stressful events.
                  </p>
                  <h4 className="font-semibold text-white mb-4">Get in touch:</h4>
                  
                  {formStatus === 'success' ? (
                    <div className="bg-green-900/40 border border-green-500/50 rounded-lg p-4 text-green-300">
                      <p className="font-semibold">Thank you!</p>
                      <p className="text-sm">We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-slate-200 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="workEmail" className="block text-sm font-medium text-slate-200 mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="employeeCount" className="block text-sm font-medium text-slate-200 mb-1">
                          Number of Employees
                        </label>
                        <select
                          id="employeeCount"
                          required
                          value={formData.employeeCount}
                          onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
