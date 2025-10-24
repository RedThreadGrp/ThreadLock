import { useEffect, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Thanks() {
  const router = useRouter();
  const { email = "", dl = "/resources/threadlock-toolkit.pdf" } = router.query;

  useEffect(() => {
    // Optionally fire analytics "lead_download_view"
  }, []);

  return (
    <>
      <Head>
        <title>Thank You | ThreadLock™</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            <Link href="/">
              <a className="inline-flex items-baseline font-bold text-2xl tracking-tight select-none">
                <span className="text-slate-800">Thread</span>
                <span className="text-orange-600">Lock</span>
                <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
              </a>
            </Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-3">
            Thanks! Your toolkit is on its way to your inbox.
          </h1>
          <a href={dl} className="inline-block underline mb-6 text-orange-600 hover:text-orange-700">
            Or click here to download now
          </a>

          <div className="bg-white/70 rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">
              Want to put that checklist on autopilot?
            </h2>
            <p className="mb-4">
              That toolkit is a great start, but managing it all is the hard part. ThreadLock.ai was built to do that
              work for you—securely, simply, and ready for court.
            </p>
            <a
              href={`/trial?email=${encodeURIComponent(email)}`}
              className="inline-block rounded-xl px-5 py-3 font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-all"
            >
              Start My 10-Day Free Trial
            </a>
          </div>
        </main>

        <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center mt-12">
          <p>© {new Date().getFullYear()} ThreadLock.ai. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
