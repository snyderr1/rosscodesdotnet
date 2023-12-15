'use client';
import React, {useEffect, useState} from 'react';

export type ProjectProps = {
	project_number: number;
	project_title: string;
	project_text: string;

};

function Project(props: ProjectProps) {
	// Const [projectData, setProjectData] = useState(0);
	// def is the name of the content, so that the css can be properly applied
	// for different pages and content type

	return (
		<div className='h-full w-fit flex justify-center'>
			<div className='bg-white w-fit h-fit opacity-70 mt-5 mr-3 ml-0'>
				{props.project_number}
				{props.project_title}
			</div>
			<div className='bg-white w-fit h-fit opacity-70 mt-5 ml-0 mr-0'>
				{props.project_text}
			</div>
		</div>
	);
}

export default Project;
