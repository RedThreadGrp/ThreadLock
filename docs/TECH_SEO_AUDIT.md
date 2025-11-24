# ThreadLock Marketing Site - Technical SEO Audit

**Generated:** 2025-11-23  
**Purpose:** Document all technical SEO elements and identify issues (not fixing yet, only documenting).

---

## 1. Title & Meta Setup

### Global Title (_document.js)
```html
<title>ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management</title>
```
- **Status:** ✅ Present
- **Length:** 84 characters (✅ Within optimal 50-60 char range for display, acceptable)
- **Brand:** ✅ Includes trademark symbol
- **Keywords:** ✅ "Family Law", "Custody", "Support", "Evidence Management"

### Global Meta Description (_document.js)
```html
<meta name="description" content="AI-powered family law software designed for custody disputes, child support, and family court evidence management. Make the system make sense." />
```
- **Status:** ✅ Present
- **Length:** 157 characters (✅ Within optimal 150-160 range)
- **Keywords:** ✅ Strong keyword targeting
- **Call-to-action:** ✅ "Make the system make sense"

### Homepage Title Override (index.js)
```html
<title>ThreadLock™ | Your case. Organized. Take control.</title>
```
- **Status:** ✅ Present
- **Length:** 53 characters (✅ Optimal)
- **Tone:** ✅ Direct, user-focused

