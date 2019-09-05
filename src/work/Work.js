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
              date="September - December 2018"
              points={[
                  "Maintained and developed new features and pages for Snaptravel.com, a large scale and heavily trafficked website using React and Redux",
                  "Created A/B tests for features which measured user acceptance, impact, and conversion rate",
                  "Built the home and informational pages from scratch using React with server-side rendering",
                  "Designed and built the terms & conditions and press release pages"]} />
            <TimelineItem 
              bgTopColor='#56A9E6'
              bgColor="#2B70C9"
              textColor="#2B70C9"
              logo={Amex} 
              company="American Express"
              position="Software Engineer"
              date="September - December 2017"
              reverse={true}
              points={[
                "Designed and developed web prototypes from scratch using React, Node.js and Express",
                "Designed website layout mock-ups using Adobe Illustrator and Photoshop",
                "Created methods to target insurance products to card holders based on their purchases, which won 3rd place out of over 200 global teams in American Express internal hackathon"]} />
            <TimelineItem 
              bgTopColor='#8143D0'
              bgColor="#4A20A3"
              textColor="#7545DA"
              logo={TextNow}
              company="TextNow"
              position="Full-Stack Web Developer"
              date="January - march 2017"
              points={[
                "Maintained and developed new features for textnow.com, a large scale and heavily trafficked website with millions of users, using Backbone.js, Node.js and Express",
                "Implemented storefront design refresh that reduced page bounce rate by 65%",
                "Took responsibility for quality of assigned projects which includes understanding requirements and impact, creating and updating unit tests, fixing bugs, and performance analysis with A/B testing"]} />
            <TimelineItem 
              bgTopColor='#6AEBFF'
              bgColor="#009ed7"
              textColor="#009ed7"
              logo={Veriday}
              company="Veriday"
              position="Full-Stack Web Developer"
              date="May – September 2016"
              reverse={true}
              points={[
                "Worked on enterprise level portal used by bank employees/advisors to generate and monitor both websites and marketing campaigns",
                "Implemented and maintained back-end solutions: RESTful web service APIs, authentication, and data manipulations using Java and Spring MVC ",
                "Designed and developed front-end UI, functionality, and API integration with Backbone.js, jQuery, Bootstrap and Less"]} />
            <TimelineItem 
              bgTopColor='#00D98B'
              bgColor="#00b153"
              textColor="#00b153"
              logo={TD}
              company="TD Securities"
              position="Quality Assurance Analysis"
              date="September – December 2014"
              points={[
                "Created comprehensive test plans and performed system testing for market risk applications and databases using SQL"]} />
            <TimelineItem 
              bgTopColor='#97FFFA'
              bgColor="#00b5a3"
              textColor="#00b5a3"
              logo={Pivotal}
              company="Pivotal Labs"
              position="Agile Test Engineer"
              date="January - May 2014" 
              reverse={true}
              points={[
                "Implemented test cases for various customer facing mobile applications and websites"]} />
          </div>
        </div>
      </div>

    );
  }
  
  export default Work;