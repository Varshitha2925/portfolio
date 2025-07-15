import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  width: 100vw;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
    background-repeat: repeat;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #4a5568;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 1.8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(231, 111, 81, 0.05) 0%, 
      rgba(244, 162, 97, 0.05) 50%,
      rgba(233, 196, 106, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: rgba(231, 111, 81, 0.2);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(231, 111, 81, 0.1);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 20px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const ProjectMeta = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.3rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectType = styled.span`
  font-size: 0.8rem;
  color: #e76f51;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(231, 111, 81, 0.1);
  color: #e76f51;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(231, 111, 81, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Button = styled.a`
  padding: 0.7rem 1.2rem;
  background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
  color: white;
  text-decoration: none;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  flex: 1;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(231, 111, 81, 0.25);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;

const SecondaryButton = styled(Button)`
  background: rgba(45, 55, 72, 0.1);
  color: #2d3748;
  border: 1px solid rgba(45, 55, 72, 0.2);
  
  &:hover {
    background: rgba(45, 55, 72, 0.15);
    box-shadow: 0 8px 20px rgba(45, 55, 72, 0.15);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(12px);
`;

const ModalContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 24px;
  max-width: 95vw;
  width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CloseButton = styled.button`
  background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  align-self: flex-end;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(231, 111, 81, 0.3);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingCircle = styled(motion.div)<{ size: number; top: string; left: string; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: 0.08;
  filter: blur(2px);
`;

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const projects = [
    {
      title: "AI Image Generator",
      type: "Full-Stack Web App",
      icon: "🎨",
      description: "A modern MERN application replicating MidJourney and DALL-E, featuring AI-driven text-to-image generation.",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      liveDemo: "#",
      codeLink: "#",
    },
    {
      title: "Doctor-Patient App",
      type: "Healthcare Platform",
      icon: "🏥",
      description: "Secure appointment scheduling platform with payment processing and user management system.",
      tech: ["REST API", "Stripe", "Authentication", "Express"],
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/Doctor-Patient-Appointment",
    },
    {
      title: "Portfolio Website",
      type: "Personal Brand",
      icon: "💼",
      description: "Responsive portfolio showcasing projects and skills with smooth animations and modern design patterns.",
      tech: ["React", "TypeScript", "Framer Motion", "Styled Components"],
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/portfolio",
    },
    {
      title: "Event Booking Platform",
      type: "Event Management",
      icon: "🎫",
      description: "Comprehensive platform for event organization with automated email notifications and booking management.",
      tech: ["Node.js", "NodeMailer", "MongoDB", "Express"],
      liveDemo: "#",
      codeLink: "https://github.com/Varshitha2925/Event-Booking-Platform-WEB",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section id="projects">
      <FloatingElements>
        <FloatingCircle
          size={100}
          top="15%"
          left="10%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <FloatingCircle
          size={70}
          top="75%"
          left="85%"
          color="linear-gradient(135deg, #f4a261 0%, #e9c46a 100%)"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <FloatingCircle
          size={80}
          top="45%"
          left="88%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </FloatingElements>

      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleCloseModal}>✕ Close</CloseButton>
            <iframe
              src="https://drive.google.com/file/d/1CSMYqbfwMD_OYDu_Vw_J3LsbS1kaxZ0j/preview"
              width="700"
              height="420"
              allow="autoplay"
              style={{ border: "none", borderRadius: "16px", maxWidth: "100%" }}
              title="Project Demo"
            ></iframe>
          </ModalContent>
        </ModalOverlay>
      )}

      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Featured Projects
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A curated collection of my recent work in modern web development
        </SectionSubtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectsContainer>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                variants={cardVariants}
              >
                <ProjectHeader>
                  <ProjectIcon>{project.icon}</ProjectIcon>
                  <ProjectMeta>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectType>{project.type}</ProjectType>
                  </ProjectMeta>
                </ProjectHeader>
                
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                
                <ButtonContainer>
                  <Button
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                  <SecondaryButton as="button" onClick={handleOpenModal}>
                    Live Demo
                  </SecondaryButton>
                </ButtonContainer>
              </ProjectCard>
            ))}
          </ProjectsContainer>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;
