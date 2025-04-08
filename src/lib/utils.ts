import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

export const focusInput = [
  "focus:ring-3 outline-none",
  "focus:ring-primary/20 focus:dark:ring-primary/30",
  "focus:border-primary",
  "transition-all duration-150 ease-initial",
];

export const focusInteractive = [
  "focus-visible:ring-3 outline-none",
  "focus-visible:ring-primary/20 focus-visible:dark:ring-primary/30",
  "focus-visible:border-primary",
  "transition-all duration-150 ease-initial",
];

export const focusRing = [
  "outline-offset-2 outline-0 focus-visible:outline-2",
  "outline-primary/50",
];
