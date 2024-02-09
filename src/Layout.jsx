import React from 'react'
import Header from './components/header/Header1'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header1/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
