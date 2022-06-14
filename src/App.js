import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import NavBar from './Components/NavBar.js'
import Achievements from './Components/Achievements.js'
import Footer from './Components/Footer.js';
import HomePage from './Components/HomePage.js';
import Workshop from './Components/Workshop.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Blogs from './Components/Blogs.js'
import Roboccon from './Components/Roboccon.js'
import "./App.css";

const App = () => {
  return (
    <div style={{ margin: '0px', padding: '0px', backgroundColor: '#03090C'}}>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/roboccon" element={<Roboccon/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/projects" element={<HomePage/>} />
          <Route path="/events" element={<HomePage />} />          
          <Route path="/workshops" element={<Workshop/>} />          
        </Routes>
      <Footer />
      </BrowserRouter>        
      
    </div>
  )
}

export default App;