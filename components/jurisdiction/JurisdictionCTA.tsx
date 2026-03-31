import React from "react";

export default function JurisdictionCTA() {
  return (
    <section className="bg-surface-dark-panel border border-border-dark rounded-2xl px-8 py-12 my-10 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
        Get organized before your hearing.
      </h2>
      <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
        ThreadLock helps you document incidents, organize evidence, and prepare
        court-ready materials, so you walk in prepared.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://app.threadlock.ai/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#fb7a1e] hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-all"
        >
          Start Free Trial →
        </a>
        <a
          href="/pricing"
          className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border border-white/20 transition-all"
        >
          See Pricing
        </a>
      </div>
    </section>
  );
}
