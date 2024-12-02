import React from "react";

function DeleteModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <p className="flex justify-end cursor-pointer" onClick={()=>onClose()}>❌</p>
          <h2 className="text-lg font-semibold mb-4 py-2">⚠ Are You Sure You Want To Delete </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete();
                onClose(); // Close modal after deletion
              }}
              className="px-4 py-2 bg-delete text-white rounded-lg hover:bg-delete-hover"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
