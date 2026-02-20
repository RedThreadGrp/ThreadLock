import type { ResourcePage } from "./types";

export const citationAuthentication: ResourcePage = {
  slug: "citation-authentication",
  contentVersion: 2,

  seo: {
    title: "Citation Authentication: Verifying Legal Authority | Best Practice Guide",
    description:
      "How to verify legal citations before filing court documents. Step-by-step guide for checking case law authenticity, confirming legal standards, and avoiding AI-generated hallucinations.",
  },

  hero: {
    h1: "Citation Authentication: Verifying Legal Authority",
    subhead:
      "Best practices for verifying citations before filing—whether researched manually or with AI assistance.",
  },

  blocks: {
    shortAnswer:
      "Before filing any document citing legal authority, verify every citation against an authoritative source. Use Google Scholar, official court websites, or legal research databases to confirm the case exists, the citation is accurate, and the holding supports your argument. When using AI tools for research, always manually verify all suggested citations—AI tools frequently generate plausible but fabricated case references.",

    sections: [
      {
        id: "why-verification-matters",
        heading: "Why Citation Verification Matters",
        body: [
          {
            type: "p",
            text: "**Citing non-existent cases can result in sanctions, attorney discipline, and loss of credibility.** Courts rely on parties to provide accurate legal authority. When fabricated citations enter the record, they undermine judicial trust and waste court resources.",
          },
          {
            type: "p",
            text: "The risk has escalated with AI tools. Generative AI frequently produces plausible-sounding case names, docket numbers, and legal holdings that don't exist. Without verification, these fabrications can reach court filings.",
          },
        ],
      },
      {
        id: "verification-workflow",
        heading: "Step-by-Step Verification Workflow",
        body: [
          {
            type: "ol",
            items: [
              "**Record the Full Citation** - Note case name, volume number, reporter abbreviation, starting page, court, and year. Example: *Smith v. Jones*, 123 F.3d 456 (9th Cir. 2020).",
              "**Search Authoritative Database** - Use Google Scholar (free), official court websites, or legal research platforms (Westlaw, LexisNexis, Casetext, Fastcase).",
              "**Confirm Case Exists** - Verify the exact case name, citation, and court match your source. Check that the year and court align with the citation format.",
              "**Read the Actual Opinion** - Don't rely on AI summaries. Read the relevant section to confirm it supports your argument.",
              "**Check Subsequent Treatment** - Verify the case hasn't been reversed, overruled, or distinguished. Use Shepard's (LexisNexis), KeyCite (Westlaw), or Google Scholar's 'How Cited' feature.",
              "**Document Verification** - Note the date you verified the citation and the source used. Keep records in case verification is challenged.",
            ],
          },
        ],
      },
      {
        id: "free-verification-tools",
        heading: "Free Citation Verification Tools",
        body: [
          {
            type: "ul",
            items: [
              "**Google Scholar Case Law** (https://scholar.google.com) - Free access to federal and state cases with citation tracking",
              "**CourtListener** (https://www.courtlistener.com) - Free legal research database with comprehensive case coverage",
              "**Official Court Websites** - Most appellate courts publish opinions on their websites",
              "**Cornell Legal Information Institute** (https://www.law.cornell.edu) - Free access to U.S. Code, CFR, and Supreme Court opinions",
              "**Justia** (https://www.justia.com) - Free case law database with citation verification",
            ],
          },
        ],
      },
      {
        id: "ai-specific-guidance",
        heading: "AI-Specific Verification Guidance",
        body: [
          {
            type: "callout",
            kind: "warning",
            title: "Never Trust AI Citations Without Verification",
            text: "AI tools like ChatGPT, Claude, and Bard frequently generate fabricated legal citations. They create plausible case names, realistic docket numbers, and convincing holdings—none of which exist. ALWAYS verify every citation provided by AI tools before including it in court filings.",
          },
          {
            type: "p",
            text: "**Warning Signs of AI Hallucination:**",
          },
          {
            type: "ul",
            items: [
              "Citation follows perfect format but case doesn't appear in Google Scholar",
              "Holding is exactly what you needed but case was decided in wrong jurisdiction",
              "Multiple cases from different circuits all support your exact argument",
              "Case dates are suspiciously recent or perfectly aligned with your timeline",
              "AI provides the citation immediately without indicating uncertainty",
            ],
          },
          {
            type: "p",
            text: "**Safe AI Usage Pattern:**",
          },
          {
            type: "ol",
            items: [
              "Use AI to generate initial legal research questions and search terms",
              "Ask AI for general legal principles and frameworks",
              "Treat AI-provided citations as leads to verify, not authoritative sources",
              "Always verify citations using legal research databases",
              "Disclose AI use in your court filings per local rules",
            ],
          },
        ],
      },
      {
        id: "verification-for-pro-se",
        heading: "Verification Resources for Self-Represented Litigants",
        body: [
          {
            type: "p",
            text: "If you're representing yourself and don't have access to Westlaw or LexisNexis:",
          },
          {
            type: "ul",
            items: [
              "**Use your county law library** - Free access to legal research databases and trained librarians who can help with citation verification (not legal advice)",
              "**Google Scholar is your friend** - It's free, comprehensive, and shows citation history",
              "**Ask the court self-help center** - Many provide access to legal research tools and can help you verify citations",
              "**Legal Aid organizations** - Some offer limited-scope representation including citation verification services",
              "**Law school clinics** - May provide free citation verification assistance",
            ],
          },
        ],
      },
      {
        id: "documentation-best-practices",
        heading: "Documentation Best Practices",
        body: [
          {
            type: "p",
            text: "**Create a Citation Verification Log:** Maintain a simple spreadsheet tracking:",
          },
          {
            type: "ul",
            items: [
              "Full citation as it appears in your document",
              "Verification source (Google Scholar, Westlaw, court website)",
              "Date you verified",
              "Confirmation that holding supports your argument",
              "Notes on subsequent treatment (overruled, distinguished, etc.)",
            ],
          },
          {
            type: "p",
            text: "This log serves as evidence of good faith if citation accuracy is challenged.",
          },
        ],
      },
      {
        id: "related-resources-section",
        heading: "Related Resources",
        body: [
          {
            type: "ul",
            items: [
              "[The Verification Crisis in Family Court](/resources/verification-crisis-family-court) - Research on citation integrity challenges",
              "[Model Local Rule: AI Verification](/resources/model-local-rule-ai-verification) - Policy framework for AI disclosure",
              "[Filing Basics](/resources/filing-basics) - General guidance on court filing procedures",
            ],
          },
        ],
      },
    ],

    faqs: [
      {
        id: "cite-nonexistent-case",
        q: "What happens if I cite a case that turns out not to exist?",
        a:
          "If the error was unintentional and made in good faith, you can file an amended brief correcting the citation. However, repeated errors or failure to verify citations when using AI tools can result in sanctions. Courts take citation accuracy seriously because fabricated citations undermine the integrity of legal proceedings.",
      },
      {
        id: "verify-every-ai-citation",
        q: "Do I need to verify every citation if I'm using AI?",
        a:
          "Yes. When using AI tools for legal research, you must verify every single citation before including it in a court filing. AI tools frequently generate fabricated citations that sound plausible but don't exist. Some courts now require certification that all citations have been verified when AI tools were used.",
      },
      {
        id: "ai-verify-citations",
        q: "Can I use AI to verify citations?",
        a:
          "No. You must use authoritative legal research databases or official court sources to verify citations. AI tools cannot reliably verify their own outputs and may confirm fabricated citations with additional fabricated information. Use Google Scholar, Westlaw, LexisNexis, CourtListener, or official court websites for verification.",
      },
      {
        id: "authoritative-database",
        q: "How do I know if a legal research database is authoritative?",
        a:
          "Authoritative sources include: official court websites, Google Scholar Case Law, Westlaw, LexisNexis, CourtListener, Casetext, Fastcase, Justia, and official government publications (GPO for federal materials). Wikipedia, legal blogs, and AI tools are NOT authoritative sources for citation verification.",
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-20",
    sources: [
      {
        title: "Model Rules of Professional Conduct - Rule 3.3",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-20",
        note: "Candor toward the tribunal; prohibition on false statements",
      },
      {
        title: "Federal Rules of Civil Procedure - Rule 11",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-20",
        note: "Signing pleadings, motions, and representations to the court",
      },
      {
        title: "Legal Research and Citation",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/",
        lastAccessed: "2026-02-20",
        note: "Citation formats and legal research best practices",
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 90,
    accuracyNotes:
      "Citation verification standards apply across jurisdictions, though specific sanctions for citation errors vary by court. AI disclosure requirements are emerging as of February 2026 and not yet uniform. Check your local court rules for any AI disclosure or verification requirements.",
  },
};
