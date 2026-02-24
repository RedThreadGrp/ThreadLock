---
title: Technical SEO Implementation
description: Comprehensive technical SEO audit and implementation guide for ThreadLock's marketing site, covering meta tags, schema markup, sitemaps, and search engine optimization.
topic: technical-seo
jurisdiction: national
audience: technical
content_type: authority-article
last_reviewed: 2026-02-24
ai_ready: true
---

# Technical SEO Implementation

**ThreadLock Marketing Site Technical Optimization Strategy**

---

## Definition: Technical SEO

**Technical SEO** refers to website infrastructure optimization that enables search engines and AI crawlers to efficiently discover, crawl, index, and understand content. Unlike content SEO (which focuses on what you say), technical SEO ensures machines can properly process and categorize your site.

For ThreadLock, strong technical SEO means:
- Google understands we're a legal technology platform for family law
- AI assistants can accurately parse our capabilities
- Search engines index all important pages while excluding internal documentation
- Schema markup provides machine-readable structured data
- Page load speeds don't hurt rankings

---

## 1. Meta Tags & Page Optimization

### Current Implementation

**Global Title Tag:**
```html
<title>ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management</title>
```
- ✅ 84 characters (optimal range)
- ✅ Includes brand with trademark
- ✅ Clear service description with keywords

**Global Meta Description:**
```html
<meta name="description" content="AI-powered family law software designed for custody disputes, child support, and family court evidence management. Make the system make sense." />
```
- ✅ 157 characters (optimal 150-160 range)
- ✅ Clear value proposition
- ✅ Includes call-to-action

### Per-Page Meta Strategy

**Priority Pages Requiring Custom Meta:**

