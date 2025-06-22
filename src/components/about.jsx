import React from 'react';
import '../static/about.css';

function AboutMe() {
  return (
    <div className="about-me-section" id="about">
      <div className="content">
        <h1>About Me</h1>
        <p>
          I'm a passionate Data Science student at <span className="highlight">JKUAT</span> and a Software Engineering trainee at <span className="highlight">PLP Academy</span>, dedicated to building scalable, data-driven solutions.
        </p>
        <p>
          My expertise spans <span className="highlight">Machine Learning</span>, <span className="highlight">Data Analytics</span>, and <span className="highlight">Computer Vision</span>, with ongoing development in <span className="highlight">Software Engineering</span> best practices.
        </p>
        <p>
          I have hands-on experience in <span className="highlight">Web Development</span> using frameworks like <span className="highlight">Django</span> and <span className="highlight">React.js</span>, and I enjoy deploying ML models and analyzing data with tools like <span className="highlight">Google BigQuery</span>.
        </p>
        <p>
          I'm currently deepening my cloud expertise as I pursue the <span className="highlight">AWS Certified Cloud Practitioner</span> credential—an exciting step toward becoming a versatile cloud-native developer.
        </p>
        <p>
          I'm always excited to take on new challenges and collaborate with like-minded teams. How can we build something impactful together?
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
