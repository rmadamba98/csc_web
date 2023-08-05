import React from "react";
import "./about.css";
import { Article } from "../../components";
import about from "../../assets/about.png";
import appr from "../../assets/appr.png";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="csc_conatiner">
        <div className="csc__about-container">
          <Article
            name="About Us"
            desc="CSC is a woman-owned nonprofit organization based in Lawrence, KS specializing in data-based behavioral solutions for communities in Kansas and across the United States. Founded by behavior analysts, Kelsey Dachman, Ph.D., BCBA-D, and Madison Graham, CSC offers behavior consultation services, assessment and treatment planning, community programming, professional coaching and development, and cost-effective resources for children, families, and communities. We help families, schools, care systems, and service providers infuse evidence-based behavioral strategies and programs to promote healthy youth development, create sustainable behavior change, and prepare children to exceed their potential."
          />
          <img src={about} alt="about"></img>
        </div>
        <div className="csc__appr-container">
          <div className="csc__appr-container-image">
            <img src={appr} alt="appr"></img>
          </div>
          <div className="csc__appr-container-text">
            <Article
              name="Our Approach"
              desc="Our care approach is grounded in applied behavior analysis, an evidence-based best practice treatment based on the science of behavior. We believe that behavior can be changed along the same lines that it was learned: through experience, change in habit, and improvement of adaptive skills over time. We try not to change the person, but to change the person’s behavior, and we do this by focusing on their internal and external environment. Our goal is to establish and enhance behavior that is important to our client's development and overall health."
            />
          </div>
        </div>
        <div className="csc__appr-container-end">
          Prioritizing you and your future
        </div>
      </div>
    </div>
  );
});

export default About;
