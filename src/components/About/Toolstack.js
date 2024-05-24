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
        <a href="https://neovim.io/" className="no-link-color" target="_blank">
          <SiNeovim />
        </a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/tmux/tmux/wiki" className="no-link-color" target="_blank">
          <SiTmux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://ubuntu.com/tutorials/command-line-for-beginners#3-opening-a-terminal" className="no-link-color" target="_blank">
          <IoTerminal />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.vim.org/" className="no-link-color" target="_blank">
          <DiVim />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" className="no-link-color" target="_blank">
          <SiVisualstudiocode />
        </a>
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
