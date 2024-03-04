import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import sonphan from "../assets/img/sonphan.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={sonphan} 
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Son Phan</h2>
                  <p>I'm Son Phan, double majoring in Computer Science and Data Science at Southern Methodist University. I'm driven to use technology to tackle challenges and contribute to progress. Outside the digital realm, you'll find me lifting weights and enjoying fishing with friends.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
