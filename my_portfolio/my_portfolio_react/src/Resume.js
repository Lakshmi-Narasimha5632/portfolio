import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-content">
        <h2>My Resume</h2>
        <p>You can download my full resume here:</p>
        <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-download-button">
          Download Resume (PDF)
        </a>
        {/* You can also embed a resume viewer here if you prefer */}
        {/* <iframe src="/path/to/your/resume.pdf" width="100%" height="600px" style={{ border: 'none' }}></iframe> */}
      </div>
    </section>
  );
}

export default Resume;
