import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './Home.css';

const home = 'Home';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

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
			<Footer />
		</div>
	);
};

export default Home;
