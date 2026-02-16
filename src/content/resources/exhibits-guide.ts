import { ResourcePage } from "@/types/content";

export const exhibitsGuide: ResourcePage = {
  contentVersion: 2,
  slug: "exhibits-guide",
  title: "Exhibits Guide: Labeling and Organization",
  excerpt: "How to label, organize, and present exhibits so they're clear and professional.",
  description: "Step-by-step guide for labeling court exhibits, creating exhibit lists, and organizing evidence for family court hearings.",
  
  blocks: {
    shortAnswer: "Use letters (A, B, C) for your exhibits. Label each page in the bottom right corner. Create an exhibit list that describes each item. Bring three copies: one for you, one for the judge, one for the opposing party.",
    
    sections: [
      {
        id: "why-exhibits-matter",
        heading: "Why Exhibits Matter",
        body: [
          {
            type: "p",
            text: "Exhibits are physical or digital evidence you present to the judge. Proper labeling and organization make your evidence easier to reference and harder to dispute. Without proper organization, even strong evidence can be dismissed or overlooked."
          }
        ]
      },
      {
        id: "labeling-format",
        heading: "How to Label Exhibits Properly",
        body: [
          {
            type: "p",
            text: "Most family courts expect a standard format:"
          },
          {
            type: "ul",
            items: [
              "**Your exhibits:** Letters (A, B, C, D, etc.)",
              "**Opposing party's exhibits:** Numbers (1, 2, 3, 4, etc.)",
              "**Label placement:** Bottom right corner of each page",
              "**Label size:** Clear and legible, typically 12-14pt font"
            ]
          },
          {
            type: "p",
            text: "**For multi-page exhibits:** If Exhibit A has 5 pages, label them as 'Exhibit A - Page 1 of 5', 'Exhibit A - Page 2 of 5', etc. This prevents pages from being misplaced or disputed."
          }
        ]
      },
      {
        id: "exhibit-list",
        heading: "Creating Your Exhibit List",
        body: [
          {
            type: "p",
            text: "An exhibit list is a table that describes each exhibit. It's typically filed with your motion or presented at the hearing."
          },
          {
            type: "p",
            text: "**Basic format:**"
          },
          {
            type: "ul",
            items: [
              "**Exhibit A:** Text messages between parties (03/15/2025 - 04/20/2025)",
              "**Exhibit B:** Bank statement showing missed payment (May 2025)",
              "**Exhibit C:** Email from opposing party re: custody (06/10/2025)"
            ]
          },
          {
            type: "p",
            text: "The Clerk of Court or local rules may have a specific exhibit list template. Check before creating your own."
          }
        ]
      },
      {
        id: "organizing-exhibits",
        heading: "Organizing Exhibits for Presentation",
        body: [
          {
            type: "p",
            text: "Choose one of two main approaches based on what makes your narrative clearer:"
          },
          {
            type: "ul",
            items: [
              "**Chronological Order:** Best for showing patterns over time or a sequence of events (January emails, February texts, March incident report)",
              "**Topic-Based Order:** Best for addressing multiple issues separately (Financial records, Custody communication, Medical documentation)"
            ]
          },
          {
            type: "p",
            text: "**Physical organization tips:** Use binder tabs for each exhibit, three-hole punch all documents, keep exhibits in order at all times, don't remove anything once assembled, and practice referencing exhibits before the hearing."
          }
        ]
      },
      {
        id: "what-to-bring",
        heading: "What to Bring to Court",
        body: [
          {
            type: "p",
            text: "**Minimum requirements:**"
          },
          {
            type: "ul",
            items: [
              "**Original exhibits** (for the judge)",
              "**Two complete copies** (one for opposing party, one for you)",
              "**Exhibit list** (3 copies)",
              "**Binder or folder** to keep everything organized",
              "**Case number and hearing date** clearly marked on the cover"
            ]
          },
          {
            type: "p",
            text: "Some judges require advance submission of exhibits. Check your local rules or the hearing notice for deadlines."
          }
        ]
      },
      {
        id: "common-mistakes",
        heading: "Common Labeling Mistakes to Avoid",
        body: [
          {
            type: "ul",
            items: [
              "**Using numbers instead of letters:** If you're the petitioner or moving party, stick with letters to avoid confusion",
              "**Inconsistent labeling:** Don't call something 'Exhibit A' in your motion and then 'Text Messages' in court",
              "**Missing page numbers:** Multi-page exhibits without page numbers are easy to dispute. Always use 'Page X of Y' format",
              "**Forgetting copies:** If you show up with only one copy, the judge may continue the hearing. Bring three sets minimum",
              "**Labeling after filing:** Label exhibits before you file your motion. Retroactive labeling creates confusion"
            ]
          }
        ]
      },
      {
        id: "state-variations",
        heading: "State-Specific Variations",
        body: [
          {
            type: "p",
            text: "This guide reflects common practices in U.S. family courts, but each jurisdiction has specific requirements:"
          },
          {
            type: "ul",
            items: [
              "Some courts require exhibit lists to be filed 48 hours before the hearing",
              "Some courts use color-coded labels (e.g., yellow for petitioner, blue for respondent)",
              "Some courts require electronic submission through an e-filing portal",
              "Some courts prohibit loose documents and require binding"
            ]
          },
          {
            type: "p",
            text: "**Always check:** Local Rules of Civil Procedure for your county, standing orders from your assigned judge, and any instructions in your hearing notice. When in doubt, call the Clerk of Court and ask for exhibit requirements."
          }
        ]
      }
    ],
    
    faqs: [
      {
        question: "What if I forgot to label exhibits before filing?",
        answer: "Contact the court clerk immediately. You may need to file amended exhibits with proper labels, or in some cases, you can bring properly labeled copies to the hearing. However, last-minute labeling can create confusion and may reflect poorly on your preparation. It's always better to label exhibits correctly the first time."
      },
      {
        question: "Can I use numbers for my exhibits instead of letters?",
        answer: "No, if you're the petitioner or moving party, you should use letters (A, B, C). Numbers are typically reserved for the responding party's exhibits. Using numbers can confuse the court record and make it harder to reference your evidence."
      },
      {
        question: "How many copies of exhibits do I need to bring?",
        answer: "Bring at least three complete sets: one original for the judge, one copy for the opposing party, and one for yourself. Some courts require additional copies for court staff or witnesses. Check your local rules or call the clerk's office to confirm the exact number needed."
      }
    ]
  },
  
  tag: "Court Prep",
  topic: "Hearings & Courtroom Prep",
  intent: "Urgent",
  readTime: "6 min read",
  status: "published",
  
  seoTitle: "Label Court Exhibits | Step-by-Step Guide | ThreadLock",
  metaDescription: "Label exhibits A, B, C in bottom right. Bring 3 copies. Create exhibit list. Step-by-step guide for organizing exhibits in family court.",
  dateModified: "2026-02-13",
  
  relatedLinks: [
    { title: "Hearing Tomorrow Checklist", href: "/resources/hearing-tomorrow" },
    { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
    { title: "Official Court Portals by State", href: "/resources/official-portals" },
  ],
  
  relatedQuestions: [
    { question: "How do I authenticate text messages for court?", href: "/resources/authentication" },
    { question: "What if I forgot to label exhibits before filing?", href: "/resources/filing-basics" },
    { question: "Can I add exhibits after the hearing starts?", href: "/resources/courtroom-prep" },
  ],
  
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      { 
        title: "Federal Rules of Evidence",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Authentication and exhibit admission standards"
      },
      { 
        title: "Federal Rules of Evidence",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/rules/fre",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Complete text with annotations"
      },
      { 
        title: "Court Procedures",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/",
        lastAccessed: "2026-02-16",
        note: "Evidence presentation and exhibit preparation guidance"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Exhibit requirements vary significantly by jurisdiction. Some courts have specific color-coding, numbering systems, or electronic filing requirements. Always verify with your local court rules and clerk's office."
  }
};
