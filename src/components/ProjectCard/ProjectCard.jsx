import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  console.log(projectData, "hello");
  return (
    <div className="project-card">
      <Link to={`/projects/${projectData.id}`}>
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
        <h3>{projectData.owner}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;
