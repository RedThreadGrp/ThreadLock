import type { ResourceQAContent } from "./types";

export const evidenceAuthentication: ResourceQAContent = {
  slug: "evidence-authentication",

  seo: {
    title: "Evidence Authentication 101 | Make Photos, Texts, and Emails Admissible",
    description:
      "Learn how to authenticate photos, texts, emails, and documents for court without hiring an expert. Step-by-step foundation testimony framework.",
  },

  hero: {
    h1: "Evidence Authentication 101",
    subhead: "How to make your photos, texts, and emails admissible without hiring an expert.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Authentication is proving that evidence is what you claim it to be. Courts require authentication before admitting evidence. You typically need a witness with personal knowledge to testify about what the item is, how they know it, when it was created, and that it hasn't been altered.",
  },

  sections: [
    {
      id: "legal-requirements",
      heading: "Legal Requirements for Authentication",
      body: [
        {
          type: "p",
          text: "Federal Rule of Evidence 901 and similar state rules require that evidence be authenticated by testimony or other means showing it is genuine. The standard is 'sufficient to support a finding that the item is what the proponent claims.'",
        },
      ],
    },
    {
      id: "foundation-testimony",
      heading: "Foundation Testimony Framework",
      body: [
        {
          type: "p",
          text: "To authenticate evidence, you typically need a witness with personal knowledge to testify about:",
        },
        {
          type: "ul",
          items: [
            "What the item is",
            "How they know it",
            "When and where it was created or obtained",
            "That it has not been altered",
          ],
        },
      ],
    },
    {
      id: "text-messages",
      heading: "Authenticating Text Messages",
      body: [
        {
          type: "p",
          text: "To authenticate text messages:",
        },
        {
          type: "ol",
          items: [
            "Testify that you sent or received the messages",
            "Identify the phone numbers involved",
            "Explain how you obtained the screenshots or records",
            "Note any identifying information (profile pictures, previous conversations)",
            "Bring the actual device if possible",
          ],
        },
      ],
    },
    {
      id: "emails",
      heading: "Authenticating Emails",
      body: [
        {
          type: "p",
          text: "For email authentication:",
        },
        {
          type: "ul",
          items: [
            "Testify that you sent or received the email",
            "Identify the email addresses",
            "Explain context or prior correspondence that confirms sender",
            "Note any signatures or identifying content",
            "Provide headers if authenticity is challenged",
          ],
        },
      ],
    },
    {
      id: "photos-videos",
      heading: "Authenticating Photos and Videos",
      body: [
        {
          type: "p",
          text: "To authenticate photos or videos:",
        },
        {
          type: "ul",
          items: [
            "Testify that you took the photo/video or were present when it was taken",
            "Describe what the photo/video depicts",
            "State when and where it was taken",
            "Confirm it hasn't been edited or altered",
            "Provide metadata if available",
          ],
        },
      ],
    },
    {
      id: "documents",
      heading: "Authenticating Documents",
      body: [
        {
          type: "p",
          text: "For document authentication:",
        },
        {
          type: "ul",
          items: [
            "Identify distinctive characteristics (letterhead, signatures)",
            "Testimony from someone who prepared or received it",
            "Testimony about business records or regular practices",
            "Comparison with authenticated examples",
            "Public records may be self-authenticating with proper certification",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "cant-authenticate",
        q: "What happens if I can't authenticate evidence?",
        a: "If you cannot properly authenticate evidence, the judge may exclude it from consideration. This means the court won't look at it when making decisions. Plan ahead to ensure you have the necessary foundation testimony or documentation.",
      },
      {
        id: "other-party-objects",
        q: "What if the other party objects to my evidence?",
        a: "If the other party objects on authentication grounds, you'll need to provide foundation testimony establishing authenticity. The judge will decide if your authentication is sufficient. Be prepared to explain in detail how you obtained the evidence and why you know it's genuine.",
      },
      {
        id: "self-authenticating",
        q: "What is self-authenticating evidence?",
        a: "Some evidence doesn't require testimony to authenticate, including certified public records, official publications, newspapers, business records with proper certification, and acknowledged documents. Check Federal Rule of Evidence 902 or your state's equivalent for the complete list.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Federal Rules of Evidence - Rule 901",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Authenticating or identifying evidence"
      },
      {
        title: "Federal Rules of Evidence - Rule 902",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Evidence that is self-authenticating"
      },
      {
        title: "Federal Rules of Evidence",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/rules/fre",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Complete text with annotations on authentication"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Federal Rules of Evidence - Rules 901 and 902",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Authentication standards (Rules 901-902)"
      },
      {
        title: "Federal Rules of Evidence",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/rules/fre",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Complete text with annotations and case law"
      },
    ],
    jurisdictionScope: ["federal"],
    reviewIntervalDays: 180,
    accuracyNotes: "Authentication standards are based on Federal Rules of Evidence but state rules may vary. Digital evidence authentication is evolving with technology. Social media authentication presents unique challenges. Courts have discretion in determining whether authentication is sufficient. Self-authenticating categories differ slightly by jurisdiction. Consult your state's rules of evidence for specific requirements.",
  },
};
