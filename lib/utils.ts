import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

const prettyPrint = (name: string) => {
	return name
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (char) => char.toUpperCase());
}

const verifyEmail = async (email: string) => {
	try {
		const response = await fetch('/api/verify-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		});

		if (response.ok) {
			const { isValid } = await response.json();
			return isValid;
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
};

export {
	prettyPrint,
	verifyEmail
};
