// Redirect page for /resources/wiki to legal-glossary
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function WikiRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to resources page - the legal glossary is integrated there
    router.replace("/resources#glossary");
  }, [router]);

  return (
    <>
      <Head>
        <title>Evidence Wiki | ThreadLock™</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Redirecting to Evidence Wiki...</p>
      </div>
    </>
  );
}
