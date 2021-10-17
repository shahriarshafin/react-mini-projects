import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
	return (
		<div>
			<h1>404 PAGE NOT FOUND</h1>
			<h4>
				goto <Link to="/">Home</Link>
			</h4>
		</div>
	);
};

export default Error;
