import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/* bujte hobe ?? purota */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
