import { useTasksContext } from '../context';

const ClearCompletedTasks = () => {
  const {
    completedTotal: taskCompletionCount,
    clearCompleted: clearCompletedTasks,
  } = useTasksContext();
  const disabled = taskCompletionCount === 0;

  const handleClearCompleted = () => {
    clearCompletedTasks();
  };

  return (
    <>
      <div className='flex justify-center'>
        <button
          onClick={handleClearCompleted}
          className={`mx-auto  font-semibold p-2 rounded-md my-4 w-max border ${
            disabled
              ? 'border-[#9ca3af] text-[#9ca3af] opacity-50 cursor-not-allowed'
              : 'text-[hsl(2,100%,63%)] border-[hsl(2,100%,63%)] hover:bg-[hsl(2,100%,73%)] hover:text-white'
          }`}
          disabled={disabled}
        >
          Clear Completed Tasks
        </button>
      </div>
    </>
  );
};

export default ClearCompletedTasks;
