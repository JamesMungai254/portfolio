import React from 'react';
import '../static/education.css'; 

function Education() {
  return (
    <section className="education-section" id='education'>
      <h2 className="education-title">Education</h2>
      <p className="education-summary">
        I am currently pursuing a B.Sc. in Data Science and Analytics and AWS Cloud Practitioner Certification at AWS re/start. 
        I have completed Associate Data Engineering at Datacamp. 
        I am also currently interested in cloud computing and how I can integrate it with my current skills.
      </p>
      <ul className="education-list">
        <li><strong>B.Sc. Data Science and Analytics</strong></li>
        <li><strong>Software Engineering</strong> - PLP Academy</li>
        <li><strong>AWS Cloud Practitioning </strong> (in progress) - AWS re/start</li>
      </ul>
      <a href="https://docs.google.com/document/d/16BatDhKQYA33yQnkHp-SHfhEEtCluLCd/edit?usp=sharing&ouid=104770994746378464969&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="cv-link">
        Download my CV
      </a>
    </section>
  );
}

export default Education;
