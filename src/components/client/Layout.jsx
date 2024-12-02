import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
    <main className={`absolute top-[76px] ${isSidebarOpen ? 'md:left-[224px] md:w-[calc(100%-224px)]': ''} p-1 w-full `}>
      <Outlet/>
      <Footer/>
    </main>
    </>
  )
}

export default Layout