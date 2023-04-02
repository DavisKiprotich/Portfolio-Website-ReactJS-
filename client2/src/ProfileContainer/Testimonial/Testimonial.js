import React from 'react'
import './Testimonial.css'
import Avatar1 from '../../Assets/Ushindi.jpeg'
import Avatar2 from '../../Assets/portfolio4.jpg'
import Avatar3 from '../../Assets/portfolio6.jpg'
import Avatar4 from '../../Assets/portfolio6.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
      avatar: Avatar1,
      name: 'Emmanuel Ushindi',
      review: 'Davis listened to all I wanted and required in a new website and then delivered! My new website is enjoyable, interesting, and simple to use for both myself and my clients.'
  },
  {
      avatar: Avatar2,
      name: 'Ramsey Korir',
      review: 'Your design was precisely what I had envisioned: clear, clean, and focused, with an emphasis on style features.'
  },
  {
      avatar: Avatar3,
      name: 'Lyn Memoi',
      review: 'My new website is everything that I wanted. I’ve already recommended you to another client.What I liked about your design was that you started with a strategy and then carried it through.'
  },
  {
      avatar: Avatar4,
      name: 'Vincent',
      review: 'I am delighted with my new website! It appears professional and simple to use.'
  }
]



const Testimonial = () => {
  return (
    <section id='testimonial'>
        <h2>Testimonials</h2>
        <Swiper className='testimonial-container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}>
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <SwiperSlide className='testimonial'>
                  <div className='client-avatar'>
                      <img src={avatar} />    
                  </div>
                  <h5 className='client-name'>{name}</h5>
                  <small className='client-review'>{review}</small>
                </SwiperSlide>
              )
            })
          }
          
        </Swiper>
    </section>
  )
}

export default Testimonial