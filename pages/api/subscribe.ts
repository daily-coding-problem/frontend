// TODO: Use Firebase to store user data

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).end();
	}

	const { email, timeZone }: { email: string; timeZone: string } = req.body;

	try {
		console.info(`User subscribed: ${email}`);

		const response = await fetch(`${process.env.API_SERVICE}/api/v1/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				timeZone
			}),
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`Failed to save user: ${errorText}`);
			return res.status(response.status).json({ error: errorText });
		}

		res.json({ success: true });
	} catch (error) {
		console.error(`Error processing subscription: ${(error as Error).message}`);
		res.status(500).json({ error: (error as Error).message });
	}
}

