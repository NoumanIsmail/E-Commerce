import React from "react";

const CreateCategoryModal = ({ isOpen, onClose, OnCreate }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <p
            className="flex justify-end cursor-pointer"
            onClick={() => onClose()}
          >
            ❌
          </p>
          <h2 className="text-lg font-semibold mb-4 py-2">
            Create New Category
          </h2>
          <form className="rounded-lg p-2 mb-2 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Category Name..."
              className="border-2 p-2  rounded-lg outline-none mb-2 w-full"
            />
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
                OnCreate();
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

export default CreateCategoryModal;
