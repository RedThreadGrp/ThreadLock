// NOTE: Tailwind-only styling. Assumes marketing repo includes tokens.css and Inter via global font-sans.
// Brand tokens assumed (adjust to your tokens.css naming):
// - bg-brand-navy / text-brand-navy
// - text-brand-orange / bg-brand-orange
// - bg-surface / bg-surface-panel / border-border / text-foreground / text-muted
// If your repo uses different token classnames, map them here—do NOT replace with hard-coded colors.

import React from "react";

type FAQ = { q: string; a: React.ReactNode };

const faqs: FAQ[] = [
  {
    q: "Is this legal advice?",
    a: (
      <>
        No. ThreadLock is software for drafting and organizing work product. Any client-facing output must be reviewed and
        approved by the supervising attorney or clinic director under your program's policies.
      </>
    ),
  },
  {
    q: "What does \"free for law students\" actually mean?",
    a: (
      <>
        Verified law students receive access at no cost while they remain enrolled and affiliated with a participating
        clinic or approved pro bono program. We verify eligibility via id.me and re-check periodically.
      </>
    ),
  },
  {
    q: "Do you train models on clinic data?",
    a: (
      <>
        By default, we do not use clinic client content to train general-purpose models. Your clinic controls its data and
        can export or delete it per policy.
      </>
    ),
  },
  {
    q: "What happens if a student graduates or leaves the clinic?",
    a: (
      <>
        Access transitions to the clinic program administrator. Student access can be revoked immediately, with case
        workspaces retained under clinic control.
      </>
    ),
  },
];

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function LawClinicsPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      {/* Top glow + subtle grid (token-driven) */}
      <div className="tl-edu-bg">
        <div className="tl-edu-grid" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-surface/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-navy text-white shadow-sm">
              {/* Replace with your real logo component */}
              <span className="text-sm font-bold">TL</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                ThreadLock <span className="text-brand-orange">EDU</span>
              </div>
              <div className="text-xs text-muted">Law clinics • Pro bono • Limited scope</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a className="hover:text-foreground transition" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-foreground transition" href="#supervision">
              Supervision
            </a>
            <a className="hover:text-foreground transition" href="#security">
              Security & governance
            </a>
            <a className="hover:text-foreground transition" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#verify"
              className="rounded-xl bg-brand-orange px-4 py-2 text-sm font-semibold text-black shadow-sm hover:opacity-90 transition"
            >
              Verify with id.me
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-panel px-3 py-1 text-xs font-semibold text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
              Free for verified law students in clinics & approved pro bono programs
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              The secure workspace for{" "}
              <span className="text-brand-orange">unbundled</span> legal aid
            </h1>

            <p className="mt-5 text-base text-muted md:text-lg">
              Draft, organize, and supervise limited-scope work with governance that respects client sensitivity. Built
              to help clinics move faster without turning student work into a compliance hazard.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
              <a
                href="#verify"
                className="w-full rounded-2xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-black shadow-sm hover:opacity-90 transition md:w-auto"
              >
                Start verification (id.me)
              </a>
              <a
                href="#clinic"
                className="w-full rounded-2xl border border-border bg-surface-panel px-6 py-4 text-center text-base font-semibold hover:bg-surface-panel/70 transition md:w-auto"
              >
                I'm a clinic director
              </a>
            </div>

            <p className="mt-6 text-xs text-muted">
              Important: ThreadLock is software, not a law firm. It does not provide legal advice. Supervising attorney
              review remains required under your clinic's rules.
            </p>
          </div>
        </section>

        {/* Value props */}
        <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="Drafting with governance"
              desc="Structured drafting workflows designed for review, revision, and approval. Built to reduce chaos—not replace professional judgment."
              badge="Workflow"
            />
            <FeatureCard
              title="Clinic supervision built-in"
              desc="Professor/attorney oversight with clear handoffs: who drafted what, who approved what, and when."
              badge="Supervision"
            />
            <FeatureCard
              title="Client sensitivity by design"
              desc="Keep clinic data under clinic control, with strong defaults and auditable actions."
              badge="Governance"
            />
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How access works</h2>
                <p className="mt-2 text-muted">
                  Free access is tied to enrollment and clinic affiliation—verified via id.me.
                </p>
              </div>
              <a
                href="#verify"
                className="inline-flex items-center justify-center rounded-2xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
              >
                Go to verification
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <StepCard
                step="1"
                title="Verify enrollment"
                desc="Authenticate your student status through id.me. We store only what we need to enforce eligibility."
              />
              <StepCard
                step="2"
                title="Attach to a clinic"
                desc="Select your school + clinic program (or request to add one). Clinic admins control cohorts and access."
              />
              <StepCard
                step="3"
                title="Work under supervision"
                desc="Draft and organize work product; route outputs to a supervisor for review and approval."
              />
            </div>
          </div>
        </section>

        {/* Verification + signup */}
        <section id="verify" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
              <h3 className="text-xl font-semibold tracking-tight">Student access (free)</h3>
              <p className="mt-2 text-muted">
                Verify your enrollment with id.me, then connect to your clinic. If your clinic isn't listed, request it.
              </p>

              <div className="mt-6 space-y-4">
                <Field label="School email (.edu)" placeholder="you@lawschool.edu" />
                <Field label="Law school" placeholder="Search or select…" />
                <Field label="Clinic / program" placeholder="e.g., Housing Clinic, Family Law Clinic" />

                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-md bg-brand-orange/20 ring-1 ring-brand-orange/40" />
                    <div className="text-sm text-muted">
                      <div className="font-semibold text-foreground">Eligibility gate: id.me</div>
                      <div className="mt-1">
                        You'll be redirected to id.me to verify student enrollment. When you return, we create a verified
                        access request for your clinic admin to approve.
                      </div>
                    </div>
                  </div>
                </div>

                {/* id.me verification button with real navigation */}
                <a
                  href="/api/idme/start?returnTo=/edu/clinics#verify"
                  className="block w-full rounded-2xl bg-brand-orange px-5 py-3 text-center text-base font-semibold text-black shadow-sm hover:opacity-90 transition"
                >
                  Verify with id.me
                </a>

                {/* What id.me shares disclosure */}
                <div className="rounded-2xl border border-border bg-surface p-4 text-xs text-muted">
                  <div className="font-semibold text-foreground">What id.me shares with us</div>
                  <div className="mt-2">
                    We receive verification of student status and a stable identifier from id.me. We do not receive your password. We store only what's necessary to enforce eligibility.
                  </div>
                </div>

                <p className="text-xs text-muted">
                  By continuing, you agree to Terms and acknowledge this product does not provide legal advice.
                </p>
              </div>
            </div>

            <div id="clinic" className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
              <h3 className="text-xl font-semibold tracking-tight">Clinic / Director onboarding</h3>
              <p className="mt-2 text-muted">
                Set up supervision workflows, cohort approvals, and program policy defaults. You control who gets access
                and when.
              </p>

              <div className="mt-6 space-y-4">
                <Field label="Clinic / program name" placeholder="Community Legal Clinic" />
                <Field label="School / institution" placeholder="University of …" />
                <Field label="Director / supervisor email" placeholder="director@lawschool.edu" />

                <a
                  href="/contact"
                  className="block w-full rounded-2xl border border-border bg-surface px-5 py-3 text-center text-base font-semibold hover:bg-surface-panel/60 transition"
                >
                  Request clinic setup
                </a>

                <div className="rounded-2xl border border-border bg-surface p-4 text-sm text-muted">
                  <div className="font-semibold text-foreground">Recommended defaults</div>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Supervisor approval required before any client-facing export</li>
                    <li>Time-boxed student access tied to id.me re-verification</li>
                    <li>Audit-friendly activity history for clinic review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supervision */}
        <section id="supervision" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Supervision that doesn't fight you</h2>
            <p className="mt-2 text-muted max-w-3xl">
              Your program's credibility depends on oversight. ThreadLock is structured to make supervision obvious,
              enforceable, and audit-friendly—without turning clinics into ticket queues.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <MiniCard title="Review queues" desc="Supervisor-focused queues: drafts awaiting approval, revisions requested, approved outputs." />
              <MiniCard title="Attribution" desc="Clear authorship trail: who drafted, who edited, who approved, when." />
              <MiniCard title="Policy controls" desc="Set program rules: export permissions, sharing controls, retention defaults." />
            </div>
          </div>
        </section>

        {/* Security & governance (careful language) */}
        <section id="security" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Security & governance</h2>
              <p className="mt-2 text-muted">
                We avoid sloppy claims. Here's the real promise: strong defaults, least-privilege access, and clear
                boundaries around what the system does and does not do.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" />
                  Role-based access controls for clinic vs student responsibilities
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" />
                  Audit-friendly activity history for review and accountability
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" />
                  Data controls: export, retention, and access revocation aligned to clinic policy
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" />
                  "No legal advice" posture reinforced in UX and program configuration
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-border bg-surface p-4 text-xs text-muted">
                If you need formal attestations (SOC 2 reports, HIPAA BAAs, etc.), that's a separate commercial track
                with scoped review. Don't market what you can't prove.
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
              <h3 className="text-xl font-semibold tracking-tight">Integrations (optional)</h3>
              <p className="mt-2 text-muted">
                Keep this conservative until each integration is real and contractually covered.
              </p>

              <div className="mt-6 grid gap-3">
                <IntegrationRow name="id.me" status="Planned / Required" note="Enrollment verification gate for free student access." />
                <IntegrationRow name="Paladin" status="Optional" note="Volunteer matching / referral intake (only if implemented)." />
                <IntegrationRow name="Clio" status="Optional" note="Case metadata sync (only if implemented)." />
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-surface p-4 text-sm text-muted">
                Strong opinion: don't list "LexisNexis" unless you have a signed agreement and a working integration.
                Big logos + no contract = big risk.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="rounded-3xl border border-border bg-surface-panel p-6 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-muted">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-border bg-brand-navy p-8 text-white md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Bring your clinic cohort onboard</h3>
                <p className="mt-2 text-white/80">
                  Students verify with id.me. Clinics approve cohorts. Supervisors review outputs. Simple.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="#verify"
                  className="rounded-2xl bg-brand-orange px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Verify with id.me
                </a>
                <a
                  href="#clinic"
                  className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15 transition"
                >
                  Clinic onboarding
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-muted md:flex-row">
            <div>© {new Date().getFullYear()} ThreadLock. All rights reserved.</div>
            <div className="flex gap-5">
              <a className="hover:text-foreground transition" href="/privacy">
                Privacy
              </a>
              <a className="hover:text-foreground transition" href="/terms">
                Terms
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ title, desc, badge }: { title: string; desc: string; badge: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface-panel p-6 shadow-sm">
      <div className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
        {badge}
      </div>
      <div className="mt-4 text-lg font-semibold tracking-tight">{title}</div>
      <div className="mt-2 text-sm text-muted leading-relaxed">{desc}</div>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-navy text-white font-semibold">{step}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-sm text-muted leading-relaxed">{desc}</div>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-muted leading-relaxed">{desc}</div>
    </div>
  );
}

function IntegrationRow({ name, status, note }: { name: string; status: string; note: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-surface p-4">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="mt-1 text-sm text-muted">{note}</div>
      </div>
      <div className="shrink-0 rounded-full border border-border bg-surface-panel px-3 py-1 text-xs font-semibold text-muted">
        {status}
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">{label}</div>
      <input
        className={cn(
          "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm",
          "placeholder:text-muted/70",
          "focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange/40"
        )}
        placeholder={placeholder}
      />
    </label>
  );
}
