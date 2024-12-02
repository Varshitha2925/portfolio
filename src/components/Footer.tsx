import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid #ddd;
`;

export default function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Varshitha Reddy. All Rights Reserved.
    </FooterContainer>
  );
}
