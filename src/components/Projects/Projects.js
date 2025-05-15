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
import dog_cat from "../../Assets/projects_site/dog_cat.jpg";


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
              description="In this fake news detection project, I trained and tested four machine learning models through their pace: logistic regression, decision trees, gradient boosting and random forest classifier. The  gradient boosting performed well with prediction accuracy of 0.999000499750125. The other models like decision tree, logistics regression and random forest has accuracy 0.9985007496251874, 0.995750531183602 and 0.9985007496251874 respectively. Gradient boosting performed well because it is trained sequentially, with each new tree it corrects the errors of the previous ones. This allowed to capture complex patterns in the data more effectively than the other standalone models. Random forest and decision tree performed almost the same when trained with reduced set of layers."
              ghLink="https://github.com/mdrahmed/Fake_news_prediction"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // img like this can be created with virtual screen, check here: https://webcoursesbangkok.com/virtual-screen/
              // or, use this template: https://mediamodifier.com/mockup/closeup-macbook-laptop-screen-mockup-generator/1175
              imgPath={dog_cat}
              // isBlog={false}
              title="Dog vs Cat Image Classification"
              description="In this project, I trained convolutional neural network(CNN) model to predict images of dog and cat. At first, I tried to train the CNN model with batch size 32 without rescaling the images. But it was lot of overfitting. So, I rescaled the images and I got better and filtered it with 64 and 128 batch size. I compiled it with binary_crossentropy for the loss function. Then I trained it with 10 epochs at first, but it was taking a long time. So, I reduced the epoch size to 3 and got accuracy from 70% to 80%. There was still a little bit of overfitting, but the margin of error was reducing over time with the cross-entropy. At last, it was able to accurately predict real-time images downloaded from google."
              ghLink="https://github.com/mdrahmed/Dog_cat_image_classification/tree/main"
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

          <Col md={4} className="project-card">
            <ProjectCard
              // img like this can be created with virtual screen, check here: https://webcoursesbangkok.com/virtual-screen/
              // or, use this template: https://mediamodifier.com/mockup/closeup-macbook-laptop-screen-mockup-generator/1175
              imgPath={whatsapp}
              // isBlog={false}
              title="Whats App chat Analysis"
              description="In this project, I looked at WhatsApp real-time chat data and showed how users interact in a group chat. I used a group chat where users talked about playing soccer. I went through the exported chat logs and found important correlations like how often messages regarding the game were sent and when people were most active, and how much each person took part. I used Python tools like Pandas and Matplotlib to make graphs showing these trends. The graphs showed how chat activity changed over the months and hours. Looking at each month, I saw that messaging hit high points mostly during 4-6pm. These findings can help us understand things like who leads the conversations, how people react, and how group activity changes with the seasons."
              ghLink="https://github.com/mdrahmed/whatsapp_chat_analysis"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
