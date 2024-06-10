import React from "react";
import "./about.css";
import data from "./aboutData";
import t1 from "../assets/cad.jpg";
import t2 from "../assets/fab.jpg";
import t3 from "../assets/cat.jpg";
export default function About() {
  return (
    <div className="about">
      <h1>Infrastructure and Technology</h1>
      <p class="aboutIntro">
        The VLSI (Very Large Scale Integration) Design, Fabrication, and
        Characterization Facility stands at the forefront of semiconductor
        innovation, offering a comprehensive suite of tools and technologies
        essential for the entire process of integrated circuit (IC) development.
        From initial design to final deployment, the facility supports a broad
        spectrum of activities, ensuring that each phase of semiconductor
        development is executed with precision and efficiency
      </p>
      <div className="abt_cont">
        <div className="cad">
          <h2>{data[0].head}</h2>
          <p>{data[0].cont}</p>
        </div>
        <div className="abtimg">
          <img src={t1} alt="" />
        </div>
      </div>
      <div className="abt_cont">
        <div className="cad">
          <h2>{data[1].head}</h2>
          <p>{data[1].cont}</p>
        </div>
        <div className="abtimg">
          <img src={t2} alt="" />
        </div>
      </div>
      <div className="abt_cont">
        <div className="cad">
          <h2>{data[2].head}</h2>
          <p>{data[2].cont}</p>
        </div>
        <div className="abtimg">
          <img src={t3} alt="" />
        </div>
      </div>
    </div>
  );
}
