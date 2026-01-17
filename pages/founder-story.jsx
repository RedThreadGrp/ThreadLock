import React from "react";
import Head from "next/head";
import Image from "next/image";
import SiteHeader from "../src/components/SiteHeader";
import HeroBanner from "../src/components/HeroBanner";

/* ----------------- Local image paths (exact filenames in /public) ----------------- */
const STEP2_IMG  = "/ariel-salgado-vp1Adq27sro-unsplash.jpg";      // child over wall
const QUOTE_IMG  = "/getty-images-6iVK12iAn_s-unsplash.jpg";       // man + child hands
const RESULT_IMG = "/ales-krivec-OC63XpUAxuY-unsplash.jpg";

export default function FounderStoryPage() {
  return (
    <div className="tl-auth-background">
      <Head>
        <title>Our Story | ThreadLock™</title>
        <meta name="description" content="The system puts everyone in a box. Even the judge. Our founder's journey through the family court system." />
      </Head>
      <SiteHeader />
      <HeroBanner
        image="/ahmed-tB_QL1ToYBQ-unsplash.jpg"
        heading={<>The System Puts Everyone in a Box.<br/>Even the Judge.</>}
        subheading="Our founder's journey through the family court system revealed a surprising truth that became the foundation for ThreadLock."
      />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          A Journey in Three Steps
        </h2>

        {/* STEP 1 */}
        <div className="max-w-3xl mx-auto mb-14 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-right">
          <span className="inline-block bg-orange-600 text-white font-bold text-sm px-3 py-1 rounded-full mb-4">STEP 1</span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Expectation</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            I walked into family court to represent myself. I'd been to law school, but after several years as a stay-at-home mom, I had no money for a lawyer and no access to professional resources. I thought my legal knowledge would be enough. I was wrong.
          </p>
        </div>

        {/* STEP 2 - compact card with its own background image */}
        <div 
          className="max-w-3xl mx-auto mb-14 relative rounded-2xl overflow-hidden shadow-lg border border-white/15"
          style={{
            backgroundImage: `url('${STEP2_IMG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 p-8 text-white">
            <span className="inline-block bg-orange-600 text-white font-bold text-sm px-3 py-1 rounded-full mb-4">STEP 2</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The Reality</h3>
            <p className="text-lg text-white leading-relaxed">
              The system wasn't just complex; it felt designed to be bewildering. My confidence was quickly replaced by the same fear and powerlessness that millions of people feel every year.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="max-w-3xl mx-auto mb-14 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-right">
          <span className="inline-block bg-orange-600 text-white font-bold text-sm px-3 py-1 rounded-full mb-4">STEP 3</span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Epiphany</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            The moment that changed everything was when I learned about the judge in my case. Before the robe, they were a champion for the underdog. Yet, from the bench, they were unable to provide the very access they once fought for.
          </p>
        </div>

        {/* QUOTE BAND - image left, centered quote, right-aligned paragraph on cream plate */}
        <div className="grid md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto mb-14">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image src={QUOTE_IMG} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="bg-stone-100 border border-stone-200 rounded-xl p-8">
            <p className="text-slate-800 leading-relaxed mb-4">
              Instead of anger, I felt a moment of clarity. I saw a capable person operating under impossible constraints.
            </p>
            <p className="text-slate-800 leading-relaxed">
              The issue was not intent or compassion. It was the risk of being wrong, combined with the volume of material and the speed at which decisions had to be made. In family court, no one has the time or margin for error to sift through scattered records and competing narratives. The system does not fail because people do not care. It fails because it forces decisions to be made faster than clarity can be achieved.
            </p>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section 
        className="relative py-20 md:py-28 text-white"
        style={{
          backgroundImage: `url('${RESULT_IMG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container mx-auto px-6">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-12">The Result: A Solvable Problem</h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/90 backdrop-blur border border-white/20 p-8 rounded-xl text-center">
              <h4 className="text-orange-400 text-xl font-bold mb-2">Clarity over Chaos</h4>
              <p className="text-white">A secure place to organize documents, messages, and evidence.</p>
            </div>
            <div className="bg-slate-800/90 backdrop-blur border border-white/20 p-8 rounded-xl text-center">
              <h4 className="text-orange-400 text-xl font-bold mb-2">Guidance over Guesswork</h4>
              <p className="text-white">AI that provides jurisdiction-specific guidance, not just generic advice.</p>
            </div>
            <div className="bg-slate-800/90 backdrop-blur border border-white/20 p-8 rounded-xl text-center">
              <h4 className="text-orange-400 text-xl font-bold mb-2">Truth over Confusion</h4>
              <p className="text-white">Timelines and court-ready proof so the truth is seen clearly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">You aren't powerless. You just aren't prepared.</h3>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Yet.</h3>
            <p className="text-lg text-slate-300 mb-8">
              Let ThreadLock change that. We're putting power back into the hands of everyday people, one case at a time.
            </p>
            <a href="https://app.threadlock.ai/" target="_blank" rel="noopener noreferrer" className="inline-block text-white font-bold px-8 py-3 rounded-lg transition hover:brightness-90" style={{ backgroundColor: 'var(--tl-brand-orange)' }}>
              Get Started with ThreadLock
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
