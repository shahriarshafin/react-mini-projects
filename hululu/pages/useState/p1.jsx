import { useState } from 'react';

const P1 = () => {
	const [color, setColor] = useState('red');
	const [text, setText] = useState('Head');
	console.log(color);
	return (
		<>
			<div className='container mx-auto'>
				<h1
					onClick={() =>
						setColor(
							`rgb(${Math.floor(Math.random() * 125) + 0},${
								Math.floor(Math.random() * 125) + 0
							},${Math.floor(Math.random() * 125) + 0})`
						)
					}
					style={{ backgroundColor: `${color}`, userSelect: 'none' }}
					className='text-center cursor-pointer text-4xl mt-10 text-white py-4 rounded-sm'
				>
					Tap to change my color
				</h1>

				<div className='flex justify-center'>
					<button
						onClick={() => setText(text === 'Head' ? 'Tell' : 'Head')}
						className='text-3xl bg-orange-400 text-white my-3'
					>
						{text}
					</button>
				</div>
			</div>
		</>
	);
};

export default P1;
