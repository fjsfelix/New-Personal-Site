import React from 'react';
import styles from './Projects.module.scss'
import ProjectBox from './ProjectBox'
import screenShot from './windowed2.png'
import trapezoid from './trapezoid.png'
import logo from './w-logo.png'



function Windowed() {
    return (
        <ProjectBox color='#FFD800' link='http://windowed.io/' tags={["Electron", "Desktop App"]}>
          <div className={styles.windowedContainer}>
            <img className={styles.trapezoid} src={trapezoid} />
            <div className={styles.windowedContent}>
              <div className={styles.projectTitle}>
                <img className={styles.projectLogo} src={logo} />
                <h3 className={styles.projectName}>Windowed</h3>
              </div>
              <p className={`${styles.projectDesc} ${styles.projectDescDark}`}>
                A Electron application that allows users to upload to photos to Instagram directly from their desktop 
              </p>
              <h4>Over 70,000 Downloads!</h4>
              <div className={styles.windowedWindow}> 
                <div className={styles.topBar}>
                  <div className={styles.circle} style={{backgroundColor: "#C63737"}}></div>
                  <div className={styles.circle} style={{backgroundColor: "#FFD800"}}></div>
                  <div className={styles.circle} style={{backgroundColor: "#0AFF00"}}></div>
                </div>
                <img src={screenShot} className={styles.screenShot}/>
              </div>
             
            </div>
          </div>
        </ProjectBox>
    );
  }
  
  export default Windowed;