import React from 'react';
import '../static/contact.css'; // Link to your custom CSS
import { EnvelopeFill, Github, Linkedin } from 'react-bootstrap-icons'; // Importing icons
import ScrollToTopButton from './scrollbutton';

const Contact = () => {
  return (
    <div className="contact-page " id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="col-md-6" style={{color:'black'}}>
          <div className="contact-info" >
            <div className="card" style={{backgroundColor:'black',width:'70vh'}}>
              <div className="card-body" >
                <h5 className="card-title">Reach Me At</h5>
                <p className="card-text" style={{color:'black'}}>
                  <a href="mailto:mungaijames6303@gmail.com" className="contact-link">
                    <EnvelopeFill className="contact-icon" style={{color:'red'}}/> Email
                  </a>
                </p>
                <p className="card-text" style={{color:'black'}}>
                  <a href="https://github.com/JamesMungai254" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <Github className="contact-icon" style={{color:'white'}}/> GitHub
                  </a>
                </p>
                <p className="card-text" style={{color:'blue'}}>
                  <a href="https://www.linkedin.com/in/james-mungai-b6462a2a3" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="contact-icon" style={{color:'blue'}} /> LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
          <ScrollToTopButton />
    </div>
  );
};

export default Contact;
