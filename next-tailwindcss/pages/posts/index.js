import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import PageHeading from '../../components/PageHeading';
import PostCard from '../../components/PostCard';

const index = () => {
	const [postsToShow, setPostsToShow] = useState([]);
	const [pageNo, setPageNo] = useState(1);

	useEffect(async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_page=${pageNo}&_limit=12`
		);
		const users = await response.json();
		setPostsToShow(users);
	}, [pageNo]);

	return (
		<>
			<Navbar />
			<main>
				<PageHeading heading={'News Feed'} />
				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
					{postsToShow.map((post) => (
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
								<button
									onClick={() => (pageNo > 1 ? setPageNo(pageNo - 1) : '')}
									className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'
								>
									Prev
								</button>
							</li>
							<li>
								<button className='h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline'>
									1
								</button>
							</li>
							<li>
								<button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100'>
									2
								</button>
							</li>
							<li>
								<button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'>
									3
								</button>
							</li>
							<li>
								<button
									onClick={() => setPageNo(pageNo + 1)}
									className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100'
								>
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
