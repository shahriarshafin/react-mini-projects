import React from 'react';
import UserImg from '../../assets/images/user.png';
import './Card.css';

const Card = () => {
	return (
		<div>
			<div className="card">
				<img src={UserImg} alt="Avatar" />
				<div class="container">
					<h4>
						<b>Shahriar Shafin</b>
					</h4>
					<p>UI / UX & Front-end Developer</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
