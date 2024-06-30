import * as React from 'react';

const TextContent: React.FC = () => (
	<div className="md:w-1/2 max-w-md flex flex-col justify-center pb-10 md:pb-0">
		<div className="text-4xl font-black">
			Get <em className="underline">exceptionally</em> good at coding by solving{' '}
			<span className="text-transparent decoration-clone bg-clip-text bg-gradient-to-br from-blue-300 to-indigo-500">
				one problem
      		</span>{' '}
			at a time.
		</div>
		<div className="text-xl mt-4">
			Work through a single problem each day, delivered to your inbox, in an order that encourages learning as opposed to rote memorization.
		</div>
	</div>
);

export default TextContent;
