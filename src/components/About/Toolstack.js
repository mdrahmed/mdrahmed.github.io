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
  SiNixos,
  SiMetasploit,
  SiBurpsuite,
  SiWireshark,
  SiGooglecolab
} from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { DiVim } from "react-icons/di";
import { GrDocker } from "react-icons/gr";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://colab.research.google.com/" className="no-link-color" target="_blank">
          <SiGooglecolab />
        </a>
      </Col>
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
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.docker.com/" className="no-link-color" target="_blank">
          <GrDocker />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://slack.com/" className="no-link-color" target="_blank">
          <SiSlack />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nixos.org/" className="no-link-color" target="_blank">
          <SiNixos />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.metasploit.com/" className="no-link-color" target="_blank">
          <SiMetasploit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://portswigger.net/burp" className="no-link-color" target="_blank">
          <SiBurpsuite />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.wireshark.org/" className="no-link-color" target="_blank">
          <SiWireshark />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://ubuntu.com//" className="no-link-color" target="_blank">
          <FaUbuntu />
        </a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
