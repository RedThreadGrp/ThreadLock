// src/components/BuildProvenance.tsx
// Displays build information for debugging deployment issues
// Shows commit SHA, build timestamp, and environment

import React from 'react';

interface BuildProvenanceProps {
  inline?: boolean;
}

export default function BuildProvenance({ inline = false }: BuildProvenanceProps) {
  const commitSha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 
                    process.env.VERCEL_GIT_COMMIT_SHA || 
                    'local-dev';
  
  const buildTimestamp = process.env.NEXT_PUBLIC_BUILD_TIMESTAMP || 
                         new Date().toISOString();
  
  const environment = process.env.NEXT_PUBLIC_VERCEL_ENV || 
                     process.env.VERCEL_ENV || 
                     'development';

  // Short SHA (first 7 chars)
  const shortSha = commitSha.substring(0, 7);

  // Format timestamp
  const formattedTime = new Date(buildTimestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  if (inline) {
    return (
      <span className="text-xs text-muted">
        Build: {shortSha} • {environment} • {formattedTime}
      </span>
    );
  }

  return (
    <div className="text-xs text-muted text-center py-2 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <span>Build: </span>
        <span className="font-mono">{shortSha}</span>
        <span className="mx-2">•</span>
        <span>{environment}</span>
        <span className="mx-2">•</span>
        <span>{formattedTime}</span>
      </div>
    </div>
  );
}
