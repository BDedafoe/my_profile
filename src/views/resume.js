import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Resume = () => { 
  const classes = useStyles();
  return (
    <section id="resumePage">
      <Container component="main" className={classes.main} maxWidth="md">
    <div className="resumeContainer">
      <div className="resumeLeft">
        <h1>Skills</h1>
          <li>Back-End Development</li>
          <li>UX and UI Design</li>
          <li>Front-End Development</li>
          <li>HTML and Web Accessibility</li>
          <li>JavaScript | React | Redux | Express</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Typescript</li>
          <li>CSS and CSS Frameworks</li>
          <li>Tailwind | SASS</li>
          <li>SQL | Sequelize | PGAdmin | Postgres</li>
          <li>MongoDB</li>
          <li>Database Development</li>
          <li>Postman</li>
          <li>Github</li>
        <br></br>
        <div className="education">
          <h1>Certification</h1>
            <h3>Google Data Analytics Specialization</h3>
            <h3>Coursera | Google - September 2022</h3>
            
        <br></br>    
          <h1>Education</h1>
            <h3>Software Development Professional Certificate</h3>
            <h3>North Carolina State University</h3>
            <h3>Raleigh, NC - December 2022</h3>
          <br></br>
            <h3>Bachelor of Science</h3>
            <h3>Computer Information Systems</h3>
            <h3>University of Mount Olive</h3>
            <h3>Mount Olive, NC - December 2012</h3>
      </div>
      </div>
      <div className="resumeRight">
          <h1>Summary</h1>
            <h3>Creating technology that connects customers to experiences in a meaningful and efficient way drives my product development process and inspired me to change careers. </h3> 
            <h3>Detailed oriented developer with experience in full stack development possessing a passion for learning new skills and creating new applications. </h3>
            <h3>My previous company was an E-commerce power cord manufacturer and distributor which has given me the insight of how important a website is and why I chose to leave my position to pursue my passion for design and development.</h3>
            <h3>Decisive, able to make quick and effective decisions while maintaining excellent client relations and meeting deadlines. Multi-functional team player that will go above and beyond to meet more than the expectation.</h3>
        <br></br>
          <h1>Work History</h1>
          <h2>Iron Box</h2>
          <h2>COO | Raleigh, North Carolina</h2>
          <h2>April 2013 - March 2022</h2>
            <li>Managed revenue models, process flows, operations, and customer deadlines</li>
            <li>Implemented policies to promote company culture and increase productivity across all departments  </li>
            <li>Reduced costs through client and distributor price negotiations by 24%</li>
            <li>Expanded company workforce to keep up with increased demand by 60%</li>
            <li>Created customer database, vendor cost analysis reports, project timelines, and inventory projections</li>
            <li>Developed non-disclosure agreements to work with competitors </li>
            <li>Assisted in the development of employee handbooks and company procedures for each department</li>
            <li>Resolved problems with high-profile customers to solidify customer retention</li>
            <li>Held weekly team meetings with each department to improve production and employee morale</li>
      </div>
    </div>
    </Container>
    </section>
  );
}
