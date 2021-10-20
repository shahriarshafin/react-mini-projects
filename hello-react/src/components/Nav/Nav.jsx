import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
	return (
		<>
			<div className="upper-nav">
				<ul>
					<li>
						<Link to="#home">Home</Link>
					</li>
					<li>
						<Link to="#news">News</Link>
					</li>
					<li>
						<Link to="#contact">Contact</Link>
					</li>
					<li>
						<Link to="#ainkbout">About</Link>
					</li>
				</ul>
			</div>
			<div className="sidenav">
				<Link to="#" className="link active">
					Home
				</Link>
				<Link to="#" className="link">
					Contact
				</Link>
				<Link to="#" className="link">
					Contact
				</Link>
				<Link to="#" className="link">
					Contact
				</Link>
				<Link to="#" className="link">
					Contact
				</Link>
				<Link to="#" className="link">
					Contact
				</Link>
				<Link to="#" className="link">
					Contact
				</Link>
				<Link to="#" className="link">
					Contact
				</Link>
			</div>
		</>
	);
};

export default Nav;
