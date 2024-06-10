import React from "react";
import "./intro.css";
import Vision from "./Vision";
import Marquee from "react-fast-marquee";
import t1 from "../assets/tech1.jpg";
import t2 from "../assets/tech2.jpg";
import t3 from "../assets/tech3.jpg";
import t4 from "../assets/header_pic.jpg";
import t5 from "../assets/tech4.jpg";
import intro from "../assets/intro_3.png";
export default function Intro() {
  return (
    <div className="whole">
      <Marquee speed={150} className="pics">
        <img src={t1} alt="pic" />
        <img src={t2} alt="pic" />
        <img src={t5} alt="pic" />
        <img src={t3} alt="pic" />
        <img src={t4} alt="pic" />
      </Marquee>
      <div className="content_intro">
        <div className="intro-container">
          <div className="intro-content">
            <h3>INTRODUCTION</h3>
            <p>
              The Jaypee Institute of Information Technology (JIIT), renowned
              for its commitment to excellence in education and research, houses
              one of the advanced facilities in the realm of Very Large Scale
              Integration (VLSI) technology - the VLSI Design, Fabrication, and
              Characterization Facility. The facility is instrumental in
              propelling research, education, and industry collaboration in
              semiconductor technologies. It serves as a critical resource for
              students, researchers, and professionals aiming to excel in the
              ever-evolving field of VLSI.
            </p>
          </div>
          <div className="intro-image">
            <img src={intro} alt="into_image" />
          </div>
        </div>
      </div>
      <div className="inaug2">
        <Marquee speed={120} className="inaug">
          <h2>Inauguration on 16 June,2024,11:00 AM in JIIT Campus !!&emsp;</h2>
        </Marquee>
      </div>
      <Vision />
    </div>
  );
}
