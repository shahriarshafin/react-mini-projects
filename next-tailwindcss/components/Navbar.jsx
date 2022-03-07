import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<nav className='bg-gray-100 p-4 sticky top-0 z-50'>
				<div className='flex justify-between'>
					<h2 className='text-2xl font-semibold'>
						<Link href='/'>
							<a>LoGo</a>
						</Link>
					</h2>
					<div className='flex align-center justify-center'>
						<Link href='/'>
							<a className='font-medium text-gray-500 hover:text-gray-900 px-2'>
								Home
							</a>
						</Link>

						<Link href='/posts'>
							<a className='font-medium text-gray-500 hover:text-gray-900 px-2'>
								Feed
							</a>
						</Link>

						<Link href='/todo'>
							<a className='font-medium text-gray-500 hover:text-gray-900 px-2'>
								Todo
							</a>
						</Link>

						<Link href='/'>
							<a className='font-medium text-gray-500 hover:text-gray-900 px-2'>
								Products
							</a>
						</Link>

						<Link href='/'>
							<a className='font-medium text-gray-500 hover:text-gray-900 px-2'>
								About
							</a>
						</Link>
					</div>
					<h2 className='font-medium text-gray-500 hover:text-gray-900 px-2'>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</h2>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
