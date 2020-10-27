import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditProjectForm() {
  const [projectDetails, setProjectDetails] = useState({ pledges: [] });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectDetails(data);
      });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectDetails((prevProjectDetails) => ({
      ...prevProjectDetails,
      [id]: value,
    }));
  };

  const editData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/projects/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(projectDetails),
      }
    );
    return response.json();
  };

  //get token
  const handleSubmit = (e) => {
    e.preventDefault();
    editData().then((response) => {
      console.log(response);
      history.push(`/projects/${response.id}`);
    });
  };

  return (
    <div id="create-project">
      <form>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Project Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            placeholder="Enter Project Description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="goal">Goal:</label>
          <input
            type="text"
            id="goal"
            placeholder="Enter Project Goal"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="image">Project Image: </label>
          <input
            type="text"
            id="image"
            placeholder="Enter Project Image"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="is_open">Project Open? </label>
          <input
            type="text"
            id="is_open"
            placeholder="True/False"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Update Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProjectForm;
