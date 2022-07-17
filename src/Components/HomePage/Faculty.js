import React, { useState } from "react";
import "./Faculty.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import khare from "../../assets/HomePage_images/HMKhare.jpeg";
import kotwal from "../../assets/HomePage_images/GNKotwal.jpeg";
import patwardhan from "../../assets/HomePage_images/MMPatwardhan.jpg";
import { useEffect } from "react";

function Faculty() {
  const SliderData = [
    {
      image: khare,
      facultyName: "prOf. h. m. khare",
      designation: "Asscociate Professor and head",
      about:
        "Prof. H. M. Khare is an Associate Professor and Head of Electrical Dept. with a teaching and industry experience of 29 years. His areas of specialization are Control Systems, Automation & Robotics.",
      id: "01",
    },
    {
      image: kotwal,
      facultyName: "prOf. (dr.) g. n. kotwal",
      designation: "Asscociate Professor and head",
      about:
        "Prof. H. M. Khare is an Associate Professor and Head of Electrical Dept. with a teaching and industry experience of 29 years. His areas of specialization are Control Systems, Automation & Robotics",
      id: "02",
    },
    {
      image: patwardhan,
      facultyName: "prOf. m. m. patwardhan",
      designation: "Asscociate Professor",
      about:
        "Prof. H. M. Khare is an Associate Professor and Head of Electrical Dept. with a teaching and industry experience of 29 years. His areas of specialization are Control Systems, Automation & Robotics",
      id: "03",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  var autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const next = (e) => {
    // e.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = (e) => {
    // e.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  function auto() {
    slideInterval = setInterval(next, intervalTime);
  }

  useEffect(() => {
    setCurrent(0);
  }, []);

  // let heightToStartFrom = 2188;
  // const winScroll = window.scrollY;
  // if (winScroll > heightToStartFrom) {
  //   autoScroll = true;
        
  // }



  useEffect(() => {
    //2288
    console.log(window.scrollY);
    if (autoScroll && window.scrollY > 2188) {
      auto();
    }
    
    return () => {
      clearInterval(slideInterval)
      
      
    };
  }, [current]);

  return (
    <section
      className="Faculty-Container"
      style={{ backgroundColor: "#03090C", color: "white" }}
    >
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Row style={{ margin: "0px" }}>
                <Col className="ImageCol" style={{ padding: "0px" }}>
                  <div className="FacultyImageDiv-neha">
                    {/* <img src={slide.image} alt="faculty" className="faculty-image" /> */}
                    <svg
                      className="faculty_bg"
                      width="300"
                      height="400"
                      viewBox="0 0 364 468"
                      fill="none"
                    >
                      <rect
                        y="0.187988"
                        width="364"
                        height="466.564"
                        fill="#B5D4C8"
                      />
                      <rect
                        x="32"
                        y="33.188"
                        width="300"
                        height="400"
                        fill="#C4C4C4"
                      />
                      <rect
                        x="32"
                        y="33.188"
                        width="300"
                        height="400"
                        fill="url(#pattern0)"
                      />
                      <path
                        d="M0 0.187988H48L0 48.188V0.187988Z"
                        fill="#03090C"
                      />
                      <path
                        d="M364 467.188L316 467.188L364 419.188L364 467.188Z"
                        fill="#03090C"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            href="#image0_13_874"
                            transform="translate(0 -0.0628518) scale(0.00187617 0.00140713)"
                          />
                        </pattern>
                        <image
                          id="image0_13_874"
                          width="533"
                          height="800"
                          href={slide.image}
                        />
                      </defs>
                    </svg>
                  </div>
                </Col>
                <Col className="faculty_Content-neha">
                  <div className="facultyParaDiv">
                    <h3 className="facultyHeading">              
                      {slide.facultyName}
                      
                    </h3>
                    <p className="facultyheading2-neha">
                        {slide.designation}
                      </p>
                    <div className="facultyParaContent-neha">
                      <div
                        className="facultyPara"
                        style={{ paddingTop: "15px" }}
                      >
                        <p>{slide.about}</p>
                      </div>
                      <div className="arrows_faculty-neha">
                        <svg
                          className="arrow"
                          width="50"
                          height="30"
                          viewBox="0 0 48 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={prev}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.234 14.188L19.288 1.71798L18 0.187986L1.30767e-06 15.23L18 30.188L19.29 28.66L4.232 16.188L48 16.188L48 14.188L4.234 14.188Z"
                            fill="white"
                          />
                        </svg>
                        <span
                          className="slideno"
                          style={{
                            fontWeight: "700",
                            fontFamily: "Joyride",
                            marginTop: "30px",
                            padding: "20px",
                          }}
                        >
                          {slide.id}
                        </span>
                        <svg
                          className="arrow"
                          width="50"
                          height="30"
                          viewBox="0 0 48 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={next}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M43.766 16.188L28.712 28.658L30 30.188L48 15.146L30 0.187988L28.71 1.71599L43.768 14.188L0 14.188L0 16.188L43.766 16.188Z"
                            fill="#A4E5E5"
                          />
                        </svg>
                        {/* <FaArrowLeft className='left-arrow' onClick={prev} />
                      {slide.id}
                      <FaArrowRight className='right-arrow' onClick={next} /> */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Faculty;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import image1 from '../assets/faculty.png';
// // import image2 from '../assets/images.jfif';
// import { Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Faculty.css';

// export default class Faculty extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 1000,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       pauseOnHover: true,
//       arrows: false,
//       className: 'slides'

//       };
//       const SliderData = [
//           {

//               image: require('../assets/images.jfif'),
//               key: 1,
//               facultyName: 'Prof H.M. Khare',
//               designation: 'Asscociate Professor and head',
//               about:'Prof. H. M. Khare is an Associate Professor and Head of Electrical Dept. with a teaching and industry experience of 29 years. His areas of specialization are Control Systems, Automation & Robotics.',
//               id: '01'
//             },
//           {
//               image:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
//               key: 2,
//               facultyName: 'Prof. (Dr.) G. N. Kotwal',
//               designation: 'Asscociate Professor and head',
//               about:'Prof. (Dr.) G. N. Kotwal is an Associate Professor and Head of Electrical Dept. with a teaching and industry experience of 29 years. His areas of specialization are Control Systems, Automation & Robotics',
//               id:'02'
//             },
//           {
//               image: require('../assets/images.jfif'),
//               key: 3,
//               facultyName: 'Prof. M. M. Patwardhan',
//               designation: 'Asscociate Professor',
//               about: 'Prof. M. M. Patwardhan is an Associate Professor and Head of Electrical Dept. with a teaching and industry experience of 29 years. His areas of specialization are Control Systems, Automation & Robotics',
//               id:'03'
//             },

//           ];
//     return (
//       <div>
//             <Slider ref={c => (this.slider = c)} {...settings}>
//                 {SliderData.map((slide, index) => {
//                    return (
//                        <div key={slide.key}>
//                            <div className="Faculty-Container">
//                           <Row style={{margin: "0px"}} >
//               <Col style={{padding: "0px"}} >
//                 <div className="ImageDiv-neha">
//                   {/* <img src={slide.image} alt="faculty" className="faculty-image" /> */}
//                   <svg className ="faculty_bg" width="320px" height="420px" viewBox="0 0 364 468" fill="none" >
//                     <rect y="0.187988" width="364" height="466.564" fill="#B5D4C8"/>
//                     <rect x="32" y="33.188" width="300" height="400" fill="#C4C4C4"/>
//                     <rect x="32" y="33.188" width="300" height="400" fill="url(#pattern0)"/>
//                     <path d="M0 0.187988H48L0 48.188V0.187988Z" fill="#03090C"/>
//                     <path d="M364 467.188L316 467.188L364 419.188L364 467.188Z" fill="#03090C"/>
//                     <defs>
//                       <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
//                         <use href="#01" transform="translate(0 -0.0628518) scale(0.00187617 0.00140713)"/>
//                         {/* <use href="#02" transform="translate(0 -0.0628518) scale(0.00187617 0.00140713)" /> */}
//                         {/* <use href="#03 transform="translate(0 -0.0628518) scale(0.00187617 0.00140713)"/>                      */}
//                       </pattern>
//                         <image id={slide.id} width="533" height="800" href={slide.image}/>
//                     </defs>
//                     </svg>

//                 </div>
//                                </Col>
//                                    <Col className="faculty_Content-neha" style={{ padding: "0px" }} >
//                                        <Row>
//                                            <div className="facultyParaDiv">
//                                             <h3 className="facultyHeading"><span style={{ color: "#559083" }}>|</span>  {slide.facultyName}
//                                                 <p className="heading2-neha" style={{ fontSize: '1rem', fontWeight: '100'}}>{slide.designation}</p>
//                                             </h3>
//                                             <div  className="facultyParaContent-neha">
//                                             <div className="facultyPara" style={{ paddingTop: "15px" }}>
//                                                 <p>
//                                                 {slide.about}
//                                                 </p>
//                                            </div>
//                                        </div>
//                                    </div>
//                                        </Row>
//                                        <Row style={{ padding: "0", margin: "0" }}>
//                                            <div style={{ textAlign: "right", color: "white" , padding: "0rem"}}>
//                         <svg className="arrow" width="70" height="60" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={this.previous}>

//                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.234 14.188L19.288 1.71798L18 0.187986L1.30767e-06 15.23L18 30.188L19.29 28.66L4.232 16.188L48 16.188L48 14.188L4.234 14.188Z" fill="white" />

//                                        </svg>
//                                       <span style={{fontSize: "2rem", fontWeight: "700", marginTop: "30px", padding: "10px", fontColor: "#ffffff"}} >{slide.key}</span>
//                                        <svg className="arrow" width="70" height="60" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={this.next}>

//                                            <path fillRule="evenodd" clipRule="evenodd" d="M43.766 16.188L28.712 28.658L30 30.188L48 15.146L30 0.187988L28.71 1.71599L43.768 14.188L0 14.188L0 16.188L43.766 16.188Z" fill="#A4E5E5"  />

//                                        </svg>
//                            </div>
//                                        </Row>

//                                    </Col>
//                                </Row>
//                        </div>

//                            </div>
//                    );
//                 })}
//         </Slider>

//       </div>
//     );
//   }
// }
