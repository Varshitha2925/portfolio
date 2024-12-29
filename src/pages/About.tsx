import { motion } from "framer-motion";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
  color: #333333;
  border: 2px solid blue;
  width: -webkit-fill-available;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

export default function About() {
  return (
    <AboutSection id="about">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Title>About Me</Title>
        <Description>
          I am a software engineer with expertise in full-stack development, AI tools, and web performance optimization.
        </Description>
      </motion.div>
    </AboutSection>
  );
}
