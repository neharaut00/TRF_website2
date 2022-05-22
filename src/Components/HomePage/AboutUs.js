import React from 'react'
import image from "../../assets/AboutUsRobot.png";
import Tilt from "react-tilt";
import './AboutUs.css';
import { Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from "react-slick";

function AboutUs() {
  return (
    <div className='AboutUs-Container' style={{backgroundColor:"#03090C", color:"white"}}>
      <Row style={{margin: "0px"}} className="justify-content-md-center" >
        <Col style={{padding: "0px"}} lg={{ span: 2.5, offset: 1.5 }} md={6}>
          <div className="ImageDiv-neha">
            <Tilt className="Tilt-neha" options={{ max: 25, reverse: true, scale: 1 }} >            
                <img className="About_Us_Robot-neha" src={image} alt="Robot" />          
            </Tilt>      
          </div>           
        </Col>
        <Col className="aboutUs_Content-neha" style={{padding: "0px"}} lg={{ span: 5.5, offset: 1.5 }} md={{ span:'6', order: 'last' }} >
          <div className="aboutUsParaDiv">
            <h3 className="aboutUsHeading"><span style={{ color: "#559083" }}>|</span>  abOut us</h3>
            <h5 className="heading2-neha">VIT Pune's premier robotics club</h5>
            <div className="aboutUsPara" style={{ paddingTop: "15px" }}>
              <p>
                
                <svg className="aboutUs-Rect-neha" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" stroke="#559083" stroke-width="2" />
                </svg>                            
                  The Robotics Forum, the largest technical club of VIT Pune, with a legacy of 15 years
              </p>
              <p>
                <svg className="aboutUs-Rect-neha" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" stroke="#559083" stroke-width="2" />
                </svg>
                A student-run club that aims to foster the technical skills of students and help them
              </p>
              <p>
                <svg className="aboutUs-Rect-neha" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" stroke="#559083" stroke-width="2" />
                </svg>
                The club have earned laurels in Robocon and aced several national  competition along with conducting successful workshops with avid participants.
              </p>
            </div>
            <div className="aboutUsButtonContainer">
                <svg className="aboutUbutton-neha" viewBox="0 0 210 77">
              {/* <a href="#"> */}                
                <rect width={210} height={77} fill="#559083" /> 

                <path d="M0 0H24L0 24V0Z" fill="#03090C" />
                <path d="M210 77L186 77L210 53L210 77Z" fill="#03090C" />   
                <text x="105"
                      y="39"
                      fill="#FFFFFF"
                      fontSize="1.5em"
                      text-anchor="middle"
                      fontWeight="normal"
                      alignment-baseline="middle">
                  Learn More
                </text>
              {/* </a> */}
            </svg>
            </div>
          </div>
          

        </Col>        
      </Row>
       
    </div>
  )
}

export default AboutUs

//TODO
// Increase font size of the vit pune text //*done
// Interactive components
// slightly left align the robot
// right side padding to the content of the about us