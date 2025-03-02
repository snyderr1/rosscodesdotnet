import Link from 'next/link';

// Navigation bar

function NavBar(props: any) {
	return (
		<div className='w-full h-8 m-2 flex justify-center items-center bg-neutral-600 opacity-95 mt-0 mb-0'>
			<ul className='h-full w-[1620px] flex justify-center items-center space-x-10  text-white'>
				<li className='hover:bg-black hover:bg-opacity-10 pt-1' key='rosscodes'>
					<Link href='https://rosscodes.net/' className='font-medium text-lg hover:underline text-white'>RossCodes.net</Link>
				</li>
				<li className= 'hover:bg-black hover:bg-opacity-10 pt-1 ' key='Projects'>
					<Link href='/Projects'>{'Projects'}</Link>
				</li>
				<li className='hover:bg-black hover:bg-opacity-10 pt-1 ' key='Resume'>
					<Link href='/Resume'>{'Resume'}</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
