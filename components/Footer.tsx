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
    <footer>
      {/* Disclaimer Section */}
      <section className="bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="bg-white/80 p-6 rounded-lg border border-slate-200">
            <p className="text-sm text-slate-700 text-center leading-relaxed">
              <strong className="text-slate-900">Important:</strong> ThreadLock is an organizational tool, not a law firm. 
              We do not provide legal advice, representation, or attorney-client relationships. 
              Our platform helps you organize and manage your materials, but we are not a substitute for speaking with a licensed attorney if you have legal questions. 
              Results may vary, and we cannot guarantee specific outcomes in any legal matter.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <section className="bg-[#1b3a4d] text-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left: © + Compact nav */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <span className="text-sm/6 opacity-90">© {new Date().getFullYear()} ThreadLock</span>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm/6">
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/legal" className="hover:text-white">Legal Center</Link>
              <Link href="/support" className="hover:text-white">Support</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Right: Social (trimmed to 4) */}
          <div className="flex items-center gap-1">
            <SocialLink href="https://www.youtube.com/@Find.ThreadLock" label="YouTube">
              {/* YouTube icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/threadlock" label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.6H3.56V20h3.38V8.6zM5.23 3.5a2 2 0 1 0 .02 4 2 2 0 0 0-.02-4zM20.44 20v-6.2c0-3.32-1.77-4.86-4.13-4.86-1.9 0-2.75 1.05-3.22 1.8v-1.55H9.71c.05 1.02 0 10.81 0 10.81h3.38v-6.04c0-.32.02-.64.12-.86.27-.64.88-1.31 1.9-1.31 1.34 0 1.88 1 1.88 2.48V20h3.45z"/></svg>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/find.threadlock/" label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 8.2zM18 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </SocialLink>
            <SocialLink href="https://www.reddit.com/r/thread_lock/" label="Reddit">
              {/* Reddit icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </SocialLink>
          </div>
        </div>
      </section>
    </footer>
  );
}
