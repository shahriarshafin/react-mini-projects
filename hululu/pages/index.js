import { useState } from 'react';
import Heading from '../components/Heading';
const Index = () => {
	const [num, setNum] = useState(0);

	return (
		<>
			<Heading text={'Counter'} />

			<h3 className=' text-center p-4 my-5 text-3xl font-semibold'>{num}</h3>
			<div className='flex justify-center gap-3'>
				<button
					onClick={() => setNum(num + 1)}
					className='bg-green-400 px-4 py-2 rounded-md text-white hover:bg-green-500'
				>
					Increase +
				</button>

				<button
					onClick={() => setNum(num - 1)}
					className='bg-red-400 px-4 py-2 rounded-md text-white hover:bg-red-500'
				>
					Decrease -
				</button>

				<button
					onClick={() => setNum(0)}
					className='bg-neutral-400 px-4 py-2 rounded-md text-white hover:bg-neutral-500'
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default Index;
