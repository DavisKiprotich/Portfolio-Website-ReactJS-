import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfolio3.jpg'
import IMG2 from '../../Assets/portfolio1.jpg'
import IMG3 from '../../Assets/portfolio2.jpg'


const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h2>Portfolio</h2>
        <div className='portfolio-container'>
            <article className='portfolio-item'>
                <div className='portfolio-item-image'>
                    <img src={IMG1} alt="" />
                </div>
                <h3>Responsive E-commerce website</h3>
                <div className='portfolio-item-tag'>
                    <a href='https://github.com/' className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className='portfolio-item-image'>
                    <img src={IMG2} alt="" />
                </div>
                <h3>Responsive E-commerce website</h3>
                <div className='portfolio-item-tag'>
                    <a href='https://github.com/' className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className='portfolio-item-image'>
                    <img src={IMG3} alt="" />
                </div>
                <h3>Responsive E-commerce website</h3>
                <div className='portfolio-item-tag'>
                    <a href='https://github.com/' className='btn' target='_blank'>Github</a>
                </div>
            </article>
        </div>
      </section>
    )
  }
  
  export default Portfolio