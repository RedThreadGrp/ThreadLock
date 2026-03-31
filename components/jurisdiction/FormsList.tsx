import React from "react";

export interface CourtForm {
  name: string;
  url: string;
}

export interface FormsListProps {
  forms: CourtForm[];
}

export default function FormsList({ forms }: FormsListProps) {
  if (!forms || forms.length === 0) return null;

  return (
    <div className="bg-surface-dark-panel border border-border-dark rounded-2xl p-6 mb-8">
      <h2 className="text-lg font-bold text-foreground-dark mb-4">Official Court Forms</h2>
      <ul className="space-y-3">
        {forms.map((form) => (
          <li key={form.url}>
            <a
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:underline"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              {form.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
