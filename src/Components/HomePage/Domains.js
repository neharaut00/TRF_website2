import React from 'react';
import Group from '../../assets/HomePage_images/Group.png';
import './Domains.css'

function Domains() {
    return (
      <div className="Domains">
      <div className="Domains-Container">
          <div className="DomainImage">
              <img src={Group} data-aos="zoom-in" data-aos-once="true" alt="Domain" className="img-fluid domain-img"/>
          </div>
          <div className="Elex-domain">
            <h1 data-aos="fade-left" data-aos-once="true" className="Domain-heading-elex">01 electronics</h1>
            <p data-aos="fade-right" data-aos-once="true" className="Domain-content-elex">The team that does the job of developing, creating, and researching circuit schematics and PCBs, analyzing various sensors and deciding their uses, programming the robot, and actuating it via all of this.</p>
          </div>
          <div className="Mech-domain">
            <h1 data-aos="fade-right" data-aos-once="true" className="Domain-heading-mech">02 mechanics</h1>
            <p data-aos="fade-left" data-aos-once="true" className="Domain-content-mech">The team that lays the framework for the creation of a structurally sound robot to begin. Designing these robots is no easy task itself,which is why it has been handed to this group of talented individuals.</p>
          </div>
          <div className="Prog-domain">
            <h1 data-aos="fade-left" data-aos-once="true" className="Domain-heading-prog">03 sOftware</h1>
            <p data-aos="fade-right" data-aos-once="true" className="Domain-content-prog">TRF's programming arm, works in areas such as Android, image processing, machine learning, and web design, among others. The team has been doing research and industrial projects to delve further into these topics.</p>
          </div>                   
          </div>
        </div>
  )
}

export default Domains