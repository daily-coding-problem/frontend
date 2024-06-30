import * as React from 'react';

interface DescriptionProps {
	text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
	return (
		<div className="md:px-2 md:py-4">
			{text}
		</div>
	);
};

export default Description;
