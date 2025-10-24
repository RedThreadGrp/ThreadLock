import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { subscribeLeadFn } from '../src/lib/firebase'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function CTA() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // 1. Call Firebase Cloud Function to save lead
      await subscribeLeadFn({ fullName, email })

      // 2. Redirect to Stripe Checkout
      const stripe = await stripePromise
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const session = await response.json()

      if (session?.id) {
        await stripe.redirectToCheckout({ sessionId: session.id })
      } else {
        throw new Error('Failed to create checkout session.')
      }

    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

        {/* Left Content */}
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Take Control of Your Custody Case with Confidence
          </h1>
          <p className="leading-relaxed mt-4">
            Everything that matters is on the line. ThreadLock gives parents and professionals 
            a secure, organized way to document incidents, communications, and timelines— 
            so you can walk into mediation or court prepared and protected.
          </p>
        </div>

        {/* Right: Functional Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Join for $10 Early Access
          </h2>

          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Claim $10 Early Access'}
          </button>

          {error && <p className="text-red-500 text-xs mt-3">{error}</p>}

          <p className="text-xs text-gray-500 mt-3">
            First 6 months for $10. Then $19.99/month. Cancel anytime.
          </p>
        </form>

      </div>
    </section>
  )
}
