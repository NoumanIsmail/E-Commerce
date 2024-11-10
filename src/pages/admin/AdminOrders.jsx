import React from 'react'
import { GoPencil } from 'react-icons/go'

const AdminOrders = () => {
  return (
    <>
    {/* component */}
    <div className="flex items-center justify-between px-6 py-3 ">
      <h1 className="font-semibold text-3xl font-mono">Orders List</h1>
      {/* <button className="border-2 py-3 px-4 rounded-lg font-semibold shadow-sm bg-create hover:bg-create-hover text-white font-mono flex items-center justify-evenly"><IoIosAdd  size={24}/>Category</button> */}
    </div>
    <section className="container mx-auto p-6 font-mono overflow-auto">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Products</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="text-gray-700">
                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                <td className="px-4 py-3 text-sm border">shehzad</td>
                <td className="px-4 py-3 text-sm border">Mobile,Grocery</td>
                <td className="px-4 py-3 text-ms font-semibold border">1300</td>
                <td className='px-4 py-3 text-xs border'><span className="px-2 py-1 rounded-md bg-pending hover:bg-pending-hover text-white">Pending</span></td>
                <td className="px-4 py-3 text-sm border">
                <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-update hover:bg-update-hover text-white font-mono"><GoPencil/></button>
                {/* <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-delete hover:bg-delete-hover text-white font-mono"><RiDeleteBin7Line   /></button> */}
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                <td className="px-4 py-3 text-sm border">shehzad</td>
                <td className="px-4 py-3 text-sm border">Mobile,Grocery</td>
                <td className="px-4 py-3 text-ms font-semibold border">1300</td>
                <td className='px-4 py-3 text-xs border'><span className="px-2 py-1 rounded-md bg-completed hover:bg-completed-hover text-white">Completed</span></td>
                <td className="px-4 py-3 text-sm border">
                <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-update hover:bg-update-hover text-white font-mono"><GoPencil/></button>
                {/* <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-delete hover:bg-delete-hover text-white font-mono"><RiDeleteBin7Line   /></button> */}
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                <td className="px-4 py-3 text-sm border">shehzad</td>
                <td className="px-4 py-3 text-sm border">Mobile,Grocery</td>
                <td className="px-4 py-3 text-ms font-semibold border">1300</td>
                <td className='px-4 py-3 text-xs border'><span className="px-2 py-1 rounded-md bg-delivered hover:bg-delivered-hover text-white">Delivered</span></td>
                <td className="px-4 py-3 text-sm border">
                <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-update hover:bg-update-hover text-white font-mono"><GoPencil/></button>
                {/* <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-delete hover:bg-delete-hover text-white font-mono"><RiDeleteBin7Line   /></button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
        </>
  )
}

export default AdminOrders