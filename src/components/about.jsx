import React from 'react'
import '../static/about.css';

function AboutMe() {
  return (
<div className="about-me-section" id='about'>
  <div className="content">
    <h1>WHOAMI</h1>
    <p>I'm a Data Science student at JKUAT and PlP academy doing Software Engineering.</p>
    <p>
      I've honed my skills in <span className="highlight">Machine Learning</span>,
      <span className="highlight">Data Analytics</span>, <span className="highlight">Computer Vision</span>,
      and increasing my skills in <span className="highlight">Software Engineering</span>.
    </p>
    <p>
      I'm proficient in <span className="highlight">Web Development</span> and have hands-on experience
      with <span className="highlight">Django</span> and <span className="highlight">React.js</span> frameworks.
    </p>
    <p>
      I can deploy ML models using Django and perform data analysis with Google
      <span className="highlight"> BigQuery</span>.
    </p>
    <p>
      I'm always eager to take on new challenges and am looking forward to collaborating with
      new clients.
    </p>
  </div>
</div>

  )
}

export default AboutMe