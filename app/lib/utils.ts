import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Converts a file size in bytes to a human-readable string with appropriate units.
 *
 * @param bytes - The file size in bytes.
 * @param decimals - Number of decimal places to include (default is 2).
 * @returns The formatted file size string (e.g., '1.23 MB').
 */
export const formatSize = (bytes: number, decimals = 2): string => {
	if (bytes === 0) return '0 Bytes'

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const generateUUID = () => crypto.randomUUID()

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}
