import * as React from 'react';

import SubscriberForm from './SubscriberForm';
import SuccessModal from './SuccessModal';
import {useState} from "react";

const FormContainer: React.FC = () => {
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [formValues, setFormValues] = useState({ email: '', timeZone: '' });

	const handleSubscribeSuccess = () => {
		setIsSubscribed(true);
	};

	const handleModalClose = () => {
		setIsSubscribed(false);
		setFormValues({ email: '', timeZone: '' });
	};

	return (
		<div className="flex md:justify-end w-full md:w-1/2 -mt-5 relative">
			<div className="md:ml-16 pt-6 w-full md:max-w-md absolute inset-0 bg-gradient-to-r from-indigo-300 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-lg"></div>
			<div className="md:ml-16 pt-6 xs:p-0 w-full md:max-w-md absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3 rounded-lg"></div>
			<div className="md:ml-16 pt-6 xs:p-0 w-full md:max-w-lg relative inset-0">
				<div className="bg-white shadow-lg w-full h-full rounded-lg divide-y divide-gray-200 flex">
					<div className="w-full px-5 py-7 m-auto">
						<div className="text-2xl md:text-4xl font-semibold mb-2">Start learning now.</div>
						<SubscriberForm onSuccess={handleSubscribeSuccess} formValues={formValues} />
						{isSubscribed && <SuccessModal onClose={handleModalClose} />}
						<div className="text-xs text-gray-500 pt-4">
							Questions will always be free; if you want solutions you can always{' '}
							<a
								className="underline text-blue-700 hover:text-indigo-400 transition-colors duration-500"
								href="/premium"
							>
								purchase a premium plan
							</a>
								.
						</div>
					</div>
				</div>
			</div>
		</div>
);
};

export default FormContainer;
