import React from 'react';
import './App.css';
import './public/my.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Portfolio from './views/portfolio';
import About from './views/about';
import Home from './views/home';
import Resume from './views/resume';



const App = () => {
  return (
    <div className="App">
        
            
            <br></br>
            <br></br>  
      <Router>
      <br></br>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
    </Router>
    <div className="footer">
                <span padding="1em"><i class="fa-brands fa-facebook fa-xl fa-fw"></i></span>
                
                <span padding="1em"><i class="fa-brands fa-instagram fa-xl fa-fw"></i></span>

                <span padding="1em"><i class="fa-brands fa-linkedin-in fa-xl fa-fw"></i></span>
                
                <span padding="1em"><i class="fa-brands fa-github fa-xl fa-fw"></i></span>

                <span padding="1em"><i class="fa-solid fa-envelope fa-xl fa-fw"></i></span>

                <span padding="1em"><i class="fa-solid fa-phone fa-xl fa-fw"></i></span>
            </div>
    </div>
  );
}

export default App;


