import React, { useEffect } from "react";
import styled from "styled-components";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
// import GitHubCommitChart from "./pages/GitHubCommitChart";
// import GitHubStats from "./pages/GitHubStats";
import GitHubRepoStats from "./pages/GitHubRepoStats";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Section = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  padding:0;
  margin:0;
`;

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="body">
      <Header />
        <Section id="home" data-aos="fade-up">
          <Home />
        </Section>
        {/* <Section id="about">
          <About />
        </Section> */}
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
        <GitHubRepoStats username="Varshitha2925" />
        </Section>
        {/* <Section id="contact">
        <GitHubStats username="Varshitha2925"/>
        </Section> */}
        <Section id="contact">
          <Contact />       
        </Section>
        
        

    </div>
  );
};

export default App;
