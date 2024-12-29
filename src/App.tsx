import React from "react";
import styled from "styled-components";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const Section = styled.section`
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  border:2px solid red;
  padding:0;
  margin:0;
`;

const App: React.FC = () => {
  return (
    <div className="body">
      <Header />
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
    </div>
  );
};

export default App;
