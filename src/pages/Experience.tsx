import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .experience-cards {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .experience-card {
    background-color: #1e1e1e;
    padding: 2rem;
    border-radius: 12px;
    width: 400px;
    height: 250px;
    color: white;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #aaa;
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      role: 'Junior Software Developer',
      company: 'Innova Solutions',
      duration: 'Aug 2022 - July 2023',
      description: '',
    },
    {
      role: 'Intern',
      company: 'Aviate Robotics',
      duration: 'Apr 2020 - Sep 2020',
      description: '',
    }
  ];

  return (
    <ExperienceSection id="experience">
      <h2>Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
            {/* <p>{exp.description}</p> */}
          </div>
        ))}
      </div>
    </ExperienceSection>
  );
};

export default Experience;
