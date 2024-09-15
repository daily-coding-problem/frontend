import React, { useEffect, useState, useCallback } from 'react';
import Confetti from 'react-confetti';
import ReactDOM from 'react-dom';

interface ConfettiButtonProps {
	text: string;
	loadingText?: string;
	isLoading: boolean;
	disabled?: boolean;
	showConfetti?: boolean;
	onClick: () => void;
}

const ConfettiButton: React.FC<ConfettiButtonProps> = ({ text, loadingText, isLoading, disabled, showConfetti, onClick }) => {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
	const [isConfettiVisible, setIsConfettiVisible] = useState(false);

	const detectWindowSize = useCallback(() => {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	useEffect(() => {
		detectWindowSize(); // Set initial window size
		window.addEventListener('resize', detectWindowSize); // Update size on window resize

		return () => {
			window.removeEventListener('resize', detectWindowSize); // Clean up listener on unmount
		};
	}, [detectWindowSize]);

	useEffect(() => {
		if (showConfetti) {
			setIsConfettiVisible(true);
			setTimeout(() => setIsConfettiVisible(false), 3000); // Confetti visible for 3 seconds
		}
	}, [showConfetti]);

	return (
		<>
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

			{/* Confetti effect */}
			{isConfettiVisible &&
				ReactDOM.createPortal(
					<Confetti
						width={windowSize.width}
						height={windowSize.height}
						recycle={false}
						numberOfPieces={150}
						style={{ zIndex: 9999, position: 'fixed', top: 0 }}
					/>,
					document.body
				)}
		</>
	);
};

export default ConfettiButton;
