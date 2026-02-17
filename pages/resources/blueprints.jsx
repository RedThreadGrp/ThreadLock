// Redirect page for /resources/blueprints to kits
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function BlueprintsRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to resources page kits section (case blueprints)
    router.replace("/resources#starter-kits");
  }, [router]);

  return (
    <>
      <Head>
        <title>Case Blueprints | ThreadLock™</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Redirecting to Case Blueprints...</p>
      </div>
    </>
  );
}
