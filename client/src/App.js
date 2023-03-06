import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Nav from './PortfolioContainer/Nav/Nav';
import AboutMe from './PortfolioContainer/AboutMe/About';
import Experience from './PortfolioContainer/Experience/Experience';
import Services from './PortfolioContainer/Services/Services';
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import Contact from './PortfolioContainer/Contact/Contact';
import FootNote from './PortfolioContainer/FootNote/FootNote';


function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <FootNote />
  </div>
  );
}

export default App;
