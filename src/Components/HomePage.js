import React from "react";
import Numbers from "./HomePage/Numbers.js";
import AboutUs from "./HomePage/AboutUs.js";
import Domains from "./HomePage/Domains.js";
import Faculty from "./HomePage/Faculty.js";
import Intro from "./HomePage/Intro.js";
import GetInTouch from "./HomePage/GetInTouch";
import Newsletter from "./HomePage/Newsletter";
// import ThreeDModel from './HomePage/ThreeDModel.js'
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="HomePage-main-container">
      {/* <ThreeDModel/> */}
      <Intro />
      <Numbers />
      <AboutUs />
      <Domains />
      <Faculty />
      <GetInTouch />  
      <Newsletter/>
    </div>
  );
}

export default HomePage;
