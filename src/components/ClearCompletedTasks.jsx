import { useState } from 'react';
import { useTasksContext } from '../context';
import AcConfirm from './AcConfirm';

const ClearCompletedTasks = () => {
  const {
    completedTotal: taskCompletionCount,
    clearCompleted: clearCompletedTasks,
  } = useTasksContext();
  const [isAcConfirmOpen, setIsAcConfirmOpen] = useState();
  const disabled = taskCompletionCount === 0;

  const handleClearCompleted = () => {
    clearCompletedTasks(); // Call the clear function only after confirmation
    setIsAcConfirmOpen(false); // Close the modal after confirming
  };

  return (
    <>
      <div className='flex justify-center'>
        <button
          onClick={() => setIsAcConfirmOpen(true)}
          className={`mx-auto  font-semibold p-2 rounded-md my-4 w-max border ${
            disabled
              ? 'border-[#9ca3af] text-[#9ca3af] opacity-50 cursor-not-allowed'
              : 'text-[hsl(2,100%,63%)] border-[hsl(2,100%,63%)] hover:bg-[hsl(2,100%,73%)] hover:text-white'
          }`}
          disabled={disabled}
        >
          Clear Completed Tasks
        </button>

        <AcConfirm
          isOpen={isAcConfirmOpen}
          onClose={() => setIsAcConfirmOpen(false)} // Close modal function
          onConfirm={handleClearCompleted} // Confirm function
          confirmMessage='Clear all completed tasks'
        />
      </div>
    </>
  );
};

export default ClearCompletedTasks;
