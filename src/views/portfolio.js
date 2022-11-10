import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import petfaxIMG from '../public/petfaxIMG.png'
import portfolioIMG from '../public/portfolioIMG.png'
import recipeIMG from '../public/recipeIMG.png'
import tetrisIMG from '../public/tetrisIMG.png'
import grocerListIMG from '../public/groceryListIMG.png'

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
      title: 'Grocery List', 
      description: `This App allows users to register an account and also log in to their account to view
      recipes from a recipe API and also log a list of ingredients needed for the dish. The user information
      is stored in MongoDB along with their grocery list schemas.`,
      alter: 'Grocery List',
      image: `${grocerListIMG}`,
    },
    { 
      id: 2,
      title: 'Recipe App', 
      description: `A React App built using Edamam's Recipe Search API to browse
      hundreds of recipes if you're drawing a blank when it comes to whipping something
      up in the kitchen`,
      alter: 'Recipe App',
      image: `${recipeIMG}`,
    },
    { 
      id: 3,
      title: 'Tetris', 
      description: `This fun front-end side project was built using only HTML and JavaScript to
      keep you entertained`,
      alter: 'Tetris',
      image: `${tetrisIMG}`,
    },
    { 
      id: 4,
      title: 'PetFax App', 
      description: `This Python App provides random facts about some of your favorite animals.
      Users can also add their name and a new fact about an animal. This information is stored in PGAdmin and displayed on the facts page.`,
      alter: 'PetFax App',
      image: `${petfaxIMG}`,
      
    },
    { 
      id: 5,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${portfolioIMG}`,
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
            <div className="project__content_wrapper">
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