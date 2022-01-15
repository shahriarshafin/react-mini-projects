import Navbar from '../../components/navbar';
import PageHeading from '../../components/PageHeading';
import PostCard from '../../components/PostCard';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	return {
		props: { posts: data },
	};
};

const index = ({ posts }) => {
	return (
		<>
			<Navbar />
			<main className=''>
				<PageHeading heading={'News Feed'} />
				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
					{posts.map((post) => (
						<PostCard
							key={post.id}
							title={post.title}
							description={post.body}
							postLink={`/posts/${post.id}`}
						/>
					))}
				</div>
			</main>
		</>
	);
};

export default index;
