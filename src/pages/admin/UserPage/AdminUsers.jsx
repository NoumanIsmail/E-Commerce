import React from 'react'

const AdminUsers = () => {
  return (
    <>
    {/* component */}
    <div className="flex items-center justify-between px-6 py-3 ">
      <h1 className="font-semibold text-3xl font-mono">Users List</h1>
      {/* <button className="border-2 py-3 px-4 rounded-lg font-semibold shadow-sm bg-create hover:bg-create-hover text-white font-mono flex items-center justify-evenly"><IoIosAdd  size={24}/>Category</button> */}
    </div>
    <section className="container mx-auto p-6 font-mono overflow-auto">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="text-gray-700">
               
                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                <td className="px-4 py-3 text-sm border">Ishfaq</td>
                <td className="px-4 py-3 text-sm border">Ishfaq@gmail.com</td>
                <td className="px-4 py-3 text-sm border">03232122463</td>
                {/* <td className="px-4 py-3 text-sm border">
                <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-update hover:bg-update-hover text-white font-mono"><GoPencil/></button>
                <button className="border-2 py-1 px-2 rounded-lg font-semibold shadow-sm bg-delete hover:bg-delete-hover text-white font-mono"><RiDeleteBin7Line   /></button>
                </td> */}
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
        </>
  )
}

export default AdminUsers