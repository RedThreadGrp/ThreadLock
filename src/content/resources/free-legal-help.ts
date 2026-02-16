import { ResourcePage } from "../types";

export const freeLegalHelp: ResourcePage = {
  contentVersion: 2,
  slug: "free-legal-help",
  title: "Free Legal Help Options",
  excerpt: "Options for obtaining free or low-cost legal representation in family law cases.",
  tag: "Basics",
  topic: "Official Forms & Portals",
  intent: "Learn",
  readTime: "6 min read",
  status: "published",
  
  blocks: {
    slug: "free-legal-help",
    seo: {
      title: "Can I Get a Free Lawyer? | ThreadLock",
      description: "Free legal representation is limited in family law. Legal aid organizations, pro bono programs, and law school clinics offer free help to qualifying low-income individuals.",
    },
    hero: {
      h1: "Can I get a free lawyer?",
      subhead: null,
    },
    shortAnswer: {
      label: "Short answer",
      text: "Free legal representation in family law is limited and typically available only to low-income individuals facing serious issues like domestic violence or child custody threats. Legal aid organizations, pro bono programs, and law school clinics offer free or reduced-cost assistance to those who qualify.",
    },
    sections: [
      {
        id: "no-right-to-attorney",
        heading: "No Constitutional Right to Attorney",
        body: [
          {
            type: "p",
            text: "Unlike criminal cases, you do not have a constitutional right to a free attorney in civil family law matters. Courts only appoint free attorneys in:",
          },
          {
            type: "ul",
            items: [
              "Criminal cases where jail time is possible",
              "Certain child welfare cases where parental rights may be terminated",
              "Limited circumstances involving contempt with jail time",
            ],
          },
          {
            type: "p",
            text: "For divorce, custody, child support, and property division cases, you must either pay for an attorney or represent yourself.",
          },
        ],
      },
      {
        id: "legal-aid",
        heading: "Legal Aid Organizations",
        body: [
          {
            type: "p",
            text: "Legal aid societies provide free legal services to low-income individuals. To qualify, you typically must:",
          },
          {
            type: "ul",
            items: [
              "Have income below 125-200% of federal poverty guidelines",
              "Face a high-priority legal issue (domestic violence, child custody, eviction)",
              "Meet residency requirements for your area",
            ],
          },
          {
            type: "p",
            text: "Legal aid organizations have limited funding and cannot help everyone who qualifies. Priority goes to cases involving safety issues or fundamental family rights.",
          },
          {
            type: "callout",
            kind: "tip",
            text: "Find your local legal aid office through lawhelp.org or by contacting your state bar association's lawyer referral service.",
          },
        ],
      },
      {
        id: "pro-bono",
        heading: "Pro Bono Programs",
        body: [
          {
            type: "p",
            text: "Many bar associations coordinate pro bono (free) representation programs where volunteer attorneys take cases for free. These programs:",
          },
          {
            type: "ul",
            items: [
              "Screen applicants based on income and case merits",
              "Match qualified clients with volunteer attorneys",
              "May offer limited-scope representation (unbundled services)",
              "Often focus on domestic violence or emergency custody cases",
            ],
          },
          {
            type: "p",
            text: "Pro bono availability varies greatly by location and case type. Waiting lists can be months long in high-demand areas.",
          },
        ],
      },
      {
        id: "law-school-clinics",
        heading: "Law School Clinics",
        body: [
          {
            type: "p",
            text: "Many law schools operate family law clinics where supervised law students provide free legal services. Clinics typically:",
          },
          {
            type: "ul",
            items: [
              "Accept cases based on income eligibility and educational value",
              "Provide representation under attorney supervision",
              "Focus on specific practice areas (custody, domestic violence, etc.)",
              "Offer slower service due to student learning requirements",
            ],
          },
          {
            type: "p",
            text: "Law school clinics can provide high-quality representation but may not take complex or emergency cases. Contact law schools in your area to inquire about eligibility.",
          },
        ],
      },
      {
        id: "limited-scope",
        heading: "Limited Scope Representation",
        body: [
          {
            type: "p",
            text: "If you can't afford full representation, consider limited scope (unbundled) services where an attorney helps with specific tasks:",
          },
          {
            type: "ul",
            items: [
              "Reviewing documents before you file them",
              "Coaching you for a hearing or trial",
              "Drafting specific pleadings or motions",
              "Appearing for a single hearing",
            ],
          },
          {
            type: "p",
            text: "Limited scope services cost less than full representation and allow you to get professional help on critical tasks while handling routine matters yourself.",
          },
        ],
      },
      {
        id: "self-help-centers",
        heading: "Court Self-Help Centers",
        body: [
          {
            type: "p",
            text: "While not legal representation, court self-help centers provide free assistance with:",
          },
          {
            type: "ul",
            items: [
              "Identifying required forms for your case",
              "General information about court procedures",
              "Resources for self-represented litigants",
              "Referrals to legal aid and other services",
            ],
          },
          {
            type: "p",
            text: "Self-help center staff cannot give legal advice, represent you, or tell you what to write in your documents. They can explain procedures and help you find resources.",
          },
        ],
      },
    ],
    sources: {
      heading: "Sources",
      items: [
        { 
          title: "Legal Services Corporation", 
          organization: "Legal Services Corporation",
          url: "https://www.lsc.gov/",
          jurisdiction: "Federal",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "Free Legal Help Resources",
          organization: "American Bar Association",
          url: "https://www.americanbar.org/groups/legal_services/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "State Courts and Self-Representation",
          organization: "National Center for State Courts",
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
          title: "Legal Services Corporation", 
          organization: "Legal Services Corporation",
          url: "https://www.lsc.gov/",
          jurisdiction: "Federal",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "Free Legal Help Resources",
          organization: "American Bar Association",
          url: "https://www.americanbar.org/groups/legal_services/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "State Courts and Self-Representation",
          organization: "National Center for State Courts",
          url: "https://www.ncsc.org/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Availability of free legal services varies significantly by location, funding levels, and case complexity. Income eligibility requirements differ by program.",
    },
  },
  
  relatedLinks: [
    { title: "Legal Aid Organizations Directory", href: "/resources/legal-aid" },
    { title: "Fee Waiver Information", href: "/resources/q/fee-waiver" },
  ],
  relatedQuestions: [
    { question: "What are typical court filing fees?", href: "/resources/q/filing-fees" },
    { question: "What if I can't afford court fees?", href: "/resources/q/fee-waiver" },
  ],
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      { 
        title: "Legal Services Corporation", 
        organization: "Legal Services Corporation",
        url: "https://www.lsc.gov/",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
      },
      { 
        title: "Free Legal Help Resources",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/legal_services/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
      },
      { 
        title: "State Courts and Self-Representation",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
      },
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Availability of free legal services varies significantly by location, funding levels, and case complexity. Income eligibility requirements differ by program.",
  },
};
