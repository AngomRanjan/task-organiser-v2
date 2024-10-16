import AcConfirm from './components/AcConfirm';
import AddTask from './components/AddTask';
import ClearCompletedTasks from './components/ClearCompletedTasks';
import TasksInfoBar from './components/TasksInfoBar';
import TasksList from './components/TasksList';
import { TasksProvider, useTasksContextValue } from './context';

const App = () => {
  const tasksContextValue = useTasksContextValue();
  return (
    <>
      <TasksProvider value={tasksContextValue}>
        <header className='w-full sticky top-0 bg-gradient-to-b from-[#deecf8] to-[#f8fafa] p-4'>
          <h1 className='text-lg font-bold text-blue-700'>
            ✨ Task Organiser V2
          </h1>
        </header>
        <main className='p-2 min-h-screen'>
          <section className='max-w-2xl mx-auto my-6 border border-solid border-[#d3d3d3] custom-shadow rounded-lg px-4 py-3 text-black bg-white'>
            <TasksInfoBar />
            <AddTask />
            <TasksList />
            <ClearCompletedTasks />
          </section>
        </main>
        <footer className='flex w-full bg-gradient-to-t from-[#deecf8] to-[#f8fafa] p-4 sticky bottom-0'>
          Copyright. Angom. 2022.
        </footer>
      </TasksProvider>
    </>
  );
};

export default App;
