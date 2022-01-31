import { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import PageLinks from '../components/pageLinks';
// import ProgressBar from '../components/ProgressBar';

const test = () => {
	const [burstTime, SetBurstTime] = useState({
		p1: 21,
		p2: 3,
		p3: 6,
		p4: 2,
	});

	const [priority, SetPriority] = useState({
		pr1: 1,
		pr2: 3,
		pr3: 4,
		pr4: 2,
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

	const handleChange2 = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		SetPriority({ ...priority, [name]: value });
	};

	const handleSubmit = () => {
		event.preventDefault();
		SetProcess1(sortedProcess[0].burstTime);
		SetProcess2(sortedProcess[1].burstTime);
		SetProcess3(sortedProcess[2].burstTime);
		SetProcess4(sortedProcess[3].burstTime);
	};

	const processList = [
		{
			process: 'p1',
			burstTime: burstTime.p1,
			priority: priority.pr1,
		},
		{
			process: 'p2',
			burstTime: burstTime.p2,
			priority: priority.pr2,
		},
		{
			process: 'p3',
			burstTime: burstTime.p3,
			priority: priority.pr3,
		},
		{
			process: 'p4',
			burstTime: burstTime.p4,
			priority: priority.pr4,
		},
	];

	const sortedProcess = processList.sort((a, b) => {
		return a.priority - b.priority;
	});

	console.log(sortedProcess);

	const P1 = process1;
	const P2 = process2;
	const P3 = process3;
	const P4 = process4;

	const totalBursts = P1 + P2 + P3 + P4;
	const avgTime = (0 + P1 + (P1 + P2) + (P1 + P2 + P3)) / 4;
	console.log(avgTime);
	const getPercentage = (processNo) => {
		return (processNo / totalBursts) * 100;
	};
	return (
		<>
			<Container fluid='xxl'>
				<div className='pt-4'>
					<h1 className='text-center mb-3'>Priority Scheduling</h1>
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
										<th>Priority</th>
									</tr>
								</thead>
								<tbody>
									{[1, 2, 3, 4].map((item, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>P{index + 1}</td>
												<td> {burstTime[`p${index + 1}`]}</td>
												<td> {priority[`pr${index + 1}`]}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>

							<h4>
								The average waiting time will be = (0 + {P1} + {P1 + P2} +{' '}
								{P1 + P2 + P3} )/ 4 = {avgTime} ms
							</h4>
							<h5 className='mt-4'>
								This is the GANTT chart for the above process :
							</h5>
							{/* <ProgressBar
								stepOne={'0'}
								percentOne={getPercentage(P1)}
								label1={sortedProcess[0].process}
								stepTwo={P1}
								percentTwo={getPercentage(P2)}
								label2={sortedProcess[1].process}
								stepThree={P1 + P2}
								percentThree={getPercentage(P3)}
								label3={sortedProcess[2].process}
								stepFour={P1 + P2 + P3}
								percentFour={getPercentage(P4)}
								label4={sortedProcess[3].process}
								stepFive={P1 + P2 + P3 + P4}
							/> */}
						</Col>

						<Col md={2}>
							<form action='' onSubmit={handleSubmit}>
								<table border='1' className=''>
									<tr>
										<th>Burst Time</th>
										<th>Priority</th>
									</tr>
									<tr>
										<td className='w-100'>
											<input
												name='p1'
												value={burstTime.p1}
												onChange={handleChange}
												type='number'
												placeholder='P1'
												className='w-100'
												required
											/>
										</td>
										<td>
											<td>
												<input
													name='pr1'
													value={priority.pr1}
													onChange={handleChange2}
													type='number'
													placeholder='0'
													className='w-100'
													required
													min={1}
													max={4}
												/>
											</td>
										</td>
									</tr>

									<tr>
										<td className='w-100'>
											<input
												name='p2'
												value={burstTime.p2}
												onChange={handleChange}
												type='number'
												placeholder='P2'
												className='w-100'
												required
											/>
										</td>
										<td>
											<td>
												<input
													name='pr2'
													value={priority.pr2}
													onChange={handleChange2}
													type='number'
													placeholder='0'
													className='w-100'
													required
													min={1}
													max={4}
												/>
											</td>
										</td>
									</tr>

									<tr>
										<td className='w-100'>
											<input
												name='p3'
												value={burstTime.p3}
												onChange={handleChange}
												type='number'
												placeholder='P3'
												className='w-100'
												required
											/>
										</td>
										<td>
											<td>
												<input
													name='pr3'
													value={priority.pr3}
													onChange={handleChange2}
													type='number'
													placeholder='0'
													className='w-100'
													required
													min={1}
													max={4}
												/>
											</td>
										</td>
									</tr>

									<tr>
										<td className='w-100'>
											<input
												name='p4'
												value={burstTime.p4}
												onChange={handleChange}
												type='number'
												placeholder='P4'
												className='w-100'
												required
											/>
										</td>
										<td>
											<td>
												<input
													name='pr4'
													value={priority.pr4}
													onChange={handleChange2}
													type='number'
													placeholder='0'
													className='w-100'
													required
													min={1}
													max={4}
												/>
											</td>
										</td>
									</tr>

									<tr>
										<td colspan='2'>
											{' '}
											<input
												type='submit'
												value='Calculate'
												className='btn btn-success w-100'
											/>
										</td>
									</tr>
								</table>
							</form>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default test;
