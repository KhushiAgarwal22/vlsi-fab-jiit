import React from "react";
import intro from "../assets/header_pic.jpg";
import './intro.css'
export default function Intro() {
  return (
    <div className="intro">
      <div className="pic">
        <img src={intro} alt=""></img>
      </div>
      <div className="content_intro">
        <h1>INTRODUCTION</h1>
        <h3>
          The Jaypee Institute of Information Technology (JIIT), renowned for
          its commitment to excellence in education and research, houses one of
          the advanced facilities in the realm of Very Large Scale Integration
          (VLSI) technology – the VLSI Design, Fabrication, and Characterization
          Facility. The facility is instrumental in propelling research,
          education, and industry collaboration in semiconductor technologies.
          It serves as a critical resource for students, researchers, and
          professionals aiming to excel in the ever-evolving field of VLSI.
        </h3>
      </div>
    </div>
  );
}
