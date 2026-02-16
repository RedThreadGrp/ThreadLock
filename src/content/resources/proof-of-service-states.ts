import type { ResourceQAContent } from "./types";

export const proofOfServiceStates: ResourceQAContent = {
  slug: "proof-of-service-states",

  seo: {
    title: "Proof of Service Requirements by State | State-by-State Guide",
    description:
      "Proof of service requirements vary by state. Learn service methods, timelines, and documentation requirements for every U.S. jurisdiction.",
  },

  hero: {
    h1: "Proof of Service State-by-State",
    subhead: "Service requirements, methods, and timelines across U.S. jurisdictions.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Proof of service requirements vary by state. Most require personal service for initial petitions by someone over 18 who is not a party to the case, with service completed within 60-120 days after filing. Some states allow certified mail service for certain documents. Always verify requirements with your local court.",
  },

  sections: [
    {
      id: "general-requirements",
      heading: "General Service Requirements",
      body: [
        {
          type: "p",
          text: "Most states require that court documents be served on the other party using approved methods. Common service methods include:",
        },
        {
          type: "ul",
          items: [
            "Personal service by a process server or sheriff",
            "Service by certified mail (where allowed)",
            "Substituted service (leaving documents with another adult)",
            "Publication (for parties who cannot be located)",
          ],
        },
      ],
    },
    {
      id: "timeline-requirements",
      heading: "Timeline Requirements",
      body: [
        {
          type: "p",
          text: "Most jurisdictions require service within a specific timeframe after filing:",
        },
        {
          type: "ul",
          items: [
            "Initial petitions: Often 60-120 days",
            "Responses: Typically 20-30 days after service",
            "Motions and other documents: Usually 5-15 days before hearing",
          ],
        },
      ],
    },
    {
      id: "personal-service",
      heading: "Personal Service Rules",
      body: [
        {
          type: "p",
          text: "Personal service requirements are most strict for initial petitions. The server must:",
        },
        {
          type: "ul",
          items: [
            "Be over 18 years old",
            "Not be a party to the case",
            "Hand deliver documents directly to the person",
            "Complete an affidavit or declaration of service",
          ],
        },
      ],
    },
    {
      id: "mail-service",
      heading: "Service by Mail",
      body: [
        {
          type: "p",
          text: "Some states allow service by certified or registered mail for certain documents:",
        },
        {
          type: "ul",
          items: [
            "Usually not permitted for initial divorce or custody petitions",
            "May be allowed for modifications and post-judgment motions",
            "Requires return receipt as proof",
            "May require additional notice methods",
          ],
        },
      ],
    },
    {
      id: "substituted-service",
      heading: "Substituted Service",
      body: [
        {
          type: "p",
          text: "When personal service isn't possible, courts may allow substituted service:",
        },
        {
          type: "ul",
          items: [
            "Leave documents with another adult at recipient's home or workplace",
            "Must also mail a copy to recipient's address",
            "Requires court approval in most states",
            "Must show reasonable efforts to locate the person first",
          ],
        },
      ],
    },
    {
      id: "state-specific-variations",
      heading: "Common State-Specific Variations",
      body: [
        {
          type: "p",
          text: "Key differences to check in your state:",
        },
        {
          type: "ul",
          items: [
            "Who can serve documents (sheriff, private process server, any adult over 18)",
            "Whether certified mail is allowed for any filings",
            "Service deadlines for initial petitions",
            "Waiting periods after service before default can be entered",
            "Requirements for out-of-state service",
            "Electronic service rules (increasingly common)",
            "Service by publication procedures and costs",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "serve-myself",
        q: "Can I serve documents myself?",
        a: "No. You cannot serve your own court documents. The server must be over 18 and cannot be a party to the case. Most people hire a professional process server or use the sheriff's office. A friend or family member who is not involved in the case can also serve in most states.",
      },
      {
        id: "other-state",
        q: "What if the other party lives in another state?",
        a: "Out-of-state service is allowed but must follow both your state's rules and potentially the other state's rules. Many states have adopted the Uniform Interstate Family Support Act (UIFSA) which streamlines this process. Consider hiring a process server in the other state or using certified mail where allowed.",
      },
      {
        id: "cant-find-person",
        q: "What if I can't find the other party to serve them?",
        a: "You may petition the court for service by publication (newspaper notice). This requires proof of diligent search efforts including checking last known addresses, contacting relatives, searching online databases, and checking with DMV. Publication service is expensive and time-consuming but is the last resort option.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Federal Rules of Civil Procedure - Rules 4 and 5",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal service of process standards"
      },
      {
        title: "State Court Service Requirements",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/information-and-resources/state-court-websites",
        lastAccessed: "2026-02-16",
        note: "Directory of state court websites with service rules"
      },
      {
        title: "Service of Process Guide",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/litigation/resources/",
        lastAccessed: "2026-02-16",
        note: "Best practices for service compliance"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Federal Rules of Civil Procedure - Rules 4 and 5",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal service standards"
      },
      {
        title: "State Court Websites",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/information-and-resources/state-court-websites",
        lastAccessed: "2026-02-16",
        note: "State-specific service requirements"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 90,
    accuracyNotes: "Service requirements vary significantly by state and court type. Some states have adopted electronic service rules. Timing requirements differ for initial petitions vs. other filings. Out-of-state service may require compliance with multiple jurisdictions. Service by publication procedures and costs vary widely. Always verify current rules with your local court clerk before serving documents.",
  },
};
