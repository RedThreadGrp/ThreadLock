// file: src/content/resourcesRegistry.ts
// Complete resources registry with TypeScript types and data
// All content for the ThreadLock Resources Hub

// ============================================================================
// Type Definitions
// ============================================================================

export type ResourceStatus = "published" | "draft";

export type ResourceTag = "Templates" | "Evidence" | "Court Prep" | "Forms" | "Finance" | "Basics";

export type ResourceIntent = "Urgent" | "Start" | "Organize" | "Learn";

export interface Resource {
  slug: string;
  title: string;
  excerpt: string;
  tag: ResourceTag;
  topic: string;
  intent: ResourceIntent;
  readTime?: string;
  status: ResourceStatus;
  body?: string;
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
}

export interface StarterKit {
  slug: string;
  title: string;
  description: string;
  whatYouGet: string[];
  estimatedTime: string;
  resources: string[];
  status: ResourceStatus;
  body?: string;
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
}

export interface FeaturedGuide {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  updated?: string;
  status: ResourceStatus;
  body?: string;
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
}

export interface Topic {
  slug: string;
  title: string;
  promise: string;
  resourceCount: number;
  status?: ResourceStatus;
  body?: string;
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
}

export interface PopularQuestion {
  slug: string;
  question: string;
  status: ResourceStatus;
  body?: string;
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
}

// ============================================================================
// Helper Functions
// ============================================================================

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}

export function getStarterKitBySlug(slug: string): StarterKit | undefined {
  return STARTER_KITS.find((k) => k.slug === slug);
}

