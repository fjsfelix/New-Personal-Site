import React, {useState, useEffect} from 'react';
import styles from './Work.module.scss'


function TimeLineItem({bgTopColor, bgColor, textColor, logo, company, position, date, reverse}) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => {
      if (open) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = (event) => {
      if (!scrolled) {
        console.log(this)
        // var position = this.current.getBoundingClientRect()
        // console.log(position)
  
        // if(position.top >= 0 && position.bottom <= (window.innerHeight + position.height )) {
        //   setScrolled(true)
        // }
      }
    }

    const gradient = `linear-gradient(to bottom, ${bgTopColor} , ${bgColor})`

    return (
      <div className={`${styles.timeLineItemContianer} ${reverse ? styles.timeLineItemContianerR : ""}`} ref={thisElement} >
        <div className={`${styles.timeLineLeft} ${reverse ? styles.timeLineLeftR : ""}`} > 
          <div className={`${styles.companyBox} ${reverse ? styles.companyBoxR : ""} ${scrolled ? styles.scrolledTo : ""}`}  style={{background: gradient}} onClick={handleClick}>
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
            <p>Maintained and developed new features and pages for Snaptravel.com, a large scale and heavily trafficked website using React and Redux</p>
            <p>Created A/B tests for features which measured user acceptance, impact, and conversion rate</p>
            <p>Developed the redesign of the home and informational pages using React with server-side rendering</p>
            <p>Designed and implemented the terms and press release pages.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default TimeLineItem;