import { ResourceQAContent } from "../resources/types";

export const officialFormsTopic: ResourceQAContent = {
  slug: "official-forms",
  
  seo: {
    title: "Official Forms & Portals | ThreadLock Resources",
    description: "Access state-provided forms and rules—don't pay for free resources. Learn where to find official court forms and self-help resources."
  },
  
  hero: {
    h1: "Official Forms & Portals",
    subhead: "Access state-provided forms and rules—don't pay for free resources."
  },
  
  shortAnswer: {
    text: "Many websites and services charge $50-$300 for court forms that your state provides for free. As a self-represented litigant, knowing where to find official forms, court rules, and self-help resources can save you hundreds of dollars and ensure you're using current, jurisdiction-approved documents. Every state maintains court websites with free forms, instructions, and often video tutorials designed specifically for people without attorneys."
  },
  
  sections: [
    {
      id: "why-use-official-sources",
      heading: "Why Use Official Sources?",
      body: [
        {
          type: "ul",
          items: [
            "**Cost**: State court websites provide forms at no charge. Commercial sites charge for the same documents.",
            "**Accuracy**: Official forms are current and jurisdiction-specific. Generic forms from online services may be outdated or formatted for the wrong state.",
            "**Instructions**: Court self-help centers provide plain-language guidance written for non-attorneys. Commercial sites often lack detailed instructions or provide confusing legalese.",
            "**Fillable PDFs**: Most official court sites offer fillable PDF forms that you can complete electronically, save, and print or e-file."
          ]
        }
      ]
    },
    {
      id: "where-to-find-forms",
      heading: "Where to Find Official Forms",
      body: [
        {
          type: "callout",
          kind: "tip",
          title: "State Court Websites",
          text: "Every state has a judiciary website with a forms section and self-help center. California's courts.ca.gov, New York's nycourts.gov, and Texas's txcourts.gov provide comprehensive form libraries. Search '[your state] court forms family law' to find your jurisdiction's site."
        },
        {
          type: "p",
          text: "**County Court Websites**: Local county court websites often provide additional forms specific to that jurisdiction, local rules, and information about filing procedures and fees."
        },
        {
          type: "p",
          text: "**Court Clerk's Offices**: Most clerk's offices have physical forms available and staff who can answer procedural questions (though they can't give legal advice)."
        },
        {
          type: "p",
          text: "**Legal Aid Organizations**: State and local legal aid societies provide free forms and instructions tailored to low-income self-represented litigants."
        }
      ]
    },
    {
      id: "federal-resources",
      heading: "Federal Court Resources",
      body: [
        {
          type: "p",
          text: "For federal cases, use uscourts.gov for official forms and PACER (pacer.uscourts.gov) to access case documents. Federal court forms are standardized nationwide, though some districts have local rules and supplemental forms."
        }
      ]
    },
    {
      id: "common-mistakes",
      heading: "Common Mistakes",
      body: [
        {
          type: "p",
          text: "Avoid these errors when using court forms:"
        },
        {
          type: "ul",
          items: [
            "**Paying for free forms**: Spending money on forms available for free from your court. Always check official sources first.",
            "**Using generic 'nationwide' forms**: Family law forms are state-specific. A California form won't work in Florida. Use forms from your jurisdiction's official court website.",
            "**Using outdated forms**: Court forms are revised regularly. Forms from three years ago may be rejected. Always download the current version from the official website.",
            "**Printing forms and then retyping them**: Most forms are fillable PDFs. Complete them electronically, then print. Don't print blank forms and handwrite information.",
            "**Ignoring court instructions**: Most forms come with detailed instruction sheets. Read these carefully before completing the form.",
            "**Not checking local rules**: State forms are standard, but some counties have local rule modifications or additional required forms. Check your county court's website.",
            "**Assuming one size fits all**: Different case types require different forms. Divorce forms differ from custody modification forms. Use the right forms for your situation.",
            "**Forgetting about e-filing requirements**: Many courts now require or encourage electronic filing. Check whether your court has an e-filing portal and what formats are accepted."
          ]
        }
      ]
    }
  ],
  
  sources: {
    items: [
      {
        title: "U.S. Courts — All Forms",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/forms",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "California Courts — All Family Law Forms",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/forms.htm?filter=FL",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "California Courts Self-Help Center (Main)",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/selfhelp.htm",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NY Courts Self-Help: Family Court",
        organization: "New York State Courts",
        url: "https://www.nycourts.gov/courthelp/Family/index.shtml",
        jurisdiction: "new-york",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NCSC — Self-Representation Resources (State Links)",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/access-and-fairness/self-representation/state-links",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      },
      {
        title: "LawHelp.org — State Legal Aid Finder",
        organization: "Pro Bono Net",
        url: "https://www.lawhelp.org/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      }
    ]
  },
  
  governance: {
    lastUpdated: "2026-02-21",
    sources: [
      {
        title: "U.S. Courts — All Forms",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/forms",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "California Courts — All Family Law Forms",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/forms.htm?filter=FL",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NY Courts Self-Help: Family Court",
        organization: "New York State Courts",
        url: "https://www.nycourts.gov/courthelp/Family/index.shtml",
        jurisdiction: "new-york",
        lastAccessed: "2026-02-21"
      },
      {
        title: "NCSC — Self-Representation Resources (State Links)",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/access-and-fairness/self-representation/state-links",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Court form availability, e-filing systems, and fee waiver procedures vary by state and county. Some jurisdictions update forms more frequently than others. Always verify you're using the most current version."
  }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Court form availability, e-filing systems, and fee waiver procedures vary by state and county. Some jurisdictions update forms more frequently than others. Always verify you're using the most current version."
  }
};
