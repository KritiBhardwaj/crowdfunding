import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function PledgeForm() {
  const user_id = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("token");
  const { id } = useParams();

  const [pledgeDetails, setPledgeList] = useState({
    image: "",
    comment: "",
    anonymous: false,
    supporter: user_id,
    project_id: id,
  });

  const history = useHistory();

  const handleToggle = (e) => {
    const { id, checked } = e.target;
    setPledgeList((newPledge) => ({
      ...pledgeDetails,
      [id]: checked,
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPledgeList((newPledge) => ({
      ...pledgeDetails,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(pledgeDetails),
    });
    return response.json();
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
          <label htmlFor="anomymous">Anonymous Contribution: </label>
          <input
            type="checkbox"
            id="anonymous"
            value="true"
            onChange={handleToggle}
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
