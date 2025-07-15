import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactSection = styled.section`
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
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #1a202c;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #4a5568;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContactInfo = styled(motion.div)`
  text-align: center;
`;

const ContactDetail = styled.div`
  margin-bottom: 1.5rem;
`;

const DetailValue = styled.a`
  font-size: 1.1rem;
  color: #1a202c;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;

  &:hover {
    color: #e76f51;
  }

  svg {
    font-size: 1rem;
    color: #e76f51;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SocialLink = styled(motion.a)`
  width: 60px;
  height: 60px;
  border: 1px solid rgba(231, 111, 81, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #e76f51;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #e76f51;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(231, 111, 81, 0.2);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have a project in mind? I'd love to hear from you.
        </Subtitle>

        <ContactContainer>
          <ContactInfo
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactDetail>
              <DetailValue href="mailto:varshitha.2925@gmail.com">
                <FaEnvelope />
                varshitha.2925@gmail.com
              </DetailValue>
            </ContactDetail>

            <ContactDetail>
              <DetailValue as="span">
                <FaMapMarkerAlt />
                Overland Park, Kansas
              </DetailValue>
            </ContactDetail>

            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/varshitha-reddy-756494185/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://github.com/Varshitha2925"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
