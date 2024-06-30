import * as React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#f3f4f6] p-10 w-full">
			<div className="mx-auto flex items-center justify-center">
				<p className="text-center text-xs leading-5 text-gray-500">
					&copy; 2024 Daily Coding Problem. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
