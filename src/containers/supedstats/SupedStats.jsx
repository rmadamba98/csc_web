import React from "react";
import "./supedstats.css";
import { Stats } from "../../components";
import saying from "../../assets/saying.png";
import logos from "../../assets/logos.png";

const SupedStats = () => {
    return (
        <div className="csc__supedstats">
            <div className="csc__supedstats-blocks">
                <div className="csc__supedstats-blocks-content">
                    <Stats num="605" desc="students served since 2008" />
                    <Stats num="75%" desc="graduated the program" />
                </div>
            </div>
            <div className="csc__supedstats-saying">
                <img src={saying} alt="saying"></img>
            </div>
            <div className="csc__supedstats-logos">
                <img src={logos} alt="logos"></img>
            </div>
        </div>
    );
};

export default SupedStats;
