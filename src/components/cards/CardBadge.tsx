// file: src/components/cards/CardBadge.tsx
// Reusable badge component for cards

import React from 'react';

type CardBadgeProps = {
  variant?: 'orange' | 'dark';
  children: React.ReactNode;
  className?: string;
};

export default function CardBadge({ 
  variant = 'orange',
  children,
  className = ''
}: CardBadgeProps) {
  const variantClasses = {
    orange: 'border border-brand-orange/30 bg-brand-orange/10 text-brand-orange',
    dark: 'border border-border-dark bg-surface-dark text-muted-dark',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
