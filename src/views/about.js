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
  const aboutme = `Born in 1989 on in Army base in Landstuhl Germany. I grew up in Suffolk Virginia and made my start in Raleigh North Carolina.
                  Currently following my wife whom is active duty in the military and am looking for a remote position for the ability to move around with my wife wherever she is needed.`;

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
            <h4 className="aboutme">
              {aboutme}
            </h4>
          </div>
          </div>
          </Container>
          </section>
    );
};

