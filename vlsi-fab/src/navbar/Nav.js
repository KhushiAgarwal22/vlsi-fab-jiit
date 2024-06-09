import React, { useState } from "react";

import "./nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navv">
      <div className="menu navv" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(!menuOpen)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/equipment" onClick={() => setMenuOpen(!menuOpen)}>Equipments</NavLink>
        </li>
        <li>
          <NavLink to="/opportunities" onClick={() => setMenuOpen(!menuOpen)}>Opportunities</NavLink>
        </li>
        <li>
          <NavLink to="/leader" onClick={() => setMenuOpen(!menuOpen)}>Our Leaders</NavLink>
        </li>
      </ul>
    </nav>
  );
};