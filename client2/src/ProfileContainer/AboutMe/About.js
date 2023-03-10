import React from 'react'
import './About.css'
import graduation from '../../Assets/Graduation.jpeg'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {GiSwordsPower} from 'react-icons/gi'
import {GiOpenFolder} from 'react-icons/gi'

const About = () => {
  return (
    <section id="about">
        <div className='about-container'>
          <div className='about-me'>
            <div className='about-me-image'>
            <img src={graduation} alt='graduation-image'/>
            </div>
          </div>
          <div className='about-content'>
            <div className='about-cards'>
              <article className='about-card'>
                <MdOutlineWorkHistory className='about-icon'/>
                <h5>Experience</h5>
                <small> -1 year Working</small>
                </article>
                <article className='about-card'>
                  <GiSwordsPower className='about-icon'/>
                  <h5>Skills</h5>
                  <small>Web Design and Development</small>
                  <small>Electrical Engineering</small>
                  <small>Communication Networking</small>
                </article>
              <article className='about-card'>
                <GiOpenFolder className='about-icon'/>
                <h5>Projects</h5>
                <small> 3+ Completed</small>
              </article>
            </div>
            <p>I am an adaptable professional who has been consistently praised as hardworking and consistent by my co-workers and management.Over the course of my career, I have developed a skill set directly relevant to the role you are hiring for,including website development and design,electrical design,electrical installation and maintenance and telecommunications. </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About