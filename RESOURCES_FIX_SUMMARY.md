# Resources Page Fix - Summary

**Date:** 2026-02-15  
**Branch:** copilot/fix-resources-page-formatting

## Problem Statement

The resources page was not reflecting the latest formatting and rendering changes, routes were not being surfaced properly in the sitemap, and this was identified as a persistent problem.

## Root Causes Identified

1. **Missing RESOURCES in sitemap generation**: The sitemap script was extracting POPULAR_QUESTIONS, FEATURED_GUIDES, and STARTER_KITS from resourcesRegistry.ts, but was completely missing the main RESOURCES array (containing 11 published articles).

2. **Wrong topic route format**: The sitemap was generating routes as `/resources/topic/{id}` but the actual Next.js dynamic route file is at `pages/resources/topics/[slug].tsx` (plural "topics").

3. **ResourcesPage had duplicate hardcoded data**: The main resources page at `src/pages/resources/ResourcesPage.tsx` contained hardcoded arrays for RESOURCES, STARTER_KITS, TOPICS, FEATURED_GUIDES, and POPULAR_QUESTIONS instead of importing from the single source of truth in `src/content/resourcesRegistry.ts`.

## Changes Made

### 1. Fixed Sitemap Generation (`scripts/generate-sitemap.mjs`)

- Added extraction of RESOURCES array from resourcesRegistry.ts
- Fixed topic route from `/resources/topic/` to `/resources/topics/`
- Added individual resource article routes (e.g., `/resources/hearing-tomorrow`)
- Updated route configuration to handle new resource patterns
- Result: Sitemap now has **81 URLs** (up from 70), including all resource routes

### 2. Refactored ResourcesPage (`src/pages/resources/ResourcesPage.tsx`)

- Added imports from `src/content/resourcesRegistry.ts`
- Replaced 5 hardcoded arrays (~180 lines) with transformation functions (~60 lines)
- Now filters for published status and transforms registry data to match component types
- Ensures the hub page always reflects the latest content from the registry

### 3. Created Resources Audit System (`scripts/generate-resources-audit.mjs`)

- New script to document all /resources/* routes
- Generates `RESOURCES_AUDIT.md` with:
  - Complete listing of all 36 resource routes
  - Status indicators (✅ published, 📝 draft)
  - Styling flags (✅ New Styling, ⚠️ Old Styling, ❓ Unknown)
  - Route patterns and organization by type

### 4. Audit Results

All routes confirmed to be using **✅ New Styling**:
- 11 Main Resource Articles
- 12 Popular Questions
- 4 Featured Guides  
- 3 Starter Kits
- 6 Topics

**Total: 36 resource routes**, all using the modern dark theme with token-based classes.

## Files Modified

- `scripts/generate-sitemap.mjs` - Fixed to include all resources and correct topic routes
- `src/pages/resources/ResourcesPage.tsx` - Refactored to use registry as single source of truth
- `public/sitemap.xml` - Regenerated with all routes
- `RESOURCES_AUDIT.md` - Created (new file)
- `scripts/generate-resources-audit.mjs` - Created (new file)

## Validation Performed

✅ Sitemap XML structure is valid (81 URLs with proper open/close tags)  
✅ Resources content validation passed (0 errors, 0 warnings)  
✅ External resources validation passed  
✅ All routes use new styling according to audit  
✅ Topic routes corrected from `/topic/` to `/topics/`

## Why This Was Persistent

The issue was persistent because:
1. There were **two parallel data sources** - the registry and hardcoded arrays in ResourcesPage
2. Changes to resourcesRegistry.ts had no effect on the main hub page
3. The sitemap was missing an entire category of routes (RESOURCES)
4. The topic route mismatch meant valid routes weren't being indexed

## Impact

- All resource routes now properly indexed in sitemap
- Main resources hub page now always reflects latest registry content
- Audit system provides ongoing visibility into route status and styling
- Single source of truth established for all resources data
- Topic routes now point to correct URLs

## Next Steps

To maintain this fix going forward:
1. Always update `src/content/resourcesRegistry.ts` (not ResourcesPage)
2. Run `npm run generate-sitemap` after adding new resources
3. Run `node scripts/generate-resources-audit.mjs` to verify changes
4. Verify styling consistency using the audit report
