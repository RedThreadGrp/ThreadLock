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
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {idx > 0 && (
                <span className="text-slate-300 select-none" aria-hidden="true">›</span>
              )}
              {isLast ? (
                <span className="text-slate-700 font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-[#fb7a1e] transition-colors"
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
