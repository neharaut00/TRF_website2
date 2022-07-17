import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/Blog.css";
import blogImg from "../assets/Blogs_images/sideimage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/Blogs_images/CarouselImg1.png";
import Img2 from "../assets/Blogs_images/CarouselImg2.png";
import Img3 from "../assets/Blogs_images/CarouselImg3.png";
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      sliders: [
        {
          id: 1,
          title: "GAN’s A Picture into the Future",
          date: "20th March 2020",
          description:
            "GANs have a wide range of applications, from the film industry to cybersecurity. Have you ever wondered?",
          src: Img1,
          more: "",
        },
        {
          id: 2,
          title: "Creating an AR filter with Spark AR",
          date: "20th March 2020",
          description:
            "Spark AR Studio is an augmented reality platform for Mac & Windows that allows you to somewhat easily create.",
          src: Img2,
          more: "",
        },

        {
          id: 3,
          title: "Develope and deploy an android library",
          date: "20th March 2020",
          description:
            "Many times we've produced native Android apps with Kotlin and Java support, but it's always been a lasan.",
          src: Img3,
          more: "robodroid",
        },
        {
          id: 4,
          title: "GAN’s A Picture into the Future",
          date: "20th March 2020",
          description:
            "GANs have a wide range of applications, from the film industry to cybersecurity. Have you ever wondered?",
          src: Img1,
          more: "",
        },
        {
          id: 5,
          title: "Creating an AR filter with Spark AR",
          date: "20th March 2020",
          description:
            "Spark AR Studio is an augmented reality platform for Mac & Windows that allows you to somewhat easily create.",
          src: Img2,
          more: "",
        },

        {
          id: 6,
          title: "Develope and deploy an android library",
          date: "20th March 2020",
          description:
            "Many times we've produced native Android apps with Kotlin and Java support, but it's always been a lasan.",
          src: Img3,
          more: "robodroid",
        },
      ],
    };
  }

  sliders() {
    return this.state.sliders.map((blog_card) => {
      return (
        <div className="blog_card_container">
          <div key={blog_card.id} className="blog_card" id="blogs-slider-id">
            <img
              src={blog_card.src}
              alt={blog_card.title}
              className="blog_card-image"
            />
            {/* <h1
            data-aos="zoom-in-down"
            data-aos-duration="800"
            className="blog_No"
          >
            0{blog_card.id}
          </h1> */}
            <h6 className="blog_No">{blog_card.date}</h6>
            <div className="text-info">
              <div className="blog_card-header">
                <h2 style={{ backgroundColor: "white", fontWeight: "600" }}>
                  {blog_card.title}
                </h2>
              </div>
              <p
                className="blog_card-description"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  opacity: "60%",
                }}
              >
                {blog_card.description}
              </p>
            </div>
            {/* <Link to={`/blogs/${blog_card.more}`} key={blog_card.id}>
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
      autoplay: false,
      slidesToScroll: 3,
      pauseOnHover: false,
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
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            speed: 2000,
            pauseOnHover: true,
            swipeToSlide: true,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 557,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            pauseOnHover: true,
            swipeToSlide: true,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <div className="blog">
        <img
          className="blog-img"
          src={blogImg}
          alt="Honeycomb"
          style={{ height: "850px" }}
        />
        <div className="blog-text-container" style={{ zIndex: "3000000" }}>
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="blog-main-heading-mob-view"
            style={{ zIndex: "3000000", backgroundColor: "transparent" }}
          >
            <h1
              className="blog-main-heading mob-view"
              style={{ zIndex: "3000000", backgroundColor: "transparent" }}
            >
              Our
            </h1>
            <h1
              className="blog-main-heading mob-view"
              style={{ zIndex: "3000000", backgroundColor: "transparent" }}
            >
              blOgs
            </h1>
          </div>
          {/* <p
            data-aos="fade-right"
            data-aos-once="true"
            className="blog-subheading"
            style={{ zIndex: "3000000", backgroundColor: "transparent" }}
          >
            TRF is leading technical club in Vishwakarma Institute of
Technology that builds powerful Robotics and Software solutions.
          </p> */}
          <Link to="/blogs/#blogs-slider-id">
            <svg
              className="Intro-button"
              viewBox="0 0 210 77"
              cursor={"pointer"}
            >
              <rect width={210} height={77} fill="#C9C9C9" />

              <path d="M0 0H24L0 24V0Z" fill="#03090C" />
              <path d="M210 77L186 77L210 53L210 77Z" fill="#03090C" />
              <text
                x="105"
                y="39"
                fill="#000000"
                fontSize="1.5em"
                fontFamily="GreyCliff"
                textAnchor="middle"
                fontWeight="bold"
                alignmentBaseline="middle"
                cursor={"pointer"}
              >
                Blogs
              </text>
            </svg>
          </Link>
        </div>
        <div className="blog-slider-container">
          {/* <div className="slider-left-text">
            <h1>Blogs</h1>
            <p>Ultimate list of blogs</p>
          </div> */}
          <Slider {...settings} className="blog-slider">
            {this.sliders()}
          </Slider>
        </div>

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
          Drag to see more
        </p>
      </div>
    );
  }
}
