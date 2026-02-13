// file: src/components/cards/ResourceCard.tsx
// Resource card component

import React from 'react';
import BaseCard from './BaseCard';
import CardBadge from './CardBadge';

type ResourceCardProps = {
  title: string;
  excerpt: string;
  tag: string;
  readTime?: string;
  href: string;
};

export default function ResourceCard({ 
  title, 
  excerpt, 
  tag, 
  readTime,
  href 
}: ResourceCardProps) {
  return (
    <BaseCard href={href} size="default">
      <div className="flex items-start justify-between gap-2 mb-3">
        <CardBadge variant="orange">{tag}</CardBadge>
        {readTime && (
          <span className="text-xs text-muted-dark">{readTime}</span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-dark leading-relaxed">
        {excerpt}
      </p>
    </BaseCard>
  );
}
