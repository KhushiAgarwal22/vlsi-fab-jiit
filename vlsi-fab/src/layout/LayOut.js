import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Nav from '../navbar/Nav'
export default function Layout() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Outlet/>
    </div>
  )
}
