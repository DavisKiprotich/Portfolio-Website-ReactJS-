import React from 'react'
import Home from './ProfileContainer/Home/Home'
import Nav from './ProfileContainer/Nav/Nav'
import About from './ProfileContainer/AboutMe/About'
import Experience from './ProfileContainer/Experience/Experience'
import Services from './ProfileContainer/Services/Services'
import Contact from './ProfileContainer/Contact/Contact'
import Portfolio from './ProfileContainer/Portfolio/Portfolio'

function App() {
    return (
      <div className="App">
        <Home />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
    </div>
    );
  }
  
  export default App;
  