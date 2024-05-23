import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNeovim,
  SiVisualstudiocode,
  SiTmux,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { DiVim } from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTmux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
