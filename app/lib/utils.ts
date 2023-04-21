import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Aktuality } from "../texts/Aktuality"
import { sluzby } from '~/texts/SluzbyPreObcanov'
import { podlaOdvetvia } from '~/texts/PodlaOdvetvia'
import { Info } from '~/texts/Info'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAktuality(slug: string) {
  return Aktuality.find((aktualita) => aktualita.slug === slug)
}

export function getRodinnePravo(slug: string) {
  return sluzby.find((pravo) => pravo.slug === slug)
}

export function getPodlaOdvetvia(slug: string) {
  return podlaOdvetvia.find((odvetvie) => odvetvie.slug === slug)
}

export function getInfo(slug: string) {
  return Info.find((info) => info.slug === slug)
}