import React from "react";
import Card from "./Card";
import Educational from "./Educational";
import "./Body.css";

function CreateCard(education) {
  return (
    <Card
      key={education.id}
      heading={education.heading}
      content={education.content}
    />
  );
}

function Body() {
  return (
    <div className="body">
      <h2 className="body-heading">EDUCATIONAL OPPORTUNITIES</h2>
      <div className="card-container">{Educational.map(CreateCard)}</div>
    </div>
  );
}

export default Body;
