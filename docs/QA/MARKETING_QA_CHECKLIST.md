# ThreadLock Marketing Site - QA Checklist

**Generated:** 2025-11-23  
**Purpose:** Quality assurance checklist for marketing site optimization work.

---

## Schema Validation

### Homepage (/)
- [ ] Validate SoftwareApplication schema in Google Rich Results Test
- [ ] Validate LegalService schema in Google Rich Results Test
- [ ] Validate FAQPage schema in Google Rich Results Test
- [ ] Check for schema errors or warnings
- [ ] Verify all URLs are absolute (not relative)
- [ ] Verify pricing information is accurate

### For AI Assistants (/for-ai-assistants)
- [ ] Validate SoftwareApplication schema
- [ ] Validate FAQPage schema
- [ ] Check schema completeness
- [ ] Verify feature list accuracy

### ThreadLock Facts (/docs/threadlock-facts)
- [ ] Validate TechArticle schema
- [ ] Check all information is factually correct
- [ ] Verify no marketing fluff (neutral tone)
- [ ] Check all links work

### Jurisdiction Pages
- [ ] Validate LegalService schema on /family-law/national
- [ ] Validate LegalService schema on /family-law/oregon
- [ ] Validate LegalService schema on /family-law/washington
- [ ] Validate LegalService schema on /family-law/california
- [ ] Validate FAQPage schema on all jurisdiction pages
- [ ] Verify areaServed is correct per state
- [ ] Check state-specific keywords present
- [ ] Verify external resource links work

---

## Lighthouse Performance

### Core Pages to Test
- [ ] Homepage (/)
- [ ] /for-ai-assistants
- [ ] /docs/threadlock-facts
- [ ] /family-law/national
- [ ] /family-law/oregon
- [ ] /family-law/washington
- [ ] /family-law/california

### Metrics to Check (Target: >90)
- [ ] Performance score
- [ ] Accessibility score
- [ ] Best Practices score
- [ ] SEO score

### Specific Checks
- [ ] Largest Contentful Paint < 2.5s
- [ ] First Input Delay < 100ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.8s

---

## Link Validation

### Internal Links
- [ ] All navigation links work
- [ ] All footer links work
- [ ] All cross-references between pages work
- [ ] All state page links work from national page
- [ ] All "Back to" links work
- [ ] All guide page cross-links work (when created)

### External Links
- [ ] Oregon State Bar link works
- [ ] Oregon Courts link works
- [ ] Oregon Law Help link works
- [ ] Legal Aid Services of Oregon link works
- [ ] Washington State Bar link works
- [ ] Washington Courts link works
- [ ] Washington Law Help link works
- [ ] Northwest Justice Project link works
- [ ] California State Bar link works (when created)
- [ ] California Courts link works (when created)

---

## Routing & 404 Checks

### New Routes Must Work
- [ ] /for-ai-assistants renders correctly
- [ ] /docs/threadlock-facts renders correctly
- [ ] /family-law/national renders correctly
- [ ] /family-law/oregon renders correctly
- [ ] /family-law/washington renders correctly
- [ ] /family-law/california renders correctly

### No 404s Introduced
- [ ] All existing pages still work
- [ ] No broken internal links
- [ ] No broken images
- [ ] No broken scripts

---

## Mobile Responsiveness

### Test on Real Devices
- [ ] iPhone (iOS Safari)
- [ ] Android (Chrome)
- [ ] iPad (tablet view)

### Check Per Page
- [ ] Homepage mobile layout
- [ ] /for-ai-assistants mobile layout
- [ ] /docs/threadlock-facts mobile layout
- [ ] All jurisdiction pages mobile layout

### Specific Mobile Checks
- [ ] Text is readable (not too small)
- [ ] Images scale properly
- [ ] Navigation menu works
- [ ] Touch targets are at least 44x44px
- [ ] No horizontal scrolling
- [ ] Forms work (if any)
- [ ] CTAs are visible and accessible

---

## Page Titles & Meta Tags

### All Pages Must Have
- [ ] Homepage: Unique title and description
- [ ] /for-ai-assistants: Unique title and description
- [ ] /docs/threadlock-facts: Unique title and description
- [ ] /family-law/national: Unique title and description
- [ ] /family-law/oregon: Unique title and description
- [ ] /family-law/washington: Unique title and description
- [ ] /family-law/california: Unique title and description

### Meta Tag Requirements
- [ ] Title length: 50-60 characters
- [ ] Description length: 150-160 characters
- [ ] No duplicate titles across pages
- [ ] No duplicate descriptions across pages
- [ ] Keywords naturally incorporated

