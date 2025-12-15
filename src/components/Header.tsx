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
 
  color:rgb(255, 255, 255);

  background-color: rgba(79, 77, 77, 0.95); // Increased opacity here
  opacity: 1;
  
  width: 97vw;
  nav {
    display: flex;
    gap: 2rem;
    margin-right: 8rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: #6c757d;

  }
  .logo {
    margin-left: 6rem;
    color: #6c757d;}
  
`;

const NavLink = styled(ScrollLink)`
  color:rgb(253, 254, 255);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #e76f51;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  color:rgb(255, 255, 255);;

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
      <Logo className="logo">
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
      </nav>
    </HeaderContainer>
  );
};

export default Header;
