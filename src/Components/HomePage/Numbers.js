import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "./Numbers.css";
import VisibilitySensor from "react-visibility-sensor";

function Numbers() {
  return (
    <div className="TRF-in-figures" style={{ overflow: "hidden" }}>
      <div>
        <p
          className="Numbers-heading"
          data-aos="fade-right"
          data-aos-once="true"
        >
          TRF in figures
        </p>
      </div>
      <div>
        <Row className="Numbers-row">
          <Col className="Numbers-col" xs={12} md={4}>
            <div className="Numbers">
              <h1>
                <CountUp start={0} end={300} duration={3} redraw={true} />
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
                <span>+</span>
              </h1>
            </div>
            <div>
              <p
                data-aos="fade-up"
                className="Numbers-desc"
                data-aos-once="true"
              >
                Club Members
              </p>
            </div>
          </Col>
          <Col className="Numbers-col" xs={12} md={4}>
            <div className="Numbers">
              <h1>
                <CountUp start={0} end={50} duration={3} redraw={true} />
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
                <span>+</span>
              </h1>
            </div>
            <div>
              <p
                data-aos="fade-up"
                className="Numbers-desc"
                data-aos-once="true"
              >
                Team members
              </p>
            </div>
          </Col>
          <Col className="Numbers-col" xs={12} md={4}>
            <div className="Numbers">
              <h1>
                <CountUp start={0} end={450} duration={3} redraw={true} />
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
                <span>+</span>
              </h1>
            </div>
            <div>
              <p
                data-aos="fade-up"
                className="Numbers-desc"
                data-aos-once="true"
              >
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
