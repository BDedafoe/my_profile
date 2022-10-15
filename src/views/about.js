import React from 'react';
import aboutMe from '../public/aboutMe.JPG'

const About = () => { 
  return (
    <div className="flex-container">
    <div className="imageContainer">
      <img src={aboutMe} alt="aboutMePic"></img>
    </div><div className="aboutContainer">
        <h2>Short Biography</h2>
        <br></br>
        <h3>Born in 1989 on in Army base in Landstuhl Germany. I grew up in Suffolk Virginia and made my start in Raleigh North Carolina.</h3>
        <br></br>
        <h3>Currently following my wife whom is active duty in the military and am looking for a remote position for the ability to move around with my wife wherever she is needed.</h3>
        <br></br>
        <h3>I enjoy styaing active and support local businesses as much as possible. A long bike ride followed by a visit to a local brewery is my ideal Saturday afternoon. I love to travel and experience the beauty and uniqueness each place has to offer.</h3>
      </div>
      </div>
  );
}

export default About;

