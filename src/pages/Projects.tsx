import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";

const Section = styled.section`
  padding: 2rem;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
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

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Image Generator",
      description:
        "A full-stack MERN application replicating MidJourney and DALL-E, with AI-driven text-to-image generation.",
      image: "/images/ai-generator.png",
      liveDemo: "#",
      codeLink: "#",
    },
    {
      title: "Doctor-Patient Appointment",
      description:
        "Built a secure REST API for user management, appointment scheduling, and payment processing using Stripe.",
      image: "/images/doctor-appointment.png",
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/Doctor-Patient-Appointment",
    },
    {
      title: "Portfolio Website",
      description:
        "A fully responsive portfolio website showcasing skills, projects, and experience with smooth animations.",
      image: "/images/portfolio.png",
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/portfolio",
    },
    {
      title: "Event Booking Platform",
      description:
        "Built a secure REST API for user management, book event, organize events,send a remainder email for the event using nodemail",
      image: "/images/doctor-appointment.png",
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/Event-Booking-Platform-WEB",
    }
  ];

  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <Card key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription >{project.description}</ProjectDescription>
            <ButtonContainer>
              <Button href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Button>
              <Button href={project.codeLink} target="_blank" rel="noopener noreferrer">
                View Code
              </Button>
            </ButtonContainer>
          </Card>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
