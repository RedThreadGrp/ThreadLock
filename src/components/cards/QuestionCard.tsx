// file: src/components/cards/QuestionCard.tsx
// Question card component

import React from 'react';
import BaseCard from './BaseCard';

type QuestionCardProps = {
  question: string;
  href: string;
};

export default function QuestionCard({ 
  question, 
  href 
}: QuestionCardProps) {
  return (
    <BaseCard href={href} size="compact" className="flex items-start gap-3">
      <span className="text-brand-orange text-xl shrink-0">?</span>
      <span className="text-sm font-medium text-foreground-dark group-hover:text-brand-orange transition-colors">
        {question}
      </span>
    </BaseCard>
  );
}
