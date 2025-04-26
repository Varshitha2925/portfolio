import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import profilePic from "../assets/images/photo.jpeg"; // Replace with your actual image path

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: -webkit-fill-available;
  background: #f8f9fa;
  color: #e76f51;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  flex-direction: column-reverse;  // Default for mobile-first
  @media (min-width: 768px) {
    flex-direction: row;
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

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.h3`
  font-size: 1.5rem;
  
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroImage = styled(motion.img)`
  width: 650px;
  height: 500px;
  object-fit: cover;
  border-radius: 15px; /* Rectangular with rounded corners */
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Subtle zoom effect */
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
        <HeroTitle>Hi, I'm Varshitha Reddy</HeroTitle>
        <HeroSubtitle>Software Engineer | Full-Stack Developer</HeroSubtitle>
      </HeroContent>

      <HeroImage
        src={profilePic} // Replace with your image path
        alt="Varshitha Reddy"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
    </HeroSection>
  );
};

export default Hero;
