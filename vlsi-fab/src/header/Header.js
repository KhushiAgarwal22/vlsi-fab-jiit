import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="head-inside">
        <div className="logo_jiit">
          <img src="./assets/logo_jiit.png" alt=""></img>
        </div>
        <div className="content">
          <h1>VLSI DESIGN, FABRICATION AND</h1>
          <h1>CHARACTERIZATION fACULTY</h1>
          <h2>Jaypee Institute of Information and Technology</h2>
        </div>
        <div className="head_pic">
        <img src="./assets/header_pic.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}
