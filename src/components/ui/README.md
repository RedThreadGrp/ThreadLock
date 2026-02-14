# UI Components

This directory contains reusable UI primitives that ensure consistent design patterns across the application.

## InlineIconLabel

A standardized component for aligning icons with text labels.

### Problem Solved

Before this component, icon-text alignment was inconsistent across the site:
- Emoji icons (👍, 👎, ⏱) had unpredictable vertical alignment
- Manual margin tweaks like `mt-0.5` were used as band-aids
- Different cards and buttons had different alignment strategies

### Solution

`InlineIconLabel` provides a single, reusable pattern:
- Uses `inline-flex items-center` for proper vertical centering
- Icon constrained to fixed box (default `w-4 h-4`)
- `leading-none` for consistent vertical alignment
- SVG icons instead of emoji for predictable sizing

### Usage

```tsx
import { InlineIconLabel, ThumbsUpIcon } from '@/src/components/ui';

// Basic usage
<InlineIconLabel icon={<ThumbsUpIcon />}>
  Yes
</InlineIconLabel>

// In a button
<button className="flex items-center">
  <InlineIconLabel icon={<ClockIcon />}>
    15 minutes
  </InlineIconLabel>
</button>

// Custom spacing
<InlineIconLabel icon={<CheckIcon />} className="gap-1.5">
  Completed
</InlineIconLabel>
```

## Icon Components

SVG icon components with consistent sizing and accessibility.

### Available Icons

- `ThumbsUpIcon` - For positive feedback
- `ThumbsDownIcon` - For negative feedback
- `ClockIcon` - For time estimates
- `CheckIcon` - For completion/success states

### Icon Sizing Standards

- **Default inline icons**: `w-4 h-4` (16px)
- **Larger CTAs/buttons**: `w-5 h-5` (20px)
- Never use font-size-based emoji sizing

### Usage

```tsx
import { ThumbsUpIcon, ClockIcon } from '@/src/components/ui';

// Default size (w-4 h-4)
<ThumbsUpIcon />

// Custom size
<ClockIcon className="w-5 h-5" />

// With color
<CheckIcon className="w-4 h-4 text-green-500" />
```

## Architectural Principles

1. **No emoji for alignment-critical UI** - Use SVG icons instead
2. **No manual offset tweaks** - Fix the underlying pattern, not symptoms
3. **Reusable primitives** - One component, used everywhere
4. **Consistent sizing** - Follow the standards, don't create variants

## Migration Guide

### Before (Anti-pattern)

```tsx
// ❌ Emoji with manual offset
<span className="text-brand-orange mt-0.5">✓</span>

// ❌ Inconsistent flex usage
<button className="text-sm">
  👍 Yes
</button>
```

### After (Correct pattern)

```tsx
// ✅ SVG icon with InlineIconLabel
<span className="flex items-center justify-center w-4 h-4 leading-none">
  <CheckIcon className="w-4 h-4" />
</span>

// ✅ Consistent button pattern
<button className="flex items-center">
  <InlineIconLabel icon={<ThumbsUpIcon />}>
    Yes
  </InlineIconLabel>
</button>
```

## Future Additions

When adding new icons:

1. Create SVG component in `icons.tsx`
2. Follow the existing pattern (viewBox, currentColor, etc.)
3. Export from `index.ts`
4. Add to this README
5. Use with `InlineIconLabel` for text alignment
