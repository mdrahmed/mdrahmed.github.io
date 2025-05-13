import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import suicide from "../../Assets/Projects/suicide.png";

import icstracker from "../../Assets/projects_site/icstracker.png";
import games from "../../Assets/projects_site/games.png";
import xpdf from "../../Assets/projects_site/xpdf.png";
import RollBack from "../../Assets/projects_site/rollback.jpeg";
import fake_news from "../../Assets/projects_site/fake_news.png";
import whatsapp from "../../Assets/projects_site/whatsapp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              // img like this can be created with virtual screen, check here: https://webcoursesbangkok.com/virtual-screen/
              // or, use this template: https://mediamodifier.com/mockup/closeup-macbook-laptop-screen-mockup-generator/1175
              imgPath={fake_news}
              // isBlog={false}
              title="Fake News Prediction"
              description="In this fake news detection project, I trained and tested four machine learning models through their pace: logistic regression, decision trees, gradient boosting and random forest classifier. The logistics stood performed well. Its performs better for binary data classification. Decision tree and random forest of the models performed well too. However, logistic regression excluded those 2 with better accuracy and fast training. Finally, all three models were able to predict news whether its real or fake based on content."
              ghLink="https://github.com/mdrahmed/Fake_news_prediction"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // img like this can be created with virtual screen, check here: https://webcoursesbangkok.com/virtual-screen/
              // or, use this template: https://mediamodifier.com/mockup/closeup-macbook-laptop-screen-mockup-generator/1175
              imgPath={whatsapp}
              // isBlog={false}
              title="Whats App chat Analysis"
              description=""
              ghLink="https://github.com/mdrahmed/whatsapp_chat_analysis"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              // img like this can be created with virtual screen, check here: https://webcoursesbangkok.com/virtual-screen/
              // or, use this template: https://mediamodifier.com/mockup/closeup-macbook-laptop-screen-mockup-generator/1175
              imgPath={icstracker}
              // isBlog={false}
              title="ICSTracker (Ph.D. 1st Proj)"
              description="Advanced Persistent Threat (APT) attacks are increasingly targeting modern factory floors, necessitating audit logging-based provenance analysis for safe recovery. To help solve this issue, I implemented ICSTracker, a physical process-aware, cross-iteration, and cross-domain approach to backtracking intrusions in Industrial Control Systems (ICS), using the LLVM compiler set, C++, and Python. ICSTracker automatically recovers the physical semantics of controller routines, reconstructs data dependencies, and associates controller operations with OS-level events, significantly outperforming previous techniques."
              ghLink="https://github.com/icstracker/icstracker"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="Video Game Exploration"
              description="We explored the nascent medium of video games. Noting the lack of comprehensive industry-wide sales visualizations for video games, I aim to fill this niche by creating interactive visualizations of video game sales data over the years. This project will feature a stacked bar chart to display annual sales across different platforms, with user-friendly options to delve into specific categories like rating and genre. Additionally, there is waffle charts to represent the percentage of sales, providing detailed breakdowns when users interact with specific sections."
              ghLink="https://github.com/mdrahmed/dataVisProject"
              demoLink="https://mdrahmed.github.io/dataVisProject/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xpdf}
              isBlog={false}
              title="Fuzzing XPDF‑4.05"
              description="This project focused on fuzzing XPDF using AFL++ to uncover software flaws and ensure security. After configuring xpdf-4.05 with AFL's Clang wrappers, afl-clang-fast and afl-clang-fast++, I embarked on a comprehensive fuzzing campaign to thoroughly test all components of the software. Then I embarked on the journey of subjecting xpdf to a barrage of mutated inputs in search of elusive vulnerabilities. While initial tests of XPDF version 4.05 showed no significant issues, further investigation revealed memory leakage problems compared to version 4.04."
              ghLink="https://github.com/mdrahmed/afl--fuzzing101"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RollBack}
              isBlog={false}
              title="Replay Guardian"
              description="The Replay Guardian project developed a prototype to exploit keyless entry systems in vehicles by recording rolling codes and executing the RollBack attack. This attack bypasses the need for continuous jamming, capturing signals once and replaying them at any future time, highlighting a significant vulnerability in contemporary RKE systems. The project aimed to understand key fob learning processes, analyze rolling code vulnerabilities, and propose countermeasures against the RollBack attack."
              ghLink="https://github.com/mdrahmed/cps-course-6963/tree/main/project-Rolljam_attack"
              demoLink="https://i.blackhat.com/USA-22/Thursday/US-22-Csikor-RollBack-A-New-Time-Agnostic-Replay-Attack.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cancer Risk Prediction"
              description="This project developed a machine learning-based system in the form of an Android app to predict the risk levels of cervical and ovarian cancer associated with stress. Various models, including Logistic Regression and Random Forest, were used to analyze significant factors of cervical and ovarian cancer. The resulting algorithm, integrated into the Android app, aims to predict cancer risks and alleviate mental stress for women, particularly in low-income countries like Bangladesh."
              ghLink="https://github.com/mdrahmed/AndroidStudio-projects/tree/main/Deadly-Cancer-Prediction"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
