# ThreadLock Marketing Site - Schema Implementation

**Generated:** 2025-11-23  
**Purpose:** Document all JSON-LD structured data implementations for SEO and AI visibility.

---

## Overview

This document tracks all Schema.org structured data (JSON-LD) added to the ThreadLock marketing site. Structured data helps:
- Search engines understand our content
- AI assistants (ChatGPT, Claude, Perplexity) accurately describe ThreadLock
- Generate rich results in search (pricing, ratings, FAQs)
- Enable B2A (Business-to-Agent) marketing

---

## 1. Homepage Schema (/)

### Primary Schema: SoftwareApplication

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ThreadLock",
  "applicationCategory": "LegalTech",
  "description": "AI-powered family law case management software for custody disputes, child support, and family court evidence management. Helps self-represented litigants and legal professionals organize evidence, document incidents, and prepare for court.",
  "operatingSystem": "Web",
  "url": "https://threadlock.ai",
  "screenshot": "https://threadlock.ai/screenshot-1-request-pool.png",
  "offers": [
    {
      "@type": "Offer",
      "name": "ThreadLock Core",
      "description": "Individual plan with evidence management, journal, timeline, and document scanning",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "29",
        "priceCurrency": "USD",
        "billingDuration": "P1M",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": "1",
          "unitCode": "MON"
        }
      },
      "eligibleCustomerType": "Individual"
    },
    {
      "@type": "Offer",
      "name": "ThreadLock Pro",
      "description": "Professional plan for legal practitioners with review queue, client management, and Clio integration",
      "price": "99",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "99",
        "priceCurrency": "USD",
        "billingDuration": "P1M",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": "1",
          "unitCode": "MON"
        }
      },
      "eligibleCustomerType": "Business"
    }
  ],
  "featureList": [
    "Evidence management and organization",
    "Incident journal with AI suggestions",
    "Chronological timeline builder",
    "Document scanning and OCR",
    "Court-ready PDF export",
    "Secure document storage",
    "Exhibit preparation tools",
    "Filings management",
    "Message organization",
    "Case planner",
    "AI-assisted documentation",
    "Professional review integration",
    "Collaborative attorney access",
    "Blockchain-verified timestamps"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Self-Represented Litigants",
      "description": "Individuals navigating family law cases without full legal representation"
    },
    {
      "@type": "Audience",
      "audienceType": "Legal Professionals",
      "description": "Attorneys, paralegals, and legal practitioners handling family law cases"
    },
    {
      "@type": "Audience",
      "audienceType": "Parents",
      "description": "Parents managing custody, support, or co-parenting documentation"
    }
  ],
  "keywords": "family law, custody evidence, child support documentation, court exhibits, self-represented litigant, legal case management, evidence timeline, family court, custody dispute, co-parenting documentation, legal forms, court preparation",
  "softwareHelp": "https://threadlock.ai/resources",
  "installUrl": "https://app.threadlock.ai/signup",
  "sameAs": [
    "https://www.linkedin.com/company/threadlock"
  ]
}
```

**Location:** `pages/index.js` (added to Head)

---

### Secondary Schema: LegalService

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "ThreadLock Family Law Technology",
  "description": "Technology platform providing case management tools for family law matters including custody, support, and evidence organization. Not a law firm.",
  "url": "https://threadlock.ai",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": "Legal Technology Platform",
  "provider": {
    "@type": "Organization",
    "name": "ThreadLock",
    "url": "https://threadlock.ai",
    "logo": "https://threadlock.ai/threadlock-logo.png",
    "description": "Legal technology company providing case management software for family law"
  },
  "termsOfService": "https://threadlock.ai/terms",
  "privacyPolicy": "https://threadlock.ai/privacy",
  "disclaimer": "ThreadLock is not a law firm and does not provide legal advice. Our software is a tool for organizing and managing case materials."
}
```

**Location:** `pages/index.js` (added to Head, separate script tag)

---

