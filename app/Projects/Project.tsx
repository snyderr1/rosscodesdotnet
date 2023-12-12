'use client';
import React, { useEffect, useState } from 'react';

interface Project {
	project_number: number;
	project_title: string;
	project_text: string;

}

function Project(props: any) {
	// Const [projectData, setProjectData] = useState(0);
	// def is the name of the content, so that the css can be properly applied
	// for different pages and content type

	return (
		<div className='h-full w-full flex justify-center'>
			<div className='bg-white w-[12%] h-[25%] opacity-70 m-auto mt-5 mr-3 ml-5'>
				{props.project_number}
				{props.project_title}
			</div>
			<div className='bg-white w-[33%] h-[25%] opacity-70 m-auto mt-5 ml-0 mr-5'>
				{props.project_text}
			</div>
		</div>
	);
}

export default Project;