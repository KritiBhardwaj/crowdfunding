import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function DeleteProject() {
  //variable
  const [projectData, setProjectData] = useState({});
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
  }, [id]);

  const [credentials, setCredentials] = useState({
    id: id,
    title: "",
  });

  useEffect(() => {
    setCredentials({
      id: id,
      title: projectData.title,
    });
  }, [projectData]);

  const postData = async () => {
    let token = window.localStorage.getItem("token");

    const response = await fetch(
      `${process.env_REACT_APP_API_URL}/projects/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "applications/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(credentials),
      }
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (credentials.id != null) {
      console.log(credentials);
      alert(`Are you sure you want to delte ${credentials.title}`);

      postData().then((resonse) => {
        console.log(response);
        alert("Project permanently deleted");
        history.push(`/projects/`);
      });
    }
  };

  return (
    <div>
      <button className="button-danger" type="submit" onClick={handleDelete}>
        Delete Project
      </button>
    </div>
  );
}

export default DeleteProject;
