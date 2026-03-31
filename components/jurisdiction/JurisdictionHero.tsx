import React from "react";
import Link from "next/link";

export interface JurisdictionHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  hideCta?: boolean;
}

export default function JurisdictionHero({ eyebrow, title, intro, hideCta = false }: JurisdictionHeroProps) {
  return (
    <section className="relative bg-surface-dark-panel border border-border-dark text-white rounded-2xl overflow-hidden mb-8 px-8 py-14 md:py-16">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #fb7a1e 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          {intro}
        </p>
        {!hideCta && (
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://app.threadlock.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#fb7a1e] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Start Free Trial
            </a>
            <Link
              href="/#showcase"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-white/20"
            >
              See How It Works
            </Link>
          </div>
        )}
        {!hideCta && (
          <p className="text-xs text-slate-400 mt-4">7 days free · No credit card required</p>
        )}
      </div>
    </section>
  );
}
