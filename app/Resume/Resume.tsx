'use client';

function Resume(props: any) {
	// Def is the name of the content, so that the css can be properly applied
	// for different pages and content types
	return (
		<div className='h-full w-full flex flex-col justify-center items-center overflow-hidden'>
			<div className='h-full w-[66%]'>
				<iframe src="https://drive.google.com/file/d/1I7UDTTgt_A7j3bzfWqNtBG4tVnjZZjou/preview" width='100%' height='100%'></iframe>
			</div>
		</div>
	);
}

export default Resume;
