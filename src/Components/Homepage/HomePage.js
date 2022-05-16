import React from 'react'
import Numbers from '../Numbers.js'
import AboutUs from '../AboutUs.js'
import Domains from '../Domains.js'
import Faculty from '../Faculty.js'
import GetInTouch from '../GetInTouch'
import './HomePage.css'

function HomePage() {
  return (
      <div>
          <Numbers />
          <AboutUs />
          <Domains />
          <Faculty />     
          <GetInTouch />
      </div>
  )
}

export default HomePage