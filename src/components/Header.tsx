import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Changed to 100% instead of -webkit-fill-available */
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  width: 97vw;
  nav {
    display: flex;
    gap: 1.5rem;
  }
`;

const NavLink = styled(ScrollLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #e76f51;
  }
`;

const ResumeLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #e76f51;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <NavLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Varshitha Reddy
        </NavLink>
      </Logo>

      <nav>
        <NavLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
        >
          About
        </NavLink>
        <NavLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Skills
        </NavLink>
        <NavLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Contact
        </NavLink>
        <ResumeLink
          href="https://docs.google.com/document/d/1eH05qH0Rb43knkRwQECmIYGV4PdHmGiqNXaDuQRCGuw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </ResumeLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
