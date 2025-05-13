import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() { 
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I fell in love with <strong className="purple">programming</strong> and learned something whenever possible, I think… 🤷‍♂️.
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
