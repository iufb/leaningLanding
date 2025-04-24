
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const fileUrl = "https://storage.abu.edu.kz/abu-obuchaushimsya/"
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
