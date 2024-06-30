import * as React from 'react';

interface CardProps {
	week: {
		id: number;
		week: string;
		topic: string;
		color: string;
	};
}

const Card: React.FC<CardProps> = ({ week }) => {
	return (
		<div id={String(week.id)} className={`rounded-lg shadow-lg p-5 ${week.color} animate-fadeIn`}>
			<div className="px-2 py-1">
				<div className="title-tease">{week.week}</div>
				<div className="font-semibold">{week.topic}</div>
			</div>
		</div>
	);
};

export default Card;
