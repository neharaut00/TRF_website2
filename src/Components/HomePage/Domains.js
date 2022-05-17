import React from 'react';
import Group from '../../assets/Group.png';
import './Domains.css'

function Domains() {
    return (
      <div className="Domains">
      <div className="Domains-Container">
          <div className="DomainImage">
              <img src={Group} alt="Domain"/>
          </div>
          <h1 className="Domain-heading-elex">01 electronics</h1>
          <h1 className="Domain-heading-mech">02 mechanics</h1>
          <h1 className="Domain-heading-prog">03 sOftware</h1>
          <p className="Domain-content-elex">The team that does the job of developing, creating, and researching circuit schematics and PCBs, analyzing various sensors and deciding their uses, programming the robot, and actuating it via all of this.</p>
          <p className="Domain-content-mech">The team that lays the framework for the creation of a structurally sound robot to begin. Designing these robots is no easy task itself,which is why it has been handed to this group of talented individuals.</p>
          <p className="Domain-content-prog">TRF's programming arm, works in areas such as Android, image processing, machine learning, and web design, among others. The team has been doing research and industrial projects to delve further into these topics.</p>
            </div>
        </div>
  )
}

export default Domains