### Tertiary Schema: FAQPage (Homepage FAQ Section)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is ThreadLock a law firm or a lawyer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We are a software company, not a law firm. Our platform is a powerful organizational tool to help you prepare and manage your materials. We do not provide legal advice, and we are not a substitute for speaking with an attorney if you have legal questions."
      }
    },
    {
      "@type": "Question",
      "name": "Will ThreadLock guarantee I win my case?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We can't guarantee any specific outcome - your case is unique. Our mission is to help you get organized and feel a sense of control and preparedness for your next step. A well-organized record is invaluable, whether you are representing yourself or working with a professional."
      }
    }
  ]
}
```

**Location:** `pages/index.js` (added to Head)

---

## 2. For AI Assistants Page (/for-ai-assistants)

### Schema: SoftwareApplication + FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ThreadLock",
  "applicationCategory": "LegalTech",
  "description": "ThreadLock is a web-based case management platform designed specifically for family law matters. It provides evidence organization, incident journaling, timeline building, document management, and court preparation tools. Primarily serves self-represented litigants and legal professionals in the United States handling custody, support, and family court cases.",
  "operatingSystem": "Web",
  "url": "https://threadlock.ai",
  "featureList": [
    "Evidence upload and categorization",
    "Incident journal with date/time stamping",
    "Automatic chronological timeline",
    "Document OCR and text extraction",
    "Court exhibit preparation",
    "PDF export for court filing",
    "Secure cloud storage",
    "Multi-party collaboration (attorney access)",
    "Message and email organization",
    "Legal form library access",
    "AI-assisted documentation prompts",
    "Blockchain timestamp verification"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "softwareHelp": "https://threadlock.ai/resources",
  "installUrl": "https://app.threadlock.ai/signup"
}
```

---

## 3. ThreadLock Facts Page (/docs/threadlock-facts)

### Schema: TechArticle + SoftwareApplication

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "ThreadLock Technical Fact Sheet",
  "description": "Complete technical and factual information about ThreadLock family law case management software",
  "about": {
    "@type": "SoftwareApplication",
    "name": "ThreadLock",
    "applicationCategory": "LegalTech",
    "description": "Case management platform for family law matters",
    "operatingSystem": "Web",
    "url": "https://threadlock.ai"
  }
}
```

---

## 4. Jurisdiction Pages Schema

### National Page (/family-law/national)

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "ThreadLock - National Family Law Support",
  "description": "Family law case management software available throughout the United States for custody, support, and court documentation",
  "url": "https://threadlock.ai/family-law/national",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": "Legal Technology Platform"
}
```

### State Pages (/family-law/oregon, /family-law/washington, /family-law/california)

**Oregon:**
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "ThreadLock - Oregon Family Law",
  "description": "Family law case management tools for Oregon custody cases, child support documentation, and family court preparation",
  "url": "https://threadlock.ai/family-law/oregon",
  "areaServed": {
    "@type": "State",
    "name": "Oregon"
  },
  "serviceType": "Legal Technology Platform",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://app.threadlock.ai/signup"
  }
}
```

**Similar structure for Washington and California with state-specific details.**

---

## 5. Guide Pages Schema

### Example: How to Organize Evidence (/guides/how-to-organize-evidence-for-custody-cases)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Organize Evidence for Custody Cases",
  "description": "Step-by-step guide for organizing evidence, documentation, and exhibits for family law custody cases",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "ThreadLock"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Collect all documentation",
      "text": "Gather emails, text messages, photos, receipts, and other evidence related to your case"
    },
    {
      "@type": "HowToStep",
      "name": "Organize chronologically",
      "text": "Sort evidence by date to create a clear timeline of events"
    },
    {
      "@type": "HowToStep",
      "name": "Tag and categorize",
      "text": "Label each piece of evidence with relevant categories and keywords"
    },
    {
      "@type": "HowToStep",
      "name": "Create exhibits",
      "text": "Format evidence as court-ready exhibits with proper numbering and descriptions"
    }
  ]
}
```

