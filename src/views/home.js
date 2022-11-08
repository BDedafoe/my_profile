import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import homePic from '../public/homePic.png'

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export function Home () {
    const classes = useStyles();
    const homeGreetings = "Brittany Dedafoe";
    const homeInfo = `Programmer + Web Developer`;
    return (
        <section id="home">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="home">
          <div className="home_img"
            style={{ 
              background: "url(" + homePic + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
              <h2>{homeGreetings}</h2>
            <p className="homeInfo">
              {homeInfo}
            </p>
          </div>
          </div>
          </Container>
          </section>
                    
    );
}
    
