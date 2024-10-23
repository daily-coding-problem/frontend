import * as React from 'react';
import SmoothScrollLink from "@components/SmoothScrollLink";

const SampleSection: React.FC = () => {
	return (
		<section className="md:py-6">
			<div className="m-auto p-4 md:py-6 md:px-20 text-center">
				<div
					className="inline py-4 text-transparent decoration-clone bg-clip-text bg-gradient-to-br from-indigo-200 to-blue-400 text-4xl font-black text-center">
					Give it a try
				</div>
				<div className="text-4xl font-black text-center">Carefully crafted questions</div>
				<div className="flex flex-col md:flex-row justify-center pb-2 md:pb-0">
					<InfoCard number={1} title="Real sample">
						You will get an email with the solution for free.
					</InfoCard>
					<InfoCard number={2} title="Sample solution">
						Click the link to see the solution to this problem.
					</InfoCard>
					<InfoCard number={3} title="Solutions">
						<SmoothScrollLink href="#plans" text="Paying customers" />{' '}
						will receive solutions to the prior day's question.
					</InfoCard>
				</div>
				<div className="flex flex-col-reverse md:flex-row text-left justify-center py-0 md:py-5">
					<div className="md:mx-10 w-full sm:w-[75%] flex flex-col justify-center pb-10 md:pb-0">
						<iframe
							id="sample-iframe"
							width="100%"
							height="700"
							className="card shadow-lg rounded-lg my-5"
							src={`${process.env.MAIL_SERVICE}/api/v1/mail/problem/random`}
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

interface InfoCardProps {
	title: string;
	number: number;
	children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, number, children }) => (
	<div className="px-6 md:py-4 md:my-4 py-2 my-2 rounded-lg text-left">
		<div className="flex items-center font-black text-lg mb-2">
      <span
		  className="inline-flex items-center justify-center rounded-full bg-gray-50 w-8 h-8 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
        {number}
      </span>
			{title}
		</div>
		{children}
	</div>
);

export default SampleSection;
