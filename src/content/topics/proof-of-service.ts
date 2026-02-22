import { ResourceQAContent } from "../resources/types";

export const proofOfServiceTopic: ResourceQAContent = {
  slug: "proof-of-service",
  
  seo: {
    title: "Proof of Service | ThreadLock Resources",
    description: "Don't lose on a technicality—get service documentation right. Learn about proof of service requirements, methods, and common mistakes."
  },
  
  hero: {
    h1: "Proof of Service",
    subhead: "Don't lose on a technicality—get service documentation right."
  },
  
  shortAnswer: {
    text: "Proof of service is your written evidence that you properly delivered court documents to the other party. Without valid proof of service, your motion can be rejected, your hearing postponed, or your case dismissed entirely, regardless of the merits of your arguments."
  },
  
  sections: [
    {
      id: "what-is-proof-of-service",
      heading: "What Is Proof of Service?",
      body: [
        {
          type: "p",
          text: "Proof of service is a signed declaration under penalty of perjury that documents when, where, how, and to whom you delivered court papers. It proves you gave the other party proper notice and a fair opportunity to respond."
        },
        {
          type: "p",
          text: "Different courts use different forms—California uses FL-335 for mail service and FL-330 for personal service, while New York requires an Affidavit of Service. Federal courts follow specific rules under FRCP Rule 5."
        },
        {
          type: "callout",
          kind: "warning",
          title: "Critical Requirement",
          text: "Proof of service is one of the most frequently mishandled procedural requirements in family court. Missing or improper proof of service can result in your case being dismissed or continued, wasting months of preparation."
        }
      ]
    },
    {
      id: "service-methods",
      heading: "Service Methods and Documentation",
      body: [
        {
          type: "p",
          text: "There are four main methods of service, each with specific documentation requirements:"
        },
        {
          type: "callout",
          kind: "tip",
          title: "Personal Service (Most Reliable)",
          text: "Someone over 18 (not you) hand-delivers documents directly to the other party. This is the most reliable method and hardest to contest. The server must complete a declaration detailing the exact date, time, location, and identifying characteristics of the person served."
        },
        {
          type: "p",
          text: "**Service by Mail**: Documents are mailed to the other party's last known address. Most jurisdictions require adding 5 extra days for the other party to respond. The proof must include the mailing date and complete address used."
        },
        {
          type: "p",
          text: "**Electronic Service**: Many courts now allow service via email or e-filing portals. This generates automatic proof of service records but requires prior consent from the other party or court authorization."
        },
        {
          type: "p",
          text: "**Substituted Service**: Used when personal service isn't possible after multiple attempts. The server leaves documents with another adult at the residence or workplace, then follows up by mail. Strict documentation requirements apply."
        }
      ]
    },
    {
      id: "common-mistakes",
      heading: "Common Mistakes",
      body: [
        {
          type: "p",
          text: "Avoid these critical errors that can invalidate your proof of service:"
        },
        {
          type: "ul",
          items: [
            "**Using the wrong form**: Each state has specific proof of service forms. California's FL-335 won't work in Texas. Always verify your jurisdiction's required form.",
            "**Serving documents yourself**: You cannot serve your own court papers. The server must be an uninvolved third party who's at least 18 years old.",
            "**Missing the deadline**: Proof of service must be filed by specific deadlines, often several days before a hearing. Late filing can result in continuances or dismissal.",
            "**Incomplete information**: Missing details like exact service time, location, or documents served can invalidate your proof. Fill out every field on the form.",
            "**Skipping proof of service entirely**: Some people assume filing with the court is enough. It's not. You must serve the other party AND file proof that you did so."
          ]
        }
      ]
    }
  ],
  
  sources: {
    items: [
      {
        title: "FRCP Rule 5 — Serving and Filing Pleadings",
        organization: "Cornell Law School (LII)",
        url: "https://www.law.cornell.edu/rules/frcp/rule_5",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "FRCP Rule 4 — Summons",
        organization: "Cornell Law School (LII)",
        url: "https://www.law.cornell.edu/rules/frcp/rule_4",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "California Courts Self-Help: Serving Court Papers",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/selfhelp-serving.htm",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Cornell LII — Service of Process (Wex)",
        organization: "Cornell Law School (LII)",
        url: "https://www.law.cornell.edu/wex/service_of_process",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      },
      {
        title: "ABA How Courts Work",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NY Courts Self-Help: Family Court",
        organization: "New York State Courts",
        url: "https://www.nycourts.gov/courthelp/Family/index.shtml",
        jurisdiction: "new-york",
        lastAccessed: "2026-02-21"
      }
    ]
  },
  
  governance: {
    lastUpdated: "2026-02-21",
    sources: [
      {
        title: "FRCP Rule 5 — Serving and Filing Pleadings",
        organization: "Cornell Law School (LII)",
        url: "https://www.law.cornell.edu/rules/frcp/rule_5",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "FRCP Rule 4 — Summons",
        organization: "Cornell Law School (LII)",
        url: "https://www.law.cornell.edu/rules/frcp/rule_4",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "California Courts Self-Help: Serving Court Papers",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/selfhelp-serving.htm",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Cornell LII — Service of Process (Wex)",
        organization: "Cornell Law School (LII)",
        url: "https://www.law.cornell.edu/wex/service_of_process",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Service requirements vary significantly by state and case type. Always verify local court rules and deadlines for your specific jurisdiction."
  }
};
