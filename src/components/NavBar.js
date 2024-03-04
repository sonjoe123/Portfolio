import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import gmail from '../assets/img/gmail.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import logoS from '../assets/img/logoS.svg';
import logoP from '../assets/img/logoP.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/sonphansmu/", "_blank");
  };
  const handleGitHubClick = () => {
    window.open("https://github.com/sonjoe123", "_blank");
  };
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={logoS} alt="Logo S" />
            <img src={logoP} alt="Logo P" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#" onClick={handleLinkedInClick}><img src={navIcon1} alt="" /></a>
                <a href="#" onClick ={handleGitHubClick}><img src={navIcon4} alt="" /></a>
                <a href="mailto:sphan@smu.edu" ><img src={gmail} alt="" /></a>

              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>All about me!!</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>  
      </Navbar>
    </Router>
  )
}
