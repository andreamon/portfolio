import React from "react";
import {Row, Col, Navbar, Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <Row>
      <Col className="content">
        <Navbar expand="lg">
          <Navbar.Brand className="special-title">
            <span >Andrea Montaño</span>{" "}
            <span role="img" aria-label="dev">
              {" "}
              💻{" "}
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about-me">Sobre mí</Nav.Link>
              <Nav.Link href="#skill">Skills</Nav.Link>
              {/* <Nav.Link href="#proyects">Proyectos</Nav.Link> */}
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
