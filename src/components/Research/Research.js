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
          <strong className="purple"> Research </strong> & Publications
        </h1>
        <Row>
          <Col className="research-title">
            <h2>
              <span className="purple">Conference </span>Papers
            </h2>
            {/* <Row className="research-card">
              <Col className="research-card-view">
                <Row>
                  <Col md={1}>
                    <strong>May 2024</strong>
                  </Col>
                  <Col>
                  <strong className="purple">
                      <a href="https://www.utah.edu/" target="_blank" class="purple-link">
                        ICSTRACKER: Backtracking Intrusions in Modern Industrial Internet of Things
                      </a>
                  </strong>
                  <br />
                  {/* <a href="https://mdrahmed.github.io/" target="_blank" class="purple-link"> */}
                    {/* Md Raihan Ahmed */}
                  {/* </a>, */}{/*
                  , Jainta Paul, Levi Li , Luis Garcia, Mu Zhang
                  <br />
                  ACM Conference on Computer and Communications Security
                  <br />
                  Salt Lake City, Utah, 2024
                  </Col>
                </Row>
              </Col>
            </Row> */}

            <Row className="research-card">
              <Col className="research-card-view">
                <Row>
                  <Col md={1}>
                    <strong>Oct 2024</strong>
                  </Col>
                  <Col>
                    <strong className="purple">
                        <a href="" target="_blank" class="purple-link">
                        Context-Aware Intrusion Detection in Industrial Control Systems
                        </a>
                    </strong>
                    <br />
                    Md Raihan Ahmed, Mu Zhang
                    <br />
                    CCS-Re‑design Industrial Control Systems with Security (RICSS)
                    {/* <br />
                    7-9 February, 2019 */}
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="research-card">
              <Col className="research-card-view">
                <Row>
                  <Col md={1}>
                    <strong>Feb 2019</strong>
                  </Col>
                  <Col>
                    <strong className="purple">
                        <a href="https://ieeexplore.ieee.org/abstract/document/8679182/" target="_blank" class="purple-link">
                        A Comparative Analysis of Traditional and Modern Data Compression Schemes for Large MultiDimensional Extendible Array
                        </a>
                    </strong>
                    <br />
                    Md. Mushfiqur Rahman , Abdullah Al-Mahmud , Md. Anwar Hossen , Mostafijur Rahman , Md. Raihan Ahmed , Md Fahimuzzman Sohan
                    <br />
                    Electrical, Computer and Communication Engineering (ECCE)
                    {/* <br />
                    7-9 February, 2019 */}
                  </Col>
                </Row>
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
                <Row>
                  <Col md={1}>
                    <strong>Jul 2020</strong>
                  </Col>
                  <Col>
                    <strong className="purple">
                        <a href="https://biointerfaceresearch.com/wp-content/uploads/2020/08/20695837111.84578466.pdf" target="_blank" class="purple-link">
                        Ovarian cancer substantial risk factor analysis by machine learning: a low incoming country perspective
                        </a>
                    </strong>
                    <br />
                    Md Raihan Ahmed, Hasin Rehana, Sayed Asaduzzaman
                    <br />
                    Biointerface Res. Appl. Chem
                    {/* <br />
                    Salt Lake City, Utah, 2024 */}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="research-card">
              <Col className="research-card-view">
                <Row>
                  <Col md={1}>
                    <strong>Apr 2021</strong>
                  </Col>
                  <Col>
                    <strong className="purple">
                        <a href="https://link.springer.com/article/10.1186/s12859-021-04131-6" target="_blank" class="purple-link">
                        {/* Full title: Machine learning to reveal an astute risk predictive framework for Gynecologic Cancer and its impact on women psychology: Bangladeshi perspective  */}
                        Machine learning to reveal an astute risk predictive framework for Gynecologic Cancer and its impact on women psychology..
                        </a>
                    </strong>
                    <br />
                    Sayed Asaduzzaman, Md Raihan Ahmed, Hasin Rehana, Setu Chakraborty, Md Shariful Islam, Touhid Bhuiyan
                    <br />
                    Springer Link
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="research-card">
              <Col className="research-card-view">
                <Row>
                  <Col md={1}>
                    <strong>Jul 2020</strong>
                  </Col>
                  <Col>
                    <strong className="purple">
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S2452014421001916" target="_blank" class="purple-link">
                        A bioinformatics approach for identification of the core ontologies and signature genes of pulmonary disease and associated disease
                        </a>
                    </strong>
                    <br />
                    Hasin Rehana, Md Raihan Ahmed, Rana Chakma, Sayed Asaduzzaman, M Raihan
                    <br />
                    Elsevier
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="research-card">
              <Col className="research-card-view">
                <Row>
                  <Col md={1}>
                    <strong>Dec 2020</strong>
                  </Col>
                  <Col>
                    <strong className="purple">
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S2452014421001916" target="_blank" class="purple-link">
                        Protein interaction network and drug design of stomach cancer and associated disease: a bioinformatics approach
                        </a>
                    </strong>
                    <br />
                    Md Raihan Ahmed, Hasin Rehana, Sayed Asaduzzaman
                    <br />
                    Springer Singapore
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </Container >
  );
}

export default Research;
