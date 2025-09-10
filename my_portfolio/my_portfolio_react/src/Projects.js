import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One. It involved technologies like React, Node.js, and MongoDB.',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two. This project focused on Python and data analysis.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'A brief description of Project Three. This project focused on React Native and mobile app development.',
        link: 'https://github.com/yourusername/project-three',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
