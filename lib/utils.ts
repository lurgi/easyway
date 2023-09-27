import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import curGeoStore from "./curGeoStore";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
