import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './Home.css';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

let today = new Date().getHours();
let greeting = '';
if (today >= 6 && today <= 12) {
	greeting = 'Morning';
} else if (today >= 12 && today <= 17) {
	greeting = 'Afternoon';
} else if (today >= 17 && today <= 20) {
	greeting = 'Evening';
} else if (today >= 20 && today <= 24) {
	greeting = 'Night';
} else {
	greeting = 'to see you!';
}

const Home = () => {
	return (
		<div>
			<Nav />
			<h1>Home Sweet Home </h1>
			<p>
				Today's Date : <span> {date} </span>
			</p>
			<p>
				Clock Now : <span> {time} </span>
			</p>

			<div className="box-wrapperr">
				<div className="box-wrapper">Hello, Good {greeting}</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
