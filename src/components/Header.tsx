import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary}; /* Solid background color */
  color: #fff; /* White text for contrast */
  padding: ${({ theme }) => theme.spacing.sm};
  position: sticky; /* Sticks to the top while scrolling */
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between; /* Align items to the left and right */
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.medium}; /* Add a slight shadow */
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    display: none;
  }
`;

const NavLink = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

const Header: React.FC = () => {
  return (
    <Navbar>
      <Logo>Varshitha Reddy</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Experience</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>
          <a href="https://docs.google.com/document/d/1eH05qH0Rb43knkRwQECmIYGV4PdHmGiqNXaDuQRCGuw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
            Resume
          </a>
        </NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
