import React from 'react'
import Home from './ProfileContainer/Home/Home'
import Nav from './ProfileContainer/Nav/Nav'
import About from './ProfileContainer/AboutMe/About'
import Experience from './ProfileContainer/Experience/Experience'
import Services from './ProfileContainer/Services/Services'
import Portfolio from './ProfileContainer/Portfolio/Portfolio'
import Testimonial from './ProfileContainer/Testimonial/Testimonial'
import Contact from './ProfileContainer/Contact/Contact'
import Footer from './ProfileContainer/Footer/Footer'

function App() {
    return (
      <div className="App">
        <Home />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
    );
  }
  
  export default App;
  