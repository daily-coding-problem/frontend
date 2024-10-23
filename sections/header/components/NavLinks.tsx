import * as React from 'react';

const NavLinks: React.FC = () => {
	return (
		<div
			className="flex flex-col mt-4 space-y-4 md:flex-row md:items-center md:mt-0 md:space-y-0 md:space-x-4 md:mx-4 text-center md:text-left"
		>
			<button
				type="button"
				onClick={() => (window.location.href = '/login')}
				className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
			>
				Sign In
			</button>
			<button
				type="button"
				onClick={() => (window.location.href = '/premium')}
				className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Get Premium Now
			</button>
		</div>
	);
};

export default NavLinks;
