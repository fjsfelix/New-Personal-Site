import React from 'react';
import styles from './LogoBar.module.scss'
import gitHubIMG from './git.png'
import linkedInIMG from './linked.png'
import instaImg from './insta.png'

function LogoBar() {
    return (
    <div className={styles.logoBarContianer}>
      <div className={styles.container}>
        <div className={styles.logoBarContianerInner}>
          <a hreft="#">
            <img src={gitHubIMG}/>
          </a>
          <a hreft="#">
            <img src={linkedInIMG}/>
          </a>
          <a hreft="#">
            <img src={instaImg}/>
          </a>
        </div>
       </div>
    </div>

    );
  }
  
  export default LogoBar;