import { Link } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarKeren.css'
function NavbarKeren() {

    //a lot of code
    return (
      <Navbar expand="lg" className="reallycoolnav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="img/logo.jpeg"
              width="15%"
              height="15%"
              className="d-inline-block align-top logoa"
              alt="React Bootstrap logo"
            />
            <span className="px-2 pt-2">Kabar6.com</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="#Header">Header</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
  export default NavbarKeren;