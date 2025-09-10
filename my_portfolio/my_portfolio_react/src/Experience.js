import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      years: 'Jan 2022 - Present',
      description: [
        'Developed and maintained web applications using React and Node.js.',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Implemented responsive user interfaces and optimized application performance.',
      ],
    },
    {
      id: 2,
      title: 'Junior Developer',
      company: 'Web Innovators LLC',
      years: 'Jun 2020 - Dec 2021',
      description: [
        'Assisted in the development of client websites using HTML, CSS, and JavaScript.',
        'Participated in code reviews and learned best practices from senior developers.',
        'Troubleshooted and debugged issues in existing applications.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h2>My Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <h3>{exp.title}</h3>
              <h4>{exp.company} | {exp.years}</h4>
              <ul>
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
