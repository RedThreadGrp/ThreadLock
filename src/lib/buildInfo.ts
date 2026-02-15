// src/lib/buildInfo.ts
// Centralized build information utilities

export interface BuildInfo {
  sha: string;
  shortSha: string;
  env: string;
  timestamp: string;
  formattedTime: string;
}

export function getBuildInfo(): BuildInfo {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'local-dev';
  const timestamp = process.env.NEXT_PUBLIC_BUILD_TIMESTAMP || new Date().toISOString();
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV || 'development';

  const shortSha = sha.substring(0, 7);
  
  const formattedTime = new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return {
    sha,
    shortSha,
    env,
    timestamp,
    formattedTime
  };
}

export function logBuildInfo(): void {
  if (typeof window === "undefined") return; // Server-side, skip
  if ("__BUILD_INFO_LOGGED__" in window) return; // Already logged
  
  (window as any).__BUILD_INFO_LOGGED__ = true;
  const info = getBuildInfo();
  console.info("[build]", {
    sha: info.shortSha,
    env: info.env,
    timestamp: info.timestamp
  });
}
