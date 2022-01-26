import { ProgressBar } from 'react-bootstrap';

const Progress = (props) => {
	const {
		stepOne,
		percentOne,
		stepTwo,
		percentTwo,
		stepThree,
		percentThree,
		stepFour,
		percentFour,
		stepFive,
	} = props;
	return (
		<>
			<ProgressBar
				style={{
					height: '30px',
					width: '100%',
					backgroundColor: 'rgb(222 226 230 / 26%)',
					border: '1px solid #dee2e6',
				}}
			>
				<h4>{stepOne}</h4>
				<ProgressBar variant='success' animated key={1} now={percentOne} />
				<h4>{stepTwo}</h4>
				<ProgressBar variant='warning' key={2} now={percentTwo} />
				<h4>{stepThree}</h4>
				<ProgressBar
					striped
					variant='danger'
					animated
					now={percentThree}
					key={3}
				/>
				<h4>{stepFour}</h4>
				<ProgressBar variant='info' now={percentFour} key={3} />
				<h4>{stepFive}</h4>
			</ProgressBar>
		</>
	);
};

export default Progress;
