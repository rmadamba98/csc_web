import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <Link to="/suped">SupportEd</Link>
    <Link to="/cons">Consulting</Link>
    <br />
    <Link to="/cont">Contact</Link>
    <Link to="/don">Donate</Link>
  </>
);

const NavBar = () => {
  return (
    <div className="csc__navbar">
      <div className="csc__navbar-links">
        <div className="csc__navbar-links_container">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
