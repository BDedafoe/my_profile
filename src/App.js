import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './public/my.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
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
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? 'none' : 'none',
              textDecoration: 'none',
            })}
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? 'none' : 'none',
              textDecoration: 'none',
            })}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/resume"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? 'none' : 'none',
              textDecoration: 'none',
            })}
          >
            Resume
          </NavLink>
        </div>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/resume' exact component={Resume} />
          </Switch>
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




