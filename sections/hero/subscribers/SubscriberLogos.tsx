'client';

import * as React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { prettyPrint } from '@/lib/utils';

const logoPath = '/logos';

const logos = [
	'google',
	'amazon',
	'meta',
	'microsoft',
	'airbnb',
	'linkedin',
]

const SubscriberLogos: React.FC = () => {
	const shuffledLogos = React.useMemo(() => {
		const logosCopy = [...logos]; // Create a copy of the original array
		for (let i = logosCopy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[logosCopy[i], logosCopy[j]] = [logosCopy[j], logosCopy[i]]; // Swap elements
		}
		return logosCopy.slice(0, 4); // Take the first 4 unique logos
	}, []);

	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
			{shuffledLogos.map((logo, index) => (
				<Link
					key={index}
					href={`https://www.${logo}.com`}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center group"
				>
					<div className="relative w-32 h-32">
						<Image
							src={`${logoPath}/${logo}.svg`}
							alt={`${prettyPrint(logo)} Logo`}
							fill
							style={{objectFit: 'contain'}}
							className="transition-all duration-300 ease-in-out filter grayscale-[0.75] group-hover:grayscale-0 group-hover:scale-110"
						/>
					</div>
				</Link>
			))}
		</div>
	);
};

export default SubscriberLogos;
