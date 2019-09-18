import React from 'react';
import styles from './Education.module.scss'
import uw from './uw.png'
import {Element} from 'react-scroll'


function Education() {
    return (
    <Element name='education'>
      <div className={styles.eduContianer}>
        
        <div className={styles.eduLeft}>

        </div>
        <div className={styles.eduRight}>
          <h2 className={`${styles.sectionTitle} ${styles.eduTitle}`}>Education</h2>
          <img src={uw} />
          <h3>Batchlers of Applied Science</h3>
          <h4>Honours Computer Engineering Co-op</h4>
          <h4>(With Distinction)</h4>
          <h4 style={{margin: '40px 0 0 0'}}>2019</h4>
        </div>
        
              
      </div>
    </Element>

    );
  }
  
  export default Education;