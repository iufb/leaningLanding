
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const fileUrl = "https://storage.abu.edu.kz/abu-obuchaushimsya/"
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function insertBeforeExtension(path, insert) {
    const lastDot = path.lastIndexOf(".");
    if (lastDot === -1) return path + insert; // no extension

    return path.slice(0, lastDot) + insert + path.slice(lastDot);
}
