import React from "react";
import "./roboconSec1.css";
import TemRoboconSec2 from "./TemRoboconSec2";
export default function RoboconSec1() {
  return (
    <section className="mainsectionofrobocon">
      {/* section 1 (image) */}
      <div className="RoboconSec1firstsec" style={{backgroundImage:`url(require("../../assets/RoboconBgImg1.png"))`}}>
        {/* Navbar */}
        <div className="Roboconsec1">
          <p className="RoboconSec1heading1">rObOcOn</p>
        </div>
      </div>

      {/* section2 cards/////////////////////////////////////////// */}

      <TemRoboconSec2 />
      
    </section>
  );
}
