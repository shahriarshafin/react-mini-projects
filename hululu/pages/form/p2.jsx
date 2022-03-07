import { useState } from 'react';

const Index = () => {
	const [UserName, setUserName] = useState({
		username: '',
		mail: '',
	});

	const [store, setStore] = useState([]);

	const Submited = (e) => {
		e.preventDefault();
		// console.log(UserName);
		const newArr = { ...UserName };
		const final = [...store, newArr];
		setStore(final);
		console.table(final);
	};

	// console.log(UserName);
	return (
		<div>
			<form onSubmit={Submited}>
				<input
					type='text'
					name='username'
					value={UserName.username}
					className='bg-red-400'
					placeholder='name'
					onChange={(e) =>
						setUserName({ ...UserName, username: e.target.value })
					}
				/>
				<input
					type='email'
					name='mail'
					value={UserName.mail}
					className='bg-red-400'
					placeholder='name'
					onChange={(e) => setUserName({ ...UserName, mail: e.target.value })}
				/>
				<button type='submit'>Submit</button>
			</form>

			<table>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>

				{store.map((item) => {
					return (
						<>
							<tr>
								<td>{item.username}</td>
								<td>{item.mail}</td>
							</tr>
						</>
					);
				})}
			</table>
		</div>
	);
};

export default Index;
