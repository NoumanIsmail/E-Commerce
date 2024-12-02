import React from "react";

const CreateProductModal = ({isOpen, onClose, onCreate}) => {
  if (!isOpen) return null;
  return (
    <>
      <div className=" fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 md:w-2/5">
          <p
            className="flex justify-end cursor-pointer"
            onClick={() => onClose()}
          >
            ❌
          </p>
          <h2 className="text-2xl font-mono font-semibold mb-4 py-2">
            Create New Product
          </h2>
          <form className="rounded-lg p-2 mb-2 ">
            <div className="flex flex-col md:flex-row md:gap-1">
              <input type="text" name="" id="" placeholder="Enter Product Name..." className="border-2 p-2  rounded-lg outline-none mb-2 w-full"/>
              <input type="number" name="" id="" placeholder="Enter Product Price..." className="border-2 p-2  rounded-lg outline-none mb-2 w-full"/>
            </div>
              <label htmlFor="" className="p-1 font-semibold">Enter Product Thumbnail</label>
              <input type="file" name="" id="" placeholder="Enter Product Thumbnail..." className="border-2 p-2  rounded-lg outline-none mb-2 w-full"/>
            <div className="flex flex-col md:flex-row md:gap-1">
              <input type="text" name="" id="" placeholder="Enter Product Description..." className="border-2 p-2  rounded-lg outline-none mb-2 w-full"/>
              <input type="number" name="" id="" className="border-2 p-2  rounded-lg outline-none  mb-2 w-full" placeholder="Enter Product Stock..."/>
            </div>
            <label htmlFor="" className="p-1 font-semibold">Enter Product Images (max 5)</label>
            <input type="file" name="" id="" placeholder="Enter Product Images..." className="border-2 p-2  rounded-lg outline-none mb-2 w-full"/>
          </form>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onCreate();
                onClose(); // Close modal after deletion
              }}
              className="px-4 py-2 bg-create text-white rounded-lg hover:bg-create-hover"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProductModal;
