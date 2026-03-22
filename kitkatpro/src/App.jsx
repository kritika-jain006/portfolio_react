import React, { useState, useEffect } from 'react'; 
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { HashRouter } from "react-router-dom";

function App() {
  

  return (
    <div>
      <HashRouter>
      <Navbar />
      
      <section id="home"><Portfolio /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      </HashRouter>
    </div>
  );
}


export default App;
