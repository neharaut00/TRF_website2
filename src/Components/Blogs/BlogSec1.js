import React from 'react'
import './BlogSec1.css'
export default function BlogSec1() {
  return (
    <section className="BlogmainSection">
    <div className="test">
    <h1 className="blogsec1heading1">
      Our <br /> blOgs
    </h1>
    <div className="blogsec1sec2">
      <div className="verticalline"></div>
      <p className="blogsec1heading2">
        {" "}
        TRF is leading technical club in Vishwakarma Institute of <br />
        Technology that builds powerful Robotics and Software solutions.
      </p>
    </div>
    </div>
    <svg className="blogsButton" width="210" height="77" viewBox="0 0 210 77">
              {/* <a href="#"> */}                
                <rect width={210} height={77} fill="#559083" /> 

                <path d="M0 0H24L0 24V0Z" fill="#03090C" />
                <path d="M210 77L186 77L210 53L210 77Z" fill="#03090C" />   
                <text x="105"
                      y="39"
                      fill="#FFFFFF"
                      fontSize="1.5em"
                      textAnchor="middle"
                      fontWeight="normal"
                      alignmentBaseline="middle">
                  Blogs
                </text>
    </svg>  
    </section>


  )
}
