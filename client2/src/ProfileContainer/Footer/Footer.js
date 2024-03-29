import React from 'react'
import './Footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {IoLogoFacebook} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer-logo'>Kiprotich Davis</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='https://www.facebook.com/profile.php?id=100069188562293'><IoLogoFacebook /></a>
        <a href='https://www.twitter.com'><SiTwitter /></a>
        <a href='https://www.linkedin.com/in/davis-kiprotich-652b49243/'><FaLinkedin /></a>
      </div>

      <div className='footer-copyright'>Humble Beast</div>
    </footer>
  )
}

export default Footer