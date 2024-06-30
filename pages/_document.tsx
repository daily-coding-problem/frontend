import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import React from "react";

const _document: React.FC<DocumentProps> = () => (
	<Html>
		<Head>
			<meta name="description" content="Ace your programming interview by solving one problem every day." />

			<meta property="og:title" content="Daily Coding Problem" />
			<meta property="og:description" content="Ace your programming interview by solving one problem every day." />

			<meta name="twitter:title" content="Daily Coding Problem" />
			<meta name="twitter:description" content="Ace your programming interview by solving one problem every day." />
			<meta name="twitter:card" content="summary_large_image" />

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
		</Head>
		<body className="bg-white antialiased">
		<Main />
		<NextScript />
		</body>
	</Html>
);

export default _document;
