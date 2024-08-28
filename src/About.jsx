// Meet the team page
import Navbar from './partials/navbar'

import adriana from './images/team/adriana.jpg'
import bennett from './images/team/bennett.jpg'
import liz from './images/team/elizabeth.jpg'
import owen from './images/team/owen.jpeg'
import richard from './images/team/richard.jpg'
import taylor from './images/team/taylor.jpg'

function About() {
  return (

    <div className='p-4 grid overflow-hidden'>
        <Navbar />

        {/*Describing how this improves upon the old system*/}
        <div className='text-center py-10 bg-purple-900 rounded-lg shadow-md'>
          <h1 className="text-4xl text-yellow-400 font-bold mb-4">About Tiger Dorm Defender</h1>
          <p className="text-lg text-gray-200 mt-4 px-8">The Tiger Dorm Defender allows you to unlock your dorm room from any point on campus. This is made to be used in the event of a missing TigerCard, but is more efficent than using your TigerCard, as you can unlock your room through the convenient website.</p>
        </div>

        {/* Meet the team */}
        <p className='text-4xl font-bold text-center mt-8'>Meet the Team</p>
        <div className='flex justify-center items-center gap-x-20 mt-8'>

          {/* Richard */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={richard}
                alt="Shoes" className='h-80' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Richard Jiang</h2>
              <p>Team Leader<br/>Major: Computer Science, Data Science</p>
            </div>
          </div>

          {/* Owen */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={owen}
                alt="Shoes"
                className='object-cover max-h-80' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Owen Gaspard</h2>
              <p>Computer Science, Software Engineering<br/></p>
            </div>
          </div>

          {/* Taylor */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={taylor}
                alt="Shoes" className='max-h-80' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Taylor Graham</h2>
              <p>Computer Science, Cybersecurity<br/></p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-x-20 mt-8'>
        
            {/* Bennett */}
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={bennett}
                  className='max-h-80' />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Bennett Marceaux</h2>
                <p>Computer Science, Cybersecurity<br/></p>
              </div>
            </div>

            {/* Liz */}
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={liz} className='max-h-80' />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Elizabeth Otuyelu</h2>
                <p>Computer Science, Data Science<br/></p>
              </div>
            </div>

            {/* Adriana */}
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={adriana}
                  className='max-h-80' />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adriana Macias</h2>
                <p>Computer Science, Software Enginnering<br/>Electrical Engineering</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About