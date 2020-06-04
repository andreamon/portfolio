import React from "react";
import {Card, Col, Row} from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Card id="about-me" className="content">
      <Row>
        <Col md={{ span: 8 }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem", fontWeight:"bold" }}>
              Andrea Montaño
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "1.25rem" }}
            >
              Full Stack Web Developer
            </Card.Subtitle>
            <Card.Text>
              Estoy aprendiendo constantemente sobre nuevas tecnologías y
              mejorando mis habilidades profesionales.
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
  );
};

export default AboutMe;
