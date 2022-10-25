import React from 'react';
import './App.css';
import './public/my.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './content/navbar';
import Portfolio from './views/portfolio';
import About from './views/about';
import Home from './views/home';
import Resume from './views/resume';
import { SocialIcons } from './content/socialIcons';

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
      <SocialIcons />
   
    </div>
  );
}

export default App;