### Per-Page Title & Description Status
| Page | Custom Title | Custom Description | Status |
|------|-------------|-------------------|--------|
| /pricing | ❌ Inherits | ❌ Inherits | ⚠️ Needs custom |
| /professionals | ❌ Inherits | ❌ Inherits | ⚠️ Needs custom |
| /resources | ❌ Inherits | ❌ Inherits | ⚠️ Needs custom |
| /contact | ❌ Inherits | ❌ Inherits | ⚠️ Needs custom |
| /guides/* | ❌ Inherits | ❌ Inherits | ❌ Critical - needs custom |
| /terms | ❌ Inherits | ❌ Inherits | ⚠️ Needs custom |
| /privacy | ❌ Inherits | ❌ Inherits | ⚠️ Needs custom |
| /security | ❌ Inherits | ❌ Inherits | ⚠️ Needs custom |

**Issue:** Most pages inherit global title/description. Each page should have unique, descriptive metadata.

---

## 2. Canonical Tags

### Current Implementation (_document.js)
```html
<link rel="canonical" href="https://threadlock.ai" />
```

**Status:** ⚠️ **CRITICAL ISSUE**

**Problem:** 
- Global canonical points ALL pages to homepage
- This tells search engines all pages are duplicates of homepage
- Will severely harm SEO for all non-homepage pages

**Impact:**
- /pricing will canonical to / (homepage)
- /professionals will canonical to / (homepage)
- All guides will canonical to / (homepage)
- etc.

**Fix Required:**
- Remove global canonical from _document.js
- Add per-page canonical tags that match the actual URL
- For homepage only: `<link rel="canonical" href="https://threadlock.ai/" />`
- For pricing: `<link rel="canonical" href="https://threadlock.ai/pricing" />`
- etc.

**Priority:** 🔴 **HIGH** - Must fix before launch

---

## 3. Structured Content (Headings)

### Homepage Heading Hierarchy
```
H1 (1): "Your case. Organized. Take control."
  H2: Value proposition cards (implied from text size, not semantic)
  H2: "Simple, Transparent Pricing"
    H3: "ThreadLock Core"
    H3: "ThreadLock Pro"
    H3: "ThreadLock for Benefits"
  H2: "How It Works"
    H3: "Add Evidence"
    H3: "Find & Fill Forms"
    H3: "Prepare & Share"
  H2: "See ThreadLock in Action"
    H3: Carousel slide titles (not actual H3 tags)
  H2: "Our Mission: A Fair Shot for Everyone"
  H2: "Who It's For"
    H3: Section cards
  H2: "Our Commitment to You"
    H3: FAQ questions
  H2: "Stay Informed"
```

**Status:** ⚠️ **MIXED**

**Good:**
- ✅ Single H1 per page
- ✅ Logical H2 structure for main sections
- ✅ Some H3 subdivisions

**Issues:**
- ⚠️ Some section titles are styled as headings but not using semantic heading tags
- ⚠️ Carousel slide titles should be H3 or H4 tags
- ⚠️ Value proposition cards use heading styles without semantic tags
- ⚠️ Product showcase section needs proper heading hierarchy

**Impact:** Moderate - affects accessibility and search engine understanding

---

## 4. Alt Text

### Current Status: **AUDIT REQUIRED**

#### Background Images (CSS-based)
- `simran-sood-qL0t5zNGFVQ-unsplash.jpg` (Hero) - ❌ No alt (CSS background)
- `gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg` (Pricing) - ❌ No alt (CSS background)
- `getty-images-1mEcRkmEXBM-unsplash.jpg` (Features) - ❌ No alt (CSS background)

**Issue:** Background images are decorative but important for context. Consider:
- Adding aria-label to sections
- Including hidden screen-reader text
- Or accepting as decorative (if purely aesthetic)

#### SVG Icons
```jsx
<BrainCircuitIcon />
<ShieldCheckIcon />
<FileTextIcon />
<FolderIcon />
<BookOpenIcon />
<UsersIcon />
```
- **Status:** ⚠️ Most have `aria-hidden="true"` or no ARIA
- **Issue:** Icons conveying meaning should have aria-labels
- **Decorative icons:** Appropriately hidden

#### Logo Images
- Logo in header uses `<BrandWordmark />` component (SVG text)
- **Status:** ✅ Text-based, accessible

#### Product Screenshots
- `screenshot-1-request-pool.png` - ❌ Not currently on public pages
- `screenshot-2-conflict-check.png` - ❌ Not currently on public pages
- Other screenshots - ⚠️ Usage needs verification

**Action Required:**
1. Audit all `<img>` tags for alt text
2. Add descriptive alt text to all content images
3. Ensure decorative images have empty alt (`alt=""`)
4. Add aria-labels to meaningful icons

---

## 5. Open Graph

### Current Implementation (_document.js)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="ThreadLock" />
<meta property="og:url" content="https://threadlock.ai" />
<meta property="og:title" content="ThreadLock™ | Family Law Technology..." />
<meta property="og:description" content="AI-powered family law software..." />
<meta property="og:image" content="https://threadlock.ai/og-image.jpg?v=2025-08-21a" />
<meta property="og:image:secure_url" content="..." />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="627" />
<meta property="og:locale" content="en_US" />
```

**Status:** ✅ **EXCELLENT**

**Good:**
- ✅ All required OG tags present
- ✅ Image dimensions specified
- ✅ Secure URL provided
- ✅ Proper image dimensions (1200x627 is optimal for social)
- ✅ Version query string on image (cache busting)

**Issue:**
- ⚠️ Global OG tags mean all pages share same title/description/image
- Should be customized per page for better social sharing

**Priority:** 🟡 Medium - works but could be better

---

## 6. Twitter/X Cards

### Current Implementation (_document.js)

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="ThreadLock™ | Family Law Technology..." />
<meta name="twitter:description" content="AI-powered family law software..." />
<meta name="twitter:image" content="https://threadlock.ai/og-image.jpg?v=2025-08-21a" />
```

**Status:** ✅ **GOOD**

**Good:**
- ✅ Uses summary_large_image (best for content sites)
- ✅ Title, description, image all present
- ✅ Shares same image as OG (consistent)

**Missing (optional):**
- ⚠️ No `twitter:site` handle (e.g., @ThreadLockAI)
- ⚠️ No `twitter:creator` handle

**Issue:**
- ⚠️ Same as OG - global tags, should be per-page

---

## 7. Sitemap.xml

### Current Implementation (/public/sitemap.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://threadlock.ai/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url><loc>https://threadlock.ai/terms</loc>...</url>
  <url><loc>https://threadlock.ai/privacy</loc>...</url>
  <url><loc>https://threadlock.ai/cookies</loc>...</url>
  <url><loc>https://threadlock.ai/disclaimer</loc>...</url>
  <url><loc>https://threadlock.ai/security</loc>...</url>
  <url><loc>https://threadlock.ai/dmca</loc>...</url>
  <url><loc>https://threadlock.ai/accessibility</loc>...</url>
  <url><loc>https://threadlock.ai/contact</loc>...</url>
  <url><loc>https://threadlock.ai/dpa</loc>...</url>
</urlset>
```

**Status:** ⚠️ **INCOMPLETE**

**Present:** 10 URLs (mostly legal pages)

**Missing Major Pages:**
- ❌ /pricing
- ❌ /professionals
- ❌ /resources
- ❌ /guides/digital-evidence-for-family-court
- ❌ /founder-story
- ❌ /sarahs-story
- ❌ /investors
- ❌ /whitepaper
- ❌ /whitepaper-b2b

**Missing (to be created):**
- ❌ All /family-law/* pages
- ❌ All new /guides/* pages
- ❌ /for-ai-assistants
- ❌ /for-llms
- ❌ /docs/threadlock-facts
- ❌ /integrations/clio
- ❌ /legal-tech-directory

**Priority:** 🔴 **HIGH** - Needs immediate expansion

**Best Practices:**
- ✅ Has `<changefreq>` and `<priority>`
- ⚠️ Should add `<lastmod>` dates
- ⚠️ Priority values need review (legal pages shouldn't be 0.5-0.6)

---

## 8. Robots.txt

### Current Implementation (/public/robots.txt)

```
User-agent: *
Allow: /
Sitemap: https://threadlock.ai/sitemap.xml
```

**Status:** ✅ **GOOD**

**Good:**
- ✅ Allows all crawlers
- ✅ Allows all paths
- ✅ References sitemap

**Potential Additions:**
- Could add `Disallow: /api/` (API routes shouldn't be indexed)
- Could add `Disallow: /lp/variant-*` (A/B test variants - consider if should be indexed)
- Could add `Disallow: /testingpic` (test page)

**Priority:** 🟢 Low - works fine, minor optimizations possible

---

## 9. Core Web Vitals

### Testing Method Required
- Need to run Lighthouse audit
- Need to test on actual deployment
- Need to check PageSpeed Insights

### Anticipated Issues Based on Code Review

#### Largest Contentful Paint (LCP)
**Potential Issues:**
- ⚠️ Hero background images are large (simran-sood image)
- ⚠️ Multiple high-res Unsplash images (50+ in public/)
- ⚠️ Background images loaded via CSS (not optimized by Next.js Image)

**Concerns:**
- Hero image: `simran-sood-qL0t5zNGFVQ-unsplash.jpg` - size unknown
- Not using Next.js `<Image>` component (no automatic optimization)
- `bg-fixed` (background-attachment: fixed) can hurt performance

**Recommendation:**
- Convert to Next.js Image component where possible
- Implement responsive images
- Lazy load below-fold images
- Compress all images

#### First Input Delay (FID) / Interaction to Next Paint (INP)
**Potential Issues:**
- ⚠️ Framer Motion animations (10.16.4) - library size
- ⚠️ Firebase SDK loaded on page load
- ✅ Next.js should handle code splitting well

**Concerns:**
- Main bundle size unknown
- Third-party scripts (Firebase, Stripe) impact

**Recommendation:**
- Lazy load Firebase (only when needed)
- Code split by route
- Defer non-critical JavaScript

#### Cumulative Layout Shift (CLS)
**Potential Issues:**
- ⚠️ Images without width/height attributes
- ⚠️ PromoModal.js - modal injection could cause shift
- ⚠️ Carousel animations in ProductShowcaseSection

**Concerns:**
- Background images changing on scroll (parallax effect)
- Dynamic content loading (SignupSection Firebase)

**Recommendation:**
- Add explicit dimensions to all images
- Reserve space for dynamic content
- Preload critical fonts

#### Time to First Byte (TTFB)
**Status:** ✅ Likely good (Next.js + Vercel)
- Static generation should be fast
- Vercel edge network

---

## 10. Mobile Responsiveness

### Current Implementation

**Tailwind Breakpoints Used:**
- `md:` - Medium screens (768px+)
- `sm:` - Small screens (640px+)

**Analysis of Homepage:**

#### Header
```jsx
<nav className="hidden md:flex ...">  // Desktop nav
<button className="md:hidden ...">    // Mobile menu button
<div className="md:hidden ...">       // Mobile menu
```
- ✅ Responsive header with mobile menu
- ✅ Proper breakpoints

#### Hero Section
```jsx
<h1 className="text-4xl md:text-6xl ...">
<p className="mt-8 text-xl md:text-2xl ...">
<div className="flex flex-col sm:flex-row gap-4">  // Stacked on mobile
```
- ✅ Responsive text sizing
- ✅ Stacked buttons on mobile

#### Value Propositions
```jsx
<div className="grid md:grid-cols-3 gap-8">
```
- ✅ Single column on mobile, 3 columns on desktop

#### Features Section
```jsx
<div className="grid md:grid-cols-3 gap-8">
```
- ✅ Responsive grid

#### Pricing Cards
```jsx
<div className="grid md:grid-cols-3 gap-8">
```
- ✅ Responsive pricing

#### Product Showcase
```jsx
<div className="flex flex-col md:flex-row ...">
```
- ✅ Stacks on mobile

**Potential Issues:**
- ⚠️ UI Mockups (JournalUIMockup, TimelineUIMockup) use small text
  - `text-[11px] md:text-xs` - Very small on mobile
  - `text-[9px]` in PDF mockup - May be illegible
- ⚠️ `scale-90 md:scale-95` on mockups - Could be hard to read on mobile
- ⚠️ Fixed background images may not work well on iOS

**Testing Required:**
- Real device testing (iOS Safari, Android Chrome)
- Test with slow 3G connection
- Test touch targets (minimum 44x44px)
- Test mobile menu interaction

**Status:** ✅ **GOOD** foundation, ⚠️ needs testing & minor adjustments

---

## 11. Content Hierarchy (H1→H2→H3)

### Homepage Analysis

```
✅ H1: "Your case. Organized. Take control."
  ❌ Missing H2 for value prop section (uses H3 directly)
    H3: "Your All-in-One Hub"
    H3: "Build Your Timeline"
    H3: "You Control Your Story"
  
  ✅ H2: "Simple, Transparent Pricing"
    H3: "ThreadLock Core"
    H3: "ThreadLock Pro"
    H3: "ThreadLock for Benefits"
  
  ✅ H2: "How It Works"
    H3: "Add Evidence"
    H3: "Find & Fill Forms"
    H3: "Prepare & Share"
  
  ✅ H2: "See ThreadLock in Action"
    ❌ Missing H3 for carousel slides (text sized like H3 but not semantic)
  
  ✅ H2: "Our Mission: A Fair Shot for Everyone"
    (No subdivisions - appropriate)
  
  ✅ H2: "Who It's For"
    H3: "Navigating on your own?"
    H3: "Save time with professionals"
  
  ✅ H2: "Our Commitment to You"
    H3: "Is ThreadLock a law firm?"
    H3: "Will ThreadLock guarantee I win?"
  
  ✅ H2: "Stay Informed"
    (No subdivisions - appropriate)
```

**Issues Found:**
1. ⚠️ Value Proposition Section (lines 223-257 in index.js)
   - Uses H3 without parent H2
   - Should add H2 "Why Choose ThreadLock" or similar

2. ⚠️ Product Showcase carousel slides
   - Titles are text-only, not semantic headings
   - Should be H3 tags

3. ⚠️ Feature cards (lines 424-433)
   - Use H3 but are direct children of section with H2
   - Structure is okay, but could be clearer

4. ✅ FAQ section properly uses H3 for questions

**Severity:** 🟡 Medium - affects SEO and accessibility

---

## 12. Page Speed Issues

### Identified from Code Review

#### Large Dependencies
```json
"dependencies": {
  "firebase": "^12.4.0",        // ~230KB gzipped
  "@stripe/stripe-js": "2.3.0", // ~15KB gzipped
  "framer-motion": "10.16.4",   // ~35KB gzipped
  "recharts": "2.15.4",         // ~100KB gzipped (unused on marketing?)
}
```

**Issues:**
- ❌ Firebase loaded globally (index.js lines 605-621)
- ❌ Recharts may not be used on marketing site (verify)
- ⚠️ Stripe loaded for checkout but needed on all pages?

#### Image Optimization
**Issues:**
- ❌ 50+ uncompressed images in /public/
- ❌ Images not using Next.js Image component
- ❌ No lazy loading on below-fold images
- ❌ No responsive images (srcset)
- ❌ Background images not optimized

**File Sizes Need Check:**
```
simran-sood-qL0t5zNGFVQ-unsplash.jpg    - Hero background
gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg - Pricing background
getty-images-1mEcRkmEXBM-unsplash.jpg   - Features background
og-image.jpg                             - Social sharing
```

#### Render-Blocking Resources
**Issues:**
- ⚠️ Inline styles (Tailwind - expected)
- ⚠️ Custom fonts (if any) - need to check _document.js
- ✅ Next.js should handle JS splitting

#### Third-Party Scripts
**Current:**
- Firebase (Auth, Firestore)
- Stripe.js

**Missing (Good):**
- No Google Analytics script visible
- No Tag Manager
- No chat widgets
- No marketing pixels (yet)

**Recommendation:**
- Defer Firebase until needed
- Use Next.js Script component with strategy="lazyOnload"
- Implement consent management before adding tracking

---

## 13. Image Compression Issues

### Audit Required

**Need to check sizes for:**
- All Unsplash images (50+)
- Screenshot images (5)
- Logo files (3)
- OG image

**Recommended Tools:**
- ImageOptim / TinyPNG
- Next.js Image Optimization API
- WebP format conversion

**Expected Savings:**
- 40-60% size reduction possible
- Convert JPEG → WebP
- Generate responsive sizes

**Priority:** 🔴 HIGH - Impacts LCP and overall performance

---

## 14. Security Headers

### Current Implementation (next.config.mjs)

```javascript
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; ..."
  },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' }
];
```

**Status:** ✅ **EXCELLENT**

**Good:**
- ✅ X-Frame-Options prevents clickjacking
- ✅ X-Content-Type-Options prevents MIME sniffing
- ✅ Referrer-Policy configured
- ✅ HSTS with preload
- ✅ CSP implemented (though permissive)

**Notes:**
- CSP allows 'unsafe-inline' and 'unsafe-eval' (needed for React/Next.js)
- Could tighten CSP in production with nonces
- HSTS preload means site is HTTPS-only

**Priority:** ✅ Already good

---

## 15. Additional Technical Findings

### Accessibility
- ⚠️ Need full WAVE/axe audit
- ⚠️ Color contrast needs verification
- ⚠️ Keyboard navigation needs testing
- ✅ Semantic HTML mostly used
- ⚠️ ARIA labels need audit
- ✅ Skip links: Not present (add for accessibility)

### Internationalization
- ✅ `lang="en"` set on HTML
- ✅ `og:locale="en_US"` set
- ❌ No hreflang tags (not needed yet for single market)

### Analytics & Tracking
- ❌ No visible analytics implementation
- ❌ No event tracking
- ❌ No conversion tracking
- **Recommendation:** Add privacy-friendly analytics

### Performance Monitoring
- ❌ No visible APM (Application Performance Monitoring)
- ❌ No error tracking (Sentry, etc.)
- **Recommendation:** Add for production

### Fonts
- ⚠️ Need to check font loading strategy
- ⚠️ System fonts vs custom fonts
- Current: Appears to use system fonts (fast)

---

## 16. Critical Issues Summary

### 🔴 HIGH Priority (Must Fix Before Launch)
1. **Canonical Tags** - Global canonical breaks all non-homepage pages
2. **Sitemap Completeness** - Missing 20+ important pages
3. **Image Optimization** - Large uncompressed images hurt LCP
4. **Per-Page Meta Tags** - Most pages inherit generic metadata

### 🟡 MEDIUM Priority (Should Fix Soon)
1. **Heading Hierarchy** - Missing H2 in value prop section, carousel needs semantic headings
2. **Alt Text Audit** - Icons and decorative images need review
3. **Per-Page OG Tags** - Better social sharing with custom images per page
4. **Mobile Testing** - Small text in mockups may be illegible

### 🟢 LOW Priority (Nice to Have)
1. **Robots.txt** - Add /api/ disallow
2. **Twitter Handle** - Add @ThreadLock handle to Twitter cards
3. **Font Loading** - Optimize if custom fonts used
4. **Skip Links** - Add for accessibility
5. **Analytics** - Implement tracking

---

## 17. Testing Checklist

### Before Launch
- [ ] Run Lighthouse audit on all major pages
- [ ] Test on PageSpeed Insights
- [ ] Validate all schema with Google Rich Results Test
- [ ] Test mobile on real iOS device
- [ ] Test mobile on real Android device
- [ ] Test with slow 3G connection
- [ ] Run WAVE accessibility audit
- [ ] Verify all internal links work
- [ ] Verify all external links work
- [ ] Test form submissions
- [ ] Test social share previews (LinkedIn, Twitter, Facebook)
- [ ] Verify sitemap is accessible
- [ ] Verify robots.txt is accessible
- [ ] Check Google Search Console for errors
- [ ] Check Bing Webmaster Tools

---

## Next Steps

1. ✅ **COMPLETED:** Technical SEO audit documented
2. ➡️ **NEXT:** Begin schema implementation (SCHEMA_IMPLEMENTATION.md)
3. ➡️ **NEXT:** Fix critical canonical tag issue
4. ➡️ **NEXT:** Add per-page meta tags to key pages
5. ➡️ **NEXT:** Expand sitemap.xml
6. ➡️ **NEXT:** Optimize images

---

**End of Technical SEO Audit**
