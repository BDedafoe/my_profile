import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './public/my.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './content/navbar';
import Portfolio from './views/portfolio';
import About from './views/about';
import Home from './views/home';
import Resume from './views/resume';
import { SocialIcons } from './content/socialIcons';
import { Hidden } from '@material-ui/core';
import { SpeedDials } from './content/speedDial';

const App = () => {
  
  return (
    <div className="App">       
      <Router>
        <Navbar />
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

export default App;


