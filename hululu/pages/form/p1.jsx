import { useState } from 'react';

const Index = () => {
	const [value, setValue] = useState('');
	const [data, setData] = useState([]);

	const registerUser = (e) => {
		e.preventDefault();
		setValue('');
		const store = { value };
		const newArr = [...data, store];
		setData(newArr);
		console.log(newArr);
	};

	return (
		<div className='container mx-auto px-4'>
			<form onSubmit={registerUser}>
				<input
					value={value}
					name='value'
					onChange={(e) => setValue(e.target.value)}
					className='bg-gray-50'
					type='text'
				/>
				<button
					className='rounded-lg px-2 py-1 text-white bg-red-400'
					type='submit'
				>
					Register
				</button>
			</form>
			<table className='table-auto'>
				<tr>
					<th>Count</th>
					<th>Name</th>
				</tr>

				{data.map((item) => {
					return (
						<>
							<tr>
								<td>1</td>
								<td>{item.value}</td>
							</tr>
						</>
					);
				})}
			</table>
		</div>
	);
};

export default Index;
