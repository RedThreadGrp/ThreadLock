import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface JurisdictionBreadcrumbProps {
  crumbs: BreadcrumbItem[];
}

export default function JurisdictionBreadcrumb({ crumbs }: JurisdictionBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-dark">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {idx > 0 && (
                <span className="text-border-dark select-none" aria-hidden="true">›</span>
              )}
              {isLast ? (
                <span className="text-foreground-dark font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-brand-orange transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
