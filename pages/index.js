import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreadLock – AI-Guided Family Law Evidence</title>
        <meta
          name="description"
          content="AI-guided, blockchain-secured journaling for court-ready family law evidence. Protect your rights and stay organized with ThreadLock."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full overflow-x-hidden">
        <Hero />
        <Features />
        <Pricing />
        <Statistics />
        <Testimonials />
        <Blog />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
