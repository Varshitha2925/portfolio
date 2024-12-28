import React from "react";
import Header from "./components/Header";
import Home from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

// const Section = styled.section`
//   height: 100vh;
  
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   scroll-snap-align: start;
// `;

const App: React.FC = () => {
  return (
    <div>
      <Header />
      {/* <main> */}
        {/* <Section id="home"> */}
          <Home />
        {/* </Section>
        <Section id="about"> */}
          <About />
        {/* </Section>
        <Section id="skills"> */}
          <Skills />
        {/* </Section>
        <Section id="projects"> */}
          <Projects />
        {/* </Section>
        <Section id="contact"> */}
          <Contact />
        {/* </Section> */}
      {/* </main> */}
    </div>
  );
};

export default App;
