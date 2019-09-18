import React from 'react'
import styles from './Projects.module.scss'
import Windowed from './Windowed'
import Deathtimeline from './Deathtimeline'
import Marvel from './Marvel'
import {Element} from 'react-scroll'


function Projects() {
    return (
    <Element name='projects'>
      <div className={styles.projfullContianer}>
        
        <h2 className={`${styles.sectionTitle} ${styles.projectsTitle}`}>Personal Projects</h2>
        <div className={styles.projectBoxContianer}>
          <Windowed/>
          <Deathtimeline />
          <Marvel />
        </div>
      </div>
    </Element>

    );
  }
  
  export default Projects;