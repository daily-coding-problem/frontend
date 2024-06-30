import * as React from 'react';
import { useState } from 'react';

import Logo from './components/Logo';
import Button from './components/Button';
import NavLinks from './components/NavLinks';

const Header: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<nav className="z-10">
				<div className="container transition-colors ease-out duration-800 px-6 py-4 mx-auto md:flex md:justify-between md:items-center z-10">
					<div className="flex items-center justify-between">
						<Logo />
						<div className="flex md:hidden">
							<Button open={open} toggleOpen={() => setOpen(!open)} />
						</div>
					</div>
					<div className="items-center hidden md:flex">
						<NavLinks />
					</div>
				</div>
				{open && (
					<div className="transition duration-500 ease-in-out" onClick={() => setOpen(false)}>
						<NavLinks />
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
