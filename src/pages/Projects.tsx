import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";

const Section = styled.section`
  padding: 2rem;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  width: 100vw;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledVideo = styled.video`
  width: 80vw;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: "480px") {
    grid-template-columns: 1fr;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  height: 30px;
`;
const ProjectDescription = styled.p`
  font-size: 0.875rem;
  color: #555555;
  height: 100px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.875rem;
  margin-top: 0.875rem;
`;

const Button = styled.a`
  padding: 0.875rem 1rem;
  background: #1f2937;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.875rem;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #4b5563;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 95vw;
  width: 750px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  background: #e76f51;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  align-self: flex-end;
`;

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const projects = [
    {
      title: "AI Image Generator",
      description:
        "A full-stack MERN application replicating MidJourney and DALL-E, with AI-driven text-to-image generation.",
      liveDemo: "#",
      codeLink: "#",
    },
    {
      title: "Doctor-Patient Appointment",
      description:
        "Built a secure REST API for user management, appointment scheduling, and payment processing using Stripe.",
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/Doctor-Patient-Appointment",
    },
    {
      title: "Portfolio Website",
      description:
        "A fully responsive portfolio website showcasing skills, projects, and experience with smooth animations.",
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/portfolio",
    },
    {
      title: "Event Booking Platform",
      description:
        "Built a secure REST API for user management, book event, organize events,send a remainder email for the event using nodemail",
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/Event-Booking-Platform-WEB",
    },
  ];

  return (
    <Section id="projects">
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
            <iframe
              src="https://drive.google.com/file/d/1CSMYqbfwMD_OYDu_Vw_J3LsbS1kaxZ0j/preview"
              width="700"
              height="420"
              allow="autoplay"
              style={{ border: "none", borderRadius: "12px", maxWidth: "700px" }}
              title="Project Demo"
            ></iframe>
          </ModalContent>
        </ModalOverlay>
      )}
      <Heading>Projects</Heading>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <Card key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ButtonContainer>
              <Button
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </Button>
              <Button as="button" onClick={handleOpenModal}>
                View Demo
              </Button>
            </ButtonContainer>
          </Card>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
