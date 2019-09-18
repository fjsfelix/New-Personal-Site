import React from 'react';
import styles from './Hero.module.scss'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons'


function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBG}></div>
      
      <div className={styles.heroFront}>
        <div className={`${styles.container} ${styles.heroText}`}>
          <div className={styles.name}>
            <h1>Felix Sun</h1>
          </div>
          <div className={styles.description}>
            <h2>Software Engineer</h2>
            <h2>Designer</h2>
            <h2>Photographer</h2>
          </div>
          <div className={styles.sectionLinks}>
            <Link className={styles.link} smooth={true} duration={500} to="about" >About</Link>
            <Link className={styles.link} smooth={true} duration={500} to="work">Work</Link>
            <Link className={styles.link} smooth={true} duration={500} to="education">Education</Link>
            <Link className={styles.link} smooth={true} duration={500} to="projects">Projects</Link>
            <Link className={styles.link} smooth={true} duration={500} to="contact">Contact</Link>
          </div>

          <div className={styles.emailContainer}>
            <a className={styles.email} href='mailto:fs.felix.sun@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} className={styles.emailLogo}/>fs.felix.sun@gmail.com
            </a>
          </div>

          
          <div className={styles.contactBar}>
            <a className={styles.contactBtn} href='mailto:fs.felix.sun@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a className={styles.contactBtn}>
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
            <a className={styles.contactBtn} href="https://github.com/fjsfelix" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className={styles.contactBtn} href="https://www.linkedin.com/in/felixsunlink/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className={styles.contactBtn} href="https://www.instagram.com/felixsunphoto/" target='_blank'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Hero;