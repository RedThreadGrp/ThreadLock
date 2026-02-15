// src/components/BuildProvenance.tsx
// Displays build information for debugging deployment issues
// Shows commit SHA, build timestamp, and environment

import React from 'react';
import { getBuildInfo, logBuildInfo } from '@/src/lib/buildInfo';

interface BuildProvenanceProps {
  inline?: boolean;
}

export default function BuildProvenance({ inline = false }: BuildProvenanceProps) {
  // Log build info to console on mount
  React.useEffect(() => {
    logBuildInfo();
  }, []);

  const buildInfo = getBuildInfo();

  if (inline) {
    return (
      <span className="text-xs text-muted">
        Build: {buildInfo.shortSha} • {buildInfo.env} • {buildInfo.formattedTime}
      </span>
    );
  }

  return (
    <div className="text-xs text-muted text-center py-2 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <span>Build: </span>
        <span className="font-mono">{buildInfo.shortSha}</span>
        <span className="mx-2">•</span>
        <span>{buildInfo.env}</span>
        <span className="mx-2">•</span>
        <span>{buildInfo.formattedTime}</span>
      </div>
    </div>
  );
}
