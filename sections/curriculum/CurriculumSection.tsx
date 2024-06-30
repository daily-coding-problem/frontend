import * as React from 'react';
import Title from './Title';
import Description from './Description';
import Card from './Card';

const CurriculumSection: React.FC = () => {
	return (
		<section className="md:py-6">
			<div className="m-auto max-w-7xl p-4 md:px-20 md:py-6 text-center">
				<Title />
				<div className="text-5xl font-black text-center">Expertly Curated</div>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-2 py-6 text-left">
					<Description text="Master the most commonly asked interview subjects by tackling one pattern at a time in a logical sequence. Begin with simpler topics and gradually move to more complex ones to establish a strong foundation." />
					<Description text="Complete our structured twelve-week curriculum before tackling randomly selected questions, and learn how to solve the most common questions asked by top companies." />
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-6 text-left">
					{weeks.map((week) => (
						<Card key={week.id} week={week} />
					))}
				</div>
			</div>
		</section>
	);
};

const weeks = [
	{ id: 1, week: 'Week 1', topic: 'Strings', color: 'bg-green-200' },
	{ id: 2, week: 'Week 2', topic: 'Hash Maps', color: 'bg-green-200' },
	{ id: 3, week: 'Week 3', topic: 'Linked Lists', color: 'bg-green-200' },
	{ id: 4, week: 'Week 4', topic: 'Stacks & Queues', color: 'bg-yellow-200' },
	{ id: 5, week: 'Week 5', topic: 'Trees', color: 'bg-yellow-200' },
	{ id: 6, week: 'Week 6', topic: 'Breadth-first Search', color: 'bg-yellow-200' },
	{ id: 7, week: 'Week 7', topic: 'Depth-first Search', color: 'bg-yellow-200' },
	{ id: 8, week: 'Week 8', topic: 'Backtracking', color: 'bg-red-200' },
	{ id: 9, week: 'Week 9', topic: 'Greedy Algorithms', color: 'bg-red-200' },
	{ id: 10, week: 'Week 10', topic: 'Memoization', color: 'bg-red-200' },
	{ id: 11, week: 'Week 11', topic: 'Dynamic Programming', color: 'bg-red-200' },
	{ id: 12, week: 'Week 12', topic: 'Advanced Topics', color: 'bg-red-200' },
];

export default CurriculumSection;
