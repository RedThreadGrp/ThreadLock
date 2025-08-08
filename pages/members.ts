import { useState } from "react";

export default function Members() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const getLink = async () => {
    setErr(""); setLoading(true);
    try {
      const r = await fetch("/api/toolkit/url");
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Request failed");
      window.location.href = j.url;     // triggers the download
    } catch (e:any) {
      setErr(e.message);
    } finally { setLoading(false); }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0D223F] text-white p-6">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold">Founding Member Portal</h1>
        <p>Download the latest Court-Ready Toolkit. Links expire in 60 minutes.</p>
        <button
          onClick={getLink}
          disabled={loading}
          className="w-full py-3 font-semibold bg-[#F58220] text-black rounded"
        >
          {loading ? "Generating link…" : "Download Toolkit"}
        </button>
        {err && <p className="text-red-300 text-sm">{err}</p>}
      </div>
    </main>
  );
}
