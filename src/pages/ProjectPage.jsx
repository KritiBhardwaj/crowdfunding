import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { allProjects } from "../data";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        
        fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
        .then((results) => {
        return results.json();   
        })
        .then((data) => {
        setProjectData(data);
        });
    }, []);


    return (
        <div>
        <h2>{projectData.title}</h2>
        <h3>Created at: {projectData.date_created}</h3>
        {/* below is the syntax for string interpolation */}
        <h3>{`Status: ${projectData.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
        {projectData.pledges.map((pledgesData, key) => {
            return (
            <li>
            {pledgesData.amount} from {pledgesData.supporter}
            </li>
            );
        })}
        </ul>
        </div>

    );
}

export default ProjectPage; 


