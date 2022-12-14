import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './public/my.css';
import { Portfolio } from './views/portfolio';
import { About } from './views/about';
import { Home } from './views/home';
import { Resume } from './views/resume';
import { SocialIcons } from './content/socialIcons';
import { Hidden } from '@material-ui/core';
import { SpeedDials } from './content/speedDial';

 export const App = () => {
  return (
    <div className="App"> 
      <Router>
        <div className="nav">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/resume"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Resume
          </NavLink>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
        </Router>
      <Hidden smDown>
      <SocialIcons />
      </Hidden>
      <Hidden mdUp>
      <SpeedDials />
      </Hidden>
    </div>
  );
}




