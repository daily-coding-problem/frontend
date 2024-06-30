// components/PlansSection.tsx

import * as React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import EastIcon from '@mui/icons-material/East';
import LockIcon from '@mui/icons-material/Lock';

const PlansSection: React.FC = () => {
	return (
		<section id="plans" className="md:py-6">
			<div className="m-auto max-w-7xl p-4 md:px-20 md:py-6 text-center">
				<div
					className="inline mx-auto py-4 text-transparent decoration-clone bg-clip-text bg-gradient-to-br from-blue-200 via-indigo-400 to-indigo-900 text-4xl font-black text-center">
					Invest in yourself
				</div>
				<div className="text-4xl font-black mt-4">Pick the plan that works for you, cancel anytime.</div>
				<div className="md:flex md:flex-row py-2">
					<div className="md:w-1/3 w-full flex flex-col justify-center text-left md:pt-24 pt-4 md:mr-10">
						<div className="font-semibold">Features included in all plans</div>
						<div className="py-2 md:py-4 md:mr-3">
							Access to our online repository of questions and solutions you have received
						</div>
						<div className="py-2 md:py-4 md:mr-2">
							Receive weekly introductions for the curated curriculum, explaining the concepts in-depth
						</div>
						<div className="py-2 md:py-4 md:mr-2">
							Receive detailed solutions including big-O analysis to solidify your learning and teach you
							how to analyze time and space complexities
						</div>
						<div className="py-2 md:py-4 md:mr-2">
							Set what time of day to receive your daily questions and solutions
						</div>
					</div>
					<div className="md:w-2/3 w-full">
						<div className="pt-4 md:pt-24 flex md:flex-row flex-col justify-center">
							<PlanCard
								id="purchase"
								title="Annual"
								originalPrice="80/year"
								discountedPrice="40/year"
								features={[
									`All features in <strong class="text-white">Monthly</strong>`,
									`Save over <strong class="text-white">50%</strong>`,
									`<strong class="text-white">Renews</strong> automatically`,
									`<strong class="text-white">Cancel</strong> anytime`,
									`<strong class="text-white">No</strong> ads`,
								]}
								onClick={() => { /* Your onClick handler */
								}}
								saleText="Sale 50% off"
							/>
							<PlanCard
								title="Monthly"
								originalPrice="8/month"
								discountedPrice="7/month"
								features={[
									`Daily <strong class="text-black">problems</strong>`,
									`<strong class="text-black">Full</strong> solution the next day`,
									`<strong class="text-black">Renews</strong> automatically`,
									`<strong class="text-black">Cancel</strong> anytime`,
									`<strong class="text-black">No</strong> ads`,
								]}
								onClick={() => { /* Your onClick handler */
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

interface PlanCardProps {
	id?: string;
	title: string;
	originalPrice: string;
	discountedPrice: string;
	features: string[];
	onClick: () => void;
	saleText?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
											   id,
											   title,
											   originalPrice,
											   discountedPrice,
											   features,
											   onClick,
											   saleText
										   }) => (
	<div id={id} className={`md:w-1/2 my-4 md:my-0 p-8 text-center rounded-3xl shadow-xl ${saleText ? 'bg-gray-800 text-white border-white transform md:scale-125' : 'bg-white md:pl-16'}`}>
		<h1 className={`pt-2 font-semibold text-2xl ${saleText ? 'text-white' : 'text-black'}`}>{title}</h1>
		<p className="pt-2 tracking-wide line-through">
			<span className="text-xl text-gray-500 font-semibold">${originalPrice}</span>
		</p>
		<p className="pt-2 tracking-wide">
			<span className="text-gray-400 align-top">$ </span>
			<span className="text-3xl font-semibold">{discountedPrice.split(' ')[0]}</span>
			<span className="text-gray-400 font-medium">{discountedPrice.split(' ')[2]}</span>
		</p>
		<hr className={`mt-4 border-1 ${saleText ? 'border-gray-600' : ''}`} />
		<div className="pt-8">
			{features.map((feature, index) => (
				<p key={index} className="font-semibold text-gray-400 text-left pt-5">
					<DoneIcon className="align-middle" />
					<span className="pl-2" dangerouslySetInnerHTML={{__html: feature}} />
				</p>
			))}
			<button onClick={onClick} className="mt-5 w-full rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
				<div className="flex flex-row justify-center items-center">
					<span className="text-md">Choose Plan</span>
					<EastIcon className="pl-2 align-middle text-2xl"/>
				</div>
			</button>
			<div className="mt-2 flex flex-row gap-1 justify-center items-center">
				<LockIcon className="text-gray-400 text-[10px]" />
				{' '}
				<span className="text-[10px] font-semibold uppercase text-gray-400">Secure Checkout</span>
			</div>
		</div>
		{saleText && (
			<div className="absolute top-2 right-2">
				<p className="bg-blue-400 font-semibold px-4 py-1 rounded-full uppercase text-xs">{saleText}</p>
			</div>
		)}
	</div>
);

export default PlansSection;
