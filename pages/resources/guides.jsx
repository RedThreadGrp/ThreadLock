// Redirect page for /resources/guides to featured guides section
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function GuidesRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to resources page guides section
    router.replace("/resources#featured-guides");
  }, [router]);

  return (
    <>
      <Head>
        <title>Court-Ready Guides | ThreadLock™</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Redirecting to Court-Ready Guides...</p>
      </div>
    </>
  );
}
