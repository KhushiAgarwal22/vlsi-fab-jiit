import React from 'react'
import './navbar.css'
import  {Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav-bar'>
       <ul className="nav-list">
        <li><Link to="/" className='item'>Home</Link></li>
        <li><Link to="/about" className='item'>About</Link></li>
        <li>Equipments</li>
        <li><Link to="/opportunities" className='item'>Opportunities</Link></li>
        <li>Our Leaders</li>
       </ul>
    </div>
  )
}
