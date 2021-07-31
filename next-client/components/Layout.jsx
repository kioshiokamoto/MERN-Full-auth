import React from "react"
import Navbar from "../components/Navbar"
function Layout({ children, withNav, withFooter }) {
  return (
    <>
      {withNav && <Navbar />}
      {children}
      {withFooter && <p>Footer</p>}
    </>
  )
}

export default Layout