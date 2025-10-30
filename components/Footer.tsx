"use client";
import Link from "next/link";

function SocialLink({ href, label, children }: React.PropsWithChildren<{href:string; label:string;}>) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
      target="_blank" rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Newsletter (slim, optional) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            <h2 className="text-lg font-semibold text-slate-900">Stay informed</h2>
            <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a4d]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-[#fb7a1e] px-4 py-2 text-sm font-medium text-white hover:opacity-95"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <section className="bg-[#1b3a4d] text-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left: © + Compact nav */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <span className="text-sm/6 opacity-90">© {new Date().getFullYear()} ThreadLock.ai</span>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm/6">
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/legal" className="hover:text-white">Legal Center</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Right: Social (trimmed to 3) */}
          <div className="flex items-center gap-1">
            <SocialLink href="https://twitter.com/threadlock_ai" label="Twitter (X)">
              {/* Minimal icon (system default color) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.3.8A3.6 3.6 0 0 0 12 7.9c0 .3 0 .6.1.8-3-.1-5.7-1.6-7.5-3.9-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3 3.8-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.8 2.7A7.2 7.2 0 0 1 2 18.2a10.2 10.2 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.1 1.8-1.8z"/></svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/threadlock" label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.6H3.56V20h3.38V8.6zM5.23 3.5a2 2 0 1 0 .02 4 2 2 0 0 0-.02-4zM20.44 20v-6.2c0-3.32-1.77-4.86-4.13-4.86-1.9 0-2.75 1.05-3.22 1.8v-1.55H9.71c.05 1.02 0 10.81 0 10.81h3.38v-6.04c0-.32.02-.64.12-.86.27-.64.88-1.31 1.9-1.31 1.34 0 1.88 1 1.88 2.48V20h3.45z"/></svg>
            </SocialLink>
            <SocialLink href="https://instagram.com/threadlock.ai" label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 8.2zM18 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </SocialLink>
          </div>
        </div>
      </section>
    </footer>
  );
}
