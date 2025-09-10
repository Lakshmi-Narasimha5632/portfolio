import React from 'react';
import './Certificates.css';

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Full-Stack Web Development Certification',
      issuer: 'Coursera',
      date: 'Issued: March 2023',
      link: 'https://www.coursera.org/verify/your-certificate-id',
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: 'Issued: January 2023',
      link: 'https://aws.amazon.com/certification/verification',
    },
    {
        id: 3,
        title: 'Google Professional Cloud Developer',
        issuer: 'Google Cloud',
        date: 'Issued: May 2022',
        link: 'https://cloud.google.com/certification/verification',
      },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-content">
        <h2>My Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <h3>{cert.title}</h3>
              <h4>{cert.issuer}</h4>
              <p>{cert.date}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
