
import React from 'react';
import logo from '../img/logo.png'
import './Navbar.css'; // For styling (create this file)


const Navbar = () => {
    return (
    <h1>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div className="nav-links">
                <a href='#'>Resume Templates</a>
                <a href='#'>My Resumes</a>
                <a href='#'>About Us</a>
          </div>
          
        
          </div>
      </div> 
    </h1>

    
        
     
        
        
      
      
     

   

    );
  };
  
  export default Navbar;
  
