import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const aboutme = `I was born on an Army base in Landstuhl Germany in 1989. I grew up in Suffolk Virginia and made my start in Raleigh North Carolina.
                   Though my career path has recently changed; my passion for technology and creating has not. Traveling and exploring new places are what I like to do in my down time, but
                   I'm usually taking an early morning jog before the Premier League games start.`;

  return (
    <section id="about">
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
              {aboutme}
            </h3>
          </div>
          </div>
          </Container>
          </section>
    );
};

