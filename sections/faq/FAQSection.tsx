import React from 'react';
import FAQItem from './components/FAQItem';

const faqs = [
	{
		question: 'What do I get as a pro subscriber?',
		answer: (
			<>
				<span className="block mb-1">As a premium subscriber you receive:</span>
				<ol>
					<li>1. Daily interview questions</li>
					<li>2. Daily interview solutions in Python which include big-O analysis of code</li>
					<li>3. Weekly emails to introduce each topic in the curriculum</li>
					<li>4. Access to review past questions, solutions, and weekly intros in the portal</li>
					<li>5. Ability to change the time you receive your emails</li>
				</ol>
			</>
		),
	},
	{
		question: "Will I receive solutions to the problems I've already seen?",
		answer: (
			<>
				If you decide to join the Monthly plan after starting our program, you'll receive solutions for the last 30 problems you've received. If you decide to join the Annual plan after starting our program, you'll receive instant access to all content, including all solutions to every question you've ever received.
			</>
		),
	},
	{
		question: 'If I need to take a break am I able to?',
		answer: (
			<>
				Yes! If you need to take a break, you can do so by snoozing your subscription for up to 4 weeks at a time. This can be done by logging into our portal and navigating to the Settings page.
			</>
		),
	},
	{
		question: 'What languages do you support?',
		answer: (
			<>
				Currently, all of our solutions are written in Python. We are actively working on expanding to support additional languages.
			</>
		),
	},
	{
		question: 'How can I cancel my subscription?',
		answer: (
			<>
				You can cancel your subscription at any time by clicking the unsubscribe button at the bottom of any email or by logging into our portal and navigating to the Settings page.
			</>
		),
	},
	{
		question: "I'm having trouble figuring out a solution.",
		answer: (
			<>
				That's normal; these problems are difficult! Some things that might help you solve the problem are: trying to model the problem in real life and systematically going through different data structures you might be able to leverage for the question at hand.
			</>
		),
	},
	{
		question: "My question isn't in this list!",
		answer: (
			<>
				Please reach out to us at <a href="mailto:nicholas.adamou@outlook.com" className="underline text-indigo-600 hover:text-indigo-800 transition-colors duration-200">nicholas.adamou@outlook.com</a> with your question, and we'll get back to you shortly.
			</>
		),
	},
];

const FAQSection: React.FC = () => {
	return (
		<section className="md:py-6 py-2">
			<div className="m-auto max-w-4xl p-4 md:px-20 md:py-6 text-center">
				<div className="inline mx-auto py-4 text-transparent decoration-clone bg-clip-text bg-gradient-to-br from-blue-200 via-indigo-400 to-indigo-900 md:text-4xl text-4xl font-black text-center">
					Questions?
				</div>
				<div className="text-4xl font-black mt-4">Frequently asked, fully answered.</div>
				<div className="container mx-auto px-2 py-2">
					<div className="leading-loose text-lg mt-6">
						{faqs.map((faq, index) => (
							<FAQItem key={index} question={faq.question} answer={faq.answer} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
