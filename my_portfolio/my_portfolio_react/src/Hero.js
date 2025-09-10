import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>
        <h1 className="hero-name">POTHUGUNTA LAKSHMI NARASIMHA</h1>
        <p className="hero-tagline">A Passionate Web Developer</p>
        <p className="hero-description">
          Building beautiful and functional web applications with a focus on user experience.
        </p>
        <p className="find-me-on">Find me on</p>
        <div className="social-icons">
          <a href="https://github.com/Lakshmi-Narasimha5632" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
          <a href="https://linkedin.com/in/lakshmi-narasimha-pothugunta-938100270" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          <a href="https://instagram.com/lakshmi_narasimha_pothugunta" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
          <a href="https://twitter.com/lakshmi_narasimha_pothugunta" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
