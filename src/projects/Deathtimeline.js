import React from 'react';
import styles from './Projects.module.scss'
import ProjectBox from './ProjectBox'
import dtPhone from './dtPhone.png'
import dtDesktop from './dtDesktop.png'
import star from './star.png'

function Deathtimeline() {
    return (
        <ProjectBox color='linear-gradient(to bottom, #545454, #212121)' link='http://deathtimeline.com/' tags={[ "React", "Ruby on Rails"]}>
          <div className={styles.dtContainer}>
            <div className={styles.projectTitle}>
              <span className={styles.projectLogoDT}>
                <p>DT</p>
              </span>
              <h3 className={styles.projectName}>Death Timeline</h3>
            </div>
            <p className={styles.projectDesc} >
              A timeline of all deaths that have occurred on the HBO TV show Game of Thrones 
            </p>
            <div className={styles.dtScreens}>
              <img src={dtPhone} className={styles.dtPhone} />
              <span className={styles.dtDesktopContainer}>
                <img src={dtDesktop} className={styles.dtDesktop} />
              </span>
            </div>
            <div className={styles.starLine}>
            <img src={star} />
              <h4>
                Over 1 Million Visits!
              </h4>
            </div>

          </div>
        </ProjectBox>
    );
  }
  
  export default Deathtimeline;