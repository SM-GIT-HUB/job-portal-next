
function CommonLayout({ children }) {
  return (
    <div className='mx-auto max-w-7xl p-6 lg:px-8'>
      {/* Header */}
      <h1>hey</h1>

      {/* Main content */}
      <main>
        { children }
      </main>
    </div>
  )
}

export default CommonLayout