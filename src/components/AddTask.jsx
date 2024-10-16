import { useState } from 'react';
import { useTasksContext } from '../context';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [isError, setIsError] = useState(false);
  const { addTask } = useTasksContext();

  let errMsg = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    try {
      addTask(task);
      setTask('');
    } catch (error) {
      errMsg = error.message;
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
        errMsg = '';
      }, 4000);
    }
  };

  return (
    <>
      {isError && (
        <p className='text-red-600 text-xs'>Adding Task Failed! {errMsg}</p>
      )}
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
    </>
  );
};

export default AddTask;
