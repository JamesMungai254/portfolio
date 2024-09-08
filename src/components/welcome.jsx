import React, { useEffect, useState } from 'react';
import '../static/WelcomePage.css'; // Ensure this file is in the same directory


const WelcomePage = () => {
  const [role, setRole] = useState('');
  const RIARA = new URL('../static/images/riara.JPG', import.meta.url).href;

  useEffect(() => {
    const timeout1 = setTimeout(() => setRole('Software Developer'), 3000);
    const timeout2 = setTimeout(() => setRole('Data Scientist'), 6000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);


  
  return (
    <div className="welcome-container" id='home'>
      <div className="bouncing-image">
      <img src={RIARA} alt="mY IMAGE" style={{ width: '35%', height: '35%' }} className='myImage'/>
      </div>
      <div className="message" >
        <p className='theMessage'>Welcome!!<br/>My name is James Mungai </p>
         <div className="dropping-texts" style={{color:'white'}}>
        
  <div>Data Analyst</div>
  <div>ML engineer</div>
  <div>Database Designer</div>
  <div>Software Developer</div>
    {/*  <p><span className={`role ${role ? 'fade-in' : ''}`}>{role}</span></p>*/}
  
</div>

      </div>
      {/* welcome */}

      
    </div>
  );
};

export default WelcomePage;
