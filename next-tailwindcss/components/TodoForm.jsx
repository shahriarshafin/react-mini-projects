import { useState } from 'react';

const TodoForm = (props) => {
	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Date.now(),
			text: input,
		});

		setInput('');
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					name='text'
					value={input}
					onChange={handleChange}
					type='text'
					placeholder='write your tasks'
					required
					className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
				/>

				<input
					type='submit'
					value='Submit'
					className='bg-gray-50 px-4 py-2 text-gray-700 border-2 rounded w-full mt-3 font-semibold cursor-pointer hover:bg-gray-100'
				></input>
			</form>
		</>
	);
};

export default TodoForm;
