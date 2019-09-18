import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Hero from './hero/Hero'
import Bar from './bar/Bar'
import LogoBar from './logoBar/LogoBar'
import About from './about/About'
import Work from './work/Work'
import Education from './education/Education'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

function App() {
  return (
   <div>
     <Bar/>
     <Hero/>
     <LogoBar/>
     <About/>
     <Work />
     <Education/>
     <Projects/>
     <Contact/>
   </div>
  );
}

export default App;
