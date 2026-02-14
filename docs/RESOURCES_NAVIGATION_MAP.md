# ThreadLock Resources Navigation Map

This document provides a comprehensive overview of all accessible routes and possible navigations from the Resources page.

## Summary

- **Total Routes in Sitemap**: 70
- **Resources Hub Routes**: 27 (including main hub, questions, guides, kits, and topics)
- **Question Pages**: 12
- **Guide Pages**: 4 (featured guides)
- **Starter Kit Pages**: 3
- **Topic Pages**: 4

## Main Resources Hub

**Route**: `/resources`
**Priority**: 0.8

The Resources Hub is the central navigation point for all self-help content. From this page, users can access:

### Fast Track Navigation Pills
Interactive pills that filter content by user intent:
- "I have a hearing soon" (Urgent)
- "I'm just starting" (Start)
- "I need to organize" (Organize)
- "I want to learn more" (Learn)

## All Question Routes (from /resources/q/)

These are accessible from the Resources Hub under "Popular Questions" section:

1. `/resources/q/proof-of-service-definition` - **What counts as proof of service?** ✓ FIXED
2. `/resources/q/exhibit-labeling` - How do I label exhibits for court?
3. `/resources/q/official-forms-location` - Where do I find official court forms?
4. `/resources/q/text-authentication` - Can I authenticate text messages myself?
5. `/resources/q/service-deadlines` - How long do I have to serve documents?
6. `/resources/q/self-service` - Can I serve documents myself?
7. `/resources/q/improper-service` - What happens if service is improper?
8. `/resources/q/email-evidence` - Can I use email as evidence?
9. `/resources/q/photo-authentication` - How do I authenticate photos?
10. `/resources/q/court-exhibit-rules` - What are the rules for court exhibits?
11. `/resources/q/deadline-calculation` - How do I calculate court deadlines?
12. `/resources/q/jurisdiction-filing` - Where do I file my documents?

### Question Page Features
Each question page includes:
- Question heading with icon
- Short answer section (highlighted)
- Detailed answer with markdown formatting
- Related questions (cross-links)
- Related resources (links to guides/tools)
- Feedback widget
- Back link to Resources Hub
- FAQPage schema for SEO

## All Guide Routes (from /resources/guides/)

Featured guides accessible from "Featured Guides" section:

1. `/resources/guides/evidence-authentication` - Evidence Authentication Guide
2. `/resources/guides/court-filing-basics` - Court Filing Basics
3. `/resources/guides/deadline-calculator-guide` - Deadline Calculator Guide
4. `/resources/guides/proof-of-service-states` - Proof of Service State-by-State

### Guide Page Features
Each guide includes:
- Title and summary
- Tags for categorization
- Full guide content (markdown)
- Related links
- Feedback widget
- Back link to Resources Hub

## All Starter Kit Routes (from /resources/kits/)

Starter kits accessible from "Starter Kits" section:

1. `/resources/kits/first-filing` - First-Time Filing Kit
2. `/resources/kits/evidence-gathering` - Evidence Gathering Kit
3. `/resources/kits/hearing-prep` - Hearing Preparation Kit

### Starter Kit Features
Each kit includes:
- Description of what's included
- List of resources in the kit
- Estimated time to complete
- Links to individual resources

## All Topic Routes (from /resources/topic/)

Topics accessible from "Browse by Topic" section:

1. `/resources/topic/custody` - Custody & Parenting Time
2. `/resources/topic/financial` - Financial & Support
3. `/resources/topic/court-prep` - Court Preparation
4. `/resources/topic/evidence` - Evidence & Documentation

### Topic Page Features
Each topic page includes:
- Topic description
- Filtered list of resources by topic
- Related questions
- Related guides

## Navigation Flow Examples

### From Resources Hub to Question Page
```
/resources 
  → Click "What counts as proof of service?" 
  → /resources/q/proof-of-service-definition
    → View question and answer
    → Click related question "How long do I have to serve documents?"
    → /resources/q/service-deadlines
```

### From Resources Hub to Guide via Kit
```
/resources
  → Click "First-Time Filing Kit"
  → /resources/kits/first-filing
    → Contains link to /resources/q/proof-of-service-definition
    → Click to view question
```

