import React from 'react';
import CodingImg from '../../assets/images/coding.png';
import Nav from '../../components/Nav/Nav';

const Structures = () => {
	return (
		<div>
			<Nav />
			<div className='main'>
				<h1 className='text-light'>Folder Structure</h1>
				<img className='img-fluid' src={CodingImg} alt='' />
			</div>
		</div>
	);
};

export default Structures;
