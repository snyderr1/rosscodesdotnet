'use client'
import React from 'react';
import useState from 'react';


function Projects(props) {
    //const [projectData, setProjectData] = useState(0);
    //def is the name of the content, so that the css can be properly applied
    //for different pages and content type 
    return (
        <div className="Projects">
            <div className="project-container">
                {//{Object.entries(props.projectInfo).map((info) =>}
                }
                {// <GenericText key={info[0]} title={info[0]} text={info[1]} />)}}
                }
            </div>
            {//<div className="Data">{this.state.ProjectData}</div>
            }
        </div>
    );
}

function GenericText(props) {
    return (
        <div className="textBox">
            <h1 className="textBox-title">{props.title}</h1>
            <p className="textBox-text">{props.text}</p>
        </div>
    )
}

export default Projects;