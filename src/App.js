import React from 'react'
import Faculty from './Components/Faculty.js'
import AboutUs from './Components/AboutUs.js'
import Numbers from './Components/Numbers.js'
import GetInTouch from './Components/GetInTouch.js'
import Domains from './Components/Domains.js'
// import NavBar from './Components/NavBar.js'

const App = () => {
  return (
    <div style={{ margin: '0px', padding: '0px' }}>
      {/* <NavBar/> */}
      <Numbers />
      <AboutUs />
      <Domains />
      <Faculty />     
      <GetInTouch />
      
    </div>
  )
}

export default App;