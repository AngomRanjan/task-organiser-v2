import AddTask from './components/AddTask';
import TasksList from './components/TasksList';
import { TasksProvider, useTasksContextValue } from './context';

const App = () => {
  const tasksContextValue = useTasksContextValue();
  return (
    <>
      <TasksProvider value={tasksContextValue}>
        <header className='w-full sticky top-0 bg-gradient-to-tl from-[#8e9eab] to-[#eef2f3] p-4'>
          <h1 className='text-lg font-bold text-blue-700'>
            ✨ Task Organiser V2
          </h1>
        </header>
        <main className='p-2'>
          <section className='max-w-2xl mx-auto my-6 border border-solid border-[#d3d3d3] custom-shadow rounded-lg px-4 py-3 text-black bg-white'>
            <h2>Today&apos;s Tasks</h2>
            <AddTask />
            <TasksList />
          </section>
        </main>
        <footer className='flex w-full bg-gradient-to-tr from-[#8e9eab] to-[#eef2f3] p-4 absolute bottom-0'>
          Copyright. Angom. 2022.
        </footer>
      </TasksProvider>
    </>
  );
};

export default App;
