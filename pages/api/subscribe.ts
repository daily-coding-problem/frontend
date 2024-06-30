// TODO: Use Firebase to store user data

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method != 'POST') {
		return res.status(405).end();
	}

	const { email }: { email: string; timeZone: string } = req.body;

	try {
		console.info(`User subscribed: ${email}`);
		res.json({ success: true });
	} catch (error) {
		console.error(`Error processing subscription: ${(error as Error).message}`);
		res.status(500).json({ error: (error as Error).message });
	}
}
