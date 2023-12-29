'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

export type ProjectProps = {
	project_number: number;
	project_title: string;
	project_text: string;
	project_url: string;

};

function Project(props: ProjectProps) {
	// Const [projectData, setProjectData] = useState(0);
	// def is the name of the content, so that the css can be properly applied
	// for different pages and content type

	return (
		<div className='h-full w-fit flex justify-center'>
			
			<div className='bg-neutral-400 w-max-[161px] h-max-[100px] opacity-70 mt-5 mr-3 ml-0 p-1 text-black'>
				<Image width={0} height={0} style={{ width: '100%', height: 'auto' }} layout='responsive' src={props.project_url} alt=''></Image>
				{props.project_title}
			</div>
			<div className='bg-neutral-400 w-fit h-fit opacity-70 mt-5 ml-0 mr-0 p-1 text-black'>
				{props.project_text}
			</div>
		</div>
	);
}

export default Project;
