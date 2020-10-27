import React, { useState } from "react";

function ProjectForm() {
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectDetails((prevProjectDetails) => ({
      ...prevProjectDetails,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      window.alert("Not Logged In");
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(projectDetails),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log(response);
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
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
