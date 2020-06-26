import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container id="contacto">
      <hr />
      <Row>
        <Col md={{ span: 8 }}>
          <p className="contact">
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#000" }} />{" "}
            Ciudad de Corrientes, Argentina
          </p>
          <p className="contact">
            <FontAwesomeIcon icon={faEnvelope} /> andrea14_06_2@hotmail.com
          </p>
        </Col>
        <Col md={{ span: 4 }} style={{marginTop: "1em"}}>
          <div id="icons">
            {/* <p className="contact-style">Contacto</p> */}
            <a
              href="https://www.linkedin.com/in/andrea-evangelina-monta%C3%B1o/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ color: "#444" }}
              />
            </a>
            <a
              href="https://github.com/andreamon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="2x"
                style={{ color: "#444" }}
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
