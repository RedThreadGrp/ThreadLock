# ResourceQA Article System

A structured content system for Q&A resource articles with a single, reusable renderer component.

## Overview

This system provides a type-safe way to create and render resource articles with consistent structure and styling. It enforces content contracts at compile-time and generates uniform, accessible HTML.

## Quick Start

### 1. Create content file

```typescript
// src/content/resources/your-topic.ts
import type { ResourceQAContent } from "./types";

export const yourTopic: ResourceQAContent = {
  slug: "your-topic",
  
  seo: {
    title: "Your Topic Title | ThreadLock",
    description: "Brief description for search engines",
  },
  
  hero: {
    h1: "Your Main Question",
    subhead: "Optional explanatory subheading",
  },
  
  shortAnswer: {
    text: "A single paragraph short answer. No lists here.",
  },
  
  sections: [
    {
      id: "section-one",
      heading: "First Section",
      body: [
        { type: "p", text: "Regular paragraph text" },
        { type: "ul", items: ["Item 1", "Item 2"] },
      ],
    },
  ],
};
```

### 2. Create page

```typescript
// pages/resources/qa/your-topic.tsx
import { ResourceQAArticle } from "@/src/components/resources/ResourceQAArticle";
import { yourTopic } from "@/src/content/resources/your-topic";

export default function YourTopicPage() {
  return <ResourceQAArticle content={yourTopic} />;
}
```

That's it! The component handles all rendering, TOC generation, and styling.

## Content Contract

### Type: ResourceQAContent

Main content structure with these required fields:

- `slug`: URL-safe identifier
- `seo`: SEO metadata (title, description)
- `hero`: Page header (h1, optional subhead)
- `shortAnswer`: Single paragraph answer (required)
- `sections`: Array of content sections

Optional fields:
- `faqs`: Expandable FAQ items
- `sources`: Reference list with optional links

### Type: ResourceBodyBlock

Union type supporting these block types:

1. **Paragraph**: `{ type: "p"; text: string }`
2. **Unordered list**: `{ type: "ul"; items: string[] }`
3. **Ordered list**: `{ type: "ol"; items: string[] }`
4. **Callout**: `{ type: "callout"; kind: "note" | "warning" | "tip"; title?: string; text: string }`
5. **Table**: `{ type: "table"; caption?: string; columns: string[]; rows: string[][]; footnote?: string }`

### Contract Rules

**Enforced by TypeScript:**
- All required fields must be present
- Block types must match defined unions
- Arrays must contain correct types

**Enforced by discipline:**
- `shortAnswer.text` must be a single paragraph (no lists, no multiple paragraphs)
- Tables must be table blocks, not ASCII art in strings
- Every `id` must be unique on the page, URL-safe, and stable
- Table rows must match column count (warning logged if mismatch)

## Component Features

The `ResourceQAArticle` component provides:

1. **Short Answer Card**: Always rendered first, with customizable label
2. **Table of Contents**: Auto-generated from sections, FAQs, and sources
3. **Structured Content**: Renders all block types with consistent styling
4. **FAQ Section**: Expandable `<details>` elements with proper ARIA
5. **Sources Section**: Links with optional notes
6. **Accessibility**: Proper semantic HTML and ARIA roles
7. **Responsive Layout**: Two-column on desktop, stacked on mobile

## Styling

Component uses Tailwind CSS classes matching the existing ThreadLock design system:
- Dark theme with white/opacity text colors
- Orange accent color (`text-orange-300` for Q icons)
- Rounded borders (`rounded-2xl`)
- Semi-transparent backgrounds (`bg-white/5`)

Callout styles:
- **Warning**: Amber border/background
- **Tip**: Emerald border/background  
- **Note**: Sky blue border/background

## Example: Complete Article

See `src/content/resources/proof-of-service.ts` for a full example demonstrating:
- Multiple sections with mixed block types
- Callouts (warning and tip)
- Table with caption and footnote
- FAQ section
- Sources with links and notes

## Guidelines

**Do:**
- Keep `shortAnswer.text` to one paragraph
- Use appropriate block types for content structure
- Provide stable, descriptive IDs for sections
- Use callouts for important information
- Include sources for factual claims

**Don't:**
- Put lists in `shortAnswer.text` (use sections instead)
- Create "ASCII tables" in paragraph text
- Generate or transform IDs in content files
- Repeat the short answer in sections
- Use markdown or HTML in content strings

## File Structure

```
src/
  content/
    resources/
      types.ts                  # Type definitions
      your-topic.ts            # Content files
  components/
    resources/
      ResourceQAArticle.tsx    # Renderer component

pages/
  resources/
    qa/
      your-topic.tsx           # Page files (minimal wiring)
```

## TypeScript Support

Full TypeScript support with:
- Compile-time type checking
- IntelliSense for content structure
- Type-safe block rendering
- Proper React component types
