import * as React from 'react';
import SubscriberTitle from './SubscriberTitle';
import SubscriberLogos from './SubscriberLogos';

const SubscriberSection: React.FC = () => {
	return (
		<div className="pt-6 md:pt-24 md:block hidden">
			<SubscriberTitle />
			<SubscriberLogos />
		</div>
	);
};

export default SubscriberSection;
