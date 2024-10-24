import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from './layout';
import { SupabaseProvider } from '@/hooks/useSupabase'

import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Daily Coding Problem</title>
			</Head>
			<SupabaseProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SupabaseProvider>
		</>
	);
};

export default MyApp;
