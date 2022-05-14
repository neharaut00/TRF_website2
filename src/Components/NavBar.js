import React, { useState }  from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
// import trfLogoNavbar from '../Resources/trf-logo-navbar.png'

const NavBar=(props)=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
      <div>
          {/* <div className="Navbar">
          <a className='nav-options' href='#'>Robocon</a>
          <a className='nav-options' href='#'>Achievements</a>
          <a className='nav-options' href='#'>Blogs</a>
          <a className='TRF-home' href='#'>TRF</a>
          <a className='nav-options' href='#'>Projects</a>
          <a className='nav-options' href='#'>Events</a>
          <a className='nav-options' href='#'>Workshops</a>
          </div>
          <div className="Navbar-mobile">
        <a className='TRF-home-mobile' href='#'>TRF</a> */}
        <Navbar style={{backgroundColor: "#000517"}} className="NavBarMainDiv" expand="md">        
        <NavbarToggler className="navBarToggleMenu" onClick={toggle}>
            H
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="navBarItem">
                <Link className="navBarTabs" to="/" style={{marginRight: "65px"}}>Alumni</Link>
            </NavItem>
            <NavItem className="navBarItem">
                <Link className="navBarTabs" to="/" style={{marginRight: "65px"}}>Achievements</Link>
            </NavItem>
            <NavItem className="navBarItem">
                <Link className="navBarTabs" to="/" style={{marginRight: "65px"}}>Team</Link>
            </NavItem>
            <NavItem>
            <Link to="/">TRF</Link>
            </NavItem>
            <NavItem className="navBarItem">
                <Link className="navBarTabs" to="/" style={{marginRight: "65px"}}>Projects</Link>
            </NavItem>
            <NavItem className="navBarItem">
                <Link className="navBarTabs" to="/" style={{marginRight: "65px"}}>Blog</Link>
            </NavItem>
            <NavItem className="navBarItem">
                <Link className="navBarTabs" to="/" style={{marginRight: "10px"}}>Developer’s Page</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  )
}

export default NavBar