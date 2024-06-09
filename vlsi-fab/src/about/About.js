import React, { useState } from "react";
import "./about.css";
import data from "./aboutData";
import t1 from "../assets/tech1.jpg";
import t2 from "../assets/tech2.jpg";
import t3 from "../assets/tech3.jpg";
export default function About() {
  const [prop, setProp] = useState(data[0]);
  const [imgProp, setImgProp] = useState(t1);
  return (
    <div className="about">
      <h1>Infrastructure and Technology</h1>
      <p>
        The VLSI (Very Large Scale Integration) Design, Fabrication, and
        Characterization Facility stands at the forefront of semiconductor
        innovation, offering a comprehensive suite of tools and technologies
        essential for the entire process of integrated circuit (IC) development.
        From initial design to final deployment, the facility supports a broad
        spectrum of activities, ensuring that each phase of semiconductor
        development is executed with precision and efficiency
      </p>
      <ul className="butt_tech">
        <li>
          <button
            onClick={() => {
              setProp(data[0]);
              setImgProp(t1);
            }}
          >
            CAD TOOLS
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setImgProp(t2);
              setProp(data[1]);
            }}
          >
            FABRICATION EQUIPMENT
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setProp(data[2]);
              setImgProp(t3);
            }}
          >
            CHARACTERIZATION AND TESTING
          </button>
        </li>
      </ul>
      <div className="abt_cont">
        <div className="cad">
          <h2>{prop.head}</h2>
          <p>{prop.cont}</p>
        </div>
        <div className="abtimg">
          <img src={imgProp} alt="" />
        </div>
      </div>
    </div>
  );
}
