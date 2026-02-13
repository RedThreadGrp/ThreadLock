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

// Size-based styles defined outside component to avoid recreation on each render
const SIZE_CLASSES = {
  compact: 'rounded-2xl p-4',
  default: 'rounded-3xl p-6',
  large: 'rounded-3xl p-8',
};

// Base card styles that are always applied
const BASE_CARD_CLASSES = `
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
`.trim().replace(/\s+/g, ' ');

export default function BaseCard({ 
  href, 
  onClick, 
  size = 'default',
  className = '',
  children 
}: BaseCardProps) {
  const classes = `${BASE_CARD_CLASSES} ${SIZE_CLASSES[size]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  // Otherwise render as div
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
