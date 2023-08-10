import React from "react";
import "./suphead.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SupHead = () => {
  return (
    <div>
      <div className="csc__suphead-container">
        <Link to="/">
          <div className="csc__navbar-links-logo">
            <img src={logo} alt="logo"></img>
          </div>
        </Link>
        <div className="csc__suphead-container-content">
          <h1>SupportEd</h1>
          <h2>
            For more than 40 years, SupportEd has been committed to using
            evidence-based strategies to advance educational equity, increase
            school attendance and engagement, and decrease system involvement.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SupHead;