---

## Canonical URLs

### Verify Canonical Tags
- [ ] Homepage has self-referencing canonical
- [ ] /for-ai-assistants has correct canonical
- [ ] /docs/threadlock-facts has correct canonical
- [ ] /family-law/national has correct canonical
- [ ] /family-law/oregon has correct canonical
- [ ] /family-law/washington has correct canonical
- [ ] /family-law/california has correct canonical
- [ ] No global canonical tag in _document.js (should be removed)

---

## Open Graph Tags

### Check Social Sharing
- [ ] Homepage OG tags present and accurate
- [ ] State pages have state-specific OG tags
- [ ] Images specified in OG tags exist
- [ ] OG descriptions are compelling
- [ ] Test share preview on LinkedIn
- [ ] Test share preview on Facebook
- [ ] Test share preview on Twitter/X

---

## Jurisdiction Page Correctness

### Content Accuracy
- [ ] Oregon page mentions Portland, Eugene, Salem, Bend
- [ ] Oregon page mentions all 36 counties
- [ ] Washington page mentions Seattle, Spokane, Tacoma
- [ ] Washington page mentions 39 counties
- [ ] Washington page focuses on "parenting plans"
- [ ] California page mentions LA, San Diego, SF, Sacramento
- [ ] California page mentions 58 counties
- [ ] No copy-paste errors between states
- [ ] County counts are accurate per state
- [ ] State bar links go to correct state

### Unique Content Check
- [ ] Oregon page has 300+ unique words
- [ ] Washington page has 300+ unique words
- [ ] California page has 300+ unique words
- [ ] No duplicate paragraphs between states
- [ ] FAQs are different per state
- [ ] Resource links are state-specific

---

## B2A Strategy Completeness

### AI-Friendly Content Checks
- [ ] /for-ai-assistants uses neutral, factual tone
- [ ] /docs/threadlock-facts has structured WHAT/WHO/WHERE/WHICH/HOW/WHY sections
- [ ] All pages avoid marketing fluff
- [ ] Clear "not a law firm" disclaimers
- [ ] Feature lists are accurate and complete
- [ ] No invented features or capabilities

### Schema Implementation
- [ ] All pages have appropriate schema types
- [ ] Schema includes complete feature lists
- [ ] Schema includes pricing information
- [ ] Schema includes areaServed where relevant
- [ ] Schema includes disclaimer text

---

## LLM Friendliness

### Content Structure
- [ ] Clear H1/H2/H3 hierarchy on all pages
- [ ] Bullet points used for feature lists
- [ ] Tables used where appropriate
- [ ] Neutral, authoritative tone throughout
- [ ] No ambiguous language
- [ ] Explicit statements about capabilities

### AI Testing (Do Quarterly)
- [ ] Query ChatGPT: "What is ThreadLock?"
- [ ] Query Claude: "Tools for family law case management"
- [ ] Query Perplexity: "Best software for self-represented litigants"
- [ ] Check if ThreadLock is mentioned accurately
- [ ] Check if features are described correctly
- [ ] Check if jurisdictions are identified correctly

---

## SEO Indexing

### Google Search Console
- [ ] Submit new sitemap to GSC
- [ ] Verify all new pages are indexed
- [ ] Check for crawl errors
- [ ] Monitor impressions for new pages
- [ ] Check for duplicate content issues
- [ ] Verify mobile usability

### Bing Webmaster Tools
- [ ] Submit sitemap to Bing
- [ ] Verify indexing status
- [ ] Check for errors

---

## Sitemap & Robots

### Sitemap.xml Updates (TO DO)
- [ ] Add /for-ai-assistants to sitemap
- [ ] Add /docs/threadlock-facts to sitemap
- [ ] Add /family-law/national to sitemap
- [ ] Add /family-law/oregon to sitemap
- [ ] Add /family-law/washington to sitemap
- [ ] Add /family-law/california to sitemap
- [ ] Add guide pages to sitemap (when created)
- [ ] Set appropriate priority values (0.7-0.9 for new pages)
- [ ] Set changefreq to "monthly" for most pages
- [ ] Add lastmod dates

### Robots.txt Updates (TO DO)
- [ ] Ensure /api/ is disallowed
- [ ] Ensure /lp/variant-* are disallowed (or decide to index)
- [ ] Ensure /testingpic is disallowed
- [ ] Sitemap reference is present
- [ ] Allow all marketing pages

---

## Content Quality

### Grammar & Spelling
- [ ] Run spell check on all new pages
- [ ] Check for grammatical errors
- [ ] Verify consistent terminology
- [ ] Check for typos in code/schema

