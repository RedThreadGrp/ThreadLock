import { useEffect, useState } from "react";

type Consent = "unset" | "accepted_all" | "rejected_non_essential";

const STORAGE_KEY = "tl_cookie_consent_v1";

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>("unset");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Consent | null;
    if (saved === "accepted_all" || saved === "rejected_non_essential") setConsent(saved);
  }, []);

  if (consent !== "unset") return null;

  const acceptAll = () => {
    localStorage.setItem(STORAGE_KEY, "accepted_all");
    setConsent("accepted_all");
    (window as any).__tlConsent = { nonEssential: true };
  };

  const rejectNonEssential = () => {
    localStorage.setItem(STORAGE_KEY, "rejected_non_essential");
    setConsent("rejected_non_essential");
    (window as any).__tlConsent = { nonEssential: false };
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
    >
      <div className="max-w-xl w-full rounded-2xl shadow-xl border bg-white/95 backdrop-blur p-4 md:p-5
                      border-slate-200 text-slate-800">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <p className="text-sm leading-5 grow">
            We use essential cookies to make this site work, and optional cookies to improve it.
            You can accept all or reject non-essential. See our{" "}
            <a href="/privacy" className="underline decoration-1 hover:opacity-80"
               target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={rejectNonEssential}
              className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition-colors"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-xl text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#fb7a1e" }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
