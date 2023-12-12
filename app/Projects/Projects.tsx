'use client';
import React, {useEffect, useState} from 'react';
import Project from './Project';

function Projects(props: any) {
	// Const [projectData, setProjectData] = useState(0);
	// def is the name of the content, so that the css can be properly applied
	// for different pages and content type
	const [dbData, setDbData] = useState<Project[]>([]);
	const [dbStatus, setDbStatus] = useState(404);
	useEffect(() => {
		const queryDB = async () => {
			const response = await fetch('http://143.198.66.254', {
				method: 'GET',
			})
			const data = await response.json();
			setDbStatus(response.status);
			setDbData(data.rows);
		}
		queryDB();
	}, []);

	return (
		<div className='h-full w-full flex justify-center'>
			{dbData.map(proj => {
				return <Project project_number={proj.project_number} project_title={proj.project_title} project_text={proj.project_text}></Project>
			})};
		</div>
	);
}

export default Projects;
