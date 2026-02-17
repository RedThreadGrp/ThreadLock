// file: src/components/resources/SectionCard.tsx
// Shared section card component with consistent styling
// Used for related content, resource lists, etc.

import * as React from "react";

export type CardSize = "small" | "medium" | "large";
export type CardRadius = "rounded-2xl" | "rounded-3xl";

export interface SectionCardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  
  /**
   * Border radius - standardize on rounded-3xl for consistency
   */
  radius?: CardRadius;
  
  /**
   * Whether to show hover effects (glow overlay, translate)
   */
  hover?: boolean;
  
  /**
   * Additional className for customization
   */
  className?: string;
  
  /**
   * Optional click handler - makes card interactive
   */
  onClick?: () => void;
  
  /**
   * Padding size
   */
  padding?: CardSize;
}

const PADDING_CLASSES: Record<CardSize, string> = {
  small: "p-4",
  medium: "p-6",
  large: "p-8",
};

/**
 * SectionCard - Unified card component for section content
 * 
 * Features:
 * - Consistent rounded-3xl border radius
 * - Optional orange glow hover effect
 * - Dark surface with subtle border
 * 
 * Usage:
 * ```tsx
 * <SectionCard hover>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </SectionCard>
 * ```
 */
export function SectionCard({
  children,
  radius = "rounded-3xl",
  hover = false,
  className = "",
  onClick,
  padding = "medium",
}: SectionCardProps) {
  const paddingClass = PADDING_CLASSES[padding];
  
  const baseClasses = `
    ${radius}
    border border-border-dark
    bg-surface-dark-panel
    shadow-sm
    ${paddingClass}
    ${hover ? "hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/30 transition-all" : ""}
    ${onClick ? "cursor-pointer" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");

  return (
    <div
      className={`group relative ${baseClasses}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {hover && (
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity orange-glow-overlay pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * SectionCardGrid - Container for grid of section cards
 * 
 * Usage:
 * ```tsx
 * <SectionCardGrid columns={3}>
 *   <SectionCard>...</SectionCard>
 *   <SectionCard>...</SectionCard>
 * </SectionCardGrid>
 * ```
 */
export interface SectionCardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
}

export function SectionCardGrid({
  children,
  columns = 2,
  className = "",
}: SectionCardGridProps) {
  const gridClasses = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <div className={`grid gap-4 ${gridClasses} ${className}`}>
      {children}
    </div>
  );
}
