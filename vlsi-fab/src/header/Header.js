import React from "react";
import Logo from '../assets/logo_jiit.png';
import Head from '../assets/header_pic.jpg';
import "./header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="head-inside">
        <div className="logo_jiit">
          <img src={Logo} alt="JIIT" className="logo"></img>
        </div>
        <div className="content">
          <h1>VLSI DESIGN, FABRICATION AND</h1>
          <h1>CHARACTERIZATION FACULTY</h1>
          <h2>Jaypee Institute of Information and Technology</h2>
        </div>
        <div className="head_pic">
        <img src={Head} alt="Students" className="stud"></img>
        </div>
      </div>
    </div>
  );
}
