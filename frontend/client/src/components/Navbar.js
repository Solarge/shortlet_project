// Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/">De Apartment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/apartments" activeClassName="active">
              Apartments
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup" activeClassName="active">
              Sign Up
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signin" activeClassName="active">
              Sign In
            </Nav.Link>
            <Nav.Link as={NavLink} to="#contact" activeClassName="active">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
