// file: src/components/StandardDisclaimer.tsx
// Standard disclaimer component for Resources pages
// ThreadLock marketing standards: conservative claims, clear disclaimer posture

import React from "react";

export default function StandardDisclaimer() {
  return (
    <div className="mt-16 rounded-3xl border border-border-dark bg-surface-dark-panel p-8 text-center">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-sm font-semibold text-foreground-dark mb-3">
          Important Legal Disclaimer
        </h3>
        <p className="text-sm text-muted-dark leading-relaxed">
          ThreadLock is not a law firm and does not provide legal advice. These
          resources are provided for general information only. Court rules and
          procedures vary by location; verify requirements with your local court
          or a licensed attorney. External links are provided for convenience and
          do not constitute an endorsement.
        </p>
      </div>
    </div>
  );
}
