import React from 'react';
import UserImg from '../../assets/images/user.png';
import './Card.css';

const Card = (props) => {
	return (
		<div>
			<div className="card">
				<img src={UserImg} alt="Avatar" />
				<div class="container">
					<h4>
						<b>{props.name}</b>
					</h4>
					<p>{props.status}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
