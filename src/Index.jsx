import Navbar from './partials/navbar'

function Index() {
  return (
    <div className="p-4">
      <Navbar />
      
      {/* Header Section */}
      <header className="text-center py-10 bg-purple-900 rounded-lg shadow-md">
        <h1 className="text-4xl text-yellow-400 font-bold mb-4">Welcome to Tiger Dorm Defender</h1>
        <p className="text-lg text-gray-200 mb-6">Ensure the safety of your dorm with state-of-the-art remote access control.</p>
        <div className="flex justify-center space-x-4">
          <a href="dashboard" className="btn bg-yellow-500 hover:bg-yellow-700 text-black hover:text-white">Unlock Dorm</a>
        </div>
      </header>
    </div>
  )
}

export default Index