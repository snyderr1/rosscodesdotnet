'use client';
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(async () => import('react-player/lazy'), {ssr: false});

function About(props: any) {
	/* Def is the name of the content, so that the css can be properly applied
    For different pages and content type */

	return (
		<div className='flex flex-col items-center'>
			<p className='mt-5 text-white'>This is me. Ross Snyder, 24 years old.</p>
			<Image className='object-scale-down h-40 w-50' width='200' height='310' src={'/me.jpg'} alt=''></Image>
			<p className='text-white'>I graduated from Oregon State in 2021 with a degree in Computer Science.</p>
			<p className='text-white'>In my free time I like to write code, hike, play video games, and ski.</p>
			<h1 className='mt-40 text-white'>(Check out this sweet trick.)</h1>
			<div className='w-[320px] h-[180px] transition-all duration-500 ease-in-out hover:h-[360px] hover:w-[640px]'>
				<ReactPlayer width='100%' height='100%' light={true} url='https://www.youtube.com/watch?v=8d1Ba01ba3w' pip={true} muted={true} />
			</div>
		</div>
	);
}

//
export default About;
