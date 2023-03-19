import React from 'react'
import Navigation from './Nav/Navigation'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout