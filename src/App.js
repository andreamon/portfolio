import React, { Fragment } from "react";
import { Container, Row, Col, Navbar, Nav, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <Fragment>
    <Container style={{marginBottom:"5rem"}}>
      <Row>
        <Col className="content">
          <Navbar expand="lg">
            <Navbar.Brand className="special-title">
              Andrea Montaño{" "}
              <span role="img" aria-label="dev">
                {" "}
                👩🏽‍💻{" "}
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#custom-card">Sobre mí</Nav.Link>
                <Nav.Link href="#skill">Skills</Nav.Link>
                {/* <Nav.Link href="#proyects">Proyectos</Nav.Link> */}
                <Nav.Link href="#contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Card id="custom-card" className="content">
        <Row>
          <Col md={{ span: 8 }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem" }}>
                Andrea Montaño
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "1.25rem" }}
              >
                Full Stack Web Developer
              </Card.Subtitle>
              <Card.Text>
                Estoy aprendiendo constantemente sobre nuevas tecnologías y mejorando mis habilidades profesionales.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md={{ span: 4 }}>
            <Card.Img
              className="img-fluid"
              style={{ width: "500px", padding: "1rem" }}
              src="img/profile.jpg"
            />
          </Col>
        </Row>
      </Card>
      <Row className="justify-content-center" style={{marginTop: "3rem", marginBottom:"1rem"}}>
        <span className="title">Skills & Tools</span>
      </Row>
      <div id="skill">
        <div className="skills">
          <span><img src="img/html5.png" height="60" alt="html5" /></span>
          <span><img src="img/css.png" height="60" alt="css" /></span>
          <span><img src="img/javascript.png" height="60" alt="javascript" /></span>
          <span><img src="img/bootstrap.png" height="50" alt="bootstrap" /></span>
          <span><img src="img/laravel.png" height="50" alt="laravel" /></span>
          <span><img src="img/mysql.png" height="60" alt="mysql" /></span>
          <span><img src="img/sql-server.png" height="50" alt="sql-server" /></span>
          <span><img src="img/vue.png" height="50" alt="vue" /></span>
          <span><img src="img/react.png" height="50" alt="react" /></span>
          <span><img src="img/git.png" height="60" alt="git" /></span>
          <span><img src="img/visual-studio-code.png" height="50" alt="vsc" /></span>
          <span><img src="img/trello.png" height="60" alt="trello" /></span>
        </div>
      </div>
    </Container>
    <Container fluid id="contacto">
      <hr />
      <Row>
        <Col md={{span:8}}>
          <p className="contact"><FontAwesomeIcon icon={faMapMarkerAlt} style={{color:"#000"}} /> Ciudad de Corrientes, Argentina</p>
          <p className="contact"><FontAwesomeIcon icon={faEnvelope} /> andrea14_06_2@hotmail.com</p>
        </Col>
        <Col md={{ span: 4 }} >
          <div id="icons">
            {/* <p className="contact-style">Contacto</p> */}
            <a
              href="https://www.linkedin.com/in/andrea-evangelina-monta%C3%B1o/"
              target="_blank"
              rel="noopener noreferrer"
            ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color:"#444"}} /></a>
            <a
              href="https://github.com/andreamon"
              target="_blank"
              rel="noopener noreferrer"
            ><FontAwesomeIcon icon={faGithubSquare} size="2x" style={{ color: "#444"}} /></a>
          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
  );
};

export default App;
