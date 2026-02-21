import { ResourceQAContent } from "../resources/types";

export const evidenceExhibitsTopic: ResourceQAContent = {
  slug: "evidence-exhibits",
  
  seo: {
    title: "Evidence & Exhibits | ThreadLock Resources",
    description: "Capture, preserve, and organize records that are usable in court. Learn how to handle text messages, emails, photos, and financial documents."
  },
  
  hero: {
    h1: "Evidence & Exhibits",
    subhead: "Capture, preserve, and organize records that are usable in court."
  },
  
  shortAnswer: {
    text: "Raw evidence means nothing if you can't find it when you need it, authenticate it properly, or present it clearly to a judge. Family court cases often hinge on documentary evidence—text messages, emails, photos, financial records, and written communications. Understanding how to capture, preserve, organize, and label evidence is essential for self-represented litigants."
  },
  
  sections: [
    {
      id: "what-are-evidence-and-exhibits",
      heading: "What Are Evidence and Exhibits?",
      body: [
        {
          type: "p",
          text: "**Evidence** is information presented to prove or disprove facts in your case. In family law, this typically includes text messages, emails, photos, financial documents, medical records, school reports, and written agreements."
        },
        {
          type: "p",
          text: "**Exhibits** are specific pieces of evidence formally marked and presented to the court. During hearings, you'll reference 'Exhibit A' or 'Exhibit 1' rather than fumbling through stacks of papers. Proper labeling makes your evidence accessible and credible."
        }
      ]
    },
    {
      id: "capturing-and-preserving-evidence",
      heading: "Capturing and Preserving Evidence",
      body: [
        {
          type: "callout",
          kind: "tip",
          title: "Text Messages and Emails",
          text: "Take full screenshots showing timestamps, phone numbers, and complete conversation threads. Don't crop or edit—authenticity is crucial. Save original files with metadata intact."
        },
        {
          type: "p",
          text: "For **photos**, capture images immediately with timestamps and location data enabled. Document the context of what you're photographing."
        },
        {
          type: "p",
          text: "For **financial records**, collect pay stubs, bank statements, tax returns, and receipts systematically. Keep both electronic and paper copies. Organize chronologically and by category (income, expenses, assets, debts)."
        }
      ]
    },
    {
      id: "organizing-and-labeling-exhibits",
      heading: "Organizing and Labeling Exhibits",
      body: [
        {
          type: "p",
          text: "Standard convention assigns **letters (A, B, C)** to plaintiff/petitioner exhibits and **numbers (1, 2, 3)** to defendant/respondent exhibits."
        },
        {
          type: "ul",
          items: [
            "Create an exhibit list that includes each designation, a brief description, page count, and relevant dates",
            "Use adhesive exhibit stickers or colored tabs on physical documents",
            "Include exhibit labels in PDF bookmarks for electronic filings",
            "Keep exhibits in order and easy to access during hearings"
          ]
        }
      ]
    },
    {
      id: "common-mistakes",
      heading: "Common Mistakes",
      body: [
        {
          type: "p",
          text: "Avoid these critical errors when handling evidence:"
        },
        {
          type: "ul",
          items: [
            "**Not preserving metadata**: Cropped screenshots or edited photos lose credibility. Keep original files with complete metadata intact.",
            "**Poor organization**: Dumping 200 unsorted text messages on a judge doesn't help your case. Organize chronologically and highlight key messages.",
            "**Missing authentication**: Courts require you to authenticate evidence—proving it's what you claim it is. Include declarations explaining the source and chain of custody.",
            "**Wrong labeling conventions**: Using numbers when you should use letters, or skipping exhibit lists entirely, creates confusion and wastes court time.",
            "**Bringing only one copy**: Always bring three copies of each exhibit—one for the judge, one for the opposing party, and one for yourself.",
            "**Forgetting relevance**: Not all evidence is admissible. Make sure each exhibit directly relates to issues in your case and isn't just emotional clutter."
          ]
        }
      ]
    }
  ],
  
  sources: {
    items: [
      {
        title: "Federal Rules of Evidence",
        organization: "Legal Information Institute - Cornell Law School",
        url: "https://www.law.cornell.edu/rules/fre",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-15"
      },
      {
        title: "California Evidence Code",
        organization: "California Legislative Information",
        url: "https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=EVID",
        jurisdiction: "California",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Court Evidence Guidelines",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        lastAccessed: "2026-02-15"
      }
    ]
  },
  
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      {
        title: "Federal Rules of Evidence",
        organization: "Legal Information Institute - Cornell Law School",
        url: "https://www.law.cornell.edu/rules/fre",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-15"
      },
      {
        title: "California Evidence Code",
        organization: "California Legislative Information",
        url: "https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=EVID",
        jurisdiction: "California",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Court Evidence Guidelines",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/",
        lastAccessed: "2026-02-15"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Evidence rules vary by jurisdiction. Hearsay exceptions, authentication requirements, and admissibility standards differ between states and between civil and criminal proceedings."
  }
};
