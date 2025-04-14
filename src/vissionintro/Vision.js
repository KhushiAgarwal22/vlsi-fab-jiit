import React from "react";
import Card from "../body/Card";
import vision from "./visionData";
function CreateCard(education) {
    return (
      <Card
        key={education.id}
        heading={education.heading}
        content={education.con}
      />
    );
  }
  
export default function Vision() {
  return (
    <div className="viss">
      <h1>FOUNDATIONAL OBECTIVES AND VISIONS</h1>
      <div className="vis_con">
        {vision.map(CreateCard)}
      </div>
    </div>
  );
}
