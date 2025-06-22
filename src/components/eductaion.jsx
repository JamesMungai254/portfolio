import React from 'react';
import '../static/education.css'; 

function Education() {
  return (
    <section className="education-section" id='education'>
      <h2 className="education-title">Education</h2>
      <p className="education-summary">
        I am currently pursuing a B.Sc. in Data Science and Analytics and a Software Engineering course at PLP Academy. 
        I have completed Predictive Analysis at Great Learning and Feature Engineering, as well as Basic and Advanced SQL at Kaggle. 
        I am also currently engaged in Geospatial Data Science on Kaggle.
      </p>
      <ul className="education-list">
        <li><strong>B.Sc. Data Science and Analytics</strong></li>
        <li><strong>Software Engineering</strong> - PLP Academy</li>
        <li><strong>AWS Cloud Practitioning </strong> (in progress) - AWS re/start</li>
      </ul>
      <a href="https://docs.google.com/document/d/1ZsfZ3FbInb9holWWWfaY60gBaR05a2MU/edit?usp=sharing&ouid=116819448591249776819&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="cv-link">
        Download my CV
      </a>
    </section>
  );
}

export default Education;
