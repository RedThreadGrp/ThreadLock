import type { ResourceQAContent } from "./types";

export const officialFormsLocation: ResourceQAContent = {
  slug: "official-forms-location",

  seo: {
    title: "Where to Find Official Court Forms | Complete Guide",
    description:
      "Official court forms are available on state/county court websites, at the courthouse clerk's office, or through legal aid organizations. Find the right forms for your case.",
  },

  hero: {
    h1: "Where do I find official court forms?",
    subhead: "Online sources, physical locations, and legal aid resources for court forms.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Official court forms are available on your state or county court website, usually under a 'Forms' or 'Self-Help' section. You can also obtain forms at the courthouse clerk's office or through legal aid organizations that serve your area. Many jurisdictions provide fillable PDFs and instructions for self-represented litigants.",
  },

  sections: [
    {
      id: "online-sources",
      heading: "Online Sources",
      body: [
        {
          type: "p",
          text: "State Court Websites: Most state judicial systems maintain form libraries. Search '[Your State] court forms' or '[Your State] judicial branch forms'. Navigate to family law or civil forms sections. Download forms as fillable PDFs when available.",
        },
        {
          type: "p",
          text: "County-Specific Forms: Some jurisdictions require local forms in addition to state-mandated forms. Visit your specific county court website and check for local rules and forms sections. Verify whether state or local forms take precedence.",
        },
        {
          type: "p",
          text: "Federal Courts: U.S. Courts maintain forms at uscourts.gov. Bankruptcy, civil, and criminal forms available. District-specific forms found on individual court websites.",
        },
      ],
    },
    {
      id: "physical-locations",
      heading: "Physical Locations",
      body: [
        {
          type: "p",
          text: "Courthouse Clerk's Office:",
        },
        {
          type: "ul",
          items: [
            "Forms typically available at the filing counter",
            "Staff may provide basic information about which forms to use",
            "Clerks cannot provide legal advice on how to complete forms",
          ],
        },
        {
          type: "p",
          text: "Law Libraries:",
        },
        {
          type: "ul",
          items: [
            "County law libraries often have form books and self-help resources",
            "Librarians can help locate appropriate forms",
            "Some libraries offer free printing",
          ],
        },
      ],
    },
    {
      id: "legal-aid-resources",
      heading: "Legal Aid Resources",
      body: [
        {
          type: "p",
          text: "Legal Services Organizations: Organizations like Legal Aid Society provide pre-screened forms for specific case types, instructions tailored to self-represented litigants, and sometimes offer form-filling assistance clinics.",
        },
        {
          type: "p",
          text: "State Bar Associations: Many state bars offer free legal form access through public service programs, self-help centers with form packets, and referrals to low-cost legal assistance.",
        },
      ],
    },
    {
      id: "form-types",
      heading: "Common Form Types by Case Category",
      body: [
        {
          type: "p",
          text: "Family Law:",
        },
        {
          type: "ul",
          items: [
            "Petition for dissolution/divorce",
            "Child custody and parenting plan forms",
            "Child support worksheets and orders",
            "Domestic violence restraining orders",
          ],
        },
        {
          type: "p",
          text: "Civil Cases:",
        },
        {
          type: "ul",
          items: [
            "Complaints and answers",
            "Motions and responses",
            "Declarations and affidavits",
            "Proof of service forms",
          ],
        },
        {
          type: "p",
          text: "Small Claims:",
        },
        {
          type: "ul",
          items: [
            "Plaintiff's claim",
            "Defendant's response",
            "Request to postpone trial",
            "Notice of appeal",
          ],
        },
      ],
    },
    {
      id: "tips-using-forms",
      heading: "Tips for Using Court Forms",
      body: [
        {
          type: "ul",
          items: [
            "Always use the most current version (check dates on forms)",
            "Read all instructions carefully before filling out forms",
            "Type or print clearly in black ink",
            "Make copies for your records before filing",
            "Verify which forms your specific court requires",
            "Check if your court accepts e-filing",
            "Some forms must be filed together as a packet",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "use-outdated-form",
        q: "Can I use an older version of a form?",
        a: "Generally no. Courts typically require the most current version. Forms are dated (usually in the footer). Check the court website for the current version or ask the clerk if your form is still acceptable.",
      },
      {
        id: "wrong-county-form",
        q: "What if I use a form from the wrong county?",
        a: "If it's a state-mandated form, it should be acceptable in any county within that state. However, some counties have specific local forms. When in doubt, check with your county clerk or use forms from your specific county's website.",
      },
      {
        id: "modify-forms",
        q: "Can I modify or create my own forms?",
        a: "Use official court forms when they exist. Courts may reject custom forms or forms that have been significantly modified. If no form exists for your specific request, you may need to draft a pleading following your jurisdiction's rules. Consider consulting an attorney for non-standard filings.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "State Court Forms",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/information-and-resources/state-court-websites",
        lastAccessed: "2026-02-16",
        note: "Directory of official state court websites with forms"
      },
      {
        title: "Federal Court Forms",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/forms",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Official federal court forms and instructions"
      },
      {
        title: "Find Legal Aid",
        organization: "Legal Services Corporation",
        url: "https://www.lsc.gov/what-legal-aid/find-legal-aid",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Locate free or low-cost legal assistance"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "State Court Websites",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/information-and-resources/state-court-websites",
        lastAccessed: "2026-02-16",
        note: "Official forms libraries for each state"
      },
      {
        title: "Federal Court Forms",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/forms",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal court forms"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Court forms vary significantly by state, county, and court type. Forms are frequently updated; always use the most current version. Some jurisdictions have adopted e-filing systems with online form submission. Local rules may require specific forms beyond state-mandated ones. Federal court forms differ from state court forms.",
  },
};
