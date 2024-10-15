const App = () => {
  return (
    <>
      <header className='w-full sticky top-0 bg-gradient-to-tl from-[#8e9eab] to-[#eef2f3] p-4'>
        <h1 className='text-lg font-bold text-blue-700'>
          ✨ Task Organiser V2
        </h1>
      </header>
      <main className='py-8 border border-red-500'>
        <section className='max-w-2xl mx-auto border border-solid border-[#d3d3d3] custom-shadow rounded-lg px-4 py-3 text-black bg-white'>
          <h2>Today&apos;s Tasks</h2>
        </section>
      </main>
      <footer className='flex w-full bg-gradient-to-tr from-[#8e9eab] to-[#eef2f3] p-4 absolute bottom-0'>
        Copyright. ✨ Angom&apos;s Task Organiser. 2022.
      </footer>
    </>
  );
};

export default App;
