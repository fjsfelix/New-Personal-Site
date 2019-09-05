import React, {useState, useEffect} from 'react';
import styles from './Work.module.scss'
import { Waypoint } from 'react-waypoint';


function TimeLineItem({bgTopColor, bgColor, textColor, logo, company, position, date, reverse, points}) {
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

 
    const pointsList = points.map((point) => {
      return (
        <p>{point}</p>
      )
    })

    const slideInClass = reverse ? styles.scrolledToR : styles.scrolledTo;
    const gradient = `linear-gradient(to bottom, ${bgTopColor} , ${bgColor})`

    return (
      <div className={`${styles.timeLineItemContianer} ${reverse ? styles.timeLineItemContianerR : ""}`} ref={thisElement} >
        <Waypoint onEnter={handleWaypoint} />
        <div className={`${styles.timeLineLeft} ${reverse ? styles.timeLineLeftR : ""}`} > 
          <div className={`${styles.companyBox} ${reverse ? styles.companyBoxR : ""} ${scrolled ? slideInClass : ""}`}  style={{background: gradient}} onClick={handleClick}>
            <img src={logo} className={styles.logo} /> 

              <p className={styles.moreInfo}>more info</p>

            
          </div>
        </div>
        <div className={styles.dot}></div>
        <div className={`${styles.timeLineRight} ${reverse ? styles.timeLineRightR : ""} ${open ? styles.timeLineRightOpen : ""}`}>
          <h4 >{company}</h4>
          <h3  style={{color: textColor}}>{position} </h3>
          <h5>{date}</h5>
          
          <div className={`${styles.infoBox} ${open ? styles.infoBoxOpen : styles.infoBoxClosed}`} >
            {pointsList}
          </div>
        </div>
      </div>
    );
  }
  
  export default TimeLineItem;