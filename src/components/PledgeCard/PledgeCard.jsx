import React from "react";
import { Link } from "react-router-dom";
import "./PledgeCard.css";

function PledgeCard(props) {
  const { pledgeData } = props;
  console.log(pledgeData, "hello");
  return (
    <div className="pledge-card">
      <Link to={`/projects/${pledgeData.id}`}>
        <img src={pledgeData.image} />
        <h3>{pledgeData.comment}</h3>
        <h3>{pledgeData.supporter}</h3>
      </Link>
    </div>
  );
}

export default PledgeCard;
