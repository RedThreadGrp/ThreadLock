import type { ResourceQAContent } from "./types";

export const parentingTimeCalculations: ResourceQAContent = {
  slug: "parenting-time-calculations",

  seo: {
    title: "Understanding Parenting Time Calculations | Overnight Counting Guide",
    description:
      "Calculate overnights, holidays, and summer schedules accurately. Learn how courts count parenting time and determine custody percentages.",
  },

  hero: {
    h1: "Understanding Parenting Time Calculations",
    subhead: "How to accurately calculate overnights, holidays, and custody percentages.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Parenting time calculations determine the percentage of time each parent has with the children by counting overnights throughout the year. An overnight is typically counted for the parent who has the child when they wake up in the morning. The calculation is: (Your overnights ÷ 365) × 100 = Your percentage.",
  },

  sections: [
    {
      id: "why-overnight-calculations-matter",
      heading: "Why Overnight Calculations Matter",
      body: [
        {
          type: "p",
          text: "Courts often use overnight counts to:",
        },
        {
          type: "ul",
          items: [
            "Calculate child support obligations",
            "Determine physical custody percentages",
            "Assess whether custody is sole or shared",
            "Evaluate parenting plan effectiveness",
          ],
        },
      ],
    },
    {
      id: "how-courts-count-overnights",
      heading: "How Courts Count Overnights",
      body: [
        {
          type: "p",
          text: "An overnight is typically counted for the parent who has the child when they wake up in the morning. Some courts also count:",
        },
        {
          type: "ul",
          items: [
            "The location where the child goes to sleep",
            "Which parent has the child the majority of the day",
            "The parent responsible for getting the child to school",
          ],
        },
      ],
    },
    {
      id: "calculating-percentage",
      heading: "Calculating Percentage of Parenting Time",
      body: [
        {
          type: "p",
          text: "Basic calculation: (Your overnights ÷ 365 days) × 100 = Your percentage",
        },
        {
          type: "p",
          text: "Example:",
        },
        {
          type: "ul",
          items: [
            "Parent A: 183 overnights = 50.1%",
            "Parent B: 182 overnights = 49.9%",
          ],
        },
      ],
    },
    {
      id: "holiday-vacation-calculations",
      heading: "Holiday and Vacation Calculations",
      body: [
        {
          type: "p",
          text: "Include special provisions:",
        },
        {
          type: "ul",
          items: [
            "Alternate major holidays (Thanksgiving, Christmas, spring break)",
            "Summer vacation blocks (often 1-4 weeks per parent)",
            "Three-day weekends",
            "School breaks and teacher workdays",
          ],
        },
        {
          type: "p",
          text: "Count all overnights, including holidays, in your annual total.",
        },
      ],
    },
    {
      id: "common-schedules",
      heading: "Common Parenting Time Schedules",
      body: [
        {
          type: "p",
          text: "2-2-3 Schedule: Children switch homes every 2-3 days. Results in approximately 50/50 split.",
        },
        {
          type: "p",
          text: "Every Other Weekend: One parent has weekends (Friday-Monday), other has weekdays. Results in approximately 70/30 or 80/20 split.",
        },
        {
          type: "p",
          text: "Week On/Week Off: Children alternate full weeks with each parent. Results in 50/50 split.",
        },
        {
          type: "p",
          text: "3-4-4-3 Schedule: Children spend 3 days with Parent A, 4 days with Parent B, then reverse. Results in 50/50 split.",
        },
      ],
    },
    {
      id: "custody-thresholds",
      heading: "Custody Thresholds and Labels",
      body: [
        {
          type: "p",
          text: "Different states use different thresholds:",
        },
        {
          type: "ul",
          items: [
            "Sole Physical Custody: Typically one parent has 70% or more of overnights",
            "Shared Physical Custody: Generally when each parent has 30-70% of overnights",
            "Joint Physical Custody: Often requires at least 35-40% for each parent (varies by state)",
          ],
        },
        {
          type: "p",
          text: "These labels can affect child support calculations significantly.",
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "daytime-hours",
        q: "Do daytime hours count toward parenting time?",
        a: "Generally, only overnights count for custody percentage calculations. However, significant daytime care (like having the child after school until bedtime) can factor into child support calculations in some states. Check your state's specific guidelines.",
      },
      {
        id: "what-if-50-50",
        q: "What if we have exactly 50/50 parenting time?",
        a: "True 50/50 splits are possible with schedules like week-on/week-off. If one parent has 183 overnights and the other 182 (in non-leap years), courts may still consider this effectively equal. The small difference usually doesn't affect custody designation.",
      },
      {
        id: "change-percentage",
        q: "Can I change the parenting time percentage later?",
        a: "Yes, but you'll need to show a material change in circumstances and that the modification is in the child's best interest. Document actual parenting time if it differs from the court order to support a modification request.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Child Custody and Parenting Time",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/family_law/resources/",
        lastAccessed: "2026-02-16",
        note: "Parenting time calculation standards and best practices"
      },
      {
        title: "Child Support Guidelines",
        organization: "National Conference of State Legislatures",
        url: "https://www.ncsl.org/research/human-services/child-support-guidelines.aspx",
        lastAccessed: "2026-02-16",
        note: "State custody thresholds and support impacts"
      },
      {
        title: "Family Court Self-Help",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/family/child-support/state-links",
        lastAccessed: "2026-02-16",
        note: "State-specific parenting plan resources"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Family Law Resources",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/family_law/resources/",
        lastAccessed: "2026-02-16",
        note: "Parenting time calculation methods"
      },
      {
        title: "Child Support Guidelines",
        organization: "National Conference of State Legislatures",
        url: "https://www.ncsl.org/research/human-services/child-support-guidelines.aspx",
        lastAccessed: "2026-02-16",
        note: "Custody thresholds and support impacts"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Parenting time calculation methods, custody thresholds, and terminology vary significantly by state. Some states count daytime hours, others only overnights. Custody labels (sole, shared, joint) have different definitions by jurisdiction. Child support formulas incorporate parenting time differently. Always check your state's specific family law statutes and child support guidelines.",
  },
};
