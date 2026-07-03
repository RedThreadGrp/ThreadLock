# ThreadLock (tl-website) Hotfix Process

**Status: LIVE.** threadlock.ai serves production traffic. Every change to `main`
deploys production automatically via `.github/workflows/deploy-vercel.yml`.
Agents working in this repo MUST respect this process.

## The one rule

> The smallest diff that fixes the reported problem, verified, reversible.
> No refactors, no "while I'm here" changes, no dependency upgrades in a hotfix.

## Pipeline

```
fix/prod-error-* ──DRAFT PR──▶ Vercel preview (staging gate) ──human verify──▶
  mark ready → merge main ──(auto)──▶ PRODUCTION
```

- There is no separate staging branch. **The Vercel preview deployment on the PR
  is the staging environment.** Verify the fix there before merging.
- Merging = deploying. Only a human merges, and only after checking the preview.

## Verification (must pass before any PR)

```
npm ci
npm run lint
npm run build     # prebuild runs env + governance + resources validators
```

## Rollback

Fastest: GitHub Mobile → open the bad PR → `Revert` → merge the revert PR
(auto-deploys the previous state). Alternative: Actions → `rollback.yml` →
Run workflow with the last known-good SHA (redeploys that ref to production
via Vercel without touching git history).

## Error intake

Production errors in Sentry project `tl-website` are auto-filed here as issues
labeled `prod-error` by the central poller (compver/coordination), which
triggers `claude-remediate.yml` (draft-PR policy).
