'use client';

function Resume(props: any) {
	// Def is the name of the content, so that the css can be properly applied
	// for different pages and content types
	return (
		<div className='h-full w-full flex flex-col justify-center items-center overflow-hidden'>
			<div className='h-full w-[66%]'>
				<embed src='/ross_resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit' type='application/pdf' width='100%' height='100%' />
			</div>
		</div>
	);
}

export default Resume;
