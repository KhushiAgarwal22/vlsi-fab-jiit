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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/equipment">Equipments</NavLink>
        </li>
        <li>
          <NavLink to="/opportunities">Opportunities</NavLink>
        </li>
        <li>
          <NavLink to="/leader">Our Leaders</NavLink>
        </li>
      </ul>
    </nav>
  );
};