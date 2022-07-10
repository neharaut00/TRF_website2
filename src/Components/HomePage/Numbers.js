import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "./Numbers.css";

function Numbers() {
  return (
    <div className="TRF-in-figures" style={{ overflow: "hidden" }}>
      <div>
        <p className="Numbers-heading" data-aos="fade-right">
          <span className="pipe" style={{ color: "#559083" }}>
            |
          </span>{" "}
          TRF in figures
        </p>
      </div>
      <div>
        <Row className="Numbers-row">
          <Col className="Numbers-col" xs={12} md={4}>
            <div data-aos="fade-up" className="Numbers">
              <h1>
              <CountUp start={0} end={300} duration={4} /><span>+</span>
              </h1>
            </div>
            <div>
              <p data-aos="fade-up" className="Numbers-desc">
                Club Members
              </p>
            </div>
          </Col>
          <Col className="Numbers-col" xs={12} md={4}>
            <div data-aos="fade-up" className="Numbers">
              <h1 >
              <CountUp start={0} end={50} duration={4} /><span>+</span>
              </h1>
            </div>
            <div>
              <p data-aos="fade-up" className="Numbers-desc">
                Team members
              </p>
            </div>
          </Col>
          <Col className="Numbers-col" xs={12} md={4}>
            <div data-aos="fade-up" className="Numbers">
              <h1 >
              <CountUp start={0} end={450} duration={4} /><span>+</span>
              </h1>
            </div>
            <div>
              <p data-aos="fade-up" className="Numbers-desc">
                Alumni
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Numbers;
