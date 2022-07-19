import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/Blog.css";
import blogImg from "../assets/Blogs_images/sideimage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Img1 from "../assets/Blogs_images/CarouselImg1.png";
// import Img2 from "../assets/Blogs_images/CarouselImg2.png";
// import Img3 from "../assets/Blogs_images/CarouselImg3.png";
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      sliders: [
        // {
        //   id: 1,
          // heading: "The Philosophy of Enigma Machine",
          // date: "24th May 2022",
          // abstract:
          //   "The Enigma machine is an encryption instrument that was put up and used to protect commercial, diplomatic, and navy messages from the early to mid-twentieth century. ",
          // bg_img: "https://miro.medium.com/max/1400/1*9UkMzMs400d9n6WJuTaBCA.jpeg",
          // blog_link: "https://medium.com/@arshadpatel2001/the-philosophy-of-enigma-machine-9d8f9820080b",
        // },
        // {
        //   id: 2,
        //   heading: "Linux Basics",
        //   date: "24th May 2022",
        //   abstract:
        //     "Linux is an open-source operating system (OS). An operating system is the software that directly manages a system’s hardware and resources, like CPU, memory, and storage.",
        //   bg_img: "https://miro.medium.com/max/1400/1*jlcJRrHqaH-PaIhljYZo9w.png",
        //   blog_link: "https://medium.com/@atharva.deore20/linux-basics-743ca439b6cc",
        // },

        // {
        //   id: 3,
        //   heading: "How do stay secure from cyber-attacks?",
        //   date: "24th May 2022",
        //   abstract:
        //     "Our world is increasingly digital and increasingly interconnected. So, while we must protect ourselves, it’s going to take all of us to really protect the systems we all rely on. ",
        //   bg_img: "https://miro.medium.com/max/1400/1*a-gKjaRiGC59c6AlMQd39g.jpeg",
        //   blog_link: "https://medium.com/@bhaktikarangale3140/how-do-stay-secure-from-cyber-attacks-41ecd56da280",
        // },
        // {
        //   id: 4,
        //   heading:
        //     "Website Hacking — Information Gathering, File Upload, Code Execution, File Inclusion",
        //   date: "24th May 2022",
        //   abstract:
        //     "Information gathering about the target is the most important thing in ethical hacking. A website consists of various attributes like IP address, technology used , programming languages used etc.",
        //   bg_img: "https://miro.medium.com/max/1400/1*Wt7xLeKN8kQvQEIFYEUbcQ.png",
        //   blog_link: "https://medium.com/@chaitanya.landge20/website-hacking-information-gathering-file-upload-code-execution-file-inclusion-2c5aa40c0d90",
        // },
        // {
        //   id: 5,
        //   heading: "Website Hacking — XSS (Cross Side Scripting)",
        //   date: "24th May 2022",
        //   abstract:
        //     "XSS is short for Cross Site Scripting. This type of vulnerability allows an attacker to inject JavaScript into a page. ",
        //   bg_img: "https://miro.medium.com/max/1400/1*jBP_KyO69jeu8fgnTuffWQ.png",
        //   blog_link: "https://medium.com/@chaitanya.landge20/website-hacking-xss-cross-side-scripting-bcfda9cea60d",
        // },

        // {
        //   id: 6,
        //   heading: "Website Hacking — Final Part",
        //   date: "24th May 2022",
        //   abstract:
        //     "It is very important to understand that achieving 100 percent security is impossible. All we are trying to do is to improve the security of our applications and make sure that they are as secure as possible.",
        //   bg_img: "https://miro.medium.com/max/1400/1*HZAdLiqBv3-npGDph93hcQ.png",
        //   more: "https://medium.com/@chaitanya.landge20/website-hacking-final-part-2e41ba9447d5",
        // },
      ],
    };
  }

  componentDidMount() {
    fetch("https://trfbackend.herokuapp.com/all-blogs")
      .then((response) => response.json())
      .then((blogsList) => {
        this.setState({ sliders: blogsList });
        
      });
  }

  sliders() {
    const { sliders } = this.state;
    return sliders.map((blog_card) => {
      return (
        <div key={blog_card._id} className="blog_card_container">
          <div className="blog_card" id="blogs-slider-id">
            <img
              src={blog_card.bg_img}
              alt={blog_card.heading}
              className="blog_card-image"
            />            
            <h6 className="blog_No">{blog_card.date}</h6>
            <div className="blog-text-info">
              <div className="blog_card-header">
                <h2 style={{ backgroundColor: "white", fontWeight: "600" }}>
                  {blog_card.heading}
                </h2>
              </div>
              <p
                className="blog_card-description"
                style={{
                  backgroundColor: "white",
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                {blog_card.abstract}
                <a
                  href={blog_card.blog_link}
                  style={{ textDecorationColor: "#559083" }}
                  target="__blank"
                >
                  <p
                    style={{
                      backgroundColor: "transparent",
                      color: "#559083",
                      fontWeight: "bolder",
                    }}
                  >
                    Read more
                  </p>
                </a>
              </p>              
            </div>
           
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
        </p>
      </div>
    );
  }
}
