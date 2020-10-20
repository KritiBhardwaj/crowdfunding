import React, { useState, useEffect } from "react"; 
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        // console.log("check", process.env.REACT_APP_API_URL)
        fetch(`${process.env.REACT_APP_API_URL}/projects`).then((results) => {
        // console.log("hello", results)
        return results.json();
        })
        .then((data) => {
        // console.log("hello2")
        setProjectList(data);
        });
    }, []); 



    return (
        <div id="project-list">
        {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
        })}
        </div>
    );
}
export default HomePage; 

