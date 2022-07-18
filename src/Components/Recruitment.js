import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/Recruitment.css";
// var email_error = document.getElementById("input-email");
//   email_error.oninvalid = function (e) { e.target.setCustomValidity("Please enter the valid college email id"); };
//   var mobile_error = document.getElementById("input-mobile");
//   mobile_error.oninvalid = function (e) { e.target.setCustomValidity("Please enter valid 10 digit mobile no."); };
//   var pr_error = document.getElementById("input-prn");
//   pr_error.oninvalid = function (e) { e.target.setCustomValidity("Please enter valid 8 digit PR number"); };
//   var rollno_error = document.getElementById("input-rollno");
//   rollno_error.oninvalid = function (e) { e.target.setCustomValidity("Please enter valid 2 or 3 digit roll number"); };

function Recruitment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    prn: "",
    branch: "",
    division: "",
    roll: "",
    ele: 0,
    mech: 0,
    prog: 0,
    admin: 0,
    whytrf: "",
    technicalskills: "",
    experience: "",
  });

  let name, value;
  const Input = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const Checked = (e) => {
    name = e.target.name;
    if (e.target.checked) {
      value = 1;
    } else {
      value = 0;
    }
    setForm({ ...form, [name]: value });
  };

  
  const SendData = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      year,
      prn,
      branch,
      division,
      rollno,
      ele,
      mech,
      prog,
      admin,
      whytrf,
      technicalskills,
      experience,
    } = form;
    const res = await fetch(
      "https://trfrecruitment2022backend.herokuapp.com/savedata",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          year,
          prn,
          branch,
          division,
          rollno,
          ele,
          mech,
          prog,
          admin,
          whytrf,
          technicalskills,
          experience,
        }),
      }
    );
    const data = await res.json();
    if (!data) {
      window.alert("Form submission failed");
      // console.log("Form submission failed");
    } else {
      window.alert("Form filled");
      // console.log("Form filled");
    }
  };
  return (
    <div className="recruitment-main-div">
      <Row className="recruitment-row">
        <h1 className="Heading">TRF Recruitment Application Form AY 2021-22</h1>
        <p className="subHeading">
          Excited to get into The Robotics Forum? Here's your chance to venture
          into the technical and administrative domains of TRF!
        </p>
        <Col
          className="recruitment-info"
          sm={6}
          data-aos="fade-right"
          data-aos-once="true"
        >
          <div>
            <p>
              Students from all branches can apply in multiple domains. Here's
              what you will explore under each domain in TRF:
            </p>
            <h1 className="info-heading">1. Mechanical Team:</h1>
            <p>
              The Mechanical team designs and manipulates the structure of the
              robots. (Mechanical Design, Analysis, Simulation and Manufacturing
              of robots etc.)
            </p>
            <h1 className="info-heading">2. Electronics Team:</h1>
            <p>
              The Electronics team brings the robot to life. It designs the
              circuits, analyze sensors and programs the robot. (Programming
              Micro-controllers, Circuit Design and Analysis, Control of Robotic
              Systems, ROS, MATLAB, Circuit Simulation etc.)
            </p>
            <h1 className="info-heading">3. Programming Team:</h1>
            <p>
              The Programming team works across various software domains
              associated with our software cell - RoboSoft (Application
              Development , Web Development, AR/VR, Image Processing, AI & ML,
              Cybersecurity, Competitive Coding and Open Source Contribution)
            </p>
          </div>
        </Col>
        <Col
          className="recruitment-form-col"
          sm={6}
          data-aos="fade-left"
          data-aos-once="true"
        >
          <form className="recruitment-form" onSubmit={SendData}>
            <label className="input-field">Full Name(Name Surname) :</label>
            <br />
            <input type="text" name="name" onChange={Input}  required />
            <br />
            <label className="input-field">Email id(vit.edu) :</label>
            <br />
            <input
              type="email"
              id="input-email"
              name="email"
              onChange={Input}
              pattern="[a-z0-9._%+-]+@vit.edu"
              onInvalid="alert('You must fill out the form!');"
              errorMessage="Please enter a valid college email id"
              title="vit.edu email id only"
              required
            />
            <br />
            <label className="input-field">Mobile No.(Whatsapp) :</label>
            <br />
            <input
              type="text"
              id="input-mobile"
              name="phone"
              onChange={Input}
              pattern="[0-9]{10}"
              errorMessage="Please enter a valid 10 digit mobile number"
              title="10 digit valid phone no."
              required
            />
            <br />
            <label className="input-field">Year of Study(AY 2021-22) :</label>
            <br />
            <select id="year" name="year" onChange={Input} required>
              <option value="">Select Year</option>
              <option value="FY">First Year</option>
              <option value="SY">Second Year</option>
            </select>
            <br />
            <label className="input-field">PR No. :</label>
            <br />
            <input
              type="text"
              id="input-prn"
              name="prn"
              onChange={Input}
              pattern="[0-9]{8}"
              errorMessage="Please enter a valid 8 digit PR number"
              title="Valid prn"
              required
            />
            <br />
            <label className="input-field">Branch :</label>
            <br />
            <select id="branch" name="branch" onChange={Input} required>
              <option value="">Select Branch</option>
              <option value="Artificial Intelligence & Data Science">
                Artificial Intelligence & Data Science
              </option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Electronics & Telecommunication Engineering">
                Electronics & Telecommunication Engineering
              </option>
              <option value="Industrial & Production Engineering">
                Industrial & Production Engineering
              </option>
              <option value="Instrumentation Engineering">
                Instrumentation Engineering
              </option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
            </select>
            <br />
            <label className="input-field">Division :</label>
            <br />
            <select id="division" name="division" onChange={Input} required>
              <option value="">Select Division</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="N">N</option>
              <option value="O">O</option>
              <option value="P">P</option>
              <option value="Q">Q</option>
              <option value="R">R</option>
              <option value="S">S</option>
              <option value="T">T</option>
              <option value="U">U</option>
              <option value="V">V</option>
              <option value="W">W</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>
            <br />
            <label className="input-field">Roll No. :</label>
            <br />
            <input
              type="text"
              id="input-rollno"
              name="rollno"
              onChange={Input}
              pattern="[0-9]{2,3}"
              errorMessage="Please enter a valid 2 or 3 roll number"
              title="valid roll no."
              required
            />
            <br />
            <label className="input-field">
              Domain(you can apply for multiple domains) :
            </label>
            <br />
            <input type="checkbox" name="ele" onChange={Checked} />
            <label className="input-field checklabel">Electronics</label>
            <br />
            <input type="checkbox" name="mech" onChange={Checked} />
            <label className="input-field checklabel">Mechanical</label>
            <br />
            <input type="checkbox" name="prog" onChange={Checked} />
            <label className="input-field checklabel">Programming</label>
            <br />
            <input type="checkbox" name="admin" onChange={Checked} />
            <label className="input-field checklabel">Admin</label>
            <br />
            <label className="input-field">
              Why do you want to be a part of TRF? :
            </label>
            <br />
            <textarea name="whytrf" onChange={Input} required />
            <br />
            <label className="input-field">
              What technical / administrative skills do you posses that
              differentiate you from others? :
            </label>
            <br />
            <textarea name="technicalskills" onChange={Input} required />
            <br />
            <label className="input-field">
              Do you have any prior experience in the field of robotics I
              competitive/ industrial / administrative or any other? :
            </label>
            <br />
            <textarea name="experience" onChange={Input} required />
            <br />
            <br />
            <div className="submitbtn-div">
              <label className="input-field">
                <input type="submit" value="Submit" />
                <svg className="submit-btn" viewBox="0 0 210 77">
                  {/* <a href="#"> */}
                  <rect width={210} height={77} fill="#C9C9C9" />

                  <path d="M0 0H24L0 24V0Z" fill="#03090C" />
                  <path d="M210 77L186 77L210 53L210 77Z" fill="#03090C" />
                  <text
                    x="105"
                    y="39"
                    fill="#000000"
                    fontSize="1.5em"
                    textAnchor="middle"
                    fontWeight="normal"
                    alignmentBaseline="middle"
                  >
                    Submit
                  </text>
                  {/* </a> */}
                </svg>
              </label>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Recruitment;
