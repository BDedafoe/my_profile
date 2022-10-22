import React from 'react';
import './App.css';
import './public/my.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './views/navbar';
import Portfolio from './views/portfolio';
import About from './views/about';
import Home from './views/home';
import Resume from './views/resume';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


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
    <div className="footer">
                <span padding="1em"><a href="https://facebook.com/brittany.dedafoe"><i class="fa-brands fa-facebook fa-xl fa-fw"></i></a></span>
                
                <span padding="1em"><a href="https://www.instagram.com/deda_woah/"><i class="fa-brands fa-instagram fa-xl fa-fw"></i></a></span>

                <span padding="1em"><a href="https://www.linkedin.com/in/bdedafoe/"><i class="fa-brands fa-linkedin-in fa-xl fa-fw"></i></a></span>
                
                <span padding="1em"><a href="https://github.com/BDedafoe"><i class="fa-brands fa-github fa-xl fa-fw"></i></a></span>

                <span padding="1em">{['top'].map((placement) => (
                    <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3">Email Address</Popover.Header>
                          <Popover.Body>
                            bmd6260@gmail.com
                          </Popover.Body>
                      </Popover>}>
                        <i class="fa-solid fa-envelope fa-xl fa-fw"></i>
                    </OverlayTrigger>
                ))}
                </span>

                <span padding="1em">{['top'].map((placement) => (
                    <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3">Phone Number</Popover.Header>
                          <Popover.Body>
                            757-676-6260
                          </Popover.Body>
                      </Popover>}>
                  <i class="fa-solid fa-phone fa-xl fa-fw"></i>
                  </OverlayTrigger>
                ))}
                  </span>
            </div>
    </div>
  );
}

export default App;


