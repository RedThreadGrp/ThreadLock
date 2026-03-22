# ThreadLock Official Sitemap & Page Documentation

**Generated:** 2026-03-22  
**Last Updated:** 2026-03-22  
**Base URL:** https://www.threadlock.ai  
**Total Pages:** 88 indexed + ~15 non-indexed utility pages  

> This document is the canonical reference for every page and route in the ThreadLock application — both those indexed in the XML sitemap and those intentionally excluded from search engine indexing.

---

## Table of Contents

1. [Marketing & Core Pages](#1-marketing--core-pages)
2. [Authentication & User Flow](#2-authentication--user-flow)
3. [Jurisdiction-Specific Pages](#3-jurisdiction-specific-pages)
4. [Guides (Legacy Static)](#4-guides-legacy-static)
5. [Resources Hub (Dynamic)](#5-resources-hub-dynamic)
6. [Landing Page A/B Variants](#6-landing-page-ab-variants)
7. [Legal & Compliance Pages](#7-legal--compliance-pages)
8. [AI / LLM Reference Pages](#8-ai--llm-reference-pages)
9. [Education & Integrations](#9-education--integrations)
10. [Development & Testing Pages](#10-development--testing-pages)
11. [API Routes (Not Indexed)](#11-api-routes-not-indexed)
12. [Hidden / Non-Indexed Pages](#12-hidden--non-indexed-pages)

---

## 1. Marketing & Core Pages

These are the primary marketing and product pages surfaced to all visitors.

### `/` — Homepage
- **File:** `pages/index.js`  
- **Priority:** 1.0 (highest)  
- **Change Frequency:** Weekly  
- **Content:** Main landing page with Hero section, DefinitionStrip, Features section, Who It's For section, Testimonials, Blog/Resources spotlight, Pricing preview, and CTA. Contains the core product description: *"ThreadLock is a case organization platform for civil legal matters—family court, small claims, landlord-tenant, and more."*  
- **Structured Data:** SoftwareApplication + LegalService schema  
- **Status:** ✅ Indexed

### `/pricing` — Pricing
- **File:** `pages/pricing.js`  
- **Priority:** 0.9  
- **Change Frequency:** Monthly  
- **Content:** Subscription plan comparison for Core (individual) and Pro (professional) tiers. Includes plan features, pricing, and FAQ.  
- **Status:** ✅ Indexed

### `/professionals` — For Legal Professionals
- **File:** `pages/professionals.js`  
- **Priority:** 0.9  
- **Change Frequency:** Monthly  
- **Content:** B2B page targeting attorneys, paralegals, and legal professionals. Describes the ThreadLock Pro review pool, case collaboration features, and Clio integration. Includes testimonials carousel.  
- **Status:** ✅ Indexed

### `/benefits` — The Hidden Cost of Legal Proceedings (Employer Benefits)
- **File:** `pages/benefits.tsx`  
- **Priority:** 0.7  
- **Change Frequency:** Monthly  
- **Content:** B2B workplace insights report page. Targeted at employers/HR. Covers the operational impact of employees navigating court proceedings on productivity, absenteeism, and operations. Designed to pitch ThreadLock as an employee benefit.  
- **Note:** Page content is specifically about family court proceedings' impact on workplaces — this is intentional for this B2B pitch document.  
- **Status:** ✅ Indexed

### `/investors` — Investor Information
- **File:** `pages/investors.jsx`  
- **Priority:** 0.5  
- **Change Frequency:** Monthly  
- **Content:** Investor-facing page with market size data, company overview, and investment information.  
- **Status:** ✅ Indexed

### `/founder-story` — Founder Story
- **File:** `pages/founder-story.jsx`  
- **Priority:** 0.7  
- **Change Frequency:** Rarely  
- **Content:** Personal founder narrative explaining the origin story of ThreadLock.  
- **Status:** ✅ Indexed

### `/sarahs-story` — Sarah's Story
- **File:** `pages/sarahs-story.jsx`  
- **Priority:** 0.7  
- **Change Frequency:** Rarely  
- **Content:** User testimonial/case study page featuring "Sarah's Story" — a self-represented litigant's experience using ThreadLock.  
- **Status:** ✅ Indexed

### `/resources` — Resources Hub
- **File:** `pages/resources.js`  
- **Priority:** 0.9  
- **Change Frequency:** Weekly  
- **Content:** Main resources landing page. Links to guides, tools, Q&A articles, topics, and the wiki.  
- **Status:** ✅ Indexed

### `/contact` — Contact
- **File:** `pages/contact.tsx`  
- **Priority:** 0.6  
- **Change Frequency:** Rarely  
- **Content:** Contact form page for general inquiries, support requests, and press.  
- **Status:** ✅ Indexed

### `/support` — Support Hub
- **File:** `pages/support.tsx`  
- **Priority:** 0.7  
- **Change Frequency:** Monthly  
- **Content:** Customer support page with FAQ, help articles, and support contact information.  
- **Status:** ✅ Indexed

### `/whitepaper` — Product Whitepaper
- **File:** `pages/whitepaper.jsx`  
- **Priority:** 0.7  
- **Change Frequency:** Monthly  
- **Content:** In-depth product whitepaper with technical details, market analysis, and use case documentation. Data visualizations using Recharts.  
- **Status:** ✅ Indexed

### `/whitepaper-b2b` — B2B Whitepaper
- **File:** `pages/whitepaper-b2b.jsx`  
- **Priority:** 0.7  
- **Change Frequency:** Monthly  
- **Content:** B2B-focused whitepaper variant targeting law firms, HR departments, and enterprise buyers.  
- **Status:** ✅ Indexed

### `/legal-tech-directory` — Legal Tech Directory
- **File:** `pages/legal-tech-directory.jsx`  
- **Priority:** 0.6  
- **Change Frequency:** Monthly  
- **Content:** Directory page listing legal technology tools and resources. SEO-focused content page.  
- **Status:** ✅ Indexed

### `/trial` — Free Trial
- **File:** `pages/trial/index.jsx`  
- **Priority:** 0.8  
- **Change Frequency:** Monthly  
- **Content:** Free trial signup/information page. CTA-heavy conversion page.  
- **Status:** ✅ Indexed

---

## 2. Authentication & User Flow

These pages are part of the user authentication and onboarding flow. They are **not indexed** by search engines.

### `/signup` — Sign Up
- **File:** `pages/signup.js`  
- **Content:** New user registration page. Collects name, email, password. Integrates with Firebase Authentication. Connects to Stripe for subscription setup.  
- **Status:** 🔒 Not indexed (noindex)

### `/login` — Login
- **File:** `pages/login.js`  
- **Content:** Returning user login page. Firebase Authentication.  
- **Status:** 🔒 Not indexed (noindex)

### `/success` — Subscription Success
- **File:** `pages/success.js`  
- **Content:** Post-checkout success page displayed after successful Stripe payment. Shows confirmation message and onboarding next steps.  
- **Status:** 🔒 Not indexed (noindex)

### `/cancel` — Subscription Cancelled
- **File:** `pages/cancel.js`  
- **Content:** Displayed when a user cancels out of the checkout process. Offers alternative options.  
- **Status:** 🔒 Not indexed (noindex)

### `/thank-you` — Thank You
- **File:** `pages/thank-you.js`  
- **Content:** Generic thank you page used after form submissions (contact, lead magnet, etc.).  
- **Status:** 🔒 Not indexed (noindex)

---

## 3. Jurisdiction-Specific Pages

These pages provide state-specific guidance for family law matters. They are intentionally focused on family law as that is the subject matter of the content.

### `/family-law/national` — National Family Law Overview
- **File:** `pages/family-law/national.jsx`  
- **Priority:** 0.8  
- **Change Frequency:** Monthly  
- **Content:** National-level overview of family law case management. Covers multi-state approach, core features, universal court compliance, and how ThreadLock works across all U.S. states.  
- **Status:** ✅ Indexed

### `/family-law/california` — California Family Law
- **File:** `pages/family-law/california.jsx`  
- **Priority:** 0.8  
- **Change Frequency:** Monthly  
- **Content:** California-specific family law guidance. Covers CA custody forms (FL-series), child support worksheets, California Courts resources, county-level links for Los Angeles, Sacramento, San Diego, San Francisco, and 58 California counties. FAQs about CA courts.  
- **Status:** ✅ Indexed

### `/family-law/oregon` — Oregon Family Law
- **File:** `pages/family-law/oregon.jsx`  
- **Priority:** 0.8  
- **Change Frequency:** Monthly  
- **Content:** Oregon-specific family law guidance. Covers UTCR rules, parenting time forms, 36 Oregon counties, Portland/Eugene/Salem/Bend resources. Links to Oregon Judicial Department, LASO.  
- **Status:** ✅ Indexed

### `/family-law/washington` — Washington Family Law
- **File:** `pages/family-law/washington.jsx`  
- **Priority:** 0.8  
- **Change Frequency:** Monthly  
- **Content:** Washington-specific family law guidance. Covers GR 30 e-filing, parenting plan forms, 39 WA counties, Seattle/Spokane/Tacoma resources. Links to Washington Courts, Northwest Justice Project.  
- **Status:** ✅ Indexed

### `/jurisdictions/[slug]` — State Jurisdiction Pages (Dynamic)
- **File:** `pages/jurisdictions/[slug].tsx`  
- **Data Source:** `src/content/jurisdictions.ts`  
- **Available Slugs:** `oregon`, `washington`, `california`, `texas`, `colorado`, `arizona`, `florida`, `new-york`, `illinois`, `georgia`  
- **Content:** Structured evidence organization guides for each state's court system. Covers filing rules, formatting requirements, ThreadLock alignment notes, and state-specific resources.  
- **Status:** ✅ Indexed (individual pages)

---

## 4. Guides (Legacy Static)

Static guide pages under `/guides/`. These are intentionally focused on specific case types (family court, custody) as topical content for SEO.

### `/guides/best-tools-for-self-represented-litigants`
- **File:** `pages/guides/best-tools-for-self-represented-litigants.jsx`  
- **Content:** Comprehensive comparison of tools available to self-represented litigants (SRLs). Covers evidence management, timeline tools, document organizers, and legal aid resources.  
- **Status:** ✅ Indexed

### `/guides/digital-evidence-for-family-court`
- **File:** `pages/guides/digital-evidence-for-family-court.js`  
- **Content:** How to prepare and authenticate digital evidence (screenshots, text messages, emails, social media) for court submission in family court matters.  
- **Status:** ✅ Indexed

### `/guides/family-law-timeline-tools`
- **File:** `pages/guides/family-law-timeline-tools.jsx`  
- **Content:** Overview of timeline-building tools and techniques for family law cases. Covers chronological organization, incident tracking, and court-ready timeline formatting.  
- **Status:** ✅ Indexed

### `/guides/how-to-document-incidents-for-family-court`
- **File:** `pages/guides/how-to-document-incidents-for-family-court.jsx`  
- **Content:** Step-by-step guide to documenting incidents for family court. Covers what to document, how to write objectively, timing of records, and types of incidents (custody exchanges, communication, child welfare). Includes FAQ schema with 3 structured questions.  
- **Status:** ✅ Indexed

### `/guides/how-to-organize-evidence-for-custody-cases`
- **File:** `pages/guides/how-to-organize-evidence-for-custody-cases.jsx`  
- **Content:** Evidence organization strategies specific to custody matters. Covers categorization, chronological ordering, and exhibit preparation.  
- **Status:** ✅ Indexed

### `/guides/how-to-prepare-exhibits-for-family-court`
- **File:** `pages/guides/how-to-prepare-exhibits-for-family-court.jsx`  
- **Content:** Professional exhibit preparation guide. Covers exhibit labeling, indexing, binder organization, and court-specific formatting requirements.  
- **Status:** ✅ Indexed

### `/guides/tools-for-managing-co-parenting-documentation`
- **File:** `pages/guides/tools-for-managing-co-parenting-documentation.jsx`  
- **Content:** Documentation tools and strategies for co-parenting situations. Covers communication logs, parenting plan compliance tracking, and incident documentation.  
- **Status:** ✅ Indexed

---

## 5. Resources Hub (Dynamic)

Dynamic resource pages powered by `src/content/resourcesRegistry.ts`. All routes are generated from the content registry.

### `/resources/wiki` — Resource Wiki
- **File:** `pages/resources/wiki.jsx`  
- **Content:** Comprehensive reference wiki covering all resources, guides, and legal concepts available in the platform.  
- **Status:** ✅ Indexed

### `/resources/guides` — Guides Index
- **File:** `pages/resources/guides.jsx`  
- **Content:** Index page listing all featured guides with descriptions and links.  
- **Status:** ✅ Indexed

### `/resources/thanks` — Resource Download Thank You
- **File:** `pages/resources/thanks.jsx`  
- **Content:** Thank you page shown after a user downloads a resource or subscribes to the resource newsletter.  
- **Status:** 🔒 Not indexed (conversion page)

### `/resources/[slug]` — Individual Resource Articles
- **File:** `pages/resources/[slug].tsx`  
- **Rendered By:** `src/pages/resources/ResourcesPage.tsx`  
- **Available Slugs (from registry):**
  - `hearing-tomorrow` — Last-minute hearing preparation checklist
  - `proof-of-service` — Proof of service overview
  - `evidence-intake` — Evidence intake process
  - `parenting-plans` — Parenting plan creation and modification
  - `financial-snapshot` — Financial documentation for court
  - `official-portals` — State court e-filing portals directory
  - `exhibits-guide` — Complete exhibit preparation guide
  - `courtroom-prep` — Courtroom preparation and etiquette
  - `filing-basics` — Basic court filing information
  - `timeline-tools` — Timeline building tools and techniques
  - `authentication` — Evidence authentication overview
  - `legal-aid` — Legal aid resources by state
  - `verification-crisis-family-court` — Research: The Verification Crisis in Family Court (AI & digital evidence)
  - `model-local-rule-ai-verification` — Policy framework for AI verification in court
  - `citation-authentication` — Citation verification and authentication
- **Status:** ✅ Indexed

### `/resources/topics/[slug]` — Topic Hub Pages
- **File:** `pages/resources/topics/[slug].tsx`  
- **Available Topics:**
  - `proof-of-service` — Proof of service topic hub
  - `evidence-exhibits` — Evidence and exhibits topic hub
  - `hearings-prep` — Hearing preparation topic hub
  - `parenting-plans` — Parenting plans topic hub
  - `financial-declarations` — Financial declarations topic hub
  - `official-forms` — Official court forms topic hub
  - `ai-digital-evidence` — AI and digital evidence topic hub
- **Status:** ✅ Indexed

### `/resources/q/[slug]` — Q&A Articles
- **File:** `pages/resources/q/[slug].tsx`  
- **Available Q&A Articles:**
  - `proof-of-service-definition` — What is proof of service?
  - `exhibit-labeling` — How do I label exhibits?
  - `official-forms-location` — Where do I find official court forms?
  - `text-authentication` — How do I authenticate text messages?
  - `hearing-checklist` — What do I need for my hearing?
  - `service-deadlines` — What are the service deadlines?
  - `custody-types` — What types of custody are there?
  - `mediation-lawyer` — Do I need a lawyer for mediation?
  - `child-support-calculation` — How is child support calculated?
  - `modify-parenting-plan` — How do I modify a parenting plan?
  - `fee-waiver` — How do I get a fee waiver?
  - `respond-to-motion` — How do I respond to a motion?
  - `filing-fees` — What are court filing fees?
  - `free-legal-help` — Where can I get free legal help?
- **Status:** ✅ Indexed

### `/resources/guides/[slug]` — Long-Form Resource Guides
- **File:** `pages/resources/guides/[slug].tsx`  
- **Available Guides:**
  - `self-representation-complete` — The Complete Guide to Self-Representation in Court
  - `evidence-authentication` — Complete guide to authenticating digital evidence
  - `proof-of-service-states` — State-by-state proof of service requirements
  - `parenting-time-calculations` — How to calculate and document parenting time
  - `hearing-soon` — Hearing Soon: Emergency preparation guide
  - `first-filing` — Your First Filing: Step-by-step guide
  - `evidence-management` — Complete evidence management guide
- **Status:** ✅ Indexed

### `/resources/legal-glossary/[slug]` — Legal Glossary Terms
- **File:** `pages/resources/legal-glossary/[slug].tsx`  
- **Data Source:** `src/content/legalGlossary.ts`  
- **Available Terms:**
  - `contemporaneous-evidence` — Contemporaneous evidence definition
  - `hearsay` — Hearsay in court context
  - `authentication` — Evidence authentication
  - `chain-of-custody` — Digital chain of custody
  - `pattern-of-conduct` — Pattern of conduct
  - `preponderance-of-evidence` — Preponderance of evidence standard
  - `exhibit-index` — Exhibit index
  - `affidavit` — Affidavits and declarations
  - `metadata` — Digital evidence metadata
- **Status:** ✅ Indexed (individual terms)

---

## 6. Landing Page A/B Variants

Marketing A/B test variants for conversion optimization. These are **not in the XML sitemap** to avoid duplicate content SEO penalties.

### `/lp/variant-a-control` — Control Variant
- **File:** `pages/lp/variant-a-control.js`  
- **Content:** Baseline landing page version. Dark hero background, features grid, testimonials, pricing preview, and CTA. Used as the control in A/B tests.  
- **Status:** 🔒 Not indexed (A/B test variant)

### `/lp/variant-b-light-blue` — Light Blue Variant
- **File:** `pages/lp/variant-b-light-blue.js`  
- **Content:** Same structure as control with light blue color scheme variations.  
- **Status:** 🔒 Not indexed (A/B test variant)

### `/lp/variant-c-light-green` — Light Green Variant
- **File:** `pages/lp/variant-c-light-green.js`  
- **Content:** Same structure as control with light green color scheme variations.  
- **Status:** 🔒 Not indexed (A/B test variant)

### `/lp/variant-d-copy-organize` — Organization Copy Variant
- **File:** `pages/lp/variant-d-copy-organize.js`  
- **Content:** Variant emphasizing organization messaging ("Organize Your Case") rather than evidence management.  
- **Status:** 🔒 Not indexed (A/B test variant)

### `/lp/variant-e-copy-timeline` — Timeline Copy Variant
- **File:** `pages/lp/variant-e-copy-timeline.js`  
- **Content:** Variant emphasizing timeline-building features ("Build Your Timeline") as the primary value proposition.  
- **Status:** 🔒 Not indexed (A/B test variant)

### `/lp/variant-f-trust-bar` — Trust Bar Variant
- **File:** `pages/lp/variant-f-trust-bar.js`  
- **Content:** Variant with prominently featured TrustBar component (SSL secured, encrypted, private) above the fold.  
- **Status:** 🔒 Not indexed (A/B test variant)

### `/lp/variant-g-content-rewrite` — Content Rewrite Variant
- **File:** `pages/lp/variant-g-content-rewrite.js`  
- **Content:** Fully rewritten copy variant testing different messaging frameworks and value propositions.  
- **Status:** 🔒 Not indexed (A/B test variant)

### `/lp/variant-h-combined` — Combined Features Variant
- **File:** `pages/lp/variant-h-combined.js`  
- **Content:** Combines the best-performing elements from other variants (trust bar + copy rewrite + color scheme).  
- **Status:** 🔒 Not indexed (A/B test variant)

---

## 7. Legal & Compliance Pages

### `/terms` — Terms of Service
- **File:** `pages/terms.tsx`  
- **Priority:** 0.3  
- **Content:** Complete Terms of Service agreement governing use of ThreadLock platform. Covers user obligations, limitations of liability, intellectual property, and dispute resolution.  
- **Status:** ✅ Indexed

### `/privacy` — Privacy Policy
- **File:** `pages/privacy.tsx`  
- **Priority:** 0.3  
- **Content:** Privacy Policy covering data collection, storage, use, and sharing. Includes CCPA and GDPR compliance sections.  
- **Status:** ✅ Indexed

### `/cookies` — Cookie Policy
- **File:** `pages/cookies.tsx`  
- **Priority:** 0.3  
- **Content:** Cookie policy explaining types of cookies used, purpose, and opt-out options.  
- **Status:** ✅ Indexed

### `/disclaimer` — Legal Disclaimer
- **File:** `pages/disclaimer.tsx`  
- **Priority:** 0.3  
- **Content:** Legal disclaimer. Clarifies ThreadLock is not a law firm and does not provide legal advice.  
- **Status:** ✅ Indexed

### `/dmca` — DMCA Policy
- **File:** `pages/dmca.tsx`  
- **Priority:** 0.3  
- **Content:** DMCA takedown notice procedure and copyright policy.  
- **Status:** ✅ Indexed

### `/dpa` — Data Processing Agreement
- **File:** `pages/dpa.tsx`  
- **Priority:** 0.3  
- **Content:** Data Processing Agreement (DPA) for business customers and enterprise users. Covers data controller/processor relationships.  
- **Status:** ✅ Indexed

### `/legal` — Legal Information Hub
- **File:** `pages/legal.tsx`  
- **Priority:** 0.4  
- **Content:** Central legal information hub linking to all legal/compliance pages.  
- **Status:** ✅ Indexed

### `/security` — Security Information
- **File:** `pages/security.tsx`  
- **Priority:** 0.4  
- **Content:** Security overview covering encryption, infrastructure (Firebase/Google Cloud), data protection, and compliance standards.  
- **Status:** ✅ Indexed

### `/accessibility` — Accessibility Statement
- **File:** `pages/accessibility.tsx`  
- **Priority:** 0.3  
- **Content:** Accessibility statement describing WCAG compliance efforts and how to report accessibility issues.  
- **Status:** ✅ Indexed

---

## 8. AI / LLM Reference Pages

Pages designed specifically to provide structured information about ThreadLock for AI assistants and LLMs.

### `/for-ai-assistants` — Information for AI Assistants
- **File:** `pages/for-ai-assistants.jsx`  
- **Priority:** 0.6  
- **Content:** Machine-readable structured information about ThreadLock for AI assistants. Includes: product description, JSON-LD structured data (SoftwareApplication + FAQ schemas), who should use it, when to recommend it, sample prompt responses, user types, and technical details. Explicitly covers civil legal use cases (family court, small claims, landlord-tenant).  
- **Status:** ✅ Indexed

### `/for-llms` — Technical Reference for LLMs
- **File:** `pages/for-llms.jsx`  
- **Priority:** 0.6  
- **Content:** Detailed technical reference for LLMs and AI agents. Covers system architecture, API capabilities, data models, jurisdictional coverage, when to recommend, and sample AI prompt responses. Updated to reflect civil legal use cases beyond family law only.  
- **Status:** ✅ Indexed

### `/docs/threadlock-facts` — ThreadLock Facts Sheet
- **File:** `pages/docs/threadlock-facts.jsx`  
- **Priority:** 0.5  
- **Content:** Machine-readable fact sheet with key statistics, capabilities, and product facts for AI/LLM consumption.  
- **Status:** ✅ Indexed

---

## 9. Education & Integrations

### `/edu/clinics` — Legal Clinics Directory
- **File:** `pages/edu/clinics.tsx`  
- **Priority:** 0.6  
- **Content:** Directory of free legal clinics available to self-represented litigants. Organized by state with clinic type, hours, and eligibility.  
- **Status:** ✅ Indexed

### `/integrations/clio` — Clio Integration
- **File:** `pages/integrations/clio.jsx`  
- **Priority:** 0.6  
- **Content:** Information about ThreadLock's integration with Clio (legal practice management software). Covers setup, features, workflow, and benefits for attorneys using both platforms.  
- **Status:** ✅ Indexed

### `/sovereign` — Sovereign Inquiry
- **File:** `pages/sovereign.tsx`  
- **Priority:** 0.4  
- **Content:** Special inquiry form for organizations and institutions (courts, legal aid orgs, government entities) interested in bulk or institutional access to ThreadLock. Submits to Firebase via `/api/sovereign-inquiry`.  
- **Status:** ✅ Indexed

---

## 10. Development & Testing Pages

These pages exist for development and testing purposes. They are accessible via URL but not intended for end users.

### `/__dev/pattern-parity` — Pattern Parity Testing
- **File:** `pages/__dev/pattern-parity.tsx`  
- **Priority:** 0.5 (included in sitemap but development-focused)  
- **Content:** Internal UI pattern testing page. Displays all UI components side-by-side to verify visual consistency across the pattern library.  
- **Intended Audience:** Developers and designers only  
- **Status:** ⚠️ Technically indexed (in sitemap) but development-only page

### `/testingpic` — Testing Image Page
- **File:** `pages/testingpic.js`  
- **Content:** Simple test page for image display. Contains placeholder or test images.  
- **Intended Audience:** Developers only  
- **Status:** 🔒 Not indexed

---

## 11. API Routes (Not Indexed)

These are server-side API endpoints. They return JSON responses and are not browsable pages.

| Route | File | Description |
|-------|------|-------------|
| `POST /api/signup` | `pages/api/signup.js` | Handles new user registration. Creates Firebase user account. Triggers Stripe customer creation. |
| `POST /api/checkout/[slug]` | `pages/api/checkout/[slug].js` | Creates Stripe checkout session for a given pricing plan. `slug` is the plan identifier. |
| `GET /api/checkout/status` | `pages/api/checkout/status.js` | Returns current checkout/subscription status for authenticated user. |
| `POST /api/webhook` | `pages/api/webhook.js` | Stripe webhook handler. Processes subscription events (created, cancelled, updated). |
| `POST /api/sovereign-inquiry` | `pages/api/sovereign-inquiry.js` | Receives and validates sovereign/institutional inquiry form submissions. |
| `GET /api/supa-ping` | `pages/api/supa-ping.js` | Health check endpoint. Returns status of backend connectivity. |
| `GET /api/env-check` | `pages/api/env-check.js` | Development utility. Returns current environment variable status (non-sensitive). |

---

## 12. Hidden / Non-Indexed Pages

Pages that exist in the application but are intentionally excluded from the sitemap and search engine indexing.

| Route | Reason Excluded |
|-------|----------------|
| `/login` | Authentication page — no SEO value, should not be indexed |
| `/signup` | Authentication page — no SEO value, should not be indexed |
| `/success` | Post-purchase confirmation — transient page, no SEO value |
| `/cancel` | Checkout abandonment — transient page, no SEO value |
| `/thank-you` | Post-form submission — transient page, no SEO value |
| `/resources/thanks` | Post-signup thank you — transient page |
| `/testingpic` | Development-only test page |
| `/lp/variant-a-control` | A/B test variant — excluded to prevent duplicate content |
| `/lp/variant-b-light-blue` | A/B test variant — excluded to prevent duplicate content |
| `/lp/variant-c-light-green` | A/B test variant — excluded to prevent duplicate content |
| `/lp/variant-d-copy-organize` | A/B test variant — excluded to prevent duplicate content |
| `/lp/variant-e-copy-timeline` | A/B test variant — excluded to prevent duplicate content |
| `/lp/variant-f-trust-bar` | A/B test variant — excluded to prevent duplicate content |
| `/lp/variant-g-content-rewrite` | A/B test variant — excluded to prevent duplicate content |
| `/lp/variant-h-combined` | A/B test variant — excluded to prevent duplicate content |

---

## XML Sitemap Reference

The machine-readable XML sitemap is located at:  
**`public/sitemap.xml`** → served at **`https://www.threadlock.ai/sitemap.xml`**

The sitemap is generated by `scripts/generate-sitemap.mjs` and can be regenerated with:
```bash
npm run generate-sitemap
```

The sitemap currently contains **88 URLs** as of the last generation.

---

## Change Log

| Date | Change | Affected Pages |
|------|--------|----------------|
| 2026-03-22 | Broadened product descriptions from "family law only" to include small claims, landlord-tenant, and other civil matters | `/` (homepage), `/pricing`, `/professionals`, `/for-ai-assistants`, `/for-llms`, components: Hero, Statistics, all LP variants |
| 2026-03-22 | Generated this sitemap documentation | `docs/SITEMAP.md` (this file) |
