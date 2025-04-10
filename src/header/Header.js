import React from "react";
import "./header.css";
import Logo from "../assets/jiit2.png";
import chip from '../assets/indchip.webp'
export default function Header() {
  return (
    <div className="head">
      <div className="head-inside">
        <div className="logo_jiit">
          <img src={Logo} alt=""></img>
        </div>
        <div className="content">
          <div className="dept">
            <h2>VLSI DESIGN,FABRICATION AND CHARACTERIZATION FACILITY</h2>
          </div>
          <div className="clg">
            <h3>Department of Electronics and Communication Engineering,</h3>
            <h3>
              Jaypee Institute of Information and Technology, Noida , U.P.
            </h3>
          </div>
          <div className="clg_web">
            <p>Visit Us - {" "}
            <a className="main_page" rel="noreferrer" href="https://www.jiit.ac.in/" target="_blank">
               jiit.ac.in
            </a></p>
          </div>
        </div>
        <div className="chip">
          <img src={chip} alt=""></img>
        </div>
      </div>
      <div className="lin"></div>
    </div>
  );
}