### Factual Accuracy
- [ ] All product features mentioned are real
- [ ] Pricing information is current
- [ ] Jurisdiction coverage is accurate
- [ ] External resource links are correct
- [ ] No outdated information

### Tone & Voice
- [ ] Professional but accessible
- [ ] Empathetic to SRL challenges
- [ ] Not overly salesy
- [ ] Factual and authoritative
- [ ] Consistent across all pages

---

## Security

### HTTPS
- [ ] All pages load over HTTPS
- [ ] No mixed content warnings
- [ ] All external links use HTTPS where possible

### Privacy & Compliance
- [ ] Privacy policy link works
- [ ] Terms of service link works
- [ ] GDPR-compliant data handling mentioned
- [ ] No illegal claims or guarantees
- [ ] "Not a law firm" disclaimer present

---

## Performance Optimization (Future)

### Images (TO DO)
- [ ] Compress all images
- [ ] Convert to WebP format
- [ ] Add responsive image sizes
- [ ] Implement lazy loading
- [ ] Add proper alt text

### Code (TO DO)
- [ ] Minify CSS/JS in production
- [ ] Enable gzip compression
- [ ] Implement caching headers
- [ ] Reduce third-party scripts
- [ ] Code splitting by route

---

## Accessibility

### WCAG 2.1 AA Compliance
- [ ] Color contrast ratios meet standards
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Semantic HTML used
- [ ] ARIA labels where needed
- [ ] Focus indicators visible
- [ ] No keyboard traps

### Testing Tools
- [ ] WAVE accessibility check
- [ ] axe DevTools check
- [ ] Lighthouse accessibility audit
- [ ] Manual keyboard navigation test
- [ ] Screen reader test (NVDA or VoiceOver)

---

## Analytics & Tracking (Future)

### Setup Required
- [ ] Google Analytics implemented (privacy-friendly)
- [ ] Event tracking configured
- [ ] Conversion tracking set up
- [ ] Search Console connected
- [ ] Bing Webmaster Tools connected

---

## Documentation Review

### Verify Documentation
- [ ] SITE_INVENTORY.md is complete
- [ ] TECH_SEO_AUDIT.md identifies all issues
- [ ] SCHEMA_IMPLEMENTATION.md documents all schemas
- [ ] GEO_STRATEGY.md outlines complete strategy
- [ ] LLM_TARGET_QUERIES.md lists all target queries
- [ ] This QA checklist covers all areas

---

## Pre-Launch Checklist

### Critical Items
- [ ] All schema validated (no errors)
- [ ] All links tested (no 404s)
- [ ] Mobile responsive on all pages
- [ ] Core Web Vitals pass
- [ ] Sitemap updated and submitted
- [ ] Canonical tags correct on all pages
- [ ] No duplicate content
- [ ] Legal disclaimers present
- [ ] Privacy policy updated (if needed)
- [ ] Terms of service reviewed

### Nice to Have
- [ ] Images optimized
- [ ] Social sharing works
- [ ] Analytics configured
- [ ] Performance > 90 on Lighthouse
- [ ] Accessibility score > 90

---

## Post-Launch Monitoring (Week 1)

### Daily Checks
- [ ] Monitor Google Search Console for errors
- [ ] Check for 404s or broken links
- [ ] Monitor site performance
- [ ] Check for any user-reported issues

### Weekly Checks
- [ ] Review search console impressions
- [ ] Check keyword rankings
- [ ] Monitor AI assistant mentions
- [ ] Review page performance metrics

---

## Ongoing Maintenance

### Monthly
- [ ] Validate all schemas still work
- [ ] Check for broken external links
- [ ] Update any outdated information
- [ ] Review and respond to user feedback
- [ ] Check AI assistant accuracy
- [ ] Monitor search rankings

### Quarterly
- [ ] Major content refresh if needed
- [ ] Add new guide pages based on data
- [ ] Review and update FAQs
- [ ] Refresh screenshots/images
- [ ] Audit accessibility
- [ ] Review competitor changes

---

## Notes & Issues Log

### Known Issues
1. Pre-existing build issue in accessibility.tsx (not related to our changes)
2. Some pages inherit global meta tags instead of custom (to be addressed)
3. Images not yet optimized (future work)
4. Guide pages not yet created (Phase 3 in progress)

### Future Enhancements
1. Spanish language versions of priority state pages
2. County-level pages for major metro areas
3. Video content for guides
4. Interactive tools/calculators
5. User testimonials with schema markup

---

**End of QA Checklist**

**Status:** Document created, checklist items to be completed as work progresses.
