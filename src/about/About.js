import React from 'react';
import styles from './About.module.scss'
import schoolIcon from './school.svg'
import webIcon from './web.svg'
import coopIcon from './coop.svg'
import projectIcon from './project.svg'
import FacePhoto from './felix.png'
import {Element} from 'react-scroll'

function About() {
    return (
    <div className={styles.aboutContianer}>
      <Element name="about" ></Element>
      <div className={styles.container}>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutLeft}>
              <h2 className={`${styles.sectionTitle} ${styles.aboutSectionTitle}`}>About Me</h2>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img className={styles.aboutImgW} src={schoolIcon} />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>University of Waterloo</h3>
                  <h4>Computer Engineering </h4>
                </div>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img className={styles.aboutImg} src={coopIcon} />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Co-op Work Experience</h3>
                  <h4>6 work terms in Software rolls </h4>
                </div>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img className={styles.aboutImg} src={projectIcon} />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Personal Projects</h3>
                  <h4>1million visits / 70,000 dowloads</h4>
                </div>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <img className={styles.aboutImgW} src={webIcon} />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Web Development</h3>
                  <h4>4 years Experience </h4>
                </div>
              </div>
            </div>
            <img src={FacePhoto} className={styles.facePhoto}/>
          </div>
        </div>
      </div>
    )
  }
  
  export default About;