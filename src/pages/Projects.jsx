import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import project from "../assets/projects/project.png";
import Mang from "../assets/projects/mang.png";

import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="e-commerce Cosmetic Website"
              description="Cosmetic ecommerce Website building with React Js and Laravel "
              ghLink="https://github.com/Abdelalib/Ecomerce-React-Laravel.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mang}
              isBlog={false}
              title="Digency"
              description="This online Users Management App Responsive and Building With React Js And Laravel Also I use Rest Api For retrive Data From Th Database in Mysql .The user can Add ,Edit ,Drop and Read the information and They also can View the chart of the users Added fo each Week."
              ghLink="https://github.com/Abdelalib/stage-project-frontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Kids Game"
              description=" Simple Math Game For The Kids that building with HTML_CSS and Javascript "
              ghLink="https://github.com/Abdelalib/Ecommerce-product-page-main.git"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects