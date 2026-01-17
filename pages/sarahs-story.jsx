import React from 'react';
import Head from 'next/head';
import SiteHeader from "../src/components/SiteHeader";
import HeroBanner from "../src/components/HeroBanner";

export default function SarahsStoryPage() {
  return (
    <div className="tl-page-background">
      <Head>
        <title>Her Story | ThreadLock™</title>
        <meta name="description" content="Sarah's journey from chaos to clarity. How ThreadLock helped a single mom navigate the family court system." />
      </Head>
      <SiteHeader />
      <HeroBanner
        image="/earving-segura-_WYjs343uLY-unsplash.jpg"
        heading={<>From Chaos to Clarity.<br/>Her Story.</>}
        subheading="For too long, the legal system has been a maze. But for Sarah Thompson, a single mom from Portland, it was a battle for her future."
      />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Sarah's Journey in Three Steps
        </h2>

        {/* STEP 1 */}
        <div className="max-w-3xl mx-auto mb-14 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <span className="inline-block bg-orange-600 text-white font-bold text-sm px-3 py-1 rounded-full mb-4">STEP 1</span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Problem</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sarah's world fell apart when her marriage turned violent. Overwhelmed and terrified for her kids' safety, she knew she had to get out, but had no idea what to do. As a stay-at-home mom with no paycheck and no access to resources, she was drowning in the chaos of a legal battle she couldn't afford, feeling trapped and utterly powerless.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="max-w-3xl mx-auto mb-14 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <span className="inline-block bg-orange-600 text-white font-bold text-sm px-3 py-1 rounded-full mb-4">STEP 2</span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Turning Point</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sarah was told to "collect evidence" and "be prepared," but had no idea where to start. Then she found ThreadLock and began turning scattered information into a clear, organized case.
          </p>
        </div>

        {/* STEP 3 with hands/sun */}
        <div 
          className="max-w-3xl mx-auto relative rounded-2xl overflow-hidden shadow-lg border border-white/15"
          style={{
            backgroundImage: "url('/daoudi-aissa-absT1BNRDAI-unsplash.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 p-8 text-white">
            <span className="inline-block bg-orange-600 text-white font-bold text-sm px-3 py-1 rounded-full mb-4">STEP 3</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The Result</h3>
            <p className="text-lg text-slate-100 leading-relaxed mb-4">
              Sarah walked into court terrified but walked out free. She won custody of her kids, left the abuse behind, and started her new life. ThreadLock provided the tools she needed to find her voice.
            </p>
            <div className="bg-black/45 border-l-4 border-orange-600 p-4 rounded italic">
              "ThreadLock didn't just give me tools. It gave me confidence. I could finally stand up for myself - and be heard."
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-12">How ThreadLock Turns Chaos into Clarity</h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur border border-white/15 p-6 rounded-xl text-center">
              <h4 className="text-orange-600 text-xl font-bold mb-2">Organize Everything</h4>
              <p className="text-slate-200">One secure place to manage documents, messages, photos, and evidence.</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/15 p-6 rounded-xl text-center">
              <h4 className="text-orange-600 text-xl font-bold mb-2">Understand the Law</h4>
              <p className="text-slate-200">Plain-language explanations and smart prompts - no legal degree required.</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/15 p-6 rounded-xl text-center">
              <h4 className="text-orange-600 text-xl font-bold mb-2">Show the Truth</h4>
              <p className="text-slate-200">Timelines and court-ready exports so judges can see what matters fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-slate-800 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">You're not powerless. You're just not prepared.<br/>Yet.</h3>
            <p className="text-lg text-slate-200 mb-8">We're putting power back in the hands of everyday people, one case at a time.</p>
            <a href="https://app.threadlock.ai/" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-700 transition">
              Find Your Voice. Find Your Freedom.
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
