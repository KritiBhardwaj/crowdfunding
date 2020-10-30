import React from "react";
import image from "./errorImage.gif";

const NotFoundPage = () => {
  return (
    <div id="error-Page">
      <h1> Page Not Found </h1>;
      <img src={image} alt="Page not found" />
    </div>
  );
};

export default NotFoundPage;
