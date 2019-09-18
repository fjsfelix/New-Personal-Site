import React from 'react'
import styles from './Contact.module.scss'
import {Element} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faEnvelope} from '@fortawesome/free-regular-svg-icons'
import resume from '../felix-sun-resume.pdf'


function Contact() {
    return (
      <Element name='contact'>
        <div className={styles.contactContianer}>
          <h2 className={`${styles.sectionTitle} ${styles.contactTitle}`} >Contact</h2>
          <a className={styles.email} href='mailto:fs.felix.sun@gmail.com' ><FontAwesomeIcon icon={faEnvelope} /> <span>fs.felix.sun@gmail.com</span></a>
          <div className={styles.links}>
            <a className={styles.contactLink} href="https://github.com/fjsfelix" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a className={styles.contactLink} href={resume} target='_blank'>
              <FontAwesomeIcon icon={faFilePdf} />
              <span>Resume</span>
            </a>
            <a className={styles.contactLink} href="https://www.linkedin.com/in/felixsunlink/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a className={styles.contactLink} href="https://www.instagram.com/felixsunphoto/" target='_blank'>
              <FontAwesomeIcon icon={faInstagram} />
              <span>Instagram</span>
            </a>
          </div>
          <div className={styles.copyWriteSection}>
            <FontAwesomeIcon icon={faCopyright} />
            <p>Felix Sun 2019</p>
          </div>
        </div>
      </Element>
    )
  }
  
  export default Contact