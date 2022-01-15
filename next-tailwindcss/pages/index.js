import Navbar from '../components/navbar';
import PageHeading from '../components/PageHeading';

const index = () => {
	return (
		<>
			<Navbar />
			<main>
				<PageHeading heading={'Welcome to Daily News'} />
			</main>
		</>
	);
};

export default index;
