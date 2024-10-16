import { useState } from 'react';
import { useTasksContext } from '../context';

const AddTask = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTasksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex'>
      <input
        type='text'
        id='new-task-input'
        placeholder='Enter New Tasks...'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type='submit'
        className='rounded-r-lg px-4 py-1 bg-blue-600 text-white shrink-0'
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
