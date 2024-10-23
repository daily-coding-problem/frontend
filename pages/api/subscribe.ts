import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
	const { email, timeZone }: { email: string; timeZone: string } = await req.json();

	try {
		console.info(`User subscribed: ${email}`);

		const response = await fetch(`${process.env.API_SERVICE}/api/v1/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				timeZone,
			}),
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`Failed to save user: ${errorText}`);
			return NextResponse.json({ error: errorText }, { status: response.status });
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(`Error processing subscription: ${(error as Error).message}`);
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}