export function getFeaturedGuideBySlug(slug: string): FeaturedGuide | undefined {
  return FEATURED_GUIDES.find((g) => g.slug === slug);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getQuestionBySlug(slug: string): PopularQuestion | undefined {
  return POPULAR_QUESTIONS.find((q) => q.slug === slug);
}

export function getResourcesByTopic(topicSlug: string): Resource[] {
  const topic = getTopicBySlug(topicSlug);
  if (!topic) return [];
  return RESOURCES.filter((r) => r.topic === topic.title && r.status === "published");
}

export function getResourcesByTag(tag: ResourceTag): Resource[] {
  return RESOURCES.filter((r) => r.tag === tag && r.status === "published");
}

export function getPublishedResources(): Resource[] {
  return RESOURCES.filter((r) => r.status === "published");
}

export function getGuidesByTopic(topicSlug: string): FeaturedGuide[] {
  const topic = getTopicBySlug(topicSlug);
  if (!topic) return [];
  
  return FEATURED_GUIDES.filter((g) =>
    g.tags.some(tag => tag.toLowerCase().includes(topic.title.toLowerCase())) ||
    g.slug.includes(topicSlug)
  );
}

export function getQuestionsByTopic(topicSlug: string): PopularQuestion[] {
  const topic = getTopicBySlug(topicSlug);
  if (!topic) return [];
  
  return POPULAR_QUESTIONS.filter((q) =>
    q.question.toLowerCase().includes(topic.title.toLowerCase()) ||
    q.slug.includes(topicSlug)
  );
}

// ============================================================================
// Resources Data (11 items: 6 published + 5 draft placeholders)
// ============================================================================

export const RESOURCES: Resource[] = [
  // Published resources (existing 6)
  {
    slug: "hearing-tomorrow",
    title: "Hearing Tomorrow Checklist",
    excerpt: "A practical walkthrough for what to bring, how to label exhibits, and what to avoid saying when you're nervous.",
    tag: "Court Prep",
    topic: "Hearings & Courtroom Prep",
    intent: "Urgent",
    readTime: "5 min read",
    status: "published",
    body: `# Hearing Tomorrow Checklist

When you have a hearing coming up fast, you need a system—not a panic attack.

## What to Bring

- All filed documents (originals + 2 copies)
- Exhibits labeled and organized (A, B, C, etc.)
- Calendar showing relevant dates
- Notes on key points you want to make
- Photo ID and case number

## Exhibit Labeling

- Use letters (A, B, C) for your exhibits
- Numbers (1, 2, 3) are typically for the other party's exhibits
- Label each page in the bottom right corner
- Bring extra copies for the judge and opposing party

## What to Avoid

- Don't interrupt the judge
- Don't argue with the other party directly
- Don't bring up irrelevant history
- Don't read from a script word-for-word
- Don't show emotion—stick to facts

## Before You Walk In

- Arrive 15 minutes early
- Turn off your phone completely
- Use the restroom
- Take three deep breaths
- Remember: you're presenting facts, not arguing

## In the Courtroom

- Stand when the judge enters
- Address the judge as "Your Honor"
- Speak clearly and at a normal pace
- Answer only what's asked
- If you don't know, say "I don't know"

This is not legal advice. This is basic courtroom hygiene for self-represented litigants.`,
    relatedLinks: [
      { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
      { title: "Official Court Portals", href: "/resources/official-portals" },
    ],
  },
  {
    slug: "proof-of-service",
    title: "Proof of Service Pack",
    excerpt: "Templates + plain-English guidance so you don't lose on a technicality.",
    tag: "Templates",
    topic: "Proof of Service",
    intent: "Start",
    readTime: "8 min read",
    status: "published",
    body: `# Proof of Service Pack

Don't lose your case because you couldn't prove you served documents properly.

## What is Proof of Service?

It's written evidence that you delivered court documents to the other party in a legally acceptable way. Without it, your filing may be rejected or your motion denied.

## Three Main Service Methods

### 1. Personal Service
Someone over 18 (not you) hands documents directly to the other party.

**Pros:** Most reliable, hard to contest  
**Cons:** Requires finding someone to do it, other party might avoid

### 2. Mail Service
Send via certified mail with return receipt requested.

**Pros:** Easy to document, works if other party won't cooperate  
**Cons:** Slower, timing rules vary by jurisdiction

### 3. Substituted Service
Leave with someone at their home/work if personal service fails after reasonable attempts.

**Pros:** Works when other party is avoiding service  
**Cons:** Stricter rules, may require court approval first

## What to Document

- Date, time, and location of service
- Name of person served
- Method of service used
- Description of documents served
- Server's signature and contact information

## Common Mistakes

- Serving documents yourself (not allowed in most cases)
- Not keeping the proof of service for your records
- Missing the deadline to file proof of service with the court
- Using an interested party (like your mom) as the server
- Not serving ALL required parties

## After Service

1. Server fills out Proof of Service form
2. Server signs under penalty of perjury
3. You file the Proof of Service with the court
4. Keep copies for your records

Check your local court rules for specific timing and format requirements.`,
    relatedLinks: [
      { title: "Official Court Portals", href: "/resources/official-portals" },
      { title: "Proof of Service State-by-State Guide", href: "/resources/guides/proof-of-service-states" },
    ],
  },
  {
    slug: "evidence-intake",
    title: "Evidence Intake: Photos, Texts, Email",
    excerpt: "How to capture, preserve, and organize records so they're usable later. (Not legal advice. Just hygiene.)",
    tag: "Evidence",
    topic: "Evidence & Exhibits",
    intent: "Organize",
    readTime: "10 min read",
    status: "published",
    body: `# Evidence Intake: Photos, Texts, Email

Raw evidence is worthless if you can't find it, authenticate it, or present it clearly.

## Capture: Lock It Down Immediately

### Text Messages
- Screenshot the ENTIRE conversation thread
- Include timestamps and phone numbers
- Capture multiple screens if needed—show context
- Don't crop or edit
- Back up to cloud storage immediately

### Emails
- Save as PDF with full headers visible
- Include sender, recipient, date, subject
- Download attachments separately
- Print a backup copy
- Note any replies or threads

### Photos
- Take multiple shots from different angles
- Include context (what room, what building)
- Don't alter, filter, or crop original files
- Note date/time/location in metadata
- Store originals separately from edited versions

## Preserve: Don't Lose It

- Use three storage locations: device, cloud, external drive
- Don't delete originals, even if you have copies
- Create dated folders: YYYY-MM-DD format
- Name files descriptively: \`2026-01-15_text_custody_exchange.png\`
- Keep access logs if possible

## Organize: Make It Findable

### Create a Master Index
Spreadsheet with columns:
- Date of incident
- Type of evidence (text, email, photo)
- File name
- Brief description
- Relevance to case (custody, support, contempt, etc.)
- Storage location

### Use Consistent Naming
\`YYYY-MM-DD_type_topic_sequence.ext\`

Examples:
- \`2026-01-15_text_missed_pickup_01.png\`
- \`2026-02-03_email_threat_financial_01.pdf\`
- \`2026-03-10_photo_property_damage_01.jpg\`

### Chronological Timeline
Create a simple timeline document showing:
- Date
- What happened
- Evidence file names
- Witnesses (if any)

## Authentication: Prove It's Real

Courts won't accept evidence if you can't prove it's authentic.

### For Text Messages
Be ready to testify:
- This is my phone number
- This is the other party's phone number
- I took these screenshots on [date]
- I haven't altered the images

### For Emails
- Print with full headers
- Verify sender domain matches known email
- Note if you replied (shows authenticity)

### For Photos
- I took this photo on [date]
- This is [location/object/person]
- This accurately represents what I saw
- I haven't edited or altered it

## Red Flags to Avoid

- Screenshots with battery/time cropped out (looks suspicious)
- Edited photos without disclosure
- Missing context (one text without conversation)
- Unclear dates or sources
- No backup copies

## Day-of-Hearing Preparation

1. Print physical copies of key evidence
2. Bring originals on your device as backup
3. Label exhibits A, B, C (not by date)
4. Create an exhibit list with descriptions
5. Practice explaining each piece calmly

Remember: You're building a case, not a scrapbook. Every piece must be findable, provable, and presentable.`,
    relatedLinks: [
      { title: "Evidence Authentication 101", href: "/resources/guides/evidence-authentication" },
      { title: "Hearing Tomorrow Checklist", href: "/resources/hearing-tomorrow" },
    ],
  },
  {
    slug: "parenting-plans",
    title: "Parenting Plan Builder Guide",
    excerpt: "A structured way to describe routines, transitions, holidays, and communication—without writing a manifesto.",
    tag: "Basics",
    topic: "Parenting Plans",
    intent: "Start",
    readTime: "12 min read",
    status: "published",
    body: `# Parenting Plan Builder Guide

A parenting plan is a detailed agreement about how you'll share time and decisions with your child. Courts want specificity, not philosophy.

## Core Components

Every parenting plan should address:

1. **Regular Schedule** - Where the child lives on normal weeks
2. **Holidays** - Who gets which holidays, how you split them
3. **Summer/Breaks** - Extended time during school vacations
4. **Decision-Making** - Who decides on school, medical, religious issues
5. **Communication** - How parents communicate about the child
6. **Exchanges** - Where/when/how you hand off the child
7. **Transportation** - Who drives, who pays
8. **Right of First Refusal** - If one parent can't watch the child, does the other parent get first option?

## Regular Schedule Examples

### Week On/Week Off
- Child stays with Parent A for 7 days
- Exchanges every Monday at 6pm at Parent B's home
- Simple, works well for older kids, requires flexibility

### 2-2-3 Schedule
- Parent A: Mon-Tue
- Parent B: Wed-Thu
- Alternating Fri-Sat-Sun
- More frequent contact, better for younger kids

### Every Other Weekend
- Parent A: Mon-Fri every week
- Parent B: Fri 6pm to Sun 6pm every other weekend, plus one weeknight dinner
- Traditional schedule, less disruption to school routine

## Holiday Split Strategies

### Alternating by Year
- Parent A gets Thanksgiving in odd years, Parent B in even years
- Reverse for Christmas

### Split Each Holiday
- Christmas Eve with one parent, Christmas Day with the other
- Switch who gets which half each year

### Fixed Assignment
- One parent always gets 4th of July, other always gets Labor Day
- Works if you each have strong preferences for specific holidays

## Decision-Making Authority

### Joint Legal Custody
Both parents must agree on major decisions:
- School enrollment and changes
- Non-emergency medical treatment
- Religious upbringing
- Extracurricular activities requiring significant time/money

### Sole Legal Custody
One parent makes all major decisions, though good practice is still to consult the other.

### Tie-Breaker Provisions
If you can't agree:
- Mediation required before court
- Specific professional decides (pediatrician for medical, etc.)
- Status quo continues until resolved

## Communication Guidelines

Be specific about:
- **Method:** Text, email, phone, co-parenting app?
- **Response time:** Within 24 hours for routine, immediately for emergencies
- **Topics:** Child-related only, not personal issues
- **Tone:** Business-like, no profanity or accusations

Example clause:
> "All routine communication about the child shall be via the OurFamilyWizard app. Emergency communication may be by phone call. Parents shall respond to routine messages within 24 hours. All communication shall remain respectful and child-focused."

## Exchange Logistics

Specify:
- Exact location (address, parking lot, public place)
- Exact time
- Who is responsible for transportation
- What happens if someone is late (grace period?)
- What to do if child is sick
- What the child should bring (clothes, medications, homework)

Example:
> "Exchanges shall occur at the parking lot of City Library, 123 Main St. The receiving parent shall arrive by 6:00pm. If the delivering parent is more than 15 minutes late without notice, the receiving parent may leave. Each parent shall ensure the child has sufficient clothing, medications, and school materials."

## Right of First Refusal

If one parent can't care for the child for more than X hours, the other parent gets first chance before a babysitter.

**Pros:** Maximizes child's time with parents  
**Cons:** Can create conflict, complicates scheduling

Example clause:
> "If either parent will be unable to care for the child for more than 4 consecutive hours during their parenting time, that parent shall first offer the other parent the opportunity to care for the child before arranging alternate childcare."

## Red Flags to Avoid

- Vague timing: "Parent B gets weekends" (which weekends? what times?)
- No backup plan for disagreements
- Overly rigid (no room for flexibility)
- Overly loose (too much room for argument)
- Focusing on adult wants instead of child needs
- Writing a novel (courts prefer clear, concise plans)

## Testing Your Plan

Before you finalize, ask:
- Does this actually work with work schedules and school?
- Can I explain this to a third party in 2 minutes?
- What happens if someone moves?
- What happens if someone remarries?
- Is this genuinely in the child's best interest, or am I trying to "win"?

A good parenting plan is boring, predictable, and specific. Save the drama for somewhere else.`,
    relatedLinks: [
      { title: "Understanding Parenting Time Calculations", href: "/resources/guides/parenting-time-calculations" },
      { title: "Official Court Portals", href: "/resources/official-portals" },
    ],
  },
  {
    slug: "financial-snapshot",
    title: "Financial Snapshot Worksheet",
    excerpt: "Income, expenses, accounts, and timelines—so you can answer questions without scrambling.",
    tag: "Finance",
    topic: "Financial Declarations",
    intent: "Organize",
    readTime: "7 min read",
    status: "published",
    body: `# Financial Snapshot Worksheet

Family court will ask about your finances—often repeatedly. Having this information organized saves time and reduces stress.

## Income Section

### Employment Income
- Current employer name and address
- Job title and start date
- Gross monthly income (before taxes)
- Net monthly income (after taxes, 401k, insurance)
- Pay schedule (weekly, bi-weekly, monthly)
- Recent pay stubs (last 3 months)

### Self-Employment Income
- Business name and type
- Average monthly gross income (last 12 months)
- Business expenses (average monthly)
- Net self-employment income
- Tax returns (last 2 years)

### Other Income
- Social Security or disability benefits
- Rental property income
- Investment income (dividends, interest)
- Child support received from other relationships
- Spousal support received
- Unemployment benefits
- Any other regular income sources

## Expense Section

### Fixed Monthly Expenses
- Rent or mortgage payment
- Property tax (if not included in mortgage)
- Homeowners/renters insurance
- Utilities (electric, gas, water, sewer, trash)
- Phone/internet/cable
- Car payment(s)
- Car insurance
- Health insurance (if not through employer)
- Life insurance
- Student loan payments
- Credit card minimum payments

### Variable Monthly Expenses
- Groceries
- Gas/transportation
- Childcare costs
- Children's activities (sports, music, etc.)
- Clothing
- Personal care (haircuts, etc.)
- Medical expenses not covered by insurance
- Entertainment/dining out
- Pet care
- Subscriptions (streaming services, etc.)

### Periodic Expenses (calculate monthly average)
- Car maintenance and repairs
- Home maintenance and repairs
- Birthday/holiday gifts
- School expenses
- Annual memberships

## Assets Section

### Real Property
- Home (address, current value, amount owed)
- Other real estate (rental, vacation home, land)

### Vehicles
- Make, model, year
- Current value
- Amount owed

### Financial Accounts
- Checking account (bank name, approximate balance)
- Savings account
- Retirement accounts (401k, IRA, pension)
- Investment accounts
- Education savings (529 plans)

### Other Assets
- Business ownership interests
- Stocks, bonds, cryptocurrency
- Valuable collections or items
- Life insurance cash value

## Debts Section

- Credit cards (balance, minimum payment, creditor)
- Student loans (balance, monthly payment)
- Personal loans
- Medical debt
- Tax debt
- Other debts

## Important Dates

- Date of marriage
- Date of separation
- Date divorce filed
- Date of significant financial events (job loss, inheritance, major purchase)

## Supporting Documents to Gather

- Last 2 years of tax returns
- Last 3 months of pay stubs
- Last 3 months of bank statements
- Recent credit card statements
- Recent loan statements
- Property tax statements
- Insurance declarations
- Retirement account statements

## Tips for Court Forms

- Round to nearest dollar
- Use monthly figures unless form specifies otherwise
- Be honest—lying on financial declarations is perjury
- Update regularly as circumstances change
- Keep copies of everything you file
- If you estimate something, mark it as an estimate and be prepared to provide actual figures later

## Common Mistakes

- Forgetting to include all income sources
- Not accounting for taxes and deductions
- Guessing at expenses instead of tracking them
- Omitting debts or assets
- Using outdated information
- Not keeping documentation to back up your numbers

## Before Court

Run the numbers:
- Total monthly income
- Total monthly expenses
- Difference (surplus or shortfall?)
- Does this pass the smell test?

If expenses exceed income significantly, be prepared to explain how you're currently managing.

This worksheet isn't legal or financial advice—it's an organizational tool to help you gather information the court will likely request.`,
    relatedLinks: [
      { title: "Child Support Calculation FAQ", href: "/resources/q/child-support-calculation" },
      { title: "Fee Waiver Information", href: "/resources/q/fee-waiver" },
    ],
  },
  {
    slug: "official-portals",
    title: "Official Court Portals Directory",
    excerpt: "Links to state-provided form sites and official rules. Don't pay for free forms.",
    tag: "Forms",
    topic: "Official Forms & Portals",
    intent: "Learn",
    readTime: "3 min read",
    status: "published",
    body: `# Official Court Portals Directory

Many websites charge for court forms that your state provides for free. Use the official sources.

## Federal Courts

**PACER (Public Access to Court Electronic Records)**  
https://pacer.uscourts.gov/  
Access federal court documents and case information

**U.S. Courts Forms**  
https://www.uscourts.gov/forms  
Free federal court forms

## State Court Portals (Major States)

### California
- **California Courts Self-Help**  
  https://www.courts.ca.gov/selfhelp.htm
- **Forms**: https://www.courts.ca.gov/forms.htm
- Family law forms, instructions, local court websites

### Texas
- **Texas Courts Online**  
  https://www.txcourts.gov/
- **Texas Law Help**  
  https://texaslawhelp.org/
- Free forms and legal information

### Florida
- **Florida Courts Self-Help**  
  https://www.flcourts.gov/Resources-Services/Court-Improvement/Family-Courts/Family-Law-Self-Help-Information
- Comprehensive family law forms and instructions

### New York
- **NY Courts DIY Forms**  
  https://www.nycourts.gov/courthelp/DIY/index.shtml
- Interactive forms for family court

### Illinois
- **Illinois Courts Self-Help**  
  https://www.illinoiscourts.gov/self-help/
- Forms and instructional materials

### Pennsylvania
- **PA Courts Self-Help**  
  https://www.pacourts.us/learn/self-help
- Family law resources and forms

### Ohio
- **Ohio Supreme Court Forms**  
  https://www.supremecourt.ohio.gov/JCS/domesticViolence/forms/
- Domestic relations and family law forms

### Georgia
- **Georgia Legal Aid**  
  https://www.georgialegalaid.org/
- Free forms and self-help resources

### North Carolina
- **NC Courts Self-Help**  
  https://www.nccourts.gov/help-topics/family-and-children
- Family court forms and information

### Michigan
- **Michigan Legal Help**  
  https://michiganlegalhelp.org/
- DIY divorce and family law tools

## What to Look For

When you find your state's court website:

- **Official domain**: Usually ends in .gov or .us
- **Free access**: State-provided forms are free
- **Current forms**: Check the revision date
- **Local rules**: Download your specific county's rules
- **Filing instructions**: Most sites include step-by-step guides
- **Fee waiver forms**: If you can't afford filing fees

## Red Flags (Scam Sites)

- Charges for "access" to forms
- Promises to "file for you" for a fee (unless they're a real attorney)
- No .gov domain
- Outdated forms
- Generic advice not specific to your state

## Local Court Websites

After finding state resources, search for:  
"[Your County] [Your State] court website"

Local court sites often have:
- Specific judges' preferences
- Local filing procedures
- Court calendars
- E-filing portals
- Contact information for clerk's office

## Legal Aid Organizations

If you can't find what you need:

**National**
- Legal Services Corporation: https://www.lsc.gov/what-legal-aid/find-legal-aid
- Find free or low-cost legal help in your area

**State-Specific**
- Search: "[Your State] legal aid"
- Most states have multiple legal aid organizations
- Income limits usually apply

## Caution

- These portals provide forms and information, not legal advice
- Using the right form doesn't guarantee the right outcome
- When in doubt, consult with a licensed attorney in your jurisdiction
- Don't rely on out-of-state forms—rules vary significantly

Save money by getting forms from official sources. Spend money on actual legal help if you need it.`,
    relatedLinks: [
      { title: "Where to Find Official Court Forms FAQ", href: "/resources/q/official-forms-location" },
      { title: "Proof of Service Pack", href: "/resources/proof-of-service" },
    ],
  },

  // Draft resources (new placeholders for starter kit references)
  {
    slug: "exhibits-guide",
    title: "Exhibits Guide: Labeling and Organization",
    excerpt: "How to label, organize, and present exhibits so they're clear and professional.",
    tag: "Court Prep",
    topic: "Hearings & Courtroom Prep",
    intent: "Urgent",
    readTime: "6 min read",
    status: "draft",
    body: `# Exhibits Guide: Labeling and Organization

[Placeholder content - to be developed]

This guide will cover:
- How to label exhibits properly (A, B, C format)
- Creating an exhibit list
- Organizing exhibits for presentation
- What to bring to court
- Common labeling mistakes to avoid`,
    relatedLinks: [
      { title: "Hearing Tomorrow Checklist", href: "/resources/hearing-tomorrow" },
      { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
    ],
  },
  {
    slug: "courtroom-prep",
    title: "Courtroom Etiquette and Preparation",
    excerpt: "What to expect in court, how to behave, and what to say (and not say).",
    tag: "Court Prep",
    topic: "Hearings & Courtroom Prep",
    intent: "Urgent",
    readTime: "8 min read",
    status: "draft",
    body: `# Courtroom Etiquette and Preparation

[Placeholder content - to be developed]

This guide will cover:
- Courtroom dress code
- How to address the judge
- When to speak and when to stay silent
- How to present yourself professionally
- Common courtroom mistakes
- What happens during different types of hearings`,
    relatedLinks: [
      { title: "Hearing Tomorrow Checklist", href: "/resources/hearing-tomorrow" },
    ],
  },
  {
    slug: "filing-basics",
    title: "Filing Basics: Getting Started",
    excerpt: "How to file documents with the court, understand deadlines, and avoid common filing errors.",
    tag: "Forms",
    topic: "Official Forms & Portals",
    intent: "Start",
    readTime: "10 min read",
    status: "draft",
    body: `# Filing Basics: Getting Started

[Placeholder content - to be developed]

This guide will cover:
- How to file documents with the court
- Understanding filing deadlines
- E-filing vs. in-person filing
- How to get file-stamped copies
- What to do if you miss a deadline
- Common filing errors and how to fix them`,
    relatedLinks: [
      { title: "Proof of Service Pack", href: "/resources/proof-of-service" },
      { title: "Official Court Portals", href: "/resources/official-portals" },
    ],
  },
  {
    slug: "timeline-tools",
    title: "Timeline Organization Tools",
    excerpt: "How to build a clear, chronological timeline of events for your case.",
    tag: "Evidence",
    topic: "Evidence & Exhibits",
    intent: "Organize",
    readTime: "9 min read",
    status: "draft",
    body: `# Timeline Organization Tools

[Placeholder content - to be developed]

This guide will cover:
- Why timelines matter in family court
- How to organize events chronologically
- What details to include
- Digital vs. paper timelines
- Linking evidence to timeline events
- Presenting timelines in court`,
    relatedLinks: [
      { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
    ],
  },
  {
    slug: "authentication",
    title: "Authentication Basics for Digital Evidence",
    excerpt: "How to authenticate texts, emails, and photos so they're admissible in court.",
    tag: "Evidence",
    topic: "Evidence & Exhibits",
    intent: "Learn",
    readTime: "11 min read",
    status: "draft",
    body: `# Authentication Basics for Digital Evidence

[Placeholder content - to be developed]

This guide will cover:
- What authentication means legally
- How to authenticate text messages
- How to authenticate emails
- How to authenticate photos and videos
- Foundation testimony requirements
- Common authentication objections and how to overcome them`,
    relatedLinks: [
      { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
      { title: "Evidence Authentication 101", href: "/resources/guides/evidence-authentication" },
    ],
  },
];

// ============================================================================
// Starter Kits Data (3 items)
// ============================================================================

export const STARTER_KITS: StarterKit[] = [
  {
    slug: "hearing-soon",
    title: "Hearing Soon Kit",
    description: "Everything you need when a hearing is approaching fast.",
    whatYouGet: [
      "Hearing Tomorrow Checklist",
      "Exhibit labeling guidelines",
      "Courtroom etiquette basics",
      "What to bring checklist",
      "Common mistakes to avoid",
    ],
    estimatedTime: "15 minutes",
    resources: ["/resources/hearing-tomorrow", "/resources/exhibits-guide", "/resources/courtroom-prep"],
    status: "published",
    body: `# Hearing Soon Kit

When a hearing is approaching fast, you need immediate, actionable guidance.

## What's Included

This kit bundles the most critical resources for hearing preparation into one streamlined package.

### 1. Hearing Tomorrow Checklist
A practical walkthrough covering what to bring, how to label exhibits, and what to avoid saying when nerves hit.

### 2. Exhibit Labeling Guidelines
Clear instructions on labeling your evidence properly so it's organized and professional.

### 3. Courtroom Etiquette Basics
What to expect, how to address the judge, when to speak, and how to present yourself.

### 4. What to Bring
Complete checklist of documents, copies, and materials you need in your bag.

### 5. Common Mistakes to Avoid
Learn from others' errors—don't interrupt, don't argue, don't bring irrelevant history.

## Time Required

Plan for **15 minutes** to review all materials. Ideally, review the night before and again the morning of your hearing.

## Who This Is For

- First-time court attendees
- Anyone with a hearing in the next 1-7 days
- Self-represented litigants who need fast, focused guidance

Start with the Hearing Tomorrow Checklist, then review the other resources as needed.`,
  },
  {
    slug: "first-filing",
    title: "First Filing Kit",
    description: "Start your case right with proper documentation and filing procedures.",
    whatYouGet: [
      "Proof of service templates",
      "Official forms directory",
      "Filing hygiene checklist",
      "Court rules overview",
      "Common filing errors guide",
    ],
    estimatedTime: "20 minutes",
    resources: ["/resources/proof-of-service", "/resources/official-portals", "/resources/filing-basics"],
    status: "published",
    body: `# First Filing Kit

Filing your first court documents can feel overwhelming. This kit gets you started on the right foot.

## What's Included

### 1. Proof of Service Templates
Ready-to-use templates with plain-English guidance so you don't lose on a technicality.

### 2. Official Forms Directory
Links to free, state-provided forms and court portals. Don't pay for what should be free.

### 3. Filing Hygiene Checklist
Step-by-step process for filing documents correctly, getting file-stamped copies, and tracking deadlines.

### 4. Court Rules Overview
What you need to know about formatting, deadlines, and local court requirements.

### 5. Common Filing Errors Guide
Learn the most frequent mistakes and how to avoid them—missing signatures, wrong forms, missed deadlines.

## Time Required

Plan for **20 minutes** to review all materials before you file anything.

## Who This Is For

- People filing their first family court documents
- Self-represented litigants starting a divorce, custody, or support case
- Anyone who needs to understand filing basics

Start with the Official Forms Directory to find your state's resources, then review Proof of Service before you file anything.`,
  },
  {
    slug: "evidence",
    title: "Evidence Kit",
    description: "Capture, organize, and preserve evidence that holds up.",
    whatYouGet: [
      "Evidence intake templates",
      "Photo/text preservation guide",
      "Timeline organization tools",
      "Authentication basics",
      "Digital evidence checklist",
    ],
    estimatedTime: "25 minutes",
    resources: ["/resources/evidence-intake", "/resources/timeline-tools", "/resources/authentication"],
    status: "published",
    body: `# Evidence Kit

Raw evidence is worthless if you can't find it, authenticate it, or present it clearly. This kit helps you build a usable evidence system.

## What's Included

### 1. Evidence Intake Templates
How to capture, preserve, and organize photos, texts, emails, and documents so they're usable later.

### 2. Photo/Text Preservation Guide
Detailed instructions on backing up digital evidence, maintaining originals, and avoiding common mistakes.

### 3. Timeline Organization Tools
Build a clear, chronological timeline linking events to evidence files.

### 4. Authentication Basics
How to prove your evidence is real and admissible in court—foundation testimony, metadata, and more.

### 5. Digital Evidence Checklist
A practical checklist to ensure you've captured and organized everything correctly.

## Time Required

Plan for **25 minutes** to review all materials and set up your evidence system.

## Who This Is For

- Anyone collecting evidence for a family court case
- People with texts, emails, or photos they need to preserve
- Self-represented litigants who need to organize evidence professionally

Start with the Evidence Intake guide to set up your system, then use Timeline Tools to organize chronologically.`,
  },
];

// ============================================================================
// Featured Guides Data (4 items)
// ============================================================================

export const FEATURED_GUIDES: FeaturedGuide[] = [
  {
    slug: "self-representation-complete",
    title: "The Complete Guide to Self-Representation in Family Court",
    summary: "Everything you need to know about representing yourself, from filing basics to courtroom strategy. Updated with 2026 rule changes.",
    tags: ["Court Prep", "Basics", "Complete Guide"],
    updated: "Jan 2026",
    status: "published",
    body: `# The Complete Guide to Self-Representation in Family Court

[Comprehensive guide content to be developed]

This guide covers:
- Understanding your rights and responsibilities
- Filing procedures from start to finish
- Court procedures and expectations
- How to research and apply the law
- Evidence rules and presentation
- Courtroom strategy and communication
- Working with opposing counsel
- Settlement vs. trial considerations
- Post-judgment modifications
- Resources and support`,
  },
  {
    slug: "evidence-authentication",
    title: "Evidence Authentication 101",
    summary: "How to make your photos, texts, and emails admissible without hiring an expert.",
    tags: ["Evidence", "Authentication"],
    status: "published",
    body: `# Evidence Authentication 101

[Detailed authentication guide to be developed]

This guide covers:
- Legal requirements for authentication
- Foundation testimony frameworks
- Text message authentication
- Email authentication
- Photo and video authentication
- Social media evidence
- Metadata and technical proof
- Common objections and responses
- Self-authentication options
- Expert witness considerations`,
  },
  {
    slug: "proof-of-service-states",
    title: "Proof of Service State-by-State",
    summary: "Requirements and templates for every U.S. state and territory.",
    tags: ["Templates", "Proof of Service"],
    status: "published",
    body: `# Proof of Service State-by-State

[State-specific guide to be developed]

This comprehensive guide includes:
- Service requirements for all 50 states
- Territory-specific rules (Puerto Rico, Guam, etc.)
- Personal service rules by state
- Mail service requirements
- Substituted service procedures
- Timeline requirements
- State-specific forms and templates
- Fee schedules
- Special rules for military service members`,
  },
  {
    slug: "parenting-time-calculations",
    title: "Understanding Parenting Time Calculations",
    summary: "Calculate overnights, holidays, and summer schedules accurately.",
    tags: ["Parenting Plans", "Calculations"],
    status: "published",
    body: `# Understanding Parenting Time Calculations

[Calculation guide to be developed]

This guide covers:
- Why overnight calculations matter
- How courts count overnights
- Calculating percentage of parenting time
- Holiday and vacation calculations
- School year vs. summer schedules
- Impact on child support calculations
- Common calculation mistakes
- Tools and worksheets
- State-specific calculation rules
- Documenting time with children`,
  },
];

// ============================================================================
// Topics Data (6 items)
// ============================================================================

export const TOPICS: Topic[] = [
  {
    slug: "proof-of-service",
    title: "Proof of Service",
    promise: "Don't lose on a technicality—get service documentation right.",
    resourceCount: 4,
  },
  {
    slug: "evidence-exhibits",
    title: "Evidence & Exhibits",
    promise: "Capture, preserve, and organize records that are usable in court.",
    resourceCount: 6,
  },
  {
    slug: "hearings-prep",
    title: "Hearings & Courtroom Prep",
    promise: "Walk in prepared, organized, and coherent under pressure.",
    resourceCount: 5,
  },
  {
    slug: "parenting-plans",
    title: "Parenting Plans",
    promise: "Structure routines, transitions, and communication clearly.",
    resourceCount: 3,
  },
  {
    slug: "financial-declarations",
    title: "Financial Declarations",
    promise: "Answer financial questions without scrambling for numbers.",
    resourceCount: 4,
  },
  {
    slug: "official-forms",
    title: "Official Forms & Portals",
    promise: "Access state-provided forms and rules—don't pay for free resources.",
    resourceCount: 8,
  },
];

// ============================================================================
// Popular Questions Data (12 items)
// ============================================================================

export const POPULAR_QUESTIONS: PopularQuestion[] = [
  {
    slug: "proof-of-service-definition",
    question: "What counts as proof of service?",
    status: "draft",
    body: `# What counts as proof of service?

[Answer to be developed]`,
  },
  {
    slug: "exhibit-labeling",
    question: "How do I label exhibits for court?",
    status: "draft",
    body: `# How do I label exhibits for court?

[Answer to be developed]`,
  },
  {
    slug: "official-forms-location",
    question: "Where do I find official court forms?",
    status: "draft",
    body: `# Where do I find official court forms?

[Answer to be developed]`,
  },
  {
    slug: "text-authentication",
    question: "Can I authenticate text messages myself?",
    status: "draft",
    body: `# Can I authenticate text messages myself?

[Answer to be developed]`,
  },
  {
    slug: "hearing-checklist",
    question: "What should I bring to a hearing?",
    status: "draft",
    body: `# What should I bring to a hearing?

[Answer to be developed]`,
  },
  {
    slug: "service-deadlines",
    question: "How long do I have to serve documents?",
    status: "draft",
    body: `# How long do I have to serve documents?

[Answer to be developed]`,
  },
  {
    slug: "custody-types",
    question: "What's the difference between legal and physical custody?",
    status: "draft",
    body: `# What's the difference between legal and physical custody?

[Answer to be developed]`,
  },
  {
    slug: "mediation-lawyer",
    question: "Do I need a lawyer for mediation?",
    status: "draft",
    body: `# Do I need a lawyer for mediation?

[Answer to be developed]`,
  },
  {
    slug: "child-support-calculation",
    question: "How do I calculate child support?",
    status: "draft",
    body: `# How do I calculate child support?

[Answer to be developed]`,
  },
  {
    slug: "modify-parenting-plan",
    question: "Can I modify a parenting plan later?",
    status: "draft",
    body: `# Can I modify a parenting plan later?

[Answer to be developed]`,
  },
  {
    slug: "fee-waiver",
    question: "What if I can't afford court fees?",
    status: "draft",
    body: `# What if I can't afford court fees?

[Answer to be developed]`,
  },
  {
    slug: "respond-to-motion",
    question: "How do I respond to a motion?",
    status: "draft",
    body: `# How do I respond to a motion?

[Answer to be developed]`,
  },
];
