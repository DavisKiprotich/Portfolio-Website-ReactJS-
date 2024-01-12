import React from 'react'
import './About.css'
import graduation from '../../Assets/Graduation.jpeg'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {GiSwordsPower} from 'react-icons/gi'
import {GiOpenFolder} from 'react-icons/gi'

const About = () => {
  return (
    <section id="about">
    <h2>About Me</h2>
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
                  <small>4+ Gained</small>
                </article>
              <article className='about-card'>
                <GiOpenFolder className='about-icon'/>
                <h5>Projects</h5>
                <small> 3+ Completed</small>
              </article>
            </div>
            <p>I am a seasoned Front End Developer with over 2 years of expertise in crafting visually appealing and user-friendly web applications. Proficient in frameworks like React and Next.js, I seamlessly integrate with backend technologies such as Django and Node.js. My skills extend to HTML, CSS, JavaScript and Wordpress ensuring clean, efficient, and well-documented code. With a keen eye for detail and a commitment to high-quality work, I actively contribute to cross-functional teams, bringing innovative solutions to complex problems. My dynamic skill set extends to website development, emphasizing adaptability, effective communication, and continuous improvement within the Engineering team. </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About