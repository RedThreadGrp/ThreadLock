// file: src/components/cards/TopicCard.tsx
// Topic card component

import React from 'react';
import BaseCard from './BaseCard';

type TopicCardProps = {
  title: string;
  promise: string;
  resourceCount: number;
  href: string;
};

export default function TopicCard({ 
  title, 
  promise, 
  resourceCount,
  href 
}: TopicCardProps) {
  return (
    <BaseCard href={href} size="default">
      <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-dark leading-relaxed mb-4">
        {promise}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-dark">
          {resourceCount} {resourceCount === 1 ? 'resource' : 'resources'}
        </span>
        <span className="text-sm text-brand-orange group-hover:text-brand-navy transition-colors font-medium">
          Explore →
        </span>
      </div>
    </BaseCard>
  );
}
