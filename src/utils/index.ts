import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const open_link = (url: string) => window.open(url, "_blank");

function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
export { open_link , cn};

