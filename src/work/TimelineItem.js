import React, {useState, useEffect} from 'react';
import styles from './Work.module.scss'
import { Waypoint } from 'react-waypoint';
import InfoModal from './InfoModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


function TimeLineItem(props) {
    const {bgTopColor, bgColor, textColor, logo, company, position, date, dateS, reverse, points} = props
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const thisElement = React.createRef();

    const handleClick = () => {
      if (open) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }

    const handleWaypoint = () => {
      if (!scrolled) {
          setScrolled(true)
      }
    }

    const setToClose = () => {
      setOpen(false)
    }

 
    const pointsList = points.map((point) => {
      return (
        <p key={point}>{point}</p>
      )
    })

    const modalProps = {}

    const slideInClass = reverse ? styles.scrolledToR : styles.scrolledTo;
    const slideInClassRight = reverse ? styles.scrolledTo : styles.scrolledToR;
    const gradient = `linear-gradient(to bottom, ${bgTopColor} , ${bgColor})`

    return (
      <div className={`${styles.timeLineItemContianer} ${reverse ? styles.timeLineItemContianerR : ""}`} ref={thisElement} >
        <Waypoint onEnter={handleWaypoint} />
        <InfoModal {...props} open={open} setToClose={setToClose}/>
        <div className={`${styles.timeLineLeft} ${reverse ? styles.timeLineLeftR : ""}`} > 
          <div className={`${styles.companyBox} ${reverse ? styles.companyBoxR : ""} ${scrolled ? slideInClass : ""}`}  style={{background: gradient}} onClick={handleClick}>
            <img src={logo} className={styles.logo} /> 

              <p className={styles.moreInfo}>more info</p>
              <p className={styles.moreInfoMobile}><FontAwesomeIcon className={styles.infoIcon} icon={faInfoCircle} /> more info</p>
            
          </div>
        </div>
        <div className={styles.dot}></div>
        <div className={`${styles.timeLineRight} ${reverse ? styles.timeLineRightR : ""} ${open ? styles.timeLineRightOpen : ""}`}>
          <div className={`${scrolled ? slideInClassRight : ""}`}>
            <h4 >{company}</h4>
            <h3  style={{color: textColor}}>{position} </h3>
            <h5 className={styles.date}>{date}</h5>
            <h5 className={styles.mobileDate}>{dateS}</h5>
            
            <div className={`${styles.infoBox} ${open ? styles.infoBoxOpen : styles.infoBoxClosed}`} >
              {pointsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TimeLineItem;