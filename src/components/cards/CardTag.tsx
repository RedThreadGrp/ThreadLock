// file: src/components/cards/CardTag.tsx
// Reusable tag component for cards

import React from 'react';

type CardTagProps = {
  variant?: 'orange' | 'dark';
  children: React.ReactNode;
  className?: string;
};

export default function CardTag({ 
  variant = 'dark',
  children,
  className = ''
}: CardTagProps) {
  const variantClasses = {
    orange: 'bg-brand-orange/10 text-brand-orange',
    dark: 'border border-border-dark bg-surface-dark text-muted-dark',
  };

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
