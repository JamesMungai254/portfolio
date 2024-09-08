import React, { useState } from 'react';
import '../static/home.css';
import Logo from '../static/images/logo.png';
import WelcomePage from './welcome';
import AboutMe from './about';
import Projects from './projects';
import Contact from './contacts';
import Footer from './footer';
import Education from './eductaion';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="body">

        {/* -------------------------Header------------------------------- */}

      <nav className="navbar">
        <div className="container" >
          <img src={Logo} alt="logo" style={{ width: '20vh', height: '10vh' }} />
          <button className="navbar-toggler" onClick={toggleNavbar}>
            ☰
          </button>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home" className="nav-link active">Home</a></li>

            <li className="dropdown">
              <a href="#about" className="nav-link dropdown-toggle">About</a>
              <ul className="dropdown-menu">
                <li><a href="#about" className="dropdown-item">WHOAMI</a></li>
                <li><a href="#education" className="dropdown-item">Education Background</a></li>
              </ul>
            </li>

            
            <li><a href="#project" className="nav-link">Project</a></li>
            <li className="dropdown">
              <a href="#" className="nav-link dropdown-toggle">Blogs</a>
              <ul className="dropdown-menu">
                <li><a href="https://medium.com/@mungaijames6303/bigquery-unlocking-the-power-of-big-data-c3e8d15c04ed" className="dropdown-item">SQL blog</a></li>
                <li><a href="#" className="dropdown-item">ML blog</a></li>
                <li><a href="#" className="dropdown-item">Deep Learning blog</a></li>
              </ul>
            </li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      
      {/* ---------------------------------Welcome Page------------------------ */}
      <WelcomePage />
     
      {/* ---------------------------------About Me------------------------ */}
      <AboutMe />
     

      {/* ---------------------------------Education--------------------------------- */}
      <Education />

        {/* ---------------------------------Services--------------------------------- */}
        <Projects />

       
        {/* ---------------------------------Contact--------------------------------- */}
        <Contact />
       

        {/* ---------------------------------Footer--------------------------------- */}

        <Footer/>


      
    </div>
  );
};

export default Home;
