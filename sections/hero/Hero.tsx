import * as React from 'react';
import TextContent from './TextContent';
import FormContainer from './form/FormContainer';
import SubscriberSection from "./subscribers/SubscriberSection";

const Hero: React.FC = () => (
	<section className="md:py-12 md:h-full flex flex-col content-evenly items-center">
		<div className="m-auto max-w-7xl p-4 md:p-20">
			<div className="flex flex-col md:flex-row">
				<TextContent />
				<FormContainer />
			</div>
		</div>
		<div className="mt-10 bg-gray-50 w-full">
			<SubscriberSection />
		</div>
	</section>
);

export default Hero;
