// file: src/content/resourcesRegistry.ts
// Complete resources registry with TypeScript types and data
// All content for the ThreadLock Resources Hub

// ============================================================================
// Type Definitions
// ============================================================================

export type ResourceStatus = "published" | "draft";

export type ResourceTag = "Templates" | "Evidence" | "Court Prep" | "Forms" | "Finance" | "Basics";

export type ResourceIntent = "Urgent" | "Start" | "Organize" | "Learn";

export interface GovernanceMetadata {
  lastUpdated: string; // ISO date string (YYYY-MM-DD)
  sources: Array<{
    name: string;
    href?: string;
    note?: string;
  }>;
  jurisdictionScope: string[]; // e.g., ["US-general"], ["Federal", "California"]
  reviewIntervalDays: 90 | 180 | 365; // Based on content volatility
  accuracyNotes?: string; // Optional, useful for "varies by county" disclaimers
}

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
  // SEO fields
  seoTitle?: string;
  metaDescription?: string;
  dateModified?: string;
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
  relatedQuestions?: Array<{
    question: string;
    href: string;
  }>;
  // Governance metadata (required for published content)
  governance?: GovernanceMetadata;
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
  // Governance metadata (required for published content)
  governance?: GovernanceMetadata;
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
  // Governance metadata (required for published content)
  governance?: GovernanceMetadata;
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
  // Governance metadata (required for published content)
  governance?: GovernanceMetadata;
}

