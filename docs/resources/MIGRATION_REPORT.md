# Resources Migration Report

Generated: 2026-02-15

## Summary

- Total processed: 0
- Successful: 0
- Needs manual review: 0
- Failed: 0

## Status

Migration utilities are ready. Run `npm run resources:migrate` to begin migration process.

## Next Steps

1. Review `MIGRATION_BACKLOG.md` to understand scope
2. Fix slug/title mismatches (20 items blocked)
3. Run migration on "todo" items (8 ready)
4. Manual review of migrated content
5. Add sources to all migrated content
6. Validate with `npm run resources:lint`

## Key Priorities (per work order)

### Fast ROI Items

1. **Bulk migrate all Popular Questions (12)** - 8 ready, 4 blocked by slug mismatches
2. **Manually polish 3-5 most visible** (Proof of Service cluster + deadlines + fees + exhibits)
3. **Add sources** to those same 3-5 pages first
4. **Fix slug/title mismatches** (credibility landmines)
5. **Convert topic hubs** next (amplify via internal linking)

### Blockers to Address

- **20 slug/title mismatches** must be resolved before migration
- **10 topic hubs** need content creation (not migration)
- **2 items** have no content (needs expansion)

## Migration Quality Gates

Before considering migration complete:

- [ ] All v2 pages pass `npm run resources:lint`
- [ ] No duplicate section headings
- [ ] No repeated shortAnswer in body
- [ ] All pages have lastUpdated and sources
- [ ] Slug/title consistency achieved
- [ ] Manual QA on polished items complete
