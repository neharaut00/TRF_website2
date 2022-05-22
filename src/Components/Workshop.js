import React, { Component } from "react";
import Slider from "react-slick";
import './Workshop.css'
import WorkshopImg from '../assets/Workshop.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/Robonext.png'
import '../assets/Robospark.png'
import '../assets/Robodroid.png'

export default class Workshop extends Component {
    constructor() {
        super();
        this.state = {
            sliders: [{
                    id: 1,
                    title: "ROBONEXT",
                    description:"The robonext workshop is a six-week long workshop that is divided into two parts: six parts for theory and two parts for practical implementation. The concepts are taught by the members of TRF. Apart from that, guest lectures are delivered for some topics, with speakers including past team members and qualified professors.",
                    src:require('../assets/Robonext.png'),
                },
                {
                    id: 2,
                    title: "ROBOSPARK",
                    description:"The robospark workshop started with the introduction of the 10-year-old legacy of TRF. The attendees were from three domains - Mech Programming and Elex. All the attendees had hands-on experience. The attendees conducted experiments on all the devices and mechanisms which they learnt in the online workshop.",
                    src:require('../assets/Robospark.png'),
                },  
            
                {
                    id: 3,
                    title: "ROBODROID",
                    description:"Our college's aspiring engineers are invited to attend the Robodroid workshop. It is a workshop as well as a competition held every year in which the budding engineers are introduced to the legacy of TRF. The workshop lasts for around eight days and the students participate in a variety of theory and lab sessions to gain practical experience.",
                    src:require('../assets/Robodroid.png'),
                },
                {
                    id: 4,
                    title: "ROBOVISION",
                    description:"The robonext workshop is a six-week long workshop that is divided into two parts: six parts for theory and two parts for practical implementation. The concepts are taught by the members of TRF. Apart from that, guest lectures are delivered for some topics, with speakers including past team members and qualified professors.",
                    src:require('../assets/Robospark.png'),
                    
                } ,
                {
                    id: 5,
                    title: "LEVEL 1",
                    description:"The robospark workshop started with the introduction of the 10-year-old legacy of TRF. The attendees were from three domains - Mech Programming and Elex. All the attendees had hands-on experience. The attendees conducted experiments on all the devices and mechanisms which they learnt in the online workshop.",
                    src:require('../assets/Robodroid.png'),
                },
                {
                    id: 6,
                    title: "LEVEL 2",
                    description:"Our college's aspiring engineers are invited to attend the Robodroid workshop. It is a workshop as well as a competition held every year in which the budding engineers are introduced to the legacy of TRF. The workshop lasts for around eight days and the students participate in a variety of theory and lab sessions to gain practical experience.",
                    src:require('../assets/Robonext.png'),
                }     
            ]
        }
        
    }

    sliders() {
        return this.state.sliders.map(card => {
            return (
                <div key={card.id} className="card">
                    <img src={card.src} alt={card.title} className='card-image' />
                    <h1 className="Workshop_No">0{card.id}</h1>
                <div className='text-info'>
                    <div className='card-header'>
                    <h2 style={{backgroundColor:"white",fontWeight: "600" }}>{card.title}</h2>                 
                    </div>
                    <p className="card-description" style={{backgroundColor:"white", color:"black", opacity:"60%"}}>{card.description}</p>                    
                    </div>
                    <button><svg className="know-more-btn" viewBox="0 0 210 77">
              {/* <a href="#"> */}                
                <rect width={210} height={77} fill="black" /> 

                <path d="M0 0H24L0 24V0Z" fill="#ffff" />
                <path d="M210 77L186 77L210 53L210 77Z" fill="#ffff" />   
                <text x="105"
                      y="39"
                      fill="#ffff"
                      fontSize="1.5em"
                      text-anchor="middle"
                      fontWeight="normal"
                      alignment-baseline="middle">
                  Know More
                </text>
              {/* </a> */}
            </svg></button>
                </div>
            )
        });
    }
    
  render() {
    const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    arrows: true,
    
    appendDots: dots => (
            <div style={{
                borderRadius: "10px",
                padding: "15px"
              }}>
            <ul className="dots"> {dots} </ul>
        </div>
    )
          ,customPaging: i => (
            <div className="custom-paging">
              
            </div>
          )
        };
   
    return (
        <div className="Workshop">
            <img className="Workshop-img" src={WorkshopImg} alt="Snow" style={{ "width": "45%",  "height":"650px"}} />
           <div className="Workshop-text-container">
               <h1 className='Workshop-main-heading'>wOrkshOps</h1>
               <p className='Workshop-subheading'>TRF is leading technical club in Vishwakarma Institute of Technology that builds powerful Robotics and Software solutions.</p>
            </div>
            
        <Slider {...settings} className="workshop-slider">
                {/* {[11, 12, 13, 14, 15,16,17,18,19].map((item, index) => {
                    return <div key={index}>{item}</div>
          })} */}
                {this.sliders()}
               
            </Slider>
            <p style={{ color: "white", fontSize: "1em", zIndex: "3000", "paddingTop": "24px", "textAlign": "right", paddingRight: "30px"}}> Drag to see more</p>
      </div>
    );
  }
}
