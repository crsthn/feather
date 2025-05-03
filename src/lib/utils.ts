import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

export const focusInput =
  'outline-none ring-primary/20 dark:ring-primary/30 transition-all focus:ring-3 focus:border-primary data-invalid:focus:border-primary';

export const focusInteractive =
  'outline-none ring-primary/20 dark:ring-primary/30 transition-all focus-visible:ring-3 focus-visible:border-primary';

export const focusRing =
  'outline-none ring-primary/50 transition-all focus-visible:ring-3';
