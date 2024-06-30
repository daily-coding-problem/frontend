import * as React from 'react';

interface ButtonProps {
	open: boolean;
	toggleOpen: () => void;
}

const Button: React.FC<ButtonProps> = ({ open, toggleOpen }) => (
	<button className="text-gray-700 w-10 h-10 relative focus:outline-none bg-white" onClick={toggleOpen}>
		<span className="sr-only">Open menu</span>
		<div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}></span>
			<span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}></span>
			<span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}></span>
		</div>
	</button>
);

export default Button;
