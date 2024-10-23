import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail } from "lucide-react"

const Support: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<Card className="bg-white">
					<CardHeader>
						<CardTitle className="text-3xl font-bold">Support</CardTitle>
					</CardHeader>
					<CardContent className="prose max-w-none">
						<p className="text-gray-600 mb-6">
							If you're facing trouble logging in and accessing the materials, here are some troubleshooting steps:
						</p>

						<Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>Unable to sign in - "Signups not allowed" message</AccordionTrigger>
								<AccordionContent>
									Upon purchase, an activation email would have been sent to the email address you used to check out. You have to
									first activate your account by clicking on the activation link within the activation email. You will then be
									able to sign in from the login page for future sessions.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger>Didn&apos;t receive the activation/login email</AccordionTrigger>
								<AccordionContent>
									<ol className="list-decimal pl-5 space-y-2">
										<li><strong>Marked as spam</strong>: Check your spam inbox, it might have ended up there.</li>
										<li><strong>Inbox filtering</strong>: Ensure you do not have custom filter rules that affect which inbox the email lands in.</li>
										<li><strong>Typo in email address</strong>: You might have mistyped your email address in the checkout form. Send us an email mentioning the email address that should have received the activation/login email and we can help look into it.</li>
									</ol>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionTrigger>Clicking on the activation/login link does not sign you in</AccordionTrigger>
								<AccordionContent>
									<p>Some common reasons include:</p>
									<ol className="list-decimal pl-5 space-y-2">
										<li><strong>Link has expired</strong>: The initial activation link expires after 3 days. If you have not activated or logged in before the link expires, the link will cease to work. Reach out to us to get a new activation link.</li>
										<li><strong>Link has been invalidated by spam filters</strong>: Your inbox provider might be scanning the emails and their links to filter for spam and thus invalidating the single-use links in the email body. This has been a common issue if you use school emails (known examples include <code>northeastern.edu</code>). We can help you to change to another email address.</li>
										<li><strong>Browser extensions blocking</strong>: The site uses cookies for authentication. Make sure your browser extensions are not blocking access to cookies. To test if this is the cause, send yourself another link and open the link in incognito mode or another browser.</li>
										<li><strong>VPN blocking</strong>: Turn off VPN if it's running or use a VPN if you're not. Your Wi-Fi network or local ISP might be blocking certain websites we rely on.</li>
									</ol>
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<div className="mt-8 p-4 bg-indigo-50 rounded-lg flex items-center space-x-4">
							<Mail className="text-indigo-500 flex-shrink-0" />
							<p className="text-blue-700">
								If you are still facing issues, reach out to us at{' '}
								<a href="mailto:nicholas.adamou@outlook.com" className="font-medium hover:underline">
									nicholas.adamou@outlook.com
								</a>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Support;
