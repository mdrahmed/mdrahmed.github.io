import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { useReward } from 'react-rewards';


function Research() {
  return (
    <Container fluid className="project-section" id="about">
      {/* Conference papers */}
      <Container>
        <h1 className="project-heading">
          <span className="purple"> Research </span> & Publications
        </h1>
        <Row>
          <Col className="research-title">
            <h2>
              <span className="purple">Conference </span>Papers
            </h2>
            <Row className="research-card">
              <Col className="research-card-view">
                <strong>
                  <span className="purple">
                    <a href="https://www.utah.edu/" target="_blank" class="purple-link">
                      ICSTRACKER: Backtracking Intrusions in Modern Industrial Internet of Things
                    </a>
                  </span>
                </strong>
                <br />
                <a href="https://mdrahmed.github.io/" target="_blank" class="purple-link">
                  Md Raihan Ahmed
                </a>,
                Jainta Paul, Levi Li , Luis Garcia, Mu Zhang
                <br />
                ACM Conference on Computer and Communications Security
                <br />
                Salt Lake City, Utah, 2024
              </Col>
            </Row>
            <Row className="research-card">
              <Col className="research-card-view">
                <strong>
                  <span className="purple">
                    <a href="https://www.utah.edu/" target="_blank" class="purple-link">
                      ICSTRACKER: Backtracking Intrusions in Modern Industrial Internet of Things
                    </a>
                  </span>
                </strong>
                <br />
                <a href="https://mdrahmed.github.io/" target="_blank" class="purple-link">
                  Md Raihan Ahmed
                </a>,
                Jainta Paul, Levi Li , Luis Garcia, Mu Zhang
                <br />
                ACM Conference on Computer and Communications Security
                <br />
                Salt Lake City, Utah, 2024
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >

      {/* Journal papers */}
      <Container>
        <Row>
          <Col className="research-title">
            <h2>
              <span className="purple">Journal </span>Papers
            </h2>
            <Row className="research-card">
              <Col className="research-card-view">
                <strong>
                  <span className="purple">
                    <a href="https://www.utah.edu/" target="_blank" class="purple-link">
                      ICSTRACKER: Backtracking Intrusions in Modern Industrial Internet of Things
                    </a>
                  </span>
                </strong>
                <br />
                <a href="https://mdrahmed.github.io/" target="_blank" class="purple-link">
                  Md Raihan Ahmed
                </a>,
                Jainta Paul, Levi Li , Luis Garcia, Mu Zhang
                <br />
                ACM Conference on Computer and Communications Security
                <br />
                Salt Lake City, Utah, 2024
              </Col>
            </Row>
            <Row className="research-card">
              <Col className="research-card-view">
                <strong>
                  <span className="purple">
                    <a href="https://www.utah.edu/" target="_blank" class="purple-link">
                      ICSTRACKER: Backtracking Intrusions in Modern Industrial Internet of Things
                    </a>
                  </span>
                </strong>
                <br />
                <a href="https://mdrahmed.github.io/" target="_blank" class="purple-link">
                  Md Raihan Ahmed
                </a>,
                Jainta Paul, Levi Li , Luis Garcia, Mu Zhang
                <br />
                ACM Conference on Computer and Communications Security
                <br />
                Salt Lake City, Utah, 2024
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </Container >
  );
}

export default Research;
