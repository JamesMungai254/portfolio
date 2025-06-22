import React from 'react'
import '../static/services.css';


function Projects() {
  return (
    <div className="services-section" id='project'>
  <h2 style={{color:'white'}}>Projects</h2>
  <div className="cards-container">
    <div className="card">
      <div className="card-icon">&#128187;</div>
      <h3>Software Development</h3>
      <p> <a href="https://jamesmungai254.github.io/ReactApp2/" style={{textDecoration:'none'}}>This is a project I was making for friend startup business</a></p>
    </div>
    <div className="card">
      <div className="card-icon">&#128451;</div>
      <h3>Database Management</h3>
      <p><a href="https://medium.com/@mungaijames6303/bigquery-unlocking-the-power-of-big-data-c3e8d15c04ed" style={{textDecoration:'none'}}> Expert database management services to ensure your data is organized, secure, and accessible.</a></p>
    </div>
    <div className="card">
      <div className="card-icon">&#9881;</div>
      <h3>AWS BLOG</h3>
      <p><a href="https://medium.com/@mungaijames6303/managing-ec2-instances-with-aws-systems-manager-a-hands-on-guide-1226bea267ef" style={{textDecoration:'none'}}> Managing EC2 Instances with AWS Systems Manager — A Hands-On Guide.run remote commands on your EC2 instance using Systems Manager.</a></p>
    </div>
    <div className="card">
      <div className="card-icon">&#128200;</div>
      <h3>Data Analytics</h3>
      <p><a href="https://github.com/JamesMungai254/Chicago-Crime-Data-Analysis.git" style={{textDecoration:'none'}}>Providing insights from chicago crime dataset through advanced analytics and machine learning techniques.</a></p>
    </div>

    <div className="card">
      <div className="card-icon">&#129302;</div>
      <h3>Machine Learning</h3>
      <p>
       <a href="https://maizeleafdiseaseprediction.streamlit.app/" style={{textDecoration:'none'}}>Developed my first deep learning model for Leaf Maize disease detection.</a>
      </p>
    </div>

    <div className="card">
      <div className="card-icon">&#128736;</div>
      <h3>Data Engineering( In progress)</h3>
      <p>
        Am currently building robust data pipeline to collect, process, and analyze data efficiently.
      </p>
    </div>
  </div>
</div>

  )
}

export default Projects