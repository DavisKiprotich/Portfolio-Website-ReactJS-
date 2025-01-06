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
                <small> +2 years Working</small>
                </article>
                <article className='about-card'>
                  <GiSwordsPower className='about-icon'/>
                  <h5>Skills</h5>
                  <small>10+ Gained</small>
                </article>
              <article className='about-card'>
                <GiOpenFolder className='about-icon'/>
                <h5>Projects</h5>
                <small> 8+ Completed</small>
              </article>
            </div>
            <p>I am a seasoned Front End Developer with over 2 years of expertise in crafting visually appealing and user-friendly web applications. Proficient in frameworks like React and Next.js, I'm integrating Kubernetes for orchestration, Jenkins for CI/CD, and Docker for containerization. I've automated infrastructure with Ansible, managed cloud resources on AWS using CloudFormation, and scripted with Bash. I monitor applications with Prometheus, and secure them through ethical hacking practices on Kali Linux. This roadmap showcases my ability to blend frontend expertise with backend and DevOps skills for comprehensive project development.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About