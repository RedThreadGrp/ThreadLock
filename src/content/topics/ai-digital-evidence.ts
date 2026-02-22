import { ResourceQAContent } from "../resources/types";

export const aiDigitalEvidenceTopic: ResourceQAContent = {
  slug: "ai-digital-evidence",
  
  seo: {
    title: "AI & Digital Evidence | ThreadLock Resources",
    description: "Navigate citation verification, AI disclosure, and digital evidence authentication. Learn best practices for AI use and digital evidence in family court."
  },
  
  hero: {
    h1: "AI & Digital Evidence",
    subhead: "Navigate citation verification, AI disclosure, and digital evidence authentication."
  },
  
  shortAnswer: {
    text: "The intersection of artificial intelligence and digital evidence creates new challenges for family court proceedings. As generative AI tools become commonplace in legal research and document drafting, courts face a verification crisis: How do we ensure citations are real? How do we authenticate digital evidence? How do we maintain trust in the legal system when fabricated content is trivially easy to create?"
  },
  
  sections: [
    {
      id: "verification-crisis",
      heading: "The Verification Crisis",
      body: [
        {
          type: "callout",
          kind: "warning",
          title: "AI Hallucinations",
          text: "AI language models can generate convincing legal citations that don't exist. They hallucinate case names, fabricate holdings, and cite non-existent statutes."
        },
        {
          type: "p",
          text: "Meanwhile, deepfakes, manipulated screenshots, and edited digital evidence undermine the reliability of photos, videos, and electronic communications. Family court litigants—many self-represented—need practical guidance on verification standards, disclosure requirements, and authentication procedures."
        }
      ]
    },
    {
      id: "core-challenges",
      heading: "Core Challenges",
      body: [
        {
          type: "p",
          text: "**Citation Integrity**: Legal research tools powered by AI can produce fabricated cases with realistic case names, docket numbers, and legal reasoning. Without verification against authoritative legal databases, these fictional citations make their way into court filings. Pro se litigants using AI assistants may unknowingly submit false authority."
        },
        {
          type: "p",
          text: "**AI Disclosure Standards**: Courts are beginning to require disclosure when AI tools are used in legal drafting. The question isn't whether AI should be banned—it's how to require transparency and human verification of AI-generated content. Model rules and local orders establish disclosure frameworks."
        },
        {
          type: "p",
          text: "**Digital Evidence Authentication**: Screenshots can be edited. Metadata can be manipulated. Email headers can be forged. Establishing the authenticity of digital evidence requires understanding capture methods, preservation techniques, and chain-of-custody documentation. Evidence Passport frameworks provide structured authentication standards."
        }
      ]
    },
    {
      id: "policy-development",
      heading: "Policy Development",
      body: [
        {
          type: "callout",
          kind: "note",
          title: "Model Standards",
          text: "Family courts need practical, implementable policies that balance AI's utility with safeguards against fabrication. Model local rules establish standards for mandatory AI disclosure, human-in-the-loop certification of all citations and factual claims, Evidence Passport requirements for contested digital evidence, and graduated sanctions frameworks that distinguish good-faith errors from knowing fabrication."
        }
      ]
    },
    {
      id: "best-practices",
      heading: "Best Practices for Litigants",
      body: [
        {
          type: "ul",
          items: [
            "**Verify Every Citation**: If you use AI tools for legal research, check every case citation against Westlaw, LexisNexis, Google Scholar, or official court websites. Confirm the case exists, the citation is accurate, and the holding matches what you're claiming.",
            "**Disclose AI Use**: Even if your court doesn't require it yet, disclose when you've used AI tools in document preparation. Transparency protects you from sanctions if errors are discovered later.",
            "**Document Digital Evidence Provenance**: For digital evidence you plan to introduce, document how it was captured, when it was captured, what device was used, and whether any editing or processing occurred. Preserve original files with metadata intact.",
            "**Maintain Chain of Custody**: From capture to courtroom, document who had access to digital evidence and when. Use screenshots with timestamps, save original files immediately, and avoid editing or manipulation.",
            "**Seek Human Verification**: AI can assist with research and drafting, but a human must verify all factual claims and legal citations. Don't rely blindly on AI output—use it as a starting point for human-verified research."
          ]
        }
      ]
    }
  ],
  
  sources: {
    items: [
      {
        title: "Federal Rules of Evidence - Rule 901 (Authentication)",
        organization: "United States Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "ABA Formal Opinion 512: Generative AI Tools (July 2024)",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/professional_responsibility/publications/ethics_opinions/",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "AI Guidelines for Courts",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NCSC — Legal Practitioner's Guide to AI & Hallucinations (2026)",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Mata v. Avianca, Inc. (2023) — AI Hallucination Sanctions",
        organization: "CourtListener",
        url: "https://www.courtlistener.com/docket/16105991/mata-v-avianca-inc/",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "FRE Rule 901 — Authenticating or Identifying Evidence",
        organization: "Cornell Law School (LII)",
        url: "https://www.law.cornell.edu/rules/fre/rule_901",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NIST — Digital Evidence and Forensics",
        organization: "National Institute of Standards and Technology",
        url: "https://www.nist.gov/topics/digital-evidence-forensics",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NCSC — AI & Technology for Courts",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/court-management/technology",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      }
    ]
  },
  
  governance: {
    lastUpdated: "2026-02-21",
    sources: [
      {
        title: "Federal Rules of Evidence - Rule 901 (Authentication)",
        organization: "United States Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "ABA Formal Opinion 512: Generative AI Tools (July 2024)",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/professional_responsibility/publications/ethics_opinions/",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "AI Guidelines for Courts",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Mata v. Avianca, Inc. (2023) — AI Hallucination Sanctions",
        organization: "CourtListener",
        url: "https://www.courtlistener.com/docket/16105991/mata-v-avianca-inc/",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NIST — Digital Evidence and Forensics",
        organization: "National Institute of Standards and Technology",
        url: "https://www.nist.gov/topics/digital-evidence-forensics",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 90,
    accuracyNotes: "AI disclosure standards and digital evidence authentication requirements are rapidly evolving as of February 2026. Individual courts and jurisdictions are adopting varying approaches. This guidance reflects emerging best practices but may not match specific local rules in all jurisdictions."
  }
};
