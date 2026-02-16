import { ResourcePage } from "../types";

export const legalAid: ResourcePage = {
  contentVersion: 2,
  slug: "legal-aid",
  title: "Legal Aid Organizations Directory",
  excerpt: "Find free or low-cost legal assistance in your area through legal aid organizations serving low-income families.",
  tag: "Basics",
  topic: "Official Forms & Portals",
  intent: "Learn",
  readTime: "4 min read",
  status: "published",
  
  blocks: {
    slug: "legal-aid",
    seo: {
      title: "Legal Aid Organizations Directory | ThreadLock",
      description: "Find free or low-cost legal help through legal aid organizations. Directory of legal services providers by state for family law cases.",
    },
    hero: {
      h1: "Legal Aid Organizations Directory",
      subhead: "Find free or low-cost legal assistance in your area",
    },
    shortAnswer: {
      label: "Overview",
      text: "Legal aid organizations provide free or reduced-cost legal services to low-income individuals in family law cases. This directory helps you find legal aid providers in your state, along with information about eligibility requirements and services offered.",
    },
    sections: [
      {
        id: "what-is-legal-aid",
        heading: "What is Legal Aid?",
        body: [
          {
            type: "p",
            text: "Legal aid organizations are nonprofit agencies funded by federal, state, and private sources to provide free legal services to people who cannot afford attorneys. They focus on civil legal matters including:",
          },
          {
            type: "ul",
            items: [
              "Divorce and child custody",
              "Domestic violence protective orders",
              "Child support and paternity",
              "Housing and eviction",
              "Government benefits",
            ],
          },
          {
            type: "p",
            text: "Legal aid offices have limited resources and cannot help everyone who qualifies. They prioritize cases involving safety issues, basic family rights, and essential needs like housing and income.",
          },
        ],
      },
      {
        id: "eligibility",
        heading: "Who Qualifies for Legal Aid?",
        body: [
          {
            type: "p",
            text: "Eligibility requirements vary by organization but typically include:",
          },
          {
            type: "ul",
            items: [
              "Income at or below 125-200% of federal poverty guidelines",
              "Residency in the service area",
              "Legal issue within the organization's practice areas",
              "No conflicts of interest with other clients",
            ],
          },
          {
            type: "p",
            text: "Some legal aid offices prioritize certain populations such as domestic violence survivors, elderly individuals, or veterans.",
          },
          {
            type: "callout",
            kind: "tip",
            text: "Even if you're slightly above income guidelines, contact legal aid. Some offices have flexibility for cases involving children or safety issues.",
          },
        ],
      },
      {
        id: "finding-legal-aid",
        heading: "How to Find Legal Aid in Your State",
        body: [
          {
            type: "p",
            text: "Use these national resources to locate legal aid providers:",
          },
          {
            type: "ul",
            items: [
              "LawHelp.org - Searchable directory by state and legal issue",
              "Legal Services Corporation (LSC) - Find LSC-funded legal aid programs",
              "State Bar Association - Most states maintain legal services directories",
              "211 Helpline - Call 211 for referrals to local legal aid",
            ],
          },
          {
            type: "p",
            text: "Many legal aid organizations now offer online intake applications. Check their websites to apply electronically rather than waiting for office hours.",
          },
        ],
      },
      {
        id: "services-offered",
        heading: "What Services Do Legal Aid Organizations Provide?",
        body: [
          {
            type: "p",
            text: "Legal aid services vary by organization and may include:",
          },
          {
            type: "ul",
            items: [
              "Full representation in court proceedings",
              "Limited scope assistance with specific tasks",
              "Legal advice and consultation",
              "Help completing court forms",
              "Self-help workshops and clinics",
              "Referrals to other resources",
            ],
          },
          {
            type: "p",
            text: "Due to high demand, many legal aid offices provide advice and limited assistance rather than full representation. They focus resources on the most serious cases.",
          },
        ],
      },
      {
        id: "alternatives",
        heading: "If Legal Aid Can't Help",
        body: [
          {
            type: "p",
            text: "If you don't qualify for legal aid or they're at capacity, consider:",
          },
          {
            type: "ul",
            items: [
              "Pro bono programs through your local bar association",
              "Law school clinics at nearby universities",
              "Limited scope (unbundled) representation",
              "Court self-help centers for procedural guidance",
              "Online resources and legal self-help guides",
            ],
          },
          {
            type: "p",
            text: "Many attorneys offer free initial consultations. Even 30 minutes of professional advice can help you understand your options and identify critical issues in your case.",
          },
        ],
      },
      {
        id: "national-resources",
        heading: "National Legal Aid Resources",
        body: [
          {
            type: "p",
            text: "These national organizations provide directories and referrals:",
          },
          {
            type: "ul",
            items: [
              "LawHelp.org - Legal aid locator and self-help resources",
              "Legal Services Corporation (lsc.gov) - Directory of LSC-funded programs",
              "National Domestic Violence Hotline (1-800-799-7233) - Legal referrals for DV survivors",
              "State Bar Association websites - Lawyer referral services and pro bono programs",
            ],
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
          title: "LawHelp.org", 
          organization: "Pro Bono Net",
          url: "https://www.lawhelp.org/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "Legal Services Resources",
          organization: "American Bar Association",
          url: "https://www.americanbar.org/groups/legal_services/",
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
          title: "LawHelp.org", 
          organization: "Pro Bono Net",
          url: "https://www.lawhelp.org/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
        { 
          title: "Legal Services Resources",
          organization: "American Bar Association",
          url: "https://www.americanbar.org/groups/legal_services/",
          jurisdiction: "US-general",
          lastAccessed: "2026-02-16",
        },
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Legal aid funding and service availability changes frequently. Contact organizations directly to verify current services and eligibility requirements.",
    },
  },
  
  relatedLinks: [
    { title: "Can I Get a Free Lawyer?", href: "/resources/q/free-legal-help" },
    { title: "Fee Waiver Information", href: "/resources/q/fee-waiver" },
    { title: "Official Court Forms", href: "/resources/q/official-forms-location" },
  ],
  relatedQuestions: [
    { question: "Can I get a free lawyer?", href: "/resources/q/free-legal-help" },
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
        title: "LawHelp.org", 
        organization: "Pro Bono Net",
        url: "https://www.lawhelp.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
      },
      { 
        title: "Legal Services Resources",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/legal_services/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
      },
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Legal aid funding and service availability changes frequently. Contact organizations directly to verify current services and eligibility requirements.",
  },
};
