import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
const App: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>

  );
}

export default App;