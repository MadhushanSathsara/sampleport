import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateAndScroll = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <NavbarBrand onClick={() => navigateAndScroll('home-section')} className="navbar-logo">
          MyPortfolio
        </NavbarBrand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigateAndScroll('about-section')}>About</Nav.Link>
            <Nav.Link onClick={() => navigateAndScroll('project-section')}>Projects</Nav.Link>
            <Nav.Link onClick={() => navigateAndScroll('contact')}>Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">

  <NavDropdown.Item onClick={() => navigate('/education')}>
    Education
  </NavDropdown.Item>

  <NavDropdown.Item onClick={() => navigate('/experience')}>
    Work Experience
  </NavDropdown.Item>

  <NavDropdown.Item onClick={() => navigate('/other')}>
    Other Details
  </NavDropdown.Item>

</NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
