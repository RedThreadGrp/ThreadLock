import { ResourcePage } from "../types";

export const filingFees: ResourcePage = {
  contentVersion: 2,
  slug: "filing-fees",
  title: "Court Filing Fees",
  excerpt: "Typical court filing fees for family law cases and what to expect.",
  tag: "Finance",
  topic: "Financial Declarations",
  intent: "Learn",
  readTime: "5 min read",
  status: "published",
  
  blocks: {
    slug: "filing-fees",
    seo: {
      title: "What Are Typical Court Filing Fees? | ThreadLock",
      description: "Court filing fees vary by state and case type, typically ranging from $200-$500 for family law cases. Fee waivers may be available.",
    },
    hero: {
      h1: "What are typical court filing fees?",
      subhead: null,
    },
    shortAnswer: {
      label: "Short answer",
      text: "Court filing fees vary by state and case type but typically range from $200-$500 for initiating a family law case. Additional fees apply for motions, responses, and other filings. Fee waivers are available for qualifying low-income litigants.",
    },
    sections: [
      {
        id: "initial-filing-fees",
        heading: "Initial Filing Fees by State",
        body: [
          {
            type: "p",
            text: "Filing fees for initiating a family law case vary significantly by jurisdiction:",
          },
          {
            type: "ul",
            items: [
              "California: $435-$450 for divorce/custody petition",
              "New York: $335 for Supreme Court divorce filing",
              "Texas: $300-$350 for family law petition",
              "Florida: $409 for dissolution of marriage",
              "Illinois: $388 for divorce petition in Cook County",
            ],
          },
          {
            type: "p",
            text: "These are base fees and don't include additional costs for service of process, copying, or certified copies.",
          },
        ],
      },
      {
        id: "additional-fees",
        heading: "Additional Court Fees",
        body: [
          {
            type: "p",
            text: "Beyond the initial filing, expect additional fees for:",
          },
          {
            type: "ul",
            items: [
              "Response or Answer filing: $200-$300",
              "Motions: $60-$150 per motion",
              "Order to Show Cause: $60-$100",
              "Certified copies: $15-$25 per document",
              "Copying fees: $0.50-$1.00 per page",
              "Service of process by sheriff: $40-$75",
            ],
          },
        ],
      },
      {
        id: "fee-waivers",
        heading: "Fee Waiver Availability",
        body: [
          {
            type: "p",
            text: "If you cannot afford court fees, you may qualify for a fee waiver. Courts typically grant waivers based on:",
          },
          {
            type: "ul",
            items: [
              "Receipt of public benefits (food stamps, SSI, etc.)",
              "Income below 125% of federal poverty guidelines",
              "Demonstrated inability to pay based on expenses and obligations",
            ],
          },
          {
            type: "p",
            text: "Fee waiver applications require detailed financial disclosure. If approved, most or all court filing fees are waived, though you may still need to pay for service of process.",
          },
          {
            type: "callout",
            kind: "tip",
            text: "Apply for a fee waiver before filing your case. If denied, you'll need to pay the fees or appeal the denial before proceeding.",
          },
        ],
      },
      {
        id: "payment-methods",
        heading: "Payment Methods",
        body: [
          {
            type: "p",
            text: "Most courts accept multiple payment methods:",
          },
          {
            type: "ul",
            items: [
              "Cash (exact amount, as clerks may not have change)",
              "Credit/debit cards (may include processing fees of 2-3%)",
              "Checks or money orders made payable to the court",
              "Electronic payment for e-filing systems",
            ],
          },
          {
            type: "p",
            text: "Some courts do not accept personal checks. Verify accepted payment methods with your courthouse clerk before filing.",
          },
        ],
      },
    ],
    sources: {
      heading: "Sources",
      items: [
        { 
          title: "Court Filing Fees and Statistics",
          organization: "National Center for State Courts",
          url: "https://www.ncsc.org/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "State Court Fee Schedules",
          organization: "Various State Courts",
          url: "https://www.ncsc.org/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
      ],
    },
    governance: {
      lastUpdated: "2026-02-16",
      sources: [
        { 
          title: "Court Filing Fees and Statistics",
          organization: "National Center for State Courts",
          url: "https://www.ncsc.org/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "State Court Fee Schedules",
          organization: "Various State Courts",
          url: "https://www.ncsc.org/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Filing fees change periodically and vary by county within states. Always verify current fees with your local courthouse clerk.",
    },
  },
  
  relatedLinks: [
    { title: "Fee Waiver Information", href: "/resources/q/fee-waiver" },
    { title: "Where to Find Official Court Forms", href: "/resources/q/official-forms-location" },
  ],
  relatedQuestions: [
    { question: "What if I can't afford court fees?", href: "/resources/q/fee-waiver" },
    { question: "Can I get a free lawyer?", href: "/resources/q/free-legal-help" },
  ],
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      { 
        title: "Court Filing Fees and Statistics",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
      },
      { 
        title: "State Court Fee Schedules",
        organization: "Various State Courts",
        url: "https://www.ncsc.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
      },
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Filing fees change periodically and vary by county within states. Always verify current fees with your local courthouse clerk.",
  },
};
