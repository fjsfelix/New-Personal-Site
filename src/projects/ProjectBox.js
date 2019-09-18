import React from 'react'
import styles from './Projects.module.scss'
import Arrow from './arrow.png'


function ProjectBox({color, link, children, tags}) {
  const tagList = () => {
    return tags.map((tag) => {
      return (
        <div className={styles.tag} key={tag}> 
          {tag}
        </div>
      )
    })
  }

  return (
    <div className={styles.projContainer} style={{background: color}}>
      <a className={styles.projLink} href={link} target="_blank">

        <div className={styles.arrowContianer}>
          <div className={styles.arrowVisit}>
            Visit
          </div>
          <img src={Arrow}/>
        </div>
        {children}
        <div className={styles.tagContainer}>
          {tagList()}
        </div>
      </a>
    </div>
  );
}
  
  export default ProjectBox;