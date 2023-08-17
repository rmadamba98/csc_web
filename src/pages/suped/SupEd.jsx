import React from "react";
import { NavBar, Footer } from "../../components";
import {
    SupHead,
    SupTxt,
    Model,
    Process,
    SupedStats,
    Support,
} from "../../containers";
import "./suped.css";

const SupEd = () => {
    return (
        <div className="SupEd">
            <div className="Header">
                <NavBar />
            </div>
            <div className="Body">
                <SupHead />
                <SupTxt />
                <Model />
                <Process />
                <SupedStats />
                <Support />
                <Footer />
            </div>
        </div>
    );
};

export default SupEd;
