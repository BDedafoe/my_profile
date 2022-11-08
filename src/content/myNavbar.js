import React from 'react';
import { NavLink } from 'react-router-dom';
import '../public/my.css';

const Navbar = () => {
  return (
    <div className="nav">
    <NavLink
      to="/"
      style={({ isActive }) => ({
        color: isActive ? '#545e6f' : '#545e6f',
        background: isActive ? 'none' : 'none',
        textDecoration: 'none',
        alignItems: 'center',
      })}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      style={({ isActive }) => ({
        color: isActive ? 'aqua' : '#545e6f',
        background: isActive ? 'none' : 'none',
        textDecoration: 'none',
      })}
    >
      About Me
    </NavLink>
    <NavLink
      to="/portfolio"
      style={({ isActive }) => ({
        color: isActive ? 'aqua' : '#545e6f',
        background: isActive ? 'none' : 'none',
        textDecoration: 'none',
      })}
    >
      Portfolio
    </NavLink>
    <NavLink
      to="/resume"
      style={({ isActive }) => ({
        color: isActive ? 'aqua' : '#545e6f',
        background: isActive ? 'none' : 'none',
        textDecoration: 'none',
      })}
    >
      Resume
    </NavLink>
  </div>
  );
}
export default Navbar;


