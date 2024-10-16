import React from 'react';
import { useTasksContext } from '../context';

const TasksList = () => {
  const { tasks } = useTasksContext();

  return (
    <ul className='flex flex-wrap gap-y-3'>
      {tasks.map((task) => (
        <li key={task.id} className='w-full'>
          Id: {task.id} Task: {task.task}. Status:{' '}
          {task.completed ? 'completed' : 'pending'}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
