import React from "react";
import Entry from "./Entry";
import Hardware from './Hardware.js';
import Software from './Software.js';
import "./Equipment.css";

function CreateEntry(comp) {
  return (
    <Entry
      key={comp.id}
      img={comp.img}
      Heading={comp.Heading}
      Content={comp.Content}
    />
  );
}

export default function Equipment() {
  return (
    <div className="equipment-container">
      <div className="hardware">
        <h2 className="hardware_heading">Hardware</h2>
        <div className="hardware-content">{Hardware.map(CreateEntry)}</div>
      </div>

      <div className="software">
        <h2 className="software_heading">Software</h2>
        <div className="software-content">{Software.map(CreateEntry)}</div>
      </div>
    </div>
  );
}
