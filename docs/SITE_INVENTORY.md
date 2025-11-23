# ThreadLock Marketing Site - Complete Inventory

**Generated:** 2025-11-23  
**Purpose:** Exhaustive inventory of all public-facing routes, components, content, and marketing assets.

---

## 1. Public-Facing Routes

### Core Pages
- `/` - Homepage (index.js)
- `/pricing` - Pricing page
- `/login` - Login page
- `/signup` - Signup page
- `/contact` - Contact form
- `/resources` - Resources hub
- `/professionals` - For legal professionals

### Legal & Compliance Pages
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy
- `/cookies` - Cookie Policy
- `/disclaimer` - Disclaimer
- `/security` - Security information
- `/dmca` - DMCA policy
- `/dpa` - Data Processing Agreement
- `/accessibility` - Accessibility statement
- `/legal` - Legal information hub

### Content Pages
- `/guides/digital-evidence-for-family-court` - Guide on digital evidence
- `/founder-story` - Founder story page
- `/sarahs-story` - User story page
- `/investors` - Investor information
- `/whitepaper` - Product whitepaper
- `/whitepaper-b2b` - B2B whitepaper

### Landing Page Variants (A/B Testing)
- `/lp/variant-a-control` - Control variant
- `/lp/variant-b-light-blue` - Light blue variant
- `/lp/variant-c-light-green` - Light green variant
- `/lp/variant-d-copy-organize` - Copy focus on organization
- `/lp/variant-e-copy-timeline` - Copy focus on timeline
- `/lp/variant-f-trust-bar` - Trust bar variant
- `/lp/variant-g-content-rewrite` - Content rewrite variant
- `/lp/variant-h-combined` - Combined features variant

### Utility Pages
- `/thank-you` - Thank you page
- `/success` - Success page (post-signup)
- `/cancel` - Cancellation page
- `/resources/thanks` - Resource download thank you
- `/trial` - Trial page

### API Routes
- `/api/checkout/[slug]` - Stripe checkout
- `/api/checkout/status` - Checkout status
- `/api/env-check` - Environment check
- `/api/signup` - Signup API
- `/api/webhook` - Webhook handler
- `/api/supa-ping` - Supabase ping

---

## 2. Components Rendering Page Content

### Layout Components
- `Header` (in index.js) - Fixed header with navigation
- `Footer.tsx` - Site footer with links
- `AuthShell.js` - Authentication wrapper

### Content Components
- `Hero.js` - Hero section component
- `Features.js` - Features display
- `Pricing.js` - Pricing cards
- `Testimonials.js` - Testimonials section
- `TestimonialsCarousel.js` - Carousel for testimonials
- `Statistics.js` - Statistics display
- `TrustBar.js` - Trust indicators bar
- `CTA.js` - Call-to-action components
- `Blog.js` - Blog post display
- `PostCard.js` - Blog post card
- `BlogSEO.jsx` - Blog SEO wrapper
- `LeadMagnetForm.jsx` - Lead capture form
- `PromoModal.js` - Promotional modal

### Homepage-Specific Sections (in index.js)
- `HeroSection` - Main hero with background image
- `ValuePropositionSection` - Three-column value props
- `SubscriptionBanner` - Pricing display section
- `FeaturesSection` - Three-feature cards
- `ProductShowcaseSection` - Interactive carousel with mockups
- `OurMissionSection` - Mission statement
- `WhoItsForSection` - Target audience
- `FAQSection` - FAQ with two items
- `SignupSection` - Email signup form

### UI Mockups (in index.js)
- `JournalUIMockup` - Visual mockup of journal feature
- `TimelineUIMockup` - Visual mockup of timeline
- `PdfExportUIMockup` - Visual mockup of PDF export

---

## 3. Markdown/MDX Content

**Current Status:** No MDX content files found. All content is currently hardcoded in JSX/TSX components.

**Content Storage:** All page content is inline within component files.

---

## 4. Layouts and Templates

### Global Layout
- `pages/_app.js` - Next.js app wrapper
- `pages/_document.js` - HTML document structure with global meta tags

### Specialized Templates
- `LandingPageHead.js` - SEO head component for landing pages
- `BlogSEO.jsx` - SEO wrapper for blog content

---

## 5. Menus, Footers, and Navigation Items

