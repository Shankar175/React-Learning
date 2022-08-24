import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <>
      <Navbar sticky='top' expand='sm' bg='info'>
        <Navbar.Brand href="#home">
          <img
            src="./Capture123.JPG"
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
          />Test Company
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About Us</Nav.Link>
              <Nav.Link href='/products'>Products</Nav.Link>
                <NavDropdown title='Dropdown' id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Smart Phones</NavDropdown.Item>
                  <NavDropdown.Item href="#">Smart Watches</NavDropdown.Item>
                  <NavDropdown.Item href="#">Laptops</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/gallery'>Gallery</Nav.Link>
              <Nav.Link href='/contact'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;