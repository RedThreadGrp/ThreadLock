"use client";

import { useEffect, useMemo, useState } from "react";

const LS_KEY = "tl_cookie_consent_v1"; // legacy localStorage for compatibility
type Consent = "accept" | "reject" | null;

function setConsentCookie(value: Exclude<Consent, null>) {
  // 180 days
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `tl_cc=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export default function CookieBanner({ initialConsent }: { initialConsent: Consent }) {
  // Initialize from server cookie first to avoid flicker/hydration mismatch
  const [consent, setConsent] = useState<Consent>(initialConsent);
  const open = useMemo(() => consent === null, [consent]);

  // One-time sync from localStorage *only* if no cookie was set by server
  useEffect(() => {
    if (consent !== null) return;
    try {
      const v = localStorage.getItem(LS_KEY);
      if (v === "accept" || v === "reject") {
        setConsent(v);
      }
    } catch { /* ignore */ }
  }, [consent]);

  // Handlers
  function accept() {
    setConsent("accept");
    try { localStorage.setItem(LS_KEY, "accept"); } catch {}
    setConsentCookie("accept");
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: "accept" }));
  }

  function reject() {
    setConsent("reject");
    try { localStorage.setItem(LS_KEY, "reject"); } catch {}
    setConsentCookie("reject");
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: "reject" }));
  }

  if (!open) return null;

  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-[70]" 
      data-testid="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-4xl m-4 rounded-xl border shadow-lg bg-white p-4 text-sm">
        <p className="mb-3">
          We use essential cookies to make this site work, and optional cookies to improve it.
          See our <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
        <div className="flex gap-2">
          <button onClick={reject} className="rounded-lg px-3 py-2 border">Reject Non-Essential</button>
          <button onClick={accept} className="rounded-lg px-3 py-2 bg-[#1b3a4d] text-white">Accept All</button>
          <a href="/cookies" className="px-3 py-2 underline">Manage</a>
        </div>
      </div>
    </div>
  );
}
