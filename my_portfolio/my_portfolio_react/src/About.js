import React from 'react';
// Removed GitHubCalendar import
// Removed eachDayOfInterval import
import { FaReact, FaJs, FaPython, FaNodeJs, FaGit, FaJava, FaWindows, FaGithub, FaFigma, FaCode } from 'react-icons/fa';
import { SiTypescript, SiVercel, SiCoursera } from 'react-icons/si';
import './About.css';

function About() {
  const skills = [
    { id: 1, name: 'React', icon: <FaReact /> },
    { id: 2, name: 'JavaScript', icon: <FaJs /> },
    { id: 3, name: 'TypeScript', icon: <SiTypescript /> },
    { id: 4, name: 'Python', icon: <FaPython /> },
    { id: 5, name: 'Node.js', icon: <FaNodeJs /> },
    { id: 6, name: 'Git', icon: <FaGit /> },
    { id: 7, name: 'Java', icon: <FaJava /> },
  ];

  const tools = [
    { id: 1, name: 'Windows', icon: <FaWindows /> },
    { id: 2, name: 'VS Code', icon: <FaCode /> },
    { id: 3, name: 'GitHub', icon: <FaGithub /> },
    { id: 4, name: 'Vercel', icon: <SiVercel /> },
    { id: 5, name: 'Figma', icon: <FaFigma /> },
    { id: 6, name: 'Coursera', icon: <SiCoursera /> },
  ];

  const generateContributionGrid = () => {
    const contributions = [];
    const daysInYear = 365;
    for (let i = 0; i < daysInYear; i++) {
      const randomContributions = Math.floor(Math.random() * 5); // 0-4 contributions
      contributions.push(randomContributions);
    }
    return contributions;
  };

  const contributionData = generateContributionGrid();

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate developer with a strong interest in building engaging and user-friendly web applications. 
          I have experience in front-end technologies like React, HTML, CSS, and JavaScript, and I'm always eager to learn new things and take on new challenges.
        </p>
        <p>
          In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends.
          I believe in creating clean, efficient, and scalable code that provides a great user experience.
        </p>
        <div className="education-section-inline">
          <h3 className="education-journey-title">Educational Journey</h3>
          <div className="education-grid">
            {[{
      id: 1,
      institution: 'NBKR Institute of Science and Technology',
      years: 'Aug 2022 - May 2026',
      grade: '8.01 CGPA',
      description: [
        'Pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science at NBKR Institute of Science and Technology (NBKRIST), Nellore, India. Currently in the final year, gaining expertise in AI and Data Science through coursework.',
      ],
    },
    {
      id: 2,
      institution: 'Viswasai junior college, Nellore',
      years: 'June 2020 - May 2022',
      grade: '83.1%',
      description: [
        'Completed Intermediate in MPC at Viswasai Junior College, Nellore, India. Excelled in Mathematics, Physics, and Chemistry, building a strong foundation for engineering studies.',
      ],
    },
    {
      id: 3,
      institution: 'A,P,R,SCHOOL,CMC,Nellore',
      years: 'Aug 2019 - May 2020',
      grade: '97.66%',
      description: [
        'Completed Secondary Education (10th grade) at A,P,R,SCHOOL,CMC,Nellore. Achieved excellent grades with a focus on science and mathematics and actively participated in extracurricular activities.',
      ],
    },
    ].map((edu) => (
              <div key={edu.id} className="education-card-inline">
                <div className="education-card-header">
                  {/* Removed <img> tag */}
                  <div>
                    <h4>{edu.institution}</h4>
                    <p className="education-years">{edu.years}</p>
                  </div>
                </div>
                <p className="education-grade">Grade : <span>{edu.grade}</span></p>
                <ul>
                  {edu.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="about-details">
          <div className="skill-set">
            <h3 className="skillset-title">Professional <span className="highlight">SkillSet</span></h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  {skill.icon} {skill.name}
                </div>
              ))}
            </div>
          </div>
          <div className="tools-used">
            <h3 className="tools-title">Tools I <span className="highlight">Use</span></h3>
            <div className="tools-grid">
              {tools.map((tool) => (
                <div key={tool.id} className="tool-item">
                  {tool.icon} {tool.name}
                </div>
              ))}
            </div>
          </div>
          <div className="days-coded">
            <h3 className="days-coded-title">PROBLEMS PER <span className="highlight">DAY</span></h3>
            <p className="coding-motto">more than 5 problems a day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
