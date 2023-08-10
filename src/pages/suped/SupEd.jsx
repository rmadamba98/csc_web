import React from "react";
import { NavBar } from "../../components";
import { SupHead } from "../../containers";
import "./suped.css";

const SupEd = () => {
  return (
    <div className="SupEd">
      <div className="Header">
        <NavBar />
      </div>
      <div className="Body">
        <SupHead />
      </div>
    </div>
  );
};

export default SupEd;
