import React from 'react';
import styles from './Projects.module.scss'
import ProjectBox from './ProjectBox'
import marvelScreen from './marvel.png'

function Marvel() {
    return (
        <ProjectBox color='linear-gradient(to right, #B11F1F, #12417F)' link='https://marvelordc.herokuapp.com' tags={[ "AngularJS", "Ruby on Rails"]}>
          <div className={styles.dtContainer}>
            <div className={styles.projectTitle}>
              <h3 className={styles.projectName}>Marvel or DC</h3>
            </div>
            <p className={styles.projectDesc} >
              Objective of this game is to answer whether the character shown is from Marvel or DC
            </p>
            <img src={marvelScreen} className={styles.marvelIMG}/>
          </div>
        </ProjectBox>
    );
  }
  
  export default Marvel;