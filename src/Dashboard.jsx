// Implements RoomInfo component
import Navbar from './partials/navbar'
import RoomInfo from './roomInfo'

function Dashboard() {
  return (
    <div className="p-4">
        <Navbar />
        {/*Text displayed on screen*/}
        <div className='text-center py-10 bg-purple-900 rounded-lg shadow-md'>
          <RoomInfo /> 
        </div>
    </div>
  )
}

export default Dashboard