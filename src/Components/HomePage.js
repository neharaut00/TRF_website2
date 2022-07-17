import React from "react";
import Numbers from "./HomePage/Numbers.js";
import AboutUs from "./HomePage/AboutUs.js";
import Domains from "./HomePage/Domains.js";
import Faculty from "./HomePage/Faculty.js";
import Intro from "./HomePage/Intro.js";
import GetInTouch from "./HomePage/GetInTouch";
// import ThreeDModel from './HomePage/ThreeDModel.js'
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      {/* <ThreeDModel/> */}
      <Intro />
      <Numbers />
      <AboutUs />
      <Domains />
      <Faculty />
      <GetInTouch />    
    </div>
  );
}

export default HomePage;
