import React from 'react'
import './Workshop.css'
import WorkshopImg from '../assets/Workshop.png'

function Workshop() {
  return (
      <div className="Workshop">
          <img className="Workshop-img" src={WorkshopImg} alt="Snow" style={{ "width": "45%",  "height":"650px"}} />
          <div className="Workshop-text-container">
              <h1 className='Workshop-main-heading'>wOrkshOps</h1>
              <p className='Workshop-subheading'>TRF is leading technical club in Vishwakarma Institute of Technology that builds powerful Robotics and Software solutions.</p>
          </div>
      </div>
      
  )
}

export default Workshop