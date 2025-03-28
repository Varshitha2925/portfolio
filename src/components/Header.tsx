import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed; /* Keeps the header at the top */
  top: 0;
  left: 0;
  width: -webkit-fill-available; /* Ensures it fits the viewport width */

  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  nav {
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #e76f51;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
    cursor: pointer

    &:hover {
      color: #e76f51;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Varshitha Reddy</span>
      </div>
      <nav>
        <Link
          className="nav-link"
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Home
        </Link>
        <Link
          className="nav-link"
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
        >
          About
        </Link>
        <Link
          className="nav-link"
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Skills
        </Link>
        <Link
          className="nav-link"
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Projects
        </Link>
        <Link
          className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Contact
        </Link>
        <a href="https://docs.google.com/document/d/1eH05qH0Rb43knkRwQECmIYGV4PdHmGiqNXaDuQRCGuw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
            Resume
          </a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