export interface PopularQuestion {
  slug: string;
  question: string;
  status: ResourceStatus;
  body?: string;
  // SEO fields
  seoTitle?: string;
  metaDescription?: string;
  shortAnswer?: string;
  dateModified?: string;
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
  relatedQuestions?: Array<{
    question: string;
    href: string;
  }>;
  // Governance metadata (required for published content)
  governance?: GovernanceMetadata;
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals" },
        { name: "Federal Rules of Civil Procedure" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Courtroom procedures vary by court. Check local rules."
    }
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals", href: "https://www.uscourts.gov/forms" },
        { name: "State Bar Association Resources" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Proof of service requirements vary by jurisdiction. Always verify with your local court."
    }
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence" },
        { name: "Court Self-Help Portals" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 180,
      accuracyNotes: "Evidence authentication requirements may vary by state. Consult local rules of evidence."
    }
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Administration Office" },
        { name: "Legal Aid Organizations" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Income and expense categories may vary by jurisdiction. Financial disclosure requirements differ by state."
    }
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals", href: "https://www.uscourts.gov/forms" },
        { name: "State Bar Association Resources" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Court websites and form availability vary by state. Always verify current forms with your local court."
    }
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
    status: "published",
    seoTitle: "Label Court Exhibits | Step-by-Step Guide | ThreadLock",
    metaDescription: "Label exhibits A, B, C in bottom right. Bring 3 copies. Create exhibit list. Step-by-step guide for organizing exhibits in family court.",
    dateModified: "2026-02-13",
    body: `# Exhibits Guide: Labeling and Organization

Exhibits are physical or digital evidence you present to the judge. Proper labeling and organization make your evidence easier to reference and harder to dispute.

## Short Answer

**Use letters (A, B, C) for your exhibits.** Label each page in the bottom right corner. Create an exhibit list that describes each item. Bring three copies: one for you, one for the judge, one for the opposing party. Organize chronologically or by topic, whichever tells your story more clearly.

## How to Label Exhibits Properly

### The Standard Format

Most family courts expect:
- **Your exhibits:** Letters (A, B, C, D, etc.)
- **Opposing party's exhibits:** Numbers (1, 2, 3, 4, etc.)
- **Label placement:** Bottom right corner of each page
- **Label size:** Clear and legible, typically 12-14pt font

### Labeling Multi-Page Exhibits

If Exhibit A has 5 pages:
- Page 1: "Exhibit A - Page 1 of 5"
- Page 2: "Exhibit A - Page 2 of 5"
- And so on

This prevents pages from being misplaced or disputed.

### Creating Your Exhibit List

An exhibit list is a table that describes each exhibit. It's typically filed with your motion or presented at the hearing.

**Basic format:**

| Exhibit | Description | Date |
|---------|-------------|------|
| A | Text messages between parties | 03/15/2025 - 04/20/2025 |
| B | Bank statement showing missed payment | May 2025 |
| C | Email from opposing party re: custody | 06/10/2025 |

The Clerk of Court or local rules may have a specific exhibit list template. Check before creating your own.

## Organizing Exhibits for Presentation

### Two Main Approaches

**1. Chronological Order**
Best for showing patterns over time or a sequence of events.

Example:
- Exhibit A: January emails
- Exhibit B: February text messages
- Exhibit C: March incident report

**2. Topic-Based Order**
Best for addressing multiple issues separately.

Example:
- Exhibit A: Financial records
- Exhibit B: Communication about custody
- Exhibit C: Medical documentation

Choose the method that makes your narrative clearer.

### Physical Organization Tips

- **Use binder tabs** for each exhibit
- **Three-hole punch** all documents
- **Keep exhibits in order** at all times
- **Don't remove anything** once assembled
- **Practice referencing** exhibits before the hearing

## What to Bring to Court

**Minimum requirements:**
- **Original exhibits** (for the judge)
- **Two complete copies** (one for opposing party, one for you)
- **Exhibit list** (3 copies)
- **Binder or folder** to keep everything organized
- **Case number and hearing date** clearly marked on the cover

Some judges require advance submission of exhibits. Check your local rules or the hearing notice for deadlines.

## Common Labeling Mistakes to Avoid

### Using Numbers Instead of Letters
If you're the petitioner or moving party, stick with letters. Using numbers can confuse the record.

### Inconsistent Labeling
Don't label something "Exhibit A" in your motion and then call it "Text Messages" in court. Use consistent references throughout.

### Missing Page Numbers
Multi-page exhibits without page numbers are easy to dispute. Always use "Page X of Y" format.

### Forgetting Copies
If you show up with only one copy, the judge may continue the hearing until you provide copies for all parties. Bring three sets minimum.

### Labeling After Filing
Label exhibits before you file your motion or submit documents to the Clerk of Court. Retroactive labeling creates confusion.

## State-Specific Variations

**Important:** This guide reflects common practices in U.S. family courts, but each jurisdiction has specific requirements:

- Some courts require **exhibit lists to be filed 48 hours before the hearing**
- Some courts use **color-coded labels** (e.g., yellow for petitioner, blue for respondent)
- Some courts require **electronic submission** through an e-filing portal
- Some courts prohibit **loose documents** and require binding

**Always check:**
- Local Rules of Civil Procedure for your county
- Standing orders from your assigned judge
- Any instructions in your hearing notice

When in doubt, call the Clerk of Court and ask for exhibit requirements.

## About This Resource

This guide was developed by reviewing court rules, evidence presentation standards, and common practices across U.S. family court systems. It reflects procedures typically found in state trial courts handling domestic relations matters.

**This is not legal advice.** Exhibit requirements vary significantly by jurisdiction. Consult your local court rules or an attorney licensed in your state for case-specific guidance.

**For urgent hearings,** also review the [Hearing Tomorrow Checklist](/resources/hearing-tomorrow) for a complete preparation overview, including what else to bring and how to present yourself in court.`,
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
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence" },
        { name: "Court Self-Help Portals" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 180,
      accuracyNotes: "Exhibit requirements and formatting rules vary by jurisdiction. Check local court rules."
    }
  },
  {
    slug: "courtroom-prep",
    title: "Courtroom Etiquette and Preparation",
    excerpt: "What to expect in court, how to behave, and what to say (and not say).",
    tag: "Court Prep",
    topic: "Hearings & Courtroom Prep",
    intent: "Urgent",
    readTime: "8 min read",
    status: "published",
    seoTitle: "Courtroom Etiquette Rules | What to Expect | ThreadLock",
    metaDescription: "Stand when judge enters. Say 'Your Honor.' Dress business casual. Speak only when asked. Answer the question. Don't interrupt. Pro se guide.",
    dateModified: "2026-02-13",
    body: `# Courtroom Etiquette and Preparation

Family court has rules—written and unwritten. Following them won't win your case, but breaking them can hurt your credibility before you even speak.

## Short Answer

**Dress business casual. Address the judge as "Your Honor." Stand when the judge enters and exits. Speak only when asked. Answer the question, then stop talking.** Don't interrupt, don't argue with the other party, and don't show emotion. Bring all filed documents, labeled exhibits, and something to write on.

## Courtroom Dress Code

### What to Wear

**Business casual is the standard:**
- Collared shirt or blouse
- Dress pants, khakis, or knee-length skirt
- Closed-toe shoes
- Minimal jewelry and accessories

**Avoid:**
- T-shirts, tank tops, or anything with logos/text
- Shorts, leggings, or athletic wear
- Hats or sunglasses inside the courtroom
- Strong perfume or cologne
- Visible tattoos if possible (cover with clothing)

You don't need a suit, but you need to look like you take the proceeding seriously. Judges notice.

## How to Address the Judge

### The Basics

- **"Your Honor"** is the standard form of address
- **Stand when speaking** unless told otherwise
- **Make eye contact** but don't stare
- **Don't call the judge** "sir," "ma'am," "judge," or by their name

### What to Say

**When the judge asks you a question:**
- "Yes, Your Honor" or "No, Your Honor"
- "I don't know, Your Honor" (if you don't know)
- "May I explain, Your Honor?" (if you need to add context)

**When you need to speak:**
- "Your Honor, may I respond?"
- "Your Honor, I'd like to address that point"

**Never say:**
- "That's not true!" (argumentative)
- "They're lying!" (accusatory)
- "This is ridiculous!" (disrespectful)

State facts calmly. Let the evidence speak.

## When to Speak and When to Stay Silent

### Speak Only When:

1. **The judge asks you a direct question**
2. **Your attorney asks you a question** (if you have one)
3. **The judge invites you to present** your case or argument
4. **You're asked if you have anything to add**

### Stay Silent When:

1. **The other party is speaking** to the judge
2. **The judge is reading documents** or conferring with the clerk
3. **Another case is being called**
4. **You feel emotional and need a moment**

If the other party says something false, **write it down**. Don't interrupt. You'll have a chance to respond.

## How to Present Yourself Professionally

### Voice and Tone

- **Speak clearly** at a normal volume
- **Don't rush** your words
- **Pause before answering** to collect your thoughts
- **Stay calm** even if provoked

### Body Language

- **Stand straight** with hands at your sides or holding notes
- **Don't fidget** or cross your arms
- **Face the judge** when speaking, not the other party
- **No eye-rolling, sighing, or head-shaking** when others speak

### Emotional Control

Judges expect you to be nervous. They don't expect you to:
- **Cry uncontrollably** (a few tears are understandable; a meltdown is not)
- **Yell or raise your voice**
- **Make threats or accusations** directly at the other party
- **Bring up every past wrong** instead of addressing the current issue

If you feel overwhelmed, ask for a brief recess: "Your Honor, may I have a moment?"

## Common Courtroom Mistakes

### 1. Talking Too Much

Answer the question, then stop. Don't volunteer extra information or go off on tangents. If the judge wants more detail, they'll ask.

### 2. Arguing with the Other Party

**Speak to the judge, not to the opposing party.** Even if they're sitting right there, direct your words to the bench. The judge is the decision-maker.

### 3. Bringing Up Irrelevant History

Unless it's directly related to the current motion or issue, don't bring up something from five years ago. Judges have limited time and patience.

### 4. Reading from a Script

It's fine to have notes. It's not fine to read every word in a monotone voice. Use bullet points, not full sentences.

### 5. Forgetting to Bring Documents

If you filed a motion or exhibit list, bring copies. If you reference something in your argument, have it ready to hand to the judge.

### 6. Arriving Late

Arrive at least 15 minutes early. Courts lock doors at session start in many jurisdictions. If you're late, you may forfeit your hearing.

## What Happens During Different Types of Hearings

### Temporary Orders Hearing

**Purpose:** Decide temporary custody, support, or restrictions until the final hearing.

**What to expect:**
- Short timeframe (15-30 minutes)
- Focus on immediate harm or need
- Less formal than a trial
- Judge may rule from the bench or issue a written order later

**Your role:** Present your most urgent concerns with evidence. Don't try to litigate the entire case.

### Status Conference

**Purpose:** Check progress, set deadlines, address procedural issues.

**What to expect:**
- Very brief (5-10 minutes)
- Judge may ask about discovery, mediation, or settlement talks
- No testimony or evidence presentation
- Focuses on case management, not merits

**Your role:** Answer the judge's questions about where things stand. Bring your calendar to confirm future dates.

### Final Hearing or Trial

**Purpose:** Present all evidence and arguments for a final decision.

**What to expect:**
- Longer timeframe (1-4 hours or multiple days)
- Formal presentation of evidence
- Witness testimony under oath
- Cross-examination by opposing party or their attorney
- Judge may take the matter under advisement and rule later

**Your role:** Present your case methodically. Introduce exhibits. Call witnesses if you have any. Follow the Rules of Evidence as best you can.

### Show Cause Hearing

**Purpose:** Explain why you should not be held in contempt for violating a court order.

**What to expect:**
- Burden is on you to explain non-compliance
- Judge may ask pointed questions
- Possible sanctions, fines, or jail time
- Very serious tone

**Your role:** Be honest. Explain what happened and what you've done to fix it. If you willfully violated the order, acknowledge it and explain why. If you didn't, present evidence.

## State-Specific Variations

**Important:** Courtroom procedures vary by jurisdiction:

- Some courts require **all parties to check in with the bailiff** before the session starts
- Some courts use **video appearance** for certain hearings (check local rules)
- Some courts allow **note-taking on laptops**; others prohibit electronics
- Some courts require **standing at a podium**; others let you sit at the table

**Always check:**
- Local Rules of Court for your county
- Any instructions in your hearing notice
- The court's website for COVID-related or other special procedures

When in doubt, arrive early and watch another case to see how things work.

## About This Resource

This guide is based on common courtroom practices in U.S. state trial courts, particularly family law divisions. It reflects general principles of courtroom etiquette and decorum applicable in most jurisdictions.

**This is not legal advice.** Courtroom customs and rules vary by state, county, and even individual judge. This guide provides a baseline for professional conduct, but local rules and standing orders take precedence.

**For last-minute hearing prep,** also review the [Hearing Tomorrow Checklist](/resources/hearing-tomorrow) for a complete overview of what to bring and how to organize your exhibits.`,
    relatedLinks: [
      { title: "Hearing Tomorrow Checklist", href: "/resources/hearing-tomorrow" },
      { title: "Exhibits Guide: Labeling and Organization", href: "/resources/exhibits-guide" },
      { title: "How to Present Digital Evidence", href: "/resources/authentication" },
    ],
    relatedQuestions: [
      { question: "What if the judge asks me something I don't know?", href: "/resources/hearing-tomorrow" },
      { question: "Can I object to the other party's evidence?", href: "/resources/evidence-intake" },
      { question: "What happens if I miss my court date?", href: "/resources/filing-basics" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals" },
        { name: "Federal Rules of Civil Procedure" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Courtroom procedures and etiquette vary by court. Check local rules."
    }
  },
  {
    slug: "filing-basics",
    title: "Filing Basics: Getting Started",
    excerpt: "How to file documents with the court, understand deadlines, and avoid common filing errors.",
    tag: "Forms",
    topic: "Official Forms & Portals",
    intent: "Start",
    readTime: "10 min read",
    status: "published",
    seoTitle: "File Court Documents | Deadlines & E-Filing | ThreadLock",
    metaDescription: "File at Clerk of Court (in person or online). Get file-stamped copies. Follow deadlines. Serve opposing party same day. Filing guide.",
    dateModified: "2026-02-13",
    body: `# Filing Basics: Getting Started

Filing documents with the court means submitting them to the Clerk of Court so they become part of the official case record. Do it wrong, and your motion might be rejected or your deadline missed.

## Short Answer

**File at the Clerk of Court office (in person) or through your court's e-filing portal (online).** Bring originals plus copies for service. Pay filing fees unless you have a fee waiver. Get file-stamped copies for your records. Serve the opposing party the same day you file. Track all deadlines using your local Rules of Civil Procedure.

## How to File Documents with the Court

### Step 1: Prepare Your Documents

**Required elements:**
- **Caption:** Case name, case number, court name
- **Title:** What the document is (e.g., "Motion to Modify Custody")
- **Content:** Your argument, facts, and requested relief
- **Signature:** Your handwritten or electronic signature
- **Certificate of Service:** Statement that you served the opposing party
- **Date:** Current date of filing

Check your court's local rules for formatting requirements (font size, margins, line spacing).

### Step 2: Make Copies

**Standard practice:**
- **Original** for the Clerk of Court
- **Copy for opposing party** (for service)
- **Copy for yourself** (file-stamped for your records)

Some courts require additional courtesy copies for the judge. Check local rules.

### Step 3: File at the Clerk of Court

**In-person filing:**
1. Go to the Clerk of Court office during business hours
2. Present your original and copies
3. Pay filing fees (or present your fee waiver order)
4. Clerk will stamp all copies with filing date and time
5. Keep your file-stamped copy

**E-filing (if available):**
1. Create an account on your court's e-filing portal
2. Upload your document (usually PDF format)
3. Pay filing fees online
4. Receive electronic confirmation of filing
5. Download and save the file-stamped version

Not all courts offer e-filing. Check your court's website or call the Clerk of Court.

### Step 4: Serve the Opposing Party

**Same-day service requirement:**
Most Rules of Civil Procedure require you to serve the opposing party on the same day you file, or within a very short window (24-48 hours).

**Service methods:**
- **Email** (if opposing party consented to electronic service)
- **U.S. Mail** (certified mail, return receipt requested)
- **Personal service** (hand-delivered by a process server or adult non-party)

Complete the Certificate of Service on your filed document, noting the method and date of service.

**Important:** Some documents (like initial petitions or motions for contempt) require formal service by a process server or sheriff. Check your local rules.

## Understanding Filing Deadlines

### Types of Deadlines

**1. Statutory Deadlines**
Set by state law. Examples:
- Response to a motion: 21 days (varies by state)
- Notice of appeal: 30 days from final judgment
- Answer to a complaint: 20-30 days (varies by state)

**2. Court-Ordered Deadlines**
Set by the judge in a specific order. Examples:
- "Submit proposed parenting plan by March 15"
- "File financial affidavit within 10 days"

**3. Local Rule Deadlines**
Set by your court's standing orders or local rules. Examples:
- "Pre-trial motions due 14 days before hearing"
- "Exhibit lists due 2 business days before trial"

### How to Calculate Deadlines

**Most courts use this method:**
1. **Start counting the day after** the event (e.g., the day after service)
2. **Count calendar days** unless the rule specifies "business days"
3. **If the deadline falls on a weekend or holiday,** it moves to the next business day

**Example:** You're served on Monday, March 3. You have 21 days to respond.
- Start counting: Tuesday, March 4 (Day 1)
- Deadline: Monday, March 24 (Day 21)

**Always verify** the calculation method in your state's Rules of Civil Procedure. Some jurisdictions exclude the first day, include the last day, or have other variations.

### What Happens If You Miss a Deadline

**Consequences vary by deadline type:**

**Minor procedural deadline:**
- Court may accept late filing with explanation
- Judge may grant an extension if you ask promptly

**Major deadline (e.g., response to a motion):**
- Opposing party may get default judgment
- You may lose the opportunity to present evidence
- Judge may rule without hearing your side

**Appeal deadline:**
- You lose the right to appeal (these are strictly enforced)

**If you miss a deadline:** File immediately, even if late. Include a motion for leave to file out of time, explaining the reason for the delay. Some judges are forgiving for good cause (medical emergency, miscalculation). None are forgiving for "I forgot."

## E-Filing vs. In-Person Filing

### E-Filing

**Pros:**
- File 24/7 from home
- Instant confirmation of filing
- No need to physically go to the courthouse
- Automatic service to opposing party (in some systems)

**Cons:**
- Not available in all jurisdictions
- Requires technology and internet access
- Learning curve for first-time users
- May still require in-person filing for certain documents (e.g., sealed records)

### In-Person Filing

**Pros:**
- Clerk can review documents for completeness before accepting
- Immediate file-stamped copy in hand
- No technical issues or system outages
- Can ask questions at the counter

**Cons:**
- Limited to business hours
- Travel time and cost
- Potential wait times
- Parking and courthouse security screening

Many courts are transitioning to mandatory e-filing. Check your court's website for current requirements.

## How to Get File-Stamped Copies

A **file-stamped copy** is your proof that the document was officially filed.

**In-person filing:**
- Clerk stamps all copies at the counter
- Keep at least one stamped copy for your records

**E-filing:**
- Download the stamped version from the e-filing portal (usually available within 24 hours)
- Save as PDF and keep multiple backups

**If you need a stamped copy later:**
- Go to the Clerk of Court office
- Request a certified copy (may cost $0.25-$1.00 per page)
- Or request a conformed copy (free or low-cost, not certified)

Always keep file-stamped copies of everything you file. You may need them at hearings, for appeals, or to prove compliance.

## Common Filing Errors and How to Fix Them

### 1. Missing or Incorrect Case Number

**Fix:** Contact the Clerk of Court immediately. They may correct it or return the filing for correction.

### 2. Unsigned Document

**Fix:** Most courts will reject unsigned filings. Re-sign and re-file immediately.

### 3. Missing Certificate of Service

**Fix:** File an amended certificate of service showing when and how you served the document.

### 4. Wrong Court or Wrong Division

**Fix:** Refile in the correct court. You may need to pay filing fees again.

### 5. Incomplete or Illegible Document

**Fix:** Clerk may reject at the counter or via e-filing system. Correct the issues and resubmit.

### 6. Insufficient Filing Fees

**Fix:** Pay the balance immediately or file an Application for Waiver of Filing Fees if you qualify.

### 7. Filing After the Deadline

**Fix:** File immediately with a motion for leave to file out of time. Explain the reason and provide supporting documentation if possible (e.g., medical records, proof of miscalculation).

## What to Do If You Miss a Deadline

**Step 1: File immediately**
Don't wait. File the document as soon as you realize the deadline passed.

**Step 2: File a motion for leave to file out of time**
Explain:
- The deadline you missed
- Why you missed it (be honest)
- Why allowing the late filing serves the interests of justice
- That the opposing party won't be prejudiced by the delay (if true)

**Step 3: Serve the opposing party**
Follow the same service rules as if you filed on time.

**Step 4: Attend the hearing**
Even if your late filing is rejected, show up to the hearing. The judge may allow you to present your argument orally.

**Judges are more lenient when:**
- The delay is short (days, not weeks)
- You have a legitimate reason (medical emergency, family crisis)
- You've acted diligently in the case overall
- The opposing party isn't harmed by the delay

## State-Specific Variations

**Important:** Filing procedures, deadlines, and rules vary significantly by state and county:

- Some states require **mandatory e-filing** for all documents
- Some states calculate deadlines **excluding weekends and holidays**
- Some states require **proof of service to be filed separately** within a certain timeframe
- Some states allow **email service** only with explicit consent
- Some states require **courtesy copies** to be mailed directly to the judge

**Always check:**
- Your state's Rules of Civil Procedure
- Local Rules of Court for your county
- Any standing orders from your assigned judge
- The Clerk of Court's website for filing instructions

When in doubt, call the Clerk of Court. They cannot give legal advice, but they can explain filing procedures.

## About This Resource

This guide is based on common filing procedures in U.S. state trial courts. It reflects general principles found in most Rules of Civil Procedure but is not specific to any jurisdiction.

**This is not legal advice.** Filing requirements, deadlines, and procedures are governed by state law and local rules. This guide provides a starting framework, but you must consult your jurisdiction's specific rules for accurate information.

**For service requirements,** review the [Proof of Service Pack](/resources/proof-of-service) for templates and detailed instructions on how to properly serve documents after filing.`,
    relatedLinks: [
      { title: "Proof of Service Pack", href: "/resources/proof-of-service" },
      { title: "Official Court Portals by State", href: "/resources/official-portals" },
      { title: "Court Fee Waivers", href: "/resources/fee-waivers" },
    ],
    relatedQuestions: [
      { question: "What happens if I file the wrong document?", href: "/resources/hearing-tomorrow" },
      { question: "How do I prove I served the other party?", href: "/resources/proof-of-service" },
      { question: "Can I file documents after business hours?", href: "/resources/official-portals" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Civil Procedure" },
        { name: "Local Court Rules" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 90,
      accuracyNotes: "Filing procedures and deadlines vary by jurisdiction. Verify with your court."
    }
  },
  {
    slug: "timeline-tools",
    title: "Timeline Organization Tools",
    excerpt: "How to build a clear, chronological timeline of events for your case.",
    tag: "Evidence",
    topic: "Evidence & Exhibits",
    intent: "Organize",
    readTime: "9 min read",
    status: "published",
    seoTitle: "How to Create a Case Timeline | Organize Events | ThreadLock",
    metaDescription: "List events chronologically with dates, descriptions, and evidence. Include witnesses. Focus on relevant facts. Essential for custody cases.",
    dateModified: "2026-02-13",
    body: `# Timeline Organization Tools

A timeline is a chronological record of events relevant to your case. It helps judges see patterns, understand context, and evaluate credibility.

## Short Answer

**Create a table or spreadsheet with these columns: Date, Event Description, Evidence, Witnesses.** List events in chronological order. Include only facts relevant to the legal issues in your case. Link each event to supporting evidence (texts, emails, photos). Bring your timeline to court and reference it when presenting your case.

## Why Timelines Matter in Family Court

### For the Judge

Judges hear dozens of cases. A clear timeline:
- **Saves time** by presenting facts in order
- **Shows patterns** of behavior over time
- **Provides context** for isolated incidents
- **Helps evaluate credibility** by cross-referencing dates with evidence

### For You

Creating a timeline forces you to:
- **Organize scattered evidence** into a coherent narrative
- **Identify gaps** in your documentation
- **Focus on relevant facts** instead of emotional reactions
- **Prepare for cross-examination** by knowing your dates

Timelines are especially important in custody disputes, contempt actions, and cases involving patterns of behavior (e.g., missed visitation, financial misconduct).

## How to Organize Events Chronologically

### Basic Timeline Structure

**Minimum required columns:**

| Date | Event | Evidence | Witness |
|------|-------|----------|---------|
| 02/10/2025 | Opposing party failed to return child at agreed time (5pm). Child returned at 9:30pm. | Text messages (Exhibit A), call log | Child's babysitter |
| 02/15/2025 | Received threatening text about custody | Screenshot (Exhibit B) | None |
| 03/01/2025 | Opposing party missed scheduled visitation. No notice given. | Text messages (Exhibit C) | Child (age 12) |

### Optional Additional Columns

Depending on your case, you may also include:
- **Time of day** (for events where timing matters)
- **Location** (for incidents at specific places)
- **Impact on child** (for custody cases)
- **Financial amount** (for support or property cases)
- **Notes** (brief context or explanation)

### Sorting and Filtering

**Start with a complete list**, then:
1. **Remove irrelevant events** (focus on what matters for the legal issue)
2. **Highlight key events** that support your claims
3. **Group related events** if presenting thematically (but keep dates clear)

Don't overwhelm the judge with every minor detail. Curate your timeline to show what matters.

## What Details to Include

### Be Specific

**Vague:** "Opposing party was late picking up the child."

**Specific:** "On March 5, 2025, opposing party was scheduled to pick up child at 3:00 PM per the parenting plan. They arrived at 6:45 PM without prior notice."

### Include Context When Needed

**Too much context:** "On March 5, 2025, I had taken the child to soccer practice and then we went to get ice cream because it was a nice day and the child had been doing well in school, and then we came home and waited for opposing party to arrive at 3:00 PM per the parenting plan but they didn't show up until 6:45 PM and I had to cancel my evening plans."

**Right amount:** "On March 5, 2025, opposing party was scheduled to pick up child at 3:00 PM per the parenting plan. They arrived at 6:45 PM without prior notice, causing child to miss dinner and homework time."

Focus on the legally relevant facts: the obligation, the breach, and the impact.

### Link to Evidence

For every event, note the corresponding exhibit or evidence that proves it happened.

**Examples:**
- "See Exhibit A (text messages)"
- "See Exhibit B (bank statement)"
- "Recorded call (audio file submitted)"
- "Witnessed by [Name]"

If you don't have evidence for an event, note that too: "No documentation available." You can still include the event if you plan to testify about it, but understand it's less persuasive without corroboration.

## Digital vs. Paper Timelines

### Digital Timelines

**Tools:**
- **Spreadsheet** (Excel, Google Sheets) – most common, easy to sort and filter
- **Timeline software** (Timetoast, Preceden, Aeon Timeline) – visual, good for presentations
- **Case management software** (Clio, MyCase) – integrates with documents and evidence

**Pros:**
- Easy to update
- Can sort, filter, and search
- Can link directly to digital evidence
- Can generate reports or exports for court

**Cons:**
- Requires technology
- Judge may not allow screens in courtroom
- Must print a copy for court anyway

### Paper Timelines

**Format:**
- **Printed table** (from spreadsheet)
- **Handwritten chart** (if legible)
- **Binder with tabs** (one page per event, organized chronologically)

**Pros:**
- No technology required
- Judge can flip through easily
- Can annotate during hearing
- No file compatibility issues

**Cons:**
- Hard to update or reorganize
- Cannot search or filter
- Time-consuming to create

**Best practice:** Create digitally, print for court. Bring both the printed timeline and your digital version (on tablet or laptop) so you can reference either.

## Linking Evidence to Timeline Events

### The Cross-Reference System

Each timeline entry should reference a specific exhibit or piece of evidence.

**Example entry:**

| Date | Event | Evidence |
|------|-------|----------|
| 04/15/2025 | Opposing party sent text stating they would not comply with visitation schedule | Exhibit C, page 2 (screenshot of text message dated 04/15/2025 at 8:47 PM) |

This allows the judge to:
1. Read the timeline entry
2. Quickly locate the supporting evidence
3. Verify the date and content

### Organizing Evidence by Timeline

Some litigants organize exhibits in chronological order to match the timeline. This works well for simple cases with a clear narrative arc.

**Example:**
- Timeline entry 1 (Jan 15): Exhibit A
- Timeline entry 2 (Feb 3): Exhibit B
- Timeline entry 3 (Feb 20): Exhibit C

For more complex cases, organize exhibits by topic and use clear cross-references in your timeline.

### What to Do If You Have Gaps

If you're missing evidence for key events:
- **Note the gap** in your timeline: "No photo available; testified to by [Witness]"
- **Explain why** evidence doesn't exist: "Incident occurred before parties had smartphones"
- **Use witness testimony** to fill in gaps when possible
- **Don't fabricate evidence** or dates to fill gaps

Judges understand that not every event is documented. Credible testimony can still carry weight.

## Presenting Timelines in Court

### Before the Hearing

1. **File your timeline** as part of your motion or pre-trial submissions (if required by local rules)
2. **Bring extra copies** (one for the judge, one for opposing party, one for yourself)
3. **Reference your timeline** in your written arguments: "See Timeline, entry for March 5, 2025"

### During the Hearing

1. **Introduce the timeline** as an exhibit or demonstrative aid
2. **Walk the judge through key entries** (don't read the entire timeline aloud)
3. **Use it to refresh your memory** when testifying
4. **Reference it during cross-examination** to challenge inconsistencies

**Example testimony:**
"Your Honor, I've prepared a timeline of the relevant events, marked as Exhibit 1. If I may direct the Court's attention to the entry for March 5, 2025, which shows the first time the opposing party failed to appear for scheduled visitation."

### Handling Objections

The opposing party may object to your timeline as:
- **Hearsay** (if it contains out-of-court statements offered for truth)
- **Unsworn testimony** (if it contains facts not yet testified to)
- **Argumentative** (if it contains conclusions rather than facts)

**How to respond:**
- "Your Honor, the timeline is a demonstrative aid to organize evidence, not substantive evidence itself. Each entry is supported by exhibits or testimony."
- "I will testify to each event under oath if needed."

Most judges allow timelines as organizational tools, but be prepared to authenticate each entry.

## State-Specific Variations

**Important:** Local rules on timelines and demonstrative aids vary:

- Some courts require **timelines to be filed 48 hours before the hearing**
- Some courts limit **timeline length** (e.g., no more than 2 pages)
- Some courts prohibit **timelines that contain argument or legal conclusions**
- Some courts allow **timelines as sworn affidavits** if properly formatted

**Always check:**
- Local Rules of Civil Procedure for your county
- Standing orders from your assigned judge
- Any pre-trial or hearing instructions

When in doubt, ask the Clerk of Court whether timelines are commonly used in your jurisdiction.

## About This Resource

This guide is based on common practices for organizing and presenting timelines in U.S. family court cases. It reflects general principles of evidence organization and courtroom presentation.

**This is not legal advice.** Timeline requirements and admissibility rules vary by jurisdiction. This guide provides practical tools for self-represented litigants, but it does not replace consultation with an attorney licensed in your state.

**For organizing the evidence referenced in your timeline,** review the [Evidence Intake Guide](/resources/evidence-intake) for step-by-step instructions on collecting, labeling, and storing evidence.`,
    relatedLinks: [
      { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
      { title: "Exhibits Guide: Labeling and Organization", href: "/resources/exhibits-guide" },
      { title: "How to Authenticate Digital Evidence", href: "/resources/authentication" },
    ],
    relatedQuestions: [
      { question: "What if I don't have evidence for every event?", href: "/resources/evidence-intake" },
      { question: "Can I use a timeline instead of testimony?", href: "/resources/courtroom-prep" },
      { question: "How far back should my timeline go?", href: "/resources/hearing-tomorrow" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Legal Aid Organizations" },
        { name: "Court Self-Help Portals" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Timeline requirements vary by court. Check local rules on demonstrative aids."
    }
  },
  {
    slug: "authentication",
    title: "Authentication Basics for Digital Evidence",
    excerpt: "How to authenticate texts, emails, and photos so they're admissible in court.",
    tag: "Evidence",
    topic: "Evidence & Exhibits",
    intent: "Learn",
    readTime: "11 min read",
    status: "published",
    seoTitle: "How to Authenticate Text Messages for Court | ThreadLock",
    metaDescription: "Testify: (1) you sent/received it, (2) from this phone number, (3) on this date, (4) accurate screenshot. Include metadata. Don't edit.",
    dateModified: "2026-02-13",
    body: `# Authentication Basics for Digital Evidence

Authentication means proving that evidence is what you claim it is. Without authentication, the judge won't admit your text messages, emails, or photos—no matter how important they are.

## Short Answer

**To authenticate digital evidence, testify under oath:** (1) This is a screenshot of a text message I received, (2) from [phone number] which belongs to [opposing party], (3) on [date], (4) and this is an accurate, unaltered representation of that message. Include metadata (timestamps, phone numbers, email headers) in your exhibits. Don't crop, edit, or alter images.

## What Authentication Means Legally

### The Foundation Requirement

Under most states' Rules of Evidence (similar to Federal Rule of Evidence 901), you must provide sufficient evidence to support a finding that the item is what you claim it is.

**For digital evidence, this means:**
- **Proving the source:** Who sent or created it?
- **Proving the date:** When was it created or sent?
- **Proving accuracy:** Is this an accurate representation of the original?
- **Proving authenticity:** Has it been altered or tampered with?

Authentication doesn't prove the content is true—just that the evidence is genuine. The judge still evaluates whether to believe it.

### What Happens If You Don't Authenticate

If you fail to authenticate evidence:
- **The judge will sustain an objection** and exclude the evidence
- **You lose the opportunity** to present that piece of evidence
- **Your case may fail** if that evidence was critical

Even in pro se (self-represented) cases, judges expect basic authentication. "I printed this from my phone" is not enough.

## How to Authenticate Text Messages

### Step 1: Take a Proper Screenshot

**Include in the screenshot:**
- **Phone number or contact name** of the sender/recipient
- **Date and time** of each message
- **Full message thread** showing context (not just one message)
- **Any relevant emoji, images, or attachments**

**Don't:**
- Crop out the sender's phone number
- Edit or delete messages from the thread
- Take a photo of your phone screen (use the screenshot function)
- Combine messages from different dates without showing breaks

### Step 2: Prepare Your Testimony

**You must testify:**
1. "This is a screenshot of a text message conversation between me and [opposing party]."
2. "The phone number shown, [XXX-XXX-XXXX], belongs to [opposing party]."
3. "I know this because [I've been texting this number for years / this is the number they gave me / I called them at this number]."
4. "These messages were exchanged on [dates shown in the screenshot]."
5. "This screenshot is an accurate and unaltered representation of the messages as they appeared on my phone."

### Step 3: Address Common Objections

**Objection: "There's no proof the opposing party sent these messages."**

**Response:** "Your Honor, I can testify that this phone number has been used by [opposing party] for [length of time]. I have other communications from this number, including [calls, voicemails, texts] that I can provide for comparison."

**Objection: "This screenshot could be fabricated."**

**Response:** "Your Honor, I can provide the original messages on my phone for the Court's inspection. I can also provide my phone records from [carrier] showing these messages were sent and received on the dates indicated."

**Objection: "Hearsay."**

**Response:** This is a separate issue from authentication. See "Foundation Testimony Requirements" below.

### Additional Authentication Methods

If your testimony alone is not enough:
- **Subpoena phone records** from your wireless carrier showing texts were sent/received on specific dates
- **Have the opposing party admit** the messages are genuine during discovery or testimony
- **Call a witness** who saw the messages on your phone at the time
- **Provide expert testimony** from a digital forensics specialist (rare in family court, usually not necessary)

Most judges accept testimony plus screenshots as sufficient authentication in family court cases.

## How to Authenticate Emails

### Step 1: Include Email Headers

**Full headers show:**
- Sender's email address
- Recipient's email address
- Date and time sent
- Subject line
- Message ID (a unique identifier)
- Routing information (shows the path the email took)

**To view headers:**
- **Gmail:** Open the email, click three dots (More), select "Show original"
- **Outlook:** Open the email, click File > Properties
- **Apple Mail:** Open the email, select View > Message > All Headers

Print or screenshot the email **with headers visible** for best authentication.

### Step 2: Prepare Your Testimony

**You must testify:**
1. "This is an email I received from [opposing party] on [date]."
2. "It was sent from [email address], which belongs to [opposing party]."
3. "I know this because [this is the email address they've used to communicate with me / this is the email listed on court documents / I've received other emails from this address]."
4. "This is an accurate and unaltered printout of the email as I received it."

### Step 3: Address Common Objections

**Objection: "Anyone could create a fake email."**

**Response:** "Your Honor, the email headers show the routing information and message ID, which can be verified by the email provider. I can also provide additional emails from this same address for comparison."

**Objection: "The email could have been altered after being received."**

**Response:** "Your Honor, I can log into my email account in court to show the original message. The email headers also include a unique message ID that matches the original."

### Additional Authentication Methods

- **Forward the email to your attorney** (creates a second copy with headers)
- **Subpoena records from the email provider** (Google, Microsoft, etc.)
- **Request the opposing party to admit** the email is genuine
- **Use a notarized screenshot** service (e.g., Page Vault) that timestamps and preserves web pages

## How to Authenticate Photos and Videos

### Step 1: Preserve Metadata

**Metadata includes:**
- Date and time the photo/video was taken
- Location (GPS coordinates if available)
- Device used (phone model, camera model)
- File size and format

**To preserve metadata:**
- **Don't screenshot or crop** the original photo
- **Export the original file** from your phone or camera
- **Use a metadata viewer** (ExifTool, online EXIF viewers) to extract and print metadata
- **Include the metadata printout** as part of your exhibit

**Warning:** Emailing or texting photos often strips metadata. Use cloud storage (Google Drive, Dropbox) or USB transfer to preserve metadata.

### Step 2: Prepare Your Testimony

**For photos:**
1. "This is a photo I took on [date] at [time]."
2. "I took this photo using [my phone / my camera] at [location]."
3. "This photo accurately depicts [what you saw at the time]."
4. "I have not edited, cropped, or altered this photo."
5. "The metadata shows the date, time, and device used to take this photo."

**For videos:**
1. "This is a video I recorded on [date] at [time]."
2. "I recorded this video using [my phone / my camera] at [location]."
3. "This video accurately depicts [what occurred]."
4. "I have not edited or altered this video."
5. "The video runs continuously from start to finish without cuts."

### Step 3: Address Concerns About Editing

**If you cropped or edited the photo:**
- **Admit it upfront:** "Your Honor, I cropped this photo to remove [irrelevant background / personal information], but I did not alter the subject of the photo."
- **Provide the original:** "I have the unedited original available if the Court wishes to review it."

**If video has gaps or cuts:**
- **Explain why:** "Your Honor, the video was recorded in two segments because my phone ran out of space."
- **Authenticate each segment separately**

Judges are more concerned about **misleading edits** than technical adjustments (e.g., adjusting brightness). Be transparent.

### Videos and Audio Recordings

**Special considerations:**
- Some states require **two-party consent** to record conversations (check your state's wiretapping laws)
- Some states prohibit **secret recordings** even if you're a party to the conversation
- Judges may exclude **illegally obtained recordings** even if relevant

**Before recording:**
- Know your state's consent laws
- If in doubt, announce that you're recording
- Never record without consent in two-party consent states

## Foundation Testimony Requirements

### What is Foundation?

**Foundation** is the testimony or evidence that establishes a basis for admitting an exhibit.

**For digital evidence, foundation includes:**

**1. Authentication** (covered above)
- Proving the evidence is what you claim it is

**2. Personal Knowledge**
- Testifying about things you personally observed, sent, or received
- Not about what someone told you (that's hearsay)

**3. Relevance**
- Explaining why this evidence matters to the case
- Connecting it to a legal issue (custody, support, contempt, etc.)

**4. Best Evidence**
- Providing the original or best available copy
- Explaining why the original is not available if using a copy

### Sample Foundation Testimony

**For a text message:**

"Your Honor, I'd like to introduce Exhibit A, a screenshot of text messages between me and the opposing party. I took this screenshot on my phone on [date]. The phone number shown, [XXX-XXX-XXXX], belongs to the opposing party. I know this because I've been texting this number since [year], and it's the same number listed on court documents filed in this case. These messages were exchanged on [date], and this screenshot accurately represents the messages as they appeared on my phone. I have not edited or altered these messages in any way."

**For an email:**

"Your Honor, I'd like to introduce Exhibit B, an email I received from the opposing party on [date]. This email was sent from [email address], which I know belongs to the opposing party because it's the same email address used in prior communications, including [specific example]. The email headers, which I've included in the exhibit, show the date, time, and routing information. This is an accurate printout of the email as I received it."

**For a photo:**

"Your Honor, I'd like to introduce Exhibit C, a photo I took on [date] at [location]. I took this photo using my cell phone to document [specific condition or event]. The metadata, which I've printed and attached to the exhibit, shows the date, time, and GPS coordinates where the photo was taken. This photo accurately depicts what I observed at that time and place. I have not edited or altered the photo."

### Handling Hearsay Objections

Authentication and hearsay are **two separate issues**.

**Authentication:** Proving the message is real
**Hearsay:** Whether the content of the message is admissible

**Hearsay rule:** Out-of-court statements offered to prove the truth of the matter asserted are generally inadmissible unless an exception applies.

**Common exceptions in family court:**
- **Party admission:** Statements by the opposing party can be admitted against them
- **State of mind:** Statements showing someone's intent, plan, or emotional state
- **Effect on the listener:** Statements offered to show you had notice or were threatened (not for the truth of the content)

**Example:**
- **Hearsay objection sustained:** "This text proves opposing party was at the bar" (offered for truth)
- **Hearsay objection overruled:** "This text shows opposing party threatened me" (party admission)

If the opposing party sent the message, it's usually admissible as a party admission. If a third party sent it, you may need an exception.

## Common Authentication Objections and How to Overcome Them

### Objection 1: "No Foundation"

**How to overcome:**
Provide detailed testimony about how you obtained the evidence, when it was created, and why you believe it's accurate.

### Objection 2: "Lack of Authentication"

**How to overcome:**
Testify about the source (phone number, email address, account) and your personal knowledge connecting it to the opposing party.

### Objection 3: "This Could Be Fabricated"

**How to overcome:**
Offer to show the original on your device, provide metadata, or submit phone/email records from the carrier.

### Objection 4: "Hearsay"

**How to overcome:**
Argue that the statement is a party admission (if sent by opposing party) or falls under another hearsay exception. If the objection is sustained, explain how the evidence is relevant even without offering it for the truth (e.g., to show notice, threat, or state of mind).

### Objection 5: "Best Evidence Rule"

**How to overcome:**
Explain that a screenshot or printout is a duplicate of the original digital file, which is equally accurate. If the original file is available, offer to provide it.

## State-Specific Variations

**Important:** Authentication rules are based on state Rules of Evidence, which vary:

- Some states have **specific rules for electronic evidence** (e.g., Uniform Rules of Evidence)
- Some states require **additional foundation** for social media posts or messages
- Some states have **stricter consent laws** for audio and video recordings
- Some states allow **notarized affidavits** in lieu of live testimony for authentication

**Always check:**
- Your state's Rules of Evidence (typically based on Federal Rules of Evidence)
- Local rules for your court
- Case law on authentication of digital evidence in your jurisdiction

When in doubt, consult an attorney or legal aid organization in your state.

## About This Resource

This guide is based on common authentication principles found in U.S. state Rules of Evidence, which generally follow the Federal Rules of Evidence. It reflects typical requirements for authenticating digital evidence in civil family law cases.

**This is not legal advice.** Authentication requirements, hearsay exceptions, and consent laws vary by state. This guide provides a practical framework for self-represented litigants, but it does not replace consultation with an attorney licensed in your state.

**For organizing and labeling your authenticated evidence,** review the [Evidence Intake Guide](/resources/evidence-intake) and the [Exhibits Guide](/resources/exhibits-guide) for step-by-step instructions on preparing exhibits for court.`,
    relatedLinks: [
      { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
      { title: "Evidence Authentication 101", href: "/resources/guides/evidence-authentication" },
      { title: "Exhibits Guide: Labeling and Organization", href: "/resources/exhibits-guide" },
    ],
    relatedQuestions: [
      { question: "What if I deleted the original text messages?", href: "/resources/evidence-intake" },
      { question: "Can I use screenshots from social media?", href: "/resources/guides/evidence-authentication" },
      { question: "Do I need an expert witness to authenticate emails?", href: "/resources/courtroom-prep" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence" },
        { name: "State Discovery Rules" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 180,
      accuracyNotes: "Authentication requirements and hearsay exceptions vary by state. Consult local rules of evidence."
    }
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals" },
        { name: "Legal Aid Organizations" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Courtroom procedures vary by court. This kit provides general guidance."
    },
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals", href: "https://www.uscourts.gov/forms" },
        { name: "Federal Rules of Civil Procedure" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Filing requirements vary by jurisdiction. Always verify with your local court."
    },
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence" },
        { name: "Legal Aid Organizations" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 180,
      accuracyNotes: "Evidence rules and authentication requirements vary by state. Consult local rules."
    },
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
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Civil Procedure" },
        { name: "Court Self-Help Portals" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 365,
      accuracyNotes: "Self-representation rules and court procedures vary by state and court."
    },
    body: `# The Complete Guide to Self-Representation in Family Court

Self-representation in family court requires organization, preparation, and understanding of court procedures. This guide provides practical guidance for navigating the process.

## Understanding Your Rights and Responsibilities

As a self-represented litigant, you have the same rights as represented parties but must follow all court rules and procedures. Courts cannot provide legal advice, but many offer self-help centers and form packets.

## Filing Procedures

Start by filing the appropriate petition or response with your local family court. Each jurisdiction has specific forms, filing fees, and service requirements. Verify local rules before submitting documents.

## Court Procedures and Expectations

Courts expect professional conduct, punctuality, and adherence to procedural rules. Arrive early, dress appropriately, and bring all required documents organized in a binder.

## Evidence Rules and Presentation

Only admissible evidence can be considered. Documents must be authenticated, witnesses must have personal knowledge, and hearsay is generally prohibited. Organize your evidence chronologically with tabs and labels.

## Working with Opposing Counsel

When the other party has an attorney, direct all communication through them. Respond to discovery requests within deadlines and maintain professional correspondence.

## Settlement vs. Trial

Most family court cases settle. Consider mediation or settlement conferences before trial. Settlement gives you control over outcomes rather than leaving decisions to a judge.

## Post-Judgment Modifications

Circumstances change. Courts can modify orders when there is a substantial change in circumstances. Document changes carefully and file modifications properly.

## Disclaimer

This is not legal advice. Family law varies significantly by jurisdiction. Verify all procedures and requirements with your local court. Consider consulting with a licensed attorney for case-specific guidance.`,
  },
  {
    slug: "evidence-authentication",
    title: "Evidence Authentication 101",
    summary: "How to make your photos, texts, and emails admissible without hiring an expert.",
    tags: ["Evidence", "Authentication"],
    status: "published",
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence" },
        { name: "Court Self-Help Portals" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 180,
      accuracyNotes: "Authentication standards may vary by state. Consult local rules of evidence."
    },
    body: `# Evidence Authentication 101

Authentication is the process of proving that evidence is what you claim it to be. Courts require proper authentication before admitting evidence.

## Legal Requirements for Authentication

Federal Rule of Evidence 901 and similar state rules require that evidence be authenticated by testimony or other means showing it is genuine. The standard is "sufficient to support a finding that the item is what the proponent claims."

## Foundation Testimony Framework

To authenticate evidence, you typically need a witness with personal knowledge to testify about:
- What the item is
- How they know it
- When and where it was created or obtained
- That it has not been altered

## Text Message Authentication

To authenticate text messages:
1. Testify that you sent or received the messages
2. Identify the phone numbers involved
3. Explain how you obtained the screenshots or records
4. Note any identifying information (profile pictures, previous conversations)
5. Bring the actual device if possible

## Email Authentication

For emails, establish:
- The email addresses of sender and recipient
- Your access to the email account
- Date and time of the message
- Context showing the email is genuine
- Complete headers if authenticity is disputed

## Photo and Video Authentication

Authenticate photos and videos by testifying about:
- What the image depicts
- When and where it was taken
- Who took it
- That it fairly and accurately represents what it shows
- That it has not been edited or altered

## Social Media Evidence

Social media posts can be authenticated through:
- Direct testimony from the person who posted
- Distinctive characteristics (username, profile details, writing style)
- Reply posts or comments showing authenticity
- Metadata from the platform

## Common Objections and Responses

Opposing parties may object based on:
- Insufficient foundation (response: provide more detail about source)
- Hearsay (response: explain it's not offered for truth or fits an exception)
- Relevance (response: explain how it relates to the case)

## Self-Authentication Options

Some documents are self-authenticating under court rules:
- Official public records with seals
- Certified copies of public records
- Newspapers and periodicals
- Business records with proper affidavits

## Disclaimer

This is general information about evidence authentication. Rules vary by jurisdiction and court. Verify local rules and procedures. Consider consulting with a licensed attorney for case-specific guidance.`,
  },
  {
    slug: "proof-of-service-states",
    title: "Proof of Service State-by-State",
    summary: "Requirements and templates for every U.S. state and territory.",
    tags: ["Templates", "Proof of Service"],
    status: "published",
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Civil Procedure" },
        { name: "State Bar Association Resources" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Service requirements vary significantly by state. Always verify with local court."
    },
    body: `# Proof of Service State-by-State

Proof of service requirements vary by state. This guide provides general information about serving documents in family court proceedings across different jurisdictions.

## General Service Requirements

Most states require that court documents be served on the other party using approved methods. Common service methods include:
- Personal service by a process server or sheriff
- Service by certified mail (where allowed)
- Substituted service (leaving documents with another adult)
- Publication (for parties who cannot be located)

## Timeline Requirements

Most jurisdictions require service within a specific timeframe after filing:
- Initial petitions: Often 60-120 days
- Responses: Typically 20-30 days after service
- Motions and other documents: Usually 5-15 days before hearing

## Personal Service Rules

Personal service requirements are most strict for initial petitions. The server must:
- Be over 18 years old
- Not be a party to the case
- Hand deliver documents directly to the person
- Complete an affidavit or declaration of service

## Mail Service

Some states allow service by certified or registered mail for certain documents:
- Usually not permitted for initial divorce or custody petitions
- May be allowed for modifications and post-judgment motions
- Requires return receipt as proof
- May require additional notice methods

## Substituted Service

When personal service is not possible, substituted service may be allowed:
- Leave documents with a competent adult at residence or workplace
- Follow up with mail service to the same address
- File additional affidavit explaining why personal service was not possible

## Proof of Service Documentation

After service, file proof with the court:
- Affidavit of service or declaration
- Certified mail receipts
- Date, time, location, and method of service
- Physical description of person served
- Server's signature under penalty of perjury

## Special Considerations

Additional rules may apply for:
- Service on parties in the military (SCRA requirements)
- Service on parties in other states
- Service on parties in other countries
- Service on government entities
- Service when protective orders exist

## State-Specific Resources

For detailed state requirements:
- Check your local court's website for forms and instructions
- Review your state's family law rules of procedure
- Contact your court's self-help center
- Consult your state bar association's resources

## Disclaimer

Service requirements vary significantly by jurisdiction. This is general information only, not legal advice. Always verify current requirements with your local court. Improper service can delay your case or result in dismissal. Consider consulting with a licensed attorney for case-specific guidance.`,
  },
  {
    slug: "parenting-time-calculations",
    title: "Understanding Parenting Time Calculations",
    summary: "Calculate overnights, holidays, and summer schedules accurately.",
    tags: ["Parenting Plans", "Calculations"],
    status: "published",
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "State Bar Association Resources" },
        { name: "Child Support Guidelines" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Parenting time calculation methods and custody thresholds vary by state."
    },
    body: `# Understanding Parenting Time Calculations

Parenting time calculations determine the percentage of time each parent has with the children. These calculations can affect child support, decision-making authority, and custody labels.

## Why Overnight Calculations Matter

Courts often use overnight counts to:
- Calculate child support obligations
- Determine physical custody percentages
- Assess whether custody is sole or shared
- Evaluate parenting plan effectiveness

## How Courts Count Overnights

An overnight is typically counted for the parent who has the child when they wake up in the morning. Some courts also count:
- The location where the child goes to sleep
- Which parent has the child the majority of the day
- The parent responsible for getting the child to school

## Calculating Percentage of Parenting Time

Basic calculation: (Your overnights ÷ 365 days) × 100 = Your percentage

Example: 
- Parent A: 183 overnights = 50.1%
- Parent B: 182 overnights = 49.9%

## Holiday and Vacation Calculations

Include special provisions:
- Alternate major holidays (Thanksgiving, Christmas, spring break)
- Summer vacation blocks (often 1-4 weeks per parent)
- Three-day weekends
- School breaks and teacher workdays

Count all overnights, including holidays, in your annual total.

## School Year vs. Summer Schedules

Many parenting plans include different schedules for school year and summer:
- School year: Often follows weekly patterns (e.g., alternate weeks, 2-2-3)
- Summer: May include extended blocks with each parent
- Calculate annual totals using both schedules combined

## Impact on Child Support

Most states' child support formulas adjust based on parenting time:
- Sole custody (0-10% for non-custodial parent): Full support obligation
- Shared physical custody (25-50%): Reduced support obligation
- Equal parenting time (50-50): Support based on income differential

Check your state's child support guidelines for specific thresholds.

## Common Calculation Mistakes

Avoid these errors:
- Not counting holiday overnights
- Miscounting February in leap years
- Forgetting to include vacation time
- Not accounting for alternating schedules
- Rounding percentages incorrectly

## Tools and Documentation

To track parenting time:
- Use calendar apps with color coding for each parent
- Maintain written logs of actual time spent
- Document any deviations from the court order
- Calculate annually and keep records
- Update calculations when schedules change

## State-Specific Calculation Rules

Some jurisdictions have specific rules:
- Minimum thresholds for shared custody designation
- Required calculation methods for support worksheets
- How to handle midpoint transitions
- Treatment of overnight visits under 24 hours

Verify your state's requirements with local court rules or the state child support enforcement agency.

## Disclaimer

This is general information about parenting time calculations. Child support and custody laws vary by state. Calculations should be verified with your jurisdiction's guidelines. This is not legal advice. Consider consulting with a licensed attorney or your state's child support enforcement office for case-specific guidance.`,
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
    body: `# Proof of Service

Proof of service is one of the most critical—and frequently mishandled—procedural requirements in family court. It's your written evidence that you properly delivered court documents to the other party. Without valid proof of service, your motion can be rejected, your hearing postponed, or your case dismissed entirely, regardless of the merits of your arguments.

## What Is Proof of Service?

Proof of service is a signed declaration under penalty of perjury that documents when, where, how, and to whom you delivered court papers. It proves you gave the other party proper notice and a fair opportunity to respond. Different courts use different forms—California uses FL-335 for mail service and FL-330 for personal service, while New York requires an Affidavit of Service. Federal courts follow specific rules under FRCP Rule 5.

## Service Methods and Documentation

**Personal Service**: Someone over 18 (not you) hand-delivers documents directly to the other party. This is the most reliable method and hardest to contest. The server must complete a declaration detailing the exact date, time, location, and identifying characteristics of the person served.

**Service by Mail**: Documents are mailed to the other party's last known address. Most jurisdictions require adding 5 extra days for the other party to respond. The proof must include the mailing date and complete address used.

**Electronic Service**: Many courts now allow service via email or e-filing portals. This generates automatic proof of service records but requires prior consent from the other party or court authorization.

**Substituted Service**: Used when personal service isn't possible after multiple attempts. The server leaves documents with another adult at the residence or workplace, then follows up by mail. Strict documentation requirements apply.

## Related Resources

For detailed templates and instructions, see our [Proof of Service Pack](/resources/proof-of-service) guide, which includes state-specific requirements. The [Proof of Service State-by-State](/tools/proof-of-service-states) tool provides jurisdiction-specific forms and rules. For common questions, visit [What counts as proof of service?](/resources/q/proof-of-service-definition)

## Common Mistakes

**Using the wrong form**: Each state has specific proof of service forms. California's FL-335 won't work in Texas. Always verify your jurisdiction's required form.

**Serving documents yourself**: You cannot serve your own court papers. The server must be an uninvolved third party who's at least 18 years old.

**Missing the deadline**: Proof of service must be filed by specific deadlines, often several days before a hearing. Late filing can result in continuances or dismissal.

**Incomplete information**: Missing details like exact service time, location, or documents served can invalidate your proof. Fill out every field on the form.

**Skipping proof of service entirely**: Some people assume filing with the court is enough. It's not. You must serve the other party AND file proof that you did so.`,
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Civil Procedure", href: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure" },
        { name: "California Courts Self-Help Center", href: "https://www.courts.ca.gov/selfhelp-serving.htm" },
        { name: "American Bar Association - Service of Process", href: "https://www.americanbar.org/" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Service requirements vary significantly by state and case type. Always verify local court rules and deadlines for your specific jurisdiction."
    }
  },
  {
    slug: "evidence-exhibits",
    title: "Evidence & Exhibits",
    promise: "Capture, preserve, and organize records that are usable in court.",
    resourceCount: 6,
    body: `# Evidence & Exhibits

Raw evidence means nothing if you can't find it when you need it, authenticate it properly, or present it clearly to a judge. Family court cases often hinge on documentary evidence—text messages, emails, photos, financial records, and written communications. Understanding how to capture, preserve, organize, and label evidence is essential for self-represented litigants.

## What Are Evidence and Exhibits?

**Evidence** is information presented to prove or disprove facts in your case. In family law, this typically includes text messages, emails, photos, financial documents, medical records, school reports, and written agreements.

**Exhibits** are specific pieces of evidence formally marked and presented to the court. During hearings, you'll reference "Exhibit A" or "Exhibit 1" rather than fumbling through stacks of papers. Proper labeling makes your evidence accessible and credible.

## Capturing and Preserving Evidence

For **text messages and emails**, take full screenshots showing timestamps, phone numbers, and complete conversation threads. Don't crop or edit—authenticity is crucial. Save original files with metadata intact. For **photos**, capture images immediately with timestamps and location data enabled. Document the context of what you're photographing.

For **financial records**, collect pay stubs, bank statements, tax returns, and receipts systematically. Keep both electronic and paper copies. Organize chronologically and by category (income, expenses, assets, debts).

## Organizing and Labeling Exhibits

Standard convention assigns **letters (A, B, C)** to plaintiff/petitioner exhibits and **numbers (1, 2, 3)** to defendant/respondent exhibits. Create an exhibit list that includes each designation, a brief description, page count, and relevant dates. Use adhesive exhibit stickers or colored tabs on physical documents, and include exhibit labels in PDF bookmarks for electronic filings.

## Related Resources

Our [Evidence Intake: Photos, Texts, Email](/resources/evidence-intake) guide provides detailed capture and preservation techniques. Learn the formal authentication process in [Evidence Authentication](/tools/evidence-authentication). For courtroom preparation, see [How do I label exhibits for court?](/resources/q/exhibit-labeling)

## Common Mistakes

**Not preserving metadata**: Cropped screenshots or edited photos lose credibility. Keep original files with complete metadata intact.

**Poor organization**: Dumping 200 unsorted text messages on a judge doesn't help your case. Organize chronologically and highlight key messages.

**Missing authentication**: Courts require you to authenticate evidence—proving it's what you claim it is. Include declarations explaining the source and chain of custody.

**Wrong labeling conventions**: Using numbers when you should use letters, or skipping exhibit lists entirely, creates confusion and wastes court time.

**Bringing only one copy**: Always bring three copies of each exhibit—one for the judge, one for the opposing party, and one for yourself.

**Forgetting relevance**: Not all evidence is admissible. Make sure each exhibit directly relates to issues in your case and isn't just emotional clutter.`,
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence", href: "https://www.law.cornell.edu/rules/fre" },
        { name: "California Evidence Code", href: "https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=EVID" },
        { name: "National Center for State Courts", href: "https://www.ncsc.org/" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Evidence rules vary by jurisdiction. Hearsay exceptions, authentication requirements, and admissibility standards differ between states and between civil and criminal proceedings."
    }
  },
  {
    slug: "hearings-prep",
    title: "Hearings & Courtroom Prep",
    promise: "Walk in prepared, organized, and coherent under pressure.",
    resourceCount: 5,
    body: `# Hearings & Courtroom Prep

Walking into a courtroom as a self-represented litigant is intimidating. The judge has limited time, the opposing party may have an attorney, and you need to present facts clearly under pressure. Proper preparation—knowing what to bring, how to organize materials, what to say, and what to avoid—makes the difference between being heard and being dismissed.

## What Is a Court Hearing?

A hearing is a formal proceeding where a judge listens to arguments, reviews evidence, and makes decisions about your case. Family law hearings cover temporary orders, child custody arrangements, support modifications, restraining orders, and trial preparation. Unlike informal mediation, hearings follow strict procedural rules and create binding court orders.

## Essential Preparation

**Documents**: Bring originals of all filed court papers, marked exhibits with tabs, your declaration, proof of service, and previous court orders. Have three copies of everything—one for the judge, one for the opposing party, and one for yourself.

**Exhibits**: Pre-mark evidence with exhibit labels (letters for petitioner, numbers for respondent). Create a formal exhibit list describing each item. Use binders with tabs for organization. Bring originals if authenticity might be challenged.

**Argument Outline**: Write a brief, organized outline of key points you want to make. Focus on facts, not emotions. Prepare questions for the opposing party if they'll testify. Practice your opening statement until it's clear and concise (2-3 minutes maximum).

**Practical Items**: Bring a notepad, pens, calendar, calculator, and relevant statutes or case citations. Dress professionally—business attire shows respect for the court. Arrive 30 minutes early to check in and review materials.

## Courtroom Behavior

Address the judge as "Your Honor." Stand when speaking. Listen carefully to questions and answer directly. Don't interrupt the judge or opposing party. Stay calm even if provoked—emotional outbursts damage your credibility. Take notes during the hearing to reference in future filings.

## Related Resources

For immediate hearing preparation, see [Hearing Tomorrow Checklist](/resources/hearing-tomorrow). Our [Courtroom Prep](/resources/courtroom-prep) guide covers etiquette and strategy. For specific questions, visit [What should I bring to a hearing?](/resources/q/hearing-checklist)

## Common Mistakes

**Arriving unprepared**: Showing up without organized exhibits, copies, or a clear plan makes you look disorganized and wastes the judge's time.

**Rambling or emotional testimony**: Judges want facts, not feelings. Stick to relevant, specific information that supports your legal arguments.

**Ignoring court orders to exchange information**: If you were ordered to share exhibits or witness lists beforehand and didn't, the judge may exclude your evidence.

**Dressing inappropriately**: Casual or revealing clothing undermines your credibility. Treat court like a professional job interview.

**Arguing with the opposing party**: Never speak directly to the other party during a hearing. Address all comments to the judge.

**Bringing children**: Unless they're testifying or it's absolutely unavoidable, don't bring kids to hearings. It's stressful for them and distracting for the court.

**Not having a backup plan**: Technology fails. Bring paper copies even if you plan to use a laptop or tablet.`,
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "National Center for State Courts - Self-Representation", href: "https://www.ncsc.org/selfrepresentation" },
        { name: "California Courts Self-Help - Courtroom Basics", href: "https://www.courts.ca.gov/selfhelp-courtroom.htm" },
        { name: "American Bar Association - Going to Court", href: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Courtroom procedures and hearing formats vary by jurisdiction and case type. Check local court rules for specific requirements regarding exhibit exchanges, witness lists, and testimony procedures."
    }
  },
  {
    slug: "parenting-plans",
    title: "Parenting Plans",
    promise: "Structure routines, transitions, and communication clearly.",
    resourceCount: 3,
    body: `# Parenting Plans

A parenting plan is a detailed written agreement that describes how you and the other parent will share time, responsibilities, and decision-making for your children. Courts require parenting plans in custody cases because vague arrangements lead to constant disputes. A well-crafted plan reduces conflict, provides predictability for children, and gives you a framework for enforcement when problems arise.

## Core Components of a Parenting Plan

**Regular Schedule**: Define where the child lives during normal weeks. Be specific: "Child resides with Mother Monday 6pm through Thursday 8am, with Father Thursday 8am through Monday 6am." Include school nights and weekends.

**Holidays and Special Days**: List which parent gets which holidays (Thanksgiving, Christmas, spring break, etc.). Specify whether you alternate yearly or split the day. Include birthdays, Mother's Day, Father's Day, and religious holidays.

**Summer and School Breaks**: Address extended time during summer vacation, winter break, and spring break. Specify how parents communicate vacation plans and deadlines for notice.

**Decision-Making Authority**: Clarify who makes major decisions about education, non-emergency healthcare, religious upbringing, and extracurricular activities. Options include joint decision-making, sole authority, or split domains (e.g., one parent decides education, the other decides medical).

**Communication and Exchanges**: Describe how parents will communicate about the child (phone, email, co-parenting app). Specify exchange locations (home, school, public place), times, and who's responsible for transportation.

**Right of First Refusal**: If one parent can't care for the child during their scheduled time, does the other parent get first option before using a babysitter? Specify the timeframe (e.g., "if absence exceeds 4 hours").

## Flexibility vs. Specificity

Parenting plans must balance flexibility with clarity. Courts want specific schedules, but you also need mechanisms for changes. Include provisions for modifying the plan by mutual written agreement, handling emergencies, and resolving disputes (e.g., mediation before going back to court).

## Related Resources

Our comprehensive [Parenting Plan Builder Guide](/resources/parenting-plans) walks through each section with examples. Use the [Parenting Time Calculations](/tools/parenting-time-calculations) tool to calculate overnight percentages for child support purposes.

## Common Mistakes

**Being too vague**: "Reasonable visitation" or "flexible schedule" invites constant arguments. Specify exact days and times.

**Ignoring logistics**: Failing to address who drives, where exchanges happen, or how parents communicate creates daily friction.

**Overcomplicating exchanges**: Complex schedules confuse children and increase conflict. Simpler is usually better, especially for young children.

**Not planning for holidays years in advance**: Alternating holidays prevents annual fights. Specify even/odd years clearly.

**Forgetting about school activities and extracurriculars**: Address who can sign kids up for activities, how costs are split, and whether the other parent's schedule must be accommodated.

**Excluding a modification process**: Circumstances change. Include language about how you'll modify the plan (mutual agreement in writing, mediation, court petition).

**Using the plan to punish the other parent**: Parenting plans should prioritize children's needs, not your desire for control. Unnecessarily restrictive provisions backfire.

**Not addressing technology and communication**: Modern parenting plans should cover video calls, phone access, and social media (who can post photos of children, etc.).`,
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA)", href: "https://www.uniformlaws.org/" },
        { name: "American Academy of Matrimonial Lawyers", href: "https://www.aaml.org/" },
        { name: "Association of Family and Conciliation Courts", href: "https://www.afccnet.org/" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Parenting plan requirements and enforcement mechanisms vary by state. Some states require specific formats or court-approved templates. Consult local family law rules."
    }
  },
  {
    slug: "financial-declarations",
    title: "Financial Declarations",
    promise: "Answer financial questions without scrambling for numbers.",
    resourceCount: 4,
    body: `# Financial Declarations

Family court requires detailed financial information for nearly every case involving child support, spousal support, property division, or attorney's fees. Financial declarations—sometimes called income and expense declarations, financial affidavits, or statements of net worth—force you to disclose your complete financial picture under penalty of perjury. Having this information organized before you need it reduces stress and prevents errors that could hurt your case.

## What Is a Financial Declaration?

A financial declaration is a mandatory court form that itemizes your income, expenses, assets, debts, and sometimes your financial history. Different states use different forms (California's FL-150, New York's Statement of Net Worth, Texas's Financial Information Form), but all serve the same purpose: giving the court and opposing party a complete financial snapshot.

## Required Information Categories

**Income**: List all sources—employment wages, self-employment income, rental income, investment returns, bonuses, overtime, unemployment benefits, disability payments, social security, pensions, and any other money received. Include gross amounts (before taxes) and net amounts (after deductions). Attach recent pay stubs and tax returns.

**Expenses**: Detail monthly costs for housing (rent/mortgage, property tax, insurance, utilities, maintenance), food, clothing, transportation (car payment, gas, insurance, maintenance), medical care, childcare, education, insurance premiums, debt payments, and miscellaneous expenses. Be realistic—inflating expenses is perjury and easily disproved.

**Assets**: Disclose bank accounts, retirement accounts, real property, vehicles, business interests, stocks and bonds, and personal property of significant value. Include current values, how the asset is titled (individual or joint), and acquisition dates.

**Debts**: List credit cards, loans, mortgages, unpaid taxes, and other liabilities. Include current balances, monthly payments, creditor names, and whether debts are individual or joint obligations.

## Accuracy and Supporting Documents

Financial declarations require supporting documentation: pay stubs, tax returns, bank statements, credit card statements, mortgage statements, and loan documents. Courts often require the most recent two years of tax returns and three months of pay stubs. Deliberately hiding assets or misrepresenting income constitutes perjury and can result in sanctions, adverse findings, and even criminal charges.

## Related Resources

Our [Financial Snapshot Worksheet](/resources/financial-snapshot) helps you gather required information methodically. The worksheet organizes data into categories matching most financial declaration forms, making completion faster and more accurate.

## Common Mistakes

**Underreporting income**: Forgetting to include bonuses, side gigs, cash payments, or irregular income. Courts can impute income if they believe you're hiding earnings.

**Overestimating expenses**: Inflating costs to reduce support obligations or increase support claims. Judges spot unrealistic expenses quickly (e.g., claiming $1,500/month groceries for one person).

**Using old information**: Financial declarations require current data. Using numbers from six months ago won't work. Update your information before filing.

**Omitting assets or debts**: "Forgetting" to list a bank account, retirement fund, or valuable item is perjury. Full disclosure is mandatory even if you think the asset is "yours."

**Rounding too much or being imprecise**: Courts want specific numbers, not estimates. "$2,347.12" is better than "about $2,300."

**Not keeping copies**: You'll need to reference your financial declaration multiple times throughout your case. Keep copies with your supporting documents.

**Filing without supporting documents**: Many courts require attaching pay stubs, tax returns, and other verification. A declaration without documentation may be rejected.

**Not updating when circumstances change**: If your income or expenses change significantly during the case, you may need to file an updated financial declaration.`,
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Internal Revenue Service - Tax Information for Families", href: "https://www.irs.gov/" },
        { name: "California Courts - Financial Disclosures", href: "https://www.courts.ca.gov/selfhelp-financials.htm" },
        { name: "American Bar Association - Family Law Financial Issues", href: "https://www.americanbar.org/groups/family_law/" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Financial declaration forms and requirements vary by state. Income calculation methods, expense standards, and mandatory attachments differ by jurisdiction. Consult local court rules and forms."
    }
  },
  {
    slug: "official-forms",
    title: "Official Forms & Portals",
    promise: "Access state-provided forms and rules—don't pay for free resources.",
    resourceCount: 8,
    body: `# Official Forms & Portals

Many websites and services charge $50-$300 for court forms that your state provides for free. As a self-represented litigant, knowing where to find official forms, court rules, and self-help resources can save you hundreds of dollars and ensure you're using current, jurisdiction-approved documents. Every state maintains court websites with free forms, instructions, and often video tutorials designed specifically for people without attorneys.

## Why Use Official Sources?

**Cost**: State court websites provide forms at no charge. Commercial sites charge for the same documents.

**Accuracy**: Official forms are current and jurisdiction-specific. Generic forms from online services may be outdated or formatted for the wrong state.

**Instructions**: Court self-help centers provide plain-language guidance written for non-attorneys. Commercial sites often lack detailed instructions or provide confusing legalese.

**Fillable PDFs**: Most official court sites offer fillable PDF forms that you can complete electronically, save, and print or e-file.

## Where to Find Official Forms

**State Court Websites**: Every state has a judiciary website with a forms section and self-help center. California's courts.ca.gov, New York's nycourts.gov, and Texas's txcourts.gov provide comprehensive form libraries. Search "[your state] court forms family law" to find your jurisdiction's site.

**County Court Websites**: Local county court websites often provide additional forms specific to that jurisdiction, local rules, and information about filing procedures and fees.

**Court Clerk's Offices**: Most clerk's offices have physical forms available and staff who can answer procedural questions (though they can't give legal advice).

**Legal Aid Organizations**: State and local legal aid societies provide free forms and instructions tailored to low-income self-represented litigants.

## Federal Court Resources

For federal cases, use uscourts.gov for official forms and PACER (pacer.uscourts.gov) to access case documents. Federal court forms are standardized nationwide, though some districts have local rules and supplemental forms.

## Related Resources

Our [Official Court Portals Directory](/resources/official-portals) provides direct links to all 50 states' court form libraries and self-help resources. For specific questions, see [Where do I find official court forms?](/resources/q/official-forms-location)

## Common Mistakes

**Paying for free forms**: Spending money on forms available for free from your court. Always check official sources first.

**Using generic "nationwide" forms**: Family law forms are state-specific. A California form won't work in Florida. Use forms from your jurisdiction's official court website.

**Using outdated forms**: Court forms are revised regularly. Forms from three years ago may be rejected. Always download the current version from the official website.

**Printing forms and then retyping them**: Most forms are fillable PDFs. Complete them electronically, then print. Don't print blank forms and handwrite information.

**Ignoring court instructions**: Most forms come with detailed instruction sheets. Read these carefully before completing the form.

**Not checking local rules**: State forms are standard, but some counties have local rule modifications or additional required forms. Check your county court's website.

**Assuming one size fits all**: Different case types require different forms. Divorce forms differ from custody modification forms. Use the right forms for your situation.

**Forgetting about e-filing requirements**: Many courts now require or encourage electronic filing. Check whether your court has an e-filing portal and what formats are accepted.`,
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "National Center for State Courts", href: "https://www.ncsc.org/" },
        { name: "United States Courts - Forms", href: "https://www.uscourts.gov/forms" },
        { name: "Legal Services Corporation - Court Resources", href: "https://www.lsc.gov/" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Court form availability, e-filing systems, and fee waiver procedures vary by state and county. Some jurisdictions update forms more frequently than others. Always verify you're using the most current version."
    }
  },
];

// ============================================================================
// Popular Questions Data (12 items)
// ============================================================================

export const POPULAR_QUESTIONS: PopularQuestion[] = [
  {
    slug: "proof-of-service-definition",
    question: "What counts as proof of service?",
    status: "published",
    seoTitle: "What Counts as Proof of Service? | ThreadLock",
    metaDescription: "Proof of service is a signed declaration under penalty of perjury showing you delivered court documents, when, where, how, and to whom.",
    shortAnswer: "Proof of service is a signed declaration under penalty of perjury that confirms you delivered court documents to all required parties. It must include specific details about when, where, how, and to whom documents were delivered.",
    dateModified: "2026-02-13",
    body: `# What counts as proof of service?

## Short Answer

Proof of service is a signed declaration under penalty of perjury that confirms you delivered court documents to all required parties. It must include specific details about when, where, how, and to whom documents were delivered. Most jurisdictions require a Proof of Service form (such as FL-335 in California) completed by the person who served the documents.

## Detailed Explanation

### Required Components

Valid proof of service must contain:

- **Server information**: Name and address of the person who served the documents
- **Service details**: Date, time, and location of service
- **Method of service**: Personal service, mail, electronic service, or substituted service
- **Recipient information**: Name and address of person served
- **Document list**: Specific documents that were served
- **Declaration under penalty of perjury**: Server's signature affirming truthfulness

### Who Can Serve Documents

The server must be:

- At least 18 years old
- Not a party to the case
- Willing to sign a declaration under penalty of perjury

In some cases, professional process servers or law enforcement may serve documents, providing additional authentication.

### Common Forms by Jurisdiction

Different jurisdictions use specific forms:

- **California**: Form FL-335 (Proof of Service by Mail) or FL-330 (Proof of Personal Service)
- **New York**: Affidavit of Service
- **Texas**: Certificate of Service or Return of Service
- **Federal Courts**: Certificate of Service under FRCP Rule 5

### Methods of Service Requiring Proof

Each service method has different proof requirements:

**Personal Service**: Declaration must state documents were hand-delivered to the party
**Service by Mail**: Must include date of mailing and address used
**Electronic Service**: Must show method (email, court e-filing system) and confirmation
**Substituted Service**: Must document attempts at personal service and alternative method used

## State-Specific Variations

**California**: Requires proof of service for all documents filed after the initial petition. Electronic service through court systems generates automatic proof of service records.

**New York**: Requires notarized affidavits of service for certain documents. Personal service affidavits must be filed within prescribed time limits.

**Texas**: Allows informal service acknowledgments in some family law cases but requires formal certificates for contested matters.

**Florida**: Mandates specific formatting for proof of service including certificate of service language on filed documents.

Always verify your jurisdiction's specific requirements for proof of service, as improper proof can invalidate service and delay proceedings.`,
    relatedLinks: [
      { title: "Service of Process Requirements by State", href: "/resources/service-requirements" },
      { title: "California Form FL-335 Instructions", href: "/resources/california-proof-service" },
    ],
    relatedQuestions: [
      { question: "How long do I have to serve documents?", href: "/resources/q/service-deadlines" },
      { question: "Can I serve documents myself?", href: "/resources/q/self-service" },
      { question: "What happens if service is improper?", href: "/resources/q/improper-service" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Civil Procedure" },
        { name: "State Bar Association Resources" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Proof of service requirements vary by state. Verify local court rules."
    }
  },
  {
    slug: "exhibit-labeling",
    question: "How do I label exhibits for court?",
    status: "published",
    seoTitle: "How to Label Exhibits for Court | ThreadLock",
    metaDescription: "Label exhibits sequentially using letters (Plaintiff) or numbers (Defendant). Include exhibit stickers on each document and reference them in your filings.",
    shortAnswer: "Label exhibits sequentially using letters (A, B, C) for plaintiff's exhibits or numbers (1, 2, 3) for defendant's exhibits. Attach exhibit stickers or tabs to each document and create an exhibit list that describes each item.",
    dateModified: "2026-02-13",
    body: `# How do I label exhibits for court?

## Short Answer

Label exhibits sequentially using letters (A, B, C) for plaintiff's exhibits or numbers (1, 2, 3) for defendant's exhibits. Attach exhibit stickers or tabs to each document and create an exhibit list that describes each item. Reference exhibits by their labels in your declarations and briefs.

## Detailed Explanation

### Standard Labeling Conventions

Most courts follow these conventions:

- **Plaintiff/Petitioner exhibits**: Letters (Exhibit A, B, C, etc.)
- **Defendant/Respondent exhibits**: Numbers (Exhibit 1, 2, 3, etc.)
- **Sequential order**: Label in the order you'll reference them
- **Consistent format**: Use the same labeling system throughout your case

### How to Attach Exhibit Labels

**Physical Exhibits**:
- Use adhesive exhibit stickers (available at office supply stores)
- Place stickers on the bottom right corner of the first page
- Alternatively, use colored tabs that extend beyond the page edge
- For multi-page exhibits, only label the first page

**Electronic Exhibits**:
- Add exhibit labels to PDF bookmarks
- Include exhibit designation in file names (e.g., "Exhibit_A_Email.pdf")
- Some e-filing systems allow exhibit marking during upload

### Creating an Exhibit List

Prepare a formal exhibit list that includes:

- **Exhibit designation**: Letter or number
- **Description**: Brief but specific (e.g., "Text messages between parties, March 15-20, 2024")
- **Page count**: Number of pages in that exhibit
- **Date**: When the document was created or relevant time period

### Referencing Exhibits in Declarations

When citing exhibits in your declaration or brief:

- Use consistent terminology: "See Exhibit A" or "As shown in Exhibit 1"
- Reference specific pages for lengthy exhibits: "Exhibit B, page 3"
- Introduce each exhibit clearly: "Attached as Exhibit C is a copy of the parenting plan"

### Pre-Marking Exhibits

For hearings and trials:

- **Pre-mark exhibits**: Label before the hearing
- **Exchange with opposing party**: Provide copies of your exhibit list
- **Bring originals**: Have original documents if authenticity might be challenged
- **Three-hole punch**: Prepare exhibits for insertion into binders if required

## State-Specific Variations

**California**: Superior courts often require exhibit binders with tabs. Some counties mandate specific exhibit formats for family law trials.

**New York**: Supreme Courts may require exhibit lists filed in advance of hearings. Commercial exhibit stickers are standard.

**Texas**: District courts typically follow the plaintiff/defendant letter/number convention. Electronic filing systems may auto-label exhibits.

**Federal Courts**: Follow the same conventions but may have specific local rules about exhibit formatting and pre-trial submissions.

Check your local court's rules or website for jurisdiction-specific requirements. Many courts provide exhibit stickers at the clerk's office or specify approved formats.`,
    relatedLinks: [
      { title: "Preparing Evidence for Court", href: "/resources/evidence-preparation" },
      { title: "Declaration and Exhibit Templates", href: "/resources/templates" },
    ],
    relatedQuestions: [
      { question: "Can I authenticate text messages myself?", href: "/resources/q/text-authentication" },
      { question: "What should I bring to a hearing?", href: "/resources/q/hearing-checklist" },
      { question: "How do I organize evidence chronologically?", href: "/resources/q/evidence-organization" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence" },
        { name: "Local Court Rules" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 180,
      accuracyNotes: "Exhibit labeling conventions vary by court. Check local rules."
    }
  },
  {
    slug: "official-forms-location",
    question: "Where do I find official court forms?",
    status: "published",
    seoTitle: "Where to Find Official Court Forms | ThreadLock",
    metaDescription: "Official court forms are available on your state or county court website, at the courthouse clerk's office, or through legal aid organizations.",
    shortAnswer: "Official court forms are available on your state or county court website, usually under a 'Forms' or 'Self-Help' section. You can also obtain forms at the courthouse clerk's office or through legal aid organizations that serve your area.",
    dateModified: "2026-02-13",
    body: `# Where do I find official court forms?

## Short Answer

Official court forms are available on your state or county court website, usually under a 'Forms' or 'Self-Help' section. You can also obtain forms at the courthouse clerk's office or through legal aid organizations that serve your area. Many jurisdictions provide fillable PDFs and instructions for self-represented litigants.

## Detailed Explanation

### Online Sources

**State Court Websites**:
Most state judicial systems maintain form libraries:
- Search "[Your State] court forms" or "[Your State] judicial branch forms"
- Navigate to family law or civil forms sections
- Download forms as fillable PDFs when available

**County-Specific Forms**:
Some jurisdictions require local forms in addition to state-mandated forms:
- Visit your specific county court website
- Check for local rules and forms sections
- Verify whether state or local forms take precedence

**Federal Courts**:
U.S. Courts maintain forms at uscourts.gov:
- Bankruptcy, civil, and criminal forms available
- District-specific forms found on individual court websites

### Physical Locations

**Courthouse Clerk's Office**:
- Forms typically available at the filing counter
- Staff may provide basic information about which forms to use
- Clerks cannot provide legal advice on how to complete forms

**Law Libraries**:
- County law libraries often have form books and self-help resources
- Librarians can help locate appropriate forms
- Some libraries offer free printing

### Legal Aid Resources

**Legal Services Organizations**:
Organizations like Legal Aid Society provide:
- Pre-screened forms for specific case types
- Instructions tailored to self-represented litigants
- Sometimes offer form-filling assistance clinics

**State Bar Associations**:
Many state bars offer:
- Free legal form access through public service programs
- Self-help centers with form packets
- Referrals to low-cost legal assistance

### Form Types by Case Category

**Family Law**:
- Petition for dissolution/divorce
- Child custody and parenting plan forms
- Child support worksheets and orders
- Domestic violence restraining orders

**Civil Cases**:
- Complaints and answers
- Discovery forms (interrogatories, requests for production)
- Motion forms
- Judgment forms

**Probate**:
- Petition for probate
- Letters testamentary/administration
- Inventory and appraisement forms

### Verification and Updates

Always verify you're using the current form version:
- Check the revision date on forms
- Courts may reject outdated forms
- Subscribe to court email updates if available

## State-Specific Variations

**California**: Judicial Council forms at courts.ca.gov/forms are mandatory statewide. Counties may have additional local forms. Forms use standardized FL- (family law), FL- (civil), and other prefixes.

**New York**: Unified Court System provides forms at nycourts.gov. Different forms exist for Supreme Court (divorce) versus Family Court (custody, support).

**Texas**: Texas Courts Online (txcourts.gov) hosts statewide forms. District courts may have county-specific forms. Many counties use integrated e-filing systems with embedded forms.

**Florida**: Florida Courts website (flcourts.gov) maintains approved forms. Family law forms are numbered and updated regularly. Clerk websites may have supplemental local forms.

**Washington**: Washington Courts website (courts.wa.gov) provides approved pattern forms. Some counties require their own caption formats or additional local forms.

If you cannot locate needed forms online, contact your courthouse clerk's office for guidance. Many courts now offer self-help centers that specialize in assisting self-represented litigants with form selection and basic filing procedures.`,
    relatedLinks: [
      { title: "Court Forms by State", href: "/resources/state-forms" },
      { title: "Legal Aid Organizations Directory", href: "/resources/legal-aid" },
      { title: "How to Fill Out Court Forms", href: "/resources/form-instructions" },
    ],
    relatedQuestions: [
      { question: "What if I can't afford court fees?", href: "/resources/q/fee-waiver" },
      { question: "Do I need a lawyer to file forms?", href: "/resources/q/self-representation" },
      { question: "Can I modify forms after filing?", href: "/resources/q/amending-forms" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals", href: "https://www.uscourts.gov/forms" },
        { name: "State Bar Association Resources" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Form locations and requirements vary by jurisdiction. Verify with your local court."
    }
  },
  {
    slug: "text-authentication",
    question: "Can I authenticate text messages myself?",
    status: "published",
    seoTitle: "Can I Authenticate Text Messages Myself? | ThreadLock",
    metaDescription: "Yes, you can self-authenticate text messages by submitting a declaration under penalty of perjury explaining the source, context, and chain of custody.",
    shortAnswer: "Yes, you can self-authenticate text messages by submitting a declaration under penalty of perjury that explains how you obtained the messages, their source, and the context. Include screenshots or exports with visible phone numbers and timestamps as exhibits.",
    dateModified: "2026-02-13",
    body: `# Can I authenticate text messages myself?

## Short Answer

Yes, you can self-authenticate text messages by submitting a declaration under penalty of perjury that explains how you obtained the messages, their source, and the context. Include screenshots or exports with visible phone numbers and timestamps as exhibits. Your declaration establishes the foundational authenticity required under evidence rules.

## Detailed Explanation

### Authentication Requirements

To authenticate text messages, you must establish:

- **Source identification**: Whose phone the messages came from
- **Recipient identity**: Who received the messages
- **Acquisition method**: How you obtained the messages
- **Completeness**: Whether the exhibit shows the full conversation or excerpts
- **Context**: The relationship and circumstances surrounding the communication

### Declaration Format

Your declaration should include statements such as:

"I am the owner of phone number (XXX) XXX-XXXX. Attached as Exhibit A are true and accurate screenshots of text message conversations between myself and [Party Name] from [Date Range]. These messages were sent to and received on my iPhone [Model]. The messages were obtained directly from my phone's Messages application. The phone number displayed as the sender is [Number], which I know to belong to [Party Name] because [reason for knowledge]."

### Best Practices for Text Message Evidence

**Screenshot Format**:
- Include phone numbers and contact names
- Show timestamps for each message
- Capture multiple messages per screenshot to show context
- Ensure text is legible and not cropped

**Metadata Preservation**:
- Note the device and application used
- Document when screenshots were taken
- Preserve original messages when possible
- Consider using export features if available

**Organization**:
- Present messages chronologically
- Number screenshots if submitting multiple pages
- Highlight relevant portions if messages are extensive
- Include full context, even if some messages are unfavorable

### Authentication Challenges

The opposing party may challenge authentication by:

- Claiming messages were fabricated or altered
- Arguing sender identity is uncertain
- Asserting messages lack proper foundation

Strengthen authentication by:
- Providing corroborating evidence (emails referencing the texts)
- Including metadata when available
- Referencing unique details only the sender would know
- Noting response patterns consistent with the identified sender

### Technical Tools

**iPhone Users**:
- Use native screenshot function (Side button + Volume Up)
- Export conversations via third-party apps for better formatting
- iCloud backups can preserve message history

**Android Users**:
- Screenshot methods vary by manufacturer
- Some devices offer scrolling screenshots
- Export options available through certain messaging apps

**Third-Party Tools**:
- SMS backup applications create formatted exports
- Some tools generate PDFs with timestamps and metadata
- Screen recording can capture longer conversations

### Admissibility Considerations

Even if authenticated, text messages must be:
- **Relevant**: Pertain to issues in the case
- **Not hearsay**: Fall under an exception or be non-hearsay use
- **Non-prejudicial**: Probative value outweighs unfair prejudice

In family law cases, text messages between parties are typically admissible as party admissions (exception to hearsay rule).

## State-Specific Variations

**California**: Self-authentication through declarations is standard in family law cases under Evidence Code § 1400 and § 1401. Screenshots with declarations are routinely admitted in custody and support matters.

**New York**: CPLR allows self-authentication through affidavits. Courts may require additional foundation for text messages in contested hearings.

**Texas**: Texas Rules of Evidence permit authentication by testimony. Self-authentication via declaration is accepted in family law proceedings under TRE 902.

**Federal Courts**: FRE 901(b)(4) allows appearance, contents, and circumstances to authenticate evidence. Self-authentication is permissible with proper foundation.

While self-authentication is generally permitted, having the opposing party stipulate to authenticity can streamline admission. Consider requesting such stipulations during discovery or before hearings.`,
    relatedLinks: [
      { title: "How to Label Exhibits for Court", href: "/resources/q/exhibit-labeling" },
      { title: "Evidence Rules in Family Law", href: "/resources/evidence-rules" },
    ],
    relatedQuestions: [
      { question: "What counts as proof of service?", href: "/resources/q/proof-of-service-definition" },
      { question: "Can I use email as evidence?", href: "/resources/q/email-evidence" },
      { question: "How do I authenticate photos?", href: "/resources/q/photo-authentication" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Evidence" },
        { name: "State Discovery Rules" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 180,
      accuracyNotes: "Text message authentication standards vary by state. Consult local evidence rules."
    }
  },
  {
    slug: "hearing-checklist",
    question: "What should I bring to a hearing?",
    status: "published",
    seoTitle: "What to Bring to a Court Hearing | ThreadLock",
    metaDescription: "Bring original filed documents, exhibits with tabs, witness lists, notepad, calendar, calculator, and copies for the judge and opposing party.",
    shortAnswer: "Bring original filed documents, marked exhibits with tabs, your witness list, a notepad and pen, a calendar, and a calculator. Also bring copies of all documents for the judge, opposing party, and yourself. Arrive early and dress professionally.",
    dateModified: "2026-02-13",
    body: `# What should I bring to a hearing?

## Short Answer

Bring original filed documents, marked exhibits with tabs, your witness list, a notepad and pen, a calendar, and a calculator. Also bring copies of all documents for the judge, opposing party, and yourself. Arrive early and dress professionally to make a positive impression.

## Detailed Explanation

### Essential Documents

**Filed Court Documents**:
- Original petition or complaint
- All filed motions and responses
- Proof of service for all documents
- Court orders from previous hearings
- Case docket or summary

**Exhibits and Evidence**:
- Pre-marked exhibits with labels (A, B, C or 1, 2, 3)
- Exhibit list describing each item
- Three copies of each exhibit (judge, opposing party, yourself)
- Original documents if authenticity might be challenged

**Supporting Declarations**:
- Your declaration under penalty of perjury
- Witness declarations or affidavits
- Expert reports if applicable
- Financial declarations or income evidence

### Organizational Tools

**Binders or Folders**:
- Separate sections for filed documents, exhibits, and notes
- Tab dividers for easy reference
- Chronological or topic-based organization
- Backup copies of critical documents

**Reference Materials**:
- Relevant statutes or case law citations
- Local court rules
- Prepared outline or script for your argument
- Questions for witnesses or opposing party

### Practical Items

**Note-Taking Supplies**:
- Legal pad or notebook
- Multiple pens (black or blue ink)
- Highlighters for marking documents during hearing
- Post-it flags for quick reference

**Time and Financial Tools**:
- Calendar (paper or electronic) showing dates and schedules
- Calculator for financial calculations
- Records of income, expenses, or support payments
- Check or credit card for any court fees

### Hearing-Specific Preparations

**Custody Hearings**:
- Parenting plan proposals
- School records and report cards
- Medical records for children
- Documentation of involvement in children's lives

**Support Hearings**:
- Income and expense declarations
- Pay stubs or tax returns
- Proof of childcare or medical expenses
- Child support guideline calculations

**Motion Hearings**:
- The specific motion being heard
- Opposition or reply briefs
- Supporting case law or statutes
- Proposed order for the court

### Professional Presentation

**Appropriate Attire**:
- Business or business casual clothing
- Conservative colors and styles
- Clean and pressed appearance
- Minimal jewelry and accessories

**Courtroom Etiquette Materials**:
- Case number memorized or written down
- Phone turned completely off (not just silent)
- No food, drinks (except water in some courts)
- No children unless they are testifying

### Pre-Hearing Checklist

Complete these tasks before the hearing:

- **24-48 hours before**: Confirm hearing date, time, and department
- **Review all documents**: Familiarize yourself with your evidence
- **Prepare opening statement**: Write out key points
- **Anticipate questions**: Think through likely inquiries from judge
- **Arrange childcare**: Ensure someone can watch children during hearing
- **Plan arrival time**: Aim to arrive 30 minutes early

### What Not to Bring

Avoid bringing:

- Weapons of any kind
- Recording devices (audio or video)
- Children (unless testifying or ordered to attend)
- Emotional support persons beyond one courtroom guest
- Large bags that might require security screening

## State-Specific Variations

**California**: Superior Courts often require courtesy copies of lengthy documents filed electronically. Some departments require lodge-sealed copies for the court file.

**New York**: Supreme Court and Family Court may have different rules about exhibit submissions. Some parts require pre-filing of exhibits before the hearing date.

**Texas**: District Courts typically expect exhibits exchanged with opposing counsel before the hearing. Some courts require exhibit notebooks with spine labels.

**Florida**: Circuit Courts may require electronic filing of exhibits. Check local administrative orders for specific requirements.

**Federal Courts**: Often require pre-trial exhibit and witness lists with specific deadlines. Exhibit binders follow strict formatting rules.

Call the court clerk's office or check the local rules if you're uncertain about specific requirements. Many courts post hearing preparation guides on their websites. Consider attending a similar hearing beforehand to observe procedures and expectations.`,
    relatedLinks: [
      { title: "Courtroom Etiquette Guide", href: "/resources/courtroom-etiquette" },
      { title: "How to Label Exhibits for Court", href: "/resources/q/exhibit-labeling" },
      { title: "Preparing for Trial", href: "/resources/trial-preparation" },
    ],
    relatedQuestions: [
      { question: "What should I wear to court?", href: "/resources/q/court-attire" },
      { question: "Can I bring someone with me to court?", href: "/resources/q/courtroom-support" },
      { question: "How do I respond to a motion?", href: "/resources/q/respond-to-motion" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Self-Help Portals" },
        { name: "Local Court Rules" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Hearing requirements vary by court type and jurisdiction. Verify local procedures."
    }
  },
  {
    slug: "service-deadlines",
    question: "How long do I have to serve documents?",
    status: "published",
    seoTitle: "How Long Do I Have to Serve Documents? | ThreadLock",
    metaDescription: "Service deadlines vary by document type and jurisdiction. Initial petitions typically require 120 days, while motion responses often need 9-16 days notice.",
    shortAnswer: "Service deadlines vary by document type and jurisdiction. Initial petitions typically must be served within 120 days of filing. Motion responses usually require 9-16 days' notice before the hearing, while discovery responses are generally due within 30 days.",
    dateModified: "2026-02-13",
    body: `# How long do I have to serve documents?

## Short Answer

Service deadlines vary by document type and jurisdiction. Initial petitions typically must be served within 120 days of filing. Motion responses usually require 9-16 days' notice before the hearing, while discovery responses are generally due within 30 days. Always verify specific deadlines in your court's local rules.

## Detailed Explanation

### Initial Pleading Service

**Summons and Complaint/Petition**:
Most jurisdictions require service within a specified period after filing:
- Standard deadline: 60-120 days from filing
- Extensions may be available with court approval
- Case may be dismissed for failure to timely serve

**Personal Service vs. Alternative Methods**:
Personal service is typically preferred initially:
- In-person delivery to defendant/respondent
- Service by sheriff or professional process server
- Service by any adult not party to the case

Alternative methods (substituted service, publication) generally require:
- Court approval before use
- Diligent efforts to locate and serve personally
- Additional time to complete service

### Motion Notice Requirements

**Regular Motions**:
Notice periods vary by jurisdiction and motion type:
- **16 days**: Common minimum in many states for law and motion
- **21 days**: Federal court standard for most motions
- **9 days**: Short notice for certain family law motions
- **45 days**: Summary judgment motions often require extended notice

**Ex Parte Motions**:
Emergency applications with shortened timelines:
- May require 24 hours' notice or less
- Some jurisdictions allow same-day filing and hearing
- Must demonstrate immediate harm or emergency circumstances

**Notice Calculation**:
Courts use different counting methods:
- Court days (excluding weekends and holidays)
- Calendar days (including all days)
- Service by mail may add additional days

### Discovery Deadlines

**Responses to Discovery Requests**:
Standard timelines for written discovery:
- **30 days**: Most common deadline for responses
- **45 days**: Extended deadline in some jurisdictions
- Extensions by stipulation often permitted

**Depositions**:
Notice requirements for depositions:
- Reasonable notice required (typically 10-20 days)
- Less notice acceptable by stipulation
- Subpoenas require additional time for non-parties

### Court Filings After Service

**Response Deadlines**:
After being served with initial pleadings:
- **30 days**: Standard answer deadline in civil cases
- **28 days**: Federal court answer deadline
- **Variable**: Family law response times vary by state and document type

### Consequences of Late Service

**Dismissal**:
Failure to timely serve initial pleadings may result in:
- Case dismissal without prejudice
- Need to refile and serve properly
- Loss of priority filing date

**Continuance of Hearing**:
Late service of motions may cause:
- Hearing taken off calendar
- Sanctions against serving party
- Opposing party granted automatic continuance

**Waiver of Arguments**:
Late filing of oppositions or replies:
- Court may refuse to consider late papers
- Hearing proceeds without your input
- Motion may be granted by default

### Extensions and Stipulations

**By Agreement**:
Parties can often extend deadlines by:
- Written stipulation filed with court
- Email exchange confirmed by both counsel
- Court order formalizing the agreement

**By Court Order**:
Request extensions through:
- Ex parte application (some jurisdictions)
- Noticed motion (formal request with hearing)
- Administrative motion (certain jurisdictions)

## State-Specific Variations

**California**: Initial petitions must be served within 60 days in family law cases. Motions generally require 16 court days' notice, though some local rules vary. Service by mail adds 5 calendar days to response time under CCP § 1013.

**New York**: Summons must be served within 120 days of filing under CPLR 306-b. Most motions require 8 days' notice unless otherwise specified by court rule. Different rules apply in Supreme Court versus Family Court.

**Texas**: Service of citation must occur within reasonable time, typically interpreted as 90 days. Texas Rule of Civil Procedure 21 sets standard notice periods for motions. Family law cases may have specific statutory deadlines for particular motions.

**Florida**: Initial service must be completed within 120 days under Fla. R. Civ. P. 1.070. Florida Family Law Rules of Procedure set different notice requirements for various motion types, often 20 days for substantial motions.

**Federal Courts**: FRCP Rule 4 requires service within 90 days of filing. FRCP Rule 6 governs motion notice periods (21 days for most motions). Local rules may modify these standards.

Always check:
- Your jurisdiction's code of civil procedure
- Local court rules for your specific courthouse
- Case management orders that may modify standard deadlines
- Holidays and court closures that affect deadline calculation

When in doubt, serve earlier than required to avoid disputes and ensure adequate notice.`,
    relatedLinks: [
      { title: "What Counts as Proof of Service?", href: "/resources/q/proof-of-service-definition" },
      { title: "Service of Process by State", href: "/resources/service-requirements" },
      { title: "Court Deadline Calculator", href: "/resources/deadline-calculator" },
    ],
    relatedQuestions: [
      { question: "What happens if I miss a filing deadline?", href: "/resources/q/missed-deadline" },
      { question: "How do I calculate court days?", href: "/resources/q/court-days" },
      { question: "Can I get an extension on a deadline?", href: "/resources/q/deadline-extension" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Civil Procedure" },
        { name: "Local Court Rules" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 90,
      accuracyNotes: "Service deadlines vary significantly by jurisdiction and document type. Verify local rules."
    }
  },
  {
    slug: "custody-types",
    question: "What's the difference between legal and physical custody?",
    status: "published",
    seoTitle: "Legal vs Physical Custody Explained | ThreadLock",
    metaDescription: "Legal custody is decision-making authority for a child's welfare. Physical custody is where the child lives. Both can be sole or joint arrangements.",
    shortAnswer: "Legal custody refers to the right to make major decisions about a child's welfare (education, healthcare, religion). Physical custody refers to where the child lives and who provides day-to-day care. Both types can be sole or joint.",
    dateModified: "2026-02-13",
    body: `# What's the difference between legal and physical custody?

## Short Answer

Legal custody refers to the right to make major decisions about a child's welfare (education, healthcare, religion). Physical custody refers to where the child lives and who provides day-to-day care. Both types can be sole or joint, and parents can have different arrangements for each type.

## Detailed Explanation

### Legal Custody

**Definition**:
Legal custody is the authority to make significant decisions affecting the child's life:
- **Education**: School choice, special education services, tutoring
- **Healthcare**: Medical treatment, therapy, medication, surgery
- **Religion**: Religious upbringing and practices
- **Extracurricular activities**: Sports, clubs, and other activities

**Joint Legal Custody**:
Both parents share decision-making authority:
- Parents must consult and reach agreement on major decisions
- Most common arrangement when both parents are involved
- Does not require equal time with the child
- Courts favor joint legal custody absent evidence of domestic violence or inability to cooperate

**Sole Legal Custody**:
One parent has exclusive decision-making authority:
- Granted when parents cannot communicate effectively
- May be ordered when one parent is absent or unfit
- Other parent typically retains visitation rights
- Less common than joint arrangements

### Physical Custody

**Definition**:
Physical custody determines where the child lives and who provides day-to-day care:
- Daily routines and supervision
- Residence for school enrollment purposes
- Primary caretaker responsibilities
- Time spent in each parent's home

**Joint Physical Custody**:
Child spends substantial time with both parents:
- Does not necessarily mean equal time (50/50)
- Many variations: 60/40, 70/30, alternating weeks
- Each parent provides daily care during their time
- Requires cooperation on scheduling and logistics

**Sole Physical Custody**:
Child resides primarily with one parent:
- Other parent typically has visitation or parenting time
- Custodial parent has primary residential responsibility
- Non-custodial parent may have weekends, holidays, and summer time
- Often appropriate when parents live far apart

### Common Custody Combinations

**Joint Legal and Joint Physical**:
Most common modern arrangement:
- Both parents share decision-making
- Child has substantial time with both parents
- Requires parental cooperation and communication

**Joint Legal with Sole Physical**:
Frequent in traditional arrangements:
- Both parents make major decisions together
- Child lives primarily with one parent
- Non-custodial parent has regular visitation schedule

**Sole Legal and Sole Physical**:
Rare except in specific circumstances:
- One parent has full decision-making and residential custody
- May occur with domestic violence, abandonment, or parental unfitness
- Other parent may have supervised or no visitation

### Decision-Making in Legal Custody

**Major Decisions** (require consultation in joint legal custody):
- Enrolling in or changing schools
- Non-emergency medical procedures
- Mental health treatment
- Participation in contact sports
- International travel

**Day-to-Day Decisions** (made by parent with physical custody at the time):
- Bedtime and meal schedules
- Homework supervision
- Daily activities and playdates
- Minor medical care (cold medicine, bandages)
- Haircuts and clothing choices

### Parenting Time vs. Custody

Some jurisdictions use different terminology:
- **Parenting time**: Replaces "visitation" to emphasize both parents' roles
- **Parenting plan**: Details the custody and time-sharing arrangement
- **Residential schedule**: Specifies when child is with each parent
- **Decision-making responsibility**: Alternative to "legal custody"

### Modification of Custody

Courts can modify custody orders based on:
- Substantial change in circumstances
- Child's best interests
- Parental relocation
- Changes in child's needs or parents' circumstances

Modification requires showing that change serves the child's welfare.

## State-Specific Variations

**California**: Uses "legal custody" and "physical custody" terminology. Family Code § 3003 defines joint legal custody as "both parents shall share the right and responsibility to make decisions." Courts presume joint legal custody is in child's best interests.

**New York**: Uses "custody" (legal custody) and "parenting time" (physical custody). Courts consider numerous factors under Domestic Relations Law § 240 to determine best interests, with preference for arrangements that foster relationship with both parents.

**Texas**: Uses "conservatorship" instead of custody. "Joint managing conservators" (both parents share rights) is presumed appropriate. "Possessory conservatorship" describes parenting time. Texas Family Code § 153.131 sets out standard possession orders.

**Washington**: Uses "residential schedule" and "decision-making" under the Parenting Act. RCW 26.09.184 requires parenting plans that allocate decision-making and residential time. No presumption for equal time but courts favor substantial contact with both parents.

**Florida**: Uses "parental responsibility" (legal custody) and "time-sharing" (physical custody). Florida Statutes § 61.13 presumes shared parental responsibility unless detrimental to child. Time-sharing schedules vary widely.

**Pennsylvania**: Distinguishes "legal custody" (decision-making) from "physical custody" (residential). 23 Pa.C.S. § 5328 lists 16 factors courts consider. Shared legal custody common; physical custody varies based on circumstances.

Understanding these distinctions helps parents negotiate appropriate arrangements. Courts prioritize the child's best interests, considering factors like parental involvement, child's preferences (when age-appropriate), stability, and each parent's ability to facilitate the child's relationship with the other parent.`,
    relatedLinks: [
      { title: "Creating a Parenting Plan", href: "/resources/parenting-plans" },
      { title: "Child Custody Factors by State", href: "/resources/custody-factors" },
    ],
    relatedQuestions: [
      { question: "Can I modify a parenting plan later?", href: "/resources/q/modify-parenting-plan" },
      { question: "How do courts decide custody?", href: "/resources/q/custody-determination" },
      { question: "What is a parenting plan?", href: "/resources/q/parenting-plan-definition" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "State Bar Association Resources" },
        { name: "Family Law Statutes" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 365,
      accuracyNotes: "Custody terminology and standards vary significantly by state."
    }
  },
  {
    slug: "mediation-lawyer",
    question: "Do I need a lawyer for mediation?",
    status: "published",
    seoTitle: "Do I Need a Lawyer for Mediation? | ThreadLock",
    metaDescription: "You're not required to have a lawyer for mediation, but consulting one beforehand helps you understand your rights and evaluate proposed agreements.",
    shortAnswer: "You're not required to have a lawyer for mediation, but consulting one beforehand helps you understand your rights and evaluate proposed agreements. Some people bring attorneys to mediation sessions, while others consult with counsel between sessions.",
    dateModified: "2026-02-13",
    body: `# Do I need a lawyer for mediation?

## Short Answer

You're not required to have a lawyer for mediation, but consulting one beforehand helps you understand your rights and evaluate proposed agreements. Some people bring attorneys to mediation sessions, while others consult with counsel between sessions. The mediator cannot provide legal advice to either party.

## Detailed Explanation

### Mediation Basics

**What is Mediation**:
Mediation is a voluntary dispute resolution process where:
- Neutral third-party mediator facilitates discussion
- Parties work together to reach agreement
- Mediator does not make decisions or provide legal advice
- Goal is mutually acceptable settlement

**Mediator's Role**:
The mediator:
- Facilitates communication between parties
- Helps identify issues and options
- Maintains neutral position
- Cannot advise either party about legal rights
- Does not represent either party's interests

### Options for Legal Representation

**No Attorney**:
Many people successfully mediate without lawyers:
- Less formal and potentially less expensive
- Parties communicate directly with mediator's help
- Appropriate when issues are straightforward
- Both parties comfortable negotiating directly

**Consulting Attorney** (not present at mediation):
Common middle-ground approach:
- Meet with attorney before mediation to understand rights
- Review mediator's proposals between sessions
- Have attorney review final agreement before signing
- Provides legal guidance without mediation attendance costs

**Attorney Present at Mediation**:
Bringing counsel to sessions:
- Attorney advises during negotiations
- Can caucus privately with attorney during breaks
- Attorney reviews terms in real-time
- More expensive but provides immediate legal guidance

**Hybrid Approach**:
Many people combine methods:
- Consult attorney initially to learn about rights
- Attend mediation without attorney
- Have attorney review final proposed agreement
- Attorney drafts formal documents based on mediation outcome

### When You May Want an Attorney

**Complex Financial Issues**:
Consider attorney involvement when dealing with:
- Business valuations or ownership interests
- Retirement account divisions
- Real estate with complicated title issues
- Tax implications of asset division

**Power Imbalances**:
Attorney may be necessary if:
- One party has more financial knowledge
- History of domestic violence or intimidation
- Significant disparity in earning capacity
- One party dominated financial decisions during relationship

**Child Custody Complexities**:
Legal advice helps with:
- Interstate custody jurisdiction issues
- Mental health or substance abuse concerns
- Special needs children requiring detailed plans
- Relocation or move-away situations

**Legal Rights Uncertainty**:
Attorney consultation valuable when:
- Unsure about child support or alimony calculations
- Questions about property characterization (separate vs. marital)
- Unfamiliar with state custody factors
- Concerned about long-term implications of agreements

### Benefits of Mediation Without Attorneys

**Cost Savings**:
- Mediation generally costs less than litigation
- Attorney fees for mediation attendance can be substantial
- Limited attorney involvement reduces total legal costs

**Direct Communication**:
- Parties speak directly rather than through lawyers
- Can preserve working relationship for co-parenting
- Less adversarial than traditional litigation

**Flexibility**:
- Creative solutions not available in court
- Tailored agreements addressing unique family needs
- Faster resolution than court proceedings

### Risks of Mediating Without Legal Advice

**Uninformed Agreements**:
Without legal consultation, you might:
- Agree to unfavorable property division
- Accept incorrect child support calculations
- Waive rights unknowingly
- Miss tax implications of settlement terms

**Unenforceable Agreements**:
Agreements may be problematic if:
- Terms violate public policy
- Required legal language missing
- Child support doesn't follow guidelines without proper deviation findings
- Pension division lacks necessary court orders (QDRO)

**Power Imbalance Exploitation**:
More knowledgeable party may:
- Pressure less-informed party into unfavorable terms
- Misrepresent legal requirements
- Conceal assets or income
- Obtain agreements that courts wouldn't order

### After Mediation Agreement

**Attorney Review**:
Even if you mediate without counsel:
- Have attorney review final memorandum of understanding
- Ensure agreement protects your interests
- Verify terms are legally enforceable
- Confirm child support calculations are accurate

**Formalizing the Agreement**:
Mediated agreements typically require:
- Drafting formal court documents (marital settlement agreement, parenting plan)
- Filing with court
- Court approval and entry of judgment
- Attorney preparation ensures proper formatting and legal requirements

## State-Specific Variations

**California**: Parties not required to have attorneys at mediation. However, California Family Code § 3183 prohibits mediators from providing legal advice. Many courts offer free or low-cost mediation services.

**New York**: Court-ordered mediation in divorce cases common. Parties may appear with or without attorneys. Mediators must inform parties of their right to consult counsel.

**Texas**: Family Code encourages mediation. Parties may attend with attorneys but not required. Mediated settlement agreements signed by parties and their attorneys (if present) are binding.

**Florida**: Court-ordered mediation required in many family law cases before trial. Parties may bring attorneys but courts discourage attorney-dominated mediation.

**Washington**: Mandatory mediation in some counties for parenting plans. Parents may mediate without attorneys, but court approval of parenting plan still required.

Before choosing whether to use an attorney for mediation, consider:
- Complexity of your situation
- Your comfort level with negotiation
- Financial resources available
- Whether opposing party has legal representation
- Mediator's qualifications and approach

At minimum, consult with an attorney before finalizing any mediated agreement to ensure you understand the legal implications and your rights.`,
    relatedLinks: [
      { title: "Finding a Family Law Mediator", href: "/resources/mediator-directory" },
      { title: "Mediation vs. Litigation", href: "/resources/mediation-benefits" },
    ],
    relatedQuestions: [
      { question: "How much does mediation cost?", href: "/resources/q/mediation-cost" },
      { question: "What happens if mediation doesn't work?", href: "/resources/q/mediation-failure" },
      { question: "Is mediation required before trial?", href: "/resources/q/mandatory-mediation" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "State Bar Association Resources" },
        { name: "Family Mediation Standards" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Mediation requirements and attorney representation rules vary by state."
    }
  },
  {
    slug: "child-support-calculation",
    question: "How do I calculate child support?",
    status: "published",
    seoTitle: "How to Calculate Child Support | ThreadLock",
    metaDescription: "Child support calculations use state-specific guidelines based on both parents' income, time-sharing percentage, and children's needs like healthcare and daycare.",
    shortAnswer: "Child support calculations use state-specific guidelines based on both parents' gross income, the percentage of time each parent has the children, and additional expenses like healthcare and childcare. Most states provide worksheets or online calculators.",
    dateModified: "2026-02-13",
    body: `# How do I calculate child support?

## Short Answer

Child support calculations use state-specific guidelines based on both parents' gross income, the percentage of time each parent has the children, and additional expenses like healthcare and childcare. Most states provide worksheets or online calculators. Courts generally must follow guideline amounts unless specific circumstances justify deviation.

## Detailed Explanation

### Basic Calculation Components

**Parental Income**:
Courts consider both parents' gross income from all sources:
- Wages, salaries, commissions, and bonuses
- Self-employment income (after business expenses)
- Rental property income
- Investment income and dividends
- Unemployment or disability benefits
- Social Security benefits (in some states)
- Overtime pay (if regular and consistent)

**Excluded or Adjusted Income**:
Some income may be excluded or adjusted:
- Child support received for children from other relationships
- Spousal support paid or received
- Imputed income if parent is voluntarily unemployed or underemployed
- Income from new spouse (generally not included)

**Number of Children**:
Support amount increases with number of children:
- Different percentages apply for 1, 2, 3+ children
- Some states use flat percentages of income
- Others use income shares models that vary by income level

**Time-Sharing Percentage**:
Custody arrangement affects support:
- More equal time-sharing reduces support obligation
- Thresholds vary (some states adjust at 20%, others at 35%)
- Reflects that parent with child incurs direct expenses

### Calculation Models

**Income Shares Model** (majority of states):
Based on principle that child should receive same proportion of parental income as if family were intact:
- Combines both parents' incomes
- Refers to guideline schedule showing total support obligation
- Prorates obligation between parents based on income percentage
- Adjusts for time-sharing and add-on expenses

**Percentage of Income Model**:
Support is flat percentage of non-custodial parent's income:
- Texas uses this model (20% for 1 child, 25% for 2, 30% for 3)
- Wisconsin also uses percentage model
- Simpler calculation but less precise for shared custody

**Melson Formula**:
Used in Delaware, Hawaii, and Montana:
- Ensures basic needs of parents met before calculating support
- Subtracts self-support reserves from income
- Allocates remaining income proportionally

### Add-On Expenses

**Health Insurance**:
Support order typically addresses:
- Which parent provides coverage
- Cost of children's portion of premiums
- How uncovered medical expenses are split (often 50/50 or proportional to income)

**Childcare Costs**:
Work-related childcare usually added to base support:
- After-school care
- Summer camp while parents work
- Daycare for younger children
- Typically split proportionally to income

**Educational Expenses**:
Some states include:
- Private school tuition (if historically provided)
- Extracurricular activities
- School supplies and fees
- College expenses (in some jurisdictions)

### State Worksheets and Calculators

**Official State Tools**:
Most states provide:
- Downloadable PDF worksheets with instructions
- Online calculators on court websites
- Built-in calculators in e-filing systems
- Mobile apps (some states)

**Required Information**:
To complete calculations, gather:
- Recent pay stubs or income records
- Prior year tax returns
- Health insurance premium statements
- Childcare provider invoices
- Time-sharing schedule details

### Deviations from Guidelines

**Grounds for Deviation**:
Courts may deviate from guideline amount when:
- Child has extraordinary medical or educational needs
- Parent has significant income from self-employment
- Time-sharing arrangement requires duplicate expenses
- Guideline amount would be unjust or inappropriate
- Child has special needs requiring additional support

**Deviation Requirements**:
To deviate, court must:
- Make findings on the record
- Explain why guideline amount is inappropriate
- State the guideline amount
- Calculate the ordered amount and explain difference

### Enforcement and Modification

**Income Withholding**:
Support typically paid through:
- Automatic wage withholding
- State disbursement unit
- Direct deposit to receiving parent
- Child support enforcement agency

**Modification**:
Support can be modified when:
- Substantial change in income (often 15% or more)
- Change in time-sharing arrangement
- Change in child's needs
- Modification of prior order based on temporary circumstances

Most states allow review every 2-3 years without showing changed circumstances.

## State-Specific Variations

**California**: Uses statewide guideline under Family Code § 4055. Online DissoMaster and XSpouse calculators widely used. Considers tax filing status and deductions. Presumes 50% time-sharing when each parent has children at least 35% of time.

**New York**: Child Support Standards Act (CSSA) sets guidelines. Combined parental income up to $154,000 uses statutory percentages (17% for 1 child, 25% for 2, etc.). Above cap amount, court has discretion. Add-ons for healthcare, childcare, and educational expenses.

**Texas**: Uses percentage of obligor's net income: 20% for 1 child, 25% for 2, 30% for 3, 35% for 4, 40% for 5+. Cap on net monthly income ($9,200 as of 2023). Possession schedule affects calculations when non-custodial parent has 35%+ time.

**Florida**: Income shares model under F.S. § 61.30. Considers combined net monthly income and number of overnights. Health insurance and childcare added to basic obligation. Gross-up provision for self-employment taxes.

**Washington**: Child support schedule in RCW 26.19. Economic table based on combined monthly net income. Residential schedule affects calculations. Imputation of income if parent voluntarily unemployed or underemployed.

**Pennsylvania**: Income shares model with statewide guideline. Rule 1910.16-3 provides schedule. Deviations for high-income families, shared custody arrangements, or other substantial reasons.

Key reminders:
- Use your state's official worksheet or approved calculator
- Include all sources of income
- Document add-on expenses with receipts
- Update calculations when income or custody changes substantially
- File required income and expense declarations
- Courts generally must follow guidelines absent compelling reasons

Child support calculations can be complex, especially with self-employment income, variable income, or shared custody arrangements. Consider consulting an attorney or using your court's self-help center to ensure accurate calculations.`,
    relatedLinks: [
      { title: "Child Support Guidelines by State", href: "/resources/child-support-guidelines" },
      { title: "Modifying Child Support Orders", href: "/resources/support-modification" },
    ],
    relatedQuestions: [
      { question: "Can I modify child support later?", href: "/resources/q/modify-support" },
      { question: "What if my ex won't pay child support?", href: "/resources/q/support-enforcement" },
      { question: "How is income calculated for self-employed parents?", href: "/resources/q/self-employment-income" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "State Child Support Guidelines" },
        { name: "Child Support Enforcement Agency" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Child support calculation methods vary significantly by state. Use your state's official calculator."
    }
  },
  {
    slug: "modify-parenting-plan",
    question: "Can I modify a parenting plan later?",
    status: "published",
    seoTitle: "Can I Modify a Parenting Plan? | ThreadLock",
    metaDescription: "Yes, you can modify parenting plans by showing a substantial change in circumstances and that modification serves the child's best interests.",
    shortAnswer: "Yes, you can modify parenting plans by showing a substantial change in circumstances and that modification serves the child's best interests. Many states require waiting 1-2 years after the initial order unless there's immediate danger to the child.",
    dateModified: "2026-02-13",
    body: `# Can I modify a parenting plan later?

## Short Answer

Yes, you can modify parenting plans by showing a substantial change in circumstances and that modification serves the child's best interests. Many states require waiting 1-2 years after the initial order unless there's immediate danger to the child. Both parents can agree to modifications, or you can file a motion requesting court-ordered changes.

## Detailed Explanation

### Legal Standards for Modification

**Substantial Change in Circumstances**:
Courts require showing material changes since the last order:
- Parent's relocation to different city or state
- Change in parent's work schedule or employment
- Child's changing needs as they mature
- Parent's new relationship or living situation
- Emergence of substance abuse or mental health issues
- Child's preference (when age-appropriate)

**Best Interests of the Child**:
Modification must serve the child's welfare:
- Enhanced stability or continuity
- Better school opportunities
- Improved relationship with siblings or extended family
- Parent's increased availability or involvement
- Resolution of concerning behaviors or environment

**Burden of Proof**:
Party seeking modification must prove:
- Circumstances have changed substantially
- Change was not anticipated when original order entered
- Modification serves child's best interests
- Not merely seeking reconsideration of prior decision

### Time Restrictions

**Mandatory Waiting Periods**:
Many states prohibit modifications within certain timeframes:
- **1-2 years**: Common waiting period from last order
- **6 months**: Some states for minor modifications
- Exceptions for emergency situations (abuse, neglect, endangerment)

**Continuous Custody Requirement**:
Some jurisdictions require showing:
- Child has been in proposed custodian's care for specified period
- Integration into new household
- Established relationships and routines

### Types of Modifications

**Major Modifications**:
Significant changes requiring strong showing:
- Change in legal custody (decision-making authority)
- Change in primary physical custody
- Relocation of custodial parent
- Restriction or expansion of parenting time

**Minor Modifications**:
Adjustments to existing arrangements:
- Changes to holiday schedules
- Modifications to exchange times or locations
- Adjustments to summer vacation schedules
- Updates to communication methods

**Temporary Modifications**:
Short-term changes:
- Parent's temporary work assignment
- Child's medical treatment schedule
- School year adjustments
- Emergency situations

### Modification by Agreement

**Stipulated Modifications**:
If both parents agree:
- Draft stipulated modification or amended parenting plan
- File with court
- Court typically approves if terms serve child's interests
- No hearing required in most cases
- Faster and less expensive than contested modification

**Informal Agreements**:
Parents often make informal adjustments:
- Not legally binding without court approval
- Risk of disputes about original order terms
- Better to formalize significant changes through court order
- Minor adjustments (trading weekends) often handled informally

### Filing for Modification

**Required Documents**:
Motion for modification typically requires:
- Motion or petition to modify parenting plan
- Declaration describing changed circumstances
- Proposed modified parenting plan
- Current income and expense declarations (if support affected)
- Proof of service on other parent

**Supporting Evidence**:
Strengthen modification request with:
- School records showing child's progress or problems
- Documentation of parent's schedule or relocation
- Expert evaluations if recommended
- Declaration from teachers, counselors, or therapists
- Child's written preference (if age-appropriate in your state)

**Response Process**:
Non-moving parent can:
- Agree to proposed modifications
- Propose alternative modifications
- Contest the modification entirely
- Request custody evaluation

### Court Evaluation and Hearing

**Custody Evaluations**:
Court may order evaluation including:
- Interviews with parents and child
- Home visits
- Review of records (school, medical, mental health)
- Psychological testing
- Observations of parent-child interactions
- Evaluator's recommendation to court

**Mediation**:
Many courts require mediation before hearing:
- Attempt to reach agreement
- Less adversarial than litigation
- Preserves co-parenting relationship
- Reduces time and cost

**Modification Hearing**:
If agreement not reached:
- Testimony from parents
- Presentation of evidence
- Expert witness testimony
- Child interview (in camera in some states)
- Court ruling based on evidence presented

### Factors Courts Consider

**Parent Factors**:
- Ability to cooperate and communicate
- Willingness to facilitate relationship with other parent
- Stability of each home environment
- Work schedules and availability
- Mental and physical health
- History of domestic violence or substance abuse

**Child Factors**:
- Age and developmental needs
- Established relationships and bonds
- School and community ties
- Special needs or medical requirements
- Child's reasonable preference (age-dependent)
- Sibling relationships

### Emergency Modifications

**Immediate Danger**:
Courts may modify without waiting period if:
- Child abuse or neglect
- Domestic violence
- Parent's substance abuse creating danger
- Parental abandonment
- Mental health crisis affecting child's safety

**Ex Parte Orders**:
Emergency modifications may be obtained:
- Without notice to other parent
- Based on declaration showing immediate harm
- Temporary pending full hearing
- Other parent receives notice of hearing after temporary order

## State-Specific Variations

**California**: Family Code § 3087 prohibits modification within 2 years unless child's health, safety, or welfare at risk or other parent agrees. "Changed circumstances" standard requires showing material change making current order no longer in child's best interests.

**New York**: Domestic Relations Law § 240 requires "change in circumstances" reflecting need for modification. Courts consider child's wishes if age 12 or older. No mandatory waiting period but changes soon after original order face heightened scrutiny.

**Texas**: Family Code § 153.002 requires showing material and substantial change in circumstances and modification in child's best interest. Parent seeking change in primary conservator must show current arrangement causes significant impairment to child's physical health or emotional development.

**Washington**: RCW 26.09.260 requires 1-year waiting period unless child's environment seriously endangers physical, mental, or emotional health. "Substantial change in circumstances" standard focuses on changes affecting child's welfare.

**Florida**: Statute § 61.13 requires showing substantial, material, and unanticipated change and that modification serves child's best interests. 2-year presumption against modification of primary residence absent endangerment, but presumption is rebuttable.

**Pennsylvania**: 23 Pa.C.S. § 5338 allows modification to serve best interests but presumes existing order serves child's needs. Moving party must overcome presumption with clear showing of changed circumstances. No specific waiting period but recent orders difficult to modify.

Before seeking modification:
- Document changed circumstances thoroughly
- Consider whether informal adjustment with other parent is possible
- Consult with attorney about likelihood of success
- Evaluate impact of litigation on child and co-parenting relationship
- Ensure changes are truly in child's best interests, not just more convenient for you

Modification proceedings can be stressful for children. Pursue modification when genuinely necessary for child's welfare, and explore agreement with other parent before resorting to contested litigation.`,
    relatedLinks: [
      { title: "Legal vs Physical Custody Explained", href: "/resources/q/custody-types" },
      { title: "Creating a Parenting Plan", href: "/resources/parenting-plans" },
    ],
    relatedQuestions: [
      { question: "What counts as a substantial change in circumstances?", href: "/resources/q/substantial-change" },
      { question: "Can I relocate with my child?", href: "/resources/q/relocation" },
      { question: "How does a custody evaluation work?", href: "/resources/q/custody-evaluation" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Family Law Statutes" },
        { name: "State Bar Association Resources" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 180,
      accuracyNotes: "Modification standards and waiting periods vary by state. Consult local family law."
    }
  },
  {
    slug: "fee-waiver",
    question: "What if I can't afford court fees?",
    status: "published",
    seoTitle: "Can't Afford Court Fees? Fee Waiver Guide | ThreadLock",
    metaDescription: "Request a fee waiver by filing an application showing your income qualifies under poverty guidelines. Courts waive fees for eligible low-income litigants.",
    shortAnswer: "Request a fee waiver by filing an application showing your income qualifies under federal poverty guidelines or you receive public assistance. If approved, the court waives filing fees, service fees, and sometimes other costs for eligible low-income litigants.",
    dateModified: "2026-02-13",
    body: `# What if I can't afford court fees?

## Short Answer

Request a fee waiver by filing an application showing your income qualifies under federal poverty guidelines or you receive public assistance. If approved, the court waives filing fees, service fees, and sometimes other costs for eligible low-income litigants. Most courts provide standard forms for fee waiver applications.

## Detailed Explanation

### Fee Waiver Basics

**What Fees Can Be Waived**:
Fee waivers typically cover:
- Initial filing fees for petitions or complaints
- Motion filing fees
- Service of process costs
- Subpoena fees
- Transcript costs (in some jurisdictions)
- Appeal fees
- Mediation fees (court-ordered programs)

**Fees Not Typically Waived**:
Courts usually don't waive:
- Attorney's fees
- Private process server fees (may provide sheriff service instead)
- Expert witness fees
- Private mediation costs
- Copying costs for personal use

### Eligibility Requirements

**Income-Based Eligibility**:
Most states grant waivers if your income is:
- At or below 125% of federal poverty guidelines
- Recipient of means-tested public benefits
- Unable to meet basic living expenses and pay fees

**Public Assistance Programs**:
Automatic or presumptive eligibility often granted if receiving:
- Supplemental Security Income (SSI)
- State public assistance or welfare
- Food stamps/SNAP benefits
- Medicaid or state health assistance
- General assistance or relief

**Household Income Calculation**:
Courts consider:
- Gross monthly income from all sources
- Number of people in household
- Household expenses (rent, food, utilities, medical, childcare)
- Assets (savings, property, vehicles)

### Application Process

**Required Forms**:
Fee waiver applications typically include:
- Application or petition for fee waiver (varies by state)
- Income and expense declaration
- Proof of public benefits (if applicable)
- Supporting financial documentation

**Supporting Documentation**:
Attach evidence of financial situation:
- Recent pay stubs (last 2-3 months)
- Tax returns (most recent year)
- Unemployment or disability benefit statements
- Public assistance award letters
- Bank statements
- Bills showing monthly expenses

**Filing the Application**:
Process varies by jurisdiction:
- File with initial petition/complaint or separately
- Submit to court clerk
- Some courts decide applications administratively
- Others require hearing before judge
- Decision typically within 5-10 business days

### Court's Decision

**Approval**:
If fee waiver is granted:
- Court stamps your documents without payment
- Sheriff or marshal serves documents at no cost
- Order specifies which fees are waived
- Waiver remains in effect for duration of case

**Partial Waiver**:
Courts may grant partial waivers:
- Defer fees until end of case
- Require payment plan
- Waive some fees but not others
- Allow installment payments

**Denial**:
If application is denied:
- Court provides reason for denial
- You must pay fees to proceed
- Can reapply if circumstances change
- May request reconsideration with additional evidence

### Reimbursement of Waived Fees

**Potential Repayment**:
Be aware that:
- Court may order winner to reimburse waived fees from losing party
- If you later have increased income, court may require payment
- Settlement agreements may address reimbursement of waived costs
- Some states have no reimbursement provision

### Maintaining Fee Waiver Status

**Reporting Changes**:
If circumstances improve:
- Some states require reporting income increases
- Court may revoke fee waiver if income rises
- Failure to report may constitute fraud

**Duration of Waiver**:
Fee waivers typically:
- Last for duration of case
- Cover related filings (motions, amended pleadings)
- May need renewal for appeals
- Require new application for new cases

### Alternatives to Fee Waivers

**Payment Plans**:
If not eligible for waiver:
- Courts may allow installment payments
- Pay filing fee over several months
- Case proceeds while payments made

**Deferral**:
Some courts allow:
- Temporary deferral of fees
- Payment from settlement proceeds
- Payment at conclusion of case

**Legal Aid**:
Organizations may help with:
- Fee waiver application preparation
- Filing on your behalf
- Representation in your case
- Payment of certain costs

## State-Specific Variations

**California**: Form FW-001 (Request to Waive Court Fees) available for all case types. Automatic eligibility if receiving public benefits. Income limit is 125% of federal poverty level. Court decides within 5 court days. Approved waivers cover filing, service, and transcript fees.

**New York**: "Poor Person's Order" obtained through IFP (In Forma Pauperis) application. Different forms for Supreme Court (matrimonial) and Family Court. Must show inability to pay fees without depriving self or dependents of necessities. Affidavit of indigency required with detailed financial information.

**Texas**: Affidavit of Indigency (form provided by court) filed to request fee waiver. Must show receipt of government assistance or income below 125% poverty level. Courts may hold hearings on contested indigency applications. Approved waivers cover filing fees and service costs.

**Florida**: Application for Determination of Civil Indigent Status filed with clerk. Three categories: indigent (fees waived), conditionally indigent (partial waiver), not indigent (pay full fees). Income at or below 200% of poverty guidelines may qualify. Clerk makes initial determination subject to court review.

**Washington**: Order Regarding Ability to Pay Filing Fee filed in family law cases. Based on monthly income compared to household size and federal poverty level. Waiver granted if income at or below 125% of poverty level or receiving public assistance. Some counties have expedited review process.

**Federal Courts**: IFP application under 28 U.S.C. § 1915 for civil cases. Must file affidavit describing assets, income, expenses, and inability to pay. Court reviews for merit (frivolous lawsuits may be dismissed even with IFP status). Prisoner IFP applications have additional requirements.

Tips for fee waiver applications:
- Complete all sections of forms
- Be thorough and honest about finances
- Provide all requested documentation
- Explain unusual circumstances (medical expenses, recent job loss)
- Don't underreport income or assets
- Follow up if you don't receive decision within expected timeframe

If your application is denied and you genuinely cannot afford the fees, consult with legal aid organizations in your area. Some may be able to assist with the cost of filing or help you pursue an appeal of the fee waiver denial.`,
    relatedLinks: [
      { title: "Where to Find Official Court Forms", href: "/resources/q/official-forms-location" },
      { title: "Legal Aid Organizations by State", href: "/resources/legal-aid" },
      { title: "Court Fee Schedules", href: "/resources/court-fees" },
    ],
    relatedQuestions: [
      { question: "What are typical court filing fees?", href: "/resources/q/filing-fees" },
      { question: "Can I get a free lawyer?", href: "/resources/q/free-legal-help" },
      { question: "What happens if I can't pay court-ordered costs?", href: "/resources/q/court-costs" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Court Administration Office" },
        { name: "Legal Aid Organizations" }
      ],
      jurisdictionScope: ["US-general"],
      reviewIntervalDays: 90,
      accuracyNotes: "Fee waiver eligibility and procedures vary by jurisdiction. Check local court rules."
    }
  },
  {
    slug: "respond-to-motion",
    question: "How do I respond to a motion?",
    status: "published",
    seoTitle: "How to Respond to a Motion | ThreadLock",
    metaDescription: "Respond to a motion by filing an opposition or response within the deadline (typically 9-21 days), supported by declarations and evidence.",
    shortAnswer: "Respond to a motion by filing a written opposition or response within the deadline (typically 9-21 days before the hearing). Include a declaration under penalty of perjury addressing the motion's claims and supporting evidence. Serve your response on the opposing party and file proof of service.",
    dateModified: "2026-02-13",
    body: `# How do I respond to a motion?

## Short Answer

Respond to a motion by filing a written opposition or response within the deadline (typically 9-21 days before the hearing). Include a declaration under penalty of perjury addressing the motion's claims and supporting evidence. Serve your response on the opposing party and file proof of service with the court.

## Detailed Explanation

### Understanding the Motion

**Review the Motion Carefully**:
Before responding, analyze:
- What the moving party is requesting
- Grounds or legal basis for the request
- Evidence and declarations supporting the motion
- Proposed order language
- Hearing date and location

**Identify the Deadline**:
Calculate when your response is due:
- Count backwards from hearing date
- Exclude weekends and court holidays (in most jurisdictions)
- Account for service method (mail adds 5 days in many states)
- Check local rules for specific requirements

**Gather Opposing Evidence**:
Collect materials that contradict or refute the motion:
- Documents showing different facts
- Communications between parties
- Financial records
- Witness statements
- Expert opinions

### Required Response Documents

**Opposition or Response Brief**:
Written argument addressing the motion:
- Caption with case information
- Title (e.g., "Respondent's Opposition to Motion for Modification")
- Introduction summarizing your position
- Statement of facts from your perspective
- Legal argument with citations to statutes or case law
- Conclusion requesting denial of motion
- Signature and date

**Declaration Under Penalty of Perjury**:
Sworn statement of facts:
- Your personal knowledge of facts
- Specific responses to moving party's claims
- Additional facts supporting your position
- Exhibits referenced and attached
- Signature under penalty of perjury

**Exhibits**:
Supporting evidence:
- Pre-labeled (A, B, C or 1, 2, 3)
- Authenticated in your declaration
- Organized and easy to reference
- Copies for court and opposing party

### Writing an Effective Opposition

**Address Each Argument**:
Respond to the motion systematically:
- Deny false factual allegations
- Provide your version of disputed events
- Explain why legal arguments don't apply
- Distinguish cases cited by moving party
- Present your own supporting legal authority

**Maintain Professional Tone**:
Keep your opposition focused and credible:
- Stick to facts and law
- Avoid emotional language or personal attacks
- Don't exaggerate or misrepresent evidence
- Concede minor points that don't affect outcome
- Focus on strongest arguments

**Cite Legal Authority**:
Support your position with:
- Relevant statutes from your jurisdiction
- Published court decisions (case law)
- Court rules of procedure
- Prior orders in your case
- Legislative intent or policy considerations

### Service and Filing Requirements

**Serve Opposing Party**:
Before filing with court:
- Mail or electronically serve your opposition on other party
- Include all declarations and exhibits
- Complete proof of service form
- Allow extra time if serving by mail

**File With Court**:
Submit to court clerk:
- Original opposition and declaration
- Proof of service showing you served opposing party
- Courtesy copies if required by local rules
- Filing fee (if applicable) or fee waiver order

**Timing**:
Follow jurisdictional requirements:
- Opposition typically due 9-16 days before hearing
- Some courts require 21 days for complex motions
- Ex parte or emergency motions may allow shorter response time
- Late filings may be rejected or disregarded

### Types of Responses

**Full Opposition**:
Comprehensive response arguing against entire motion:
- Disputes factual basis
- Challenges legal grounds
- Requests complete denial

**Partial Opposition**:
Agrees with some relief but opposes specific requests:
- Proposes compromise or alternative order
- Accepts some facts but disputes others
- Requests modified relief

**Non-Opposition with Conditions**:
Doesn't oppose but requests specific terms:
- Agrees to general request
- Proposes different implementation
- Requests protective language

### Responding to Different Motion Types

**Modification Motions**:
Address:
- Whether circumstances changed substantially
- Whether change is in best interests
- Stability of current arrangement
- Moving party's true motivations

**Custody/Parenting Time Motions**:
Focus on:
- Child's best interests
- Your involvement and relationship with child
- Reasons for opposing change
- Impact on child's stability

**Support Modification Motions**:
Respond with:
- Current accurate income information
- Reasons for income changes or disputes
- Actual expenses and needs
- Support calculation worksheets

**Contempt Motions**:
Defend by showing:
- Compliance with orders
- Good faith efforts to comply
- Inability to comply due to circumstances beyond control
- Moving party's own violations

### After Filing Your Response

**Prepare for Hearing**:
Between filing and hearing date:
- Review all filed documents
- Prepare oral argument outline
- Organize exhibits for easy reference
- Anticipate questions from judge
- Plan opening statement

**Moving Party's Reply**:
Other party may file reply brief:
- Usually shorter deadline (often 5 days before hearing)
- Addresses new issues in your opposition
- Cannot raise new arguments or evidence (in most jurisdictions)
- Review reply before hearing if filed

**Settlement Discussions**:
Consider negotiating:
- Exchange proposed alternative orders
- Discuss areas of agreement
- Explore compromise solutions
- File stipulation if agreement reached

### The Hearing

**Presentation**:
At the hearing:
- Arrive early and check in with clerk
- Bring all filed documents and extra exhibits
- Be prepared for judge's questions
- Listen to moving party's argument
- Present your key points concisely
- Avoid repeating what's in written opposition
- Respectfully address court

**Possible Outcomes**:
Judge may:
- Grant motion as requested
- Deny motion entirely
- Grant motion in part
- Take matter under submission (decide later)
- Continue hearing for further evidence
- Request additional briefing or information

## State-Specific Variations

**California**: Opposition due 9 court days before hearing for most family law motions (Cal. Rules of Court 5.92). Moving party may file reply 5 court days before hearing. Declaration must be based on personal knowledge and comply with CCP § 2015.5.

**New York**: Opposition papers due 7 days before return date in Supreme Court motions. Different rules for Family Court motions. Affidavits (notarized) or affirmations (by attorneys) used instead of declarations.

**Texas**: Response due by 10:00 a.m. on first Monday after expiration of 20 days from service in district courts. Family law cases may have different deadlines. Verified response (sworn before notary) often required.

**Florida**: Response due 5 days before hearing unless court orders different timeframe. Florida Family Law Rules 12.100(d) sets service requirements. Affidavits must be notarized.

**Washington**: Opposition due 6 days before hearing unless local rules specify otherwise. Some counties require 14 days for complex motions. Declaration format follows RCW 9A.72.085.

**Federal Courts**: Opposition due 21 days after service under FRCP Rule 6(c)(2) for most motions. Reply due 14 days after opposition. Courts may set different schedules by local rule or court order.

Tips for effective responses:
- Start working on response as soon as you receive motion
- Don't wait until deadline to begin
- Seek legal advice if motion is complex or consequences are serious
- Be honest about facts—credibility matters
- Organize your evidence clearly
- Proofread carefully before filing
- Keep copies of everything you file

If you're uncertain how to respond or the motion requests significant changes, consider consulting with an attorney. Many legal aid organizations and court self-help centers provide assistance with motion responses. A strong, timely response can make the difference in the outcome of the hearing.`,
    relatedLinks: [
      { title: "How Long Do I Have to Serve Documents?", href: "/resources/q/service-deadlines" },
      { title: "What Should I Bring to a Hearing?", href: "/resources/q/hearing-checklist" },
      { title: "Motion Response Templates", href: "/resources/motion-templates" },
    ],
    relatedQuestions: [
      { question: "What if I miss the deadline to respond?", href: "/resources/q/missed-response-deadline" },
      { question: "Do I need to attend the hearing?", href: "/resources/q/hearing-attendance" },
      { question: "Can I file a counter-motion?", href: "/resources/q/counter-motion" },
    ],
    governance: {
      lastUpdated: "2026-02-15",
      sources: [
        { name: "Federal Rules of Civil Procedure" },
        { name: "Local Court Rules" }
      ],
      jurisdictionScope: ["Federal"],
      reviewIntervalDays: 90,
      accuracyNotes: "Motion response deadlines and procedures vary by jurisdiction. Check local rules."
    }
  },
];
