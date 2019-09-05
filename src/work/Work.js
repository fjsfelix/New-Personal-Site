import React from 'react';
import styles from './Work.module.scss'
import TimelineItem from './TimelineItem'
import Snaptravel from './snaptravel.png'
import Amex from './amex.png'
import TextNow from './textnow.png'
import Veriday from './veriday.png'
import TD from './td.png'
import Pivotal from './pivotal.png'


function Work() {
    return (
    <div className={styles.workContianer}>
        <div className={styles.workContianerInner}>
          <div style={{width: '100%'}}>
            <h2 className={`${styles.sectionTitle} ${styles.workTitle}`} >Work Exprience</h2>
            <TimelineItem 
              bgTopColor='#FFB92D'
              bgColor="#FF8314" 
              textColor="#FF8314" 
              logo={Snaptravel} 
              company="SnapTravel"
              position="Front End Web Developer"
              date="September - December 2018"/>
            <TimelineItem 
              bgTopColor='#56A9E6'
              bgColor="#2B70C9"
              textColor="#2B70C9"
              logo={Amex} 
              company="American Express"
              position="Software Engineer"
              date="September - December 2017"
              reverse={true}/>
            <TimelineItem 
              bgTopColor='#8143D0'
              bgColor="#4A20A3"
              textColor="#7545DA"
              logo={TextNow}
              company="TextNow"
              position="Full-Stack Web Developer"
              date="January - march 2017"/>
            <TimelineItem 
              bgTopColor='#6AEBFF'
              bgColor="#009ed7"
              textColor="#009ed7"
              logo={Veriday}
              company="Veriday"
              position="Full-Stack Web Developer"
              date="May – September 2016"
              reverse={true}/>
            <TimelineItem 
              bgTopColor='#00D98B'
              bgColor="#00b153"
              textColor="#00b153"
              logo={TD}
              company="TD Securities"
              position="Quality Assurance Analysis"
              date="September – December 2014 "/>
            <TimelineItem 
              bgTopColor='#97FFFA'
              bgColor="#00b5a3"
              textColor="#00b5a3"
              logo={Pivotal}
              company="Pivotal Labs"
              position="Agile Test Engineer"
              date="January - May 2014" 
              reverse={true}/>
          </div>
        </div>
      </div>

    );
  }
  
  export default Work;