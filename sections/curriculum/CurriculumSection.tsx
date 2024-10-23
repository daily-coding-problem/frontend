import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CurriculumSection: React.FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-16 md:max-w-[75vw] max-w-full">
				<h2 className="text-4xl font-black text-center mb-2 bg-gradient-to-br from-green-300 via-yellow-200 to-red-300 bg-clip-text text-transparent decoration-clone">Curriculum</h2>
				<h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Expertly Curated</h3>
				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<Description
						text="Master the most commonly asked interview subjects by tackling one pattern at a time in a logical sequence. Begin with simpler topics and gradually move to more complex ones to establish a strong foundation."
					/>
					<Description
						text="Complete our structured twelve-week curriculum before tackling randomly selected questions, and learn how to solve the most common questions asked by top companies."
					/>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{weeks.map((week) => (
						<WeekCard key={week.id} week={week} />
					))}
				</div>
			</div>
		</section>
	)
}

const Description: React.FC<{ text: string }> = ({ text }) => {
	return (
		<p className="text-gray-700 leading-relaxed">{text}</p>
	)
}

interface WeekCardProps {
	week: {
		id: number
		week: string
		topic: string
		color: 'easy' | 'medium' | 'hard'
	}
}

const WeekCard: React.FC<WeekCardProps> = ({ week }) => {
	const colorClasses = {
		easy: 'bg-indigo-100 text-indigo-800',
		medium: 'bg-indigo-200 text-indigo-800',
		hard: 'bg-indigo-300 text-indigo-900'
	}

	return (
		<Card className="bg-gray-50 overflow-hidden transition-all duration-300 hover:shadow-lg">
			<CardContent className="p-6">
				<Badge variant="secondary" className={`mb-2 ${colorClasses[week.color]}`}>
					{week.week}
				</Badge>
				<h4 className="text-xl font-semibold text-gray-900 mb-2">{week.topic}</h4>
			</CardContent>
		</Card>
	)
}

interface Week {
	id: number
	week: string
	topic: string
	color: 'easy' | 'medium' | 'hard'
}

const weeks: Week[] = [
	{ id: 1, week: 'Week 1', topic: 'Strings', color: 'easy' },
	{ id: 2, week: 'Week 2', topic: 'Hash Maps', color: 'easy' },
	{ id: 3, week: 'Week 3', topic: 'Linked Lists', color: 'easy' },
	{ id: 4, week: 'Week 4', topic: 'Stacks & Queues', color: 'medium' },
	{ id: 5, week: 'Week 5', topic: 'Trees', color: 'medium' },
	{ id: 6, week: 'Week 6', topic: 'Breadth-first Search', color: 'medium' },
	{ id: 7, week: 'Week 7', topic: 'Depth-first Search', color: 'medium' },
	{ id: 8, week: 'Week 8', topic: 'Backtracking', color: 'hard' },
	{ id: 9, week: 'Week 9', topic: 'Greedy Algorithms', color: 'hard' },
	{ id: 10, week: 'Week 10', topic: 'Memoization', color: 'hard' },
	{ id: 11, week: 'Week 11', topic: 'Dynamic Programming', color: 'hard' },
	{ id: 12, week: 'Week 12', topic: 'Advanced Topics', color: 'hard' },
];
export default CurriculumSection
