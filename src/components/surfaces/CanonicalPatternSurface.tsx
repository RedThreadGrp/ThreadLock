import React from 'react';

interface CanonicalPatternSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * CanonicalPatternSurface
 * 
 * A safe primitive component that enforces the canonical background pattern.
 * Ensures transparent background and consistent text defaults.
 * 
 * Use this wrapper for pages/sections that should display the canonical
 * login pattern without introducing local background overrides.
 */
export function CanonicalPatternSurface({ 
  children, 
  className = '' 
}: CanonicalPatternSurfaceProps) {
  return (
    <div 
      className={`bg-transparent min-h-screen ${className}`}
      style={{ color: 'var(--tl-text-default)' }}
    >
      {children}
    </div>
  );
}
