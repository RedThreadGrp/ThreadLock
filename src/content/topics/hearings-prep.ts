import { ResourceQAContent } from "../resources/types";

export const hearingsPrepTopic: ResourceQAContent = {
  slug: "hearings-prep",
  
  seo: {
    title: "Hearings & Courtroom Prep | ThreadLock Resources",
    description: "Walk in prepared, organized, and coherent under pressure. Learn what to bring, how to behave, and what to avoid in court."
  },
  
  hero: {
    h1: "Hearings & Courtroom Prep",
    subhead: "Walk in prepared, organized, and coherent under pressure."
  },
  
  shortAnswer: {
    text: "Walking into a courtroom as a self-represented litigant is intimidating. The judge has limited time, the opposing party may have an attorney, and you need to present facts clearly under pressure. Proper preparation—knowing what to bring, how to organize materials, what to say, and what to avoid—makes the difference between being heard and being dismissed."
  },
  
  sections: [
    {
      id: "what-is-a-hearing",
      heading: "What Is a Court Hearing?",
      body: [
        {
          type: "p",
          text: "A hearing is a formal proceeding where a judge listens to arguments, reviews evidence, and makes decisions about your case. Family law hearings cover temporary orders, child custody arrangements, support modifications, restraining orders, and trial preparation."
        },
        {
          type: "callout",
          kind: "note",
          title: "Important Distinction",
          text: "Unlike informal mediation, hearings follow strict procedural rules and create binding court orders."
        }
      ]
    },
    {
      id: "essential-preparation",
      heading: "Essential Preparation",
      body: [
        {
          type: "p",
          text: "**Documents**: Bring originals of all filed court papers, marked exhibits with tabs, your declaration, proof of service, and previous court orders. Have three copies of everything—one for the judge, one for the opposing party, and one for yourself."
        },
        {
          type: "p",
          text: "**Exhibits**: Pre-mark evidence with exhibit labels (letters for petitioner, numbers for respondent). Create a formal exhibit list describing each item. Use binders with tabs for organization. Bring originals if authenticity might be challenged."
        },
        {
          type: "p",
          text: "**Argument Outline**: Write a brief, organized outline of key points you want to make. Focus on facts, not emotions. Prepare questions for the opposing party if they'll testify. Practice your opening statement until it's clear and concise (2-3 minutes maximum)."
        },
        {
          type: "callout",
          kind: "tip",
          title: "Practical Items Checklist",
          text: "Bring a notepad, pens, calendar, calculator, and relevant statutes or case citations. Dress professionally—business attire shows respect for the court. Arrive 30 minutes early to check in and review materials."
        }
      ]
    },
    {
      id: "courtroom-behavior",
      heading: "Courtroom Behavior",
      body: [
        {
          type: "ul",
          items: [
            "Address the judge as 'Your Honor'",
            "Stand when speaking",
            "Listen carefully to questions and answer directly",
            "Don't interrupt the judge or opposing party",
            "Stay calm even if provoked—emotional outbursts damage your credibility",
            "Take notes during the hearing to reference in future filings"
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
          text: "Avoid these errors that can undermine your case:"
        },
        {
          type: "ul",
          items: [
            "**Arriving unprepared**: Showing up without organized exhibits, copies, or a clear plan makes you look disorganized and wastes the judge's time.",
            "**Rambling or emotional testimony**: Judges want facts, not feelings. Stick to relevant, specific information that supports your legal arguments.",
            "**Ignoring court orders to exchange information**: If you were ordered to share exhibits or witness lists beforehand and didn't, the judge may exclude your evidence.",
            "**Dressing inappropriately**: Casual or revealing clothing undermines your credibility. Treat court like a professional job interview.",
            "**Arguing with the opposing party**: Never speak directly to the other party during a hearing. Address all comments to the judge.",
            "**Bringing children**: Unless they're testifying or it's absolutely unavoidable, don't bring kids to hearings. It's stressful for them and distracting for the court.",
            "**Not having a backup plan**: Technology fails. Bring paper copies even if you plan to use a laptop or tablet."
          ]
        }
      ]
    }
  ],
  
  sources: {
    items: [
      {
        title: "Self-Representation Resources",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/selfrepresentation",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Courtroom Basics",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/selfhelp-courtroom.htm",
        jurisdiction: "California",
        lastAccessed: "2026-02-15"
      },
      {
        title: "How Courts Work",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/",
        lastAccessed: "2026-02-15"
      }
    ]
  },
  
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      {
        title: "Self-Representation Resources",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/selfrepresentation",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Courtroom Basics",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/selfhelp-courtroom.htm",
        jurisdiction: "California",
        lastAccessed: "2026-02-15"
      },
      {
        title: "How Courts Work",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/",
        lastAccessed: "2026-02-15"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Courtroom procedures and hearing formats vary by jurisdiction and case type. Check local court rules for specific requirements regarding exhibit exchanges, witness lists, and testimony procedures."
  }
};
