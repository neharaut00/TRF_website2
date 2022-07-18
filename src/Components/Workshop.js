import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/Workshop.css";
import WorkshopImg from "../assets/Workshop_images/Workshop.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/Workshop_images/Robonext.png";
import "../assets/Workshop_images/Robospark.png";
import "../assets/Workshop_images/Robodroid.png";
// import { Link } from "react-router-dom";

export default class Workshop extends Component {
  constructor() {
    super();
    this.state = {
      sliders: [
        {
          id: 1,
          title: "ROBONEXT",
          description:
            "The robonext workshop is a six-week long workshop that is divided into two parts: six parts for theory and two parts for practical implementation. The concepts are taught by the members of TRF. Apart from that, guest lectures are delivered for some topics, with speakers including past team members and qualified professors.",
          src: require("../assets/Workshop_images/Robonext.png"),
          more: "robonext",
        },
        {
          id: 2,
          title: "ROBOSPARK",
          description:
            "The robospark workshop started with the introduction of the 10-year-old legacy of TRF. The attendees were from three domains - Mech Programming and Elex. All the attendees had hands-on experience. The attendees conducted experiments on all the devices and mechanisms which they learnt in the online workshop.",
          src: require("../assets/Workshop_images/Robospark.png"),
          more: "robospark",
        },

        {
          id: 3,
          title: "ROBODROID",
          description:
            "Our college's aspiring engineers are invited to attend the Robodroid workshop. It is a workshop as well as a competition held every year in which the budding engineers are introduced to the legacy of TRF. The workshop lasts for around eight days and the students participate in a variety of theory and lab sessions to gain practical experience.",
          src: require("../assets/Workshop_images/Robodroid.png"),
          more: "robodroid",
        },
        {
          id: 4,
          title: "ROBOVISION",
          description:
            "The robonext workshop is a six-week long workshop that is divided into two parts: six parts for theory and two parts for practical implementation. The concepts are taught by the members of TRF. Apart from that, guest lectures are delivered for some topics, with speakers including past team members and qualified professors.",
          src: require("../assets/Workshop_images/Robospark.png"),
          more: "robovision",
        },
        {
          id: 5,
          title: "LEVEL 1",
          description:
            "The robospark workshop started with the introduction of the 10-year-old legacy of TRF. The attendees were from three domains - Mech Programming and Elex. All the attendees had hands-on experience. The attendees conducted experiments on all the devices and mechanisms which they learnt in the online workshop.",
          src: require("../assets/Workshop_images/Robodroid.png"),
          more: "level1",
        },
        {
          id: 6,
          title: "LEVEL 2",
          description:
            "Our college's aspiring engineers are invited to attend the Robodroid workshop. It is a workshop as well as a competition held every year in which the budding engineers are introduced to the legacy of TRF. The workshop lasts for around eight days and the students participate in a variety of theory and lab sessions to gain practical experience.",
          src: require("../assets/Workshop_images/Robonext.png"),
          more: "level2",
        },
      ],
    };
  }

  sliders() {
    return this.state.sliders.map((card) => {
      return (
        <div key={card.id} className="card">
          <img src={card.src} alt={card.title} className="card-image" />
          <h1
            data-aos="zoom-in-down"
            data-aos-duration="800"
            data-aos-once="true"
            className="Workshop_No"
          >
            0{card.id}
          </h1>
          <div className="text-info">
            <div className="card-header">
              <h2 style={{ backgroundColor: "white", fontWeight: "600" }}>
                {card.title}
              </h2>
            </div>
            <p
              className="card-description"
              style={{
                backgroundColor: "white",
                color: "black",
                opacity: "60%",
              }}
            >
              {card.description}
            </p>
          </div>
          {/* <Link to={`/workshops/${card.more}`} key={card.id}>
            <button>
              <svg className="know-more-btn" viewBox="0 0 210 77">
                
                <rect width={210} height={77} fill="black" />

                <path d="M0 0H24L0 24V0Z" fill="#ffff" />
                <path d="M210 77L186 77L210 53L210 77Z" fill="#ffff" />
                <text
                  x="105"
                  y="39"
                  fill="#ffff"
                  fontSize="1.5em"
                  textAnchor="middle"
                  fontWeight="normal"
                  alignmentBaseline="middle"
                >
                  Know More
                </text>
               
              </svg>
            </button>
          </Link> */}
        </div>
      );
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
      arrows: true,
     

      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <ul className="dots"> {dots} </ul>
        </div>
      ),
      customPaging: (i) => <div className="custom-paging"></div>,
      responsive: [
        {
          breakpoint: 1133,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            swipeToSlide: true,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 707,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <div className="Workshop">
        <img
          className="Workshop-img"
          src={WorkshopImg}
          alt="Honeycomb"
          style={{ height: "650px" }}
        />
        <div className="Workshop-text-container" style={{ zIndex: "3000000" }}>
          <h1
            className="Workshop-main-heading"
            style={{ zIndex: "3000000", backgroundColor: "transparent" }}
          >
            wOrkshOps
          </h1>
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="Workshop-main-heading-mob-view"
            style={{ zIndex: "3000000", backgroundColor: "transparent" }}
          >
            <h1
              className="workshop-mob-view"
              style={{ zIndex: "3000000", backgroundColor: "transparent" }}
            >
              wOrk
            </h1>
            <h1
              className="workshop-mob-view"
              style={{ zIndex: "3000000", backgroundColor: "transparent" }}
            >
              shOps
            </h1>
          </div>
          <p
            data-aos="fade-right"
            data-aos-once="true"
            className="Workshop-subheading"
            style={{ zIndex: "3000000", backgroundColor: "transparent" }}
          >
            TRF is leading technical club in Vishwakarma Institute of Technology
            that builds powerful Robotics and Software solutions.
          </p>
        </div>

        <Slider {...settings} className="workshop-slider">
          {/* {[11, 12, 13, 14, 15,16,17,18,19].map((item, index) => {
                    return <div key={index}>{item}</div>
          })} */}
          {this.sliders()}
        </Slider>
        <p
          className="drag-text"
          style={{
            fontSize: "1em",
            textAlign: "center",
            zIndex: "3000",
            paddingTop: "18px",
          }}
        >
          {" "}
          
        </p>
      </div>
    );
  }
}
