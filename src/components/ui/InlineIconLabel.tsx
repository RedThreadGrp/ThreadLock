// file: src/components/ui/InlineIconLabel.tsx
// Reusable component for consistent icon-text alignment

import React from "react";
import { cx } from "@/src/lib/cx";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
};

/**
 * InlineIconLabel - Standard component for icon + text alignment
 * 
 * This component solves the common problem of misaligned icons and text by providing
 * a consistent layout primitive with proper vertical centering.
 * 
 * Key Features:
 * - Uses inline-flex items-center for proper vertical alignment
 * - Icon is constrained to fixed box (w-4 h-4 by default)
 * - leading-none ensures consistent vertical alignment
 * - No emoji - use SVG icons for predictable sizing
 * 
 * Usage:
 * ```tsx
 * // Basic usage
 * <InlineIconLabel icon={<ThumbsUpIcon />}>
 *   Yes
 * </InlineIconLabel>
 * 
 * // In a button
 * <button className="flex items-center">
 *   <InlineIconLabel icon={<ClockIcon />}>
 *     15 minutes
 *   </InlineIconLabel>
 * </button>
 * 
 * // With custom spacing
 * <InlineIconLabel icon={<CheckIcon />} className="gap-1.5">
 *   Completed
 * </InlineIconLabel>
 * 
 * // Larger icons for CTAs
 * <InlineIconLabel 
 *   icon={<ThumbsUpIcon className="w-5 h-5" />}
 *   iconClassName="w-5 h-5"
 * >
 *   Yes
 * </InlineIconLabel>
 * ```
 * 
 * Icon Sizing Standards:
 * - Default inline icons: w-4 h-4 (16px)
 * - Larger CTAs/buttons: w-5 h-5 (20px)
 * - Never use font-size-based emoji sizing for alignment
 */
export function InlineIconLabel({
  icon,
  children,
  className,
  iconClassName,
}: Props) {
  return (
    <span className={cx("inline-flex items-center gap-2", className)}>
      <span className={cx("flex items-center justify-center leading-none", iconClassName || "w-4 h-4")}>
        {icon}
      </span>
      <span className="leading-tight">{children}</span>
    </span>
  );
}
