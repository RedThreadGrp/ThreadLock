// file: src/lib/analytics.ts
// Privacy-preserving analytics for resource clicks
// No PII, no external tracking, localStorage only

interface ResourceClick {
  resourceId: string;
  timestamp: string;
  category?: string;
}

const ANALYTICS_KEY = "threadlock_resource_analytics";
const MAX_STORED_CLICKS = 1000;

/**
 * Track a resource click (privacy-preserving)
 * @param resourceId - The resource ID being clicked
 * @param category - Optional category for grouping
 */
export function trackResourceClick(resourceId: string, category?: string): void {
  if (typeof window === "undefined") return;

  try {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    const clicks: ResourceClick[] = stored ? JSON.parse(stored) : [];

    // Add new click
    clicks.push({
      resourceId,
      timestamp: new Date().toISOString(),
      category,
    });

    // Keep only recent clicks (prevent unbounded growth)
    const recentClicks = clicks.slice(-MAX_STORED_CLICKS);

    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(recentClicks));
  } catch (error) {
    // Fail silently - analytics shouldn't break functionality
    console.warn("Failed to track resource click:", error);
  }
}

/**
 * Get click count for a specific resource
 * @param resourceId - The resource ID to check
 * @returns Number of clicks
 */
export function getResourceClickCount(resourceId: string): number {
  if (typeof window === "undefined") return 0;

  try {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    if (!stored) return 0;

    const clicks: ResourceClick[] = JSON.parse(stored);
    return clicks.filter((c) => c.resourceId === resourceId).length;
  } catch (error) {
    return 0;
  }
}

/**
 * Get most clicked resources
 * @param limit - Maximum number of results to return
 * @returns Array of {resourceId, count} sorted by count
 */
export function getMostClickedResources(limit: number = 10): Array<{
  resourceId: string;
  count: number;
}> {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    if (!stored) return [];

    const clicks: ResourceClick[] = JSON.parse(stored);

    // Count clicks per resource
    const counts = new Map<string, number>();
    clicks.forEach((click) => {
      counts.set(click.resourceId, (counts.get(click.resourceId) || 0) + 1);
    });

    // Convert to array and sort
    return Array.from(counts.entries())
      .map(([resourceId, count]) => ({ resourceId, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  } catch (error) {
    return [];
  }
}

/**
 * Get total number of tracked clicks
 */
export function getTotalClickCount(): number {
  if (typeof window === "undefined") return 0;

  try {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    if (!stored) return 0;

    const clicks: ResourceClick[] = JSON.parse(stored);
    return clicks.length;
  } catch (error) {
    return 0;
  }
}

/**
 * Clear all analytics data (for privacy/testing)
 */
export function clearAnalytics(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(ANALYTICS_KEY);
  } catch (error) {
    console.warn("Failed to clear analytics:", error);
  }
}
