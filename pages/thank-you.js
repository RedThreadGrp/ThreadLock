// /pages/thank-you.js
import { useEffect, useState } from "react";

/* Simple text wordmark — no assets required */
function BrandWordmark({ size = "lg", className = "" }) {
  const sizes = { sm: "text-xl", md: "text-2xl", lg: "text-3xl", xl: "text-5xl" };
  return (
    <span className={`inline-flex items-baseline font-extrabold tracking-tight select-none ${sizes[size]} ${className}`}>
      <span className="text-white">Thread</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Lock</span>
      <span className="ml-0.5 align-text-top text-[0.55em] font-black text-white/80">™</span>
    </span>
  );
}

export default function ThankYou() {
  const [state, setState] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    const url = new URL(window.location.href);
    const sessionId = url.searchParams.get("session_id");
    if (!sessionId) {
      setState({ loading: false, data: null, error: "Missing session_id" });
      return;
    }

    (async () => {
      try {
        const r = await fetch(`/api/checkout/status?session_id=${encodeURIComponent(sessionId)}`);
        const j = await r.json();
        if (!r.ok) throw new Error(j?.error || "Failed to load status");
        setState({ loading: false, data: j, error: null });
      } catch (e) {
        setState({ loading: false, data: null, error: e.message || "Error" });
      }
    })();
  }, []);

  const { loading, data, error } = state;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* Brand (no image files needed) */}
        <BrandWordmark size="lg" className="mx-auto mb-8" />

        {loading && (
          <>
            <h1 className="text-3xl font-bold mb-2">Processing…</h1>
            <p className="text-slate-300">We’re confirming your payment. This usually takes a few seconds.</p>
          </>
        )}

        {!loading && error && (
          <>
            <h1 className="text-3xl font-bold mb-2">We’re Checking…</h1>
            <p className="text-slate-300 mb-4">{error}</p>
            <a href="/" className="inline-block bg-orange-500 px-6 py-3 rounded-lg font-semibold">Back to Home</a>
          </>
        )}

        {!loading && !error && data && (
          <>
            {data.status === "complete" && (data.payment_status === "paid" || data.mode === "subscription") ? (
              <>
                <h1 className="text-3xl font-extrabold mb-2">You’re All Set</h1>
                <p className="text-slate-300 mb-6">
                  We’ve sent a confirmation to{" "}
                  <span className="font-semibold">{data.customer_email || "your email"}</span>.
                  {" "}If you purchased a download, the link is in that email.
                </p>

                {data.line_items?.length > 0 && (
                  <div className="bg-slate-800/50 rounded-xl p-4 text-left mb-6">
                    <h2 className="font-semibold mb-2">Items</h2>
                    <ul className="space-y-1 text-slate-300">
                      {data.line_items.map((li, i) => (
                        <li key={i}>• {li.product_name} {li.quantity > 1 ? `× ${li.quantity}` : ""}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <a href="/" className="inline-block bg-orange-500 px-6 py-3 rounded-lg font-semibold">
                  Back to Home
                </a>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2">Processing…</h1>
                <p className="text-slate-300 mb-6">
                  We’re waiting for payment confirmation. If this page doesn’t update, check your email or contact us.
                </p>
                <a href="/" className="inline-block bg-orange-500 px-6 py-3 rounded-lg font-semibold">Back to Home</a>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