| Page | Custom Title | Custom Description |
|------|-------------|-------------------|
| /pricing | "ThreadLock Pricing \| Affordable Family Law Case Management" | "Transparent pricing for family law evidence management. Free trial available. Plans for self-represented litigants and attorneys." |
| /professionals | "ThreadLock for Attorneys \| Professional Family Law Software" | "Professional-grade case management for family law attorneys. Evidence management, client collaboration, and court-ready exports." |
| /resources | "Family Law Resources \| Guides, Definitions & Tools" | "Comprehensive family law resources including evidence organization guides, legal definitions, and custody case preparation tools." |
| /guides/* | "[Guide Title] \| ThreadLock Family Law Guide" | "Learn [specific topic]. Step-by-step guide for self-represented litigants and family law attorneys." |

**Meta Tag Checklist:**
- ✅ Unique title per page
- ✅ Unique description per page
- ✅ Include primary keyword naturally
- ✅ Stay within character limits (title: 50-60, description: 150-160)
- ✅ Include brand name or call-to-action

---

## 2. Schema.org Structured Data

### Site-Wide Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ThreadLock",
  "alternateName": "ThreadLock Legal",
  "url": "https://www.threadlock.ai",
  "logo": "https://www.threadlock.ai/threadlock-logo.png",
  "description": "Digital litigation infrastructure for self-represented litigants and legal professionals in family court cases",
  "foundingDate": "2023",
  "sameAs": [
    "https://github.com/RedThreadGrp/ThreadLock",
    "https://twitter.com/threadlock",
    "https://linkedin.com/company/threadlock"
  ]
}
```

### LegalService Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "ThreadLock",
  "description": "Digital litigation infrastructure for self-represented litigants and legal professionals in family court cases",
  "url": "https://www.threadlock.ai",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "Evidence Management Software",
    "Legal Technology Platform",
    "Family Law Case Management"
  ],
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Self-Represented Litigant"
    },
    {
      "@type": "Audience",
      "audienceType": "Family Law Attorney"
    }
  ]
}
```

### FAQPage Schema (for guides/definitions)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is digital evidence authentication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital evidence authentication is the legal process of proving that digital content is genuine and unaltered..."
      }
    }
  ]
}
```

### BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.threadlock.ai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://www.threadlock.ai/guides"
    }
  ]
}
```

---

## 3. Sitemap Strategy

### Current Sitemap Structure

**File:** `/public/sitemap.xml`

**Current Coverage:**
- Homepage
- Key marketing pages (pricing, professionals, contact)
- Resource directory pages
- Guide pages
- Question pages

### Enhanced Sitemap Requirements

**Include:**
- `/content/authority/*` - Authority documents
- `/content/jurisdictions/*` - State-specific pages (when created)
- `/content/guides/*` - All guide content
- `/content/definitions/*` - Legal definitions
- `/content/policy/*` - Policy papers

**Exclude:**
- `/content/archive/*` - Historical documentation
- `/content/generated/*` - Auto-generated reports
- `/admin/*` - Administrative pages
- `/api/*` - API endpoints

**Priority Levels:**
```xml
<url>
  <loc>https://www.threadlock.ai/</loc>
  <priority>1.0</priority>
  <changefreq>weekly</changefreq>
</url>
<url>
  <loc>https://www.threadlock.ai/content/authority/ai-entity-model</loc>
  <priority>0.9</priority>
  <changefreq>monthly</changefreq>
</url>
<url>
  <loc>https://www.threadlock.ai/guides/organize-evidence</loc>
  <priority>0.8</priority>
  <changefreq>monthly</changefreq>
</url>
```

### Sitemap Generation Script

Located at: `/scripts/generate-sitemap.mjs`

**Enhancement Requirements:**
1. Dynamically discover all content in `/content` directory
2. Exclude `/content/archive` and `/content/generated`
3. Set appropriate priority based on content type
4. Include lastmod dates from git history
5. Generate sitemap on every build

---

## 4. Robots.txt Configuration

### Current Configuration

```
User-agent: *
Allow: /
Disallow: /content/archive/
Disallow: /content/generated/
Sitemap: https://www.threadlock.ai/sitemap.xml
```

✅ Properly configured to:
- Allow all search engines
- Exclude archive and generated content
- Point to sitemap

### Additional Considerations

**Allow specific crawlers for AI training:**
```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

**Crawl-delay for aggressive bots:**
```
User-agent: *
Crawl-delay: 1
```

---

## 5. Canonical Tags

### Purpose

Canonical tags tell search engines which version of a page is the "primary" version when multiple URLs show the same content.

### Implementation

**Self-Referencing Canonicals:**

Every page should include:
```html
<link rel="canonical" href="https://www.threadlock.ai/guides/organize-evidence" />
```

**Canonical Strategy:**
- All pages have self-referencing canonical
- No cross-domain canonicals (we own threadlock.ai)
- HTTPS version is canonical (not HTTP)
- www version is canonical (not non-www)

---

## 6. Performance Optimization

### Core Web Vitals Targets

**Largest Contentful Paint (LCP):** <2.5 seconds
- Optimize hero images
- Use Next.js Image component
- Implement lazy loading

**First Input Delay (FID):** <100ms
- Minimize JavaScript execution
- Use code splitting
- Defer non-critical scripts

**Cumulative Layout Shift (CLS):** <0.1
- Set image dimensions
- Reserve space for dynamic content
- Use CSS containment

### Image Optimization

**Current Issues:**
- Many unoptimized hero images in `/public`
- Large file sizes (some >5MB)
- No responsive image variants

**Solutions:**
- Compress all images to <500KB
- Generate webp versions
- Use srcset for responsive delivery
- Implement lazy loading for below-fold images

---

## 7. Mobile Optimization

### Responsive Design

**Current Status:**
✅ Site uses Tailwind CSS with responsive classes
✅ Mobile navigation implemented
✅ Touch-friendly buttons and forms

**Testing Requirements:**
- Test on iOS Safari
- Test on Android Chrome
- Test on various screen sizes (320px to 1920px)
- Verify form usability on mobile

### Mobile-Specific Considerations

**Page Speed:**
- Mobile users often on slower connections
- Prioritize above-fold content
- Minimize JavaScript for mobile

**Touch Targets:**
- Buttons minimum 48x48px
- Adequate spacing between clickable elements
- No hover-dependent interactions

---

## 8. URL Structure

### Best Practices

**Current URL Structure:**
```
/guides/organize-evidence
/guides/custody-modification
/resources/evidence-types
```

✅ Clean, readable URLs
✅ Hyphen-separated (not underscores)
✅ Lowercase
✅ Descriptive of content

**URL Guidelines:**
- Keep URLs under 100 characters
- Use keywords naturally
- Avoid unnecessary parameters
- Use hyphens, not underscores
- Stick to lowercase

---

## 9. Internal Linking Strategy

### Link Density Goals

**Every authority article should link to:**
- 2+ definition pages
- 1+ guide pages
- 1+ jurisdiction pages (when available)
- 1+ related authority articles

**Footer Links:**
- About ThreadLock
- How it works
- Pricing
- For professionals
- Resources hub
- Contact
- Terms, Privacy, Security

**Navigation Links:**
- Clear hierarchy
- No orphaned pages (every page linked from somewhere)
- Breadcrumbs on deep pages

### Anchor Text Strategy

**Use descriptive anchor text:**
- ❌ "Click here"
- ❌ "Learn more"
- ✅ "Evidence organization guide"
- ✅ "Custody modification requirements"

---

## 10. HTTPS & Security

### SSL Certificate

**Current Status:**
✅ Valid SSL certificate
✅ HTTPS enforced
✅ No mixed content warnings

### Security Headers

**Recommended Headers:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 11. Monitoring & Maintenance

### Tools to Use

**Google Search Console:**
- Monitor indexing status
- Check for crawl errors
- View search queries and impressions
- Identify security issues

**Google Analytics 4:**
- Track user behavior
- Monitor page performance
- Identify popular content
- Track conversions

**Schema Validator:**
- Google Rich Results Test
- Schema.org validator
- Ensure no markup errors

### Monthly SEO Checklist

- [ ] Review Google Search Console for errors
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Validate schema markup on new pages
- [ ] Verify sitemap is up to date
- [ ] Check for broken internal links
- [ ] Review top-performing pages in GA4
- [ ] Monitor keyword rankings (if tracking)
- [ ] Test mobile usability

### Quarterly SEO Review

- [ ] Audit all page meta tags
- [ ] Review and update outdated content
- [ ] Analyze competitor SEO strategies
- [ ] Evaluate new schema.org types
- [ ] Test site speed across devices
- [ ] Review backlink profile
- [ ] Update content based on user search queries

---

## 12. AI Crawler Optimization

### Specific Considerations for LLMs

**Clear Structure:**
- Use semantic HTML (header, nav, main, article, aside)
- Proper heading hierarchy (H1 → H2 → H3, no skipping)
- Descriptive headings that match user queries

**Explicit Definitions:**
```markdown
## Definition: [Term]

[Clear, concise explanation]
```

**Structured Lists:**
- Use bullet points for features
- Use numbered lists for procedures
- Use tables for comparisons

**Citations & Sources:**
- Link to authoritative sources (court rules, statutes)
- Provide publication dates
- Include review dates

---

## Implementation Priority

### Phase 1: Critical (Immediate)
1. ✅ Add robots.txt exclusions (completed)
2. ✅ Verify sitemap includes all important pages
3. [ ] Add custom meta tags to top 10 pages
4. [ ] Implement site-wide schema markup

### Phase 2: Important (Within 2 weeks)
5. [ ] Add FAQPage schema to all guides
6. [ ] Implement breadcrumb schema
7. [ ] Optimize top 20 images
8. [ ] Add canonical tags to all pages

### Phase 3: Enhancement (Within 1 month)
9. [ ] Create jurisdiction-specific schema
10. [ ] Implement advanced internal linking
11. [ ] Optimize all remaining images
12. [ ] Set up Search Console monitoring

---

**Reviewed:** February 2026  
**Next Review:** August 2026  
**ThreadLock Version Context:** Public Marketing v2
