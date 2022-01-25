import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
const contact = () => {
	const [record, setRecord] = useState({
		id: '01',
		firstName: '',
		lastName: '',
		userMail: '',
		userMsg: '',
	});
	const [userFeedback, setUserFeedback] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setRecord({ ...record, [name]: value });
		// console.log(name, value);
	};

	const handleSubmit = () => {
		event.preventDefault();
		const newRecord = { ...record };
		setUserFeedback([...userFeedback, newRecord]);
		setRecord({
			firstName: '',
			lastName: '',
			userMail: '',
			userMsg: '',
		});
		console.table(userFeedback);
	};

	// const handleSubmit = async () => {
	// 	event.preventDefault();
	// 	const response = await fetch('http://localhost:4000/feedback', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(record),
	// 	});
	// 	const body = await response.json();
	// 	console.log(body);
	// 	setUserFeedback([...userFeedback, body]);
	// 	setRecord({
	// 		firstName: '',
	// 		lastName: '',
	// 		userMail: '',
	// 		userMsg: '',
	// 	});
	// 	console.log(userFeedback);
	// };

	return (
		<>
			<Navbar />
			<PageHeading heading={'Contact Us'} />
			<div className='flex justify-center content-center'>
				<form
					onSubmit={handleSubmit}
					className='w-full max-w-lg border-2 p-4 my-6'
				>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-first-name'
							>
								First Name
							</label>
							<input
								name='firstName'
								value={record.firstName}
								onChange={handleChange}
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='Jane'
								required
							/>
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-last-name'
							>
								Last Name
							</label>
							<input
								name='lastName'
								value={record.lastName}
								onChange={handleChange}
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='Doe'
								required
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-password'
							>
								Email
							</label>
							<input
								name='userMail'
								value={record.userMail}
								onChange={handleChange}
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-password'
								type='email'
								placeholder='you@domain.com'
								required
							/>
							<p className='text-gray-600 text-xs italic mt-3'>
								Make it as long and as crazy as you'd like
							</p>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-2 p-4'>
						<textarea
							name='userMsg'
							value={record.userMsg}
							onChange={handleChange}
							placeholder='your message'
							rows='5'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							required
						></textarea>
					</div>
					<input
						className='bg-gray-50 px-4 py-2 text-gray-700 border-2 rounded w-full mt-3 font-semibold cursor-pointer hover:bg-gray-100'
						type='submit'
						value='Submit'
					></input>
				</form>
			</div>
		</>
	);
};

export default contact;
