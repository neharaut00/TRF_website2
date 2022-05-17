import React, { useState }  from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

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
        TRF
      </Link>      
      <ul className={active}>
        <li className="nav__item">
          <Link to="/roboccon" className="nav__link">
            Roboccon
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/achievements" className="nav__link">
            Achievements
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/blogs" className="nav__link">
            Blogs
          </Link>
        </li>
        <Link to="/" className="nav__brand">
        TRF
      </Link>   
        <li className="nav__item">
          <Link to="/projects" className="nav__link">
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/events" className="nav__link">
            Events
          </Link>
        </li>
        <li className="nav__item">
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