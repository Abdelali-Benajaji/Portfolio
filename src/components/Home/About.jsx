import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
<Container fluid className="home-about-section" id="about">
  <Container>
    <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="yellow"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
          Hi, my name is <span className="yellow">Abdelali Benajaji</span>, and I'm from 
          <span className="yellow"> Rabat, Morocco.</span>
          <br />
          <br />
          I am an <b className="yellow">experienced Full-Stack Web Developer</b> skilled in building 
          dynamic and scalable web applications using technologies like 
          <b className="yellow"> Next.js, Laravel, Django, and MySQL.</b>
          <br />
          <br />
          I enjoy adapting to new technologies and project requirements to deliver effective solutions. 
          My expertise spans modern frameworks, programming languages such as 
          <b className="yellow"> JavaScript, PHP, Python, and SQL,</b> 
          and creating innovative web products.
          <br />
          <br />
          I am passionate about leveraging my skills to craft seamless 
          <b className="yellow"> web experiences </b> and continuously push the boundaries of 
          <b className="yellow"> modern web technologies.</b>
          <br />
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img src={LaptopImg} className="img-fluid" alt="Abdelali Benajaji" />
        </Tilt>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/Abdelali-Benajaji"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/AjajiBen"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
              aria-label="twitter"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/abdelali-benajaji/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/abdelali_benajaji/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              aria-label="instagram"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
</Container>

      );
    
}

export default About
