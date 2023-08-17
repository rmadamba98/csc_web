import React from "react";
import "./suptxt.css";
import { SupedText } from "../../components";

const SupTxt = () => {
    return (
        <div className="csc__suptxt">
            <div className="csc__suptxt-white">
                <SupedText
                    title="Did you know "
                    desc="it is illegal to not attend school? Each state has a compulsory education law that requires children to be in school. But, why? Education is the foundation of success, and the first step in receiving an education is being present in school. When a child misses school, they miss out on opportunities to develop relationships with caring adults and peers and to build critical skills needed to succeed in today's world. Missing only TWO DAYS a month has devastating impacts on a child's overall health and development and puts them at risk of social isolation, school dropout, and engaging in illegal or risky behavior. Ensuring all children receive a quality education is a critical first step toward breaking intergenerational cycles of school dropout, undereducation, violence, and incarceration."
                />
                <br />
                <br />
                <SupedText
                    title="The good news "
                    desc="is that this is a solvable problem. Communities must come together to partner with students and families, remove barriers to school attendance, and implement evidence-based best practices to get kids in school and engaged in learning, and our model does just that!"
                />
            </div>
            <div className="csc__suptxt-pink">
                <div className="csc__suptxt-pink-l">
                    <h2>Introducting </h2>
                    <h1>SupportEd</h1>
                    <h2>
                        , an innovative approach to solving our nation's
                        educational crisis. SupportED is the product of over 40
                        years of research at the University of Kansas and
                        combines behavioral science with functional mentoring
                        and community collaboration to increase school
                        attendance and divert truant students and their families
                        from the juvenile justice system. We work as a village
                        to identify needs, coordinate services, and implement
                        evidence-based individualized interventions to get kids
                        in school and engaged in learning. We pair each student
                        with a caring adult mentor who teaches adaptive skills,
                        counteracts missed educational instruction, instills
                        confidence, provides support and guidance, and expands
                        opportunities. We also help students and families access
                        community resources and services. We infuse resources in
                        communities at no cost to the family and we blend the
                        talents and knowledge of diverse partners and
                        collaborators to deliver a community-based,
                        rehabilitative approach.
                    </h2>
                </div>
                <div className="csc__suptxt-pink-equal">
                    <h3>Education</h3>
                    <h3>is the great</h3>
                    <h3>equalizer.</h3>
                </div>
            </div>
        </div>
    );
};

export default SupTxt;