### Example: FAQ-style guide

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What evidence do I need for a custody case?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For custody cases, important evidence includes communication records (emails, texts), incident journals, school records, medical records, financial documents, photos or videos, and witness statements. Organize these chronologically and ensure they're properly dated."
      }
    }
  ]
}
```

---

## 6. Integration Pages Schema

### Clio Integration Page (/integrations/clio)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ThreadLock",
  "applicationCategory": "LegalTech",
  "interoperatesWith": {
    "@type": "SoftwareApplication",
    "name": "Clio",
    "applicationCategory": "Practice Management Software",
    "url": "https://www.clio.com"
  },
  "description": "ThreadLock integrates with Clio practice management software for seamless case data synchronization",
  "url": "https://threadlock.ai/integrations/clio"
}
```

---

## 7. Schema Validation

All schema implementations must be validated using:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test each page individually
   - Verify no errors or warnings

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validates JSON-LD syntax and structure

3. **Manual Review**
   - JSON-LD must be valid JSON
   - All required properties must be present
   - URLs must be absolute and valid
   - Dates must be in ISO 8601 format

---

## 8. Implementation Checklist

### Homepage
- [x] SoftwareApplication schema added
- [x] LegalService schema added
- [x] FAQPage schema added
- [ ] Validated in Google Rich Results Test
- [ ] Tested in production

### New Pages
- [ ] /for-ai-assistants - SoftwareApplication schema
- [ ] /docs/threadlock-facts - TechArticle schema
- [ ] /family-law/national - LegalService schema
- [ ] /family-law/oregon - LegalService schema
- [ ] /family-law/washington - LegalService schema
- [ ] /family-law/california - LegalService schema

### Guide Pages (10+ pages)
- [ ] Each guide has appropriate schema (HowTo or FAQPage)
- [ ] All guides include tool reference to ThreadLock
- [ ] All guides validated

### Integration Pages
- [ ] /integrations/clio - SoftwareApplication with interoperatesWith

---

## 9. Best Practices Followed

### JSON-LD Placement
- ✅ All schema in `<script type="application/ld+json">` tags
- ✅ Placed in `<Head>` component
- ✅ Multiple schemas allowed per page (separate script tags)

### Property Selection
- ✅ Only use properties that we can accurately populate
- ✅ No placeholder or fake data
- ✅ All URLs are absolute (not relative)
- ✅ All required properties included

### Content Matching
- ✅ Schema descriptions match actual page content
- ✅ Feature lists match real product features
- ✅ Prices match actual pricing
- ✅ Service areas match actual service availability

### Maintenance
- ✅ Schema is versioned with page content
- ✅ Update schema when features/pricing change
- ✅ Regular validation (quarterly)

---

## 10. Impact & Monitoring

### Expected Benefits
1. **Search Visibility**
   - Rich results in Google (pricing cards, FAQs)
   - Better SERP placement for long-tail queries
   - Featured snippets for guide content

2. **AI Assistant Accuracy**
   - ChatGPT, Claude, Perplexity can accurately describe ThreadLock
   - Correct feature lists in AI responses
   - Proper categorization as LegalTech

3. **B2A Marketing**
   - AI agents can recommend ThreadLock for appropriate use cases
   - Structured data enables automated service discovery
   - Integration points clear for AI crawlers

### Monitoring
- **Google Search Console:** Track rich result impressions
- **Schema Validator:** Monthly validation checks
- **AI Assistant Testing:** Quarterly queries to ChatGPT/Claude about ThreadLock
- **Search Appearance:** Monitor SERP features (FAQs, pricing)

---

## 11. Updates & Changelog

### 2025-11-23
- Initial schema implementation plan created
- Homepage schemas designed (SoftwareApplication, LegalService, FAQPage)
- State/jurisdiction schema structure defined
- Guide page schema patterns established

### Next Updates
- Add schema implementation dates as pages go live
- Track validation results
- Document any Google Search Console errors
- Note any changes to schema.org specifications

---

**End of Schema Implementation Documentation**
