import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreadLock: AI-Guided Family Law Evidence</title>
        <meta name="description" content="AI-guided, blockchain-secured journaling for court-ready family law evidence." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Pricing />
      <Footer />

      {/* Stripe Checkout Script */}
      <script src="https://js.stripe.com/v3/"></script>
      <script dangerouslySetInnerHTML={{__html: `
        const stripe = Stripe("${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}");
        document.getElementById("checkoutButton").addEventListener("click", async () => {
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          if (!name || !email) return alert("Please fill out all fields.");
          const res = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
          });
          const { sessionId } = await res.json();
          stripe.redirectToCheckout({ sessionId });
        });
      `}} />
    </>
  )
}
