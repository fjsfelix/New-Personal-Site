import React from 'react';
import styles from './Hero.module.scss'


function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBG}></div>
      
      <div className={styles.heroFront}>
        <div className={`${styles.container} ${styles.heroText}`}>
          <div className={styles.name}>
            <h1>Felix Sun</h1>
            <div className={styles.line}></div>
          </div>
          <div className={styles.description}>
            <h2>Software Engineer</h2>
            <h2>Photographer</h2>
            <h2>Designer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Hero;