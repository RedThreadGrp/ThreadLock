// file: src/lib/dedupeExternalResources.ts
// Deduplication utilities for external resources

import { ExternalResource } from "../content/externalResources.registry";
import { normalizeUrl } from "./normalizeUrl";

export interface DedupeReport {
  timestamp: string;
  totalResources: number;
  uniqueResources: number;
  duplicateIds: Array<{
    id: string;
    count: number;
    resources: ExternalResource[];
  }>;
  duplicateUrls: Array<{
    url: string;
    normalizedUrl: string;
    count: number;
    resources: ExternalResource[];
    kept: ExternalResource;
    dropped: ExternalResource[];
  }>;
  errors: string[];
}

/**
 * Analyzes resources for duplicates and generates a report
 */
export function analyzeResourceDuplicates(
  resources: ExternalResource[]
): DedupeReport {
  const errors: string[] = [];
  const idMap = new Map<string, ExternalResource[]>();
  const urlMap = new Map<string, ExternalResource[]>();

  // Group by ID
  resources.forEach((resource) => {
    const existing = idMap.get(resource.id) || [];
    existing.push(resource);
    idMap.set(resource.id, existing);
  });

  // Group by normalized URL
  resources.forEach((resource) => {
    const normalized = normalizeUrl(resource.url);
    const existing = urlMap.get(normalized) || [];
    existing.push(resource);
    urlMap.set(normalized, existing);
  });

  // Find duplicate IDs
  const duplicateIds = Array.from(idMap.entries())
    .filter(([, resources]) => resources.length > 1)
    .map(([id, resources]) => ({
      id,
      count: resources.length,
      resources,
    }));

  // Find duplicate URLs
  const duplicateUrls = Array.from(urlMap.entries())
    .filter(([, resources]) => resources.length > 1)
    .map(([normalizedUrl, resources]) => ({
      url: resources[0].url,
      normalizedUrl,
      count: resources.length,
      resources,
      kept: resources[0], // Keep first
      dropped: resources.slice(1),
    }));

  // Generate errors for duplicates
  if (duplicateIds.length > 0) {
    errors.push(
      `Found ${duplicateIds.length} duplicate ID(s): ${duplicateIds.map((d) => d.id).join(", ")}`
    );
  }

  if (duplicateUrls.length > 0) {
    errors.push(
      `Found ${duplicateUrls.length} duplicate URL(s) after normalization`
    );
  }

  return {
    timestamp: new Date().toISOString(),
    totalResources: resources.length,
    uniqueResources: urlMap.size,
    duplicateIds,
    duplicateUrls,
    errors,
  };
}

/**
 * Deduplicates resources, keeping the first occurrence of each normalized URL
 */
export function dedupeResources(
  resources: ExternalResource[]
): ExternalResource[] {
  const seen = new Set<string>();
  const deduplicated: ExternalResource[] = [];

  resources.forEach((resource) => {
    const normalized = normalizeUrl(resource.url);
    if (!seen.has(normalized)) {
      seen.add(normalized);
      deduplicated.push(resource);
    }
  });

  return deduplicated;
}

/**
 * Checks if resources array has any duplicates
 */
export function hasDuplicates(resources: ExternalResource[]): boolean {
  const report = analyzeResourceDuplicates(resources);
  return report.duplicateIds.length > 0 || report.duplicateUrls.length > 0;
}
