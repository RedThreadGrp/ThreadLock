// file: src/components/ui/icons.tsx
// SVG icon components with consistent sizing

import React from "react";

export type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export function ThumbsUpIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <path d="M7 22V11M2 13v6c0 1.1.9 2 2 2h2.4c.5 0 1-.2 1.4-.6l8-8c.6-.6.9-1.4.9-2.2V9c0-1.1-.9-2-2-2h-4.2c-.5 0-1-.3-1.2-.7L7.7 3.1C7.5 2.7 7.1 2.5 6.7 2.4 5.7 2.1 4.8 2.8 4.8 3.9v3.4c0 .7-.3 1.4-.8 1.8L2.6 10.4c-.4.3-.6.8-.6 1.3V13z" />
    </svg>
  );
}

export function ThumbsDownIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <path d="M17 2v11m5-2v-6c0-1.1-.9-2-2-2h-2.4c-.5 0-1 .2-1.4.6l-8 8c-.6.6-.9 1.4-.9 2.2v1.2c0 1.1.9 2 2 2h4.2c.5 0 1 .3 1.2.7l1.6 3.2c.2.4.6.6 1 .7 1 .3 1.9-.4 1.9-1.5v-3.4c0-.7.3-1.4.8-1.8l1.4-1.3c.4-.3.6-.8.6-1.3V11z" />
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
