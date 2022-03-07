import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { IoCheckbox, IoTrashBin } from 'react-icons/io5';
import Heading from '../../components/Heading';

const Index = () => {
	const [item, setItem] = useState('');
	const [data, setData] = useState([]);
	const [book, setBook] = useState('');
	const [bookmark, setBookmark] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setItem('');
		const store = { item };
		setData([...data, store]);
		// console.table(data);
	};

	const deleteUncompleted = (id) => {
		setData(
			data.filter((elem, index) => {
				return index !== id;
			})
		);
	};

	const deleteCompleted = (id) => {
		console.log(id);
		setBookmark(
			bookmark.filter((elem, index) => {
				return index !== id;
			})
		);
	};

	const itemBookmark = (id) => {
		deleteUncompleted(id);
		const set = data.filter((elem, index) => {
			return id == index;
		});

		// console.log(seta);
		// console.log(set[0].item);
		setBook(set[0].item);
		const chacha = set[0].item;
		const arr = { chacha };
		const lala = [...bookmark, arr];
		setBookmark(lala);
	};

	return (
		<>
			<Confetti width={100} height={100} />

			<Heading text={'The Todo 📃'} />
			<form onSubmit={handleSubmit} className='flex justify-center mt-5'>
				<input
					onChange={(e) => setItem(e.target.value)}
					name='item'
					value={item}
					type='text'
					autoComplete='off'
					required
					className='bg-slate-100 px-12 py-1 rounded-sm focus:border-red-600'
				/>
				<button className='bg-green-600 px-6 py-1 text-white rounded-sm hover:bg-green-700'>
					Add
				</button>
			</form>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
				<div className='flex justify-center mt-5'>
					<div>
						<h2 className='text-center text-2xl'>Uncompleted Tasks ✒</h2>
						{data.map((item, index) => {
							return (
								<>
									<div>
										<motion.div
											animate={{ x: 50 }}
											transition={{ type: 'spring', stiffness: 100 }}
											className='flex justify-between items-center shadow-md px-3 rounded-sm gap-2 py-2 mt-3 mr-24'
										>
											<div className='flex items-center'>
												<IoCheckbox
													onClick={() => itemBookmark(index)}
													className='text-purple-200 mr-2 hover:text-purple-500 cursor-pointer'
												/>
												<h3>{item.item}</h3>
											</div>
											<IoTrashBin
												onClick={() => deleteUncompleted(index)}
												className='text-red-400 hover:text-red-500 cursor-pointer'
											/>
										</motion.div>
									</div>
								</>
							);
						})}
					</div>
				</div>
				<div className='flex justify-center mt-5'>
					<div>
						<h2 className='text-center text-2xl'>Completed Tasks 🔥</h2>

						{bookmark.map((item, index) => {
							return (
								<>
									<div>
										<motion.div
											animate={{ x: 50 }}
											transition={{ type: 'spring', stiffness: 100 }}
											className='flex justify-between items-center shadow-md px-3 rounded-sm gap-2 py-2 mt-3 mr-24'
										>
											<div className='flex items-center'>
												<IoCheckbox className='text-purple-500 mr-2 hover:text-purple-500' />
												<h3>{item.chacha}</h3>
											</div>
											<IoTrashBin
												onClick={() => deleteCompleted(index)}
												className='text-red-400 hover:text-red-500 cursor-pointer'
											/>
										</motion.div>
									</div>
								</>
							);
						})}
					</div>
				</div>
				<div>
					<h2 className='text-center text-2xl'>Ekhno Vabinai</h2>
				</div>
			</div>
		</>
	);
};

export default Index;
