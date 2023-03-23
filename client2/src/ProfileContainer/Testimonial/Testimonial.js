import React from 'react'
import './Testimonial.css'
import Avatar1 from '../../Assets/portfolio3.jpg'
import Avatar2 from '../../Assets/portfolio4.jpg'
import Avatar3 from '../../Assets/portfolio6.jpg'
import Avatar4 from '../../Assets/portfolio6.jpg'

const data = [
  {
      avatar: Avatar1,
      name: 'Emmanuel Ushindi',
      review: 'Your design was precisely what I had envisioned: clear, clean, and focused, with an emphasis on style features.'
  },
  {
      avatar: Avatar2,
      name: 'Ramsey Korir',
      review: ''
  },
  {
      avatar: Avatar3,
      name: 'Lyn Memoi',
      review: ''
  },
  {
      avatar: Avatar4,
      name: 'Vincent',
      review: ''
  }
]


const Testimonial = () => {
  return (
    <section id='testimonial'>
        <h2>Testimonials</h2>
        <div className='testimonial-container'>
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <article className='testimonial'>
                  <div className='client-avatar'>
                      <img src={avatar} />    
                  </div>
                  <h5 className='client-name'>{name}</h5>
                  <small className='client-review'>{review}</small>
                </article>
              )
            })
          }
          
        </div>
    </section>
  )
}

export default Testimonial