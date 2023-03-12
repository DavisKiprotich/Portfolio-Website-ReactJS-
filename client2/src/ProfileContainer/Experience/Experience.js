import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>

      <div className='experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        
        <div className='experience-electrical'>
          <h3>Electrical Engineering</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Installation</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Design</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Audit</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Maintenance</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience