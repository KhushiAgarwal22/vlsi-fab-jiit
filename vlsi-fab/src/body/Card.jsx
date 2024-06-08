import React from "react";
import "./Body.css";

function Card(props) {
  return (
    <div className="card">
      <h2 className="card-heading">{props.heading}</h2>
      <p className="card-content">{props.content}</p>
    </div>
  );
}

export default Card;
