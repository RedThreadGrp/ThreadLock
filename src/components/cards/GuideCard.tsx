// file: src/components/cards/GuideCard.tsx
// Guide card component

import React from 'react';
import BaseCard from './BaseCard';
import CardTag from './CardTag';

type GuideCardProps = {
  title: string;
  summary: string;
  tags: string[];
  updated?: string;
  href: string;
  featured?: boolean;
};

export default function GuideCard({ 
  title, 
  summary, 
  tags,
  updated,
  href,
  featured = false
}: GuideCardProps) {
  const size = featured ? 'large' : 'default';
  
  return (
    <BaseCard href={href} size={size}>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <CardTag key={tag} variant={featured ? 'orange' : 'dark'}>
              {tag}
            </CardTag>
          ))}
        </div>
      )}
      
      <h3 className={`font-semibold text-foreground-dark mb-2 group-hover:text-brand-orange transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
        {title}
      </h3>
      
      <p className="text-sm text-muted-dark leading-relaxed mb-3">
        {summary}
      </p>
      
      {updated && (
        <p className="text-xs text-muted-dark">
          Updated {updated}
        </p>
      )}
    </BaseCard>
  );
}
