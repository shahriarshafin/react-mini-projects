import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './Home.css';

const home = 'Home';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const styles = {
	color: 'red',
};
const Home = () => {
	return (
		<div>
			<Nav />
			<h1>Home Sweet {home} </h1>
			<p>
				Today's Date : <span> {date} </span>
			</p>
			<p>
				Clock Now : <span> {time} </span>
			</p>
			<h1 style={styles}>Shahriar Shafin</h1>
			<p style={{ color: 'blue', fontSize: '3rem' }}>Shahriar Shafin</p>
			<Footer />
		</div>
	);
};

export default Home;
