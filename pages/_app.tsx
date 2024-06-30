import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Daily Coding Problem</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
