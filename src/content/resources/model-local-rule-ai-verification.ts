import type { ResourcePage } from "./types";

export const modelLocalRuleAIVerification: ResourcePage = {
  slug: "model-local-rule-ai-verification",
  contentVersion: 2,

  seo: {
    title: "Model Local Rule: Verification of Generative AI & Digital Evidence | Policy Proposal",
    description:
      "Comprehensive policy framework for mandatory AI disclosure, human-in-the-loop certification, Evidence Passport standards, and sanctions for fabricated submissions. Includes 4-phase implementation roadmap for family courts.",
  },

  hero: {
    h1: "Model Local Rule: Verification of Generative AI & Digital Evidence",
    subhead:
      "A policy framework for citation integrity and digital provenance in family court proceedings.",
  },

  blocks: {
    shortAnswer:
      "This Model Local Rule establishes standards for AI disclosure, citation verification, and digital evidence authentication in family court. It requires mandatory disclosure of AI use in legal drafting, human verification of all citations and factual claims, Evidence Passport documentation for digital submissions, and graduated sanctions for fabrication. The rule is designed for phased implementation with judicial discretion for good-cause exemptions.",

    sections: [
      {
        id: "executive-abstract",
        heading: "Executive Abstract",
        body: [
          {
            type: "p",
            text: "**Purpose:** This Model Local Rule addresses the verification crisis in family court by establishing standards for AI transparency and digital evidence provenance. It is designed for adoption by state and local courts as a local rule, general order, or standing order.",
          },
          {
            type: "p",
            text: "**Core Components:**",
          },
          {
            type: "ol",
            items: [
              "**Mandatory AI Disclosure** - All parties filing documents must disclose AI use in research, citation generation, or drafting. Disclosure is made through a simple certification form attached to filed documents.",
              "**Human-in-the-Loop Certification** - Parties certify under penalty of perjury that all citations have been verified against authoritative legal databases and all factual claims have been independently confirmed. AI assistance is permitted; blind reliance is not.",
              "**Evidence Passport Standards** - Digital evidence submissions must include provenance documentation: capture timestamps, metadata preservation, chain of custody records, and disclosure of any editing or processing. Courts may require Evidence Passport documentation for contested exhibits.",
              "**Sanctions Framework** - Graduated sanctions for violations: warning and remedial education for first offense with good-faith error; monetary sanctions and referral to bar counsel for knowing fabrication; case sanctions (striking documents, adverse inference) for egregious or repeat violations. Safe harbor protects disclosed, verified AI use.",
            ],
          },
          {
            type: "p",
            text: "**Implementation Roadmap:** The rule contemplates four-phase adoption:",
          },
          {
            type: "ul",
            items: [
              "**Phase 1 (Months 1-3): Voluntary Disclosure Period** - Courts encourage but do not mandate AI disclosure. Educational materials distributed to bar and self-help centers. No sanctions for non-disclosure during this phase.",
              "**Phase 2 (Months 4-6): Mandatory Disclosure, Soft Enforcement** - AI disclosure becomes required. Courts issue warnings for non-compliance but allow cure without sanction. Focus on education and building compliance habits.",
              "**Phase 3 (Months 7-12): Full Enforcement with Good Faith Safe Harbor** - Sanctions apply for fabrication and knowing misrepresentation. Good-faith errors with prompt correction receive warnings only. Evidence Passport standards applied to contested digital evidence.",
              "**Phase 4 (Year 2+): System Integration** - Verification tools integrated into court e-filing portals. Automated citation checking where feasible. Evidence Passport templates available through court self-help resources.",
            ],
          },
          {
            type: "p",
            text: "**Intended Audience:** Family court judges, court administrators, state judicial councils, bar associations developing AI ethics guidance, and self-represented litigant advocates.",
          },
          {
            type: "p",
            text: "**Implementation Authority:** This rule can be adopted as a local rule under most state rules of civil procedure, as a general administrative order, or as a standing order issued by presiding judges. It does not require legislative action in most jurisdictions.",
          },
        ],
      },
      {
        id: "rule-text",
        heading: "Model Rule Text",
        body: [
          {
            type: "p",
            text: "**LOCAL RULE [X]: VERIFICATION OF GENERATIVE AI USE AND DIGITAL EVIDENCE**",
          },
          {
            type: "p",
            text: "**Section 1. Disclosure of Generative AI Use**",
          },
          {
            type: "p",
            text: "(a) Any party filing a document prepared with the assistance of generative artificial intelligence tools shall disclose such use by including the following certification:",
          },
          {
            type: "callout",
            kind: "note",
            text: "\"The undersigned certifies that [identify document(s)] [was/were] prepared with the assistance of generative artificial intelligence tools, specifically [identify tool(s) used]. All legal citations have been verified against authoritative sources. All factual claims have been independently confirmed. This certification is made under penalty of perjury.\"",
          },
          {
            type: "p",
            text: "(b) Disclosure is required regardless of the extent of AI use. Minor grammatical or formatting assistance, citation lookups, and substantive legal research all trigger the disclosure requirement.",
          },
          {
            type: "p",
            text: "(c) Self-represented litigants shall be provided with a simple disclosure form available at the Clerk of Court office and on the court's website.",
          },
          {
            type: "p",
            text: "**Section 2. Verification Requirements**",
          },
          {
            type: "p",
            text: "(a) All legal citations in filed documents must be verified by the submitting party against authoritative legal sources (e.g., official case reporters, Westlaw, LexisNexis, Google Scholar, or official court websites).",
          },
          {
            type: "p",
            text: "(b) Verification includes confirming: (1) the cited case exists; (2) the citation accurately reflects the holding; (3) the case has not been reversed or superseded; and (4) the legal standard cited is applicable in the relevant jurisdiction.",
          },
          {
            type: "p",
            text: "(c) Parties certify compliance by signing the disclosure certification or, if AI was not used, by signing the standard certification of compliance with court rules.",
          },
          {
            type: "p",
            text: "**Section 3. Evidence Passport for Digital Evidence**",
          },
          {
            type: "p",
            text: "(a) When digital evidence is contested, the court may require the submitting party to provide an Evidence Passport documenting:",
          },
          {
            type: "ol",
            items: [
              "Capture method and timestamp",
              "Device and software used to create or capture the evidence",
              "Chain of custody from capture to court submission",
              "Any editing, processing, or AI involvement in creation",
              "Basis for authentication (personal knowledge, metadata, third-party verification)",
            ],
          },
          {
            type: "p",
            text: "(b) Evidence Passport documentation may be submitted in the form provided by the court or as a sworn declaration meeting the requirements of this section.",
          },
          {
            type: "p",
            text: "(c) Failure to provide required Evidence Passport documentation when ordered by the court may result in exclusion of the evidence.",
          },
          {
            type: "p",
            text: "**Section 4. Sanctions**",
          },
          {
            type: "p",
            text: "(a) Violations of this rule may result in:",
          },
          {
            type: "ol",
            items: [
              "Written warning and requirement to complete AI verification training (first offense, good faith error)",
              "Monetary sanctions not to exceed $1,000 for knowing violations",
              "Striking of offending documents from the record",
              "Adverse inference instruction to finder of fact",
              "Referral to bar counsel for professional discipline (attorneys only)",
              "In egregious cases, case sanctions including dismissal or default judgment",
            ],
          },
          {
            type: "p",
            text: "(b) **Safe Harbor:** Parties who disclose AI use and certify verification in good faith are protected from sanctions if unintentional errors are later discovered, provided prompt correction is made upon notice.",
          },
          {
            type: "p",
            text: "(c) The court shall consider the party's resources, sophistication, and access to legal assistance when determining appropriate sanctions.",
          },
        ],
      },
      {
        id: "implementation-guidance",
        heading: "Implementation Guidance for Courts",
        body: [
          {
            type: "p",
            text: "**Starting Point:** Courts should begin with the voluntary disclosure period (Phase 1) to build awareness and provide educational resources before enforcing compliance requirements.",
          },
          {
            type: "p",
            text: "**Educational Materials Needed:**",
          },
          {
            type: "ul",
            items: [
              "Sample AI disclosure certification forms",
              "Plain-language guidance on what counts as 'AI use'",
              "List of acceptable citation verification sources",
              "Evidence Passport template and instructions",
              "FAQ sheet addressing common questions from pro se litigants",
            ],
          },
          {
            type: "p",
            text: "**Self-Help Center Integration:** Court self-help centers should provide:",
          },
          {
            type: "ul",
            items: [
              "Access to legal research databases for citation verification",
              "Training on using AI tools responsibly",
              "Evidence Passport preparation assistance",
              "Sample declarations and certifications",
            ],
          },
          {
            type: "p",
            text: "**Bar Association Coordination:** Work with local bar associations to:",
          },
          {
            type: "ul",
            items: [
              "Develop CLE programs on AI verification compliance",
              "Create pro bono citation verification clinics",
              "Establish attorney mentor programs for pro se litigants",
            ],
          },
        ],
      },
      {
        id: "download-section",
        heading: "Policy Downloads and Resources",
        body: [
          {
            type: "callout",
            kind: "note",
            title: "Download Policy Documents",
            text: "Download the complete policy proposal (PDF) - Full text with commentary, implementation roadmap, and sample court orders. Request Judicial Discussion Copy - Formatted version for judicial conference circulation and bench-bar committee review.",
          },
          {
            type: "p",
            text: "**Interested in Piloting Verification Workflows?**",
          },
          {
            type: "p",
            text: "ThreadLock works with courts, legal aid organizations, and bar associations to pilot structured evidence verification infrastructure. Contact us to discuss implementation in your jurisdiction.",
          },
          {
            type: "p",
            text: "**Contact:** policy@threadlock.ai",
          },
        ],
      },
      {
        id: "citation-and-attribution",
        heading: "Citation and Attribution",
        body: [
          {
            type: "p",
            text: "**Suggested Citation:** Moore, Hannah. \"Model Local Rule: Verification of Generative AI and Digital Evidence.\" ThreadLock Policy Research (2026).",
          },
          {
            type: "p",
            text: "**License:** This Model Local Rule is released under Creative Commons CC BY 4.0. Courts are free to adopt, modify, and distribute this rule without permission. Attribution appreciated but not required.",
          },
        ],
      },
      {
        id: "related-research",
        heading: "Related Research and Resources",
        body: [
          {
            type: "ul",
            items: [
              "[The Verification Crisis in Family Court](/resources/verification-crisis-family-court) - Analysis of AI and digital evidence challenges",
              "[Evidence Authentication Guide](/resources/guides/evidence-authentication) - Practical authentication standards",
              "[Exhibits Guide](/resources/exhibits-guide) - Evidence organization and labeling",
              "[Citation Authentication Best Practice](/resources/citation-authentication) - Verification workflows for legal citations",
            ],
          },
        ],
      },
      {
        id: "speaking-engagement",
        heading: "Speaking & Policy Engagement",
        body: [
          {
            type: "p",
            text: "Hannah Moore speaks on AI verification, digital evidence provenance, and judicial infrastructure modernization.",
          },
          {
            type: "p",
            text: "For speaking inquiries, panel participation, or policy consultation: **contact@threadlock.ai**",
          },
        ],
      },
    ],

    faqs: [
      {
        question: "Can courts adopt this rule without legislative approval?",
        answer:
          "Yes, in most jurisdictions. Courts have inherent authority to adopt local rules governing practice and procedure. This Model Local Rule addresses procedural verification requirements, not substantive law. Check your state's rules of civil procedure for the specific process to adopt local rules.",
      },
      {
        question: "Does this rule prohibit AI use?",
        answer:
          "No. The rule requires disclosure and verification, not prohibition. Parties may use AI tools for research, drafting, and analysis provided they disclose such use and verify all citations and factual claims. The goal is transparency and accountability, not technological restriction.",
      },
      {
        question: "How does this affect self-represented litigants?",
        answer:
          "The rule applies equally to all parties but includes protections for pro se litigants: simple disclosure forms, access to verification resources through self-help centers, educational materials in plain language, and graduated sanctions that consider party sophistication. The safe harbor protects good-faith efforts even if unintentional errors occur.",
      },
      {
        question: "What counts as 'AI use' requiring disclosure?",
        answer:
          "Disclosure is required for any use of generative AI tools (ChatGPT, Claude, Bard, etc.) in legal research, citation generation, or document drafting. This includes asking AI to find cases, summarize legal standards, draft motion text, or generate arguments. It does not include spell-checkers, grammar tools, or form auto-fill features that don't generate substantive legal content.",
      },
      {
        question: "What is the Evidence Passport requirement?",
        answer:
          "The Evidence Passport is metadata documentation for digital evidence. It's only required when evidence is contested or when the court specifically orders it. It documents how evidence was captured, preserved, and submitted to court. Courts can provide a simple template form rather than requiring parties to create documentation from scratch.",
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-20",
    sources: [
      {
        title: "Federal Rules of Civil Procedure",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-20",
        note: "Foundation for local rule authority and procedural standards",
      },
      {
        title: "Federal Rules of Evidence - Rule 901",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-20",
        note: "Authentication standards for evidence",
      },
      {
        title: "Model Rules of Professional Conduct",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-20",
        note: "Professional responsibility standards for attorneys",
      },
      {
        title: "Judicial Technology and AI Guidelines",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        lastAccessed: "2026-02-20",
        note: "Emerging standards for AI use in courts",
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 90,
    accuracyNotes:
      "This is a model rule intended for adaptation by individual jurisdictions. Implementation authority and procedural requirements vary by state. Courts should consult with their rules committees and chief judges before adoption. AI disclosure standards are rapidly evolving as of February 2026.",
  },
};
