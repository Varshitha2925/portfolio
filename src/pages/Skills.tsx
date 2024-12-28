import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 4rem 2rem;

  text-align: center;
  background: #f8f9fa;
  color: #333333;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: "#ffffff";
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: "#1f2937";
`;

const SkillName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: "#333333";
`;

const SkillDescription = styled.p`
  font-size: 0.8rem;
  color: "#555555";
  margin-top: 0.3rem;
  text-align: center;

  @media (max-width: 768px) {
    display: none; /* Hide description for smaller cards on mobile */
  }
`;

const Skills: React.FC = () => {
  const skills = [
    {
      name: "JavaScript",
      description: "Dynamic scripting language.",
      icon: "🟨",
    },
    {
      name: "React",
      description: "Build UI components.",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      description: "Server-side runtime.",
      icon: "🌐",
    },
    {
      name: "MongoDB",
      description: "NoSQL database.",
      icon: "🍃",
    },
    {
      name: "Python",
      description: "Versatile programming.",
      icon: "🐍",
    },
    {
      name: "TypeScript",
      description: "Typed JavaScript.",
      icon: "🔷",
    },
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
