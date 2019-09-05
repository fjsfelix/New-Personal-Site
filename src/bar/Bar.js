import React from 'react';
import styles from './Bar.module.scss'



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
            <div className={styles.logo}>
              FS
            </div>
            <div className={styles.barRight}>
              <a href="#">About</a>
              <a href="#">Work</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
         </div>
      </div>
    );
  }
    
}
  
export default Bar;