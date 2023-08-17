import React from "react";
import "./support.css";
import { Link } from "react-router-dom";
import supportLogo from "../../assets/supportLogo.png";

const Support = () => {
    return (
        <div className="csc__support">
            <div className="csc__support-box">
                <div className="csc__support-box-text">
                    Bring SupportEd to <br />
                    your Community!
                    <br />
                    <Link to="/cont">
                        <button>Contact Us</button>
                    </Link>
                </div>
                <div className="csc__support-box-desc">
                    Although truancy impacts schools nationwide, many schools do
                    not have systems in place that allow timely and effective
                    action. Truancy interventions are most effective when
                    families, schools, and community agencies work
                    collaboratively to address the interrelated variables
                    correlated with school non-attendance. SupportEd’s model
                    engages the entire community in a collaborative effort to
                    get kids in school and engaged in learning. SupportED’s
                    45-year history in Douglas County speaks to the program’s
                    durability and our long line of research supports the
                    program’s effectiveness in reducing truancy in Douglas
                    County. We are confident that SupportEd can help reduce
                    truancy in your community, too. CSC can help you ensure that
                    all children and youth in your community are receiving the
                    education to which they are entitled.
                </div>
            </div>
            <div className="csc__support-logos">
                <img src={supportLogo} alt="supportLogo"></img>
            </div>
        </div>
    );
};

export default Support;
