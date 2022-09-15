import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import '../public/my.css'


class MyNavbar extends Component {
    render () {
        return (
            <ul className="nav">
                <li><a href="#home"><link to='/src/Components/Home.js'></link>Home</a></li>
                
                
                <li><a href="#about">About</a></li>
            

                <li><a href="#contact">Contact</a></li>
                <li><a href="#portfolio">My Portfolio</a></li>
            </ul>
        )
    }
}


  
export default MyNavbar;