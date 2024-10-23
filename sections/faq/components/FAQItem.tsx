import React, { useState } from 'react';

interface FAQItemProps {
	question: string;
	answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div>
			<button
				className="w-full font-bold border-b border-gray-400 py-3 flex justify-between items-center mt-4"
				onClick={toggleOpen}
			>
				<span className="text-left mr-4">{question}</span>
			</button>
			{isOpen && (
				<div className="text-gray-700 whitespace-pre-wrap text-left text-sm md:mt-6 mt-2 md:mx-12">
					{answer}
				</div>
			)}
		</div>
	);
};

export default FAQItem;
