'use client'

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "react-hot-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, AlertTriangle, Mail } from "lucide-react"

const schema = z.object({
	email: z.string().email("Invalid email address"),
})

type FormValues = z.infer<typeof schema>

export function Login() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
		resolver: zodResolver(schema),
	})
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [isSupabaseConfigured, setIsSupabaseConfigured] = useState(true)

	useEffect(() => {
		const checkSupabaseConfig = () => {
			const url = process.env.NEXT_PUBLIC_SUPABASE_URL
			const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
			if (!url || !key) {
				setIsSupabaseConfigured(false)
				setError("Supabase is not properly configured. Please check your environment variables.")
			}
		}
		checkSupabaseConfig()
	}, [])

	React.useEffect(() => {
		const footer = document.querySelector("footer")
		if (footer) {
			footer.classList.add('bg-white')
		}
	}, [])

	const handleLogin = async ({ email }: FormValues) => {
		if (!isSupabaseConfigured) {
			setError("Cannot proceed due to missing Supabase configuration.")
			toast.error("Login is currently unavailable. Please try again later.")
			return
		}

		setLoading(true)
		setError('')

		try {
			const supabase = createClientComponentClient()
			const { error: signInError } = await supabase.auth.signInWithOtp({ email })
			if (signInError) {
				setError("Error: " + signInError.message)
				toast.error("Error: " + signInError.message)
				reset()
			} else {
				toast.success("Check your email for the magic link.")
			}
		} catch (error) {
			setError("Unexpected error occurred. Please try again.")
			toast.error("Unexpected error occurred. Please try again.")
			reset()
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-[85vh] flex flex-col md:flex-row bg-gray-50">
			{/* Left column with design */}
			<div className="md:w-1/2 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 p-8 flex flex-col justify-center items-center text-white">
				<div className="max-w-md text-center">
					<h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
					<p className="text-xl mb-8">We can’t wait to see you again! Log in to access your account and embark on your journey to get exceptionally good at coding by solving one problem at a time.</p>
					<div className="w-64 h-64 mx-auto">
						<Mail className="w-full h-full" />
					</div>
				</div>
			</div>

			{/* Right column with login form */}
			<div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
				<Card className="w-full max-w-md border-gray-200 bg-white">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold text-center text-gray-900">Log in to your account</CardTitle>
						<CardDescription className="text-center text-gray-600">
							Enter your email to receive a <span className="font-black text-transparent decoration-clone bg-clip-text bg-gradient-to-br from-blue-300 to-indigo-500">magic link</span>{"."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						{!isSupabaseConfigured && (
							<Alert variant="destructive" className="mb-4 bg-red-100 border-red-400 text-red-800">
								<AlertTriangle className="h-4 w-4" />
								<AlertTitle>Configuration Error</AlertTitle>
								<AlertDescription>
									Supabase is not properly configured. Please contact support.
								</AlertDescription>
							</Alert>
						)}
						<form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email" className="text-gray-700">Email address</Label>
								<Input
									id="email"
									type="email"
									placeholder="john.doe@example.com"
									{...register("email")}
									className={`${errors.email ? "border-red-500" : "border-gray-300"} focus:border-indigo-500 focus:ring-indigo-500`}
									disabled={!isSupabaseConfigured}
								/>
								{errors.email && (
									<p className="text-sm text-red-500">{errors.email.message}</p>
								)}
							</div>
							<Button
								type="submit"
								className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white"
								disabled={loading || !isSupabaseConfigured}
							>
								{loading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Sending...
									</>
								) : (
									"Sign in with Email"
								)}
							</Button>
						</form>
						{error && <p className="text-sm text-red-500 mt-2">{error}</p>}
					</CardContent>
					<CardFooter className="flex flex-col space-y-4">
						<p className="text-sm text-gray-600 w-full">
							If you have made a purchase, you would have received an activation email.
							Please activate your account via the link in that email first.
						</p>
						<div className="text-xs text-center text-gray-500">
							Facing technical issues?{" "}
							<a className="underline text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
							   href="/support">
								Visit the support page
							</a>{"."}
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}

export default Login
