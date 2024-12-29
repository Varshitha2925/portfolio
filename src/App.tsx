import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App: React.FC = () => {
  return (
    <div >
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        
    </div>
  );
};

export default App;
