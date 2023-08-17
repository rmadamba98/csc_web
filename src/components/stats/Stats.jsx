import React from "react";
import "./stats.css";

const Stats = (props) => {
    return (
        <div className="csc__stats">
            <h1>{props.num}</h1>
            <h2>{props.desc}</h2>
        </div>
    );
};

export default Stats;
