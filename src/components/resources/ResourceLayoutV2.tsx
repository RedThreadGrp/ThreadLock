// file: src/components/resources/ResourceLayoutV2.tsx
// Unified V2 layout primitive for all resource content types
// Enforces consistent spacing, max-width, and semantic HTML structure

import * as React from "react";

export type MaxWidthSize = "narrow" | "medium" | "wide";

export interface ResourceLayoutV2Props {
  /**
   * Main content to display in the article area
   */
  children: React.ReactNode;
  
  /**
   * Optional sidebar content (typically short answer, TOC, etc.)
   * When provided, creates 2-column layout (4/8 split on lg+ screens)
   */
  sidebar?: React.ReactNode;
  
  /**
   * Maximum width constraint
   * - narrow: max-w-4xl (768px) - for simple articles
   * - medium: max-w-5xl (896px) - default, for Q&A with sidebar
   * - wide: max-w-6xl (1152px) - for complex topics with grids
   */
  maxWidth?: MaxWidthSize;
  
  /**
   * Renderer identifier for tracking and testing
   * Should match content version (e.g., "resourceQA-v2", "topic-v2")
   */
  dataRenderer: string;
  
  /**
   * Optional header content (title, breadcrumbs, etc.)
   * Rendered before the main grid/article area
   */
  header?: React.ReactNode;
  
  /**
   * Include top padding for fixed header offset
   * Default: true (pt-36 for main content, pt-14 for error pages)
   */
  includeTopPadding?: boolean;
}

const MAX_WIDTH_CLASSES: Record<MaxWidthSize, string> = {
  narrow: "max-w-4xl",
  medium: "max-w-5xl",
  wide: "max-w-6xl",
};

/**
 * ResourceLayoutV2 - Single layout primitive for all V2 resource content
 * 
 * Usage:
 * 
 * ```tsx
 * // Simple single-column layout
 * <ResourceLayoutV2 dataRenderer="resource-v2">
 *   <Section1 />
 *   <Section2 />
 * </ResourceLayoutV2>
 * 
 * // 2-column with sidebar
 * <ResourceLayoutV2 
 *   dataRenderer="resourceQA-v2"
 *   sidebar={<ShortAnswer />}
 * >
 *   <Section1 />
 *   <Section2 />
 * </ResourceLayoutV2>
 * ```
 */
export function ResourceLayoutV2({
  children,
  sidebar,
  maxWidth = "medium",
  dataRenderer,
  header,
  includeTopPadding = true,
}: ResourceLayoutV2Props) {
  const maxWidthClass = MAX_WIDTH_CLASSES[maxWidth];
  const topPaddingClass = includeTopPadding ? "pt-36" : "";

  return (
    <main
      className={`mx-auto w-full ${maxWidthClass} px-4 ${topPaddingClass} pb-16`}
      data-renderer={dataRenderer}
    >
      {header && <div className="mb-8">{header}</div>}
      
      {sidebar ? (
        // 2-column layout with sidebar
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-6">
            {sidebar}
          </aside>
          <article className="lg:col-span-8 space-y-10">
            {children}
          </article>
        </div>
      ) : (
        // Single column layout
        <article className="space-y-10">
          {children}
        </article>
      )}
    </main>
  );
}
