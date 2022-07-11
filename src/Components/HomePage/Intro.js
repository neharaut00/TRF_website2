import React from "react";
import { Row, Col } from "react-bootstrap";
import Tilt from "react-tilt";
import image from "../../assets/Intro_robot.png";
import { HashLink as Link } from "react-router-hash-link";
// import Eclipse from '../../assets/Intro-Eclipse.png'
import "./Intro.css";

function Intro() {
  return (
    <div
      className="intro-Container"
      style={{ backgroundColor: "#03090C", color: "white", overflow: "hidden" }}
    >
      <Row
        style={{ margin: "0px" }}
        className="justify-content-md-center intro-row"
      >
        <Col
          className="intro_Content-neha"
          style={{ padding: "0px" }}
          lg={{ span: 5.5, offset: 1.5 }}
          md={{ span: "8", order: "first" }}
        >
          <div className="introParaDiv">
            <h3
              data-aos="fade-right"
              className="introHeading"
              data-aos-once="true"
              style={{ backgroundColor: "transparent" }}
            >
              the rObOtics fOrum
            </h3>
            <div
              className="introPara"
              data-aos="fade-right"
              data-aos-once="true"
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "50px",
              }}
            >
              <svg
                className="intro-svg"
                width="100"
                height="112"
                viewBox="0 0 48 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.5"
                  y="2.5"
                  width="43"
                  height="43"
                  stroke="#C9C9C9"
                  strokeWidth="5"
                />
                <rect y="64" width="16" height="16" fill="#C9C9C9" />
                <rect x="32" y="64" width="16" height="16" fill="#C9C9C9" />
                <rect y="96" width="16" height="16" fill="#C9C9C9" />
                <rect x="32" y="96" width="16" height="16" fill="#C9C9C9" />
              </svg>

              <p
                style={{ paddingLeft: "20px", backgroundColor: "transparent" }}
              >
                The Robotics Forum is VIT Pune's premier robotics club, with a
                15-year legacy. Students from various engineering disciplines
                make up our varied community, all of whom are driven by a
                passion for robotics.
              </p>
            </div>
            <div
              className="introButtonContainer"
              data-aos="zoom-in-right"
              data-aos-once="true"
            >
              <Link to="#ContactUs-id">
                <svg
                  className="Intro-button"
                  viewBox="0 0 210 77"
                  cursor={"pointer"}
                >
                  <rect width={210} height={77} fill="#C9C9C9" />

                  <path d="M0 0H24L0 24V0Z" fill="#03090C" />
                  <path d="M210 77L186 77L210 53L210 77Z" fill="#03090C" />
                  <text
                    x="105"
                    y="39"
                    fill="#000000"
                    fontSize="1.5em"
                    fontFamily="GreyCliff"
                    textAnchor="middle"
                    fontWeight="bold"
                    alignmentBaseline="middle"
                    cursor={"pointer"}
                  >
                    Contact Us
                  </text>
                </svg>
              </Link>
            </div>
            <div
              className="links"
              data-aos="zoom-in-right"
              data-aos-once="true"
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "30px",
              }}
            >
              <a
                className="social-media-links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/vitpunerobotics/?hl=en"
              >
                {" "}
                <p className="social-media">Instagram</p>{" "}
              </a>
              <a
                className="social-media-links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/the-robotics-forum/?originalSubdomain=in"
              >
                {" "}
                <p className="social-media">LinkedIn</p>{" "}
              </a>
              <a
                className="social-media-links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/trfvit/"
              >
                {" "}
                <p className="social-media">Facebook</p>{" "}
              </a>
            </div>
          </div>
        </Col>
        <Col
          style={{ padding: "0px", paddingLeft: "30px" }}
          lg={{ span: 2.5 }}
          md={4}
        >
          <Tilt
            className="Tilt-neha"
            options={{ max: 25, reverse: true, scale: 1, reset: false }}
          >
            <div className="IntroImageDiv-neha" data-aos="zoom-out-left">
              <img
                className="img-responsive Intro_Robot-neha"
                src={image}
                alt="Robot"
                style={{ backgroundColor: "transparent" }}
              />

              {/* <img src={{Eclipse}} alt="eclipse" className='Intro-Image-Eclipse'/>           */}
            </div>
          </Tilt>
        </Col>
      </Row>
    </div>
  );
}

export default Intro;
