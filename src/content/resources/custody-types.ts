import type { ResourceQAContent } from "./types";

export const custodyTypes: ResourceQAContent = {
  slug: "custody-types",

  seo: {
    title: "Legal vs Physical Custody: What's the Difference? | Complete Guide",
    description:
      "Legal custody is decision-making authority for a child's welfare. Physical custody is where the child lives. Learn the differences and common custody arrangements.",
  },

  hero: {
    h1: "What's the difference between legal and physical custody?",
    subhead: "Understanding custody types and common arrangements in family law.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Legal custody refers to the right to make major decisions about a child's welfare (education, healthcare, religion). Physical custody refers to where the child lives and who provides day-to-day care. Both types can be sole or joint, and parents can have different arrangements for each type.",
  },

  sections: [
    {
      id: "legal-custody",
      heading: "Legal Custody",
      body: [
        {
          type: "p",
          text: "Legal custody is the authority to make significant decisions affecting the child's life:",
        },
        {
          type: "ul",
          items: [
            "Education: School choice, special education services, tutoring",
            "Healthcare: Medical treatment, therapy, medication, surgery",
            "Religion: Religious upbringing and practices",
            "Extracurricular activities: Sports, clubs, and other activities",
          ],
        },
        {
          type: "p",
          text: "Joint Legal Custody: Both parents share decision-making authority and must consult on major decisions. This is the most common arrangement when both parents are involved. Courts favor joint legal custody absent evidence of domestic violence or inability to cooperate.",
        },
        {
          type: "p",
          text: "Sole Legal Custody: One parent has exclusive decision-making authority. Granted when parents cannot communicate effectively or when one parent is absent or unfit. The other parent typically retains visitation rights.",
        },
      ],
    },
    {
      id: "physical-custody",
      heading: "Physical Custody",
      body: [
        {
          type: "p",
          text: "Physical custody determines where the child lives and who provides day-to-day care:",
        },
        {
          type: "ul",
          items: [
            "Daily routines and supervision",
            "Residence for school enrollment purposes",
            "Primary caretaker responsibilities",
            "Time spent in each parent's home",
          ],
        },
        {
          type: "p",
          text: "Joint Physical Custody: Child spends substantial time with both parents (not necessarily equal). Many variations exist: 60/40, 70/30, alternating weeks. Each parent provides daily care during their time. Requires cooperation on scheduling and logistics.",
        },
        {
          type: "p",
          text: "Sole Physical Custody: Child resides primarily with one parent. The other parent typically has visitation or parenting time. Often appropriate when parents live far apart.",
        },
      ],
    },
    {
      id: "common-combinations",
      heading: "Common Custody Combinations",
      body: [
        {
          type: "ul",
          items: [
            "Joint Legal and Joint Physical: Most common modern arrangement. Both parents share decision-making and child has substantial time with both. Requires parental cooperation.",
            "Joint Legal with Sole Physical: Both parents make major decisions together, but child lives primarily with one parent. Non-custodial parent has regular visitation schedule.",
            "Sole Legal and Sole Physical: Rare except in specific circumstances like domestic violence, abandonment, or parental unfitness. One parent has full decision-making and residential custody.",
          ],
        },
      ],
    },
    {
      id: "decision-making",
      heading: "Types of Decisions",
      body: [
        {
          type: "p",
          text: "Major Decisions (require consultation in joint legal custody):",
        },
        {
          type: "ul",
          items: [
            "Enrolling in or changing schools",
            "Non-emergency medical procedures",
            "Mental health treatment",
            "Participation in contact sports",
            "International travel",
          ],
        },
        {
          type: "p",
          text: "Day-to-Day Decisions (made by parent with physical custody at the time):",
        },
        {
          type: "ul",
          items: [
            "Bedtime and meal schedules",
            "Homework supervision",
            "Daily activities and playdates",
            "Minor medical care (cold medicine, bandages)",
            "Haircuts and clothing choices",
          ],
        },
      ],
    },
    {
      id: "factors-courts-consider",
      heading: "Factors Courts Consider",
      body: [
        {
          type: "p",
          text: "When determining custody arrangements, courts evaluate:",
        },
        {
          type: "ul",
          items: [
            "Child's best interests (primary consideration)",
            "Each parent's ability to provide care",
            "Child's relationship with each parent",
            "Parents' ability to cooperate and communicate",
            "Continuity and stability for the child",
            "Child's preference (when age-appropriate)",
            "History of domestic violence or substance abuse",
            "Distance between parents' homes",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "both-types-different",
        q: "Can I have one type of custody but not the other?",
        a: "Yes. It's common to have joint legal custody (shared decision-making) while one parent has sole physical custody (child lives primarily with them). The arrangements for legal and physical custody are independent.",
      },
      {
        id: "joint-mean-5050",
        q: "Does joint physical custody mean 50/50 time?",
        a: "No. Joint physical custody means the child spends substantial time with both parents, but it doesn't have to be exactly equal. Common arrangements include 60/40, 70/30, or alternating weeks.",
      },
      {
        id: "modify-later",
        q: "Can custody arrangements be modified later?",
        a: "Yes. Parents can request custody modifications by showing a substantial change in circumstances and that the change serves the child's best interests. Many states require waiting 1-2 years after the initial order before modifications can be requested.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA)",
        organization: "Uniform Law Commission",
        url: "https://www.uniformlaws.org/committees/community-home?CommunityKey=4c6bd37f-a1d0-4f0f-bf4d-aebaf6bd9a64",
        jurisdiction: "Multi-State",
        lastAccessed: "2026-02-16"
      },
      {
        title: "Child Custody and Visitation",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/child_custody/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16"
      },
      {
        title: "Family Law - Custody and Visitation",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/wex/custody",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA)",
        organization: "Uniform Law Commission",
        url: "https://www.uniformlaws.org/committees/community-home?CommunityKey=4c6bd37f-a1d0-4f0f-bf4d-aebaf6bd9a64",
        jurisdiction: "Multi-State",
        lastAccessed: "2026-02-16",
        note: "Model law adopted by all 50 states for interstate custody matters"
      },
      {
        title: "Child Custody and Visitation",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/child_custody/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
        note: "Legal definitions and standards for custody arrangements"
      },
      {
        title: "Family Law - Custody and Visitation",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/wex/custody",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-16",
        note: "Legal definitions of custody types and arrangements"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Custody terminology and arrangements vary by state. Some jurisdictions use 'parenting time' instead of 'custody' or 'visitation'. Check local family law for specific requirements.",
  },
};
