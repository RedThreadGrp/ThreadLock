import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TrialStart() {
  const router = useRouter();
  const { email = "" } = router.query;

  const appBillingUrl = `https://app.threadlock.ai/billing?trial=10&email=${encodeURIComponent(email)}`;

  return (
    <>
      <Head>
        <title>Start Your Trial | ThreadLock™</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            <Link href="/" className="inline-flex items-baseline font-bold text-2xl tracking-tight select-none">
              <span className="text-slate-800">Thread</span>
              <span className="text-orange-600">Lock</span>
              <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
            </Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-2">Start Your 10-Day, No-Risk Free Trial</h1>
          <p className="text-gray-700 mb-6">
            You'll confirm your name, email, and payment method on the next screen. Cancel anytime during the trial.
          </p>
          <a
            className="inline-block rounded-xl px-5 py-3 font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-all"
            href={appBillingUrl}
          >
            Continue to Secure Checkout
          </a>

          <div className="mt-6 text-xs text-gray-500">
            Your use is subject to our Terms of Use and Privacy Policy. Charges begin only after your 10-day trial
            ends.
          </div>
        </main>
      </div>
    </>
  );
}
