import React from 'react'
import {BrowserRouter, Route,Routes, Switch} from 'react-router-dom'
import Faculty from './Components/Faculty.js'
import AboutUs from './Components/AboutUs.js'
import Numbers from './Components/Numbers.js'
import GetInTouch from './Components/GetInTouch.js'
import Domains from './Components/Domains.js'
import NavBar from './Components/NavBar.js'
import Achievements from './Components/Achievements.js'
import Footer from './Components/Footer.js';
import HomePage from './Components/Homepage/HomePage.js';


const App = () => {
  return (
    <div style={{ margin: '0px', padding: '0px' }}>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/achievements" element={<Achievements/>} />
        </Routes>
      <Footer />
      </BrowserRouter>      
      {/* <Numbers />
      <AboutUs />
      <Domains />
      <Faculty />     
      <GetInTouch />
      <Footer/> */}
      {/* <Achievements/> */}
      
    </div>
  )
}

export default App;