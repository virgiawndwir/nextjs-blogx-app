import React from 'react'

const SuccessModal = ({ isModalOpen, closeModal, formData }) => {
  return (
    <div>
      {isModalOpen && (
          <div
            data-modal-placement="top-center"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Form Submitted Successfully
              </h2>
              <div className="mb-4">
                <strong>Name:</strong> {formData.name}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {formData.email}
              </div>
              <div className="mb-4">
                <strong>Message:</strong> {formData.message}
              </div>
              <button
                onClick={closeModal}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        )}
    </div>
  )
}

export default SuccessModal