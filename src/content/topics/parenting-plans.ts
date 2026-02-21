import { ResourceQAContent } from "../resources/types";

export const parentingPlansTopic: ResourceQAContent = {
  slug: "parenting-plans",
  
  seo: {
    title: "Parenting Plans | ThreadLock Resources",
    description: "Structure routines, transitions, and communication clearly. Learn how to create effective parenting plans that reduce conflict and provide predictability."
  },
  
  hero: {
    h1: "Parenting Plans",
    subhead: "Structure routines, transitions, and communication clearly."
  },
  
  shortAnswer: {
    text: "A parenting plan is a detailed written agreement that describes how you and the other parent will share time, responsibilities, and decision-making for your children. Courts require parenting plans in custody cases because vague arrangements lead to constant disputes. A well-crafted plan reduces conflict, provides predictability for children, and gives you a framework for enforcement when problems arise."
  },
  
  sections: [
    {
      id: "core-components",
      heading: "Core Components of a Parenting Plan",
      body: [
        {
          type: "p",
          text: "**Regular Schedule**: Define where the child lives during normal weeks. Be specific: 'Child resides with Mother Monday 6pm through Thursday 8am, with Father Thursday 8am through Monday 6am.' Include school nights and weekends."
        },
        {
          type: "p",
          text: "**Holidays and Special Days**: List which parent gets which holidays (Thanksgiving, Christmas, spring break, etc.). Specify whether you alternate yearly or split the day. Include birthdays, Mother's Day, Father's Day, and religious holidays."
        },
        {
          type: "p",
          text: "**Summer and School Breaks**: Address extended time during summer vacation, winter break, and spring break. Specify how parents communicate vacation plans and deadlines for notice."
        },
        {
          type: "callout",
          kind: "note",
          title: "Decision-Making Authority",
          text: "Clarify who makes major decisions about education, non-emergency healthcare, religious upbringing, and extracurricular activities. Options include joint decision-making, sole authority, or split domains (e.g., one parent decides education, the other decides medical)."
        },
        {
          type: "p",
          text: "**Communication and Exchanges**: Describe how parents will communicate about the child (phone, email, co-parenting app). Specify exchange locations (home, school, public place), times, and who's responsible for transportation."
        },
        {
          type: "p",
          text: "**Right of First Refusal**: If one parent can't care for the child during their scheduled time, does the other parent get first option before using a babysitter? Specify the timeframe (e.g., 'if absence exceeds 4 hours')."
        }
      ]
    },
    {
      id: "flexibility-vs-specificity",
      heading: "Flexibility vs. Specificity",
      body: [
        {
          type: "p",
          text: "Parenting plans must balance flexibility with clarity. Courts want specific schedules, but you also need mechanisms for changes."
        },
        {
          type: "callout",
          kind: "tip",
          title: "Include Modification Provisions",
          text: "Include provisions for modifying the plan by mutual written agreement, handling emergencies, and resolving disputes (e.g., mediation before going back to court)."
        }
      ]
    },
    {
      id: "common-mistakes",
      heading: "Common Mistakes",
      body: [
        {
          type: "p",
          text: "Avoid these errors that can undermine your parenting plan:"
        },
        {
          type: "ul",
          items: [
            "**Being too vague**: 'Reasonable visitation' or 'flexible schedule' invites constant arguments. Specify exact days and times.",
            "**Ignoring logistics**: Failing to address who drives, where exchanges happen, or how parents communicate creates daily friction.",
            "**Overcomplicating exchanges**: Complex schedules confuse children and increase conflict. Simpler is usually better, especially for young children.",
            "**Not planning for holidays years in advance**: Alternating holidays prevents annual fights. Specify even/odd years clearly.",
            "**Forgetting about school activities and extracurriculars**: Address who can sign kids up for activities, how costs are split, and whether the other parent's schedule must be accommodated.",
            "**Excluding a modification process**: Circumstances change. Include language about how you'll modify the plan (mutual agreement in writing, mediation, court petition).",
            "**Using the plan to punish the other parent**: Parenting plans should prioritize children's needs, not your desire for control. Unnecessarily restrictive provisions backfire.",
            "**Not addressing technology and communication**: Modern parenting plans should cover video calls, phone access, and social media (who can post photos of children, etc.)."
          ]
        }
      ]
    }
  ],
  
  sources: {
    items: [
      {
        title: "Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA)",
        organization: "Uniform Law Commission",
        url: "https://www.uniformlaws.org/",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Parenting Plan Guidelines",
        organization: "American Academy of Matrimonial Lawyers",
        url: "https://www.aaml.org/",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Family Court Resources",
        organization: "Association of Family and Conciliation Courts",
        url: "https://www.afccnet.org/",
        lastAccessed: "2026-02-15"
      }
    ]
  },
  
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      {
        title: "Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA)",
        organization: "Uniform Law Commission",
        url: "https://www.uniformlaws.org/",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Parenting Plan Guidelines",
        organization: "American Academy of Matrimonial Lawyers",
        url: "https://www.aaml.org/",
        lastAccessed: "2026-02-15"
      },
      {
        title: "Family Court Resources",
        organization: "Association of Family and Conciliation Courts",
        url: "https://www.afccnet.org/",
        lastAccessed: "2026-02-15"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Parenting plan requirements and enforcement mechanisms vary by state. Some states require specific formats or court-approved templates. Consult local family law rules."
  }
};
