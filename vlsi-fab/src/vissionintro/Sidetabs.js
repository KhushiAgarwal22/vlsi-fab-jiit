import React from "react";
import { FaListAlt } from "react-icons/fa";
import "./side.css";
export default function Sidetabs() {
  return (
    <div className="facilities">
      <h1>ACCESS TO FACILITIES</h1>
      <div className="facu">
        <div className="facility_cont">
          <div className="facility_heading">
            <FaListAlt />
            <h2>Use Of Facility for JIIT NOIDA</h2>
          </div>
          <div className="tabs">
            <ul>
              <li>
                <a href="/coming">Manual for slot booking in VLSI Labs</a>
              </li>
              <li>
                <a href="/coming">Fund Transfer to Lab Account</a>
              </li>
              <li>
                <a href="/coming">Slot Booking Portal</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="facility_cont">
          <div className="facility_heading">
            <FaListAlt />
            <h2>Use Of Facility for External Academics</h2>
          </div>
          <div className="tabs">
            <ul>
              <li>
                <a href="/coming">Form for slot booking</a>
              </li>
              <li>
                <a href="/coming">Charges for Equipments</a>
              </li>
              <li>
                <a href="/coming">JIIT Noida Bank Details</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="facility_cont">
          <div className="facility_heading">
            <FaListAlt />
            <h2>Use Of Facility for Industry</h2>
          </div>
          <div className="tabs">
            <ul>
              <li>
                <a href="/coming">Form for slot booking</a>
              </li>
              <li>
                <a href="/coming">Charges for Equipments</a>
              </li>
              <li>
                <a href="/coming">JIIT Noida Bank Details</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
