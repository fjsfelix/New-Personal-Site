import React from 'react';
import styles from './LogoBar.module.scss'
import gitHubIMG from './git.png'
import linkedInIMG from './linked.png'
import instaImg from './insta.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'


function LogoBar() {
    return (
    <div className={styles.logoBarContianer}>
      <div className={styles.container}>
        <div className={styles.logoBarContianerInner}>
          <a href="#" target='_blank'>
            <FontAwesomeIcon icon={faFilePdf} />
            <span className={styles.resume}>
              Resume
            </span>
          </a>
          <a href="https://github.com/fjsfelix" target='_blank'>
            <img src={gitHubIMG}/>
          </a>
          <a href="https://www.linkedin.com/in/felixsunlink/" target='_blank'>
            <img src={linkedInIMG}/>
          </a>
          <a href="https://www.instagram.com/felixsunphoto/" target='_blank'>
            <img src={instaImg}/>
          </a>

        </div>
       </div>
    </div>

    );
  }
  
  export default LogoBar;