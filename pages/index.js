import Head from 'next/head'

// Import components
import Hero from '../components/Hero'
import Features from '../components/Features'
import Statistics from '../components/Statistics'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import CTA from '../components/CTA'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreadLock – Secure, Court-Ready Family Law Evidence</title>
        <meta
          name="description"
          content="ThreadLock helps parents and professionals create secure, organized, court-ready family law evidence with AI-guided journaling and immutable records."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Core Features */}
      <Features />

      {/* Statistics / Proof Points */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* Blog / Educational Content */}
      <Blog />

      {/* Signup CTA */}
      <CTA />

      {/* Pricing Plans */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </>
  )
}
