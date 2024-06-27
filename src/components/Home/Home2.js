import React from "react";
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
import { MdMarkEmailRead } from "react-icons/md";

function Home2() {
  const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'balloons');

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            
            <p className="home-about-body">
              Hi Everyone, I am <span className="purple"> Raihan </span>
              from <span className="purple"> Salt Lake City, Utah, USA.</span>
              <br />
              I am currently pursuing my doctorate at the&nbsp;
              <span className="purple">
                <a href="https://www.utah.edu/" target="_blank" class="purple-link">University of Utah</a>
              </span> under
              <br/>
              supervision of&nbsp;
              <span className="purple">
                <a href="https://sites.google.com/site/muzhang82/" target="_blank" class="purple-link">Dr. Mu Zhang</a>
               </span>
              <br />
              I have completed <span className="purple">MSc in Computer Science from University of Utah.</span>
              <br />
              {/* <br /> */}
              
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">systems to provide security to ICS & CPS </b> and
                also have a keen interest in {" "}
                <b className="purple">
                  web development.
                </b>
              </i>
              <br />
              <br />
              
              I am fluent in classics like
              <i>
                <b className="purple"> Python, C++, and Javascript. </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing systems library
              with <b className="purple">LLVM</b>, contributing to open-source projects at github and
              <i>
                <b className="purple">
                  {" "}
                  learning modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Node.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Recent<span className="purple"> News! </span>
              </h1>
              <p className="home-about-body">
                <span
                  onMouseEnter={() => confettiReward()}
                  style={{ cursor: 'pointer' }}
                >
                  🎉&nbsp;&nbsp;&nbsp;
                  <span className="purple">[May 2024]</span>&nbsp;&nbsp;
                  Received <strong className="purple">MS in Computer Science</strong> from <span className="purple">University of Utah</span>
                </span>
                {/* <br />
                <span
                  onMouseEnter={() => balloonsReward()}
                  style={{ cursor: 'pointer' }}
                >
                  🎉 [Sept 2024] Got intern 
                </span> */}
                {/* <span id="confettiReward" />
                <span id="balloonsReward" /> */}
              </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:u1374605@utah.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdMarkEmailRead />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mdrahmed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/MRA20014771"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/md-raihan-ahmed-6b0a64253/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://scholar.google.com/citations?user=52OEHWYAAAAJ&hl=en&authuser=1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaGoogleScholar />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
