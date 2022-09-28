import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const About = () => { 
  return (
    <Carousel fade>
    <Carousel.Item interval={6000}>
        <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1616514169928-a1e40c6f791c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
            alt="First slide"
        />
    <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={6000}>
        <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Second slide"
        />

    <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={6000}>
        <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1557280897-7e94fa33c616?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Third slide"
        />

    <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}
export default About;