### From Resources Hub to Topic to Guide
```
/resources
  → Click "Court Preparation" topic
  → /resources/topic/court-prep
    → Shows filtered guides and questions
    → Click guide
    → View detailed guide content
```

## Cross-References and Internal Linking

### Questions Link To:
- Other related questions (2-3 per page)
- Related guides and resources (2-4 per page)
- Back to Resources Hub

### Guides Link To:
- Related questions
- Related resources
- Back to Resources Hub

### Starter Kits Link To:
- Individual resources (questions, guides, tools)
- Back to Resources Hub

## External Resources Directory

The Resources Hub also includes:
- **Official State Resources** section with jurisdiction selector
- Links to official court websites and forms
- State-specific legal resources

## All Site Routes by Category

### High Priority Pages (0.9-1.0)
- `/` - Home (1.0)
- `/pricing` - Pricing (0.9)
- `/professionals` - For Attorneys (0.9)
- `/trial` - Free Trial (0.9)
- `/family-law/*` - Family law pages (0.9)
- `/guides/*` - Guide pages (0.9)
- `/resources/guides/*` - Resource guides (0.9)

### Resource Content (0.8)
- `/resources` - Resources Hub (0.8)
- `/resources/q/*` - Question pages (0.8)
- `/resources/kits/*` - Starter kits (0.8)
- `/resources/topic/*` - Topic pages (0.8)
- `/for-ai-assistants` - For AI Assistants (0.8)
- `/for-llms` - For LLMs (0.8)
- `/docs/threadlock-facts` - ThreadLock Facts (0.8)
- `/integrations/clio` - Clio Integration (0.8)

### Supporting Pages (0.5-0.7)
- `/support` - Support (0.7)
- `/contact` - Contact (0.7)
- `/founder-story` - Founder Story (0.7)
- `/sarahs-story` - Sarah's Story (0.7)
- `/whitepaper` - Whitepaper (0.7)
- `/whitepaper-b2b` - B2B Whitepaper (0.7)
- `/legal-tech-directory` - Legal Tech Directory (0.7)
- `/security` - Security (0.7)
- `/legal` - Legal Center (0.6)
- `/terms` - Terms of Service (0.6)
- `/privacy` - Privacy Policy (0.6)
- `/investors` - Investors (0.6)
- `/benefits` - For Employers (0.5)
- `/edu/clinics` - For Students (0.5)
- `/sovereign` - Tribal (0.5)
- `/cookies` - Cookie Policy (0.5)
- `/disclaimer` - Disclaimer (0.5)
- `/accessibility` - Accessibility (0.5)
- `/dpa` - DPA (0.5)

### Low Priority Pages (0.4)
- `/dmca` - DMCA (0.4)
- `/resources/thanks` - Thank You (0.4)

## Key Fix: proof-of-service-definition Route

### Problem
PR 66 created a static route at `/resources/qa/proof-of-service.tsx` but the system expected the dynamic route `/resources/q/proof-of-service-definition` to work.

### Solution
1. Removed the unused static file: `pages/resources/qa/proof-of-service.tsx`
2. Updated all references in `ResourcesPage.tsx` to use `/resources/q/proof-of-service-definition`
3. The dynamic route at `pages/resources/q/[slug].tsx` now properly handles this content
4. Updated sitemap generator to include all question routes

### Route Now Works
- ✓ URL: `/resources/q/proof-of-service-definition`
- ✓ Title: "What Counts as Proof of Service? | ThreadLock"
- ✓ Content: Properly rendered from `resourcesRegistry.ts`
- ✓ Schema: FAQPage schema included for SEO
- ✓ Navigation: Links to related questions and resources
- ✓ Sitemap: Included in sitemap.xml

## Testing

All routes can be tested via:
- Direct navigation: `curl http://localhost:3000/resources/q/proof-of-service-definition`
- E2E tests: `npm run e2e -- --spec cypress/e2e/resources_hub.cy.ts`
- Sitemap validation: Check `public/sitemap.xml`

## Maintenance

When adding new content:
1. Add to `src/content/resourcesRegistry.ts`
2. Run `npm run generate-sitemap` to update sitemap
3. Test the route works locally
4. Run E2E tests to ensure no regressions
