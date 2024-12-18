import { useRef, useState } from 'react';
import { useTasksContext } from '../context';
import AcConfirm from './AcConfirm';

function TaskItem({ task }) {
  const [isTaskEditable, setIsTaskEditable] = useState(false);
  const [taskMsg, setTaskMsg] = useState(task.task);
  const [isAcConfirmOpen, setIsAcConfirmOpen] = useState();
  const refEditInput = useRef();

  const { updateTask, deleteTask, toggleComplete } = useTasksContext();

  const editTask = () => {
    updateTask(task.id, { task: taskMsg });
    setIsTaskEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(task.id);
  };

  const handleEditClick = () => {
    if (isTaskEditable) {
      editTask();
      refEditInput.current?.blur();
    } else {
      setIsTaskEditable((prev) => !prev);
      refEditInput.current?.select();
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setIsAcConfirmOpen(false);
  };

  return (
    <div
      className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black disabled:opacity-50 ${
        task.completed ? 'bg-blue-50' : 'bg-slate-50'
      }`}
    >
      <input
        type='checkbox'
        id={`status-cb-${task.id}`}
        className="cursor-pointer text-xs appearance-none outline outline-1 w-[1.25rem] h-[1.15rem] border border-slate-900 bg-slate-100 checked:before:content-['\2714'] disabled:opacity-50 disabled:cursor-not-allowed"
        checked={task.completed}
        onChange={toggleCompleted}
        disabled={isTaskEditable}
      />
      <input
        type='text'
        id={`task-input-${task.id}`}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTaskEditable
            ? 'border-black/10 px-2'
            : 'border-transparent cursor-default'
        }`}
        value={taskMsg}
        onChange={(e) => setTaskMsg(e.target.value)}
        readOnly={!isTaskEditable}
        ref={refEditInput}
      />
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={handleEditClick}
        disabled={task.completed}
      >
        {isTaskEditable ? '📁' : '✏️'}
      </button>
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={() => setIsAcConfirmOpen(true)}
        disabled={isTaskEditable}
      >
        ❌
      </button>

      <AcConfirm
        isOpen={isAcConfirmOpen}
        onClose={() => setIsAcConfirmOpen(false)} // Close modal function
        onConfirm={handleDelete} // Confirm function
        confirmMessage={`Delete the task "${task.task}"`}
      />
    </div>
  );
}

export default TaskItem;
