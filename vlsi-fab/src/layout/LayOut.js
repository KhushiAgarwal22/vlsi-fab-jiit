import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/NavBar'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
