"use client"

import * as React from 'react'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useSupabase } from '@/hooks/useSupabase'

// TODO - Only show the premium button if the user is not logged in or is not a premium user
// TODO - Show profile button if the user is logged in

const Logo: React.FC = () => (
	<a href="/" className="flex items-center space-x-2 text-xl font-semibold text-black">
		<svg width="40" height="40" viewBox="0 0 75 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
			<rect width="60" height="60" rx="5" fill="currentColor"/>
			<path
				d="M20.3438 29.334C20.3438 29.7676 20.3145 30.125 20.2559 30.4062L9.86719 37.8594C9.53906 37.7305 9.14648 37.4082 8.68945 36.8926C8.24414 36.3652 7.83398 35.791 7.45898 35.1699C7.0957 34.5488 6.86133 34.0332 6.75586 33.623L13.7168 27.5059L6.4043 22.1973C6.56836 21.5176 6.91992 20.7969 7.45898 20.0352C8.00977 19.2734 8.54297 18.7402 9.05859 18.4355L19.2715 24.2891C19.5645 24.6172 19.8164 25.3086 20.0273 26.3633C20.2383 27.418 20.3438 28.4082 20.3438 29.334ZM51.9141 39.002C52.0781 39.4238 52.1602 39.9395 52.1602 40.5488C52.1602 41.1582 52.0781 41.7676 51.9141 42.377C51.75 42.9863 51.5332 43.4961 51.2637 43.9062L21.2402 43.9414C21.1113 43.5664 21.0469 43.1152 21.0469 42.5879C21.0469 41.9902 21.1289 41.3691 21.293 40.7246C21.4453 40.0801 21.6445 39.5 21.8906 38.9844L51.9141 39.002Z"
				fill="white"
			/>
		</svg>
		<span>Daily Coding Problem</span>
	</a>
)

const NavLinks: React.FC<{ isMobile?: boolean, isLoggedIn: boolean }> = ({ isMobile = false, isLoggedIn = false }) => {
	const baseButtonClass = isMobile ? "w-full justify-start" : ""

	return (
		<div className={`flex ${isMobile ? 'flex-col space-y-4' : 'items-center space-x-4'}`}>
			{!isLoggedIn && (
				<Button variant="outline" className={`${baseButtonClass} text-black border-gray-300 rounded-full hover:bg-indigo-100`} asChild>
					<a href="/login">Sign In</a>
				</Button>
			)}
			<Button className={`${baseButtonClass} bg-indigo-600 text-white hover:bg-indigo-700`} asChild>
				<a href="/premium">Get Premium</a>
			</Button>
		</div>
	)
}

export default function Header() {
	const { session } = useSupabase()
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-200 ${isScrolled ? 'border-b border-gray-200' : ''}`}>
			<div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Logo />
					</div>
					<nav className="hidden md:flex items-center space-x-4">
						<NavLinks isLoggedIn={!!session} />
					</nav>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-indigo-100">
								<Menu className="h-4 w-4" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px]">
							<nav className="mt-6">
								<NavLinks isMobile isLoggedIn={!!session} />
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
