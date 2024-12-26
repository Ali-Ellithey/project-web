import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/download.png";
import Button from "react-bootstrap/Button";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="align-items-center">
              <Nav.Link href="#home" as={Link} to="Home">
                Home
              </Nav.Link>
              <Nav.Link href="#Services" >
                Service
              </Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#AboutUs" as={Link} to="./AboutHome">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="Our-Service"
                  as={Link}
                  to="./HomeServices"
                >
                  Our Service
                </NavDropdown.Item>
              </NavDropdown>
              <motion.button
                whileTap={{ scale: 0.85 }}
                className="motion-button"
              >
                <Button variant="success" as={Link} to="/contacted">
                  Contact Us
                </Button>
              </motion.button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
