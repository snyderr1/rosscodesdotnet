'use client';
import Image from 'next/image';
import React, {useState, useEffect, useRef, useLayoutEffect, Fragment} from 'react';

function Home(props: any) {
	// Def is the name of the content, so that the css can be properly applied
	// for different pages and content types
	return (
		<div className='h-auto w-auto flex flex-col items-center'>
			<Image className='object-scale-down h-40 w-50' width='200' height='310' src='me.jpg' alt=''></Image>
			<div className='mt-5 animate-fadefirst  text-white'>Hey. This is my website. React and Node.js</div>
			<p className='animate-fadesecond  text-white'>Check me out/Contact me:</p>
			<div className='flex flex-row mt-20 '>
				<ImgLink className='animate-fadethird' name='git' src={'/git.png'} link='https://github.com/snyderr1/' linkText='github.com/snyderr1' alt='' />
				<ImgLink className='animate-fadethird' name='email' src={'/email.png'} link='mailto:rossesny@gmail.com' linkText='rossesny@gmail.com' alt='' />
				<ImgLink className='animate-fadethird' name='LinkedIn' src={'/link.png'} link='https://www.linkedin.com/in/ross-snyder-3788541a2/' linkText='linkedin.com/ross-snyder' alt='' />
			</div>
		</div>
	);
}

type ImgLinkProps = {

	src: string;
	alt: string;
	name: string;
	link: string;
	linkText: string;
	className: string;

};

function ImgLink(props: ImgLinkProps) {
	return (
		<div className={`flex flex-row mx-5 ${props.className}`}>
			<Image className={`w-10 h-10 mr-3 ${props.className}`} width='120' height='120' src={props.src} alt={props.alt}></Image>
			<a className={props.className + ' mt-2 text-white'} href={props.link}>{props.linkText}</a>
		</div>
	);
}

export default Home;
