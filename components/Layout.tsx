import * as React from 'react';
import Footer from "../sections/footer/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
