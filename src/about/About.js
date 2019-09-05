import React from 'react';
import styles from './About.module.scss'
import schoolIcon from './school.svg'
import webIcon from './web.svg'
import coopIcon from './coop.svg'
import projectIcon from './project.svg'
import FacePhoto from './felix.png'

function About() {
    return (
    <div className={styles.aboutContianer}>
      <div className={styles.container}>
        <div className={styles.aboutContianerInner}>
          
          <div className={styles.aboutInfo}>
            <div className={styles.aboutLeft}>
              <h2 className={styles.sectionTitle} style={{margin: "0 0 80px 0"}}>About Me</h2>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img src={schoolIcon} style={{height: "60px"}}/>
                </div>
                <div className={styles.aboutItemText}>
                  <h3>University of Waterloo</h3>
                  <h4>Computer Engineering </h4>
                </div>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img src={coopIcon} style={{height: "70px"}}/>
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Co-op Work Experience</h3>
                  <h4>6 work terms in Software rolls </h4>
                </div>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img src={projectIcon} style={{height: "70px"}}/>
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Personal Projects</h3>
                  <h4>1million visits / 70,000 dowloads</h4>
                </div>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img src={webIcon} style={{height: "60px"}}/>
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Web Development</h3>
                  <h4>4 years Experience </h4>
                </div>
              </div>
              

   
            </div>
            <div className={styles.aboutRight}>
              <img src={FacePhoto} className={styles.facePhoto}/>
            </div>

          </div>
         
        </div>
       </div>
    </div>

    );
  }
  
  export default About;