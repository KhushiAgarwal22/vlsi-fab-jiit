import React from "react";
import "./Equipment.css";

export default function Entry(props) {
  return (
    <div className="entry">
      <img src={props.img} className="entry-image" alt={props.Heading} />
      <div className="entry-heading">{props.Heading}</div>
      <div className="entry-content">{props.Content}</div>
    </div>
  );
}
