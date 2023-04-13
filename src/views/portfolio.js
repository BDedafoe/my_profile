import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import petfaxIMG from '../public/petfaxIMG.png'
import portfolioIMG from '../public/portfolioIMG.png'
import recipeIMG from '../public/recipeIMG.png'
import tetrisIMG from '../public/tetrisIMG.png'
import grocerListIMG from '../public/groceryListIMG.png'
import storyBooksIMG from '../public/storyBooksIMG.png'
import drinksIMG from '../public/drinksIMG.png'
import refineIMG from '../public/refineIMG.png'

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
      title: 'Refine_React', 
      description: `This Full MERN Stack mock rental property app gives users CRUD abilities with rental property details and property messages.
      Refine is the React-based framework used in the client folder where TypeScript was used as the programming language 
      Created UI requirements using Material UI and used Figma for enhanced styling.  
      Cloudinary was used to upload, manage, and deliver property images. 
      All User, Property, and Message information is stored in MongoDB.
      Users login using their Google account credentials via Google Auth API.
      `,
      alter: 'Refine_React',
      image: `${refineIMG}`,
    },
    { 
      id: 2,
      title: 'StoryBooks', 
      description: `A Node.js app which users can upload public and private stories from their lives. 
      The public stories are seen by all users of the app where the private stories are only visible to the user that created it. Secured login using Google-OAuth 2.0 and all stories and user information is stored on MongoDB Atlas.`,
      alter: 'StoryBooks',
      image: `${storyBooksIMG}`,
    },
    { 
      id: 3,
      title: 'Cocktail App', 
      description: `Easy and yet convenient React App that allows you to search for hundreds of cocktail recipes by ingredient or by cocktail name. The JSON data is pulled from a cocktail database API and rendered with simple styling. The styling aspect also makes this app convenient for looking something up on the go.`,
      alter: 'Cocktail App',
      image: `${drinksIMG}`,
    },
    { 
      id: 4,
      title: 'Grocery List', 
      description: `This App allows users to register an account and also log in to their account to view
      recipes from a recipe API and also log a list of ingredients needed for the dish. The user information
      is stored in MongoDB along with their grocery list schemas.`,
      alter: 'Grocery List',
      image: `${grocerListIMG}`,
    },
    { 
      id: 5,
      title: 'Recipe App', 
      description: `A React App built using Edamam's Recipe Search API to browse
      hundreds of recipes if you're drawing a blank when it comes to whipping something
      up in the kitchen`,
      alter: 'Recipe App',
      image: `${recipeIMG}`,
    },
    { 
      id: 6,
      title: 'Tetris', 
      description: `This fun front-end side project was built using only HTML and JavaScript to
      keep you entertained`,
      alter: 'Tetris',
      image: `${tetrisIMG}`,
    },
    { 
      id: 7,
      title: 'PetFax App', 
      description: `This Python App provides random facts about some of your favorite animals.
      Users can also add their name and a new fact about an animal. This information is stored in PGAdmin and displayed on the facts page.`,
      alter: 'PetFax App',
      image: `${petfaxIMG}`,
      
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