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
		label1,
		label2,
		label3,
		label4,
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
				<ProgressBar
					style={{
						fontSize: '20px',
					}}
					variant='success'
					animated
					key={1}
					now={percentOne}
					label={`${label1}`}
				/>
				<h4>{stepTwo}</h4>
				<ProgressBar
					style={{
						fontSize: '20px',
					}}
					variant='warning'
					key={2}
					now={percentTwo}
					label={`${label2}`}
				/>
				<h4>{stepThree}</h4>
				<ProgressBar
					style={{
						fontSize: '20px',
					}}
					striped
					variant='danger'
					animated
					now={percentThree}
					key={3}
					label={`${label3}`}
				/>
				<h4>{stepFour}</h4>
				<ProgressBar
					style={{
						fontSize: '20px',
					}}
					variant='info'
					now={percentFour}
					key={3}
					label={`${label4}`}
				/>
				<h4>{stepFive}</h4>
			</ProgressBar>
		</>
	);
};

export default Progress;
