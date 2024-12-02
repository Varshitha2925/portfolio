import styled from "styled-components";

const ContactSection = styled.section`
  padding: 4rem 2rem;
`;

const ContactLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <ContactLink href="mailto:varshitha.2925@gmail.com">
        varshitha.2925@gmail.com
      </ContactLink>
    </ContactSection>
  );
}
