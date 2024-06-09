import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/NavBar'
import Leader from '../leaders/Leader'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Leader />
    </div>
  )
}
