import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
 
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ExperienceContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Description = styled.ul`
  margin: 0;
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  list-style: disc;
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Innova Solutions",
      duration: "August 2022 – July 2023",
      responsibilities: [
        "Led the development of a client data management application, improving decision-making speed by 30%.",
        "Designed responsive front-end interfaces using Angular and TypeScript.",
        "Implemented efficient backend services with Node.js and MongoDB, enhancing data retrieval by 40%.",
      ],
    },
    {
      title: "STEM Education Intern",
      company: "Aviate Robotics",
      duration: "April 2020 – September 2020",
      responsibilities: [
        "Created a 6-month STEM curriculum impacting over 100 students.",
        "Conducted 10+ workshops on programming basics using SCRATCH software.",
        "Aligned educational modules with STEM standards to ensure consistency.",
      ],
    },
  ];

  return (
    <Section id="experience">
      <Heading>Experience</Heading>
      <ExperienceContainer>
        {experiences.map((experience, index) => (
          <Card key={index}>
            <JobTitle>{experience.title}</JobTitle>
            <Company>{experience.company}</Company>
            <p>{experience.duration}</p>
            <Description>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </Description>
          </Card>
        ))}
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
