import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  width: 100vw;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0;
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
  width: 100%;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a202c;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
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

const TimelineContainer = styled.div`
  position: relative;
  overflow-x: auto;
  padding: 2rem 0;
  width: 100%;

  /* Horizontal timeline line */
  &::before {
    content: '';
    position: absolute;
    top: 1.5rem;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #e76f51 0%, #f4a261 100%);
    
    @media (max-width: 768px) {
      top: 1.2rem;
    }
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e76f51;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d55e3e;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  gap: 2rem;
  min-width: max-content;
  padding: 0 2rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    min-width: auto;
    padding: 0 1rem;
  }

  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

const ExperienceCard = styled(motion.div)`
  position: relative;
  min-width: 300px;
  max-width: 300px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    min-width: auto;
    max-width: 100%;
  }

  @media (min-width: 1400px) {
    min-width: 350px;
    max-width: 350px;
  }
`;

const CardContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 4px solid #e76f51;
  margin-top: 2rem;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 1.2rem;
    min-height: auto;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  background: #e76f51;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #e76f51;
  top: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin: 0 auto 1rem;
    display: block;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Company = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: #e76f51;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Duration = styled.p`
  font-size: 0.85rem;
  color: #718096;
  font-weight: 500;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ScrollHint = styled.p`
  text-align: center;
  color: #718096;
  font-size: 0.9rem;
  margin-top: 1rem;
  
  @media (min-width: 769px) {
    display: block;
  }
  
  @media (max-width: 768px) {
    display: none;
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
  opacity: 0.1;

  @media (max-width: 1200px) {
    width: ${props => props.size * 0.8}px;
    height: ${props => props.size * 0.8}px;
  }

  @media (max-width: 992px) {
    width: ${props => props.size * 0.6}px;
    height: ${props => props.size * 0.6}px;
  }
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Mobile Application Developer',
      company: 'Fipet',
      duration: 'May 2025 - Aug 2025'
    },
    {
      role: 'Junior Software Developer',
      company: 'Innova Solutions',
      duration: 'Aug 2022 - July 2023'
    },
    {
      role: 'Software Engineer',
      company: 'Aviate Robotics',
      duration: 'May 2021 - July 2022'
    },
    {
      role: 'Software Engineering Intern',
      company: 'Aviate Robotics',
      duration: 'Apr 2020 - Sep 2020'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ExperienceSection id="experience">
      <FloatingElements>
        <FloatingCircle
          size={80}
          top="15%"
          left="8%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <FloatingCircle
          size={60}
          top="75%"
          left="90%"
          color="linear-gradient(135deg, #f4a261 0%, #e9c46a 100%)"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <FloatingCircle
          size={100}
          top="40%"
          left="85%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </FloatingElements>

      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </SectionTitle>

        <TimelineContainer>
          <ExperienceContainer>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineDot />
                <CardContent>
                  <JobTitle>{exp.role}</JobTitle>
                  <Company>{exp.company}</Company>
                  <Duration>{exp.duration}</Duration>
                </CardContent>
              </ExperienceCard>
            ))}
          </ExperienceContainer>
        </TimelineContainer>
        
        <ScrollHint>← Scroll horizontally to see all experiences →</ScrollHint>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
