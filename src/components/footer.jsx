import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/footer.css'; // Custom CSS for styling
import { EnvelopeFill, Github, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white" >
      <div className="container" >
        <div className="row">
          <div className="col-md-6 footer-text">
            <p>&copy; {new Date().getFullYear()} James Mungai. All rights reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
