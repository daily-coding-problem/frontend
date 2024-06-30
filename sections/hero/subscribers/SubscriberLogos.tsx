import * as React from 'react';
import Facebook from "./logos/Facebook";
import Square from "./logos/Square";
import Uber from "./logos/Uber";
import Microsoft from "./logos/Microsoft";


const SubscriberLogos: React.FC = () => {
	return (
		<div className="flex py-6 justify-around flex-wrap items-center">
			<Facebook />
			<Square />
			<Uber />
			<Microsoft />
		</div>
	);
};

export default SubscriberLogos;
