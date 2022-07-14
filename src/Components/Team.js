import React from "react";
import "./Team.css";
import TeamImg from "../assets/team.png";
import TestImg1 from "../assets/Team_images/TestImage1.jpg";
import TestImg2 from "../assets/Team_images/TestImage2.jpg";
import TestImg3 from "../assets/Team_images/TestImage3.jpg";
import TestImg4 from "../assets/Team_images/TestImage4.jpg";
import { Row, Col } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Team() {
  const TeamData = [
    {
      id: 1,
      image: TestImg1,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
    {
      id: 2,
      image: TestImg2,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
    {
      id: 3,
      image: TestImg3,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
    {
      id: 4,
      image: TestImg4,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
    {
      id: 5,
      image: TestImg1,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
    {
      id: 6,
      image: TestImg2,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
    {
      id: 7,
      image: TestImg3,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
    {
      id: 7,
      image: TestImg4,
      name: "Neha",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-raut-30748320a/",
    },
  ];
  return (
    <div className="Developers_team">
      <img
        className="Team-img"
        src={TeamImg}
        alt="Honeycomb"
        style={{
          height: "576px",
          backgroundColor: "transparent",
          paddingTop: "100px",
        }}
      />
      <div className="Team-text-container" style={{ zIndex: "3000000" }}>
        <h1
          className="Team-main-heading"
          style={{ zIndex: "3000000", backgroundColor: "transparent" }}
        >
          meet
        </h1>
        <h1
          className="Team-main-heading"
          style={{ zIndex: "3000000", backgroundColor: "transparent" }}
        >
          Our team
        </h1>

        <p
          data-aos="fade-right"
          data-aos-once="true"
          className="Team-subheading"
          style={{ zIndex: "3000000", backgroundColor: "transparent" }}
        >
          We work with people from all domains
        </p>
      </div>
      <Row md={4} xs={2} className="Team-row" style={{ paddingTop: "40px" }}>
        {TeamData.map((card, index) => {
          return (
            <Col style={{ paddingTop: "70px" }}>
              <div className="team_card">
                <div
                  className="team-image-container"
                  style={{ width: "90%", height: "90%" }}
                >
                  <div class="content-overlay"></div>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "100%" }}
                    className="team_card-image"
                  />

                  <div
                    class="middle"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <LinkedInIcon className="overlay_linkedin_icon" />
                    <a
                      href={card.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="team_linkedin"
                      style={{
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        color: "rgba(255,255,255,1)",
                      }}
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
                <h1 className="team_name">{card.name}</h1>
                <p className="team_role">{card.role}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Team;
