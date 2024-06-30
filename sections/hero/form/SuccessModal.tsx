import * as React from 'react';

interface SuccessModalProps {
	onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => (
	<div className="z-4 flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-opacity-75 bg-gray-800">
		<div className="bg-white rounded-lg md:max-w-xl bg-opacity-100">
			<div className="items-start p-4">
				<div className="flex items-center w-full">
					<div className="text-gray-900 font-medium text-lg">Subscribed 🎉</div>
					<svg
						onClick={onClose}
						className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 18 18"
					>
						<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
					</svg>
				</div>
				<p className="my-2 text-md">
					You have successfully subscribed! To activate your subscription please
					click the link in the email verification we just sent to your inbox.{' '}
					<strong>If you do not see the email</strong> in your inbox please check
					your spam folder as well as any other tabs such as promotions or updates.
				</p>
				<button onClick={onClose} className="w-full rounded-md bg-indigo-600 px-2.5 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					I have verified my email
				</button>
			</div>
		</div>
	</div>
);

export default SuccessModal;
