import React from "react";
import "./Newsletter.css";

function Newsletter() {
    const handleSubmit = event => {        
        event.preventDefault();
    
      };
  return (
    <div className="Newsletter-maindiv" id="newsletter">
      <h1 className="Newsletter-heading">Subscribe to our Newsletter</h1>
      <div className="Newsletter-form-container">
        <form className="Newsletter-form" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="subscribe-email"
          />
          <label>
            <input type="submit" value="Submit" />
            <svg className="Subscribebutton-neha" viewBox="0 0 210 77">
              {/* <a href="#"> */}
              <rect width={210} height={77} fill="#559083" />

              <path d="M0 0H24L0 24V0Z" fill="#03090C" />
              <path d="M210 77L186 77L210 53L210 77Z" fill="#03090C" />
              <text
                x="105"
                y="39"
                fill="#ffff"
                fontSize="1.5em"
                textAnchor="middle"
                fontWeight="normal"
                alignmentBaseline="middle"
              >
                Subscribe
              </text>
              {/* </a> */}
            </svg>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
