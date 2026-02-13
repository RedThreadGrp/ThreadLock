# Resources Content Process

This document outlines the process for creating, editing, and maintaining content in the ThreadLock Resources Hub.

## Overview

The Resources Hub uses a **registry-driven architecture** where all content is stored in TypeScript registries with strong typing. This approach ensures:

- **Type safety**: All content fields are validated by TypeScript
- **Build-time validation**: Placeholder content and missing fields are caught before deployment
- **Centralized management**: All content in one place, easy to find and update
- **No file fragmentation**: Content is not scattered across multiple files

## Content Structure

All content lives in: `/src/content/resourcesRegistry.ts`

### Content Types

1. **Resources** - Main content items (guides, templates, checklists)
2. **Starter Kits** - Curated collections of resources for specific scenarios
3. **Featured Guides** - In-depth guides featured on the hub
4. **Topics** - Category pages that organize resources
5. **Popular Questions** - Q&A items with short answers

## Adding New Content

### Step 1: Choose the Content Type

Determine which type of content you're creating:
- **Resource**: A standalone guide, template, or checklist
- **Starter Kit**: A collection of resources for a specific scenario
- **Guide**: A comprehensive how-to guide
- **Question**: A frequently asked question with a direct answer

### Step 2: Add to Registry

Open `/src/content/resourcesRegistry.ts` and add your content to the appropriate array:

#### Adding a Resource

```typescript
{
  slug: "your-resource-slug",
  title: "Your Resource Title",
  excerpt: "Brief 1-2 sentence description",
  tag: "Templates", // or "Evidence", "Court Prep", "Forms", "Finance", "Basics"
  topic: "filing", // Topic this resource belongs to
  intent: "Start", // or "Urgent", "Organize", "Learn"
  readTime: "5 min read", // Optional
  status: "published", // or "draft"
  body: `# Your Resource Title

Your content here...

## Section 1

Content...

## Section 2

More content...

## Disclaimer

This is not legal advice. Requirements vary by jurisdiction. Verify local rules and consider consulting with a licensed attorney for case-specific guidance.`,
  seoTitle: "Your SEO-optimized title | ThreadLock",
  metaDescription: "SEO-friendly description under 160 characters",
  dateModified: "2026-02-13",
  relatedLinks: [
    { title: "Related Resource", href: "/resources/related-resource" }
  ]
}
```

#### Adding a Question

```typescript
{
  slug: "your-question-slug",
  question: "What is your question?",
  status: "published",
  body: `Direct answer first.

## Why This Matters

Explanation...

## Common Variations

- Variation 1
- Variation 2

## Practical Steps

1. Step 1
2. Step 2

## Mistakes to Avoid

- Common mistake 1
- Common mistake 2

## Disclaimer

This is not legal advice. Requirements vary by jurisdiction.`,
  shortAnswer: "One to two sentence direct answer for FAQ schema and preview.",
  seoTitle: "Your Question | ThreadLock",
  metaDescription: "Answer preview for search engines",
  dateModified: "2026-02-13",
  relatedQuestions: [
    { question: "Related question?", href: "/resources/q/related-question" }
  ],
  relatedLinks: [
    { title: "Related Resource", href: "/resources/related-resource" }
  ]
}
```

#### Adding a Starter Kit

```typescript
{
  slug: "your-kit-slug",
  title: "Your Kit Title",
  description: "What this kit helps with",
  whatYouGet: [
    "Checklist item 1",
    "Template item 2",
    "Guide item 3"
  ],
  estimatedTime: "30 min",
  resources: ["resource-slug-1", "resource-slug-2"],
  status: "published"
}
```

#### Adding a Featured Guide

```typescript
{
  slug: "your-guide-slug",
  title: "Your Guide Title",
  summary: "Comprehensive summary of what the guide covers",
  tags: ["Topic 1", "Topic 2"],
  updated: "Feb 2026",
  status: "published",
  body: `# Your Guide Title

Introduction...

## Section 1

Content...

## Section 2

More content...

## Disclaimer

This is not legal advice. Requirements vary by jurisdiction.`
}
```

### Step 3: Follow Content Rules

#### Required Fields for Published Content

- **slug**: URL-friendly identifier (lowercase, hyphens)
- **title**: Clear, descriptive title
- **status**: `"published"` or `"draft"`
- **body**: Main content (minimum 50 characters for resources/guides, 30 for questions)
- **excerpt/summary/description**: Brief description
- **metaDescription**: SEO description (recommended)
- **dateModified**: Last update date in YYYY-MM-DD format (recommended)

#### Content Guidelines

**Voice & Tone:**
- Professional and calm, not "bloggy" or hype
- Plain English first sentence
- Tactical and precise
- No fragmented sentence gimmicks
- No slang or edgy jokes

**Claims & Disclaimers:**
- **Never use**: "court-ready", "guaranteed", "will win", "strategy"
- **Never imply**: Legal advice or attorney-client relationship
- **Always include**: Standard disclaimer stating "This is not legal advice"
- **Always note**: "Jurisdiction varies; verify local rules"

