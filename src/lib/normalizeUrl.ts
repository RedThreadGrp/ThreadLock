// file: src/lib/normalizeUrl.ts
// URL normalization utilities for consistent comparisons and deduplication

/**
 * Normalizes a URL for comparison and deduplication.
 * 
 * Rules:
 * - Trim whitespace
 * - Remove trailing slash (unless it's the root path)
 * - Do NOT mutate paths/case (YouTube handles are case-sensitive)
 * - Keep query strings only if present in input
 * 
 * @param url - The URL to normalize
 * @returns Normalized URL string
 */
export function normalizeUrl(url: string): string {
  let normalized = url.trim();
  
  // Remove trailing slash, but keep it for root paths like "https://example.com/"
  if (normalized.endsWith('/') && normalized.split('/').length > 3) {
    normalized = normalized.slice(0, -1);
  }
  
  return normalized;
}

/**
 * Checks if two URLs are equivalent after normalization
 */
export function areUrlsEquivalent(url1: string, url2: string): boolean {
  return normalizeUrl(url1) === normalizeUrl(url2);
}

/**
 * Extracts domain from URL for display/search purposes
 */
export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

/**
 * Checks if URL is HTTPS
 */
export function isHttps(url: string): boolean {
  return url.trim().toLowerCase().startsWith('https://');
}

/**
 * Checks if URL is HTTP (not HTTPS)
 */
export function isHttp(url: string): boolean {
  const normalized = url.trim().toLowerCase();
  return normalized.startsWith('http://') && !normalized.startsWith('https://');
}
