import React from 'react';
import {  Link } from "react-router-dom";
import '../App.css';

const Navbar= () =>{
  return (
  
    <nav className="mainNavbar">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About Me</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/resume">Resume</Link>
    </li>
    
  </nav>
  );
}
export default Navbar;