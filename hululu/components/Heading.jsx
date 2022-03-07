const Heading = ({ text }) => {
	const styles = {
		Heading: 'text-5xl text-center mt-5',
	};

	return <h1 className={styles.Heading}>{text}</h1>;
};

export default Heading;
