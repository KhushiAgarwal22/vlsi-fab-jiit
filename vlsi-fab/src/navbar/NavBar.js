import React from 'react'
import './navbar.css'
import  {Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav-bar'>
       <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>Equipments</li>
        <li>Opportunities</li>
        <li>Our Leaders</li>
       </ul>
    </div>
  )
}
