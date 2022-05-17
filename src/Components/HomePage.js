import React from 'react'
import Numbers from './HomePage/Numbers.js'
import AboutUs from './HomePage/AboutUs.js'
import Domains from './HomePage/Domains.js'
import Faculty from './HomePage/Faculty.js'
import GetInTouch from './HomePage/GetInTouch'
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