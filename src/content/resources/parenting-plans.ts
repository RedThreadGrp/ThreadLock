import { ResourcePage } from "@/types/content";

export const parentingPlans: ResourcePage = {
  contentVersion: 2,
  blocks: {
    shortAnswer: "A parenting plan details how you'll share time and decisions with your child. Courts want specificity: regular schedules, holidays, decision-making authority, communication methods, and exchange logistics.",
    sections: [
      {
        id: "core-components",
        heading: "Core Components",
        body: [
          {
            type: "p",
            text: "Every parenting plan should address:"
          },
          {
            type: "ol",
            items: [
              "**Regular Schedule** - Where the child lives on normal weeks",
              "**Holidays** - Who gets which holidays, how you split them",
              "**Summer/Breaks** - Extended time during school vacations",
              "**Decision-Making** - Who decides on school, medical, religious issues",
              "**Communication** - How parents communicate about the child",
              "**Exchanges** - Where/when/how you hand off the child",
              "**Transportation** - Who drives, who pays",
              "**Right of First Refusal** - If one parent can't watch the child, does the other parent get first option?"
            ]
          }
        ]
      },
      {
        id: "regular-schedule-examples",
        heading: "Regular Schedule Examples",
        body: [
          {
            type: "p",
            text: "**Week On/Week Off:** Child stays with Parent A for 7 days. Exchanges every Monday at 6pm at Parent B's home. Simple, works well for older kids, requires flexibility."
          },
          {
            type: "p",
            text: "**2-2-3 Schedule:** Parent A gets Mon-Tue, Parent B gets Wed-Thu, alternating Fri-Sat-Sun. More frequent contact, better for younger kids."
          },
          {
            type: "p",
            text: "**Every Other Weekend:** Parent A gets Mon-Fri every week. Parent B gets Fri 6pm to Sun 6pm every other weekend, plus one weeknight dinner. Traditional schedule, less disruption to school routine."
          }
        ]
      },
      {
        id: "holiday-strategies",
        heading: "Holiday Split Strategies",
        body: [
          {
            type: "p",
            text: "**Alternating by Year:** Parent A gets Thanksgiving in odd years, Parent B in even years. Reverse for Christmas."
          },
          {
            type: "p",
            text: "**Split Each Holiday:** Christmas Eve with one parent, Christmas Day with the other. Switch who gets which half each year."
          },
          {
            type: "p",
            text: "**Fixed Assignment:** One parent always gets 4th of July, other always gets Labor Day. Works if you each have strong preferences for specific holidays."
          }
        ]
      },
      {
        id: "decision-making",
        heading: "Decision-Making Authority",
        body: [
          {
            type: "p",
            text: "**Joint Legal Custody:** Both parents must agree on major decisions including school enrollment and changes, non-emergency medical treatment, religious upbringing, and extracurricular activities requiring significant time/money."
          },
          {
            type: "p",
            text: "**Sole Legal Custody:** One parent makes all major decisions, though good practice is still to consult the other."
          },
          {
            type: "p",
            text: "**Tie-Breaker Provisions:** If you can't agree, options include mediation required before court, specific professional decides (pediatrician for medical, etc.), or status quo continues until resolved."
          }
        ]
      },
      {
        id: "communication-guidelines",
        heading: "Communication Guidelines",
        body: [
          {
            type: "p",
            text: "Be specific about method (text, email, phone, co-parenting app), response time (within 24 hours for routine, immediately for emergencies), topics (child-related only, not personal issues), and tone (business-like, no profanity or accusations)."
          },
          {
            type: "p",
            text: "Example clause: \"All routine communication about the child shall be via the OurFamilyWizard app. Emergency communication may be by phone call. Parents shall respond to routine messages within 24 hours. All communication shall remain respectful and child-focused.\""
          }
        ]
      },
      {
        id: "exchange-logistics",
        heading: "Exchange Logistics",
        body: [
          {
            type: "p",
            text: "Specify exact location (address, parking lot, public place), exact time, who is responsible for transportation, what happens if someone is late (grace period?), what to do if child is sick, and what the child should bring (clothes, medications, homework)."
          },
          {
            type: "p",
            text: "Example: \"Exchanges shall occur at the parking lot of City Library, 123 Main St. The receiving parent shall arrive by 6:00pm. If the delivering parent is more than 15 minutes late without notice, the receiving parent may leave. Each parent shall ensure the child has sufficient clothing, medications, and school materials.\""
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What is right of first refusal and should I include it?",
        answer: "If one parent can't care for the child for more than X hours, the other parent gets first chance before a babysitter. Pros: Maximizes child's time with parents. Cons: Can create conflict, complicates scheduling. Example: 'If either parent will be unable to care for the child for more than 4 consecutive hours during their parenting time, that parent shall first offer the other parent the opportunity to care for the child before arranging alternate childcare.'"
      },
      {
        question: "How specific should the parenting plan be?",
        answer: "Very specific. Avoid vague timing like 'Parent B gets weekends' (which weekends? what times?). Include exact times, locations, and procedures. A good parenting plan is boring, predictable, and specific—you should be able to explain it to a third party in 2 minutes."
      },
      {
        question: "How do I test if my parenting plan will actually work?",
        answer: "Before finalizing, ask: Does this work with work schedules and school? Can I explain this to a third party in 2 minutes? What happens if someone moves or remarries? Is this genuinely in the child's best interest, or am I trying to 'win'? If expenses exceed reality, rethink it."
      }
    ]
  },
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      { name: "State Bar Association Resources" },
      { name: "Court Self-Help Portals" }
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Parenting plan requirements and terminology vary by state. Consult local family law rules."
  }
};
