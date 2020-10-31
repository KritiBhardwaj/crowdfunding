import React, { useState } from "react";

function PledgeForm() {
  const [pledgeDetails, setPledgeDetails] = useState({
    image: "",
    comment: "",
    anonymous: "",
  });

  // How to get a foreign key so pledge is linked to project and supporter?
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPledgeDetails((prevPledgeDetails) => ({
      ...prevPledgeDetails,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      window.alert("Not Logged In");
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(pledgeDetails),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log(response);
    });
  };

  return (
    <div id="create-pledge">
      <form>
        <div>
          <label htmlFor="image">Image Contribution: </label>
          <input
            type="text"
            id="image"
            placeholder="Enter link to image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            id="comment"
            placeholder="Enter comment about image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="anomymous">Anonymous: </label>
          <input
            type="text"
            id="anonymous"
            placeholder="true/false"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit Pledge
          </button>
        </div>
      </form>
    </div>
  );
}

export default PledgeForm;
