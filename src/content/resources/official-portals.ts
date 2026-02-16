import { ResourcePage } from "@/types/content";

export const officialPortals: ResourcePage = {
  contentVersion: 2,
  blocks: {
    shortAnswer: "State courts provide forms for free. Use official .gov websites, not sites that charge for access. Federal courts: uscourts.gov/forms. State courts: search '[Your State] courts self-help' for free forms, instructions, and local rules.",
    sections: [
      {
        id: "federal-courts",
        heading: "Federal Courts",
        body: [
          {
            type: "p",
            text: "**PACER (Public Access to Court Electronic Records):** https://pacer.uscourts.gov/ - Access federal court documents and case information."
          },
          {
            type: "p",
            text: "**U.S. Courts Forms:** https://www.uscourts.gov/forms - Free federal court forms."
          }
        ]
      },
      {
        id: "major-state-portals",
        heading: "State Court Portals (Major States)",
        body: [
          {
            type: "p",
            text: "**California:** California Courts Self-Help (https://www.courts.ca.gov/selfhelp.htm) and Forms (https://www.courts.ca.gov/forms.htm) - Family law forms, instructions, local court websites."
          },
          {
            type: "p",
            text: "**Texas:** Texas Courts Online (https://www.txcourts.gov/) and Texas Law Help (https://texaslawhelp.org/) - Free forms and legal information."
          },
          {
            type: "p",
            text: "**Florida:** Florida Courts Self-Help (https://www.flcourts.gov/Resources-Services/Court-Improvement/Family-Courts/Family-Law-Self-Help-Information) - Comprehensive family law forms and instructions."
          },
          {
            type: "p",
            text: "**New York:** NY Courts DIY Forms (https://www.nycourts.gov/courthelp/DIY/index.shtml) - Interactive forms for family court."
          },
          {
            type: "p",
            text: "**Illinois:** Illinois Courts Self-Help (https://www.illinoiscourts.gov/self-help/) - Forms and instructional materials."
          },
          {
            type: "p",
            text: "**Pennsylvania:** PA Courts Self-Help (https://www.pacourts.us/learn/self-help) - Family law resources and forms."
          },
          {
            type: "p",
            text: "**Ohio:** Ohio Supreme Court Forms (https://www.supremecourt.ohio.gov/JCS/domesticViolence/forms/) - Domestic relations and family law forms."
          },
          {
            type: "p",
            text: "**Georgia:** Georgia Legal Aid (https://www.georgialegalaid.org/) - Free forms and self-help resources."
          },
          {
            type: "p",
            text: "**North Carolina:** NC Courts Self-Help (https://www.nccourts.gov/help-topics/family-and-children) - Family court forms and information."
          },
          {
            type: "p",
            text: "**Michigan:** Michigan Legal Help (https://michiganlegalhelp.org/) - DIY divorce and family law tools."
          }
        ]
      },
      {
        id: "what-to-look-for",
        heading: "What to Look For",
        body: [
          {
            type: "p",
            text: "When you find your state's court website:"
          },
          {
            type: "ul",
            items: [
              "**Official domain:** Usually ends in .gov or .us",
              "**Free access:** State-provided forms are free",
              "**Current forms:** Check the revision date",
              "**Local rules:** Download your specific county's rules",
              "**Filing instructions:** Most sites include step-by-step guides",
              "**Fee waiver forms:** If you can't afford filing fees"
            ]
          }
        ]
      },
      {
        id: "red-flags",
        heading: "Red Flags (Scam Sites)",
        body: [
          {
            type: "ul",
            items: [
              "Charges for \"access\" to forms",
              "Promises to \"file for you\" for a fee (unless they're a real attorney)",
              "No .gov domain",
              "Outdated forms",
              "Generic advice not specific to your state"
            ]
          }
        ]
      },
      {
        id: "local-court-websites",
        heading: "Local Court Websites",
        body: [
          {
            type: "p",
            text: "After finding state resources, search for: \"[Your County] [Your State] court website\""
          },
          {
            type: "p",
            text: "Local court sites often have specific judges' preferences, local filing procedures, court calendars, e-filing portals, and contact information for clerk's office."
          }
        ]
      },
      {
        id: "legal-aid",
        heading: "Legal Aid Organizations",
        body: [
          {
            type: "p",
            text: "If you can't find what you need:"
          },
          {
            type: "p",
            text: "**National:** Legal Services Corporation (https://www.lsc.gov/what-legal-aid/find-legal-aid) - Find free or low-cost legal help in your area."
          },
          {
            type: "p",
            text: "**State-Specific:** Search \"[Your State] legal aid\" - Most states have multiple legal aid organizations with income limits."
          },
          {
            type: "p",
            text: "**Caution:** These portals provide forms and information, not legal advice. Using the right form doesn't guarantee the right outcome. When in doubt, consult with a licensed attorney in your jurisdiction. Don't rely on out-of-state forms—rules vary significantly."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "Why do some sites charge for forms that are free on government websites?",
        answer: "Scam sites charge for \"access\" to forms that your state provides for free. They often look professional and rank highly in search results, but they're just reselling free public documents. Always use official .gov sources."
      },
      {
        question: "Can I use forms from a different state?",
        answer: "No. Court rules and form requirements vary significantly by state. Using out-of-state forms can result in rejected filings or procedural errors. Always use your specific state's official forms."
      },
      {
        question: "What if my county has different forms than the state website?",
        answer: "Local courts often have additional local rules and modified forms. After finding state resources, search for your specific county's court website. Local court sites have judges' preferences, local filing procedures, and county-specific forms. Use local forms when available."
      }
    ]
  },
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      { 
        title: "Forms",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/forms",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal court forms and resources"
      },
      { 
        title: "State Court Websites",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/information-and-resources/state-court-websites",
        lastAccessed: "2026-02-16",
        note: "Directory of official state court websites"
      },
      { 
        title: "Find Legal Aid",
        organization: "Legal Services Corporation",
        url: "https://www.lsc.gov/what-legal-aid/find-legal-aid",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federally funded legal aid locator"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 90,
    accuracyNotes: "Court websites and form availability vary by state. Always verify current forms with your local court."
  }
};
