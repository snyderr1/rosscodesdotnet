'use client';
import React, {useEffect, useState} from 'react';
import Project from './Project';
import type {ProjectProps} from './Project';

type ProjectData = {
	rows: ProjectProps[];
};
function Projects(props: any) {
	// Const [projectData, setProjectData] = useState(0);
	// def is the name of the content, so that the css can be properly applied
	// for different pages and content type
	const [dbData, setDbData] = useState<ProjectProps[]>([]);
	const [dbStatus, setDbStatus] = useState(404);
	useEffect(() => {
		const queryDb = async () => {
			const response = await fetch('http://143.198.66.254', {
				method: 'GET',
			});

			const data = await response.json() as ProjectData;
			setDbStatus(response.status);
			setDbData(data.rows);
			if (response.status === 200) {
				return data.rows;
			}

			return [];
		};

		queryDb().then(result => {
			setDbData(result);
		})
			.catch(err => {
				console.log('db access failure');
			});
	}, []);

	return (
		<div className='h-full w-full flex justify-center'>
			{dbData.map(proj => (
				<Project key={proj.project_number} project_number={proj.project_number} project_title={proj.project_title} project_text={proj.project_text}/>
			))}
		</div>
	);
}

export default Projects;
