import React from 'react';
import '../../assets/bootstrap.css';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
const About = () => {
	return (
		<>
			<Nav />
			<div className="container">
				<div className="row">
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default About;
