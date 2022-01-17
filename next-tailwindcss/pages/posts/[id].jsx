export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
	const data = await res.json();

	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
	const data = await res.json();
	return {
		props: { ninja: data },
	};
};
// console.log({ ninja });
const Details = ({ ninja }) => {
	return (
		<>
			<h1 className='text-xl'>{ninja.title}</h1>
		</>
	);
};

export default Details;
