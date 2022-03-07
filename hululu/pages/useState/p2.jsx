import { useState } from 'react';

const Hello = () => {
	// const time = new Date().toLocaleTimeString();
	const [state, setState] = useState(new Date().toLocaleTimeString());

	setInterval(() => {
		setState(new Date().toLocaleTimeString());
	}, 1000);
	return (
		<>
			<h1 className='text-3xl text-center'>{state}</h1>
		</>
	);
};

export default Hello;
