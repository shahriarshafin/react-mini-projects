import React from 'react';
import './Nav.css';
const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<a href="/" className="active">
						Home
					</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
