import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Raihan </span>
            from <span className="purple"> Salt Lake City, Utah, USA</span>
            <br />
            I am currently pursuing my doctorate at the University of Uttah
            <br />
            I have completed MSc in Computer Science from University of Utah.
            <br />
            <br />
            Apart from coding and reading research papers, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Fantasy Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things to make a difference in <b className="purple">Cyber Security!</b>"{" "}
          </p>
          <footer className="blockquote-footer">Raihan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
