import React from "react";
import "./process.css";
import process from "../../assets/process.png";

function donate() {
    alert("Donate Slay");
}
const Process = () => {
    return (
        <div className="csc__process">
            <div className="csc__process-image">
                <img src={process} alt="process"></img>
            </div>
            <div className="csc__process-text">
                <h1>The SupportEd Process</h1>
                <ul className="process-list">
                    <li>The student meets the legal definition of truancy.</li>
                    <li>
                        The student's school reports the student to the State.
                    </li>
                    <li>
                        The student and their family are offered SupportEd in
                        lieu of court involvement.
                    </li>
                    <li>
                        The student is paired with a mentor who facilitates
                        weekly 1.5-hr meetings, monitors weekly attendance,
                        implements a reinforcement-based intervention, and
                        bridges communication gaps between the family and
                        school.
                    </li>
                    <li>
                        We administer a functional assessment of the student's
                        truant behavior to identify the contributing and
                        maintaining factors.
                    </li>
                    <li>
                        We create an attendance improvement plan based on the
                        assessment results.
                    </li>
                    <li>
                        The mentor counteracts missed educational instruction,
                        builds skills, instills confidence, solves problems, and
                        reinforces school attendance.
                    </li>
                    <li>
                        The family receives assistance in accessing needed
                        community resources and services.
                    </li>
                    <li>
                        The intervention is systematically faded based on the
                        student's performance.
                    </li>
                    <li>
                        Court backup is requested only after reasonable efforts
                        are exhausted and the student's performance remains
                        stable or worsens.
                    </li>
                </ul>
                <button onClick={donate}>Donate</button>
            </div>
        </div>
    );
};

export default Process;
