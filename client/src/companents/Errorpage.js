import React from "react";
import { Link } from "react-router-dom";

export const Errorpage = () => {
  return (
    <div className="error-container">
      <div className="status">
        <h1>404</h1>
      </div>
      <div className="message">
        <h2>page not found</h2>
      </div>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};
