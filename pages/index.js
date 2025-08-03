import Head from 'next/head'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { createClient } from '@supabase/supabase-js'

// Stripe client
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Home() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      const supabase = createClient(supabaseUrl, supabaseKey)

      // Store lead
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([{ name: fullName, email }])
      if (supabaseError) throw supabaseError

      // Stripe checkout session
      const stripe = await stripePromise
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const session = await res.json()
      if (!session?.id) throw new Error('Checkout session failed')
      await stripe.redirectToCheckout({ sessionId: session.id })
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>ThreadLock – AI-Guided Family Law Evidence</title>
        <meta
          name="description"
          content="AI-guided, blockchain-secured, court-ready journaling for family law cases."
        />
      </Head>

      {/* HERO */}
      <section className="bg-gray-50 text-gray-800">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Take Control of Your Family Law Case
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Secure, AI-guided journaling to create court-ready, tamper-proof evidence.
            </p>
            <a
              href="#cta"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Get Early Access
            </a>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="ThreadLock Dashboard"
              src="/threadlock-logo.png"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-2xl text-gray-900 mb-2">
                  AI-Guided Logs
                </h2>
                <p>Capture events with prompts tailored for legal admissibility.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-2xl text-gray-900 mb-2">
                  Blockchain Security
                </h2>
                <p>Immutable, timestamped entries that protect your evidence integrity.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-2xl text-gray-900 mb-2">
                  Court-Ready Exports
                </h2>
                <p>Generate polished PDFs for attorneys, mediators, or the court.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Lock in $10 Early Access
            </h1>
            <p className="leading-relaxed mt-4">
              First 6 months $10 total, then $19.99/month. Cancel anytime.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md"
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Claim Early Access'}
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Secure your discounted subscription. Cancel anytime.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <span className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-xl">ThreadLock</span>
          </span>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 ThreadLock — Secure Family Law Journaling
          </p>
        </div>
      </footer>
    </>
  )
}
