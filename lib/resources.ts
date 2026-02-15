// file: lib/resources.ts
// Utilities for resources content and routing

import canonicalRedirects from '../docs/resources/CANONICAL_REDIRECTS.json';

type RedirectEntry = {
  from: string;
  to: string;
  reason: string;
  status: 'canonical' | 'redirect';
};

/**
 * Get the canonical URL for a content ID (slug)
 * 
 * @param contentId - The slug/ID of the content (e.g., "fee-waiver", "proof-of-service")
 * @param type - The content type ("question", "resource", "guide", "kit", "topic")
 * @returns The canonical route for the content
 * 
 * @example
 * hrefForContentId("proof-of-service-definition", "question") // "/resources/q/proof-of-service-definition"
 * hrefForContentId("evidence-authentication", "guide") // "/resources/guides/evidence-authentication"
 */
export function hrefForContentId(contentId: string, type?: 'question' | 'resource' | 'guide' | 'kit' | 'topic'): string {
  // Build the route based on type
  let route: string;
  
  if (type === 'question') {
    route = `/resources/q/${contentId}`;
  } else if (type === 'guide') {
    route = `/resources/guides/${contentId}`;
  } else if (type === 'kit') {
    route = `/resources/kits/${contentId}`;
  } else if (type === 'topic') {
    route = `/resources/topics/${contentId}`;
  } else if (type === 'resource') {
    route = `/resources/${contentId}`;
  } else {
    // If no type specified, try to infer from contentId or default to resource
    route = `/resources/${contentId}`;
  }
  
  // Check if there's a redirect for this route
  const redirect = canonicalRedirects.redirects.find((r: RedirectEntry) => r.from === route);
  
  if (redirect && redirect.status === 'redirect') {
    // Return the canonical URL if there's an active redirect
    return redirect.to;
  }
  
  // Return the route as-is (it's already canonical)
  return route;
}

/**
 * Get redirect information for a route
 * 
 * @param route - The route to check (e.g., "/resources/q/fee-waiver")
 * @returns Redirect info if exists, null otherwise
 */
export function getRedirectForRoute(route: string): RedirectEntry | null {
  const redirect = canonicalRedirects.redirects.find((r: RedirectEntry) => r.from === route);
  return redirect && redirect.status === 'redirect' ? redirect : null;
}

/**
 * Check if a route needs a redirect
 * 
 * @param route - The route to check
 * @returns true if route needs redirect, false if it's canonical
 */
export function needsRedirect(route: string): boolean {
  const redirect = canonicalRedirects.redirects.find((r: RedirectEntry) => r.from === route);
  return redirect ? redirect.status === 'redirect' : false;
}

/**
 * Get all redirects
 * 
 * @returns Array of all redirect entries
 */
export function getAllRedirects(): RedirectEntry[] {
  return canonicalRedirects.redirects.filter((r: RedirectEntry) => r.status === 'redirect');
}
