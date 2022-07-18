import React, { useState }  from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../assets/TRF_logo.png"

function NavBar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div className="Navbar" >
    <nav className="nav">
      <Link to="/" className="nav__brand_mobile">
        <img src={logo} alt="logo" height="40px"></img>
      </Link>      
      <ul className={active}>
        <li onClick={navToggle} className="nav__item">
          <Link to="/roboccon" className="nav__link">
            Robocon
          </Link>
        </li>
        <li onClick={navToggle} className="nav__item">
          <Link to="/blogs" className="nav__link">
            Blogs
          </Link>
        </li>
        <li onClick={navToggle} className="nav__item">
          <Link to="/achievements" className="nav__link">
          Achievements
          </Link>
        </li>
        <Link to="/" className="nav__brand">
        <img src={logo} alt="logo" height="40px"></img>
      </Link>   
        <li onClick={navToggle} className="nav__item">
          <Link to="/recruitment" className="nav__link">
            Recruitment
          </Link>
        </li>
        <li onClick={navToggle} className="nav__item">
          <Link to="/team" className="nav__link">
            Team
          </Link>
        </li>
        <li onClick={navToggle} className="nav__item">
          <Link to="/workshops" className="nav__link">
            Workshops
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon} >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        {/* <img src={hamburger_icon} alt="logo" /> */}
      </div>
      </nav>
      </div>
  );
}


// const NavBar=(props)=> {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   return (
//       <div>
         
//     </div>
//   )
// }

export default NavBar