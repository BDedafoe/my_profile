import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import laptopIMG from '../public/laptopIMG.png'

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto"
  },
}));

export const Portfolio = () => {
  const classes = useStyles();
  const [projects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${laptopIMG}`,
    },
    { 
      id: 2,
      title: 'VeriTru Project', 
      description: `An advocacy project website built using
      MEAN stack with fact-checking tool to promote actions against
      fake news.`,
      alter: 'VeriTru Project',
      
    },
    { 
      id: 3,
      title: 'LoFo Project', 
      description: `Logistics and Forwarding website built using
      ReactJS to design and develop its front-end.`,
      alter: 'LoFo Project',
      
    },
    { 
      id: 4,
      title: 'Startup Project', 
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: 'Startup Project',
      
    },
    { 
      id: 5,
      title: 'LaCalle Cafe', 
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: 'Startup Project',
      
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h1 className="title">
                { project.id + '. ' + project.title }
              </h1>
              <h3 className="description">
                { project.description }
              </h3>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};