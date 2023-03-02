import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import aboutMe3 from '../public/aboutMe3.png'
import aboutMe2 from '../public/aboutMe2.png'

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Short Biography";
  const aboutMe = `I was born in Landstuhl Germany, grew up in Suffolk Virginia, and made my start in Raleigh North Carolina. I’ve always been curious about technology and continue to channel my curiosity with learning something new to implement in my project designs. Even learning something new in general or playing with a new piece of technology has always been fun for me. My career path has changed recently but my passion for technology and creating has not.`;
  const aboutme3 = `I traveled a bit growing up and continue to travel whenever I can. Just like technology, there’s so much left to be explored in this world. Realistically, I’m riding my bike or getting my steps in after coffee. I enjoy being active which balances my appreciation for craft beer and bourbon. `;


  return (
    <><section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="about_img"
            style={{
              background: "url(" + aboutMe2 + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <h1>{greetings}</h1>
            <br></br>
            <h3 className="aboutme">
              {aboutMe}
            </h3>
          </div>
        </div>
      </Container>
    </section><section id="about">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="about2">
          <div className="_content_wrapper">
              <h1>About Me</h1>
              <br></br>
              <h3 className="aboutme">
                {aboutme3}
              </h3>
            </div>
            <div className="about_img"
              style={{
                background: "url(" + aboutMe3 + ")",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
            </div>
          </div>
        </Container>
      </section></>
    );
};

