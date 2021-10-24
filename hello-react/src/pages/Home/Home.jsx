import React from 'react';
import '../../assets/bootstrap.css';
import Nav from '../../components/Nav/Nav';
import './Home.css';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const Home = () => {
	return (
		<>
			<Nav />
			<div className='main'>
				<div className='container'>
					<h1 className='text-light mx-auto'>
						Let's Learn <span className='text-blue'>React</span>
					</h1>
					<div className='text-light my-4'>
						<h5>
							Today's Date : <span className='text-purple'> {date} </span>
						</h5>
						<h5>
							Current Time : <span className='text-purple'> {time} </span>
						</h5>
					</div>
					<div className='p-5'>
						<div className='header'>
							<h2 className='header-text'>Hello, nice to see you! 😀</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
