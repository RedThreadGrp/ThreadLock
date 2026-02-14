// file: src/components/ui/InlineIconLabel.tsx
// Reusable component for consistent icon-text alignment

import React from "react";
import { cx } from "@/lib/cx";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
};

/**
 * InlineIconLabel - Standard component for icon + text alignment
 * 
 * Key Features:
 * - Uses inline-flex items-center for proper vertical alignment
 * - Icon is constrained to fixed box (w-4 h-4 by default)
 * - leading-none ensures consistent vertical alignment
 * - No emoji - use SVG icons for predictable sizing
 * 
 * Usage:
 * ```tsx
 * <InlineIconLabel icon={<ThumbsUpIcon />}>
 *   Yes
 * </InlineIconLabel>
 * ```
 */
export function InlineIconLabel({
  icon,
  children,
  className,
  iconClassName,
}: Props) {
  return (
    <span className={cx("inline-flex items-center gap-2", className)}>
      <span className={cx("flex items-center justify-center w-4 h-4 leading-none", iconClassName)}>
        {icon}
      </span>
      <span className="leading-none">{children}</span>
    </span>
  );
}
