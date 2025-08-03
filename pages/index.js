import Head from 'next/head'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { createClient } from '@supabase/supabase-js'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!fullName || !email) return alert('Please complete all fields.')

    // Save lead to Supabase
    await supabase.from('leads').insert([{ name: fullName, email }])

    // Redirect to Stripe Checkout
    const stripe = await stripePromise
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    const session = await res.json()
    await stripe.redirectToCheckout({ sessionId: session.id })
  }

  return (
    <>
      <Head>
        <title>ThreadLock: AI-Guided Family Law Evidence</title>
        <meta
          name="description"
          content="AI-guided, blockchain-secured journaling for court-ready family law evidence."
        />
      </Head>

      {/* HERO */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Take Control of Your Family Law Case
            </h1>
            <p className="mb-8 leading-relaxed">
              AI-guided, blockchain-secured, and court-ready journaling to protect your rights.
            </p>
            <div className="flex justify-center">
              <a href="#pricing" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Join Early Access
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/threadlock-logo.png" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">AI-Guided Logging</h2>
              <p className="leading-relaxed text-base">Step-by-step prompts ensure your journal entries meet legal standards for court submission.</p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Court-Ready Exports</h2>
              <p className="leading-relaxed text-base">Generate polished PDF summaries and evidence packages for attorneys, mediators, or judges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-10">
            Flexible plans for every stage of your case.
          </p>
          <div className="inline-block bg-white shadow rounded-lg overflow-hidden">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-100">Plan</th>
                  <th className="px-4 py-3 bg-gray-100">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-3">Early Access</td>
                  <td className="border-t px-4 py-3 text-lg text-gray-900">$10/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA WITH FORM */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Get Early Access Today
            </h1>
            <p className="leading-relaxed mt-4">
              Lock in your $10/month rate and start building court-ready evidence.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Join Now
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">ThreadLock</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 ThreadLock — Secure Family Law Journaling
          </p>
        </div>
      </footer>
    </>
  )
}
