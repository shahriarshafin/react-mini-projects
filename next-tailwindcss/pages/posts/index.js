import { useState } from 'react';
import Navbar from '../../components/navbar';
import PageHeading from '../../components/PageHeading';
import PostCard from '../../components/PostCard';
const pageNo = 1;
export const getStaticProps = async () => {
	let res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_page= ${pageNo}&_limit=10`
	);
	const data = await res.json();
	return {
		props: { posts: data },
	};
};

const handleClick = () => {
	const [pageNo, SetpageNo] = useState(1);
	console.log('hello');
	return pageNo;
};

const index = ({ posts }) => {
	return (
		<>
			<Navbar />
			<main>
				<PageHeading heading={'News Feed'} />
				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
					{posts.map((post) => (
						<PostCard
							key={post.id}
							postNo={post.id}
							title={post.title}
							description={post.body}
							postLink={`/posts/${post.id}`}
						/>
					))}
				</div>
				<div className=' flex justify-center mb-3'>
					<nav aria-label='Page navigation'>
						<ul className='inline-flex'>
							<li>
								<button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'>
									Prev
								</button>
							</li>
							<li>
								<button className='h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline'>
									1
								</button>
							</li>
							<li>
								<button
									onClick={handleClick}
									className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100'
								>
									2
								</button>
							</li>
							<li>
								<button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'>
									3
								</button>
							</li>
							<li>
								<button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100'>
									Next
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</main>
		</>
	);
};

export default index;
