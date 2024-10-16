import { useTasksContext } from '../context';

const TasksInfoBar = () => {
  const { total, completedTotal, pendingTotal } = useTasksContext();
  const items = [
    { name: 'Tasks', count: total },
    { name: 'Completed', count: completedTotal },
    { name: 'Pending', count: pendingTotal },
  ];

  return (
    <ul className='flex justify-end mb-3' aria-label='tasks infobar'>
      {items.map((item, index) => (
        <li className='flex h-[2.2rem] p-1' key={index}>
          <span className='self-end font-bold text-gray-500 mr-0.5'>
            {item.name}
          </span>
          <span className='self-start w-8 text-center font-semibold text-xs text-gray-500 bg-blue-50 rounded-full p-[0.05rem]'>
            {item.count}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TasksInfoBar;
