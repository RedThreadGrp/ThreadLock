import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LeadMagnetForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [firebaseReady, setFirebaseReady] = useState(false);
  const router = useRouter();

  // Lazy-load Firebase on the client only
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const cfg = {
          apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
          authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        };
        // Only init if keys are truly present at runtime
        if (Object.values(cfg).some(v => !v)) {
          console.warn("Firebase env incomplete on client - form will degrade gracefully");
          return;
        }
        // Dynamically import Firebase to avoid SSR/build issues
        await import("../src/lib/firebase");
        if (mounted) setFirebaseReady(true);
      } catch (e) {
        console.error("Firebase init failed:", e);
        // Silently degrade - form can still be shown
      }
    })();
    return () => { mounted = false; };
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setErr(null);
    if (!email || !email.includes("@")) {
      setErr("Enter a valid email.");
      return;
    }
    
    if (!firebaseReady) {
      setErr("Unable to process submission. Please contact support.");
      return;
    }
    
    setLoading(true);
    try {
      // Dynamic import to get the function
      const { subscribeLeadFn } = await import("../src/lib/firebase");
      const res = await subscribeLeadFn({ email, name, origin: "threadlock.ai/resources" });
      if (res?.data?.ok) {
        // Pass download URL via query to the thank-you page
        const dl = "/resources/threadlock-toolkit.pdf";
        router.push(`/resources/thanks?email=${encodeURIComponent(email)}&dl=${encodeURIComponent(dl)}`);
      } else {
        throw new Error("Unexpected response");
      }
    } catch (e) {
      console.error(e);
      setErr("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-white/70 rounded-2xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-2">Download Our Free Toolkit</h2>
      <p className="text-sm text-gray-600 mb-6">No credit card. We'll email the download link.</p>
      <div className="grid gap-3">
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          autoComplete="name"
        />
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          autoComplete="email"
          required
        />
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl px-4 py-3 font-semibold bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? "Sending…" : "Download Now"}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        By submitting, you agree to receive the download and occasional updates. Unsubscribe anytime.
      </p>
    </form>
  );
}