### Header Navigation (Desktop)
- Features (anchor link to #features)
- Resources (link to /resources)
- For Pros (link to /professionals)
- Pricing (link to /pricing)
- Login (link to /login)
- Sign Up (CTA button, link to /signup)

### Header Navigation (Mobile)
Same as desktop, rendered in collapsible menu.

### Footer (Footer.tsx)
**Company Section:**
- About Us
- Careers
- Contact
- Blog

**Product Section:**
- Features
- Pricing
- Security
- Integrations

**Resources Section:**
- Help Center
- Documentation
- Community
- Updates

**Legal Section:**
- Terms of Service (/terms)
- Privacy Policy (/privacy)
- Cookie Policy (/cookies)
- Disclaimer (/disclaimer)
- DMCA (/dmca)
- DPA (/dpa)
- Accessibility (/accessibility)
- Security (/security)

**Social Links:**
- Twitter/X
- LinkedIn
- GitHub (potential)

**Note:** Footer.tsx exists but specific content needs verification.

---

## 6. Call-to-Action (CTA) Elements

### Primary CTAs
1. **Homepage Hero:**
   - "Get Started" → `/signup`
   - "Login" → `/login`

2. **Subscription Cards:**
   - "Get Started" → `https://app.threadlock.ai/signup` (ThreadLock Core)
   - "Get Started as Pro" → `https://app.threadlock.ai/pro/register` (ThreadLock Pro)
   - "Contact Us" → `/contact` (ThreadLock for Benefits)

3. **Signup Section:**
   - Email capture form with "Join" button

### Secondary CTAs
- Navigation "Sign Up" button (header)
- Various "Learn More" links throughout features
- Professional signup prompts

### CTA Text Patterns (Current)
- "Get Started"
- "Sign Up"
- "Login"
- "Join"
- "Contact Us"
- "Learn More"

**Optimization Note:** Current CTAs are moderately clear but could be more functional/descriptive per requirements.

---

## 7. SEO Tags and Metadata

### Global SEO (_document.js)
**Primary Meta Tags:**
- `<title>` - "ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management"
- `<meta name="description">` - AI-powered family law software description
- `<meta name="robots">` - "index, follow"
- `<meta name="author">` - "ThreadLock"
- `<meta name="theme-color">` - "#f97316" (orange brand color)
- `<link rel="canonical">` - https://threadlock.ai

**Open Graph Tags:**
- `og:type` - website
- `og:site_name` - ThreadLock
- `og:url` - https://threadlock.ai
- `og:title` - Full product title
- `og:description` - Product description
- `og:image` - /og-image.jpg
- `og:locale` - en_US

**Twitter Card Tags:**
- `twitter:card` - summary_large_image
- `twitter:title`
- `twitter:description`
- `twitter:image`

### Per-Page SEO
**Homepage (index.js):**
- Custom `<title>` - "ThreadLock™ | Your case. Organized. Take control."
- Custom `<meta name="description">` - Platform description

**Note:** Most other pages inherit from _document.js defaults. Page-specific overrides need to be audited.

---

## 8. Existing Schema Markup

### Current Implementation (_document.js)

**WebSite Schema (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ThreadLock",
  "url": "https://threadlock.ai"
}
```

**Status:** Minimal schema only. No SoftwareApplication, LegalService, Organization, FAQPage, or other rich schemas implemented yet.

**Gap Analysis:**
- ❌ No SoftwareApplication schema
- ❌ No LegalService schema
- ❌ No Organization schema
- ❌ No FAQPage schema (despite having FAQ section)
- ❌ No Product/Offer schema (despite pricing page)
- ❌ No BreadcrumbList schema
- ❌ No Article schema for guides
- ❌ No HowTo schema for guides

---

## 9. Visual Assets & Images

### Brand Assets
- `TL-logo_dark-plate.png`
- `TL-logo_reversed-white.png`
- `TL-logo_reversed-white_stroke.png`
- `threadlock-logo.png`
- `og-image.jpg` - Open Graph image

### Hero/Background Images
- `simran-sood-qL0t5zNGFVQ-unsplash.jpg` - Homepage hero
- `gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg` - Subscription banner
- `getty-images-1mEcRkmEXBM-unsplash.jpg` - Features section

### Screenshots/Mockups
- `screenshot-1-request-pool.png`
- `screenshot-2-conflict-check.png`
- `screenshot-3-pro-forms-library.png`
- `screenshot-4-annotation-view.png`
- `screenshot-5-integrations-clio.png`

### Stock Photography (50+ Unsplash images)
Large collection of family/legal themed stock photos in `/public/`

**Alt Text Status:** Needs audit. Many images used as background CSS may lack proper accessibility descriptions.

---

## 10. Additional Technical Inventory

### Build Configuration
- **Framework:** Next.js 14.2.3
- **React:** 18.2.0
- **Styling:** Tailwind CSS 3.4.3
- **Deployment:** Vercel (inferred from VERCEL_SETUP.md)

### Third-Party Integrations
- **Stripe:** Payment processing (checkout API)
- **Firebase:** Authentication and database
- **Framer Motion:** Animations (10.16.4)

### Static Files
- `sitemap.xml` - Exists, needs updating
- `robots.txt` - Exists, properly configured
- `favicon.ico` + multiple sizes (16x16 through 512x512)

### Testing
- **E2E:** Cypress configured (layout_consistency.cy.ts test exists)

---

## 11. Content Hierarchy Analysis

### Homepage Content Structure
```
H1: "Your case. Organized. Take control."
  → Primary headline (in hero)

H2 Sections:
  - "Your All-in-One Hub" (Value Prop)
  - "Build Your Timeline" (Value Prop)
  - "You Control Your Story" (Value Prop)
  - "Simple, Transparent Pricing" (Pricing)
  - "How It Works" (Features)
  - "See ThreadLock in Action" (Showcase)
  - "Our Mission: A Fair Shot for Everyone" (Mission)
  - "Who It's For" (Audience)
  - "Our Commitment to You" (FAQ)
  - "Stay Informed" (Signup)

H3 Sections:
  - Feature cards: "Add Evidence", "Find & Fill Forms", "Prepare & Share"
  - Pricing tiers: "ThreadLock Core", "ThreadLock Pro", "ThreadLock for Benefits"
  - Target audiences: "Navigating on your own?", "Save time with professionals"
  - FAQ questions
```

**Hierarchy Issues:**
- ✅ Single H1 per page
- ⚠️ Some sections could benefit from more structured H2→H3→H4 hierarchy
- ⚠️ Showcase carousel titles may need semantic heading tags

---

## 12. Missing Elements (Gaps to Address)

### Content Gaps
- ❌ No /for-ai-assistants page
- ❌ No /docs/threadlock-facts page
- ❌ No /for-llms page
- ❌ No jurisdiction pages (/family-law/*)
- ❌ Limited guide content (only 1 guide exists)
- ❌ No /integrations/* pages
- ❌ No /legal-tech-directory page

### Schema Gaps
- ❌ No structured data for pricing/offers
- ❌ No FAQ schema despite having FAQs
- ❌ No breadcrumb schema
- ❌ No detailed SoftwareApplication schema

### SEO Gaps
- ❌ No per-page canonical tags (global only)
- ❌ Inconsistent page-level meta descriptions
- ❌ No hreflang tags (if multi-region needed)
- ❌ No structured approach to internal linking

### Navigation Gaps
- ❌ No persistent product feature menu
- ❌ No AI/LLM resource links
- ❌ No jurisdiction/location pages linked

---

## 13. Summary Statistics

- **Total Public Pages:** 30+
- **Landing Page Variants:** 8
- **API Routes:** 6
- **Reusable Components:** 20+
- **Legal/Policy Pages:** 9
- **Existing Guides:** 1
- **Schema Implementations:** 1 (basic WebSite only)
- **Images/Assets:** 70+
- **External Links (app):** 2 (app.threadlock.ai)

---

## Recommendations for Next Steps

1. ✅ **COMPLETED:** Full site inventory documented
2. ➡️ **NEXT:** Technical SEO audit (TECH_SEO_AUDIT.md)
3. ➡️ **THEN:** Schema implementation plan (SCHEMA_IMPLEMENTATION.md)
4. ➡️ **THEN:** GEO strategy (GEO_STRATEGY.md)
5. ➡️ **THEN:** LLM content strategy (LLM_TARGET_QUERIES.md)

---

**End of Site Inventory**
