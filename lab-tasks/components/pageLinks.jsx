import Link from 'next/link';
import { Button } from 'react-bootstrap';
const pageLinks = () => {
	return (
		<>
			<Link href='/'>
				<Button variant='secondary' className='mb-2 me-2 w-100'>
					<a>First Come First Serve</a>
				</Button>
			</Link>

			<Link href='/sjf'>
				<Button variant='secondary' className='mb-2 me-2 w-100'>
					<a>Shortest Job First</a>
				</Button>
			</Link>

			<Link href='/priority'>
				<Button variant='secondary' className='mb-2 me-2 w-100'>
					<a>Priority Scheduling</a>
				</Button>
			</Link>
		</>
	);
};

export default pageLinks;
