import React from 'react';
import "./Domain.css";
import Electronics from '../assets/Electronics.png';
// import FlashOnIcon from '@mui/icons-material/FlashOn';
// import SettingsIcon from '@mui/icons-material/Settings';
// import DevicesIcon from '@mui/icons-material/Devices';

function Domains() {
  return (
      <div className="Domains">
          <div className="Electronics">
            <div className="Domain-content">
                    <p className="Domain-content">The team that does the job of developing, creating, and researching circuit schematics and PCBs, analyzing various sensors and deciding their uses, programming the robot, and actuating it via all of this.                   
                    </p>
                </div>
            <div className="hexagon1">
            <svg width="226" height="196" viewBox="0 0 226 196" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M168.317 2.18799H58.0594L2.93069 97.7127L58.0594 193.237H168.317L223.446 97.7127L168.317 2.18799Z" fill="#559083" />

                    <path d="M169.505 195.376H56.6337L0.316849 97.7128L56.6337 0.0494385H169.505L225.822 97.7128L169.505 195.376ZM59.2475 190.861H166.891L220.594 97.7128L166.891 4.56429H59.2475L5.54456 97.7128L59.2475 190.861Z" fill="white" />

                    {/* <image href="../assets/Electronics.png" height="200" width="200" />
                    <image x="90" y="-65" width="128" height="146" href="../assets/Electronics.png'"/> */}
                    {/* <FlashOnIcon className="ThunderIcon" /> */}
                    
                </svg>
                
            
                </div>
                <div className="Domain-heading">
                    <h1>01 electronics</h1>
                </div>
          </div>
          
          <div className="Mechanics">
              <div className="Domain-heading">
                  <h1>02 mechanics</h1>
              </div>
          <div className="hexagon2">
          <svg width="226" height="196" viewBox="0 0 226 196" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path d="M168.317 2.18799H58.0594L2.93069 97.7127L58.0594 193.237H168.317L223.446 97.7127L168.317 2.18799Z" fill="#559083" />

                  <path d="M169.505 195.376H56.6337L0.316849 97.7128L56.6337 0.0494385H169.505L225.822 97.7128L169.505 195.376ZM59.2475 190.861H166.891L220.594 97.7128L166.891 4.56429H59.2475L5.54456 97.7128L59.2475 190.861Z" fill="white" />
              
                  {/* <image href="../assets/Mechanics.png" height="200" width="200"/> */}
                  {/* <SettingsIcon className="SettingsIcon"/> */}
            </svg>              
              </div>
              <div className="Domain-content">
                  <p className="Domain-content">The team that lays the framework for the creation of a structurally sound robot to begin. Designing these robots is no easy task itself,which is why it has been handed to this group of talented individuals.                     
                  </p>
              </div>
          </div>

          <div className="Software">
              <div className="Domain-content">
                  <p className="Domain-content">TRF's programming arm, works in areas such as Android, image processing, machine learning, and web design, among others. The team has been doing research and industrial projects to delve further into these topics.                 
                  </p>
              </div>
              <div className="hexagon3">
             <svg width="226" height="196" viewBox="0 0 226 196" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path d="M168.317 2.18799H58.0594L2.93069 97.7127L58.0594 193.237H168.317L223.446 97.7127L168.317 2.18799Z" fill="#559083" />

                  <path d="M169.505 195.376H56.6337L0.316849 97.7128L56.6337 0.0494385H169.505L225.822 97.7128L169.505 195.376ZM59.2475 190.861H166.891L220.594 97.7128L166.891 4.56429H59.2475L5.54456 97.7128L59.2475 190.861Z" fill="white" />

                  {/* <image href="../assets/Software.png" height="200" width="200"/> */}
                  {/* <g><text x="0" y="0">&#xf040;</text></g> */}
                  
              </svg>
             
              </div>
              <div>
                <h1 className="Domain-heading">03 sOftware</h1>
              </div>
              
          </div>    
    </div>
  )
}

export default Domains