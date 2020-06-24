import React, {useRef} from "react";
import {Card, Col, Row} from 'react-bootstrap';
import useTyped from "use-typed";

const AboutMe = () => {
  const contentEffect = useRef(null);
  const contentTyped = useTyped(contentEffect, {
    strings: [`Analista programadora universitaria <span role="img" aria-label="dev">
    👩🏽‍💻 </span><br/>
    Estoy aprendiendo constantemente sobre nuevas tecnologías y mejorando mis habilidades profesionales.<br />
     Me considero una persona proactiva. Me gusta aprender sobre diferentes tecnologías para así poder implementar las mejores soluciones.`],
    typeSpeed: 60,
  });
  return (
    <Card id="about-me" className="content">
      <Row>
        <Col md={{ span: 8 }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.2em", fontWeight:"bold" }}>
              Andrea Montaño
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "1em" }}
            >
              Full Stack Web Developer
            </Card.Subtitle>
            <Card.Text className="content-typed" style={{ fontSize: "1em" }}>
              <span ref={contentEffect} />
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={{ span: 4 }}>
          <Card.Img
            className="img-fluid"
            style={{ width: "500px", padding: "1rem" }}
            src="img/mex-cancun.jpg"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default AboutMe;
