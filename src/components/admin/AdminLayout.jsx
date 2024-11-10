import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminFooter from './AdminFooter'

const AdminLayout = () => {
  return (
    <>
    <AdminNavbar/>
    <main className='absolute top-[76px] md:left-[224px] p-1 w-full md:w-[calc(100%-224px)]'>
      <Outlet/>
    </main>
    <AdminFooter/>
    </>
  )
}

export default AdminLayout