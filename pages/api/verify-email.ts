import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
	const { email } = await req.json();

	let ip;
	if (process.env.NODE_ENV !== 'production') {
		console.log('ZeroBounce API Sandbox Mode enabled');

		// ZeroBounce API Sandbox Mode (v2)
		// See: https://www.zerobounce.net/docs/email-validation-api-quickstart/#sandbox_mode__v2__

		ip = '99.110.204.1'; // Using this IP address will prevent the API from consuming credits

		// Make sure the email is one of the valid test emails
		const testEmails = [
			'disposable@example.com',
			'invalid@example.com',
			'valid@example.com',
			'toxic@example.com',
			'donotmail@example.com',
			'spamtrap@example.com',
			'abuse@example.com',
			'unknown@example.com',
			'catch_all@example.com',
			'antispam_system@example.com',
			'does_not_accept_mail@example.com',
			'exception_occurred@example.com',
			'failed_smtp_connection@example.com',
			'failed_syntax_check@example.com',
			'forcible_disconnect@example.com',
			'global_suppression@example.com',
			'greylisted@example.com',
			'leading_period_removed@example.com',
			'mail_server_did_not_respond@example.com',
			'mail_server_temporary_error@example.com',
			'mailbox_quota_exceeded@example.com',
			'mailbox_not_found@example.com',
			'no_dns_entries@example.com',
			'possible_trap@example.com',
			'possible_typo@example.com',
			'role_based@example.com',
			'timeout_exceeded@example.com',
			'unroutable_ip_address@example.com',
			'free_email@example.com',
			'role_based_catch_all@example.com'
		];

		if (!testEmails.includes(email)) {
			console.error(`Email ${email} is not a valid test email`);
			return NextResponse.json({ isValid: false }, { status: 400 });
		}
	}

	try {
		const response = await fetch(`https://api.zerobounce.net/v2/validate?api_key=${process.env.ZEROBOUNCE_API_KEY}&email=${encodeURIComponent(email)}&ip_address=${encodeURIComponent(ip || '')}`);
		const data = await response.json();

		const isValid = data.status === 'valid' && data.sub_status !== 'disposable';

		if (isValid) {
			console.log(`Email ${email} is valid`);
			return NextResponse.json({ isValid: true });
		} else {
			console.error(`Email ${email} is invalid`);
			return NextResponse.json({ isValid: false }, { status: 400 });
		}
	} catch (error) {
		console.error('Error verifying email:', error);
		return NextResponse.json({ message: 'Error verifying email' }, { status: 500 });
	}
}
