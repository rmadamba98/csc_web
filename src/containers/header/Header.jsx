import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function donate() {
  alert("Donate Slay");
}

const Header = () => {
  return (
    <div>
      <div className="csc__header-container">
        <Link to="/">
          <div className="csc__navbar-links-logo">
            <img src={logo} alt="logo"></img>
          </div>
        </Link>
        <div className="csc__header-container-content">
          <h1>
            Building a world filled with
            <br />
            supportive communities
          </h1>
          <button onClick={donate}>Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
