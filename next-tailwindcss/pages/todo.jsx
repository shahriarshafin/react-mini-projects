import { useState } from 'react';

// const TodoList = [
// 	{
// 		id: 1,
// 		text: 'Learn React',
// 		completed: true,
// 	},
// 	{
// 		id: 2,
// 		text: 'Learn Redux',
// 		completed: false,
// 	},
// 	{
// 		id: 3,
// 		text: 'Learn React Router',
// 		completed: false,
// 	},
// ];
export const getStaticProps = async () => {
	const res = await fetch(`http://localhost:4000/botchat`);
	const data = await res.json();

	return { props: { myData: data } };
};

const Todo = ({ myData }) => {
	console.log(myData);
	const [val, setVal] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('hello');
	};

	return (
		<div className='container'>
			<h1 className='text-center text-5xl font-semibold'>Todo List</h1>
			{myData.map((item) => {
				return <h1 key={item.key}>{item.firstName}</h1>;
			})}
			<form action='' onSubmit={handleSubmit}>
				<input
					type='text'
					name='values'
					value={val}
					onChange={(e) => setVal(e.target.value)}
					className='border-2'
				/>
			</form>
		</div>
	);
};

export default Todo;
