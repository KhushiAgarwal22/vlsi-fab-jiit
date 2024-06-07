import React from "react";
import "./header.css";
import Logo from "../assets/jiit2.png";

export default function Header() {
  return (
    <div className="head">
      <div className="head-inside">
        <div className="logo_jiit">
          <img src={Logo} alt=""></img>
        </div>
        <div className="content">
          <div className="dept">
            <h2>VLSI DESIGN, FABRICATION AND CHARACTERIZATION FACULTY</h2>
          </div>
          <div className="clg">
            <h3>Department of Electronics and Communication Engineering,</h3>
            <h3>
              Jaypee Institute of Information and Technology, Noida , U.P.
            </h3>
          </div>
          <div className="clg_web">
            <p>Visit Us - {" "}
            <a className="main_page" href="https://www.jiit.ac.in/">
               jiit.ac.in
            </a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
