import React from "react";
import model from "../../assets/model.png";
import "./model.css";

const Model = () => {
    return (
        <div className="csc__model">
            <div className="csc__model-text">
                The
                <br />
                SupportEd
                <br />
                Model
            </div>
            <div className="csc__model-image">
                <img src={model} alt="model"></img>
            </div>
        </div>
    );
};

export default Model;
