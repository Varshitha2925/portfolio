import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import profilePic from "../assets/images/photo.jpeg";

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 6rem 8rem 4rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  
  @media (max-width: 1200px) {
    padding: 5rem 4rem 3rem;
  }

  @media (max-width: 992px) {
    padding: 4rem 3rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 3rem 2rem;
    text-align: center;
    min-height: auto;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1rem;
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

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;
  z-index: 1;
  flex: 1;

  @media (max-width: 1200px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
  line-height: 1.1;
  
  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }

  .highlight {
    background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: #4a5568;

  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media (max-width: 992px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #6c757d;
  margin-bottom: 2rem;
  max-width: 550px;

  @media (max-width: 1200px) {
    font-size: 1.05rem;
    max-width: 480px;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin-top: 0.5rem;
  }
`;

const PrimaryButton = styled(ScrollLink)`
  background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(231, 111, 81, 0.3);
  white-space: nowrap;

  @media (max-width: 992px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 200px;
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 180px;
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(231, 111, 81, 0.4);
  }
`;

const SecondaryButton = styled(ScrollLink)`
  background: transparent;
  color: #e76f51;
  padding: 1rem 2rem;
  border: 2px solid #e76f51;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  white-space: nowrap;

  @media (max-width: 992px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 200px;
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 180px;
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  &:hover {
    background: #e76f51;
    color: white;
    transform: translateY(-2px);
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  flex-shrink: 0;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const HeroImage = styled(motion.img)`
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1200px) {
    width: 350px;
    height: 450px;
  }

  @media (max-width: 992px) {
    width: 320px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 350px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 300px;
    border-radius: 12px;
  }

  @media (max-width: 360px) {
    width: 220px;
    height: 280px;
  }

  &:hover {
    transform: scale(1.02);
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
    display: none; /* Hide floating elements on mobile for better performance */
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

const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <FloatingElements>
        <FloatingCircle
          size={100}
          top="10%"
          left="10%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <FloatingCircle
          size={60}
          top="70%"
          left="85%"
          color="linear-gradient(135deg, #f4a261 0%, #e9c46a 100%)"
          animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <FloatingCircle
          size={80}
          top="30%"
          left="90%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </FloatingElements>

      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="highlight">Varshitha</span>
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Software Engineer & Full-Stack Developer
        </HeroSubtitle>

        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I'm passionate about building scalable, user-focused web applications and integrating cutting-edge AI technologies. 
          Always curious and driven to innovate, I aim to craft meaningful digital experiences that solve real-world problems.
        </HeroDescription>

        <CTAButtons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <PrimaryButton to="projects" smooth={true} duration={500}>
            View My Work
          </PrimaryButton>
          <SecondaryButton to="contact" smooth={true} duration={500}>
            Get In Touch
          </SecondaryButton>
        </CTAButtons>
      </HeroContent>

      <HeroImageContainer>
        <HeroImage
          src={profilePic}
          alt="Varshitha Reddy"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </HeroImageContainer>
    </HeroSection>
  );
};

export default Hero;
