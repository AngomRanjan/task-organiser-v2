/* eslint-disable react/prop-types */
import { useRef } from 'react';

const AcConfirm = ({
  isOpen,
  onClose,
  onConfirm,
  confirmMessage = 'Confirm your action',
}) => {
  const dialogRef = useRef(null);

  // Open or close the modal based on the isOpen prop
  if (isOpen && dialogRef.current) {
    dialogRef.current.showModal();
  } else if (!isOpen && dialogRef.current) {
    dialogRef.current.close();
  }

  return (
    <>
      <style>
        {`
          dialog::backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(5px);
          }
        `}
      </style>
      <dialog ref={dialogRef} className='w-80 rounded-md shadow-lg pb-4'>
        <h2 className='bg-blue-600 text-white text-lg font-semibold text-center mb-4'>
          Required Confirmation
        </h2>
        <p className='pl-4 mb-1'>You are about to :</p>
        <p className='pl-8 mb-2'>{confirmMessage}</p>
        <p className='pl-4 mb-4'>Are you sure? Click OK to confirm.</p>
        <div className='flex justify-center gap-2'>
          <button
            onClick={() => {
              onClose();
              dialogRef.current.close();
            }}
            className='bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400'
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              dialogRef.current.close();
            }}
            className='bg-red-500 text-white p-2 rounded hover:bg-red-600'
          >
            OK
          </button>
        </div>
      </dialog>
    </>
  );
};

export default AcConfirm;
