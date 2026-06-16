export default function Navbar() {
  return (
    <nav className='border-b border-slate-800'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between'>
        <h1 className='font-bold text-xl'>ResearchX</h1>

        <button
          onClick={() =>
            window.scrollTo({
              top: 500,
              behavior: 'smooth',
            })
          }
          className='bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700'
        >
          Try ResearchX
        </button>
      </div>
    </nav>
  );
}
