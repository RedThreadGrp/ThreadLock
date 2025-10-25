import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LeadMagnetForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [firebaseReady, setFirebaseReady] = useState(false);
  const router = useRouter();

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
        // Only init if keys are present at runtime
        if (Object.values(cfg).some(v => !v)) {
          throw new Error("Firebase configuration incomplete");
        }
        // Lazy-load Firebase on the client
        await import("../src/lib/firebase");
        if (mounted) setFirebaseReady(true);
      } catch (e) {
        console.error('Firebase initialization error:', e);
        // Fail gracefully - component still renders but form won't submit
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
    
    setLoading(true);
    
    try {
      // Always attempt Firebase submission to save lead
      let firebaseSuccess = false;
      if (firebaseReady) {
        try {
          const { subscribeLeadFn } = await import("../src/lib/firebase");
          await subscribeLeadFn({ email, name, origin: "threadlock.ai/resources" });
          firebaseSuccess = true;
          console.log("Lead saved successfully to Firebase");
        } catch (fbError) {
          console.error("Firebase submission failed:", fbError);
          // Continue to download even if Firebase fails
        }
      } else {
        console.warn("Firebase not ready, email not saved:", email);
      }
      
      // Always proceed to download page
      const dl = "/resources/ThreadlockToolkit.zip";
      router.push(`/resources/thanks?email=${encodeURIComponent(email)}&dl=${encodeURIComponent(dl)}`);
    } catch (e) {
      console.error(e);
      setErr("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-white/70 rounded-2xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-2">Download Our Free Toolkit</h2>
      <p className="text-sm text-gray-600 mb-6">No credit card. Instant download after you submit.</p>
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
