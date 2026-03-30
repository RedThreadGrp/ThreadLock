// content-freshness.config.ts

export interface FreshnessPolicy {
  pattern: string     // glob relative to repo root
  threshold: number   // days before flagging as stale
  priority: 'critical' | 'high' | 'normal'
  checkLinks: boolean // whether to validate external URLs in frontmatter
}

export const freshnessPolicy: FreshnessPolicy[] = [
  // Pricing must be current — checked most aggressively
  {
    pattern: 'content/pages/pricing.md',
    threshold: 30,
    priority: 'critical',
    checkLinks: false,
  },
  // AI-facing pages — models cache stale info, corrections are slow
  {
    pattern: 'content/pages/for-ai-assistants.md',
    threshold: 60,
    priority: 'critical',
    checkLinks: false,
  },
  {
    pattern: 'content/pages/for-llms.md',
    threshold: 60,
    priority: 'critical',
    checkLinks: false,
  },
  // Integrations change when third-party APIs/products change
  {
    pattern: 'content/pages/integrations/**/*.md',
    threshold: 90,
    priority: 'high',
    checkLinks: true,
  },
  // Jurisdiction pages — court rules change, link rot is common
  {
    pattern: 'content/jurisdictions/**/*.md',
    threshold: 180,
    priority: 'high',
    checkLinks: true,   // validates court_url and all form URLs
  },
  // Resources/guides — less time-sensitive
  {
    pattern: 'content/pages/resources/**/*.md',
    threshold: 120,
    priority: 'normal',
    checkLinks: true,
  },
  // Docs
  {
    pattern: 'content/pages/docs/**/*.md',
    threshold: 90,
    priority: 'normal',
    checkLinks: false,
  },
  // Default fallback for anything not matched above
  {
    pattern: '**',
    threshold: 180,
    priority: 'normal',
    checkLinks: false,
  },
]
