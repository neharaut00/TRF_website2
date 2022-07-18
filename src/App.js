import React from "react";
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import HomePage from "./Components/HomePage.js";
import Achievements from "./Components/Achievements.js";
import Workshop from "./Components/Workshop.js";
import Robocon from "./Components/Robocon.js";
import Recruitment from "./Components/Recruitment.js";
import Blogs from "./Components/Blog.js";
import Team from "./Components/Team.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./helper/ScrollToTop.js";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      mirror: true,
      debounceDelay: 100,
      throttleDelay: 150,
    });
  }, []);
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div style={{ margin: "0px", padding: "0px", backgroundColor: "#03090C" }}>
      <HashRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/roboccon" element={<Robocon />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/workshops/robonext" element={<HomePage />} />
          <Route path="/workshops/robospark" element={<HomePage />} />
          <Route path="/workshops/robodroid" element={<HomePage />} />
          <Route path="/workshops/robovision" element={<HomePage />} />
          <Route path="/workshops/level1" element={<HomePage />} />
          <Route path="/workshops/level2" element={<HomePage />} />
        </Routes>
        <Footer />
      </HashRouter>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">        
          &#8963;
        </button>
      )}
    </div>
  );
};

export default App;
