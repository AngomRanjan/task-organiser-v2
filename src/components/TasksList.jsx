import React from 'react';
import { useTasksContext } from '../context';
import TaskItem from './TaskItem';

const TasksList = () => {
  const { tasks } = useTasksContext();

  return (
    <ul className='flex flex-wrap gap-y-3 mt-3'>
      {tasks.map((task) => (
        <li key={task.id} className='w-full'>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
