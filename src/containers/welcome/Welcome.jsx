import React from "react";
import "./welcome.css";
import suped from "../../assets/suped.png";
import consult from "../../assets/consult.png";
import { PopUp } from "../../components";
import { Link } from "react-router-dom";

const Welcome = ({ aboutRef }) => {
  const scrollWithUseRef = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="csc__welcome-container">
        <div className="csc__welcome-container-about">
          <h1>Welcome to CSC</h1>
          <h2>
            Center for Supportive Communities is a 501c3 organization in
            Lawrence, Kansas
            <br />
            dedicated to using behavior science to create equal opportunities
            and meaningful
            <br />
            change for children, families, and communities.
            <br />
          </h2>
          <div className="csc__welcome-container-about-buttons">
            <button onClick={scrollWithUseRef}>About Us</button>
            <button onClick={scrollWithUseRef}>Our Approach</button>
          </div>
        </div>
        <div className="csc__welcome-container-services">
          <div className="csc__welcome-container-services-text">
            <h1>Our Services</h1>
            <h2>
              At CSC, we are dedicated to advancing data-driven and pragmatic
              behavioral services for children, youth, and families, and we
              specialize in the prevention and treatment of challenging behavior
              common for neurotypical children and teens.
            </h2>
          </div>
          <div className="csc__welcome-container-services-photos">
            <div className="csc__welcome-container-services-photos-suped">
              <Link to="#suped">
                <PopUp
                  name="SupportEd"
                  desc="School Attendance Program"
                  img=<img src={suped} alt="suped"></img>
                />
              </Link>
            </div>
            <div className="csc__welcome-container-services-photos-consult">
              <Link to="#cons">
                <PopUp
                  name="Consulting"
                  desc="Help us help you"
                  img=<img src={consult} alt="consult"></img>
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
