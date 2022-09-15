import React, { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import './public/my.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import MyNavbar from './Components/Navbar';
import Profile from "./Components/Profile";





export default function App() {

  

  return (
    <div className="App">
       <MyNavbar />
       <Profile />
       <br />

          
     

       <br />
       <Footer />
       <br />
    </div>
  );
}


