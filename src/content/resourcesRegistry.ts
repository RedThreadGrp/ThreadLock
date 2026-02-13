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
