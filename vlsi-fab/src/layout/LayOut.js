import React from 'react'
import Header from '../header/Header'
import Nav from '../navbar/Nav'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Outlet/>
    </div>
  )
}
