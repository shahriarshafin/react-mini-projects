import React from 'react';
import '../../assets/bootstrap.css';

const Card = () => {
	fetch('./data/data.json')
		.then((res) => res.json())
		.then((json) => console.table(json));
	// console.log('hello');

	console.log('hello');

	return (
		<>
			<div className="col-6 col-lg-4 col-md-4">
				<div className="snip-card mt-5 p-2">
					<div className="d-flex justify-content-between">
						<div>
							<span className="badge bg-primary mb-2">bootstrap</span>
							<a href="http//:">
								<span className="badge bg-danger mb-2 mx-1">feature</span>
							</a>
						</div>
						<div>
							<span className="badge bg-success mb-2">free</span>
						</div>
					</div>
					<a href="https://">
						<div className="bg-dark">
							<img
								className="card-img img-fluid"
								alt="click here"
								loading="lazy"
								src="https://snippet-treasury.netlify.app/assets/img/features/feature-6.png"
							/>
						</div>
					</a>
					<p className="snip-card-cap my-2">Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
		</>
	);
};

export default Card;
