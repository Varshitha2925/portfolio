import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Button = styled.a`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
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
      title: "Doctor Appointment System",
      description:
        "Built a secure REST API for user management, appointment scheduling, and payment processing using Stripe.",
      image: "/images/doctor-appointment.png",
      liveDemo: "#",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A fully responsive portfolio website showcasing skills, projects, and experience with smooth animations.",
      image: "/images/portfolio.png",
      liveDemo: "#",
      codeLink: "#",
    },
  ];

  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <Card key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
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
