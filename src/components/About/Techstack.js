import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiLlvm,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import {
  TbBrandGolang,
  TbBrandCSharp
} from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://llvm.org/Logo.html" className="no-link-color" target="_blank">
          <SiLlvm />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://cplusplus.com/doc/tutorial/" className="no-link-color" target="_blank">
          <CgCPlusPlus />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" className="no-link-color" target="_blank">
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.javascript.com/" className="no-link-color" target="_blank">
          <DiJavascript1 />
        </a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/en" className="no-link-color" target="_blank">
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://react.dev/" className="no-link-color" target="_blank">
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.android.com/" className="no-link-color" target="_blank">
          <IoLogoAndroid />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.java.com/en/" className="no-link-color" target="_blank">
          <DiJava />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/" className="no-link-color" target="_blank">
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://dotnet.microsoft.com/en-us/apps/aspnet" className="no-link-color" target="_blank">
          <AiOutlineDotNet />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://go.dev/" className="no-link-color" target="_blank">
          <TbBrandGolang />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.php.net/" className="no-link-color" target="_blank">
          <FaPhp />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" className="no-link-color" target="_blank">
          <TbBrandCSharp />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
