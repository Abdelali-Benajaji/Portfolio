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
              title="COSMITIK"
              description="cosmetic e-commerce website using the dynamic capabilities of React.js and the robust backend functionalities of Laravel. This venture aims to create an engaging online shopping platform tailored for cosmetics, offering a seamless and visually appealing experience to our users. Through the fusion of these technologies, we aspire to craft a compelling and user-centric interface, bolstered by a secure and scalable backend, to provide customers with an outstanding shopping journey for their beauty and cosmetic needs"
              ghLink="https://github.com/Abdelali-Benajaji/Ecomerce-React-Laravel.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mang}
              isBlog={false}
              title="DIGENCY"
              description="We are dedicated to creating a responsive Users Management App, meticulously crafted using React.js and Laravel, with data retrieval powered by a REST API connecting to a MySQL database. Our application will provide users with the ability to seamlessly Add, Edit, Delete, and Retrieve user information, along with an insightful chart feature for tracking weekly user additions. Our commitment to professionalism and expertise in modern web development ensures a user-friendly experience that surpasses expectations."
              ghLink="https://github.com/Abdelali-Benajaji/stage-project-frontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="MATH KID"
              description=" an engaging math game specifically tailored for children. We'll be using the foundational web technologies of HTML, CSS, and JavaScript to build this interactive educational game. Our aim is to make learning math fun and accessible for kids, offering a playful yet educational experience. Through the combination of these web technologies, we plan to create an intuitive and visually appealing game that helps children enhance their math skills in an enjoyable and interactive way "
              ghLink="https://github.com/Abdelali-Benajaji/Ecommerce-product-page-main.git"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects