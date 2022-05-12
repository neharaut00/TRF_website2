import React from 'react'
import Faculty from './Components/Faculty.js'
import AboutUs from './Components/AboutUs.js'
import Numbers from './Components/Numbers.js'
import GetInTouch from './Components/GetInTouch.js'
import Domains from './Components/Domains.js'


const App = () => {
  return (
    <div style={{ margin: '0px', padding: '0px' }}>
      <Numbers />
      <AboutUs />
      <Domains />
      <Faculty />     
      <GetInTouch />
      
    </div>
  )
}

export default App;