import React from "react";

export default function HeroBanner({ image, heading, subheading, children }) {
  return (
    <section
      className="relative text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-6 pt-36 md:pt-44 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed">
            {subheading}
          </p>
        )}
        {children && (
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
