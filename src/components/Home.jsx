import React from 'react';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import './home.css'; // CSS dosyanızı buraya import edin

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="welcome-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a showcase of my work and skills.</p>
        <a href="#projects" className="btn-primary">Explore My Work</a>
      </div>
      
      <Project/>
      <Skill/>
      <About />
      <Contact/>
    </section>
  );
};

export default Home;
