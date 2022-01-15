const PageHeading = (props) => {
	const { heading } = props;
	return (
		<>
			<h1 className='text-6xl flex align-center justify-center my-14'>
				{heading}
			</h1>
		</>
	);
};

export default PageHeading;
