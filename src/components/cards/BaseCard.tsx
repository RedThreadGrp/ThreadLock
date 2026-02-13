// file: src/components/cards/BaseCard.tsx
// Reusable base card component with consistent hover effects

import React from 'react';
import Link from 'next/link';

type BaseCardProps = {
  href?: string;
  onClick?: () => void;
  size?: 'compact' | 'default' | 'large';
  className?: string;
  children: React.ReactNode;
};

export default function BaseCard({ 
  href, 
  onClick, 
  size = 'default',
  className = '',
  children 
}: BaseCardProps) {
  // Size-based styles
  const sizeClasses = {
    compact: 'rounded-2xl p-4',
    default: 'rounded-3xl p-6',
    large: 'rounded-3xl p-8',
  };

  // Common card styles with hover effects
  const baseClasses = `
    group relative 
    border border-border-dark 
    bg-surface-dark-panel 
    shadow-sm 
    hover:shadow-md 
    hover:-translate-y-0.5 
    hover:border-brand-orange/30 
    active:translate-y-0 
    active:scale-[0.99] 
    transition-all 
    duration-200 
    focus-visible:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-brand-orange/30
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {children}
      </button>
    );
  }

  // Otherwise render as div
  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}
