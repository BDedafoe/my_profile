import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import main from '../public/main.jpeg'

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '4em',
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
              background: "url(" + main + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="home_content_wrapper">
              <h1>{homeGreetings}</h1>
            <br></br>
            <h3 className="homeInfo">
              {homeInfo}
            </h3>
          </div>
          </div>
          </Container>
          </section>
                    
    );
}
    
