import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Aktuality } from "../texts/Aktuality"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAktuality(slug: string) {
  return Aktuality.find((aktualita) => aktualita.slug === slug)
}