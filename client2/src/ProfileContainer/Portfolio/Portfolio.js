import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfolio3.jpg'
import IMG2 from '../../Assets/portfolio1.jpg'
import IMG3 from '../../Assets/portfolio2.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'My React app portfolio',
        github: 'https://github.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Responsive E-commerce website',
        github: 'https://github.com/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Portfolio designed using HTML,CSS and JavaScript',
        github: 'https://github.com/'
    }
]


const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h2>Portfolio</h2>
        <div className='portfolio-container'>
            {
                data.map(({id, image, title, github}) => {
                    <article key={id} className='portfolio-item'>
                        <div className='portfolio-item-image'>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio-item-tag'>
                            <a href={github} className='btn' target='_blank'>Github</a>
                        </div>
                    </article>
                })
            }
        </div>
      </section>
    )
  }
  
  export default Portfolio