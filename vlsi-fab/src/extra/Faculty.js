import React from "react";
import profs from "./facul";
import './fac.css'
export default function Faculty() {
  return (
    <div className="facc">
      <h1>OUR FACULTY</h1>
      <div className="faculty">
      {profs.map((prof, idx) => {
        return (
          <div className="prof" key={idx}>
            <img src={prof.pic}></img>
            <p>{prof.name}</p>
          </div>
        );
      })}</div>
    </div>
  );
}
