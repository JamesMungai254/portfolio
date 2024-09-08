import React from 'react'
import '../static/services.css';


function Services() {
  return (
    <div className="services-section" id='services'>
  <h2 style={{color:'white'}}>My Skills</h2>
  <div className="cards-container">
    <div className="card">
      <div className="card-icon">&#128187;</div>
      <h3>Software Development</h3>
      <p>I provide custom software solutions tailored to your business needs using the latest technologies.</p>
    </div>
    <div className="card">
      <div className="card-icon">&#128451;</div>
      <h3>Database Management</h3>
      <p>Expert database management services to ensure your data is organized, secure, and accessible.</p>
    </div>
    <div className="card">
      <div className="card-icon">&#9881;</div>
      <h3>Web Development</h3>
      <p>Creating responsive and dynamic websites with Django and React.js frameworks to boost your online presence.</p>
    </div>
    <div className="card">
      <div className="card-icon">&#128200;</div>
      <h3>Data Analytics</h3>
      <p>Providing insights from your data through advanced analytics and machine learning techniques.</p>
    </div>

    <div className="card">
      <div className="card-icon">&#129302;</div>
      <h3>Machine Learning</h3>
      <p>
        Developing machine learning models to help you make data-driven decisions and predictions.
      </p>
    </div>

    <div className="card">
      <div className="card-icon">&#128736;</div>
      <h3>Data Engineering</h3>
      <p>
        Building robust data pipelines to collect, process, and analyze your data efficiently.
      </p>
    </div>
  </div>
</div>

  )
}

export default Services