import * as React from 'react';

const PremiumSection: React.FC = () => {
	return (
		<section className="md:py-3 md:h-full flex flex-col content-evenly items-center">
			<div className="m-auto max-w-7xl p-6 md:p-20">
				<div className="flex flex-col-reverse md:flex-row">
					<div className="flex md:justify-end w-full mr-12 md:w-1/2 -mt-5 relative">
						<div className="pb-4 md:pb-0">
							<img
								className="rounded-lg shadow-lg"
								src="/snippet.png"
								alt="Snippet"
							/>
						</div>
					</div>
					<div className="md:w-1/2 flex flex-col justify-center pb-10 md:pb-0">
						<h2 className="text-4xl font-black">
							Go premium and get solutions every day{' '}
							<span className="text-transparent decoration-clone bg-clip-text bg-gradient-to-br from-blue-300 to-indigo-500">
								and so much more!
  							</span>
						</h2>
						<p className="text-xl mt-4 border-b pb-4 border-gray-200">
							For each question you receive, you'll get access to a detailed solution. These solutions are clearly and concisely explained, designed to promote learning. You'll gain a better understanding of how to solve a new technical interview question each day.
						</p>
						<p className="py-2 text-gray-500 font-light">Just $7 / month. Cancel anytime.</p>
						<div className="mt-4">
							<button
								className="w-full rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								onClick={() => {
									window.location.href = '#plans';
								}}
							>
								Subscribe now
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PremiumSection;
