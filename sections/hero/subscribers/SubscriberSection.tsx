import * as React from 'react';
import SubscriberTitle from './SubscriberTitle';
import SubscriberLogos from './SubscriberLogos';

const SubscriberSection: React.FC = () => {
	return (
		<div className="pt-10 md:block hidden">
			<SubscriberTitle />
			<div className="max-w-3xl mx-auto px-4">
				<SubscriberLogos />
			</div>
		</div>
	);
};

export default SubscriberSection;
