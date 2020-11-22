import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SubmitPledgePage from "./SubmitPledgePage";
import PledgeCard from "../components/PledgeCard/PledgeCard";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  const deleteData = async () => {
    var token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/projects/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token${token}`,
        },
        body: JSON.stringify(projectData),
      }
    );
    return response.text();
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (
      window.confirm(
        "Project ${projectData.title} will be permanently deleted. Proceed accordingly!"
      )
    ) {
      deleteData().then((response) => {
        console.log(response);
        history.push(`/`);
      });
    } else {
      history.push(`/`);
    }
  };

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
              {pledgesData.image} from {pledgesData.supporter}
            </li>
          );
        })}
      </ul>
      <button>
        <Link to={`/editProjects/${projectData.id}`}>Edit Project</Link>
      </button>
      <button>
        <Link to={`/projects/${projectData.id}/submitPledge`}>
          Submit Pledge
        </Link>
      </button>
      <button>
        <Link to={`/deleteProject/${projectData.id}`}>Delete Projecct</Link>
      </button>
    </div>
  );
}

export default ProjectPage;
