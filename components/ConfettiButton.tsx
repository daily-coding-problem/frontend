import React, {useEffect} from 'react';
import confetti from 'canvas-confetti';

interface ConfettiButtonProps {
	text: string;
	loadingText?: string;
	isLoading: boolean;
	disabled?: boolean;
	showConfetti?: boolean;
	onClick: () => void;
}

const ConfettiButton: React.FC<ConfettiButtonProps> = ({ text, loadingText, isLoading, disabled, showConfetti, onClick }) => {
	useEffect(() => {
		if (showConfetti) {
			confetti({
				particleCount: 150,
				spread: 200,
				origin: { y: 0.5 }
			});
		}
	}, [showConfetti]);

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="w-full rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{isLoading ? (
				<>
					<svg className="animate-spin h-5 w-5 mr-3 inline" viewBox="0 0 24 24">
						<circle
							className="opacity-75"
							cx="12"
							cy="12"
							r="10"
							style={{ fillOpacity: 0 }}
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					{loadingText || 'Loading...'}
				</>
			) : (
				text
			)}
		</button>
	);
};

export default ConfettiButton;
