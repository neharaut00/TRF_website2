import React, {useState, useEffect} from 'react'
import './Achievements.css'
import {Row, Col} from 'react-bootstrap'
import A1 from '../assets/Achievements_images/A1.png'
import A2 from '../assets/Achievements_images/A2.png'
import A3 from '../assets/Achievements_images/A3.png'
import A4 from '../assets/Achievements_images/A4.png'
import A5 from '../assets/Achievements_images/A5.png'
import A61 from '../assets/Achievements_images/A6.1.png'
import A7 from '../assets/Achievements_images/A7.png'
import A81 from '../assets/Achievements_images/A8.1.png'

function Achievements() {    
    const [year, setYear] = useState("007");
    const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 3700;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

    const changeYear = () => {
        console.log(window.scrollY)
        if (window.scrollY > 3350) {
            setYear("016");
            // setYear(2009);
        }
        else if(window.scrollY > 3135) {
            setYear("013");
        }
        else if(window.scrollY > 2648) {
            setYear("012");
        }
        else if(window.scrollY > 1960){
            setYear("011");
        }
        else if(window.scrollY > 1373){
            setYear("010");
        }
        else if(window.scrollY > 916){
            setYear("009");
        }
        else if(window.scrollY > 436){
            setYear("008");
        }       
        else {
            setYear("007");
        }
    }

    window.addEventListener('scroll', changeYear);

  return (
      <div className="achievements">
          {
              isVisible 
              && 
          <h1 className="year" style={{ 'position': "fixed", 'backgroundColor': 'transparent', 'display': 'relative', "color": "white", "fontFamily": "Joyride" }}>
              <div id= "hide" style={{ 'display': 'inline-block','color': 'black', 'backgroundColor': 'transparent', 'textShadow': '1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 0.5px 0.5px #fff, -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff' }}>
                  2
              </div>
             
                  {year}   
            </h1>   
            }       
          <Row className="achievement-row">
              <Col className='image-col'>
              <img className="achievements-img" src={A1} alt="Achievements" />
              </Col>
              <Col className="competition-container-left" >
                  <div className="competition-details div1" > 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>Best Debutants, Quarter Finalists</p>
                </div>
              </Col>
          </Row>
          <Row className="achievement-row">
              <Col className="competition-container-right">
              <div className="competition-details div2"> 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>Semifinalists</p>
                </div>
              </Col>
              <Col className='image-col'>
                  <img className="achievements-img" src={A2} alt="Achievements" /></Col>
          </Row>
          <Row className="achievement-row">
              <Col className='image-col'>
              <img className="achievements-img" src={A3} alt="Achievements" />
              </Col>
              <Col className="competition-container-left">
              <div className="competition-details div3"> 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>Runners Up, Best Autonomous Bot</p>
                </div>
              </Col>
          </Row>
          <Row className="achievement-row">
              <Col className="competition-container-right">
              <div className="competition-details div4"> 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>Runners Up, Best Autonomous Bot</p>
                </div>
              </Col>
              <Col className='image-col'><img className="achievements-img" src={A4} alt="Achievements" /></Col>
          </Row>
          <Row className="achievement-row">
              <Col className='image-col'>
              <img className="achievements-img" src={A5} alt="Achievements" />
              </Col>
              <Col className="competition-container-left">
              <div className="competition-details div5"> 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>Quarter Finalist</p>
                </div>
              </Col>
          </Row>
          <Row className="achievement-row">
              <Col className="competition-container-right">
              <div className="competition-details div6"> 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>Semi Finalist, Best Manual Operator</p>
                </div>
              </Col>
              <Col className='image-col'><img className="achievements-img" src={A61} alt="Achievements" /></Col>
          </Row>
          <Row className="achievement-row">
              <Col className='image-col'>
              <img className="achievements-img" src={A7} alt="Achievements" />
              </Col>
              <Col className="competition-container-left">
              <div className="competition-details div7"> 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>ABU ROBOCON Runners up,
Best Autonomous Bot</p>
                </div>
              </Col>
          </Row>
          <Row className="achievement-row">
              <Col className="competition-container-right">
              <div className="competition-details div8"> 
                  <h2 className="competition-heading" style={{'backgroundColor': 'transparent'}}>ABU ROBOCON</h2>
                  <p className="competition-subheading" style={{'backgroundColor': 'transparent'}}><span style={{ color: "#559083" }}>|</span>AIR 10</p>
                </div>
              </Col>
              <Col className='image-col'><img className="achievements-img" src={A81} alt="Achievements" /></Col>
          </Row>
          
    </div>
  )
}

export default Achievements