// file: src/lib/cx.ts
// Simple utility for merging class names

export function cx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
