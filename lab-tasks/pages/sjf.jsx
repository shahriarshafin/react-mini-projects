import { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import PageLinks from '../components/pageLinks';
import ProgressBar from '../components/ProgressBar';

const test = () => {
	const [burstTime, SetBurstTime] = useState({
		p1: '',
		p2: '',
		p3: '',
		p4: '',
	});
	const [process1, SetProcess1] = useState(0);
	const [process2, SetProcess2] = useState(0);
	const [process3, SetProcess3] = useState(0);
	const [process4, SetProcess4] = useState(0);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		SetBurstTime({ ...burstTime, [name]: value });
	};
	const handleSubmit = () => {
		event.preventDefault();
		const newBurstTime = { ...burstTime };
		SetProcess1(parseInt(newBurstTime.p1));
		SetProcess2(parseInt(newBurstTime.p2));
		SetProcess3(parseInt(newBurstTime.p3));
		SetProcess4(parseInt(newBurstTime.p4));
	};
	const P1 = process1;
	const P2 = process2;
	const P3 = process3;
	const P4 = process4;

	const obj = {
		p1: process1,
		p2: process2,
		p3: process3,
		p4: process4,
	};
	console.log(obj);
	// sort the keys to assending order via values and store in array
	const sortedKeys = Object.keys(obj)

		.sort((a, b) => obj[a] - obj[b])
		.map((key) => parseInt(key.slice(1)));
	console.log(sortedKeys);

	const processArr = [P1, P2, P3, P4];
	processArr.sort(function (a, b) {
		return a - b;
	});
	console.log(processArr);

	const ps1 = processArr[0];
	const ps2 = processArr[1];
	const ps3 = processArr[2];
	const ps4 = processArr[3];

	const totalBursts = ps1 + ps2 + ps3 + ps4;
	const avgTime = (0 + ps1 + (ps1 + ps2) + (ps1 + ps2 + ps3)) / 4;
	const getPercentage = (processNo) => {
		return (processNo / totalBursts) * 100;
	};
	return (
		<>
			<Container fluid='xxl'>
				<div className='pt-4'>
					<h1 className='text-center mb-3'>Shortest Job First</h1>
					<Row>
						<Col md={2}>
							<PageLinks />
						</Col>
						<Col md={8}>
							<Table striped bordered hover className='w-100 text-center'>
								<thead>
									<tr>
										<th>#</th>
										<th>Process</th>
										<th>Burst Time</th>
									</tr>
								</thead>
								<tbody>
									{[1, 2, 3, 4].map((process, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>P{process}</td>
												<td>{burstTime[`p${process}`]}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>

							<h4>
								The average waiting time will be = (0 + {ps1} + {ps1 + ps2} +{' '}
								{ps1 + ps2 + ps3} )/ 4 = {avgTime} ms
							</h4>
							<h5 className='mt-4'>
								This is the GANTT chart for the above process :
							</h5>
							<ProgressBar
								stepOne={'0'}
								percentOne={getPercentage(ps1)}
								label1={'P' + sortedKeys[0]}
								stepTwo={ps1}
								percentTwo={getPercentage(ps2)}
								label2={'P' + sortedKeys[1]}
								stepThree={ps1 + ps2}
								percentThree={getPercentage(ps3)}
								label3={'P' + sortedKeys[2]}
								stepFour={ps1 + ps2 + ps3}
								percentFour={getPercentage(ps4)}
								label4={'P' + sortedKeys[3]}
								stepFive={ps1 + ps2 + ps3 + ps4}
							/>
						</Col>

						<Col md={2}>
							<form action='' onSubmit={handleSubmit}>
								<input
									name='p1'
									value={burstTime.p1}
									onChange={handleChange}
									type='number'
									placeholder='Set burst time of P1'
									className='mb-2 mt-3'
									required
								/>
								<input
									name='p2'
									value={burstTime.p2}
									onChange={handleChange}
									type='number'
									placeholder='Set burst time of P2'
									className='mb-2'
									required
								/>
								<input
									name='p3'
									value={burstTime.p3}
									onChange={handleChange}
									type='number'
									placeholder='Set burst time of P3'
									className='mb-2'
									required
								/>
								<input
									name='p4'
									value={burstTime.p4}
									onChange={handleChange}
									type='number'
									placeholder='Set burst time of P4'
									className='mb-2'
									required
								/>
								<input
									type='submit'
									value='Calculate'
									className='btn btn-success w-100'
								/>
							</form>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default test;
