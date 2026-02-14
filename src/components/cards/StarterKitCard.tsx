// file: src/components/cards/StarterKitCard.tsx
// Starter kit card component

import React from 'react';
import BaseCard from './BaseCard';
import CardBadge from './CardBadge';
import { InlineIconLabel, ClockIcon } from '@/src/components/ui';

type StarterKitCardProps = {
  title: string;
  description: string;
  whatYouGet: string[];
  estimatedTime: string;
  href: string;
};

export default function StarterKitCard({ 
  title, 
  description, 
  whatYouGet,
  estimatedTime,
  href 
}: StarterKitCardProps) {
  return (
    <BaseCard href={href} size="default">
      <div className="flex items-center justify-between mb-3">
        <CardBadge variant="orange">
          <InlineIconLabel icon={<ClockIcon />} className="gap-1.5">
            {estimatedTime}
          </InlineIconLabel>
        </CardBadge>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-dark leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="text-xs text-muted-dark">
        <p className="font-semibold mb-1">What you get:</p>
        <ul className="space-y-1">
          {whatYouGet.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-brand-orange shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </BaseCard>
  );
}