**Formatting:**
- Use markdown headers (##, ###)
- Include practical checklists where applicable
- Include 2-3 internal links per page (to related resources, topics, or hub)
- Use structured sections (Why This Matters, Practical Steps, Mistakes to Avoid)

**Placeholder Ban:**
- No "[to be developed]", "[Answer...]", "TBD", or similar placeholders
- Build will fail if placeholders are detected in published content

## Draft vs. Published Status

### Draft Content

- `status: "draft"` in the registry
- Accessible via direct URL but not featured in hub
- Shows "In Progress" badge on page
- Has `<meta name="robots" content="noindex, nofollow">` to prevent indexing

### Publishing Content

To publish content:

1. Ensure all required fields are complete
2. Remove any placeholder text
3. Add proper disclaimer
4. Add SEO fields (metaDescription, seoTitle)
5. Change `status: "draft"` to `status: "published"`
6. Run validation: `npm run validate:content`

## Validation Rules

### Automatic Validation

The build process runs validation automatically. To run manually:

```bash
npm run validate:content
```

### What Gets Validated

- **Placeholder detection**: Searches for common placeholder patterns
- **Required fields**: Ensures published content has necessary fields
- **Minimum length**: Body content must meet minimum character counts
- **Duplicate slugs**: Prevents slug collisions

### Build Failure Conditions

The build will fail if:
- Published content contains placeholder text
- Published content is missing required fields
- Published content has body text under minimum length
- Duplicate slugs exist

## Link Verification

### Internal Links

- Always use relative paths: `/resources/slug`, not full URLs
- Verify target pages exist before linking
- Use the correct path structure:
  - Resources: `/resources/[slug]`
  - Guides: `/resources/guides/[slug]`
  - Questions: `/resources/q/[slug]`
  - Topics: `/resources/topics/[slug]`
  - Kits: `/resources/kits/[slug]`

### External Links

External resources (official court sites, legal aid) are managed in:
`/src/content/externalResources.registry.ts`

Check the `lastVerified` date regularly and update if needed.

## SEO Best Practices

### Meta Titles
- Format: `[Specific Topic] | ThreadLock`
- Keep under 60 characters
- Include primary keyword

### Meta Descriptions
- Keep under 160 characters
- Include call to action or value proposition
- Use plain language

### JSON-LD Structured Data

- **Resources**: Use Article schema (automatically added)
- **Questions**: Use FAQPage schema (automatically added)
- Include `dateModified` for freshness signals

### Internal Linking Strategy

Every page should link to:
- Back to hub (`/resources`)
- Back to its topic (if applicable)
- 2-3 related resources or questions

## Updating Existing Content

1. Find the content in `/src/content/resourcesRegistry.ts`
2. Make your changes
3. Update `dateModified` to current date
4. Run validation: `npm run validate:content`
5. Test locally: `npm run dev`
6. Commit changes with descriptive message

## Common Tasks

### Update Content for New Court Rules

1. Search registry for affected content: `grep -n "keyword" src/content/resourcesRegistry.ts`
2. Update affected items
3. Update `dateModified` field
4. Add note in content about what changed
5. Run validation

### Add New Question to Popular Questions

1. Add question object to `POPULAR_QUESTIONS` array
2. Ensure `shortAnswer` is provided (used in FAQPage schema)
3. Keep question concise and direct
4. Link to related questions and resources
5. Run validation

### Remove Outdated Content

1. Do not delete – change `status` to `"draft"`
2. Add note in content about why it's no longer published
3. Update any links that pointed to this content
4. Consider replacing with updated version

## Troubleshooting

### Build Fails with Placeholder Error

**Error**: `Published item "slug" contains placeholder content`

**Fix**: 
1. Find the item in resourcesRegistry.ts
2. Replace placeholder text with actual content
3. Run `npm run validate:content` to verify
4. If content isn't ready, change `status: "draft"`

### TypeScript Error on New Content

**Error**: Type errors when adding content

**Fix**:
1. Check that all required fields are present
2. Verify field types match the interface definition
3. Check for typos in field names
4. Ensure arrays have proper structure

### Content Not Showing on Hub

**Possible causes**:
- `status: "draft"` (intentional - content is hidden)
- Wrong array (check you added to correct content type)
- Build not completed (run `npm run build`)
- TypeScript error preventing compilation

## Review Checklist

Before publishing new content:

- [ ] All required fields complete
- [ ] No placeholder text
- [ ] Disclaimer included
- [ ] "Jurisdiction varies" caveat included
- [ ] No banned terms (court-ready, guaranteed, etc.)
- [ ] Plain English first sentence
- [ ] Practical checklist or steps included
- [ ] 2-3 internal links added
- [ ] SEO fields completed (title, description)
- [ ] `dateModified` is current
- [ ] Validation passes: `npm run validate:content`
- [ ] Tested locally: `npm run dev`

## Questions or Issues?

If you encounter issues not covered here:

1. Check the validation output for specific errors
2. Review similar content in the registry for examples
3. Check TypeScript types in resourcesRegistry.ts for field requirements
4. Consult with development team for technical issues

## Maintenance Schedule

- **Weekly**: Check for outdated `dateModified` dates
- **Monthly**: Verify external links (run `npm run check-links`)
- **Quarterly**: Review content for accuracy with current rules
- **As needed**: Update for new court rules or procedures
