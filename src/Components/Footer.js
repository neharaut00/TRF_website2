import React from 'react'
import './Footer.css'
function Footer() {
  return (
      <div>
          <div className="maindiv">
      <section className="section">
        {/* Logo div */}
        <div>
          <h1 className="footertrflogo">TRF</h1>
          <p className="footerheading1">The Robotics Forum</p>
        </div>

        {/* main content div */}
        <div className="footsec2">
          {/* Left side content */}
          <div>
            <h4 className="footerheading2">Be a Client</h4>
            <hr />
            <p className="Footertextcolor trfmoblieno">+91 9096938465</p>
            
            <p className="Footertextcolor trfmail">robotics.forum@vit.edu</p>
            
            <p className="Footertextcolor">
              666,Upper Indira Nagar,Bibwewadi,Pune.
            </p>
            <p className="Footertextcolor">Maharashtra 411037</p>
          </div>
          {/* Right side content */}
          <div className="rightside">
            <p
              className="socialmedialinks
             linksgrp1"
            >
              <a className="alink" href="https://www.twitter.com/">
                Twitter
              </a>
              <span className="alinkspace"> </span>
              <a className="alink" href="https://www.youtube.com/">
                Youtube
              </a>
            </p>
            <p className="socialmedialinks linksgrp2">
              <a className="alink" href="https://www.instagram.com/vitpunerobotics/?hl=en/">
                Intagram
              </a>
              <span className="alinkspace"> </span>
              <a className="alink" href="https://www.linkedin.com/company/the-robotics-forum/?originalSubdomain=in">
                Linkedin
              </a>
              <span className="alinkspace"> </span>
              <a className="alink" id="facebooklink" href="https://www.facebook.com/trfvit/"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </section>

      <div>
        <p className="footercopyright">Copyright &copy; 2021 TRF VIT PUNE</p>
      </div>
    </div>

    </div>
  )
}

export default Footer