import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import profilePic from "../assets/images/photo.jpeg"; // Make sure your image path is correct!

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;


 /* Adjusts for header height */
  width: 100%;
  padding: 6rem 8rem;
  position: relative;
  overflow: hidden;
  flex-direction: column-reverse;
  background: #f8f9fa;
  background-attachment: fixed;
  color: #e76f51;

  @media (min-width: 768px) {
    flex-direction: row;
    
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('https://grainy-gradients.vercel.app/noise.svg'); /* Soft texture */
    background-repeat: repeat;
    opacity: 0.15;
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
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #6c757d;
  margin-top: 1rem;
  max-width: 550px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroImage = styled(motion.img)`
  width: 650px;
  height: 500px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 375px;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Varshitha Reddy
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Software Engineer | Full-Stack Developer
        </HeroSubtitle>

        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm passionate about building scalable, user-focused web applications and integrating cutting-edge AI technologies. 
          Always curious and driven to innovate, I aim to craft meaningful digital experiences that solve real-world problems.
        </HeroDescription>
      </HeroContent>

      <HeroImage
        src={profilePic}
        alt="Varshitha Reddy"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </HeroSection>
  );
};

export default Hero;
