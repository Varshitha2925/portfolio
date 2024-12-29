import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1.5rem;
  text-align: center;
  background-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  border-top: 1px solid #ddd;
`;

export default function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Varshitha Reddy. All Rights Reserved.
    </FooterContainer>
  );
}
