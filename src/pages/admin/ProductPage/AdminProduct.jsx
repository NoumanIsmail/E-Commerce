import React, { useState } from 'react'
import { BiDetail } from 'react-icons/bi'
import { GoPencil } from 'react-icons/go'
import { IoIosAdd } from 'react-icons/io'
import { RiDeleteBin7Line } from 'react-icons/ri'
import DeleteModal from '../../../components/admin/DeleteModal'
import CreateProductModal from './CreateProductModal'

const AdminProduct = () => {
  const [open , setOpen]  = useState(false)
  const [openCreateModal, setOpenCreateModal ] = useState(false)
  const closeModal = () =>{
    setOpen(false)
  }
  const closeCreateModal = () =>{
    setOpenCreateModal(false)
  }
  return (
    <>
    {/* component */}
    <div className="flex items-center justify-between px-6 py-3 ">
      <h1 className="font-semibold text-3xl font-mono">Product List</h1>
      <button onClick={() => setOpenCreateModal(true)} className="border-2 py-3 px-4 rounded-lg font-semibold shadow-sm bg-create hover:bg-create-hover text-white font-mono flex items-center justify-evenly"><IoIosAdd  size={24}/>Product</button>
    </div>
    <section className="container mx-auto p-6 font-mono overflow-auto">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="text-gray-700">
               
                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                <td className="px-4 py-3 text-sm border">Infinix Note 7 Pro</td>
                <td className="px-4 py-3 text-sm font-semibold border">1800</td>
                <td className="px-4 py-3 text-sm border">Mobile</td>
                <td className="px-4 py-3 text-sm border">20</td>
                <td className="px-4 py-3 text-sm border">
                <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-update hover:bg-update-hover text-white font-mono"><GoPencil/></button>
                <button onClick={()=> setOpen(true)} className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-delete hover:bg-delete-hover text-white font-mono"><RiDeleteBin7Line   /></button>
                <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-detail hover:bg-detail-hover text-white font-mono"><BiDetail   /></button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <DeleteModal isOpen={open} onClose={closeModal} />
    <CreateProductModal isOpen={openCreateModal} onClose={closeCreateModal}/>
        </>
  )
}

export default AdminProduct