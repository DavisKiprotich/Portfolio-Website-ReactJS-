import React from 'react'
import './Experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {GiPaintRoller} from 'react-icons/gi'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {MdOutlineElectricalServices} from 'react-icons/md'
import {FcElectricalSensor} from 'react-icons/fc'
import {AiOutlineAudit} from 'react-icons/ai'
import {GrVmMaintenance} from 'react-icons/gr'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>

      <div className='experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <AiOutlineHtml5 />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <GiPaintRoller />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <TbBrandJavascript />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <FaBootstrap />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience-details'>
              <SiTailwindcss />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <FaReact />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience-electrical'>
          <h3>Electrical Engineering</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <MdOutlineElectricalServices />
              <div>
                <h4>Installation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <FcElectricalSensor />
              <div>
                <h4>Design</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiOutlineAudit />
              <div>
                <h4>Audit</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <GrVmMaintenance />
              <div>
                <h4>Maintenance</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience