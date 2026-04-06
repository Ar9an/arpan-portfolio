import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import legalEase from "../../Assets/Projects/legalEase.png";
import movieRecommender from "../../Assets/Projects/movieRecommender.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Chatify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat App"
              description="A real-time chat application built using React.js and Firebase with messaging and media sharing features."
              ghLink="https://github.com/Ar9an/Chat_bot.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* Movie Recommender */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieRecommender}
              isBlog={false}
              title="Movie Recommender System"
              description="A movie recommender system built with Python and scikit-learn using collaborative filtering."
              ghLink="https://github.com/Ar9an/movie-recommender.git"
              demoLink="https://movie-recommender-2-swv4.onrender.com"
            />
          </Col>

          {/* Legal Ease */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legalEase}
              isBlog={false}
              title="Legal Ease"
              description="A legal document management system built with React.js and Node.js for secure document handling."
              ghLink="https://github.com/Ar9an/legal-ease.git"
              demoLink="https://legal-ease-by-arpann.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;