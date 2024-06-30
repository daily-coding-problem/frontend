import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import ConfettiButton from '../../../components/ConfettiButton';

interface SubscriberFormProps {
	onSuccess: () => void;
	formValues: FormValues;
}

type FormValues = {
	email: string;
	timeZone: string;
};

const SubscriberForm: React.FC<SubscriberFormProps> = ({ onSuccess, formValues }) => {
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
		defaultValues: formValues,
	});
	const [error, setError] = useState('');
	const [showConfetti, setShowConfetti] = useState(false);

	useEffect(() => {
		reset(formValues);
	}, [formValues, reset]);

	const verifyEmail = async (email: string) => {
		try {
			const response = await fetch('/api/verify-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			if (response.ok) {
				const { isValid } = await response.json();
				return isValid;
			} else {
				return false;
			}
		} catch (error) {
			return false;
		}
	};

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		setError('');
		setShowConfetti(false);

		// Verify email before submitting
		const isEmailValid = await verifyEmail(data.email);
		if (!isEmailValid) {
			setError('Email is invalid. Please enter a valid email address.');
			return;
		}

		const dataWithTimezone = {
			...data,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
		};

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dataWithTimezone)
			});

			if (response.ok) {
				setShowConfetti(true);
				onSuccess();
			} else {
				const { message } = await response.json();
				setError(message);
			}
		} catch (error) {
			setError('An error occurred. Please try again later.');
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-example">
			<label className="font-semibold text-sm text-gray-600 block">
				Get the emails for free, starting now, no questions asked.
			</label>
			<div className="text-xs text-red-500 my-1" style={{ minHeight: '16px' }}>
				{errors.email ? (
					errors.email.type === 'required' ? errors.email.message : errors.email.message
				) : error}
			</div>
			<input
				{...register('email', {
					required: 'Email is required',
				})}
				type="email"
				className="w-full rounded placeholder-gray-500 py-1 px-2 border border-gray-300 focus:shadow focus:outline-none mb-4"
				placeholder="Enter your email address"
			/>
			<ConfettiButton
				text="Subscribe"
				isLoading={isSubmitting}
				disabled={isSubmitting}
				showConfetti={showConfetti}
				onClick={handleSubmit(onSubmit)}
			/>
		</form>
	);
};

export default SubscriberForm;
