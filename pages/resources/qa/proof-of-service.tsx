import Head from "next/head";
import Link from "next/link";
import SiteHeader from "@/src/components/SiteHeader";
import { ResourceQAArticle } from "@/src/components/resources/ResourceQAArticle";
import { proofOfService } from "@/src/content/resources/proof-of-service";

export default function ProofOfServicePage() {
  return (
    <>
      <Head>
        <title>{proofOfService.seo.title}</title>
        <meta name="description" content={proofOfService.seo.description} />
        <link rel="canonical" href="https://threadlock.ai/resources/qa/proof-of-service" />
      </Head>

      <SiteHeader />

      <div className="min-h-screen bg-surface-dark text-foreground-dark resources-dark-background">
        <div className="mx-auto max-w-5xl px-4 pt-8">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange/80 transition mb-4"
          >
            ← Back to Resources
          </Link>
        </div>

        <ResourceQAArticle content={proofOfService} />
      </div>
    </>
  );
}
