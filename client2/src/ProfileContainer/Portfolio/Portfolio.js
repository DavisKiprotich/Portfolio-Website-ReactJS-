import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='portfolio-container'>
            <article className='portfolio-item'>
                <div className='portfolio-item-image'></div>
                <h3>Responsive E-commerce website</h3>
                <a href=''>Github</a>
            </article>
        </div>
      </section>
    )
  }
  
  export default Portfolio