import Link from 'next/link';

const PostCard = (props) => {
	const { title, description, postLink } = props;
	return (
		<>
			<div className='p-10'>
				<div className='w-full rounded overflow-hidden shadow-lg h-full'>
					<div className='px-4 py-2'>
						<div className='font-bold text-xl mb-2'>
							<Link href={postLink}>
								<a>{title}</a>
							</Link>
						</div>
						<p className='text-gray-700 text-base'>{description}</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#photography
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#travel
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#winter
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostCard;
