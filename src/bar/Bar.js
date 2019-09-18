import React from 'react';
import styles from './Bar.module.scss'
import { Link } from 'react-scroll'


class Bar extends React.Component {
  constructor(){
    super()
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      clearBar: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if (window.scrollY < 30 && this.state.clearBar === false) {
      this.setState({clearBar: true})
    } else if (window.scrollY > 30 && this.state.clearBar === true){
      this.setState({clearBar: false})
    }
  }

  barColor() {
    if (this.state.clearBar) {
      return ""
    }
    return styles.coloredBar;
  }


  render() {
    return (
      <div className={`${styles.barContianer} ${this.barColor()}`}>
        <div className={styles.container}>
          <div className={styles.barContianerInner}>
              <Link className={styles.link} smooth={true} duration={500} to="about" >About</Link>
              <Link className={styles.link} smooth={true} duration={500} to="work">Work</Link>
              <Link className={styles.link} smooth={true} duration={500} to="education">Education</Link>
              <Link className={styles.link} smooth={true} duration={500} to="projects">Projects</Link>
              <Link className={styles.link} smooth={true} duration={500} to="contact">Contact</Link>
          </div>
         </div>
      </div>
    );
  }
    
}
  
export default Bar;