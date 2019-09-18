import React, {useState, useEffect} from 'react';
import styles from './Work.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


function InfoModal({open, setToClose, bgTopColor, bgColor, logo, company, position, date, points}) {
 
    const pointsList = points.map((point) => {
      return (
        <p key={point}>{point}</p>
      )
    })

    const test = open
    const gradient = `linear-gradient(to bottom, ${bgTopColor} , ${bgColor})`

    return (
      <div className={`${styles.modalBack} ${open ? styles.modalOpen : ''}` } onClick={setToClose}>

        <div className={styles.modal}>
          <div className={styles.modalBar} style={{background: bgColor}} >
            <img src={logo} className={styles.modalLogo}/> 
            <FontAwesomeIcon className={styles.closeModal} icon={faTimesCircle} />
          </div>
          <div className={styles.modalInfo} >
            <h4 >{company}</h4>
            <h3  style={{color: bgColor}}>{position} </h3>
            <h5 className={styles.modalDate}>{date}</h5>
            
            <div className={styles.modalList} >
              {pointsList}
            </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default InfoModal;