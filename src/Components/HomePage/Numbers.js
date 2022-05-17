import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Numbers.css';

function Numbers() {
  return (
      <div className="TRF-in-figures">
          <div>
              <p className='Numbers-heading'><span className="pipe" style={{ color: "#559083" }}>|</span> TRF in figures</p>
          </div>
          <div>
              <Row className="Numbers-row">
                  <Col className="Numbers-col" xs={12} md={4}>
                      <div>
                        <h1 className='Numbers'>300+</h1>                          
                      </div>
                      <div>
                        <p className='Numbers-desc'>Club Members</p>
                      </div>
                  </Col>                  
                  <Col className="Numbers-col" xs={12} md={4}>
                     <div>
                        <h1 className='Numbers'>50+</h1>                          
                      </div>
                      <div>
                        <p className='Numbers-desc'>Team members</p>
                      </div>
                  </Col>
                  <Col className="Numbers-col" xs={12} md={4}>
                  <div>
                        <h1 className='Numbers'>450+</h1>                          
                      </div>
                      <div>
                        <p className='Numbers-desc'>Alumni</p>
                      </div>
                  </Col>
              </Row>
          </div>
    </div>
  )
}

export default Numbers