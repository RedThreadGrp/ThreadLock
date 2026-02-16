import type { ResourceQAContent } from "./types";

export const serviceDeadlines: ResourceQAContent = {
  slug: "service-deadlines",

  seo: {
    title: "How Long Do I Have to Serve Documents? Service Deadlines by Document Type",
    description:
      "Service deadlines vary by document type and jurisdiction. Learn timelines for initial petitions, motion responses, discovery, and consequences of late service.",
  },

  hero: {
    h1: "How long do I have to serve documents?",
    subhead: "Service deadlines for different document types and jurisdictions.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Service deadlines vary by document type and jurisdiction. Initial petitions typically must be served within 120 days of filing. Motion responses usually require 9-16 days' notice before the hearing, while discovery responses are generally due within 30 days. Always verify specific deadlines in your court's local rules.",
  },

  sections: [
    {
      id: "initial-pleadings",
      heading: "Initial Pleading Service",
      body: [
        {
          type: "p",
          text: "Summons and Complaint/Petition: Most jurisdictions require service within 60-120 days from filing. Extensions may be available with court approval. Case may be dismissed for failure to timely serve.",
        },
        {
          type: "p",
          text: "Personal Service vs. Alternative Methods: Personal service is typically preferred initially (in-person delivery, service by sheriff or professional process server). Alternative methods like substituted service or publication generally require court approval and diligent efforts to locate and serve personally first.",
        },
      ],
    },
    {
      id: "motion-notice",
      heading: "Motion Notice Requirements",
      body: [
        {
          type: "p",
          text: "Regular Motions - Notice periods vary by jurisdiction:",
        },
        {
          type: "ul",
          items: [
            "16 days: Common minimum in many states for law and motion",
            "21 days: Federal court standard for most motions",
            "9 days: Short notice for certain family law motions",
            "45 days: Summary judgment motions often require extended notice",
          ],
        },
        {
          type: "p",
          text: "Ex Parte Motions: Emergency applications with shortened timelines. May require 24 hours' notice or less. Some jurisdictions allow same-day filing and hearing. Must demonstrate immediate harm or emergency circumstances.",
        },
        {
          type: "p",
          text: "Notice Calculation: Courts use different counting methods - court days (excluding weekends and holidays) or calendar days (including all days). Service by mail may add additional days (typically 3-5 days).",
        },
      ],
    },
    {
      id: "discovery-deadlines",
      heading: "Discovery Deadlines",
      body: [
        {
          type: "p",
          text: "Responses to Discovery Requests:",
        },
        {
          type: "ul",
          items: [
            "30 days: Most common deadline for written discovery responses",
            "45 days: Extended deadline in some jurisdictions",
            "Extensions by stipulation often permitted",
          ],
        },
        {
          type: "p",
          text: "Depositions: Reasonable notice required (typically 10-20 days). Less notice acceptable by stipulation. Subpoenas require additional time for non-parties.",
        },
      ],
    },
    {
      id: "response-deadlines",
      heading: "Court Filings After Service",
      body: [
        {
          type: "p",
          text: "Response Deadlines after being served with initial pleadings:",
        },
        {
          type: "ul",
          items: [
            "30 days: Standard answer deadline in civil cases",
            "28 days: Federal court answer deadline",
            "Variable: Family law response times vary by state and document type",
          ],
        },
      ],
    },
    {
      id: "consequences",
      heading: "Consequences of Late Service",
      body: [
        {
          type: "p",
          text: "Dismissal: Failure to timely serve initial pleadings may result in case dismissal without prejudice, need to refile and serve properly, and loss of priority filing date.",
        },
        {
          type: "p",
          text: "Continuance of Hearing: Late service of motions may cause hearing taken off calendar, sanctions against serving party, or opposing party granted automatic continuance.",
        },
        {
          type: "p",
          text: "Default Risk: Failing to respond within deadline after being served may result in default judgment against you.",
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "mail-extra-days",
        q: "Do I get extra time if served by mail?",
        a: "Yes. Most jurisdictions add 3-5 days to response deadlines when documents are served by mail rather than personal service. This accounts for mailing time. Check your jurisdiction's rules for the specific number of additional days.",
      },
      {
        id: "weekend-deadline",
        q: "What if my deadline falls on a weekend?",
        a: "If a deadline falls on a weekend or court holiday, it's typically extended to the next business day. However, this varies by jurisdiction - some count calendar days, others count only court days. Check your local rules.",
      },
      {
        id: "calculate-days",
        q: "How do I calculate the deadline?",
        a: "Check whether your jurisdiction counts calendar days or court days. The day of service typically doesn't count as day one. For 'days' deadlines, count forward. For 'days before hearing' requirements, count backwards from the hearing date. When in doubt, serve as early as possible.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Federal Rules of Civil Procedure - Rule 4",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Service of process requirements and timing"
      },
      {
        title: "Federal Rules of Civil Procedure - Rule 5",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Service and filing of pleadings and other papers"
      },
      {
        title: "Federal Rules of Civil Procedure - Rule 6",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Computing and extending time requirements"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Federal Rules of Civil Procedure - Rule 4",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Service of process requirements and timing"
      },
      {
        title: "Federal Rules of Civil Procedure - Rule 5",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Service and filing of pleadings and other papers"
      },
      {
        title: "Federal Rules of Civil Procedure - Rule 6",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Computing and extending time requirements"
      },
    ],
    jurisdictionScope: ["federal"],
    reviewIntervalDays: 180,
    accuracyNotes: "Service deadlines vary significantly by jurisdiction (federal vs. state), case type (civil, family, criminal), and document type. Some courts have adopted e-filing systems that may affect service timing. Local court rules often modify statewide rules. Emergency or expedited procedures have different timelines. Always consult your specific court's rules and calendar.",
  },
};
