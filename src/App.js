import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import NavBar from './Components/NavBar.js'
import Achievements from './Components/Achievements.js'
import Footer from './Components/Footer.js';
import HomePage from './Components/HomePage.js';
import Workshop from './Components/Workshop.js';


const App = () => {
  return (
    <div style={{ margin: '0px', padding: '0px', backgroundColor: '#03090C'}}>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/roboccon" element={<Achievements/>} />
          <Route path="/blogs" element={<Achievements/>} />
          <Route path="/projects" element={<Achievements/>} />
          <Route path="/events" element={<Achievements />} />          
          <Route path="/workshops" element={<Workshop/>} />          
        </Routes>
      <Footer />
      </BrowserRouter>        
      
    </div>
  )
}

export default App;