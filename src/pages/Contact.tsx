import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background: #f8f9fa;
  color: #333333;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1f2937;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDetails = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  a {
    color: #1f2937;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    font-size: 2rem;
    color: #1f2937;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      color: #e76f51;
    }
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in Touch</Title>
      <ContactDetails>
        <p>Email me at: <a href="mailto:varshitha.2925@gmail.com">varshitha.2925@gmail.com</a></p>
        <p>Based in Overland Park, Kansas</p>
      </ContactDetails>
      <SocialLinks>
        <a
          href="https://www.linkedin.com/in/varshitha-reddy-756494185/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Varshitha2925"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;
