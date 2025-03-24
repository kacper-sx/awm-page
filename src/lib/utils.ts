import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";



export const qsAll = <T extends string>(selector: T) => {
  const els = document.querySelectorAll(selector)
  return Array.from(els).filter(el => el instanceof HTMLElement)
} 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dqsAll = (selector: string) =>
  Array.from(document.querySelectorAll(selector)).filter(isHTMLElement);

export const isHTMLElement = (el: unknown): el is HTMLElement =>
  el instanceof HTMLElement;
