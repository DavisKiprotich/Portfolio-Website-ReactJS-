import React from 'react'
import './Services.css'
import {GiCheckMark} from 'react-icons/gi'
const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>
      <div className='services-container'>
        <article className='service'>
          <div className='service-head'>
            <h3>Front-end Web Design</h3>
          </div>
          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Highly customizable web app with interactive and complex User Interfaces.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Create a dynamic, single-page web application</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Build an easily scalable feature-rich web app that can grow up to an enterprise level.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Ensure responsive design and high performance across different devices and operating systems</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service-head'>
            <h3>Cloud Engineering services</h3>
          </div>
          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Migrate and modernize applications</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Organize and optimize infrastructure and manage cost efficiently.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Maintaining the cloud infrastructure</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Manage and support network infrastructures and connections between clients</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service-head'>
            <h3>Electrical Engineering</h3>
          </div>
          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Installation of new electrical machines</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Estimation and budeting of electrical machines</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Design of single line electrical diagrams</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Electrical checkout and start up</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>System trouble shooting</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services