// file: src/content/resources/timeline-tools.ts
// V2 structured content for timeline-tools resource

import type { ResourcePage } from "../resourcesRegistry";

export const timelineTools: ResourcePage = {
  contentVersion: 2,
  blocks: {
    shortAnswer: "Create a table or spreadsheet with these columns: Date, Event Description, Evidence, Witnesses. List events in chronological order. Include only facts relevant to the legal issues in your case. Link each event to supporting evidence.",
    sections: [
      {
        id: "why-timelines-matter",
        heading: "Why Timelines Matter in Family Court",
        body: [
          {
            type: "p",
            text: "Judges hear dozens of cases. A clear timeline saves time by presenting facts in order, shows patterns of behavior over time, provides context for isolated incidents, and helps evaluate credibility by cross-referencing dates with evidence."
          },
          {
            type: "p",
            text: "Creating a timeline forces you to organize scattered evidence into a coherent narrative, identify gaps in your documentation, focus on relevant facts instead of emotional reactions, and prepare for cross-examination by knowing your dates."
          },
          {
            type: "p",
            text: "Timelines are especially important in custody disputes, contempt actions, and cases involving patterns of behavior (e.g., missed visitation, financial misconduct)."
          }
        ]
      },
      {
        id: "basic-timeline-structure",
        heading: "How to Organize Events Chronologically",
        body: [
          {
            type: "p",
            text: "Start with a basic table containing these minimum required columns: Date, Event, Evidence, and Witness. List events chronologically starting with the oldest."
          },
          {
            type: "p",
            text: "Depending on your case, you may also include: Time of day (for events where timing matters), Location (for incidents at specific places), Impact on child (for custody cases), Financial amount (for support or property cases), and Notes (brief context or explanation)."
          },
          {
            type: "p",
            text: "Start with a complete list, then remove irrelevant events, highlight key events that support your claims, and group related events if presenting thematically. Don't overwhelm the judge with every minor detail."
          }
        ]
      },
      {
        id: "what-details-to-include",
        heading: "What Details to Include",
        body: [
          {
            type: "p",
            text: "Be specific with dates, times, and facts. Instead of saying 'Opposing party was late,' say 'On March 5, 2025, opposing party was scheduled to pick up child at 3:00 PM per the parenting plan. They arrived at 6:45 PM without prior notice, causing child to miss dinner and homework time.'"
          },
          {
            type: "p",
            text: "Focus on the legally relevant facts: the obligation, the breach, and the impact. Avoid emotional language and unnecessary background details."
          },
          {
            type: "p",
            text: "For every event, note the corresponding exhibit or evidence that proves it happened: 'See Exhibit A (text messages),' 'See Exhibit B (bank statement),' 'Recorded call (audio file submitted),' or 'Witnessed by [Name].'"
          },
          {
            type: "p",
            text: "If you don't have evidence for an event, note that too: 'No documentation available.' You can still include the event if you plan to testify about it, but understand it's less persuasive without corroboration."
          }
        ]
      },
      {
        id: "digital-vs-paper",
        heading: "Digital vs. Paper Timelines",
        body: [
          {
            type: "p",
            text: "Digital timelines using spreadsheets (Excel, Google Sheets), timeline software (Timetoast, Preceden, Aeon Timeline), or case management software (Clio, MyCase) offer easy updates, sorting, filtering, and linking to digital evidence. However, they require technology and must be printed for court anyway."
          },
          {
            type: "p",
            text: "Paper timelines (printed tables, handwritten charts, or binders with tabs) require no technology, are easy for judges to flip through, and can be annotated during hearings. However, they're hard to update or reorganize and cannot be searched or filtered."
          },
          {
            type: "p",
            text: "Best practice: Create digitally, print for court. Bring both the printed timeline and your digital version (on tablet or laptop) so you can reference either."
          }
        ]
      },
      {
        id: "linking-evidence",
        heading: "Linking Evidence to Timeline Events",
        body: [
          {
            type: "p",
            text: "Each timeline entry should reference a specific exhibit or piece of evidence. This allows the judge to read the timeline entry, quickly locate the supporting evidence, and verify the date and content."
          },
          {
            type: "p",
            text: "Some litigants organize exhibits in chronological order to match the timeline. This works well for simple cases with a clear narrative arc. For more complex cases, organize exhibits by topic and use clear cross-references in your timeline."
          },
          {
            type: "p",
            text: "If you're missing evidence for key events, note the gap in your timeline, explain why evidence doesn't exist, use witness testimony to fill in gaps when possible, and never fabricate evidence or dates. Judges understand that not every event is documented."
          }
        ]
      },
      {
        id: "presenting-in-court",
        heading: "Presenting Timelines in Court",
        body: [
          {
            type: "p",
            text: "Before the hearing: File your timeline as part of your motion or pre-trial submissions (if required by local rules), bring extra copies (one for the judge, one for opposing party, one for yourself), and reference your timeline in your written arguments."
          },
          {
            type: "p",
            text: "During the hearing: Introduce the timeline as an exhibit or demonstrative aid, walk the judge through key entries (don't read the entire timeline aloud), use it to refresh your memory when testifying, and reference it during cross-examination to challenge inconsistencies."
          },
          {
            type: "p",
            text: "The opposing party may object to your timeline as hearsay, unsworn testimony, or argumentative. Respond by explaining that the timeline is a demonstrative aid to organize evidence, not substantive evidence itself, and that each entry is supported by exhibits or testimony. Be prepared to authenticate each entry."
          },
          {
            type: "p",
            text: "Important: Local rules on timelines and demonstrative aids vary. Some courts require timelines to be filed 48 hours before the hearing, some limit timeline length, some prohibit timelines that contain argument, and some allow timelines as sworn affidavits. Always check local rules and standing orders."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What if I don't have evidence for every event?",
        answer: "Note the gap in your timeline ('No documentation available'), explain why if possible ('Incident occurred before parties had smartphones'), and use witness testimony to fill in gaps when possible. Judges understand that not every event is documented. Credible testimony can still carry weight, though it's less persuasive without corroboration."
      },
      {
        question: "Can I use a timeline instead of testimony?",
        answer: "No, timelines are demonstrative aids that organize your evidence, not substantive evidence themselves. You still need to testify under oath to authenticate each entry, though you can use the timeline to refresh your memory and reference events during testimony. The timeline helps present your case clearly but doesn't replace sworn testimony."
      },
      {
        question: "How far back should my timeline go?",
        answer: "Include events that are relevant to the legal issues in your case. For custody disputes, include the past 6-12 months at minimum, or longer if there's a pattern of behavior. For contempt actions, focus on the specific time period covered by the court order. Don't include irrelevant ancient history that doesn't support your current claims."
      }
    ]
  },
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      { name: "Legal Aid Organizations", href: "https://www.lsc.gov/what-legal-aid/find-legal-aid" },
      { name: "Court Self-Help Portals", href: "https://www.courts.ca.gov/selfhelp.htm" },
      { name: "State Bar Practice Guides" }
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Timeline requirements vary by court. Check local rules on demonstrative aids and pre-trial submissions."
  }
};
