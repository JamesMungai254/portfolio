import React from 'react';
import '../static/education.css'; // Make sure to create and link this CSS file

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
        <li><strong>Predictive Analysis</strong> - Great Learning</li>
        <li><strong>Feature Engineering, Basic and Advanced SQL</strong> - Kaggle</li>
        <li><strong>Geospatial Data Science</strong> (in progress) - Kaggle</li>
      </ul>
      <a href="path_to_your_cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
        Download my CV
      </a>
    </section>
  );
}

export default Education;
