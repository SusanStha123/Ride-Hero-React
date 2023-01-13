import React from 'react';

const DeleteVehicle = ({ closeDeleteModal }) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div id="delete-vehicle" className="fixed left-0 right-0 top-0 z-50 w-full p-4 min-h-screen flex justify-center items-center" style={{
        background: "rgba(0,0,0,0.5)",
      }}>
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button onClick={() => {
              closeDeleteModal(false);
            }} type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Close modal</span>
            </button>
            <svg class="text-back h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            <p class="mb-4 text-gray-500">Are you sure you want to delete this item?</p>
            <div class="flex justify-center items-center space-x-4">
              <button data-modal-toggle="deleteModal" type="button" class="btn flex items-center text-white font-medium tracking-normal text-base py-1.5 px-3 rounded active:scale-[.97]">
                No, cancel
              </button>
              <button type="submit" class="delete-btn flex items-center text-white font-medium tracking-normal text-base py-1.5 px-3 rounded active:scale-[.97]">
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteVehicle